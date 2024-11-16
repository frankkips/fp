// import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'
import axios from 'axios'
import Header from './Header'

const API_KEY = "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"

function Chatgpt(){
    const [user, setUser] = useState()
    const [typing , setTyping] = useState(false);
    const [messages, setMessages] = useState([])

    let messageToSend;

     // Update initial message when user state changes
    useEffect(() => {
        if (user) {
            setMessages([
                {
                    message: `Hello ${user}, how can I help you today?`,
                    sender: 'ChatGPT'
                }
            ]);
        }
        else{
            setMessages([
                {
                    message: 'Hello, how can I help you today?',
                    sender: 'ChatGPT'
                }
            ]);
        }
    }, [user, messageToSend]);

    axios.defaults.withCredentials = true
    

    useEffect(() => {
        axios.get('http://localhost:3001/')
        .then(res => {
            if (res.data.valid === true){
                setUser(res.data.username)
            }else{
                setUser(null)
            }
            
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

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
                <Header/>
                <div className='info-container'>
                    <div className='result-div'>
                        <div className='gpt-part'>
                            <MainContainer className='main-chat'>
                                <ChatContainer className='chat-container'>
                                    <MessageList
                                        scrollBehavior='smooth'
                                        typingIndicator={typing ? <TypingIndicator content='ChatBot is typing...' /> : null}
                                    >
                                        {messages.map((message, i) => {
                                            return <Message key={i} model={message}/>
                                        })}
                                    </MessageList>
                                    <MessageInput attachButton = {false} placeholder='Type your message' onSend={handleSend}/>
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