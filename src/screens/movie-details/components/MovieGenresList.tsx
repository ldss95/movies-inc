import React, { memo } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import { GenreProps } from '@/types/movie';

interface MovieGenresListProps {
	loading: boolean;
	genres: GenreProps[];
}

const MovieGenresList = ({ loading, genres }: MovieGenresListProps) => {
	if (loading) {
		return <ActivityIndicator color="#fff" />;
	}

	return (
		<View style={styles.container}>
			{genres.map(({ name, id }) => (
				<View style={styles.tag} key={'genre-' + id}>
					<Text style={styles.text}>{name}</Text>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 10,
	},
	tag: {
		padding: 5,
		borderRadius: 5,
		borderColor: '#fff',
		borderWidth: 1,
	},
	text: {
		color: '#fff',
	},
});

export default memo(MovieGenresList);
