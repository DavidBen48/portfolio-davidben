# 🚀 Portfolio - David Ben de Oliveira Vieira

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-06B6D4?logo=tailwindcss&logoColor=white)

**Portfolio pessoal moderno e responsivo desenvolvido com as mais recentes tecnologias web**

[🔗 Demo](https://portfolio-daviben-dev.vercel.app) • [📧 Contato](mailto:davidben81@gmail.com) • [💼 LinkedIn](https://linkedin.com/in/davidben81)

</div>

---

## 📋 Sobre o Projeto

Este é um portfolio pessoal moderno e totalmente responsivo desenvolvido para apresentar minhas habilidades como desenvolvedor fullstack. O projeto demonstra expertise em tecnologias frontend modernas, com foco em performance, acessibilidade e experiência do usuário.

### 🎯 Objetivo

Criar uma plataforma profissional que apresente:
- **Perfil profissional** com formação e experiência
- **Projetos desenvolvidos** com tecnologias diversas
- **Habilidades técnicas** em desenvolvimento fullstack
- **Informações de contato** e redes sociais
- **Interface moderna** com tema claro/escuro

---

## 🛠️ Tecnologias Utilizadas

### **Frontend Core**
- **[React 18.3.1](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Vite 5.4.19](https://vitejs.dev/)** - Build tool e dev server ultra-rápido

### **Estilização e UI**
- **[TailwindCSS 3.4.17](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI modernos e acessíveis
- **[Radix UI](https://www.radix-ui.com/)** - Componentes primitivos acessíveis
- **[Framer Motion 12.23.12](https://www.framer.com/motion/)** - Biblioteca de animações
- **[Lucide React](https://lucide.dev/)** - Ícones SVG modernos

### **Roteamento e Estado**
- **[React Router DOM 6.30.1](https://reactrouter.com/)** - Roteamento client-side
- **[TanStack Query 5.83.0](https://tanstack.com/query)** - Gerenciamento de estado servidor
- **[React Hook Form 7.61.1](https://react-hook-form.com/)** - Formulários performáticos

### **Temas e Personalização**
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas
- **[class-variance-authority](https://cva.style/)** - Variantes de componentes
- **[clsx](https://github.com/lukeed/clsx)** - Utilitário para classes CSS
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge inteligente de classes

### **Validação e Utilitários**
- **[Zod 3.25.76](https://zod.dev/)** - Validação de schemas TypeScript
- **[date-fns 3.6.0](https://date-fns.org/)** - Manipulação de datas
- **[Sonner](https://sonner.emilkowal.ski/)** - Sistema de notificações toast

### **Ferramentas de Desenvolvimento**
- **[ESLint](https://eslint.org/)** - Linter para JavaScript/TypeScript
- **[PostCSS](https://postcss.org/)** - Processador CSS
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Prefixos CSS automáticos

---

## 📁 Estrutura do Projeto

```
portfolio-daviben_dev/
├── 📁 public/                    # Arquivos estáticos
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── 📁 src/                       # Código fonte principal
│   ├── 📁 components/            # Componentes React
│   │   ├── 📁 ui/               # Componentes UI (shadcn/ui)
│   │   ├── About.tsx            # Seção sobre mim
│   │   ├── Contact.tsx          # Formulário de contato
│   │   ├── Footer.tsx           # Rodapé
│   │   ├── Header.tsx           # Cabeçalho com navegação
│   │   ├── Hero.tsx             # Seção principal
│   │   ├── Projects.tsx         # Portfólio de projetos
│   │   ├── Skills.tsx           # Habilidades técnicas
│   │   ├── ThemeProvider.tsx    # Provedor de temas
│   │   └── ThemeToggle.tsx      # Toggle tema claro/escuro
│   ├── 📁 hooks/                # Custom hooks
│   │   ├── use-mobile.tsx       # Hook para detecção mobile
│   │   └── use-toast.ts         # Hook para notificações
│   ├── 📁 lib/                  # Utilitários e configurações
│   │   └── utils.ts             # Funções utilitárias
│   ├── 📁 pages/                # Páginas da aplicação
│   │   ├── Index.tsx            # Página principal
│   │   └── NotFound.tsx         # Página 404
│   ├── App.tsx                  # Componente raiz
│   ├── App.css                  # Estilos globais
│   ├── index.css                # Estilos base
│   ├── main.tsx                 # Ponto de entrada
│   └── vite-env.d.ts            # Tipos do Vite
├── 📄 components.json           # Configuração shadcn/ui
├── 📄 eslint.config.js          # Configuração ESLint
├── 📄 index.html                # Template HTML
├── 📄 package.json              # Dependências e scripts
├── 📄 postcss.config.js         # Configuração PostCSS
├── 📄 tailwind.config.ts        # Configuração TailwindCSS
├── 📄 tsconfig.json             # Configuração TypeScript
├── 📄 tsconfig.app.json         # Configuração TS para app
├── 📄 tsconfig.node.json        # Configuração TS para Node
└── 📄 vite.config.ts            # Configuração Vite
```

---

## 🚀 Como Executar o Projeto

### **Pré-requisitos**

Certifique-se de ter instalado em sua máquina:
- **[Node.js](https://nodejs.org/)** (versão 18 ou superior)
- **[npm](https://www.npmjs.com/)** ou **[yarn](https://yarnpkg.com/)** ou **[bun](https://bun.sh/)**

### **1. Clone o Repositório**

```bash
# Clone o repositório
git clone https://github.com/DavidBen48/portfolio-daviben_dev.git

# Entre no diretório do projeto
cd portfolio-daviben_dev
```

### **2. Instale as Dependências**

```bash
# Usando npm
npm install

# Usando yarn
yarn install

# Usando bun (recomendado - mais rápido)
bun install
```

### **3. Execute o Projeto**

```bash
# Modo desenvolvimento
npm run dev
# ou
yarn dev
# ou
bun dev

# O projeto estará disponível em: http://localhost:8080
```

### **4. Build para Produção**

```bash
# Build de produção
npm run build
# ou
yarn build
# ou
bun run build

# Preview do build
npm run preview
# ou
yarn preview
# ou
bun run preview
```

### **5. Linting**

```bash
# Executar linter
npm run lint
# ou
yarn lint
# ou
bun run lint
```

---

## 🎨 Funcionalidades

### **✨ Interface Moderna**
- Design responsivo para todos os dispositivos
- Tema claro/escuro com persistência
- Animações suaves com Framer Motion
- Componentes acessíveis (WCAG 2.1)

### **📱 Seções Principais**
- **Hero**: Apresentação pessoal com animações
- **Sobre**: Formação, experiência e objetivos
- **Projetos**: Portfolio com tecnologias utilizadas
- **Habilidades**: Stack técnico e competências
- **Contato**: Formulário e informações de contato

### **🔧 Recursos Técnicos**
- TypeScript para type safety
- Componentes reutilizáveis com shadcn/ui
- Roteamento client-side com React Router
- Gerenciamento de estado com TanStack Query
- Validação de formulários com React Hook Form + Zod

---

## 🎯 Sobre o Desenvolvedor

**David Ben de Oliveira Vieira**
- 🎓 **Estudante de Ciência da Computação** - Anhanguera Educacional
- 💼 **Analista de Banco de Dados** - Em-soft Sistemas (Estagiário)
- 🚀 **Desenvolvedor Fullstack** - Buscando oportunidades júnior
- 📍 **Localização**: Belford Roxo, RJ

### **Stack Principal**
- **Domínio**: Python, Golang
- **Conhecimento**: Java, JavaScript, TypeScript
- **Aprendendo**: C#/.NET, APIs RESTful, SQL/NoSQL

### **Contato**
- 📧 **Email**: davidben81@gmail.com
- 📱 **Telefone**: (21) 99480-8526
- 💼 **LinkedIn**: [linkedin.com/in/davidben81](https://linkedin.com/in/davidben81)
- 🐙 **GitHub**: [github.com/DavidBen48](https://github.com/DavidBen48)
- 📸 **Instagram**: [@davidben_sax](https://instagram.com/davidben_sax)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

## 📈 Roadmap

### **Próximas Funcionalidades**
- [ ] Blog integrado
- [ ] Sistema de comentários
- [ ] Integração com CMS
- [ ] PWA (Progressive Web App)
- [ ] Testes automatizados
- [ ] CI/CD pipeline

### **Melhorias Planejadas**
- [ ] Otimização de performance
- [ ] SEO avançado
- [ ] Analytics integrado
- [ ] Internacionalização (i18n)

---

<div align="center">

**Desenvolvido com ❤️ por [David Ben](https://github.com/DavidBen48)**

⭐ **Se este projeto te ajudou, considere dar uma estrela!**

</div>