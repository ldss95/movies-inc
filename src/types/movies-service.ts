import { SummaryMovieProps } from './movie';

export interface FetchWatchingMoviesParams {
	region?: string;
	language?: string;
	page?: number;
	signal: AbortSignal;
}

export interface FetchWatchingMoviesResponse {
	results: SummaryMovieProps[];
	dates: {
		maximum: string;
		minimum: string;
	};
	page: number;
	total_pages: number;
	total_results: number;
}

export interface FetchMovieByIdParams {
	language?: string;
	movieId: number;
	signal: AbortSignal;
}

export interface FetchMovieCreditsByIdParams {
	language?: string;
	movieId: number;
	signal: AbortSignal;
}
