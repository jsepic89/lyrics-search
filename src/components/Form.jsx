import { useState } from "react";
import useLyrics from "../hooks/useLyrics";


const Form = () => {

    const { setWarning, lyricSearch, setLyrics } = useLyrics()

    const [search, setSearch] = useState({
        artist: "",
        song: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        setLyrics("")
        setWarning("")
        if(Object.values(search).includes("")){
            setWarning("Please complete both fields")
            return
        }
        lyricSearch(search);
    }

  return (
    <form
        onSubmit={handleSubmit}
    >
        <legend>Search the lyrics of any song!</legend>

        <div className="form-grid">
            <div>
                <label>Artist</label>
                <input 
                    type="text"
                    name="artist"
                    placeholder="Artist/Band name"
                    value={search.artist}
                    onChange={ e => setSearch({
                        ...search,
                        [e.target.name]: e.target.value
                    })}
                />
            </div>
            <div>
                <label>Song</label>
                <input 
                    type="text"
                    name="song"
                    placeholder="Song name"     
                    value={search.song}
                    onChange={ e => setSearch({
                        ...search,
                        [e.target.name]: e.target.value
                    })}
                />
            </div>

            <input type="submit" value="Search" />
        </div>
    </form>
  )
}

export default Form