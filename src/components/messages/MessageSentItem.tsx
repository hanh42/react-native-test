import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'

const AVATAR_HEIGHT = 30
const BACKGROUND_COLOR = '#6942f4'

interface MessageSentItemProps {
    showDate: boolean
}

export default function MessageSentItem({showDate}: MessageSentItemProps) {
    return (
        <View style={styles.body}>
            <View style={styles.mainContentGroup}>
                <View style={styles.messageContentGroup}>
                    <Text style={styles.messageTextContent}>Lorem ipsum dolor sit amet consectetur.
                        Lorem ipsum dolor sit amet consectetur.</Text>
                </View>
                <Avatar.Image size={AVATAR_HEIGHT} source={{ uri: 'https://i.stack.imgur.com/bl1g5.png?s=192&g=1' }} />
            </View>
            <Text style={[styles.messageDate, {display: showDate ? 'flex' : 'none'}]}>6:45 AM</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        marginTop: 10,
        marginStart: 'auto',
        marginEnd: 10,
        width: 300
    },
    mainContentGroup: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginEnd: 15
    },
    messageContentGroup: {
        backgroundColor: BACKGROUND_COLOR,
        paddingHorizontal: 20,
        borderRadius: 20,
        justifyContent: 'center',
        padding: 10,
        marginEnd: 10
    },
    messageTextContent: {
        color: '#fff',
        fontSize: 16
    },
    messageDate: {
        marginStart: 'auto',
        marginEnd: AVATAR_HEIGHT + 25,
        fontSize: 12,
        marginTop: 7,
        marginBottom: 10
    }
})