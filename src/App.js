import { Component } from 'react'
import Logo from './assets/logo.svg'
import './app.styles.scss'

class App extends Component {
  render() {
    return (
      <div className='flex items-center justify-center h-screen'>
            <div className={'bg-red-500 text-white'}>
              process.env.API_URL:{process.env.API_URL}
            </div>
            <div className={'container mx-auto px-4'}>
              <a href={'#!'}>
                <Logo className={'mt-10 px-10'} />
              </a>
            </div>

      </div>
    )
  }
}

export default App
