'use client'
import './page.css'
import { useEffect, useState } from "react"
import { CookiesProvider, useCookies } from "react-cookie"
import Chatbox from "./components/Chatbox"
export default function Chat(){
    const [sendMessage, setSendMessage] = useState()
    const [messages, setMessages] = useState([{}])

    const [cookies, setCookies, removeCookies] = useCookies(['auth'])
    useEffect(()=>{
        console.log(cookies['auth'])
    },[])

    const writeMessage = (e) => {
        console.log(e.target.value) 
    }
    return(
        <body>
            <Chatbox onChange={writeMessage}></Chatbox>
            
        </body>
    )
}