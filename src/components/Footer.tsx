import { Heart, Code, Lock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="container mx-auto px-6 py-8">
        <div className="terminal-window max-w-md mx-auto">
          <div className="terminal-header">
            <div className="terminal-button terminal-red"></div>
            <div className="terminal-button terminal-yellow"></div>
            <div className="terminal-button terminal-green"></div>
            <span className="text-sm text-muted-foreground ml-4">footer.js</span>
          </div>
          <div className="code-block text-center">
            <div className="mb-2">
              <span className="syntax-comment">// Built with passion</span>
            </div>
            <div className="mb-2">
              <span className="syntax-keyword">const</span>{' '}
              <span className="syntax-function">footer</span> = {'{'}
            </div>
            <div className="ml-4 mb-2">
              <span className="syntax-string">year</span>: 
              <span className="syntax-number"> {currentYear}</span>,
            </div>
            <div className="ml-4 mb-2">
              <span className="syntax-string">madeWith</span>: [
              <span className="syntax-string">"❤️"</span>, 
              <span className="syntax-string">"React"</span>, 
              <span className="syntax-string">"TypeScript"</span>]
            </div>
            <div>{'}'}</div>
          </div>
        </div>
        
        <div className="text-center mt-6 text-muted-foreground">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2">
              <span>© {currentYear} Iha Thoya. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="h-4 w-4 text-primary" />
            </div>
            <a 
              href="/privacy-policy.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Lock className="h-3 w-3 mr-1" />
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;