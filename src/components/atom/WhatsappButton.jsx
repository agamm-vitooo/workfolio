// WhatsAppButton.jsx
import React from 'react';
import { motion } from 'framer-motion';

function WhatsAppButton() {
  const phoneNumber = '08895576402'; // Ganti dengan nomor WhatsApp Anda
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 p-3 rounded-full shadow-lg z-50"
      whileHover={{ scale: 1.1, rotate: 5 }}  // Tambahkan efek skala dan rotasi saat hover
      whileTap={{ scale: 0.9 }} // Efek saat diklik
    >
      <motion.img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-8 h-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.a>
  );
}

export default WhatsAppButton;
