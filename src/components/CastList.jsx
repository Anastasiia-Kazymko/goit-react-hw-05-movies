const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.slice(0, 10).map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/original/${profile_path}`}
            alt={name}
            width="100"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default CastList;
