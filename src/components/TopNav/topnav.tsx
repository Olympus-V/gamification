import './topNav.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import RocketLaunchTwoToneIcon from '@mui/icons-material/RocketLaunchTwoTone';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';

const TopNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Function to determine if a menu item is active based on the current pathname
    const isMenuItemActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <nav className='top-nav'>
            <img src={`${process.env.PUBLIC_URL}/app_logo_transparent.png`} alt='App Logo' className='logo'/>
            <ul>
                <li onClick={() => { navigate('/home') }} className={isMenuItemActive('/home') ? 'active' : ''}>
                    <HomeTwoToneIcon fontSize='medium' /> Home
                </li>

                <li onClick={() => { navigate('/games') }} className={isMenuItemActive('/games') ? 'active' : ''}>
                    <RocketLaunchTwoToneIcon fontSize='medium' /> Games
                </li>
                <li onClick={() => { navigate('/cart') }} className={isMenuItemActive('/cart') ? 'active' : ''}>
                    <LocalGroceryStoreTwoToneIcon fontSize='medium' /> Cart
                </li>
                <li onClick={() => { navigate('/about') }} className={isMenuItemActive('/about') ? 'active' : ''}>
                    <BadgeTwoToneIcon fontSize='medium' /> About
                </li>
            </ul>
        </nav>
    );
};


export default TopNav;
