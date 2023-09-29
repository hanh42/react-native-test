import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { MenuOption } from 'react-native-popup-menu'
import Icon from 'react-native-vector-icons/FontAwesome5'
import GlobalStyles from '../styles/GlobalStyles'

interface MenuOptionProps {
  onSelect?: any
  icon: string
  text: string
  customIconColor?: string
  customTextColor?: string
}

export default function CustomizedMenuOption({
  onSelect,
  icon,
  text,
  customIconColor,
  customTextColor
}: MenuOptionProps) {
  return (
    <MenuOption style={styles.menuOption} onSelect={onSelect}>
      <Icon name={icon} color={customIconColor} size={14} />
      <Text style={[{ marginStart: 5 }, { color: customTextColor }]}>{text}</Text>
    </MenuOption>
  )
}

const styles = StyleSheet.create({
  menuOption: { flexDirection: 'row', alignItems: 'center', padding: 10 }
})
