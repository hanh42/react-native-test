import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Pressable, PressableProps, StyleProp, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

interface IconButtonProps {
  iconName: string
  iconColor?: string
  iconSize?: number
  onPress: () => void
  activeBackgroundColor?: string
  inactiveBackgroundColor?: string
  activeIconColor?: string
  inactiveIconColor?: string
  customStyle?: StyleProp<ViewStyle>
  width?: number
  height?: number
  borderRadius?: number
}

export default function IconButton(props: IconButtonProps) {
  const [pressed, setPress] = useState(false)

  const btnStyle = useMemo<StyleProp<ViewStyle>>(() => {
    return {
      alignItems: 'center',
      justifyContent: 'center',
      width: props.width ?? 42,
      height: props.height ?? 42,
      borderRadius: props.borderRadius ?? 999,
      backgroundColor: pressed ? props.activeBackgroundColor ?? '#fff' : props.inactiveBackgroundColor ?? '#000'
    }
  }, [pressed])

  const iconColorStr = useMemo<string>(() => {
    return props.iconColor ?? (pressed ? props.activeIconColor ?? '#000' : props.inactiveIconColor ?? '#fff')
  }, [pressed])

  return (
    <Pressable
      onPressIn={() => setPress(true)}
      onPressOut={() => setPress(false)}
      style={({ pressed }) => [props.customStyle, btnStyle]}
      onPress={props.onPress}
    >
      <Icon name={props.iconName} size={props.iconSize ?? 20} color={iconColorStr} solid/>
    </Pressable>
  )
}
