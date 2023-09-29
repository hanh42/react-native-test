import React, { useEffect } from 'react'
import { LogBox, PermissionsAndroid } from 'react-native'
import ActionSheet from 'react-native-actionsheet'
import { ExternalDirectoryPath, moveFile } from 'react-native-fs'
import {
  CameraOptions,
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker'

interface ImagePickerOptionsProps {
  optionsRef: (ref: ActionSheet | null) => void
  onResult: (result: string | null) => void
}

export default function CustomizedImagePicker({ optionsRef, onResult }: ImagePickerOptionsProps) {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`', 'Warning: componentWillReceiveProps has been renamed'])
  }, [])

  return (
    <ActionSheet
      ref={(ref) => {
        optionsRef(ref)
      }}
      options={['Camera', 'Gallery', 'Cancel']}
      cancelButtonIndex={2}
      destructiveButtonIndex={2}
      onPress={async (index: number) => {
        if (index === 0) {
          const options: CameraOptions = {
            mediaType: 'photo',
            saveToPhotos: true
          }

          try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              launchCamera(options, (res: ImagePickerResponse) => {
                const filePath = handleImagePickerResult(res)
                onResult(filePath)
              })
            } else {
              console.log('Camera permission denied')
            }
          } catch (err) {
            console.warn(err)
          }
        } else if (index === 1) {
          const options: ImageLibraryOptions = {
            mediaType: 'photo'
          }

          launchImageLibrary(options, (res: ImagePickerResponse) => {
            const filePath = handleImagePickerResult(res)
            onResult(filePath)
          })
        }
      }}
    />
  )
}

const handleImagePickerResult = (res: ImagePickerResponse): string | null => {
  let newFilePath = null
  if (res.didCancel) {
    console.log('INFO', 'User cancel image picker')
  } else if (res.errorCode) {
    console.log('ERROR', res.errorMessage)
  } else {
    const filePath = res.assets ? res.assets[0].uri : ''
    newFilePath = ExternalDirectoryPath + '/' + Date.now().toString() + '.jpg'
    moveFile(filePath as string, newFilePath)
  }
  return newFilePath
}
