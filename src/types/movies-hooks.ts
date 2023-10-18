import { AxiosError } from 'axios';

import {
	FullMovieProps,
	MovieAccountState,
	MovieCastProps,
	SummaryMovieProps,
} from './movie';

export type UseFetchWatchingMoviesType = [
	SummaryMovieProps[],
	boolean,
	AxiosError | null,
	() => void,
];

export type UseFetchMovieByIdType = [
	FullMovieProps | null,
	boolean,
	AxiosError | null,
	() => void,
];

export type UseFetchMovieCastType = [
	MovieCastProps[],
	boolean,
	AxiosError | null,
];

export type UseAddMovieRatingType = [
	(movieId: number, rating: number, onDone?: () => void) => void,
	boolean,
	AxiosError | null,
];

export type UseFetchMovieAccountStateType = [
	MovieAccountState | null,
	boolean,
	AxiosError | null,
	() => void,
];
