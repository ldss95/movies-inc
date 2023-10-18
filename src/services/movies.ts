import { MovieProps } from '@/types/movie';
import http from '@/utils/http';

interface FetchWatchingMoviesParams {
	region?: string;
	language?: string;
	page?: number;
	signal: AbortSignal;
}

interface FetchWatchingMoviesResponse {
	results: MovieProps[];
	dates: {
		maximum: string;
		minimum: string;
	};
	page: number;
	total_pages: number;
	total_results: number;
}

export async function fetchWatchingMovies(params: FetchWatchingMoviesParams) {
	const { region = 'DO', language = 'en-US', page = 1, signal } = params;
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
