import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Settings, Cloud } from "lucide-react"

const skillCategories = [
  {
    title: "Linguagens & Frameworks",
    icon: Code,
    skills: [
      "JavaScript", "TypeScript", "React", "NextJS", "TailwindCSS",
      "Python", "Django", "Pandas", "PySpark",
      "Java", "Spring Boot",
      "C#", ".NET", "Entity Framework",
      "Golang", "Ruby"
    ]
  },
  {
    title: "Banco de Dados",
    icon: Database,
    skills: [
      "PostgreSQL", "Supabase", "MySQL", "MongoDB", "Firebird"
    ]
  },
  {
    title: "Arquitetura & Metodologias",
    icon: Settings,
    skills: [
      "MVC", "API RESTful", "Microsserviços", "Clean Code", 
      "Design Patterns", "POO"
    ]
  },
  {
    title: "Ferramentas & Cloud",
    icon: Cloud,
    skills: [
      "Git", "GitHub", "Docker", "Google Cloud", "Azure Cloud",
      "Scrum", "Kanban"
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Habilidades Técnicas</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções robustas e escaláveis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/40 hover:border-primary/50 transition-all duration-300 hover:shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto border-border/40">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 text-primary">Experiência Prática</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-2">Desenvolvimento Fullstack</p>
                  <p>Experiência com projetos completos desde o frontend até o backend</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Análise de Dados</p>
                  <p>Manipulação e análise de dados com Python, Pandas e PySpark</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Banco de Dados</p>
                  <p>Modelagem, otimização e operações CRUD em SQL e NoSQL</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}