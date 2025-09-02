import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react"

const roles = [
  "Desenvolvedor Fullstack",
  "Analista de Dados", 
  "Backend Developer",
  "Estudante de CC"
]

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-accent-gradient pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
              David Ben de Oliveira Vieira
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4 h-8"
          >
            <motion.span
              key="role"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {roles[0]}
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-6 text-muted-foreground mb-8 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Belford Roxo, RJ</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(21) 99480-8526</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Estudante de Ciência da Computação com experiência prática em desenvolvimento fullstack, 
            backend e análise de dados. Busco oportunidade como Desenvolvedor Fullstack Júnior, 
            aplicando conhecimentos em Python e Golang (domino), Java e JavaScript (sei bem) e 
            aprendendo C#/.NET, APIs RESTful e bancos de dados SQL/NoSQL para desenvolver soluções escaláveis e de alta qualidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow"
              asChild
            >
              <a href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                Entre em Contato
              </a>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">
                Ver Projetos
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-6 mt-12"
          >
            <a 
              href="https://github.com/DavidBen48" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:border-primary transition-all duration-200 hover:shadow-glow"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/davidben81" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:border-primary transition-all duration-200 hover:shadow-glow"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://instagram.com/davidben_sax" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:border-primary transition-all duration-200 hover:shadow-glow"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}