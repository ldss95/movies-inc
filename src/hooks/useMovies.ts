import { useEffect, useRef, useState } from 'react';
import { AxiosError } from 'axios';

import {
	SummaryMovieProps,
	FullMovieProps,
	MovieCastProps,
	MovieAccountState,
} from '@/types/movie';
import {
	addMovieRating,
	fetchMovieAccountStates,
	fetchMovieById,
	fetchMovieCreditsById,
	fetchWatchingMovies,
} from '@/services/movies';
import { handleAbort, handleHookUnmount } from '@/utils/helpers';

type UseFetchWatchingMoviesType = [
	SummaryMovieProps[],
	boolean,
	AxiosError | null,
	() => void,
];

export const useFetchWatchingMovies = (): UseFetchWatchingMoviesType => {
	const [movies, setMovies] = useState<SummaryMovieProps[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<AxiosError | null>(null);
	const controllerRef = useRef<AbortController | null>(null);
	const isMounted = useRef<boolean>(true);

	useEffect(() => {
		load();

		return () => handleHookUnmount(isMounted, controllerRef);
	}, []);

	async function load() {
		try {
			setLoading(true);
			setError(null);
			const signal = handleAbort(controllerRef);
			const { results } = await fetchWatchingMovies({ signal });
			if (isMounted) {
				setMovies(
					results.sort((a, b) => a.title.localeCompare(b.title)),
				);
			}
		} catch (error) {
			if (isMounted) {
				setError(error as AxiosError);
			}
		} finally {
			if (isMounted) {
				setLoading(false);
			}
		}
	}

	return [movies, loading, error, load];
};

type UseFetchMovieByIdType = [
	FullMovieProps | null,
	boolean,
	AxiosError | null,
	() => void,
];

export const useFetchMovieById = (id: number): UseFetchMovieByIdType => {
	const [movie, setMovie] = useState<FullMovieProps | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<AxiosError | null>(null);
	const controllerRef = useRef<AbortController | null>(null);
	const isMounted = useRef<boolean>(true);

	useEffect(() => {
		if (!id) {
			return;
		}

		load();

		return () => handleHookUnmount(isMounted, controllerRef);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	async function load() {
		try {
			setLoading(true);
			setError(null);
			const signal = handleAbort(controllerRef);
			const data = await fetchMovieById({ signal, movieId: id });
			if (isMounted) {
				setMovie(data);
			}
		} catch (error) {
			if (isMounted) {
				setError(error as AxiosError);
			}
		} finally {
			if (isMounted) {
				setLoading(false);
			}
		}
	}

	return [movie, loading, error, load];
};

type UseFetchMovieCastType = [MovieCastProps[], boolean, AxiosError | null];

export const useFetchMovieCast = (id: number): UseFetchMovieCastType => {
	const [cast, setCast] = useState<MovieCastProps[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<AxiosError | null>(null);
	const controllerRef = useRef<AbortController | null>(null);
	const isMounted = useRef<boolean>(true);

	useEffect(() => {
		if (!id) {
			return;
		}

		load();

		return () => handleHookUnmount(isMounted, controllerRef);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	async function load() {
		try {
			setLoading(true);
			setError(null);
			const signal = handleAbort(controllerRef);
			const data = await fetchMovieCreditsById({ signal, movieId: id });
			if (isMounted) {
				setCast(data.cast);
			}
		} catch (error) {
			if (isMounted) {
				setError(error as AxiosError);
			}
		} finally {
			if (isMounted) {
				setLoading(false);
			}
		}
	}

	return [cast, loading, error];
};

type UseAddMovieRatingType = [
	(movieId: number, rating: number, onDone?: () => void) => void,
	boolean,
	AxiosError | null,
];

export const useAddMovieRating = (): UseAddMovieRatingType => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<AxiosError | null>(null);

	async function handleAddRating(
		movieId: number,
		rating: number,
		onDone?: () => void,
	) {
		try {
			setLoading(true);
			setError(null);
			await addMovieRating(movieId, rating);
			onDone && onDone();
		} catch (error) {
			setError(error as AxiosError);
		} finally {
			setLoading(false);
		}
	}

	return [handleAddRating, loading, error];
};

type UseFetchMovieAccountStateType = [
	MovieAccountState | null,
	boolean,
	AxiosError | null,
	() => void,
];

export const useFetchMovieAccountState = (
	movieId: number,
): UseFetchMovieAccountStateType => {
	const [movieAccount, setMovieAccount] = useState<MovieAccountState | null>(
		null,
	);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<AxiosError | null>(null);
	const controllerRef = useRef<AbortController | null>(null);
	const isMounted = useRef<boolean>(true);

	useEffect(() => {
		load();
		return () => handleHookUnmount(isMounted, controllerRef);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	async function load() {
		try {
			setLoading(true);
			setError(null);
			const signal = handleAbort(controllerRef);
			const data = await fetchMovieAccountStates(movieId, signal);
			setMovieAccount(data);
		} catch (error) {
			setError(error as AxiosError);
		} finally {
			setLoading(false);
		}
	}

	return [movieAccount, loading, error, load];
};
