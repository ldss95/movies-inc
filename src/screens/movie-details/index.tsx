import React from 'react';
import {
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
	StyleSheet,
	View,
} from 'react-native';
import dayjs from 'dayjs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MovieDetailsScreenProps } from '@/types/navigation';
import { getImageUrl } from '@/utils/helpers';
import { useFetchMovieById } from '@/hooks/useMovies';
import MovieGenresList from './components/MovieGenresList';
import Rating from './components/Rating';

function MovieDetailsScreen({ navigation, route }: MovieDetailsScreenProps) {
	const { movie } = route.params;
	const insets = useSafeAreaInsets();
	const [fullMovie, loadingFullMovie, _, reload] = useFetchMovieById(
		movie.id,
	);

	return (
		<ScrollView testID="detailed-movie-screen">
			<TouchableOpacity
				onPress={() => navigation.goBack()}
				style={[styles.backButton, { top: insets.top + 20 }]}>
				<Text>{'<'}</Text>
			</TouchableOpacity>
			<Image
				style={styles.poster}
				source={{ uri: getImageUrl(movie.poster_path, 500) }}
			/>
			<View style={styles.contentContainer}>
				<Text style={styles.title}>{movie.title}</Text>
				<Text style={styles.text}>
					{dayjs(movie.release_date).format('YYYY')}
				</Text>
				<Text style={styles.text}>{movie.vote_average}</Text>
				<View style={styles.divider} />

				<MovieGenresList
					loading={loadingFullMovie}
					genres={fullMovie?.genres || []}
				/>

				<Text style={styles.overview}>{movie.overview}</Text>

				<TouchableOpacity
					style={styles.showCastButton}
					testID="show-cast-button"
					onPress={() =>
						navigation.navigate('MovieCast', { movieId: movie.id })
					}>
					<Text style={styles.showCastButtonText}>Ver Elenco</Text>
				</TouchableOpacity>

				<Rating movieId={movie.id} onRatingSend={reload} />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	backButton: {
		position: 'absolute',
		left: 30,
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: '#fff',
		borderColor: '#000',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 100,
	},
	contentContainer: {
		padding: 20,
		backgroundColor: '#000',
		minHeight: '100%',
		marginTop: -150,
	},
	divider: { height: 30 },
	poster: {
		width: '100%',
		height: 500,
		resizeMode: 'cover',
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		color: '#fff',
	},
	text: {
		opacity: 0.8,
		color: '#fff',
	},
	overview: {
		marginTop: 20,
		opacity: 0.9,
		color: '#fff',
	},
	showCastButton: {
		marginVertical: 30,
		width: '100%',
		height: 40,
		borderRadius: 5,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	showCastButtonText: {
		color: '#000',
		fontWeight: 'bold',
	},
});

export default MovieDetailsScreen;
