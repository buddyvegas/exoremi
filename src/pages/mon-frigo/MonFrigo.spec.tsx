import { render, screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '../../tests/mocks/server';
import { queryWrapper } from '../../tests/query';
import MonFrigo from './MonFrigo';

describe('MonFrigo', () => {
  test('Afficher le frigo de Rémi', async () => {
    const { wrapper } = queryWrapper();

    server.use(
      http.get('/api/bieres', async () => {
        return HttpResponse.json([]);
      }),
    );

    render(<MonFrigo />, { wrapper });

    screen.getByText('Le frigo de Rémi');
  });
});
