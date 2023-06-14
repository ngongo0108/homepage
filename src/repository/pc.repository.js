// pc.repository.js

const PC = require('models/pc.model'); // PC model

class PCRepository {
  constructor() {
    this.pcs = []; // Danh sách các PC
  }

  // Lấy danh sách tất cả PC
  getAllPCs() {
    return this.pcs.map(pc => pc.toJSON());
  }

  // Lấy PC theo ID
  getPCById(id) {
    const pc = this.pcs.find(pc => pc.id === id);
    return pc ? pc.toJSON() : null;
  }

  // Tạo mới PC
  createPC(pcData) {
    const newPC = new PC(pcData);
    this.pcs.push(newPC);
    return newPC.id;
  }

  // Cập nhật PC
  updatePC(id, pcData) {
    const pcIndex = this.pcs.findIndex(pc => pc.id === id);
    if (pcIndex !== -1) {
      const updatedPC = new PC({ id, ...pcData });
      this.pcs[pcIndex] = updatedPC;
    }
  }

  // Xóa PC
  deletePC(id) {
    const pcIndex = this.pcs.findIndex(pc => pc.id === id);
    if (pcIndex !== -1) {
      this.pcs.splice(pcIndex, 1);
    }
  }
}

module.exports = new PCRepository();
