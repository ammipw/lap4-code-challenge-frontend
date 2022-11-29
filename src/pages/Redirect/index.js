import React, { useEffect } from 'react'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

export default function Redirect() {

    const { shortUrl } = useParams()
    console.log(shortUrl);
    const navigate = useNavigate()

    const getLongUrl = async (url) => {
        const urldata = await axios.get(`http://127.0.0.1:8000/urls/${url}`)
        console.log(urldata.data.fields.long_url);
        window.location.assign(urldata.data.fields.long_url)
    }
    
    useEffect(() => {
        getLongUrl(shortUrl)
    }, [])

    return (
    <div>Redirect</div>
    )
}
