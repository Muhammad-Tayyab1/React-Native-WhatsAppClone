import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ChatRoom } from '../../types'
import styles from './style';

export type ChatListItemProps = {
    chatRoom: ChatRoom
}

export default function ChatListItem(props: ChatListItemProps) {
    const { chatRoom } = props;
    const user: any = chatRoom.users[1]

    const navigation = useNavigation()
    const onClick = () => {
        navigation.navigate('ChatRoom',{id: chatRoom.id, name: user.name})
    }
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>

                <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}</Text>

            </View>
        </TouchableWithoutFeedback>
    )
}
