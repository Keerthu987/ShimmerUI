import React from 'react'

const MemeCard = ({data}) => {
  const {url,title,author}=data;
  return (
    <div className=' p-2 m-5 bg-gray-50 shadow-xl w-52'  >
        <img alt='' src={url || "https://static01.nyt.com/images/2022/01/31/crosswords/31meme-wordplay/31meme-wordplay-mediumSquareAt3X.png"} className=' w-52 h-52 pb-5' />
        <p className=' mx-3 text-left text-sm pb-3' >{title}</p>
        <p className='text-right font-bold	px-4 '>{author}</p>
    </div>
  )
}

export default MemeCard