import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SummaryMovieProps } from './movie';

export type StackParamsList = {
	Home: undefined;
	MovieDetails: {
		movie: SummaryMovieProps;
	};
};

export type HomeScreenProps = NativeStackScreenProps<StackParamsList, 'Home'>;
export type MovieDetailsScreenProps = NativeStackScreenProps<
	StackParamsList,
	'MovieDetails'
>;
