import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import MessageGroupTitle from '../components/messages/MessageGroupTitle'
import MessageSentItem from '../components/messages/MessageSentItem'
import MessageReceivedItem from '../components/messages/MessageReceivedItem'
import { PURPLE_COLOR } from '../constants/Color'
import IconButton from '../components/buttons/IconButton'

// man hinh nhan tin
export default function MessengerScreen() {
  const ref = useRef<ScrollView>(null)
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollToEnd()
    }
  }, [isKeyboardVisible])

  return (
    <View style={styles.body}>
      <ScrollView ref={ref} showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView
          style={{ flex: 1 }} enabled>
          <MessageGroupTitle />
          <MessageSentItem showDate={false} />
          <MessageSentItem showDate={true} />
          <MessageReceivedItem showDate={false} />
          <MessageReceivedItem showDate={true} />
          <MessageGroupTitle />
          <MessageReceivedItem showDate={false} />
          <MessageReceivedItem showDate={true} />
          <MessageSentItem showDate={false} />
          <MessageSentItem showDate={false} />
          <MessageSentItem showDate={false} />
          <MessageSentItem showDate={true} />
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={styles.inputMessageGroup}>
        <IconButton
          iconSize={20}
          iconName='images'
          iconColor={PURPLE_COLOR}
          onPress={
            () => console.log("press")
          }
          inactiveBackgroundColor={PURPLE_COLOR + "00"}
          activeBackgroundColor={PURPLE_COLOR + "4d"}
        />

        <TextInput placeholder='Tin nhắn' style={styles.inputMessage} cursorColor={PURPLE_COLOR} multiline/>

        <IconButton
          iconSize={20}
          iconName='paper-plane'
          iconColor={PURPLE_COLOR}
          onPress={
            () => console.log("press")
          }
          inactiveBackgroundColor={PURPLE_COLOR + "00"}
          activeBackgroundColor={PURPLE_COLOR + "40"}
          customStyle={{ marginLeft: 'auto' }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  inputMessageGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
  },
  inputMessage: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 20,
    fontSize: 16,
    marginHorizontal: 5,
    paddingVertical: 5
  }
})
