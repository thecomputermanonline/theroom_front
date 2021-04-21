import React from 'react';
import SideBar from './SideBar'
import '../../app.styles.scss'
import Servicelist from '../Services/ServiceList';


const App = () => {

    return (
      <div className='bg-main-bg flex flex-row'>
          <SideBar />
          <Servicelist />

      </div>
    )

}

export default App
