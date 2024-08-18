# Jogo de Palavras (Wordle Clone)

Este projeto é uma aplicação de jogo de palavras semelhante ao popular jogo **Wordle**. O objetivo do jogo é adivinhar uma palavra secreta em até 6 tentativas. A cada palpite, o jogador recebe um feedback visual que indica se as letras estão na posição correta, incorreta, ou não fazem parte da palavra.


### Funcionalidades

- **Palpites**: O jogador tem até 6 tentativas para adivinhar a palavra secreta.
- **Feedback Visual**:
    - Letras na posição correta são destacadas em verde.
    - Letras que fazem parte da palavra, mas estão na posição errada, são destacadas em amarelo.
    - Letras que não fazem parte da palavra são destacadas em cinza escuro.
    - O teclado virtual também reflete as cores de acordo com os palpites.
- **Final do Jogo**: O jogo termina quando o jogador adivinha a palavra correta ou esgota as 6 tentativas.


### Tecnologias Utilizadas

- **HTML Semântico**: Estruturação do conteúdo de forma clara e acessível.
- **CSS (Flexbox e Grid Layout)**: Estilização e alinhamento dos elementos.
- **JavaScript Puro**: Manipulação do DOM, eventos, lógica do jogo e notificações.
- **Frameworks (Opcional)**: Possibilidade de utilizar frameworks como React, Vue ou Angular para a construção da aplicação.


### Como Jogar

1. O jogo seleciona uma palavra secreta aleatoriamente de um dicionário de palavras.
2. O jogador deve inserir um palpite utilizando o teclado virtual ou o teclado físico.
3. A cada palpite, o jogo fornecerá um feedback visual:
    - Verde: A letra está na posição correta.
    - Amarelo: A letra faz parte da palavra, mas está na posição errada.
    - Cinza Escuro: A letra não faz parte da palavra.
4. Continue jogando até adivinhar a palavra ou esgotar as 6 tentativas.


### Desafios do Desenvolvimento

Durante o desenvolvimento desta aplicação, foram enfrentados os seguintes desafios:

- **HTML e CSS**: Construção de uma página responsiva e semântica com alinhamento dos elementos utilizando Flexbox e Grid Layout.
- **Manipulação do DOM**: Implementação da lógica de interação, incluindo o tratamento de eventos como cliques e pressionamento de teclas.
- **Lógica do Jogo**: Criação de funções para seleção aleatória de palavras, verificação de palpites e atualização do estado do jogo.
- **Notificações Customizadas**: Implementação de notificações para indicar o resultado do jogo (vitória ou derrota).
- **Testes de Unidade**: Escrita de testes para garantir a correta funcionalidade das funções JavaScript.


### Como Usar

1. Clone este repositório.
2. Abra o arquivo `index.html` em seu navegador web.


### Próximos Passos

- Melhorias de UI/UX: Adicionar animações e transições para melhorar a experiência do usuário.
- Localização: Adicionar suporte para múltiplos idiomas.
- Estatísticas: Implementar um sistema para armazenar e exibir estatísticas do jogador (vitórias, derrotas, etc.).


### Créditos

- Design baseado no layout fornecido no [Figma](https://empresas.alura.com.br/e3t/Ctc/I8+113/d2z6gD04/VVQPR97rHkyyW1z5x4c1HD-VTVNrtzX5jb6rwN3Gk37j5nR32W5BWr2F6lZ3n6W8-tNGt90DdZVN4l8x5cD9gkvW7n9FKp6zHsXtN6dk9NFQvlrVW86YckT3p3JRCW5y9X0p3BjPVyW4c3VfH2jHpJHW4PZt474V5W28W6hQcSv3l-8QjW6qP2j45nJTLYW7P995f3h0SdDW22DkW63vcVKZW1g27G36LJlzLW2_2kl18gZSWDW1cR76H31YrwmN8WWhfvjwK_rW53ZtJ38VzqKxW1Hx5rx41kszcW8z6whm65ztLjW8m8-KZ13420KVF8S5V1BzkmNW4F9BSz800D7kW1nQdsK85G63kW3RZr1q4KqnNmN1vW54vmL-4_W7RyQBB3FrCx4TqM6b7BRl4BW6SYZJN2jbDWVW5l4fTN3RVynZW752YkC8rgnGTW6pW4Sx2kYwR0W5MTcNl7G9hQdW9bFKGy6TSzKzW2VhvWG1lZh8Nf8BByCn04).
- Desenvolvido por Leticia Campos.