import { DrawerNavigationProp } from '@react-navigation/drawer'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SEARCH_ICON } from '../../constants/Icon'
import IconButton from '../buttons/IconButton'

interface ToolbarWithSearchIconProps {
  title: string
}

export default function ToolbarWithSearchIcon({ title }: ToolbarWithSearchIconProps) {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>()
  return (
    <View style={styles.toolbarBody}>
      <IconButton
        iconSize={18}
        iconName='chevron-left'
        iconColor='#000'
        onPress={() => navigation.goBack()}
        inactiveBackgroundColor='#ffffff00'
        activeBackgroundColor='#ffffff1a'
        customStyle={styles.backBtnStyle}
      />

      <Text style={styles.toolbarTitle}>{title}</Text>

      <IconButton
        iconSize={18}
        iconName='search'
        iconColor='#000'
        onPress={() => navigation.goBack()}
        inactiveBackgroundColor='#ffffff00'
        activeBackgroundColor='#ffffff1a'
        customStyle={styles.searchBtnStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  toolbarBody: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9'
  },
  toolbarTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'
  },
  backBtnStyle: {
    position: 'absolute',
    left: 10,
    zIndex: 99
  },
  searchBtnStyle: {
    position: 'absolute',
    right: 10,
    zIndex: 99
  }
})
