import React, { memo } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import { useFetchMovieCast } from '@/hooks/useMovies';

const Cast = ({ movieId }: { movieId: number }) => {
	const [cast, loading] = useFetchMovieCast(movieId);

	if (loading) {
		return <ActivityIndicator color="#fff" />;
	}

	return (
		<>
			<Text style={styles.title}>Actores</Text>
			{cast.map(({ name, id, character }) => (
				<View key={id} style={styles.actorContainer}>
					<Text style={styles.text}>{name}</Text>
					<Text style={styles.text}>{character}</Text>
				</View>
			))}
		</>
	);
};

const styles = StyleSheet.create({
	title: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	actorContainer: {
		marginBottom: 10,
	},
	text: {
		color: '#fff',
	},
});

export default memo(Cast);
