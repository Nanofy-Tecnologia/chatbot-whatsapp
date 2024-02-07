<p align="center">
  <h2 align="center">Pedro Psiquiatra</h2>
</p>

### 📌 Sobre

Esse projeto foi desenvolvido com intuito para introdução no desenvolvimento de Chatbots, permitido comunicação mais rápida entre cliente e empresa. O projeto foi desenvolvido a partir da LIB WWebJs que simula uma autenticação com Whatsapp Web e não trabalha diretamente com a API da META (Em desenvolvimento para usar a API oficial).

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [WWebJs](https://wwebjs.dev/guide/#installation)
- [qrcode-terminal](https://github.com/gtanner/qrcode-terminal)

### 🎲 Rodando o projeto

```bash
# Clone este repositório
$ git clone

# Instale as dependências
$ npm install

# Gere o QRCode e escaneie o mesmo utilizando o Whatsapp Mobile
# Para gerar o QRCode basta adicionar o código abaixo na aplicação
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000
```

### 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por **Nanofy Tecnologia** 👋🏽
