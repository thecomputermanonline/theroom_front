import React from 'react';
import MenuIcon from '../../assets/menu.svg';

const MenuLists = [
    {
        id: '1',
        name: 'Dasboard',
    url: 'http://#!',
    },
    {
        id: '2',
        name: 'Reports',
        url: 'http://#!',
    },
    {
        id: '3',
        name: 'Statistics',
        url: 'http://#!',
    },
    {
        id: '4',
        name: 'Offers',
        url: 'http://#!',
    },
    {
        id: '5',
        name: 'Tools',
        url: 'http://#!',
    },
    {
        id: '6',
        name: 'Developers',
        url: 'http://#!',
    },
    {
        id: '7',
        name: 'Services',
        url: 'http://#!',
    },
    {
        id: '8',
        name: 'Finances',
        url: 'http://#!',
    },
]

const Menu = () => (
    <div>
        {MenuLists.map(item => (
            <a className='bg-white' href={'https://#!'} key={item.id} title={`${item.name}`}>
                <MenuIcon/>
            </a>
        ))}
    </div>
);

export default Menu;