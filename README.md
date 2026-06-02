# Plataforma de Cessão de Crédito Multimoedas

Sistema frontend desenvolvido em Angular para simulação de uma plataforma de análise e gestão de operações financeiras, com foco em transações multimoedas, dashboards analíticos e experiência de usuário.



## Visão Geral 

A aplicação simula uma plataforma financeira onde é possível:

- Visualizar transações financeiras
- Filtrar operações por tipo e moeda
- Navegar com paginação
- Analisar indicadores financeiros em um dashboard
- Receber feedbacks visuais de ações



## Funcionalidades


### Transações
- Listagem de operações financeiras
- Paginação com Angular Material
- Filtros por:
  - Tipo (Duplicata / Cheque)
  - Moeda (BRL / USD)
- Simulação de backend com dados mockados



### Dashboard
Indicadores calculados a partir do mesmo dataset de transações:

- Volume total de operações
- Quantidade de operações em USD
- Spread médio (simulado a partir dos dados)
- Liquidações do dia



### Sistema de Notificações
- Feedback global com Angular Material Snackbar
- Mensagens de sucesso e erro
- Service centralizado reutilizável



## Arquitetura

O projeto segue uma arquitetura baseada em feature modules e standalone components, com separação clara entre:

- core (serviços globais)
- features (dashboard, transactions, simulation)
- shared (componentes reutilizáveis)

## Decisões Técnicas

- Uso de **Angular Standalone Components**
- Centralização de dados no `TransactionsService`
- Simulação de backend via `mockData`
- Dashboard baseado em agregação de dados reais
- Paginação simulando comportamento de API
- Uso de Angular Material para UI consistente
- Snackbar service global para UX padronizada



## Tecnologias

- Angular 21+
- TypeScript
- Angular Material
- RxJS
- SCSS



## Como rodar o projeto

- npm install
- ng serve
- Acesse http://localhost:4200


## Destaques do Projeto

- Estrutura modular e escalável
- Boas práticas de Angular moderno (standalone)
- Separação de responsabilidades (services / features / shared)
- UX com feedback visual global

## Melhorias Futuras do Projeto

- Integração com API real (REST)
- Autenticação de usuários
- Cache de requisições (RxJS / Signals)
- Gráficos no dashboard
- Exportação de relatórios (PDF/Excel)


 
