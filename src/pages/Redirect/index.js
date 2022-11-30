import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

export default function Redirect() {

    const { shortUrl } = useParams()
    const navigate = useNavigate()

    const getLongUrl = async (url) => {
        try {
            const urldata = await axios.get(`http://127.0.0.1:8000/urls/${url}`)
            console.log(urldata);
            if(urldata.data.fields.long_url)
            window.location.assign(urldata.data.fields.long_url)
        } catch (error) {
            navigate("/")
        }
    }
    
    useEffect(() => {
        getLongUrl(shortUrl)
    }, [])

    return (
    <div>Redirect</div>
    )
}
