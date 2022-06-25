import React from 'react'
import useLyrics from '../hooks/useLyrics'

const Lyrics = () => {
    
    const { lyrics } = useLyrics()

  return (
    <div className='lyrics'>{lyrics}</div>
  )
}

export default Lyrics