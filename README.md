# Odonto Vida - Sistema de Agendamento Odontológico

## 📋 Descrição
Odonto Vida é um sistema moderno de agendamento odontológico que conecta pacientes, dentistas e administradores em uma plataforma intuitiva e eficiente. O sistema foi desenvolvido para otimizar o processo de agendamento de consultas odontológicas, oferecendo uma experiência completa tanto para pacientes quanto para profissionais da área.

## 🚀 Tecnologias Utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5.3.0
- Font Awesome (ícones)
- Animate.css (animações)
- Nginx (servidor web)

### Backend
- Java
- Spring Boot
- PostgreSQL
- Docker

## 🛠️ Arquitetura do Sistema

### Componentes Principais
- Frontend (Porta 80)
- Backend API (Porta 8080)
- Banco de Dados PostgreSQL
- Docker Container

### Estrutura de Diretórios
```
odonto-vida/
├── frontend/
│   ├── css/
│   ├── js/
│   ├── *.html
│   └── Dockerfile.frontend
├── backend/
│   └── [arquivos do backend]
├── docker-compose.yml
└── README.md
```

## 🔑 Funcionalidades

### Portal do Paciente
- Agendamento de consultas
- Visualização de serviços disponíveis
- Gerenciamento de agendamentos
- Perfil do paciente
- Histórico de consultas
- Notificações de consultas

### Portal do Dentista
- Dashboard profissional
- Calendário de consultas
- Gestão de pacientes
- Relatórios de atendimento
- Perfil profissional

### Portal do Administrador
- Gestão completa de consultas
- Administração de dentistas
- Relatórios gerenciais
- Controle de disponibilidade
- Gestão de serviços

## 🚀 Como Executar

### Pré-requisitos
- Docker
- Docker Compose
- Git

### Instalação
1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Navegue até o diretório do projeto:
```bash
cd odonto-vida
```

3. Execute o Docker Compose:
```bash
docker-compose up -d
```

4. Acesse o sistema:
- Frontend: http://localhost
- Backend API: http://localhost:8080

## 🔒 Segurança

### Níveis de Acesso
- Paciente: Acesso ao agendamento e perfil
- Dentista: Acesso ao calendário e pacientes
- Administrador: Acesso total ao sistema

### Validações
- Autenticação de usuários
- Validação de CPF
- Proteção de rotas
- Validação de horários
- Verificação de conflitos de agenda

## 📊 Regras de Negócio

### Agendamentos
- Horário de funcionamento: 8h às 18h
- Não permite agendamentos em finais de semana
- Limite de uma consulta por dia por paciente
- Notificação automática de cancelamentos
- Possibilidade de reagendamento

### Serviços
- Clareamento Dental
- Restauração
- Ortodontia
- Limpeza e Prevenção
- Implantes e Prótese



## 👥 Autores
- [Gabriel Sousa e Matheus Chagas] - Desenvolvedores Principais

## 📞 Contato
- Email: contato@odontovida.com.br
- Telefone: (11) 99999-9999
- Endereço: Rua do Sorriso, 123 - Centro - São Paulo/SP

---
Desenvolvido com ❤️ pela equipe Odonto Vida 