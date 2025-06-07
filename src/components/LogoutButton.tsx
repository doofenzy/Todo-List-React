import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { removeToken } from '../lib/auth';

const LogoutButton = () => {
  useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate('/', { replace: true });
  };

  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default LogoutButton;
