import { useRoute } from '@react-navigation/native'
import React from 'react'
import { FlatList, ImageBackground, Text } from 'react-native'
import ChatMessage from '../components/ChatMessage'
import chatRoomData from '../data/Chats'
import BG from '../assets/images/BG.png'
import InputBox from '../components/InputBox'
export default function ChatRoomScreen() {
    const route = useRoute()

    // console.log(route.params)
    return (
        <ImageBackground style={{ width: '100%', height: "100%" }} source={BG}>
            <FlatList data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            ></FlatList>
            <InputBox/>

        </ImageBackground>

    )
}
