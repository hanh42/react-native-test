import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ConversationItem from '../items/ConversationItem'

export default function ConversationListView() {
    return (
        <ScrollView>
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
        </ScrollView>
    )
}

const styles = StyleSheet.create({})