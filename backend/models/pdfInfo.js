const mongoose = require('mongoose');

const pdfInfoSchema = new mongoose.Schema(
  {
    pdf: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'pdfInfo',
  }
);

const PdfInfo = mongoose.model('PdfInfo', pdfInfoSchema);

module.exports = PdfInfo;
