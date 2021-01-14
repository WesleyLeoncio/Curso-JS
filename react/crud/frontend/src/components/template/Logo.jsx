import React from 'react';
import './Logo.css';
import logoImg from '../../assets/imgs/logo.png';
import { Link } from 'react-router-dom';

const logo = (props) =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logoImg} alt="logo" />
        </Link >
    </aside>


export default logo;