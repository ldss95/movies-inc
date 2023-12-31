import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackParamsList } from '@/types/navigation';
import HomeScreen from '@/screens/home';
import MovieDetailsScreen from '@/screens/movie-details';
import MovieCastScreen from '@/screens/movie-cast';

const Stack = createNativeStackNavigator<StackParamsList>();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="MovieDetails"
					component={MovieDetailsScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="MovieCast"
					component={MovieCastScreen}
					options={{
						title: 'Actores y Actrices',
						presentation: 'modal',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
