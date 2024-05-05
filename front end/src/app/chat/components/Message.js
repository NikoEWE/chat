import { useState } from 'react'
import './Chatbox.css'
export default function Message(){
    const [isSender, setIsSender] = useState(true)
    
    return(
        isSender ? <div>yes</div> : <div>no</div>
        
    )
}