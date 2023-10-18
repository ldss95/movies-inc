import {
	FullMovieProps,
	MovieCreditsProps,
	SummaryMovieProps,
} from '@/types/movie';
import http from '@/utils/http';

interface FetchWatchingMoviesParams {
	region?: string;
	language?: string;
	page?: number;
	signal: AbortSignal;
}

interface FetchWatchingMoviesResponse {
	results: SummaryMovieProps[];
	dates: {
		maximum: string;
		minimum: string;
	};
	page: number;
	total_pages: number;
	total_results: number;
}

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

interface FetchMovieByIdParams {
	language?: string;
	movieId: number;
	signal: AbortSignal;
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

interface FetchMovieCreditsByIdParams {
	language?: string;
	movieId: number;
	signal: AbortSignal;
}

export async function fetchMovieCreditsById(
	params: FetchMovieCreditsByIdParams,
) {
	const { language = 'es-US', movieId, signal } = params;
	const { data } = await http.get<MovieCreditsProps>(
		`/movie/${movieId}/credits`,
		{
			params: {
				language,
			},
			signal,
		},
	);

	return data;
}
