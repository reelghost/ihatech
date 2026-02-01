import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code } from 'lucide-react';
import abiriImg from '../assets/abiri.png';

const Projects = () => {
  const projects = [
    {
      title: 'Abiri Bus Booking Web App',
      description: 'A web app that brings together all the bus booking features in one place - search, compare, and book buses seamlessly.',
      image: abiriImg,
      tech: ['ReactJS', 'TypeScript', 'Tailwind CSS', 'Vercel', 'NodeJS'],
      github: 'https://github.com/reelghost',
      live: 'https://abiri.ihacrafts.com',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/600/400',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      github: 'https://github.com/reelghost',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather, forecasts, and weather maps using various weather APIs.',
      image: '/api/placeholder/600/400',
      tech: ['Vue.js', 'JavaScript', 'Weather API', 'Chart.js'],
      github: 'https://github.com/reelghost',
      live: 'https://example.com',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects and skills with smooth animations and responsive design.',
      image: '/api/placeholder/600/400',
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/reelghost',
      live: 'https://example.com',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-mono mb-4">
            <span className="text-primary">03.</span> Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some projects I've worked on recently
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className={`grid md:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="terminal-window group hover:scale-105 transition-transform">
                  <div className="terminal-header">
                    <div className="terminal-button terminal-red"></div>
                    <div className="terminal-button terminal-yellow"></div>
                    <div className="terminal-button terminal-green"></div>
                    <span className="text-sm text-muted-foreground ml-4">{project.title.toLowerCase().replace(/\s+/g, '-')}.app</span>
                  </div>
                  <div className="relative bg-card">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Code className="h-16 w-16 text-muted-foreground" />
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Button 
                          asChild 
                          size="sm" 
                          variant="secondary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button 
                          asChild 
                          size="sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold font-mono text-primary mb-2">
                      {project.title}
                    </h3>
                    <div className="terminal-window">
                      <div className="terminal-header">
                        <div className="terminal-button terminal-red"></div>
                        <div className="terminal-button terminal-yellow"></div>
                        <div className="terminal-button terminal-green"></div>
                      </div>
                      <div className="p-4 text-muted-foreground">
                        {project.description}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      size="sm" 
                      className="glow-primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold font-mono text-center mb-12">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="hover:scale-105 transition-transform animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-mono text-primary">{project.title}</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-4 w-4" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
