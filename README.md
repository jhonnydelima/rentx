# RentalX  (Still in progress...)

Car rental API

---
## Requirements

### Cadastro de carro
**RF**
- Deve ser possível cadastrar um novo carro.

**RN**
- [x] Não deve ser possível cadastrar um carro com uma placa já existente.
- [x] O carro deve ser cadastrado, por padrão, como disponível.
- [x] O usuário responsável pelo cadastro deve ser um usuário administrador.

### Listagem de carros
**RF**
- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
- [x] O usuário não precisa estar logado no sistema.

### Cadastro de especificação de carro
**RF**
- Deve ser possível cadastrar uma especificação para um carro.
- Deve ser possível listar todas as especificações.
- Deve ser possível listar todos os carros.

**RN**
- [ ] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- [ ] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- [ ] O usuário responsável pelo cadastro deve ser um usuário administrador.

### Cadastro de imagens do carro
**RF**
- Deve ser possível cadastrar a imagem do carro.
- Deve ser possível listar todos os carros.

**RNF**
- Utilizar o multer para upload dos arquivos.

**RN**
- [ ] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- [ ] O usuário responsável pelo cadastro deve ser um usuário administrador.

### Aluguel de carro
**RF**
- Deve ser possível cadastrar um aluguel.

**RN**
- [ ] O aluguel deve ter duração mínima de 24 horas.
- [ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- [ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.

---
### Main technologies:
- Node.js (https://nodejs.org/en/)
- TypeScript (https://www.typescriptlang.org/docs/)
- Express.js (http://expressjs.com/)
- TSyringe (https://www.npmjs.com/package/tsyringe)
- BCrypt (https://www.npmjs.com/package/bcrypt)
- JWT (https://jwt.io/)
- Docker (https://docs.docker.com/)
- TypeORM (https://typeorm.io/#/)
- PostgreSQL (https://www.postgresql.org/)

---
### How to run this project:

### 1. Clone this repository
```
$ git clone https://github.com/jhonnydelima/rentalx
```

### 2. Running the application on your terminal
```
#install the dependencies
$ yarn

#start the server
$ yarn dev
```

---
### Swagger Documentation

- Check the swagger documentation locally in: http://localhost:3333/api-docs

---
### 📄 License
This project is under MIT license. See the [LICENSE](https://github.com/jhonnydelima/rentalx/blob/main/LICENSE) file for more details.