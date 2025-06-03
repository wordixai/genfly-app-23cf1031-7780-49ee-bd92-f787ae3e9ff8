import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="https://watc-studio.com/cdn/shop/files/LOGO-WATCOK.png?v=1714989541" 
              alt="WATC STUDIO" 
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;