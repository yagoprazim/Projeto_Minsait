# 🚀 Projeto_Minsait (AppProdutos)

Este projeto se trata de um **CRUD de Produtos**, sendo o **Front-end** feito em **Angular** (estilizado com **Bootstrap**) e a **API** feita em **Java** (**Spring**). Tendo o fim de gerar uma aplicação **fullstack** para processo de avaliação da capacitação da **Minsait**.

#  [![My Skills](https://skillicons.dev/icons?i=angular)](https://skillicons.dev) Front-End
### :pushpin: Requerimentos
- Angular-cli version 16.2.7
- NodeJs version 18.18.0
------------------------------------------------------------------------------------------------------
### :computer: Instalação e Execução
No seu ambiente de desenvolvimento, escolha um diretório e, no terminal, execute:
- git clone https://github.com/yagoprazim/Projeto_Minsait.git
- cd .\Projeto_Minsait\front-end\
- npm install
- ng serve
- Em seu navegador, acesse: http://localhost:4200/
------------------------------------------------------------------------------------------------------
### :open_file_folder: Estrutura (Principais Arquivos)
1. __COMPONENTS__:
   - __Header__: Contém a estrutura do navbar da página, sendo reaproveitada em todas as páginas da aplicação
   - __Formulario__: Trata-se da estrutura do formulário que é reaproveitado pelas páginas de 'cadastra-produtos' e 'atualiza-produtos'. Possui diversas implementações, como: formGroup + Ngx-Mask para tratar as validações dos campos do formulário.

2. __INTERFACES__:
   - __IProduto__: Interface principal para mapear os campos da Entidade Produto da API que está sendo consumida, servindo para Tipar corretamente os dados no Front-End.
   - __IData__: Usada para tipar os campos da feature 'ngx-charts', utilizada na página home.

3. __PAGES__:
   - __Home__: Trata-se da página inicial, a qual contém a implementação de gráficos (ngx-charts) que são gerados de acordo com a quantidade e preço dos produtos cadastrados no banco de dados.
   - __Produtos__: Trata-se da página que contém as principais interações com os outros componentes. Ela serve para listar os produtos, como também, dar acesso às rotas de cadastrar, editar, e a opção de deletar um produto.
   - __Cadastra-Produtos__: Consome a base do component de formulário, implementando uma função para cadastro de produtos.
   - __Atualiza-Produtos__: Consome a base do component de formulário, implementando uma função para atualização de produtos.

4. __SERVICES__:
   - __Produto__: Contém os métodos HTTP que são utilizados pelas páginas para interagir e consumir os dados da API, como também, algumas funções complementares que são utilizadas pela aplicação.
   - __Alerta__: Contém funções organizadas para auxiliar na implementação dos 'sweetalerts' nas páginas da aplicação.

5. __APP-ROUTING__:
   - É onde estão definidas as rotas da aplicação, como:
   1. http://localhost:4200/ (rota inicial);
   2. http://localhost:4200/produtos (rota que lista produtos, entre outras funções);
   3. http://localhost:4200/produtos/cadastrar (rota que cadastra produto);
   4. http://localhost:4200/produtos/atualizar/:id (rota que edita produto pelo id).
------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------

# <img src="https://user-images.githubusercontent.com/25181517/183891303-41f257f8-6b3d-487c-aa56-c497b880d0fb.png" width="40" height="40" alt="Spring Boot"> Back-End 
### :pushpin: Requerimentos
- Java JDK version 17.0.8
- Maven version 4.0.0
- Spring Boot 3.0.12
------------------------------------------------------------------------------------------------------
### :computer: Instalação e Execução
No seu ambiente de desenvolvimento, escolha um diretório e, no terminal, execute:
- git clone https://github.com/yagoprazim/Projeto_Minsait.git
- cd .\Projeto_Minsait\back-end\
- Verifique se o Maven baixou corretamente as dependências que estão no arquivo pom.xml
- Dê um 'run' em AppProdutosApplication
- Em seu navegador, acesse: http://localhost:8080/
------------------------------------------------------------------------------------------------------
### :open_file_folder: Estrutura (Principais Arquivos)
1. __MODEL__:
   Contém as Entidades da aplicação: Produto e Estoque.

2. __REPOSITORY__:
   Contém interfaces que herdam de JpaRepository, para que cada Entidade tenha acesso aos métodos que serão responsáveis pelas queries que serão feitas no banco de dados.

3. __SERVICE__:
   É onde estão as regras de negócio da aplicação, as chamadas aos métodos herdados pelos repositories, como validações necessárias.

4. __RESOURCE__:
   Package responsável por conter as chamadas HTTP que consomem os services.
   
5. __CONFIG__:
   Possui os arquivos de configuração do Swagger e do CORS.

6. __EXCEPTION__:
   Tratamentos básicos de algumas exceções, para permitir a personalização de mensagens no tratamento de erros de NotFound.

7. __APPLICATION.PROPERTIES__:
   É onde estão as configurações da aplicação, incluindo, o nome do banco de dados e demais configurações do mesmo.

8. __POM.XML__:
   É onde podemos visualizar e gerenciar as dependências utilizadas pela aplicação.
------------------------------------------------------------------------------------------------------
### :unlock: Endpoints Principais Consumidos pelo Front
- GET http://localhost:8080/api/produtos (lista todos os produtos)
- POST http://localhost:8080/api/produtos (cadastra um produto)
- PUT http://localhost:8080/api/produtos (atualiza um produto, passando o id no body)
- DELETE http://localhost:8080/api/produtos/id (exclui um produto)
------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------

# <img src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" width="40" height="40" alt="Spring Boot"> DATABASE
Foi utilizado o **MySQL 8.0** para criação do banco de dados, e o **Workbench 8.0** para gerenciamento do banco.
- Atenção: Criar banco de dados de acordo com as configurações estabelecidas no application.properties do back-end, caso não queira, modifique tal arquivo para atender ao seu critério.





