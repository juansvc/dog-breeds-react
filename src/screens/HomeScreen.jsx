import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { HOMESCREEN_API_URL } from '../utils/consts'

import HomeDogsSection from '../components/HomeDogsSection'
import Loader from '../containers/Loader'

function HomeScreen() {

  const [dogs, setDogs] = useState()

  let popularDogs
  
  useEffect(() => {
      getDogs()
        .then(data => {
          console.log(data)
          setDogs(data)
        })
        .catch(err => console.log(err))
  }, []);


  if (dogs) {
    popularDogs = Object.keys(dogs)
  }

  return (
    <>
      {
        dogs ?
          <>
            <section className='container px-5 mx-auto'>
              <HomeDogsSection header={'Dog Breeds'} dogs={popularDogs} />
            </section>
          </>
          :
          <>
            <Loader />
          </>
      }
    </>
  )
}

export default HomeScreen

const getDogs = async () => {
  const response = await axios.get(HOMESCREEN_API_URL)
  return response.data.message
}