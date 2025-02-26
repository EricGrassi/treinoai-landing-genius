
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-treino-dark px-4">
      <div className="glass-effect border border-white/10 rounded-2xl p-12 text-center max-w-lg">
        <div className="text-7xl font-bold text-white mb-4">404</div>
        <h1 className="text-2xl font-semibold text-white mb-4">Page Not Found</h1>
        <p className="text-treino-light mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link to="/">
          <Button className="bg-white text-treino-dark hover:bg-treino-accent group transition-all duration-300">
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
