import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Connect São Bento",
    description: "Frontend website para loja de uma comunidade cristã, com foco na venda de 3 blusas para festividade jovem. Projeto freelance completo com integração de API.",
    technologies: ["NextJS", "TypeScript", "TailwindCSS", "API"],
    github: "https://github.com/DavidBen48/connect-sao-bento",
    live: "#",
    status: "Concluído"
  },
  {
    title: "Sistema de Gestão Financeira",
    description: "Aplicação fullstack para controle financeiro pessoal com dashboard interativo, relatórios e análise de gastos. Backend em Java Spring Boot.",
    technologies: ["React", "Java", "Spring Boot", "PostgreSQL", "Chart.js"],
    github: "#",
    live: "#",
    status: "Em desenvolvimento"
  },
  {
    title: "API de Análise de Dados",
    description: "API RESTful para processamento e análise de grandes volumes de dados utilizando Python, Pandas e PySpark. Implementação de microserviços.",
    technologies: ["Python", "Django", "Pandas", "PySpark", "Docker"],
    github: "#",
    live: "#",
    status: "Planejado"
  },
  {
    title: "E-commerce Mobile",
    description: "Aplicação mobile para e-commerce com carrinho de compras, pagamentos integrados e sistema de avaliações. Backend em C# .NET.",
    technologies: ["React Native", "C#", ".NET", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
    status: "Conceito"
  }
]

const statusColors = {
  "Concluído": "bg-primary text-primary-foreground",
  "Em desenvolvimento": "bg-blue-500 text-white",
  "Planejado": "bg-orange-500 text-white",
  "Conceito": "bg-purple-500 text-white"
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