import { useEffect, useRef, useState } from 'react';
import { AxiosError } from 'axios';

import { MovieProps } from '@/types/movie';
import { fetchWatchingMovies } from '@/services/movies';
import { handleAbort, handleHookUnmount } from '@/utils/helpers';

type UseFetchWatchingMoviesType = [
	MovieProps[],
	boolean,
	AxiosError | null,
	() => void,
];

export const useFetchWatchingMovies = (): UseFetchWatchingMoviesType => {
	const [movies, setMovies] = useState<MovieProps[]>([]);
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
