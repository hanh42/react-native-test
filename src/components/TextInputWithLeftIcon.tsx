import { StyleSheet, View, TextInput } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useIsFocused } from '@react-navigation/native'

interface TextInputWithLeftIconProps {
  onTextChange: (value: string) => void
}

export default function TextInputWithLeftIcon({ onTextChange }: TextInputWithLeftIconProps): JSX.Element {
  const searchInputRef = useRef<TextInput | null>(null)
  const focus = useIsFocused()

  useEffect(() => {
    if (focus) {
      searchInputRef.current?.focus()
    }
  }, [focus])

  return (
    <View style={styles.inputWrapper}>
      <Icon style={{ marginLeft: 10 }} name='search' size={25} />
      <TextInput
        autoFocus={true}
        onChangeText={(value) => onTextChange(value)}
        ref={searchInputRef}
        placeholder='Search...'
        style={styles.searchInput}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  }
})
