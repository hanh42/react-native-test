import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MessageGroupTitle() {
  return (
    <View style={styles.body}>
      <Text>T5 Thg 9 28</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
        borderWidth: 1,
        borderColor: '#f0f0f0',
        width: 200,
        marginStart: 'auto',
        marginEnd: 'auto',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        padding: 2,
        borderRadius: 999
    }
})