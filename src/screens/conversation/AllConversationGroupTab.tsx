import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import ConversationItem from '../../components/items/ConversationItem'
import { ScrollView } from 'react-native-gesture-handler'
import ConversationListView from '../../components/listviews/ConversationListView'

export default function AllConversationGroupTab() {
  return (
    <ConversationListView />
  )
}

const styles = StyleSheet.create({

})