import { Link, Outlet } from 'react-router-dom';

const AdditionalInfo = () => {
  return (
    <div>
      <h3>Additional Information </h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default AdditionalInfo;
