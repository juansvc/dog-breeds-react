import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../containers/Loader'

const HomeDogsSection = (props) => {

    const { header, dogs } = props  
    const [dogsImgs, setDogsImgs] = useState([])

    useEffect(() => {
        fetchApi()
        console.log(dogs.length)
    }, []);

    const fetchApi = () => {
        const newState = []
        dogs.forEach(dog => {
            getDogs(dog)
            .then(data => {
            console.log(data)
            newState[dog] = data
            })
            .catch(err => console.log(err))
        })
        setDogsImgs(newState)
    }

    if (dogsImgs){
        console.log(dogsImgs)
    }

    return (
        <>
            <div>
                <h1 className='text-left text-gray-700 text-2xl py-2 sm:pt-10 font-bold '>
                    {header}
                </h1>
            </div>
            <div className='flex flex-wrap flex-row'>
                {dogsImgs ?
                    dogs.map((dog) => (
                        <div
                            className='xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-full w-1/3 py-2'
                            key={dog}
                        >
                            <div>
                                <div className='p-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gray-800 cursor-pointer rounded-lg'>
                                    <img className='rounded-lg w-full object-contain mb-1' 
                                      src={dogsImgs[dog]} alt='content' />
                                    <div className='min-h-full h-14'>
                                        <h2 className='text-left mt-2 
                                             text-white capitalize font-medium title-font'>
                                            {dog}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                : <Loader />}
            </div>
        </>
    )
}

export default HomeDogsSection        

const getDogs = async (dog) => {
  const response = await axios.get(`https://dog.ceo/api/breed/${dog}/images/random`)
  return response.data.message
}