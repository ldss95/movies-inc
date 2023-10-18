import React from 'react';
import {
	View,
	ActivityIndicator,
	FlatList,
	Text,
	StyleSheet,
} from 'react-native';

import { MovieCastScreenProps } from '@/types/navigation';
import { useFetchMovieCast } from '@/hooks/useMovies';
import { RenderIf } from '@/components';

enum Gender {
	Female = 1,
	Male = 2,
}

function MovieCastScreen({ route }: MovieCastScreenProps) {
	const { movieId } = route.params;
	const [cast, loading] = useFetchMovieCast(movieId);

	return (
		<View testID="cast-container">
			<RenderIf condition={loading}>
				<ActivityIndicator color="#000" />
			</RenderIf>

			<FlatList
				data={cast}
				contentContainerStyle={styles.container}
				renderItem={({ item }) => (
					<View key={item.id} style={styles.actorContainer}>
						<Text style={styles.text}>
							{item.gender === Gender.Male ? 'Actor' : 'Actriz'}
							{': ' + item.name}
						</Text>
						<Text style={styles.text}>
							Personaje: {item.character}
						</Text>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	actorContainer: {
		marginBottom: 10,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		padding: 8,
		borderRadius: 5,
	},
	text: {
		color: '#000',
	},
});

export default MovieCastScreen;
