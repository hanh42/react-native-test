import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'

const AVATAR_HEIGHT = 30
const BACKGROUND_COLOR = '#f0f0f0'

interface MessageReceivedItemProps {
    showDate: boolean
}

export default function MessageReceivedItem({showDate}: MessageReceivedItemProps) {
    return (
        <View style={styles.body}>
            <View style={styles.mainContentGroup}>
                <Avatar.Image size={AVATAR_HEIGHT} source={{ uri: 'https://i.stack.imgur.com/bl1g5.png?s=192&g=1' }} />
                <View style={styles.messageContentGroup}>
                    <Text style={styles.messageTextContent}>Lorem ipsum dolor sit amet consectetur.
                        Lorem ipsum dolor sit amet consectetur.</Text>
                </View>
            </View>
            <Text style={[styles.messageDate, {display: showDate ? 'flex' : 'none'}]}>6:45 AM</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        marginTop: 10,
        width: 300
    },
    mainContentGroup: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    messageContentGroup: {
        backgroundColor: BACKGROUND_COLOR,
        paddingHorizontal: 20,
        borderRadius: 20,
        justifyContent: 'center',
        padding: 10,
        marginStart: 10
    },
    messageTextContent: {
        color: '#000',
        fontSize: 16
    },
    messageDate: {
        marginStart: AVATAR_HEIGHT + 25,
        fontSize: 12,
        marginTop: 7,
        marginBottom: 10
    }
})