const express = require('express');
const PdfInfo = require('../models/pdfInfo');
const upload = require('../middleware/upload');

const router = express.Router();

router.post('/upload-files', upload.single('file'), async (req, res) => {
  const { title } = req.body;
  const fileName = req.file.filename;

  try {
    await PdfInfo.create({ title, pdf: fileName });
    res.status(200).json({ status: 'okay' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

router.get('/get-file', async (req, res) => {
  try {
    const files = await PdfInfo.find({});
    res.status(200).json({ status: 'okay', data: files });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

module.exports = router;
