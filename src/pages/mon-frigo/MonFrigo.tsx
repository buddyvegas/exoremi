import { useQuery } from '@tanstack/react-query';
import { getBiere } from '../../application/bieres';
import styles from './MonFrigo.module.scss';

const MonFrigo = () => {
  const bieresQuery = useQuery(getBiere());

  const bieres =
    (bieresQuery.data as {
      code: string;
      nom: string;
      degree: number;
      pays: string;
    }[]) || [];

  return (
    <div className={styles.frigo}>
      <h1>Le frigo de Rémi </h1>
      {bieres.map((biere) => (
        <div>
          <span>{biere.nom}</span>
          <span>{biere.pays}</span>
          <span>{biere.degree}°</span>
        </div>
      ))}
    </div>
  );
};

export default MonFrigo;
