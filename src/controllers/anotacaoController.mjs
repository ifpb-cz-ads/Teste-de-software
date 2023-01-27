// Importando módulos
import * as dotenv from "dotenv";
import * as Anotacao from '../models/Anotacao.mjs';

// Configurações
dotenv.config();

// Rotas
// Front
	const index = async (req, res) => {
		const anotacoes = await Anotacao.readAll();

		res.render('anotacoes/index.html', {anotacoes});
	}

	const addForm = async (req, res) => {
		res.render('anotacoes/form.html');
	}

// CRUD
	// Adicionar anotação
	const add = async (req, res) => {
		// Dados
		const {titulo, conteudo} = req.body;
		const anotacao = {titulo, conteudo};

		await Anotacao.create(anotacao);

		res.json("Salvo com sucesso!");
	}

	// Buscar todas
	const list = async (req, res) => {
		const lista = await Anotacao.readAll();

		res.json(lista);
	}

	// Busca específica
	const busca = async (req, res) => {
		const {pesquisa} = req.query;
		
		const anotacoes = await Anotacao.readOne(pesquisa);
		
		res.render("anotacoes/index.html", {anotacoes});
	}

	// Atualizar
	const update = async (req, res) => {
		const {pesquisa, atualizado} = req.body;
		
		const updated = await Anotacao.update(pesquisa, atualizado);

		res.json(updated);
	}

	// Deletar
	const deletar = async (req, res) => {
		const {pesquisa} = req.body;
		
		const deletado = await Anotacao.deletar(pesquisa);

		res.json(deletado);
	}


export {add, list, busca, update, deletar, index, addForm};
