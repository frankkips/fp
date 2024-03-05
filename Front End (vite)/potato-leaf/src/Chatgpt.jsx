// import axios from 'axios'
import { useState } from 'react'
import userIcon from '/user-icon.png'
import tractorIcon from '/vector.png'
import { Link } from 'react-router-dom'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'

const API_KEY = "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"

function Chatgpt(){
    const [typing , setTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            message: "Hello, how can I help you today?",
            sender: 'ChatGPT'
        }
    ])

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: 'user',
            direction: 'outgoing'
        }
        const newMessages = [...messages, newMessage];

        setMessages(newMessages);

        setTyping(true);

        await getChatGPTResponse(newMessages);
    }

async function getChatGPTResponse(chatMessage){
    let apiMessages = chatMessage.map((messageObject) => {
        let role = '';
        if(messageObject.sender === 'ChatGPT'){
            role = 'assistant';
        }else{
            role = 'user';
        }
        return {role: role, content: messageObject.message}
    })

    const systemMessage = {
        role: 'system',
        content: 'Explain in a way that a new person to the field can understand.'
    }

    const apiRequestBody = {
        "model": "gpt-3.5-turbo",
        "messages": [
            systemMessage,
            ...apiMessages
        ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization" : "Bearer " + API_KEY,
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(apiRequestBody)
    }).then((data) => {
        return data.json();
    }).then((data) => {
        console.log(data);
        console.log(data.choices[0].message.content);
        setMessages([
            ...chatMessage,{
            message: data.choices[0].message.content,
            sender: 'ChatGPT'
            }

        ])
        setTyping(false);
    })

}

    return(
        <>
        <div className='container'>
            <div className='centered-container'>
                <div className='header'>
                    <div className='logo-container'>
                        <img src={tractorIcon} width= {47} height={39}alt='logo' className='logo-img'/>
                        <h1 className='logo'>Mkulima</h1>
                    </div>
                        <ul className='list'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/chat">Chat</Link></li>
                            <li><Link to="/learn">Learn</Link></li>
                        </ul>
                    <Link to='/user/login' className='user-link'>
                        <img src={userIcon} width={50} height={50} alt='logo' className='user-icon'/>
                    </Link>
                </div>
                <div className='info-container'>
                    <div className='result-div'>
                        <div className='gpt-part'>
                            <MainContainer className='main-chat'>
                                <ChatContainer className='chat-container'>
                                    <MessageList
                                        scrollBehavior='smooth'
                                        typingIndicator={typing ? <TypingIndicator content='ChatGPT is typing...' /> : null}
                                    >
                                        {messages.map((message, i) => {
                                            return <Message key={i} model={message}/>
                                        })}
                                    </MessageList>
                                    <MessageInput placeholder='Type your message' onSend={handleSend}/>
                                </ChatContainer>
                            </MainContainer>
                        
                        </div>
                    </div>
                    <div className='leaf'>
                        

                    </div>
                    
                </div>
            
            </div>
        </div>
        </>
    )
}
export default Chatgpt;