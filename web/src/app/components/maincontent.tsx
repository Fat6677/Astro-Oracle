'use client'; // Diperlukan karena menggunakan hook useState

import { useState } from 'react';

export default function MainContent() {
  const [showPrompt, setShowPrompt] = useState(false);

  
  const handlePromptSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Fitur AI akan segera terhubung! Ini hanyalah simulasi.");
  };