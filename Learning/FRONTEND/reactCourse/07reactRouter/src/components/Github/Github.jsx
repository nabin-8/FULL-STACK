import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const [data, setData]=useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/adyatan')
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      setData(data)
    })
  }, [])
  
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl' >Github followers: {data.followers}  {data.following} 
      <h2 className=' align-top'>Name: {data.name} </h2>
      <h2 className=' align-top'>Username: {data.login} </h2>
      <img className=' rounded-full item-center' src={data.avatar_url} alt="git picture" width={300} />
    </div>
  )
}

export default Github