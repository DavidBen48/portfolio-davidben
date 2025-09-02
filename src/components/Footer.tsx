import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-section-bg border-t border-border/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-primary mb-2">David Ben</h3>
            <p className="text-muted-foreground">Desenvolvedor Fullstack</p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>por David Ben • {new Date().getFullYear()}</span>
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Desenvolvido com React, TypeScript, Tailwind CSS e Framer Motion</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}