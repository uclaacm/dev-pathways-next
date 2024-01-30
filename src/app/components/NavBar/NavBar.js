import React from 'react';
import './NavBar.css';
import logo from './acm_logo.svg'
import IconButton from '../IconButton/IconButton';
import ResourceButton from '../ResourceButton/ResourceButton';
import { useRouter } from 'next/navigation';
// import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    // const navigate = useNavigate();
    const router = useRouter()
    return (
        <div>
            <div className="nav-container">
                <div className="element-container">
                    <IconButton
                        text="Dev Pathways"
                        icon={logo}
                        alt="acm logo"
                        onClick={() => router.push("/")} />
                </div>
                <div className="element-container resource-btn">
                    <ResourceButton
                        text="Resources"
                        onClick={() => router.push("/archive")}
                    />
                </div>
            </div>
        </div>
    );
}

export default NavBar;
