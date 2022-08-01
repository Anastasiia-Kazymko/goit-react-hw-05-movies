import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const AdditionalInfo = ({ location }) => {
  return (
    <div>
      <h3>Additional Information </h3>
      <ul>
        <li>
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AdditionalInfo;
