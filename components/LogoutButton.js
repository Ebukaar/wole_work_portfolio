import { auth } from '../firebase/config';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Redirect to home page or login page after successful logout
      window.location.href = '/';
    } catch (error) {
      console.error('Failed to logout user', error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-teal hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
