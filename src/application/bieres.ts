import { queryOptions } from '@tanstack/react-query';
import api from './api';
import { BiereType } from '../models/BiereType';

export const getBiere = () =>
  queryOptions({
    queryKey: ['bieres'],
    queryFn: () => api.get<BiereType[]>('/api/bieres'),
  });

export const getBiereById = (id: string) => 
  queryOptions(
    {queryKey: ['biere'], queryFn: () => api.get<BiereType>(`/api/bieres/${id}`)},
    
  )
