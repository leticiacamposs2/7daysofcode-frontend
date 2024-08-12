# Formulário Dinâmico com CRUD em JavaScript

Este projeto consiste em uma aplicação web que permite a criação de um formulário dinâmico com funcionalidade de validação e um CRUD completo para gerenciar as submissões do formulário. A aplicação será disponibilizada publicamente na internet.

![CRUD JS](https://ci3.googleusercontent.com/meips/ADKq_Na5LH_IVVF-UV9UI7oWenrYm084AUM_wva7YcjHfhoEFKX-Ju-Natb9lA3YnWuJxhLBNBQIJv6x3_ZLjWNJZRooEZuCKD33vITXT-vukA0xhTaef3gjSxV2yrnpgYKWFY_YMsRB4hqcY2d4ah4eoUX6NLkYbPbP0eTgTcvfaN0leJrA5KKrMiILMljnKYoKxvsMH3dXWMc0e9yMReh74yoFt_pZwO4T96pmFHcNPcU=s0-d-e1-ft#https://empresas.alura.com.br/hs-fs/hubfs/8d7aa1bf-2826-46d3-9162-6542745bdf97.png?width=1024&upscale=true&name=8d7aa1bf-2826-46d3-9162-6542745bdf97.png)

## Funcionalidades

- **Formulário Dinâmico:**
  - Campo para informar o nome da pessoa.
  - Campo para informar a data de nascimento da pessoa.
  - Funcionalidade de validação para garantir que os campos obrigatórios sejam preenchidos corretamente antes da submissão.

- **CRUD Completo:**
  - Criação, leitura, atualização e exclusão de registros das submissões do formulário.
  - Tabela dinâmica para exibir as informações das submissões, atualizando conforme novos dados são adicionados ou modificados.

## Estrutura Base

A estrutura inicial da aplicação inclui:

- **Título da Aplicação**
- **Formulário:**
  - Campo para o nome
  - Campo para a data de nascimento
  - Botão de submissão vinculado a uma função JavaScript que imprime os valores dos campos no console.

## Validações do formulário:

- Um nome precisa ter no mínimo três letras.
- Um nome pode ter no máximo 120 letras.
- Um nome pode apenas conter letras, e não números.
- A data de nascimento precisa estar no formato DD/MM/AAAA, por exemplo: 31/01/2021.
- O mês informado deve estar entre 01 e 12.

## Gravação dos dados na tabela

- Recuperar os dados do localStorage.
- Criar as linhas da tabela dinamicamente.
- Adicionar as linhas criadas à tabela existente no HTML.

## Como Usar

1. Clone este repositório.
2. Abra o arquivo `index.html` em seu navegador web.
3. Preencha o formulário com o nome e data de nascimento.
4. Clique no botão "Enviar" para ver os dados sendo impressos no console.

## Próximos Passos

- Implementar a funcionalidade de validação do formulário.
- Desenvolver o CRUD completo para gerenciar as submissões.
- Estilizar a interface para melhorar a experiência do usuário.
