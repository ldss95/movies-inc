import {
	FullMovieProps,
	MovieAccountState,
	MovieCreditsProps,
} from '@/types/movie';
import {
	FetchMovieByIdParams,
	FetchMovieCreditsByIdParams,
	FetchWatchingMoviesParams,
	FetchWatchingMoviesResponse,
} from '@/types/movies-service';
import http from '@/utils/http';

export async function fetchWatchingMovies(params: FetchWatchingMoviesParams) {
	const { region = 'DO', language = 'es-US', page = 1, signal } = params;
	const { data } = await http.get<FetchWatchingMoviesResponse>(
		'/movie/now_playing',
		{
			params: {
				language,
				region,
				page,
			},
			signal,
		},
	);

	return data;
}

export async function fetchMovieById(params: FetchMovieByIdParams) {
	const { language = 'es-US', movieId, signal } = params;
	const { data } = await http.get<FullMovieProps>(`/movie/${movieId}`, {
		params: {
			language,
		},
		signal,
	});

	return data;
}

export async function fetchMovieCreditsById(
	params: FetchMovieCreditsByIdParams,
) {
	const { language = 'es-US', movieId, signal } = params;
	const config = {
		params: {
			language,
		},
		signal,
	};

	const { data } = await http.get<MovieCreditsProps>(
		`/movie/${movieId}/credits`,
		config,
	);

	return data;
}

export async function addMovieRating(movieId: number, rating: number) {
	await http.post(`/movie/${movieId}/rating`, {
		value: rating,
	});
}

export async function fetchMovieAccountStates(
	movieId: number,
	signal: AbortSignal,
) {
	const { data } = await http.get<MovieAccountState>(
		`/movie/${movieId}/account_states`,
		{ signal },
	);
	return data;
}
