import React from 'react';
import Logo from '../../assets/logo.svg';
import Menu from './Menu';


const SideBar = () => (
    <div className='flex flex-col h-screen w-20  pt-5 px-5 bg-dark-bg'>

        <a href={'https://#!'}>
            <Logo  />

        </a>

        <Menu/>

    </div>

);

export default SideBar;