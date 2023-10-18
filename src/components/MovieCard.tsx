import React, { memo } from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import dayjs from 'dayjs';

interface MovieCardProps {
	onPress?: () => void;
	title: string;
	releaseDate: string;
	voteAverage: number;
	posterUrl: string;
}

const MovieCard = (props: MovieCardProps) => {
	return (
		<TouchableOpacity style={styles.container} onPress={props.onPress}>
			<Image source={{ uri: props.posterUrl }} style={styles.image} />

			<Text style={styles.title}>{props.title}</Text>
			<Text style={styles.text}>
				{dayjs(props.releaseDate).format('DD MMM YYYY')}
			</Text>
			<Text style={styles.text}>{props.voteAverage}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 10,
		flex: 1,
		overflow: 'hidden',
	},
	image: {
		height: 230,
		width: '100%',
		resizeMode: 'cover',
		borderRadius: 10,
		backgroundColor: 'grey',
	},
	title: {
		textAlign: 'center',
		fontWeight: 'bold',
	},
	text: {
		textAlign: 'center',
	},
});

export default memo(MovieCard);
