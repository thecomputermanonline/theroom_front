import React, { useState, useEffect } from 'react'
import FlashMessage from 'react-flash-message'
import Service from './Service'

const URL = process.env.API_URL
//const URL = "https://localhost:5001/api/ServiceItems/"

const Servicelist = () => {
  const [search, setSearch] = useState('')
  const [allServices, setAllServices] = useState([])
  const [services, setServices] = useState([])
  const [update, setUpdate] = useState(true)
  const [copySuccess, setCopySuccess] = useState()
  const [message, setMessage] = useState()
  const showmessage = () => {
    //Make div show containing flash message
    setCopySuccess(true)
    //Make div hide containing flash message
    setTimeout(() => setCopySuccess(false), 5000)
  }
  const copyToClipBoard = async (copyMe) => {
    try {
      navigator.clipboard.writeText(copyMe)
      setMessage(`Copied ${copyMe} to clipboard`)
      showmessage()
    } catch (err) {
      setCopySuccess('Failed to copy!')
    }
  }

  useEffect(() => {
    async function fetchData() {
      const headers = {
        // 'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
      }
      const res = await fetch(URL, { headers }).catch(function (error) {
        const err = error
        console.log(err)
      })

      const data = await res.json()
      setAllServices(data)
      setServices(data)
    }

    fetchData()
  }, [update])
  const _onKeyUp = (e) => {
    setSearch(e.value)

    const filteredlist = allServices.filter((service) =>
      service.siteName.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setServices(filteredlist)
  }
  const handleReset = (e) => {
    e.preventDefault()
    setSearch('')
    setServices(allServices)
  }
  const updateService = () => {
    setUpdate(!update)
    setMessage('Done')
    showmessage()
  }

  return (
    <div className='flex flex-col w-full  '>
      <div className='flex flex-row  bg-white'>
        <div className='flex flex-col font-rub py-5 px-5'>
          <span className='text-xs'>Balance</span>
          <span className='font-rub'> 213 920$</span>
        </div>
        <div className='flex flex-col font-rub py-5 px-5'>
          <span className='text-xs'>Payout</span>
          <span>159 465$</span>
        </div>
      </div>
      {copySuccess && (
        <FlashMessage duration={5000}>
          <div
            className='flex bg-green-700 opacity-50  justify-center items-center mt-5 text-white
  '
          >
            {message}
          </div>
        </FlashMessage>
      )}
      <div className='mx-5 mb-5'>
        <div className='pt-5'>
          <h1>Services</h1>
          <div className='flex flex-col pt-5'>
            <span className='text-xs'>Filter</span>
          </div>
          <div className='flex flex-row'>
            <input
              value={search}
              disabled={allServices.length > 0 ? false : true}
              placeholder='Se'
              onChange={(e) => {
                _onKeyUp(e)
              }}
              className='border-gray h-10 rounded  border px-2 py-1'
              type='text'
            ></input>
            <button
              onClick={(e) => {
                handleReset(e)
              }}
              className='ml-2 rounded border-gray border px-10 py-1'
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {services.length > 0 ? (
        services.map((service, index) => (
          <Service
            service={service}
            key={index}
            copy={copyToClipBoard}
            refresh={updateService}
          />
        ))
      ) : (
        <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 mt-5 bg-white px-5 py-5 pl-5'>
          No Data Fetched
        </div>
      )}
      <hr className='w-full mt-5 h-5' />
      <div className='flex text-xxs font-rob justify-end'>
        &copy; IT Promocodes, 2019
      </div>
    </div>
  )
}

export default Servicelist
