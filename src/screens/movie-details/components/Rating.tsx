import React, { memo, useMemo } from 'react';
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';

import {
	useAddMovieRating,
	useFetchMovieAccountState,
} from '@/hooks/useMovies';
const StarIcon = require('@/assets/star.png');
const StarFilledIcon = require('@/assets/star-filled.png');

interface RatingProps {
	movieId: number;
	onRatingSend: () => void;
}

const Rating = ({ movieId, onRatingSend }: RatingProps) => {
	const [movieAccount, _, __, reload] = useFetchMovieAccountState(movieId);
	const [addMovieRating] = useAddMovieRating();

	const currentValue = useMemo(() => {
		return movieAccount?.rated?.value || 0;
	}, [movieAccount]);

	function onPressStar(index: number) {
		const ratingValue = (index + 1) * 2;
		addMovieRating(movieId, ratingValue, afterAddRating);
	}

	function afterAddRating() {
		onRatingSend();

		// Los votos recien agregados tienen un pequeño retraso
		setTimeout(() => {
			reload();
		}, 500);
	}

	return (
		<View style={styles.container}>
			{Array.from({ length: 5 }).map((_, index) => (
				<TouchableOpacity
					key={'star-' + index}
					onPress={() => onPressStar(index)}>
					<Image
						style={styles.image}
						source={
							currentValue >= (index + 1) * 2
								? StarFilledIcon
								: StarIcon
						}
					/>
				</TouchableOpacity>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	image: {
		width: 40,
		height: 40,
	},
});

export default memo(Rating);
