import { useState, createContext } from "react";
import axios from "axios";

const LyricsContext = createContext();

const LyricsProvider = ({children}) => {

    const [warning, setWarning] = useState("");
    const [lyrics, setLyrics] = useState("");
    const [loading, setLoading] = useState(false)

    const lyricSearch = async (search) => {
        setLoading(true)
        try {
            const { artist, song} = search
            const url = `https://api.lyrics.ovh/v1/${artist}/${song}`
            const {data} = await axios.get(url)
            setLyrics(data.lyrics)
            setWarning("")
        } catch (error) {
            setWarning("No lyrics found, please check for spelling mistakes")
        }
        setLoading(false)
    }

    return (
        <LyricsContext.Provider
            value={{
                warning,
                setWarning,
                lyricSearch,
                lyrics,
                loading,
                setLyrics
            }}
        >
            {children}
        </LyricsContext.Provider>
    )
};

export {
    LyricsProvider
}

export default LyricsContext