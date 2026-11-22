# RotaFácil — Gerenciador Logístico

**Aluno:** Higor Daniel Pereira de Andrade  
**Curso:** Análise e Desenvolvimento de Sistemas (ADS)  
**Disciplina:** Fundamentos de Programação para Internet  
**Professor:** Huilson José Lorenzi  
**Data:** 10/11/2026

## Descrição
Aplicação web acadêmica para cadastrar e editar produtos, endereços e transportadores, criar fretes com **vários produtos para um transportador**, consultar entregas e baixar relatório diário em CSV.

## Tecnologias
PHP 8+, MySQL/MariaDB, HTML5, CSS3, JavaScript, Bootstrap 5.3, PDO e Git.

## Como executar no XAMPP
1. Instale o XAMPP e inicie **Apache** e **MySQL**.
2. Copie a pasta `Projeto_APO_Logistica` para `C:\\xampp\\htdocs\\` (Windows) ou a pasta `htdocs` da sua instalação.
3. Abra `http://localhost/phpmyadmin` e importe o arquivo `sql/banco.sql` (a importação cria o banco `apo_logistica`).
4. Se o MySQL tiver senha, ajuste `DB_USER` e `DB_PASS` no arquivo `config.php`.
5. Acesse `http://localhost/Projeto_APO_Logistica/`.
6. Cadastre um produto, dois endereços e um transportador; depois crie um frete com dois produtos e exporte o relatório.

**Observação:** o Bootstrap é carregado por CDN, portanto o visual completo exige conexão à internet. A aplicação utiliza dados locais no MySQL.

## Organização
- `index.php`: rotas, formulários, consultas, criação de fretes e exportação CSV.
- `config.php`: conexão PDO com MySQL.
- `sql/banco.sql`: estrutura das tabelas e relacionamentos.
- `assets/app.js`: adição e remoção dinâmica de itens de frete.
- `assets/style.css`: estilos adicionais.
- `docs/`: modelos de telas, relatório e roteiro do vídeo.

## Funcionalidades e limites
- Cadastro e edição de produtos, endereços e transportadores.
- Fretes relacionam transportador, origem, destino e múltiplos produtos com quantidades.
- Exportação de relatório por dia em CSV com separador `;`.
- Proteção básica com consultas preparadas, escape HTML e token CSRF.
- Não há login, exclusão de registros nem edição de fretes. Projeto acadêmico, não sistema de produção.

## Versionamento sugerido
Faça commits **reais** no seu repositório, por exemplo:
```bash
git init
git add sql config.php
git commit -m "Cria banco de dados e conexao PDO"
git add index.php
git commit -m "Implementa cadastros e fretes"
git add assets docs README.md
git commit -m "Adiciona interface, relatorios e documentacao"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```
O histórico de commits só existirá depois que você executar os comandos. Não inclua credenciais pessoais no GitHub.

## Referências
- PHP. *Manual do PHP*. https://www.php.net/manual/pt_BR/
- MDN Web Docs. *JavaScript*. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
- Bootstrap. *Documentação*. https://getbootstrap.com/docs/5.3/
- Git. *Pro Git*. https://git-scm.com/book/pt-br/v2
- W3Schools. *Referências de desenvolvimento web*. https://www.w3schools.com/

Projeto elaborado para a APO de Fundamentos de Programação para Internet, conforme roteiro fornecido na disciplina.
