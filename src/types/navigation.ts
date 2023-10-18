import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SummaryMovieProps } from './movie';

export type StackParamsList = {
	Home: undefined;
	MovieDetails: {
		movie: SummaryMovieProps;
	};
	MovieCast: {
		movieId: number;
	};
};

export type HomeScreenProps = NativeStackScreenProps<StackParamsList, 'Home'>;
export type MovieDetailsScreenProps = NativeStackScreenProps<
	StackParamsList,
	'MovieDetails'
>;
export type MovieCastScreenProps = NativeStackScreenProps<
	StackParamsList,
	'MovieCast'
>;
