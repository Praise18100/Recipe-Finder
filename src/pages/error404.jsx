import { Link } from 'react-router-dom';
import './error404.css';

export default function Error404() {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-title">Oops! Recipe Not Found</h2>
      <p className="error-message">
        The recipe you're looking for might have been removed, renamed, or is temporarily unavailable.
      </p>
      <Link to="/" className="error-btn">
        Go Back Home
      </Link>
    </div>
  );
}
