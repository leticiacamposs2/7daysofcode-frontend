# Projeto: Projeto: Página de Filmes

### Visualização do Projeto Final

![Pagina de Filmes](https://ci3.googleusercontent.com/meips/ADKq_NYd-oJ3RVkcpxBbjWz27Mxo4eKhRlkmCbTh4tYxMWFsaR69k41Lukp3uzxOj7ArjNTY9NV17icwIkEOte4qtkuFta8kRpJk0if2La5h_bllijeNbVNRyncFPWLP0C8GPb9TT42ydWIiyuOaKfHiGbGpgToNyXz2n3oKjInur0_hunxndjgawK8hto9cODOq5sp8n0j0f2w7JYU7AKS_PnZSWq_JxRLkki353lJXUH8=s0-d-e1-ft#https://empresas.alura.com.br/hs-fs/hubfs/20724e3b-6481-4352-8fd2-026d98385632.png?width=1120&upscale=true&name=20724e3b-6481-4352-8fd2-026d98385632.png)

Este projeto tem como objetivo criar uma página de filmes que consome a API [The Movie DataBase API](
https://developer.themoviedb.org/reference/intro/getting-started) para listar os filmes populares do momento. Além disso, inclui funcionalidades de favoritar/desfavoritar filmes, pesquisa por título e exibição de apenas filmes favoritos.

### Funcionalidades Implementadas

1. Manipulação do DOM e Criação Dinâmica de Elementos
- Criação dinâmica de elementos de filmes utilizando JavaScript.

2. Consumo da API
- Consumo da API do The Movie DataBase para listar os filmes mais populares do momento.
- Utilização de JavaScript assíncrono (promises, async/await) para lidar com requisições externas.

3. Busca de Filmes
- Implementação de uma barra de pesquisa que permite buscar filmes específicos utilizando a API.
- Exibição de resultados de busca conforme o usuário digita o título do filme.

4. Favoritar/Desfavoritar Filmes
- Implementação da funcionalidade de favoritar/desfavoritar filmes.
- Salvamento dos dados de filmes favoritos no Local Storage.
- Alteração do ícone de coração para indicar quando um filme é favorito.

5. Exibição de Filmes Favoritos
- Implementação de um checkbox que permite filtrar e mostrar apenas os filmes favoritos.

### Passo a Passo de Desenvolvimento

### Primeira Tarefa: Manipulação do DOM e criando os elementos de forma dinâmica

Criar elementos de filmes dinamicamente usando JavaScript.

### Segunda Tarefa: Consumindo a API

Tornar a aplicação dinâmica consumindo a lista de filmes mais populares do momento utilizando a API do The Movie DataBase. Implementação de conceitos de JavaScript assíncrono para garantir a correta renderização dos dados.

### Terceira Tarefa: Buscando um filme através da barra de pesquis

Implementação da barra de pesquisa para buscar filmes específicos. A busca é realizada utilizando a API e os resultados são exibidos na página.

![Pesquisar Filme](https://ci3.googleusercontent.com/meips/ADKq_NZ4SuUljUcjLRgrwsNCTe5Q_cHaO-Ecwyy19Q265rmUJP73V6vw1eIn3kRuSOOhty8EqHXVx2KHiqajd3iFpgc4oV34iEQeL1P5JSbtcXC47rGX9nPm0oftsDSnvj07dMI0i8AZl9xPS_FKL0gOfEWsEaKvJy67kgmm8ChF7KiAZcUbcRANccw0ZnkiNTLxZAqL3L81G27uUYv95ffXBhoxPCwNhXbo4KirEugUL3PquOaqEh15wMAEimU=s0-d-e1-ft#https://empresas.alura.com.br/hs-fs/hubfs/3403540c-9ee5-4083-a4ff-1852c752105e%20(1).png?width=1120&upscale=true&name=3403540c-9ee5-4083-a4ff-1852c752105e%20(1).png)

### Quarta Tarefa: Favoritando/desfavoritando um filme e salvando no Local Storage

Implementação da lógica para favoritar/desfavoritar filmes. A mudança no estado de um filme (favorito/não favorito) é refletida visualmente e persistida no Local Storage.

![Favoritar Filme](https://ci3.googleusercontent.com/meips/ADKq_NaSv6T8QGk573nX1aRTf_89M_nfZKA2Aaui8wk5sVwMZRJduOH84RfC2QMUcOvzTgn13-H9YuT6uAF7fiNEfEWMXFpSo9-c4nl2cxQnIqHCJYtfBk1unGWOq4rKRjYxpcEY0ti4SPUMq1w5TmlmHqaZwE7cElrhktxCBi70yU3D61zFjgLDGcmgIpuDZJkiUccaHo9OjJzYUlZcq2zFlxyZI9MVVKhALWWUDqbALME1a450qGNqjjruk5w=s0-d-e1-ft#https://empresas.alura.com.br/hs-fs/hubfs/3403540c-9ee5-4083-a4ff-1852c752105e%20(2).png?width=1120&upscale=true&name=3403540c-9ee5-4083-a4ff-1852c752105e%20(2).png)

### Quinta Tarefa: Mostrando apenas os filmes favoritos

Adição de um checkbox que, ao ser marcado, filtra a exibição para mostrar apenas os filmes favoritos. Implementação de um listener para monitorar mudanças no estado do checkbox e atualizar a exibição dos filmes conforme necessário.

[Exibe filmes favoritos](https://ci3.googleusercontent.com/meips/ADKq_NbQ6FT5f7QUw8i39sYHAuEC4hfy6ad2eABVoh5c_iyVxjkt_wIOQgFhYr8GgUFPbAgzw3Wh_uDGLIALwC_L0zTiKnP8ZSsZoRrtT2PG3_ZJCfRxY5GAT-g8kLCG1Q6L27KlsPgHna5tqR6diS27Mry4gb_CKQUEJamObEvZF1xoEoFQ1amGf4Zqz1y7uGxTFkyBkZmFMUEgZd1fIt9OQSoRNUbld_FVWm5wl2s_zZzQWMj4FfN6Jhta6ik=s0-d-e1-ft#https://empresas.alura.com.br/hs-fs/hubfs/3403540c-9ee5-4083-a4ff-1852c752105e%20(3).png?width=1120&upscale=true&name=3403540c-9ee5-4083-a4ff-1852c752105e%20(3).png)

### Tecnologias Utilizadas

- HTML
- CSS
- JavaScript (ES6)
- Fetch API
- Local Storage

### Instruções para Executar o Projeto

1. Clone este repositório.

2. Abra o arquivo `index.html` em um servidor local (recomenda-se o uso da extensão "Live Server" do Visual Studio Code para evitar problemas de CORS).

3. Navegue pela aplicação, utilize a barra de pesquisa para encontrar filmes específicos e marque/desmarque filmes como favoritos.

### Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.
