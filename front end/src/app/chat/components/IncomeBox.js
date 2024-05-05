import Message from './Message'

import './Chatbox.css'
export default function IncomeBox({children, ...props}){
    return(
        <div className='incomeBox'>
            <Message></Message>
            {children}
        </div>
    )
}