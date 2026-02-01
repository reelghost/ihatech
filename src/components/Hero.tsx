import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full-Stack Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative hero-bg">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(158,233,133,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(158,233,133,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in-up">
          {/* Terminal Window */}
          <div className="terminal-window max-w-2xl mx-auto mb-8">
            <div className="terminal-header">
              <div className="terminal-button terminal-red"></div>
              <div className="terminal-button terminal-yellow"></div>
              <div className="terminal-button terminal-green"></div>
              <span className="text-sm text-muted-foreground ml-4">portfolio.js</span>
            </div>
            <div className="code-block text-left">
              <div className="mb-2">
                <span className="syntax-keyword">const</span>{' '}
                <span className="syntax-function">developer</span> = {'{'}
              </div>
              <div className="ml-4 mb-2">
                <span className="syntax-string">name</span>: 
                <span className="syntax-string">"Iha Crafts"</span>,
              </div>
              <div className="ml-4 mb-2">
                <span className="syntax-string">role</span>: 
                <span className="syntax-string">"{displayText}"</span>
                <span className="typing-text"></span>
              </div>
              <div className="ml-4 mb-2">
                <span className="syntax-string">skills</span>: [
                  <span className="syntax-string">"FastApi"</span>, 
                <span className="syntax-string">"React"</span>, 
                <span className="syntax-string">"Next.js"</span>, 
                <span className="syntax-string">"TypeScript"</span>]
              </div>
              <div>{'}'}</div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold font-mono mb-6">
            <span className="gradient-text">Iha Crafts</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting digital experiences with clean code and innovative solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="group glow-primary">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded opacity-60 animate-float" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-accent rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-primary rounded opacity-30 animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;
