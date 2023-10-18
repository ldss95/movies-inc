import React from 'react';
import { FlatList, SafeAreaView, Text, StyleSheet } from 'react-native';

import { useFetchWatchingMovies } from '@/hooks/useMovies';
import { getImageUrl } from '@/utils/helpers';
import { RenderIf } from '@/components';
import MovieCard from '@/components/MovieCard';
import { HomeScreenProps } from '@/types/navigation';

function HomeScreen({ navigation }: HomeScreenProps) {
	const [movies, loading, error, reload] = useFetchWatchingMovies();

	return (
		<SafeAreaView>
			<Text style={styles.title}>MoviesInc</Text>

			<RenderIf condition={error !== null}>
				<Text>Ha ocurrido un error!</Text>
			</RenderIf>

			<FlatList
				data={movies}
				testID="watching-movies-list"
				refreshing={loading}
				onRefresh={reload}
				style={styles.listContainer}
				numColumns={2}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<MovieCard
						title={item.title}
						voteAverage={item.vote_average}
						releaseDate={item.release_date}
						posterUrl={getImageUrl(item.poster_path, 500)}
						onPress={() =>
							navigation.navigate('MovieDetails', { movie: item })
						}
					/>
				)}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	title: {
		textAlign: 'center',
		fontSize: 20,
		color: '#000',
	},
	listContainer: {
		padding: 10,
	},
});

export default HomeScreen;
