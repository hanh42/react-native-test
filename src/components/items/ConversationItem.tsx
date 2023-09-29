import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Avatar } from 'react-native-paper'

export default function ConversationItem() {
    const [active, setActive] = useState(false)

    const onItemPressIn = useCallback(() => {
        setActive(true)
    }, [])

    const onItemPressOut = useCallback(() => {
        setActive(false)
    }, [])

    return (
        <Pressable style={[styles.body, { backgroundColor: active ? '#f6f6f6' : '#fff' }]} onPressIn={onItemPressIn} onPressOut={onItemPressOut}>
            <View style={styles.avatarGroup}>
                <Avatar.Image size={60} source={{ uri: 'https://i.stack.imgur.com/bl1g5.png?s=192&g=1' }} />
                <View style={styles.activeSignal} />
            </View>
            <View style={styles.conversationContentGroup}>
                <Text style={styles.userFullnameTitle}>Nguyễn Thị A</Text>
                <Text style={styles.conversationContent}>Chào bạn, dạo này bạn khỏe không ?</Text>
            </View>
            <View style={styles.conversationExtraInfoGroup}>
                <Text style={styles.conversationTime}>6:45 AM</Text>
                <Text style={styles.conversationCountNewMessage}>2</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    body: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    avatarGroup: {
        position: 'relative',
        backgroundColor: '#eee',
        borderRadius: 999
    },
    activeSignal: {
        width: 8,
        height: 8,
        borderRadius: 999,
        backgroundColor: '#00ea5f',
        position: 'absolute',
        left: (30 + 30 / Math.SQRT2)- 4,
        top: (30 + 30 / Math.SQRT2) - 4
    },
    conversationContentGroup: {
        display: 'flex',
        justifyContent: 'center',
        marginStart: 7
    },
    userFullnameTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 10
    },
    conversationContent: {

    },
    conversationExtraInfoGroup: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 'auto'
    },
    conversationTime: {
        fontSize: 12,
        marginBottom: 10
    },
    conversationCountNewMessage: {
        width: 24,
        height: 24,
        lineHeight: 24,
        textAlign: 'center',
        borderRadius: 999,
        backgroundColor: '#F70029',
        color: '#ffffff',
        fontWeight: 'bold'
    }
})