import { DrawerNavigationProp } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar } from 'react-native-paper'
import { SEARCH_ICON } from '../../constants/Icon'
import { CONVERSATION_SCREEN, SEACRH_SCREEN } from '../../constants/Screen'
export default function ToolBar() {
  const navigation = useNavigation<DrawerNavigationProp<any>>()

  const onSearchBtnPress = useCallback(() => {
    navigation.navigate(SEACRH_SCREEN)
  }, [])

  const onMessengerBtnPress = useCallback(() => {
    navigation.navigate(CONVERSATION_SCREEN)
  }, [])

  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Action
        icon={'menu'}
        onPress={() => {
          navigation.openDrawer()
        }}
      />
      <Appbar.Content title='TDC Social Network' titleStyle={styles.appbarContent} />
      <Appbar.Action
        style={styles.appbarAction}
        icon='magnify'
        size={25}
        onPress={() => {
          onSearchBtnPress()
        }}
      />

      <Appbar.Action
        style={styles.appbarAction}
        icon='facebook-messenger'
        size={25}
        onPress={() => {
          onMessengerBtnPress()
        }}
      />
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 40
  },
  appbarContent: {
    color: '#0065FF', 
    fontWeight: 'bold', 
    fontSize: 20
  },
  appbarAction: {
    width: 35, height: 35
  }
})
