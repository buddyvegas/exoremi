import { queryOptions } from '@tanstack/react-query';
import api from './api';

export const getBiere = () =>
  queryOptions({
    queryKey: ['bieres'],
    queryFn: () => api.get<unknown[]>('/api/bieres'),
  });
