import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';

const app = express();
const port = 3306;

app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'crud_usuario'
});


connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL!');
});

app.post('/api/usuarios', (req, res) => {
    const novoUsuario = req.body;

    
    connection.query('INSERT INTO usuarios SET ?', novoUsuario, (err, result) => {
        if (err) {
            console.error('Erro ao inserir usuário:', err);
            res.status(500).json({ error: 'Erro ao cadastrar usuário' });
            return;
        }
        console.log('Usuário cadastrado com sucesso!');
        res.json({ message: 'Usuário cadastrado com sucesso!' });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
