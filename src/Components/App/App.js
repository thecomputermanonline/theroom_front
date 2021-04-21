import React, { useState } from 'react';
import Logo from '../assets/logo.svg'
import './app.styles.scss'

class App extends Component {
  render() {
    return (
      <div className='bg-main-bg flex flex-row'>
          <SideBar />

      </div>
    )
  }
}

export default App
