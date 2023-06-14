// pc.repository.js

const db = require('database'); // Database module
const PC = require('models/pc.model'); // PC data model

class PCRepository {
  // Get all PCs from the database
  async getAllPCs() {
    try {
      const pcs = await db.query('SELECT * FROM pcs');
      return pcs.map(pc => new PC(pc));
    } catch (error) {
      throw new Error('Error retrieving PCs from the database');
    }
  }

  // Get a PC by ID from the database
  async getPCById(id) {
    try {
      const pc = await db.query('SELECT * FROM pcs WHERE id = ?', [id]);
      return pc ? new PC(pc) : null;
    } catch (error) {
      throw new Error('Error retrieving PC from the database');
    }
  }

  // Create a new PC in the database
  async createPC(pcData) {
    try {
      const result = await db.query('INSERT INTO pcs SET ?', pcData);
      return result.insertId;
    } catch (error) {
      throw new Error('Error creating PC in the database');
    }
  }

  // Update a PC in the database
  async updatePC(id, pcData) {
    try {
      await db.query('UPDATE pcs SET ? WHERE id = ?', [pcData, id]);
    } catch (error) {
      throw new Error('Error updating PC in the database');
    }
  }

  // Delete a PC from the database
  async deletePC(id) {
    try {
      await db.query('DELETE FROM pcs WHERE id = ?', [id]);
    } catch (error) {
      throw new Error('Error deleting PC from the database');
    }
  }
}

module.exports = new PCRepository();
