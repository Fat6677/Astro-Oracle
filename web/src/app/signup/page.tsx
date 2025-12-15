// src/app/signup/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SignUp.module.css';

type SignUpFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  zodiac: string;
  agreeTerms: boolean;
  newsletter: boolean;
};

type ZodiacOption = {
  value: string;
  label: string;
  symbol: string;
  element: string;
  dates: string;
};