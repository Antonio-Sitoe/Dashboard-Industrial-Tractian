
![Tractian](https://user-images.githubusercontent.com/72309855/139639140-340b221c-8b6c-4436-aea8-855aef9a5c38.png)


# Tractian Dashbord App!
<a href="https://tractian-pi.vercel.app/">Live Demo</a>

# Tractian
E uma empresa brasileira que trabalha no ramo de manutenção de maquinas industriais.
A TRACTIAN foi fundada em 2019 por Igor e Gabriel, que viram a vida inteira seus pais, coordenadores de manutenção, saindo de madrugada para resolver problemas nas fábricas. Ambos desde cedo trabalharam em indústrias, até que criaram a primeira versão do sensor e da plataforma de monitoramento de máquinas que existe hoje.

Ela tem como um seu principal objectivo aumentar a vida útil das máquinas, através de um

sistema de manutenção preditiva, que evita falhas nas máquinas por ela acopladas.

O sistema e acoplado a uma maquina (activo), e o mesmo escuta o barulho das maquinas e manda relatorios por meio de um aparelho chamado (shazam da industria) para o website, ou para o celular do seu cliente, dando feedback do estado e nível de vida das maquinas.

A empresa também possui uma plataforma digital que auxilia o processo da manutenção, por assim dizer existem enumeras vantagens de aderir ao produto, das quais podemos

citar algumas:

- Manutenção de maquinas (poder realizar manutenções mais precisas)
- Detectar as falhas automáticas (poder detectar as falhas das maquinas muito antes de elas pararem).
- Reduz custos e imprevistos (reduz financeiramente os custos das manutenções)
- A manutenção das maquinas não era precisa - para quem trabalha na área bem sabe que a manutenção das maquinas nunca e precisa, e exacta, e o sensor vem para resolver esses problemas.
- Avisa antes de acontecer algo inesperado - Com uma Uma plataforma fácil de usar, e entender, o cliente tem a facilidade de receber feedback do estado dos activos por meio de correio electrónico, e vias de comunicação.

Para tornar a startup mais grande e subir a um nivel internacional, a Tractian, conta com uma equipe de desenvolvedores, porem ela propos um desafio para ampiar a sua equipe.

# O Desafio

Como podemos ver abaixo, a tractian propos um desafio para Um frontend develper.

O desafio consiste em transformar aquilo que hoje em dia é convencional, (de termos plataformas na area da industria com modelos bem antigos), para  transformar em uma plataforma moderna usando as tecnologias mais recentes e mais usadas nos dias atuais.

Confir a baixo os dados :

# Funcionalidades do site

- Mostrar todas as características do ativos;
    
    Mostrar todos os ativos (com mini discricao)
    
    cada ativo tera a sua pagina e e ai onde vou mostrar os graficos de cada activo.
    
- Mostrar empresas, unidades e usuários;
- Ações como delegar responsável (delegar o rsponsavel de cada ativo, a pessoa que vai controlar cada ativo), atualizar ativo, empresa, unidade e usuários;
- Utilizar gráficos para mostrar os níveis de saúde, status e etc.
- Consumir API ([https://github.com/tractian/fake-api](https://github.com/tractian/fake-api)

Resumindo os requisitos, o profissional da indústria, quer uma plataforma onde será possível analisar com detalhes todo o estado de vida dos seus activos (maquina).

# Qual é tipo de conteudo ?

Informações relevantes para o usuário ficar a par do estado dos seus activos

# Arquitetura de informacoes

**Home ou visao geral** - A informação e distribuição de todos os activos (fotos) e descrição

**Usuários -** Informações sobre os usuários e companhia e a sua funcão

**Unidades -**   As unidades  devem mostrar activos de cada uma delas e deve mostrar todos activos

**Empresas -** a empresa sera como o super admin.

[Atividades Mensal](https://www.notion.so/21f4a291e86f49b79e4f198a71350505?v=266933f7c7d34de290919005195c2662)

# Design

O design foi feito com a ferramenta para webdesigner figma. conforme podemos observar no link abaixo.

## Funcionalidades do layault frontend

Por esta vamos fazer uma tour pelo projecto e vamos começar primeiro pela página de login

**Login** - a página de login, simples pagina com possibilidade de fazer o login e criar uma conta empresa.


![Screenshot from 2021-11-01 09-49-38](https://user-images.githubusercontent.com/72309855/139639204-7f5230eb-a5cc-4e9e-a9a0-91222e6d1551.png)

#
#
#
**Home** -  Sendo ela a pagina principal, você pode encontrar um resumo do que a plataforma faz, pudemos encontrar um gráfico onde mostra o estado de todos os activos em (inAlert ,inOperation,inDowtime), uma tabela onde mostra os 3 primeiros activos, o estado e os seus responsáveis. 3 rotas para adicionar, activos, usuários e unidades.


![Screenshot from 2021-11-01 09-49-51](https://user-images.githubusercontent.com/72309855/139639237-e7b7fd77-dffe-42c1-bee5-a848b0d7f495.png)

#
**Assets** - Na seguinte pagina, podemos encontrar uma visão geral de todos ativos, pode-se ver os itens que considerei mais importante colocar como a saude, a temperatura, e o nome do sensor.Ao clicar em informação, pode se ver mais informações sobre o determinado ativo, gráficos, e possibilidade de adicionar responsáveis pelo determinado ativo


![Screenshot from 2021-11-01 09-50-12](https://user-images.githubusercontent.com/72309855/139639265-b95a681e-e38e-4398-86e0-42f98af2d34c.png)


#
**Users** - Sendo um dos factores mais importantes, limitei me a colocar os itens mais importantes dos usuários, como nome, email, e unidade, acções como editar o nome, email.


![image](https://user-images.githubusercontent.com/72309855/139639373-1c842a37-068b-409c-a338-6ae20099f1e2.png)


#
**Company** - Sendo uma plataforma para usuario final pensei em ter sempre uma pagina onde a empresa pode colocar as suas informacoes necessarias. como localizacao, sobre, foto, unidades.


![Screenshot from 2021-11-01 09-50-33](https://user-images.githubusercontent.com/72309855/139639416-dce05cd3-1fdd-43e4-8ef8-347154c26ef9.png)

#
# Bibliotecas e feramentas

**Reactjs** - reactjs é uma biblioteca de javascript que nos ajuda, a trabalhar com componentes reutilizáveis, e criar user interfaces incríveis de forma fácil e performática, capaz de trabalhar e integrar com varias outras bibliotecas.

**Highcharts-react** - biblioteca de apresentação de graficos em javascript. com capacidade de customização de graficos, efeitos e atributos javascript, css e html.

**Styled-components** - Biblioteca css in js, que nos ajuda a trabalhar com css dentro do javascript e automatiza o desenvolvimento de estilização.

**react-toastify** Biblioteca para apresentação de mensagens de aviso, sucesso, erro e outros.

# Imagens

As imagens encontradas no projeto sao retornadas da api, que foi utilizada para consumir.
Os ícones e svgs foram extraídas da comunidade do figma.
Ícones da empresa tractian, foram retirados do próprio website da empresa.

# Fontes

Como ferramenta para fontes do projecto usei o Google fonts

```css
font-family:"Zen Kaku Gothic";
font-family:"Nunito"
font-family:"Poppins"
```

# Para Clonar

Como ferramenta para fontes do projecto usei o Google fonts

```jsx
git clone https://github.com/Antonio-Sitoe/Tractian.git
```

# Para instalar os pacotes

```jsx
npm install
```

# Para iniciar o servidor

```jsx
npm run dev
```




