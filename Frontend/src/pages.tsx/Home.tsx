
import { useNavigate } from 'react-router-dom';

 export  const Home = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="relative min-h-screen bg-blue-600 flex items-center justify-center">
      {/* Background image */}
      
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://wallpaperboat.com/wp-content/uploads/2019/10/free-website-background-21.jpg')" }}></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-600 opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        {/* Logo */}
        <div className="flex justify-between items-center ">
          <div className="text-2xl font-bold">Blogger</div>
          <button 
            className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600"
            onClick={handleSignUpClick}
          >
            SIGN IN
          </button>
        </div>
        
        {/* Main Text */}
        <div className="mt-32">
          <h1 className="text-4xl font-bold">Publish your passions, your way</h1>
          <p className="mt-4 text-lg">Create a unique and beautiful blog easily.</p>
          <button 
            className="mt-8 bg-yellow-500 text-black py-3 px-6 rounded-lg hover:bg-yellow-600"
            onClick={handleSignUpClick}
          >
            CREATE YOUR BLOG
          </button>
        </div>
      </div>
    </div>
  );
};

