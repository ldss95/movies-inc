import React from 'react';
import {
	render,
	waitFor,
	RenderResult,
	fireEvent,
} from '@testing-library/react-native';

import App from '../App';

let component: RenderResult;

describe('Home', () => {
	beforeEach(() => {
		component = render(<App />);
	});

	it('Deberia renderizar la pantalla inicio', () => {
		expect(component).toBeDefined();
		expect(component.getByTestId('watching-movies-list')).toBeDefined();
	});

	it('Deberia mostrar la lista de peliculas despues de llamar al API', () => {
		waitFor(() => {
			const movies = component.queryAllByTestId('movie-card-container');
			expect(movies.length).toBeGreaterThan(0);
		});
	});

	it('Deberia abrir la pantalla de pelicula detallada tras precionar sobre alguna de ellas', async () => {
		await openFirstMovie(component);
		const screen = component.getByTestId('detailed-movie-screen');
		expect(screen).toBeDefined();
	});
});

describe('Movie Details', () => {
	beforeEach(async () => {
		component = render(<App />);
		await openFirstMovie(component);
	});

	it('Deberia mostrar 5 estrellas con la calificacion que le dió el usuario a la pelicula', async () => {
		await waitFor(() => {
			const screen = component.getByTestId('rating-container');
			expect(screen).toBeDefined();
			const stars = component.getAllByTestId(/rating-button-/);
			expect(stars.length).toBe(5);
		});
	});

	it(`Deberia abrir la pantalla con la lista de actores`, async () => {
		const button = component.getByTestId('show-cast-button');
		fireEvent(button, 'press');

		await waitFor(() => {
			const screen = component.getByTestId('cast-container');
			expect(screen).toBeDefined();
		});
	});
});

async function openFirstMovie(component: RenderResult) {
	await waitFor(() => {
		const movies = component.queryAllByTestId('movie-card-container');
		expect(movies.length).toBeGreaterThan(0);
	});

	const [firstMovie] = component.queryAllByTestId('movie-card-container');
	fireEvent(firstMovie, 'press');
}
