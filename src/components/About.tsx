import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Code, Coffee, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, value: '50+', label: 'Projects Completed' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
    { icon: Zap, value: '3+', label: 'Years Experience' },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold font-mono mb-6">
              <span className="text-primary">01.</span> About Me
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Hello! We are Iha Crafts, passionate full-stack developers and graphic designers who love 
                building exceptional digital experiences. Our journey started back in 2021 when we decided to bring change to the digital world.
              </p>
              <p>
                Fast-forward to today, and We've had the privilege of working on 
                various projects ranging from startups to large-scale businesses. 
                We specialize in building modern, performant web applications using 
                cutting-edge technologies and not forgetting the taste we have in branding businesses with every kind of graphics design material they will ever need.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
            </div>

            {/* Tech Stack */}
            <div className="grid grid-cols-2 gap-2 mt-6 mb-8">
              {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL'].map((tech) => (
                <div key={tech} className="flex items-center text-muted-foreground">
                  <span className="text-primary mr-2">▶</span>
                  {tech}
                </div>
              ))}
            </div>

            <Button className="group">
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </div>

          {/* Code Terminal */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-sm text-muted-foreground ml-4">about.ts</span>
              </div>
              <div className="code-block">
                <div className="mb-2">
                  <span className="syntax-comment">// Personal Info</span>
                </div>
                <div className="mb-2">
                  <span className="syntax-keyword">interface</span>{' '}
                  <span className="syntax-function">Developer</span> {'{'}
                </div>
                <div className="ml-4 mb-1">
                  <span className="syntax-string">name</span>: <span className="syntax-string">"Iha Crafts"</span>;
                </div>
                <div className="ml-4 mb-1">
                  <span className="syntax-string">email</span>: <span className="syntax-string">"thoya.joseep@gmail.com"</span>;
                </div>
                <div className="ml-4 mb-1">
                  <span className="syntax-string">location</span>: <span className="syntax-string">"Nairobi, Kenya"</span>;
                </div>
                <div className="ml-4 mb-1">
                  <span className="syntax-string">available</span>: <span className="syntax-keyword">true</span>;
                </div>
                <div className="ml-4 mb-2">
                  <span className="syntax-string">passion</span>: <span className="syntax-string">"Building amazing apps"</span>;
                </div>
                <div>{'}'}</div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:scale-105 transition-transform">
                  <CardContent className="p-4">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold font-mono text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
