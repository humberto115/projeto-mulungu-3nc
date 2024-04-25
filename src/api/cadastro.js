"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3333;
app.use(body_parser_1.default.json());
app.post('/api/usuarios', (req, res) => {
    res.json({ message: 'Usuário cadastrado com sucesso!' });
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
