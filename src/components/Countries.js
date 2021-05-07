import Country from './Country';

const Countries = (props) =>{
    return(
        <div className="w-75 m-auto">
            <div className="row">
                {props.countries.filter((country)=>country.name.toLowerCase().includes(props.search) && country.region.includes(props.filter))
                .map((country)=> 
                    <Country key={country.name} country={country}/> 
                )}
            </div>
        </div>
    )
}

export default Countries;