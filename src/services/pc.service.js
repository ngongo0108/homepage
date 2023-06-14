// pc.service.js

const PCRepository = require('repositories/pc.repository'); // PC repository

class PCService {
  constructor() {
    this.pcRepository = PCRepository;
  }

  // Get all PCs
  async getAllPCs() {
    try {
      return await this.pcRepository.getAllPCs();
    } catch (error) {
      throw new Error('Error retrieving PCs');
    }
  }

  // Get a PC by ID
  async getPCById(id) {
    try {
      const pc = await this.pcRepository.getPCById(id);
      if (!pc) {
        throw new Error('PC not found');
      }
      return pc;
    } catch (error) {
      throw new Error('Error retrieving PC');
    }
  }

  // Create a new PC
  async createPC(pcData) {
    try {
      return await this.pcRepository.createPC(pcData);
    } catch (error) {
      throw new Error('Error creating PC');
    }
  }

  // Update a PC
  async updatePC(id, pcData) {
    try {
      const pc = await this.pcRepository.getPCById(id);
      if (!pc) {
        throw new Error('PC not found');
      }
      await this.pcRepository.updatePC(id, pcData);
    } catch (error) {
      throw new Error('Error updating PC');
    }
  }

  // Delete a PC
  async deletePC(id) {
    try {
      const pc = await this.pcRepository.getPCById(id);
      if (!pc) {
        throw new Error('PC not found');
      }
      await this.pcRepository.deletePC(id);
    } catch (error) {
      throw new Error('Error deleting PC');
    }
  }
}

module.exports = new PCService();