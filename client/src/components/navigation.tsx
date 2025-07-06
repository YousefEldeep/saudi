import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./logo";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-black shadow-md" : "bg-black shadow-sm"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="hover:text-white transition-colors font-medium text-gray-300">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors font-medium text-gray-300">
              Services
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="hover:text-white transition-colors font-medium text-gray-300">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("partners")} className="hover:text-white transition-colors font-medium text-gray-300">
              Impact
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors font-medium text-gray-300">
              About
            </button>
            <button onClick={() => scrollToSection("contact")} className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 mt-4">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button onClick={() => scrollToSection("home")} className="block hover:text-white transition-colors font-medium text-gray-300">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="block hover:text-white transition-colors font-medium text-gray-300">
                Services
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="block hover:text-white transition-colors font-medium text-gray-300">
                Portfolio
              </button>
              <button onClick={() => scrollToSection("partners")} className="block hover:text-white transition-colors font-medium text-gray-300">
                Impact
              </button>
              <button onClick={() => scrollToSection("about")} className="block hover:text-white transition-colors font-medium text-gray-300">
                About
              </button>
              <button onClick={() => scrollToSection("contact")} className="block bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-center">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
