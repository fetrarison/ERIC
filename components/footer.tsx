import * as Icons from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} FETRARISON. Tous droits réservés.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:fetrarison5@gmail.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              aria-label="Email"
            >
              <Icons.Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/fetrarison" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              aria-label="GitHub"
            >
              <Icons.Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-xs flex items-center justify-center">
            Conçu avec <Icons.Heart className="w-3 h-3 mx-1 text-red-500" /> en utilisant Next.js et Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}