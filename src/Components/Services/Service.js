import React from 'react'

const URL = process.env.API_URL
//const URL = "https://localhost:5001/api/ServiceItems/"

const Service = ({ service, copy, refresh }) => {
  const bonusActivation = (e) => {
    let newvalue = service.bonusActivated
    newvalue = newvalue ? false : true
    fetch(URL + service.id, {
      method: 'PATCH',
      body: JSON.stringify({ bonusActivated: newvalue }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then((res) => {
        console.log(res.status)
        refreshCache()
        refresh()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const refreshCache = () => {
    if (caches) {
      // Service worker cache should be cleared with caches.delete()
      caches.keys().then((names) => {
        for (const name of names) {
          caches.delete(name)
        }
      })
    }
  }
  return (
    <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 mt-5 bg-white px-5 py-5 pl-5'>
      <div className='w-full md:w-2/3   flex flex-col'>
        <span className='text-2xl font-thin '>{service.siteName}</span>
        <span className='text-xs py-2'>{service.description}</span>
      </div>
      <div className=' w-full md:w-1/2  flex flex-col relative'>
        <span className='text-xs font-thin'>PROMOCODE</span>
        <input
          placeholder={`${service.itPromoCode}`}
          className='border-gray my-1 font-rub rounded border h-10 px-2 py-1'
          type='text'
        ></input>
        <div className='absolute top-1 right-1 flex items-center h-full ml-2'>
          <svg
            onClick={() => copy(`${service.itPromoCode}`)}
            width='14'
            height='16'
            viewBox='0 0 14 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10 3.5C10 3.22386 9.77614 3 9.5 3H0.5C0.223858 3 0 3.22386 0 3.5V15.5C0 15.7761 0.223858 16 0.5 16H9.5C9.77614 16 10 15.7761 10 15.5V3.5ZM8 5.5C8 5.22386 7.77614 5 7.5 5H2.5C2.22386 5 2 5.22386 2 5.5V13.5C2 13.7761 2.22386 14 2.5 14H7.5C7.77614 14 8 13.7761 8 13.5V5.5Z'
              fill='#0085FF'
            />
            <path
              d='M4 0.5C4 0.223858 4.22386 0 4.5 0H13.5C13.7761 0 14 0.223858 14 0.5V12.5C14 12.7761 13.7761 13 13.5 13H11.5C11.2239 13 11 12.7761 11 12.5V11.5C11 11.2239 11.2239 11 11.5 11C11.7761 11 12 10.7761 12 10.5V2.5C12 2.22386 11.7761 2 11.5 2H4.5C4.22386 2 4 1.77614 4 1.5V0.5Z'
              fill='#0085FF'
            />
          </svg>
        </div>
      </div>
      <div className=' w-full md:w-1/2 flex flex-col justify-end '>
        <button
          onClick={(e) => {
            bonusActivation(e)
          }}
          className=' bg-button-blue rounded text-white h-10 my-1 px-10 py-1'
        >
          {service.bonusActivated ? 'Activated' : 'Activate Bonus'}
        </button>
      </div>
    </div>
  )
}

export default Service
