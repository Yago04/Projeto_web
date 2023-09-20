const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3000;

// Criação do banco de dados SQLite
const db = new sqlite3.Database('./estoque.db');

// Criação da tabela 'estoque' (se não existir)
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS estoque (id INTEGER PRIMARY KEY, nome TEXT, qtd INTEGER)');
});

app.use(express.json());

// Rota para cadastrar um item no estoque
app.post('/api/estoque/cadastrar/:id/:nome/:qtd', (req, res) => {
  const { id, nome, qtd } = req.params;
  db.run('INSERT INTO estoque (id, nome, qtd) VALUES (?, ?, ?)', [id, nome, qtd], (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Erro ao cadastrar o item no estoque.' });
      return;
    }
    res.json({ message: 'Item cadastrado com sucesso.' });
  });
});

// Rota para listar todos os itens do estoque
app.get('/api/estoque/listar', (req, res) => {
  db.all('SELECT * FROM estoque', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Erro ao listar os itens do estoque.' });
      return;
    }
    res.json(rows);
  });
});

// Rota para editar a quantidade de um item no estoque
app.put('/api/estoque/editar/:id/:qtd', (req, res) => {
  const { id, qtd } = req.params;
  db.run('UPDATE estoque SET qtd = ? WHERE id = ?', [qtd, id], (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Erro ao editar a quantidade do item no estoque.' });
      return;
    }
    res.json({ message: 'Quantidade editada com sucesso.' });
  });
});

// Rota para remover um item do estoque
app.delete('/api/estoque/remover/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM estoque WHERE id = ?', id, (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Erro ao remover o item do estoque.' });
      return;
    }
    res.json({ message: 'Item removido com sucesso.' });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
