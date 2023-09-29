import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export const TASK_COLORS = {
  white: '#fff',
  red: '#f48882',
  blue: '#afc9fb',
  green: '#cffd91'
}

interface InputColorProps {
  selectColor?: string
  onChangeValue: (value: string) => void
}

export default function InputColor({ selectColor, onChangeValue }: InputColorProps) {
  const [color, setColor] = useState(selectColor ? selectColor : TASK_COLORS.white)

  useEffect(() => {
    if (selectColor) {
      setColor(selectColor)
    }
  }, [selectColor])

  return (
    <View style={styles.colorInput}>
      <Pressable
        style={[styles.inputColorItem, styles.inputWhite]}
        onPress={() => {
          onChangeValue(TASK_COLORS.white)
          setColor(TASK_COLORS.white)
        }}
      >
        {color === TASK_COLORS.white && <Icon name={'check'} size={25} />}
      </Pressable>

      <Pressable
        style={[styles.inputColorItem, styles.inputRed]}
        onPress={() => {
          onChangeValue(TASK_COLORS.red)
          setColor(TASK_COLORS.red)
        }}
      >
        {color === TASK_COLORS.red && <Icon name={'check'} size={25} />}
      </Pressable>

      <Pressable
        style={[styles.inputColorItem, styles.inputBlue]}
        onPress={() => {
          onChangeValue(TASK_COLORS.blue)
          setColor(TASK_COLORS.blue)
        }}
      >
        {color === TASK_COLORS.blue && <Icon name={'check'} size={25} />}
      </Pressable>

      <Pressable
        style={[styles.inputColorItem, styles.inputGreen]}
        onPress={() => {
          onChangeValue(TASK_COLORS.green)
          setColor(TASK_COLORS.green)
        }}
      >
        {color === TASK_COLORS.green && <Icon name={'check'} size={25} />}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  inputColorItem: {
    height: 50,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  colorInput: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    fontSize: 20,
    margin: 10
  },
  inputWhite: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  inputRed: {
    backgroundColor: '#f48882'
  },
  inputBlue: {
    backgroundColor: '#afc9fb'
  },
  inputGreen: {
    backgroundColor: '#cffd91',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  }
})
