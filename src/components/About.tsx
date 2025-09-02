import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Target } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-border/40 hover:border-primary/50 transition-all duration-300 hover:shadow-soft">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Formação</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">Ciência da Computação (Ensino Superior)</p>
                    <p className="text-sm">Anhanguera Educacional</p>
                    <p className="text-sm">08/2025 – 01/2029</p>
                  </div>
                  <div className="pt-2 border-t border-border/40">
                    <p className="font-semibold text-foreground">Desenvolvimento Fullstack (Curso Técnico)</p>
                    <p className="text-sm">Recode (2024–2025)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-border/40 hover:border-primary/50 transition-all duration-300 hover:shadow-soft">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Experiência</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">Analista de Banco de Dados</p>
                    <p className="text-sm">Em-soft Sistemas (Estagiário)</p>
                    <p className="text-sm">6 meses</p>
                  </div>
                  <div className="pt-2 text-sm">
                    <p>• Operações CRUD em SQL</p>
                    <p>• Firebird e MySQL</p>
                    <p>• Modelagem de dados</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-border/40 hover:border-primary/50 transition-all duration-300 hover:shadow-soft">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Objetivo</h3>
                <div className="text-muted-foreground">
                  <p className="mb-4">
                    Busco oportunidade como <strong className="text-primary">Desenvolvedor Fullstack Júnior</strong>
                  </p>
                  <div className="text-sm space-y-1">
                    <p>• Soluções escaláveis</p>
                    <p>• Alta qualidade</p>
                    <p>• Tecnologias modernas</p>
                    <p>• Crescimento contínuo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}