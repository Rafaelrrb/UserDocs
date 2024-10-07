# API de Usuários e Documentos

## Instruções para Rodar o Projeto Localmente

### 1. Clone o Repositório
Abra seu terminal e execute os seguintes comandos para clonar o repositório

```bash
git clone <URL do repositório >
cd <nome do diretório >
```

### 2. Instale as Dependências
Após navegar para o diretório do projeto, instale as dependências necessárias com o npm:
```bash
npm install
```

### 3. Inicie o Servidor
Com as dependências instaladas, você pode iniciar o servidor da API executando o seguinte comando:
```bash
node index.js
```
### 4. Acesse a API
A API estará disponível em: http://localhost:3001


## Endpoints

### 1. **Criar Usuário**
- **Método**: `POST`
- **Endpoint**: `/users`
- **Parâmetros**: 
  - **Body**:
    ```json
    {
      "name": "Nome do Usuário",
      "email": "email@exemplo.com"
    }
    ```
- **Exemplo de Resposta**:
  - **Status 201**: Usuário criado com sucesso.
    ```json
    {
      "id": 1,
      "name": "Nome do Usuário",
      "email": "email@exemplo.com",
      "documents": []
    }
    ```

### 2. **Listar Todos os Usuários**
- **Método**: `GET`
- **Endpoint**: `/users`
- **Exemplo de Resposta**:
  - **Status 200**: Retorna uma lista de usuários.
    ```json
    [
      {
        "id": 1,
        "name": "Nome do Usuário",
        "email": "email@exemplo.com",
        "documents": []
      }
    ]
    ```

### 3. **Buscar Usuário por ID**
- **Método**: `GET`
- **Endpoint**: `/users/:id`
- **Parâmetros**:
  - `id` (número): ID do usuário a ser buscado.
- **Exemplo de Resposta**:
  - **Status 200**: Usuário encontrado.
    ```json
    {
      "id": 1,
      "name": "Nome do Usuário",
      "email": "email@exemplo.com",
      "documents": []
    }
    ```
  - **Status 404**: Usuário não encontrado.
    ```json
    {
      "error": "User not found"
    }
    ```

### 4. **Atualizar Usuário**
- **Método**: `PUT`
- **Endpoint**: `/users/:id`
- **Parâmetros**:
  - `id` (número): ID do usuário a ser atualizado.
  - **Body**:
    ```json
    {
      "name": "Novo Nome",
      "email": "novoemail@exemplo.com"
    }
    ```
- **Exemplo de Resposta**:
  - **Status 200**: Usuário atualizado.
    ```json
    {
      "id": 1,
      "name": "Novo Nome",
      "email": "novoemail@exemplo.com",
      "documents": []
    }
    ```
  - **Status 404**: Usuário não encontrado.
    ```json
    {
      "error": "User not found"
    }
    ```

### 5. **Deletar Usuário**
- **Método**: `DELETE`
- **Endpoint**: `/users/:id`
- **Parâmetros**:
  - `id` (número): ID do usuário a ser deletado.
- **Exemplo de Resposta**:
  - **Status 204**: Usuário deletado com sucesso.
  - **Status 404**: Usuário não encontrado.
    ```json
    {
      "error": "User not found"
    }
    ```

---

### 6. **Criar Documento**
- **Método**: `POST`
- **Endpoint**: `/users/:userId/documents`
- **Parâmetros**:
  - `userId` (número): ID do usuário que o documento pertence.
  - **Body**:
    ```json
    {
      "name": "Nome do Documento",
      "status": "Status do Documento"
    }
    ```
- **Exemplo de Resposta**:
  - **Status 201**: Documento criado com sucesso.
    ```json
    {
      "id": 1,
      "userId": 1,
      "name": "Nome do Documento",
      "status": "Status do Documento"
    }
    ```
  - **Status 404**: Usuário não encontrado.
    ```json
    {
      "error": "User not found"
    }
    ```

### 7. **Listar Documentos de um Usuário**
- **Método**: `GET`
- **Endpoint**: `/users/:userId/documents`
- **Parâmetros**:
  - `userId` (número): ID do usuário.
- **Exemplo de Resposta**:
  - **Status 200**: Retorna uma lista de documentos do usuário.
    ```json
    [
      {
        "id": 1,
        "userId": 1,
        "name": "Nome do Documento",
        "status": "Status do Documento"
      }
    ]
    ```
  - **Status 404**: Usuário não encontrado.
    ```json
    {
      "error": "User not found"
    }
    ```

### 8. **Buscar Documento por ID**
- **Método**: `GET`
- **Endpoint**: `/users/:userId/documents/:id`
- **Parâmetros**:
  - `userId` (número): ID do usuário.
  - `id` (número): ID do documento a ser buscado.
- **Exemplo de Resposta**:
  - **Status 200**: Documento encontrado.
    ```json
    {
      "id": 1,
      "userId": 1,
      "name": "Nome do Documento",
      "status": "Status do Documento"
    }
    ```
  - **Status 404**: Documento não encontrado.
    ```json
    {
      "error": "Document not found"
    }
    ```
  - **Status 404**: Usuário não encontrado.
    ```json
    {
      "error": "User not found"
    }
    ```

### 9. **Atualizar Documento**
- **Método**: `PUT`
- **Endpoint**: `/users/:userId/documents/:id`
- **Parâmetros**:
  - `userId` (número): ID do usuário.
  - `id` (número): ID do documento a ser atualizado.
  - **Body**:
    ```json
    {
      "name": "Novo Nome",
      "status": "Novo Status"
    }
    ```
- **Exemplo de Resposta**:
  - **Status 200**: Documento atualizado.
    ```json
    {
      "id": 1,
      "userId": 1,
      "name": "Novo Nome",
      "status": "Novo Status"
    }
    ```
  - **Status 404**: Documento não encontrado.
    ```json
    {
      "error": "Document not found"
    }
    ```
  - **Status 404**: Usuário não encontrado.
    ```json
    {
      "error": "User not found"
    }
    ```

### 10. **Deletar Documento**
- **Método**: `DELETE`
- **Endpoint**: `/users/:userId/documents/:id`
- **Parâmetros**:
  - `userId` (número): ID do usuário.
  - `id` (número): ID do documento a ser deletado.
- **Exemplo de Resposta**:
  - **Status 204**: Documento deletado com sucesso.
  - **Status 404**: Documento não encontrado.
    ```json
    {
      "error": "Document not found"
    }
    ```
  - **Status 404**: Usuário não encontrado.
    ```json
    {
      "error": "User not found"
    }
    ```

---

