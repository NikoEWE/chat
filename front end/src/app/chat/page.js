'use client'
import './page.css'
import { useEffect, useState } from "react"
import { CookiesProvider, useCookies } from "react-cookie"
import Chatbox from "./components/Chatbox"
export default function Chat(){
    const [sendMessage, setSendMessage] = useState()
    const [messages, setMessages] = useState([{}])

    const [cookies, setCookies, removeCookies] = useCookies(['auth'])
    const client = createAxiosInstance({
        baseURL: 'https://v2.jokeapi.dev/joke'
      });
    useEffect(()=>{
        setMessages(client)
        
    },[])

    const writeMessage = (e) => {
        console.log(messages)
    }
    return(
        <body>
            {message && <p>{message}</p>}
            <Chatbox onChange={writeMessage}></Chatbox>
            
        </body>
    )
}