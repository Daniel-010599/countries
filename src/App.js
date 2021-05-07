import './App.css';
import Countries from './components/Countries';
import Header from './components/Header';
import Search from './components/Search';
import Detail from './components/Detail';
import {useEffect, useState} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(()=>{

    fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then((result)=>{
            setCountries(result);
        });

  },[]);

  const handleSearch = (country) =>{
    setSearch(country);
  }

  const handleFilter = (region) =>{
    setFilter(region);
  }

  const cleanSearch = () =>{
    setSearch('');
  }

  return (
    <Router>
          <Header/>

          <Route exact path="/">
            <Search handleFilter={handleFilter} handleSearch={handleSearch}/>
            <Countries filter={filter} search={search} countries={countries}/>
          </Route>

          <Route path="/:id">
            <Detail cleanSearch={cleanSearch}/>
          </Route>
    </Router>
  );
}

export default App;
