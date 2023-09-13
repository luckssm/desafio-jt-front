# Para rodar os projetos

### Front-end

Não deve ter muitos problemas para rodar "npm run dev" após instalar as dependências. Para acessar a api local, precisei definir a rota como "http://127.0.0.1:4000/api/graphql" (não entendi muito bem o motivo), então se tiver algum problema com a conexão à API talvez valha a pena dar uma olhada nisso.

### Back-end

Precisa de ao menos um usuário cadastrado (ID 1). Deixei uma seed pronta, então pode ser interessante rodar antes de iniciar o projeto.

# Observações

### Carrinho

Minha ideia era fazer a chamada para o backend na hora de adicionar itens no carrinho somente quando o usuário estivesse logado. Caso tentasse adicionar deslogado, adicionaria somente no redux, sem chamada ao backend. Como não deu tempo de fazer a parte de logar um usuário, acabei deixando acessar o backend sempre que adicionar um item, utilizando o usuário de ID = 1. Ou seja, este usuário precisa estar no banco de dados para a ação funcionar.

Além disso, também devido à falta de autenticação (ou ao menos um mock disso), quando o usuário acessa a plataforma pela primeira vez, os dados do carrinho não são carregados. O carrinho só é atualizado quando o usuário clica em "Comprar Ingresso".

### Testes

Devido ao tempo curto, priorizei outras tarefas e no final fiz poucos testes. Imagino que poderia ter feito pelo menos mais uns dois ou três no front e mais alguns unitários e de integração no back-end. Para tentar cobrir mais casos considerando o pouco tempo, foquei em testes de integração no back-end e E2E no front-end.

### TODOs

Deixei alguns TODOs no meio do código para indicar o que poderia ser feito ainda, mas que devido ao tempo limitado não foi priorizado. Normalmente adicionaria essas informações em tasks no backlog do projeto.

### Popups de confirmação

O ideal na minha opinião seria exibir alguns popups de confirmação ou duplo clique para confirmar a ação (na hora de excluir um item do carrinho por exemplo), porém isso também não foi priorizado.

### Responsividade

Isso foi algo que deixei um pouco de lado. Responsividade pode ter uns detalhes chatinhos que acabam atrasando e eu não quis arriscar perder tempo com um prazo tão curto. Em um projeto normal é claro que isso teria que ser trabalhado junto com o código (provavelmente com uma abordagem mobile first, mas isso depende das especificações do projeto).

Além disso, como não encontrei muitos detalhes sobre o design mobile no figma, considerei que não era tão relevante para esse projeto. Eu até poderia ter pensado em um design mobile (tamanhos de fontes diferentes, tamanhos de componentes, posicionamento de elementos, etc), mas considerando o tempo e o que precisava ser feito, deixei essa tarefa de lado.

### Imagens

As imagens estão estáticas no projeto, porém a ideia seria pegar a url da imagem no S3 (AWS) do ticket no backend. Acabei optando por nem simular isso por achar sem muito sentido (implementar estava fora de questão).

### Preços na tela inicial

Os preços acima do botão "Saber mais" na tela inicial estão como no design, porque teria que entender a lógica desse "de - por". Preferi não focar nisso.

### Detalhes de um ingresso

##### Perks

Para simplificar neste momento, os "perks" de um Ticket acabaram sendo únicos. Acabei não parando para pensar em uma maneira boa de pegar vários, embora o front esteja preparado para exibir vários.

##### Localização

A localização imagino que seria uma coordenada geográfica pelo design, mas também não gastei muito tempo pensando nisso. No backend é uma string (poderia ser um estado ou simplesmente a url de uma imagem no S3).

##### Data do Ingresso

A Data do Ingresso está fixa, mas o ideal seria adicionar um componente de calendário para selecionar a data local. Foi feito assim para simplificar.

##### Ingressos (quantidade) e preço

Mesma coisa para os ingressos, fiz de uma maneira que cada data tenha 1 ingresso adulto e um infantil (não existe essa validação no backend, mas poderia existir) e ao clicar em "Comprar Ingresso", os dois ingressos exibidos são adicionados no carrinho de uma vez. O ideal seria ter um componente de seleção de ingressos.

##### Avaliações

As avaliações estão fixas, mas a ideia seria criar uma tabela no banco de dados com as avaliações dos usuários e puxar essas informações junto com os detalhes de um ingresso.

### Dificuldades

Sem dúvidas minha maior dificuldade foi desenvolver o back-end. Nunca tinha trabalhado nem com GraphQL nem com Elixir e Phoenix, então acabei perdendo um bom tempo nisso até entender mais ou menos como fazer.

Eu poderia ter feito em Node.js, porém ainda teria uma curva de aprendizado com GraphQL e considerando que Elixir + Phoenix é o que vocês usam, decidi aprender para ver como é o trabalho com essas ferramentas.

Ainda não entendi perfeitamente muitas coisas, pois sinto que não daria tempo para entregar muito se tivesse parado para ir mais a fundo nos detalhes neste momento. Estou satisfeito com o resultado, mas sei que é possível melhorar inúmeras coisas após entender um pouco mais como a linguagem e o framework funcionam e suas convenções.

### Conclusão

Embora esteja satisfeito com a entrega considerando o prazo estabelecido, sei que existem muitas correções e melhorias que seriam necessárias para ter um projeto um pouco mais robusto e interessante.

Gastei muito tempo aprendendo e apanhando do back-end, então não sei se teria conseguido entregar muito mais se já soubesse utilizar a ferramenta antes.