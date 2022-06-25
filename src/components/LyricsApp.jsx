import React from 'react'
import Form from './Form'
import useLyrics from '../hooks/useLyrics'
import Warning from './Warning'
import Lyrics from './Lyrics'

const LyricsApp = () => {

    const {warning, lyrics, loading} = useLyrics()

    return (
        <>
            <header>lyrics search engine</header>
            <Form />
            <main>
                {warning ? <Warning>{warning}</Warning> : 
                lyrics ? <Lyrics /> : 
                loading ? <div class="spinner">
                            <div class="rect1"></div>
                            <div class="rect2"></div>
                            <div class="rect3"></div>
                            <div class="rect4"></div>
                            <div class="rect5"></div>
                        </div> :
                <p className='text-center'>Find your favorite lyrics!</p>
                }
            </main>
        </>
        
    )
}

export default LyricsApp