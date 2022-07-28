import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findActorsId } from 'components/Services/fetch-movie';
import CastList from 'components/CastList';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }

    findActorsId(id)
      .then(actors => {
        setCast(actors.cast);
      })
      .catch(error => console.log(error));
  }, [id]);

  return <div>{cast && <CastList cast={cast} />}</div>;
};

export default Cast;
