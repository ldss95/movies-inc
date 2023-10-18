export interface SummaryMovieProps {
	id: number;
	title: string;
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface FullMovieProps {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: string;
	budget: number;
	genres: GenreProps[];
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: {
		id: number;
		logo_path: string;
		name: string;
		origin_country: string;
	}[];
	production_countries: {
		iso_3166_1: string;
		name: string;
	}[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: {
		english_name: string;
		iso_639_1: string;
		name: string;
	}[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface GenreProps {
	id: number;
	name: string;
	homepage: string;
}

export interface MovieCreditsProps {
	id: number;
	cast: MovieCastProps[];
	crew: {
		adult: boolean;
		gender: number;
		id: number;
		known_for_department: string;
		name: string;
		original_name: string;
		popularity: number;
		profile_path: string;
		credit_id: string;
		department: string;
		job: string;
	}[];
}

export interface MovieCastProps {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string;
	cast_id: number;
	character: string;
	credit_id: string;
	order: number;
}

export interface MovieAccountState {
	id: number;
	favorite: boolean;
	rated: {
		value: number;
	};
	watchlist: boolean;
}
