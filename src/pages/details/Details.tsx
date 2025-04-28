import { useParams } from 'react-router-dom';
import { getBiereById } from '../../application/bieres';
import { useQuery } from '@tanstack/react-query';

const Details = () => {
  const { id } = useParams() as { id: string };
  const biere = useQuery(getBiereById(id));

  return (
    <ul>
      <li>id: {biere.data?.id}</li>
      <li>nom: {biere.data?.nom}</li>
      <li>pays: {biere.data?.pays}</li>
      <li>description: {biere.data?.description}</li>
    </ul>
  );
};
export default Details;
