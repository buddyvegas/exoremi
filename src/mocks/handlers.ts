import bieresJson from './bieres.json';
import { HttpResponse, delay, http } from 'msw';

const handlers = [
  http.get('/api/bieres', async () => {
    await delay(Math.floor(Math.random() * (3000 - 500 + 1)) + 500);
    
    return HttpResponse.json(bieresJson);
  }),

  http.get('/api/bieres/:id', async (req) => {
    await delay(Math.floor(Math.random() * (3000 - 500 + 1)) + 500);

    const { id } = req.params;
    const biere = bieresJson.find((biere) => biere.id === id);

    if (!biere) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(biere);
  }),
];

export default handlers;
