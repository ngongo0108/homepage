// pc.controller.js

const express = require('express');
const PCService = require('services/pc.service'); // PC service

const router = express.Router();

// Get all PCs
router.get('/pcs', async (req, res) => {
  try {
    const pcs = await PCService.getAllPCs();
    res.json(pcs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a PC by ID
router.get('/pcs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const pc = await PCService.getPCById(id);
    res.json(pc);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Create a new PC
router.post('/pcs', async (req, res) => {
  const pcData = req.body;
  try {
    const pcId = await PCService.createPC(pcData);
    res.json({ id: pcId, message: 'PC created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a PC
router.put('/pcs/:id', async (req, res) => {
  const { id } = req.params;
  const pcData = req.body;
  try {
    await PCService.updatePC(id, pcData);
    res.json({ message: 'PC updated successfully' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Delete a PC
router.delete('/pcs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await PCService.deletePC(id);
    res.json({ message: 'PC deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
