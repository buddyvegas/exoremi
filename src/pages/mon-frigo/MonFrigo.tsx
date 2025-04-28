import { useQuery } from '@tanstack/react-query';
import { getBiere } from '../../application/bieres';
import styles from './MonFrigo.module.scss';
import { useState } from 'react';

const MonFrigo = () => {
  const bieresQuery = useQuery(getBiere());
  const [paysSelected, setPaysSelected] = useState<string>('');

  if(bieresQuery.isLoading){
    return 'chargement'
  }

  const bieres = bieresQuery.data || [];
  const pays = [...new Set(bieres.map((biere) => biere.pays))];

  
  return (
    <div className={styles.frigo}>
      <h1>Le frigo de Rémi </h1>
      <div className={styles.filters}>
        <select onChange={(e) => setPaysSelected(e.target.value)}>
          {pays.map((p) => (
            <option value={p}>{p}</option>
          ))}
        </select>
        <button onClick={() => setPaysSelected('')}>reset</button>
      </div>
      {bieres
        .filter((x) => (paysSelected !== '' ? x.pays === paysSelected : true))
        .map((biere) => (
          <div className={styles.biere}>
            <span>
              <a href={`/biere/${biere.id}`}>{biere.nom}</a>{' '}
            </span>
            <span>{biere.pays}</span>
            <span>{biere.degree}°</span>
          </div>
        ))}
    </div>
  );
};

export default MonFrigo;
