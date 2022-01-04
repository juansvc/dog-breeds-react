import React from 'react'

import './Header.scss'

const Header = () => {
  return (
    <>
    <div className='block w-full text-white bg-gray-900'>
      <div className='flex justify-between'>
        <div className='flex flex-row py-4'>
          <a
            className='text-2xl text-white lg:text-3xl hover:text-gray-100'
            href='#'>
            Dog's R Us
              </a>
        </div>
        <div className='flex flex-row text-left pt-3'>
          <div>
            <a className='flex mx-2 my-1 rounded p-2 px-4 hover:bg-gray-800' href='#'>
            </a>
          </div>
        </div>
        <div className='mt-2 flex flex-col'>
          <a href='https://github.com/juansvc' 
							className='mx-2 text-sm text-gray-600 hover:text-gray-500' 
							aria-label='GitHub'
              target='_blank'>
            Home
          </a>

          <a href='https://juansvc.netlify.app' 
							className='mx-2 text-sm text-gray-600 hover:text-gray-500'
	            aria-label='Portfolio'
              target='_blank'>
            About
          </a>
          <a href='#' 
							className='mx-2 text-sm text-gray-600 hover:text-gray-500'
	            aria-label='Contact Us'
              target='_blank'>
            Contact Us
          </a>
        </div>
      </div>
    </div>

    <div className='block w-full text-white bg-gray-900'>
      <div className='sm:inline-block md:flex lg:flex xl:flex justify-between'>
        <div className='sm:inline-block md:flex lg:flex xl:flex flex-row py-4 whitespace-pre-wrap dogs-header'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis diam et tortor auctor bibendum. Morbi luctus, nunc eu aliquam faucibus, nibh ex fermentum odio, quis fringilla lorem sem quis est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam viverra eros ante, at interdum lacus faucibus et. Sed vulputate, dolor vel tristique mattis, tortor quam fermentum magna, vitae feugiat lectus libero ac lacus. Mauris luctus orci id auctor iaculis. Vivamus ac elementum velit. Cras tincidunt leo vitae dictum aliquam.<br/>
        Fusce tortor risus, dignissim cursus risus ut, maximus fringilla odio. Proin justo magna, aliquam at volutpat vel, posuere a odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate eu sem placerat consequat. Maecenas vehicula eros sed congue sollicitudin. Quisque mollis sapien at nisi fringilla, non accumsan nisl hendrerit. Nam a magna vel ipsum molestie suscipit. Nullam sit amet orci augue.         
        </div>
        <div className='sm:inline-block md:flex lg:flex xl:flex flex-row text-left pt-3 dogs-header'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/s_uiya1WsQ0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header