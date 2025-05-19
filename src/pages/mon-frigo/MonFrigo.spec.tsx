import { render, screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '../../tests/mocks/server';
import MonFrigo from './MonFrigo';

describe('MonFrigo', () => {
  test('Afficher le frigo de Rémi', async () => {

    server.use(
      http.get('/api/bieres', async () => {
        return HttpResponse.json([]);
      }),
    );

    render(<MonFrigo />);

    await screen.findByText('Le frigo de Rémi');
  });
});
