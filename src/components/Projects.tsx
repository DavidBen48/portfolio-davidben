import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Loja de Vendas Connect",
    description: "Frontend website para loja de uma comunidade cristã, com foco na venda de 3 blusas para festividade jovem. Projeto freelance completo com integração de API.",
    technologies: ["NextJS", "TypeScript", "TailwindCSS", "API"],
    github: "https://github.com/DavidBen48/connect-sao-bento",
    live: "#",
    status: "Concluído"
  },
  {
    title: "Cadastro de Clientes",
    description: "Sistema completo para cadastro e gerenciamento de clientes utilizando Angular 16 no frontend e .NET 6 no backend com Web API, Entity Framework Core e SQL Server.",
    technologies: ["Angular 16", ".NET 6", "Web API", "EF Core", "SQL Server"],
    github: "#",
    live: "#",
    status: "Em Andamento"
  },
  {
    title: "CRUD com Python - API em Django",
    description: "API RESTful desenvolvida em Django com Python, utilizando Django Rest Framework e Corsheaders para operações CRUD completas.",
    technologies: ["Python", "Django", "Rest Framework", "Corsheaders"],
    github: "#",
    live: "#",
    status: "Em Andamento"
  },
  {
    title: "REST API com Go",
    description: "API RESTful desenvolvida em Golang com PostgreSQL e Docker, focando em performance e arquitetura de microserviços.",
    technologies: ["Golang", "PostgreSQL", "Docker"],
    github: "#",
    live: "#",
    status: "Arquitetando"
  }
]

const statusColors = {
  "Concluído": "bg-primary text-primary-foreground",
  "Em Andamento": "bg-blue-500 text-white",
  "Arquitetando": "bg-orange-500 text-white"
}

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Projetos Relevantes</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Alguns dos principais projetos que desenvolvi, demonstrando minhas habilidades 
            em desenvolvimento fullstack e análise de dados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/40 hover:border-primary/50 transition-all duration-300 hover:shadow-soft group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge 
                        className={`mb-3 ${statusColors[project.status as keyof typeof statusColors]}`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.github !== "#" ? (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        asChild
                      >
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Código
                        </a>
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 opacity-50 cursor-not-allowed"
                        disabled
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                    )}
                    
                    {project.live !== "#" && (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-primary hover:bg-primary-glow"
                        asChild
                      >
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}