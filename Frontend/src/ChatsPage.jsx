import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props)=>{
    const chatProps = useMultiChatLogic(
        'e70a29e4-731c-4847-960a-34beb64f4ffe', 
        props.user.username, 
        props.user.secret
        );

    return <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div>
}

export default ChatsPage