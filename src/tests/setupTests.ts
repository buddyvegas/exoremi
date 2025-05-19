import handlers from '../mocks/handlers';
import { server } from './mocks/server';

beforeEach(() => {
  vi.restoreAllMocks();
  server.use(...handlers);
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
