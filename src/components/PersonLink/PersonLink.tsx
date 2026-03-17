// components/PersonLink.tsx
import { Link } from 'react-router-dom';
import { Person } from '../../types/Person';

type Props = {
  people: Person[];
  name: string | null;
};

export const PersonLink = ({ people, name }: Props) => {
  if (!name) {
    return <span>-</span>;
  }

  const found = people.find(p => p.name === name);

  if (!found) {
    return <span>{name}</span>;
  }

  return (
    <Link
      to={`/people/${found.slug}`}
      className={found.sex === 'f' ? 'has-text-danger' : ''}
    >
      {found.name}
    </Link>
  );
};
