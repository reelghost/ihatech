import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'thoya.joseep@gmail.com',
      href: 'mailto:thoya.joseep@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254799996442',
      href: 'tel:+254799996442'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/reelghost', label: 'GitHub' },
    { icon: Linkedin, href: 'https://ke.linkedin.com/in/iha-thoya-26980a184', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/Deadbone0', label: 'Twitter' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-mono mb-4">
            <span className="text-primary">04.</span> Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-sm text-muted-foreground ml-4">contact-form.tsx</span>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary">
                      const name =
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="font-mono"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary">
                      const email =
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="font-mono"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary">
                      const message =
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="font-mono resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full group glow-primary">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-sm text-muted-foreground ml-4">contact-info.json</span>
              </div>
              <div className="code-block">
                <div className="mb-2">
                  <span className="syntax-keyword">const</span>{' '}
                  <span className="syntax-function">contactInfo</span> = {'{'}
                </div>
                {contactInfo.map((info, index) => (
                  <div key={info.label} className="ml-4 mb-2">
                    <span className="syntax-string">"{info.label.toLowerCase()}"</span>: 
                    <span className="syntax-string"> "{info.value}"</span>
                    {index < contactInfo.length - 1 ? ',' : ''}
                  </div>
                ))}
                <div>{'}'}</div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <Card key={info.label} className="hover:scale-105 transition-transform">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{info.label}</div>
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle className="font-mono text-primary">Connect with me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Button 
                      key={social.label}
                      variant="outline" 
                      size="icon"
                      className="hover:scale-110 transition-transform"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;