import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Vue.js', level: 70 },
        { name: 'Svelte', level: 60 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 70 },
        { name: 'GraphQL', level: 75 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      title: 'Tools & Other',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Figma', level: 80 },
        { name: 'Jest', level: 75 },
        { name: 'Cypress', level: 70 },
      ],
    },
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
    'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git',
    'Tailwind CSS', 'GraphQL', 'Jest', 'Figma', 'Vue.js'
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-mono mb-4">
            <span className="text-primary">02.</span> Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Technology Cloud */}
        <div className="mb-16">
          <div className="terminal-window max-w-4xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-button terminal-red"></div>
              <div className="terminal-button terminal-yellow"></div>
              <div className="terminal-button terminal-green"></div>
              <span className="text-sm text-muted-foreground ml-4">technologies.json</span>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="hover:scale-105 transition-transform animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold font-mono text-primary mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Code Block */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-button terminal-red"></div>
              <div className="terminal-button terminal-yellow"></div>
              <div className="terminal-button terminal-green"></div>
              <span className="text-sm text-muted-foreground ml-4">skills.js</span>
            </div>
            <div className="code-block">
              <div className="mb-2">
                <span className="syntax-keyword">const</span>{' '}
                <span className="syntax-function">mySkills</span> = {'{'}
              </div>
              <div className="ml-4 mb-2">
                <span className="syntax-string">frontend</span>: [
                <span className="syntax-string">'Tailwind CSS'</span>, 
                <span className="syntax-string">'React'</span>, 
                <span className="syntax-string">'Next.js'</span>, 
                <span className="syntax-string">'TypeScript'</span>],
              </div>
              <div className="ml-4 mb-2">
                <span className="syntax-string">backend</span>: [
                <span className="syntax-string">'Node.js'</span>, 
                <span className="syntax-string">'Python'</span>, 
                <span className="syntax-string">'FastApi'</span>, 
                <span className="syntax-string">'PostgreSQL'</span>],
              </div>
              <div className="ml-4 mb-2">
                <span className="syntax-string">tools</span>: [
                <span className="syntax-string">'Git'</span>, 
                <span className="syntax-string">'Docker'</span>, 
                <span className="syntax-string">'AWS'</span>]
              </div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;