import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import IpList from './src/IpList';
import IpDetails from './src/IpDetails';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="IpList"
					options={{
						title: 'Login',
						headerShown: false
					}}
					component={props => <IpList {...props} />}
				/>
				<Stack.Screen
					name="IpDetails"
					options={{
						title: 'Login',
						headerShown: false
					}}
					component={props => <IpDetails {...props} />}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
