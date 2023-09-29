/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { PaperProvider } from 'react-native-paper'
import { MenuProvider } from 'react-native-popup-menu'
import SplashScreen from 'react-native-splash-screen'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Provider } from 'react-redux'
import ToolBar from './components/toolbars/ToolBar'
import ToolbarWithBackPress from './components/toolbars/ToolbarWithBackPress'
import {
  BUSINESS_DASHBOARD,
  CONVERSATION,
  FACULTY_DASHBOARD,
  NOTIFICATION,
  SEACRH,
  STUDENT_DISCUSSION_DASHBOARD
} from './constants/Screen'
import { store } from './redux/store'
import BusinessDashboardScreen from './screens/BusinessDashboardScreen'
import ConversationScreen from './screens/ConversationScreen'
import FacultyDashboardScreen from './screens/FacultyDashboardScreen'
import NotificationScreen from './screens/NotificationScreen'
import SearchScreen from './screens/SearchScreen'
import StudentDiscussionDashboardScreen from './screens/StudentDiscussionDashboardScreen'

const TopTab = createMaterialTopTabNavigator()
const RootStack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

export function DrawerNavigator(): JSX.Element {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold'
        },
        headerStyle: {
          backgroundColor: '#0088ff'
        },
        header: () => null
      }}
    >
      <Drawer.Screen
        name='TodoApp'
        options={{
          title: 'Todo App',
          drawerType: 'back',
          drawerItemStyle: { display: 'none' }
        }}
        component={StackNavigator}
      />
    </Drawer.Navigator>
  )
}

export function StackNavigator(): JSX.Element {
  return (
    <RootStack.Navigator
      initialRouteName='BottomTabNavigator'
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold'
        },
        headerStyle: {
          backgroundColor: '#0088ff'
        }
      }}
    >
      <RootStack.Screen
        name='BottomTabNavigator'
        options={{
          title: 'Todo App',
          header: () => <ToolBar />
        }}
        component={TopTabNavigator}
      />
      <RootStack.Screen
        name='DrawerNavigator'
        options={{ title: 'Todo App', header: () => null }}
        component={DrawerNavigator}
      />

      <RootStack.Screen
        name={SEACRH}
        options={{header: () => <ToolbarWithBackPress title='Tìm kiếm' />}}
        component={SearchScreen}
      />
    </RootStack.Navigator>
  )
}

function TopTabNavigator(): JSX.Element {
  return (
    <TopTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName = ''
          let size = focused ? 20 : 19
          
          if (route.name === BUSINESS_DASHBOARD) {
            iconName = 'home'
          } else if (route.name === STUDENT_DISCUSSION_DASHBOARD) {
            iconName = 'chalkboard-teacher'
          } else if (route.name === FACULTY_DASHBOARD) {
            iconName = 'graduation-cap'
          } else if (route.name === NOTIFICATION) {
            iconName = 'bell'
          } else if (route.name === CONVERSATION) {
            iconName = 'user-friends'
          }

          return <Icon name={iconName} size={size} color={color} solid={focused} />
        },
        tabBarActiveTintColor: '#0065FF',
        tabBarInactiveTintColor: '#808080',
        tabBarShowLabel: false,
        header: () => <ToolBar />
      })}
    >
      <TopTab.Screen name={BUSINESS_DASHBOARD} component={BusinessDashboardScreen} />
      <TopTab.Screen name={FACULTY_DASHBOARD} component={FacultyDashboardScreen} />
      <TopTab.Screen name={STUDENT_DISCUSSION_DASHBOARD} component={StudentDiscussionDashboardScreen} />
      <TopTab.Screen name={NOTIFICATION} component={NotificationScreen} />
      <TopTab.Screen name={CONVERSATION} component={ConversationScreen} />
    </TopTab.Navigator>
  )
}

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <MenuProvider>
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </MenuProvider>
  )
}

export default App
