import { Link } from 'react-router-dom';
import { UserMenu } from './UserMenu';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 10,
        borderBottom: '1px solid black',
        marginBottom: 12,
      }}
    >
      <nav>
        <Link to="/" style={{ paddingRight: 10 }}>
          Home
        </Link>
        {!isLoggedIn && (
          <Link to="/login" style={{ paddingRight: 10 }}>
            Log In
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard" style={{ paddingRight: 10 }}>
            Dashboard
          </Link>
        )}
        <Link to="/phonebook" style={{ paddingRight: 10 }}>
          Phonebook
        </Link>
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
