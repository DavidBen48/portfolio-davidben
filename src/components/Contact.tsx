import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "davidbensaxofonista@gmail.com",
    href: "mailto:davidbensaxofonista@gmail.com",
    description: "Melhor forma de entrar em contato"
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "(21) 99480-8526",
    href: "tel:+5521994808526",
    description: "WhatsApp disponível"
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "Belford Roxo — Rio de Janeiro",
    href: "#",
    description: "Disponível para trabalho remoto"
  }
]

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/DavidBen48",
    color: "hover:text-gray-800 dark:hover:text-gray-200"
  },
  {
    icon: Linkedin,
    name: "LinkedIn", 
    href: "https://linkedin.com/in/davidben81",
    color: "hover:text-blue-600"
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    href: "https://wa.me/5521994808526",
    color: "hover:text-green-600"
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Vamos Conversar?</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato comigo!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border/40 hover:border-primary/50 transition-all duration-300 hover:shadow-soft group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <method.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {method.description}
                    </p>
                    {method.href !== "#" ? (
                      <a 
                        href={method.href}
                        className="text-primary hover:text-primary-glow font-medium transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{method.value}</p>
                    )}
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
            className="text-center"
          >
            <Card className="border-border/40 bg-accent-gradient">
              <CardContent className="p-12">
                <h3 className="text-2xl font-bold mb-4">Pronto para começar um projeto?</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Estou buscando novas oportunidades como Desenvolvedor Fullstack Júnior. 
                  Vamos criar algo incrível juntos!
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow"
                    asChild
                  >
                    <a href="mailto:davidbensaxofonista@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar Email
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    asChild
                  >
                    <a href="https://wa.me/5521994808526" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-6">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-background/50 border border-border/40 hover:border-primary transition-all duration-200 hover:shadow-soft ${social.color}`}
                      title={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}