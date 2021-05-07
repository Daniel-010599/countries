import iconLight  from '../images/lupa.png';

const Search = (props) =>{

    const handleChange=(e)=>{
        props.handleSearch(e.target.value);
    }

    const handleClick = (e) =>{
        props.handleFilter(e.target.value);
    }

    return(
        <div className="w-75 m-auto d-flex justify-content-between py-4 flex-wrap align-items-center">
            <div className="search shadow-lg py-2 px-4 rounded d-flex align-items-center mw-100">
                <img className="icon mr-3" src={iconLight} alt="icon"/>
                <input className="border-0 w-100" type="text" onChange={handleChange} placeholder="Search for a country ..."/>
            </div>
            <select className="border-0 rounded shadow-lg p-2 my-3" onChange={handleClick}>
                <option hidden>Filter by Region</option>
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
        </div>
    )
}

export default Search;