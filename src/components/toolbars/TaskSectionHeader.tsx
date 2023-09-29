import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TaskSectionHeader({ title }: any) {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'flex-start'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    marginVertical: 5,
    marginLeft: 10
  }
})
