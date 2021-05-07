import {Link} from 'react-router-dom';

const Country = (props) =>{
    return(
        <div className="col-sm-6 col-lg-4 col-xl-3 mb-5">
            <Link className="text-decoration-none" to={`/${props.country.name}`}>
                <div className="card border-0 shadow-lg">
                    <img src={props.country.flag} alt={props.country.name}/>
                    <div className="card-body">
                        <h4>{props.country.name}</h4>
                        <p className="m-0"><span className="font-weight-bold">Population: </span>{Intl.NumberFormat().format(props.country.population)}</p>
                        <p className="m-0"><span className="font-weight-bold">Region: </span>{props.country.region}</p>
                        <p className="m-0"><span className="font-weight-bold">Capital: </span>{props.country.capital}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Country;