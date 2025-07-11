"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Smartphone,
  Award,
  Calendar,
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
  Users,
} from "lucide-react"
import { useTheme } from "next-themes"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "experience", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: "Stroke Patient Management App",
      description:
        "Full-stack hospital application streamlining stroke patient care with fast data entry and medical decision-making capabilities.",
      tech: ["Django", "HTML/CSS/JS", "SQLite", "Git"],
      features: [
        "Form validation and data sanitization",
        "Conditional rendering with JavaScript",
        "Secure authentication system",
        "Patient data integrity management",
      ],
      date: "April 2025",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "PyGit – Git Internals Reimplementation",
      description:
        "Recreated Git's core internals in Python, including object serialization, commit trees, and HEAD tracking logic.",
      tech: ["Python", "SHA-1", "File I/O", "argparse", "Data Structures"],
      features: [
        "Modular CLI tool with argparse",
        "SHA-1 hashing implementation",
        "Custom file I/O structures",
        "Versioned blob management",
      ],
      date: "February 2025",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Georim App (Team Project)",
      description:
        "Full-stack mobile app for event organizers with GPS-based auto-check-in and proximity tracking features.",
      tech: ["React Native", "TypeScript", "Firebase", "Google Maps API"],
      features: [
        "Google Auth integration",
        "Real-time location tracking",
        "Ad-style product promotion feeds",
        "Multi-screen navigation flow",
      ],
      date: "January 2025",
      icon: <Smartphone className="w-6 h-6" />,
    },
  ]

  const experiences = [
    {
      title: "Data Science & Machine Learning Research Intern",
      company: "Louisiana State University of Alexandria",
      location: "Alexandria, Louisiana",
      period: "May 2025 – Present",
      achievements: [
        "Built end-to-end ML pipeline achieving 92%+ accuracy in EEG emotional state classification using Random Forest and SVM models on 9,000+ samples",
        "Engineered preprocessing workflows for high-dimensional brainwave data (alpha, beta, gamma) with feature importance analysis",
        "Applied t-SNE dimensionality reduction and data visualization for mental health monitoring applications",
      ],
    },
    {
      title: "Computer Lab Assistant",
      company: "Grambling State University",
      location: "Grambling, Louisiana",
      period: "October 2024 – Present",
      achievements: [
        "Diagnosed and resolved 100+ technical issues per semester across 40+ Windows-based machines",
        "Improved system security with zero security incidents through scheduled antivirus scans",
        "Configured lab systems with key academic software improving student accessibility",
      ],
    },
    {
      title: "Software Engineer Intern — Database Team",
      company: "Environmental Protection Agency (Ghana)",
      location: "Accra, Ghana",
      period: "May 2024 – July 2024",
      achievements: [
        "Boosted query performance by 50% through SQL optimization and indexing",
        "Automated data cleaning tasks reducing manual processing time by 60%",
        "Collaborated on database schema refactoring, decreasing data redundancy by 25%",
      ],
    },
  ]

  const skills = {
    Languages: ["Python", "Java", "C", "HTML/CSS", "JavaScript", "SQL"],
    Technologies: ["MongoDB", "React.js", "Node.js", "Express.js", "Firebase", "Linux", "Nest.js", "WordPress"],
    Tools: ["VS Code", "Git", "PyCharm", "Figma", "Canva", "Eclipse", "Google Cloud Platform", "Android Studio"],
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">Enock Owusu Ansah</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "experience", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              {/* Mobile menu button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "about", "projects", "experience", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium capitalize w-full text-left hover:bg-accent rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white/30 shadow-2xl">
                <img src="/images/enock-profile.jpeg" alt="Enock Owusu Ansah" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">Enock Owusu Ansah</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-2 drop-shadow">
                Computer Science Student & Software Engineer
              </p>
              <p className="text-lg text-white/80 mb-8 drop-shadow">
                Grambling State University • Class of 2028 • 4.0 GPA
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-transparent text-white border-white/30 hover:bg-white/10 shadow-lg"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="mailto:eowusuan@gsumail.gram.edu"
                className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/enock-owusu-ansah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Enocko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 about-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about leveraging technology for social impact and building innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl hover-lift">
                <img src="/images/enock-profile.jpeg" alt="Enock Owusu Ansah" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Hello! I'm Enock</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a Computer Science student at Grambling State University with a passion for software engineering,
                  AI, and using technology to create positive social impact. Currently maintaining a 4.0 GPA and on the
                  President's List.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">What drives me:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Building full-stack applications that solve real-world problems
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Exploring AI and machine learning technologies
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Leading and mentoring through NSBE initiatives
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Contributing to environmental and social causes through technology
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 text-sm bg-primary/10 px-3 py-2 rounded-full">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Grambling, LA</span>
                </div>
                <div className="flex items-center space-x-2 text-sm bg-primary/10 px-3 py-2 rounded-full">
                  <Award className="w-4 h-4 text-primary" />
                  <span>4.0 GPA</span>
                </div>
                <div className="flex items-center space-x-2 text-sm bg-primary/10 px-3 py-2 rounded-full">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Graduating 2028</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 projects-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical skills and problem-solving abilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover-lift glow-on-hover card-gradient">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors group-hover:scale-110 transform duration-300">
                      {project.icon}
                    </div>
                    <span className="text-sm text-muted-foreground bg-background/50 px-2 py-1 rounded-full">
                      {project.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 experience-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Experience & Leadership</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Building solutions, leading teams, and making impact through technology
            </p>
          </div>

          {/* Current ML Research Position - Featured Full Width */}
          <Card className="experience-card p-8 hover-lift glow-on-hover mb-8">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Data Science & ML Research Intern</h3>
              <p className="text-white/80 font-medium">Louisiana State University of Alexandria</p>
              <p className="text-white/60 text-sm">May 2025 – Present • CURRENT POSITION</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">🧠 AI/ML Pipeline Expert</h4>
                <p className="text-white/80 text-sm">
                  Built end-to-end machine learning pipeline achieving 92%+ accuracy in EEG emotional state
                  classification using Random Forest and SVM models on 9,000+ samples
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">📊 Data Engineering Specialist</h4>
                <p className="text-white/80 text-sm">
                  Engineered preprocessing workflows for high-dimensional brainwave data (alpha, beta, gamma) with
                  feature importance analysis to identify top spectral predictors
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">🔬 Research & Visualization</h4>
                <p className="text-white/80 text-sm">
                  Applied t-SNE dimensionality reduction and data visualization techniques for mental health monitoring
                  and affective computing applications
                </p>
              </div>
            </div>
          </Card>

          {/* Computer Lab Assistant and EPA Internship - Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Computer Lab Assistant */}
            <Card className="experience-card-alt p-8 hover-lift glow-on-hover">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Computer Lab Assistant</h3>
                <p className="text-white/80 font-medium">Grambling State University</p>
                <p className="text-white/60 text-sm">October 2024 – Present</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">🔧 Technical Problem Solver</h4>
                  <p className="text-white/80 text-sm">
                    Resolved 100+ technical issues across 40+ Windows machines, ensuring seamless lab operations for
                    students
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">🛡️ Security Champion</h4>
                  <p className="text-white/80 text-sm">
                    Achieved zero security incidents through proactive system monitoring and antivirus management
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">⚙️ System Optimizer</h4>
                  <p className="text-white/80 text-sm">
                    Configured essential academic software improving student productivity and learning experience
                  </p>
                </div>
              </div>
            </Card>

            {/* EPA Software Engineer Intern */}
            <Card className="experience-card-leadership p-8 hover-lift glow-on-hover">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Software Engineer Intern</h3>
                <p className="text-white/80 font-medium">Environmental Protection Agency (Ghana)</p>
                <p className="text-white/60 text-sm">May 2024 – July 2024</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">🚀 Performance Booster</h4>
                  <p className="text-white/80 text-sm">
                    Increased database query performance by 50% through SQL optimization and strategic indexing
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">🤖 Automation Expert</h4>
                  <p className="text-white/80 text-sm">
                    Built Python automation scripts reducing manual data processing time by 60%
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">🏗️ Database Architect</h4>
                  <p className="text-white/80 text-sm">
                    Redesigned database schema cutting data redundancy by 25% and improving reporting accuracy
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* NSBE Leadership Section - Full Width */}
          <Card className="experience-card p-8 hover-lift glow-on-hover">
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Development Chair</h3>
              <p className="text-white/80 font-medium">National Society of Black Engineers (NSBE)</p>
              <p className="text-white/60 text-sm">Fall 2024 – Present</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Career Development</h4>
                <p className="text-white/80 text-sm">
                  Organized networking events with top tech companies like Amazon and Meta
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Technical Workshops</h4>
                <p className="text-white/80 text-sm">
                  Led hands-on coding sessions and mentorship programs for skill development
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Member Growth</h4>
                <p className="text-white/80 text-sm">Guided 30+ members toward academic and professional success</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 skills-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Technical Arsenal</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Technologies and tools I use to build amazing solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Programming Languages */}
            <Card className="colorful-card p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Programming Languages
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    alt="Python"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">Python</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                    alt="Java"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">Java</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                    alt="C"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">C</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML5"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">HTML5</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS3"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">CSS3</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">JavaScript</p>
                </div>
              </div>
            </Card>

            {/* Technologies & Frameworks */}
            <Card className="colorful-card p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Technologies & Frameworks
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    alt="MongoDB"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">MongoDB</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">React.js</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">Node.js</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    alt="Nest.js"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">Nest.js</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt="Express.js"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">Express.js</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                    alt="Firebase"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">Firebase</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                    alt="Linux"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">Linux</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
                    alt="WordPress"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">WordPress</p>
                </div>
              </div>
            </Card>

            {/* Developer Tools */}
            <Card className="colorful-card p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Developer Tools
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                    alt="VS Code"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">VS Code</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="Git"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">Git</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg"
                    alt="PyCharm"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">PyCharm</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    alt="Figma"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">Figma</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
                    alt="Canva"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">Canva</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
                    alt="Google Cloud"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">GCP</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
                    alt="Android Studio"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">Android Studio</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg"
                    alt="Eclipse"
                    className="tech-icon mx-auto mb-2"
                  />
                  <p className="text-sm font-medium">Eclipse</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Coursework */}
          <Card className="colorful-card p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Academic Foundation
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Data Structures",
                "Software Methodology",
                "Database Management",
                "Discrete Structures",
                "Systems Programming",
                "Computer Architecture",
                "Object-Oriented Programming",
              ].map((course, idx) => (
                <Badge
                  key={idx}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-sm hover:scale-105 transition-transform"
                >
                  {course}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 contact-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's connect! I'm always open to discussing opportunities, collaborations, or just having a chat about
              technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:eowusuan@gsumail.gram.edu"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      eowusuan@gsumail.gram.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:318-350-0463" className="text-muted-foreground hover:text-primary transition-colors">
                      318-350-0463
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">403 Main Street, Grambling, LA 71245</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Connect with me:</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/enock-owusu-ansah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="https://github.com/Enocko"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <Github className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Send me a message</h3>
              <form
                className="space-y-4"
                action="https://formsubmit.co/el/reyedu"
                method="POST"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input name="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input name="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input name="email" type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input name="subject" placeholder="Let's discuss opportunities" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea name="message" placeholder="Hi Enock, I'd love to connect about..." rows={4} />
                </div>

                {/* Hidden fields */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://enock-owusu-ansah-portfolio.vercel.app/thank-you" />

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Enock Owusu Ansah. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with Next.js, Tailwind CSS, and passion for great design.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
