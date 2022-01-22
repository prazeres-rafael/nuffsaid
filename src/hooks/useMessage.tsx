import {useState, useEffect} from 'react';
import generateMessage, { Message } from '../Api';

export function useMessage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [getMessages, setGetMessages] = useState<boolean>(true);

    useEffect(() => {
        if(getMessages) {
            const cleanUp = generateMessage((message: Message) => {
                setMessages(oldMessages => [...oldMessages, message]);
            });
            return cleanUp;
        } 
    }, [getMessages])

    return {messages, setMessages, getMessages, setGetMessages}
}