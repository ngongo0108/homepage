// pc.service.js

const PCRepository = require('repositories/pc.repository'); // PC repository

class PCService {
  constructor() {
    this.pcRepository = PCRepository;
  }

  getAllPCs() {
    return this.pcRepository.getAllPCs();
  }

  getPCById(id) {
    return this.pcRepository.getPCById(id);
  }

  createPC(pcData) {
    const pcId = this.pcRepository.createPC(pcData);
    return pcId;
  }

  updatePC(id, pcData) {
    this.pcRepository.updatePC(id, pcData);
  }

  deletePC(id) {
    this.pcRepository.deletePC(id);
  }
}

module.exports = new PCService();
