import React, { useState } from 'react'
import axios from "axios"
import './style.css'

export default function Home() {

    const [ longUrl, setLongUrl ] = useState("")
    const [ shortUrl, setShortUrl ] = useState("")

    // useEffect(() => {

    // }, [shortUrl])

    const getShortUrl = async (url) => {
        const urldata = await axios.post('http://127.0.0.1:8000/urls/create/', {long_url: url})
        setShortUrl(urldata.data.fields.short_url)
    }

    const handleSubmit = e => {
        e.preventDefault()
        getShortUrl(longUrl)
    }

    const handleChange = e => {
        setLongUrl(e.target.value)
    }

    return (
    <div className='Home'>
        <div className='content'>
            <h1>YooRL</h1>
            <p>URL shortener</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="long_url" onChange={handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
            <p>Short url: <a href={shortUrl}>{shortUrl}</a></p>
        </div>
    </div>
    )
}
