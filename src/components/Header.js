import {useState} from 'react';
import iconLight from '../images/lunalight.png';
import iconDark from '../images/luna.png';

const Header = () =>{

    const [icon, setIcon] = useState(false);

    const handleClick = (e) =>{
        e.preventDefault();
        document.body.classList.toggle('dark-mode');
        setIcon(!icon);
    }

    return(
        <div className="header shadow-sm py-3">
            <div className="w-75 m-auto d-flex justify-content-between align-items-center">
                <h3 className="m-0">¿Where in the world?</h3>
                <button onClick={handleClick} className="border-0 d-flex align-items-center">
                    <img className="icon mr-2" src={icon?iconDark:iconLight} alt="icon"/>
                    <span>Dark Mode</span>
                </button>
            </div>
        </div>
    )
}

export default Header;