import './Chatbox.css' 
import IncomeBox from './IncomeBox'

export default function Chatbox({items, onChange,...props}){
    return(
        <div className='mainBox'>
            <IncomeBox/>
            <input placeholder="message" onChange={onChange} className='inputChat'/><button className='sendButtonChat' onClick={0}>Send it</button> 
        </div>
    )

}