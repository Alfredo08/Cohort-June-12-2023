import './navigation.css';

const Navigation = () => {
    return (
        <div className="navigation">
            <h2> Profile </h2>
            <ul className='navigation-options'>
                <li> Home </li>
                <li> My Profile </li>
                <li> 
                    <button className='btn'> Signout </button>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;