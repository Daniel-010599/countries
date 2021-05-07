import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Back from '../images/back.png';

const Detail = (props) =>{

    const [country, setCountry] = useState({});
    const [languages, setLanguages] = useState([]);
    const [topLevelDomain, setTopLevelDomain] = useState([]);
    const [currencies, setCurrencies] = useState([]);

    const path = window.location.pathname;

    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name${path}`)
        .then(res => res.json())
        .then((result)=>{
            setCountry(result[0]);
            setCurrencies(result[0].currencies);
            setLanguages(result[0].languages);
            setTopLevelDomain(result[0].topLevelDomain);
        })
    }, [path]);

    return(
        <div className="w-75 m-auto">
            <div className="py-5">
                <Link onClick={props.cleanSearch} to="/" className="btn-detail btn px-5 shadow-lg rounded">
                    <img className="icon mr-2" src={Back} alt="back"/>
                    <span>Back</span>
                </Link>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6 pr-md-5 mb-5 mb-md-0">
                    <img className="img-fluid" src={country.flag} alt={country.name}/>
                </div>
                <div className="col-md-6 pl-md-5">
                    <h2 className="mb-4">{country.name}</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <p><span className="font-weight-bold">Native Name: </span>{country.nativeName}</p>
                            <p><span className="font-weight-bold">Population: </span>{Intl.NumberFormat().format(country.population)}</p>
                            <p><span className="font-weight-bold">Region: </span>{country.region}</p>
                            <p><span className="font-weight-bold">Sub Region: </span>{country.subregion}</p>
                            <p><span className="font-weight-bold">Capital: </span>{country.capital}</p>
                        </div>
                        <div className="col-md-6">
                            <p><span className="font-weight-bold">Top Level Domain: </span>{topLevelDomain[0]}</p>
                            <div className="d-flex"><span className="mr-1 font-weight-bold">Currencies:</span>{currencies.map((currencie)=>
                                <p key={currencie.name}>{currencie.name},</p>
                            )}</div>
                            <div className="d-flex flex-wrap"><span className="mr-1 font-weight-bold">Languages:</span>{languages.map((language)=>
                                <p className="mr-1" key={language.name}>{language.name},</p>
                            )}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;