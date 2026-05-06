const Evento = require('../models/Evento');

exports.create = async (req, res) => {
  try {
    const evento = await Evento.create({
      ...req.body,
      criadoPor: req.userId
    });
    res.status(201).json(evento);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
};

exports.getAll = async (req, res) => {
  const eventos = await Evento.find().populate('criadoPor', 'nome');
  res.json(eventos);
};

exports.update = async (req, res) => {
  await Evento.findByIdAndUpdate(req.params.id, req.body);
  res.json({ msg: "Atualizado" });
};

exports.delete = async (req, res) => {
  await Evento.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deletado" });
};
