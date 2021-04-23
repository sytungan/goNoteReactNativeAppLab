import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux'

// React-Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import CustomeDrawer from './src/screens/CustomeDrawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//Screen
import Home from './src/screens/Home';
import AddNote from './src/screens/AddNote';
import EditNote from './src/screens/EditNote';

// import store
import store from './src/public/redux/store'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const RootStack = () => {
	return (
		<Stack.Navigator
			headerMode="none"
			initialRouteName="Home"
			screenOptions={{ gestureEnabled: false }}
		>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{ headerShown: false }}
				// options={{ headerVisible: false }}
			/>
			<Stack.Screen
				name="EditNote"
				component={EditNote}
			//options={{ headerVisible: false }}
			/>
			<Stack.Screen
				name="AddNote"
				component={AddNote}

			//options={{ headerVisible: false }}
			/>
		</Stack.Navigator>
	);
}
const AppContainer = () => {
	return (
	<NavigationContainer>
		<Drawer.Navigator 
		drawerContent={(props) => <CustomeDrawer {...props} />}
		>
			<Drawer.Screen  name="Note App" component={RootStack}/>
		</Drawer.Navigator>
	</NavigationContainer>
	)
}

export default class App extends Component {
	render() {
		return (
			<SafeAreaProvider>
			<Provider store={store}>
				<AppContainer/>
			</Provider>
			</SafeAreaProvider>
		)
	}
}