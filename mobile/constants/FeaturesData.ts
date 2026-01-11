export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  path: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export const features: Feature[] = [
  {
    id: 1,
    title: 'Compatibility',
    description: 'Cek kecocokan zodiak mendalam',
    icon: '💫',
    color: '#8B5CF6',
    path: '/compatibility',
    isPopular: true
  },
  // ... tambahkan fitur lainnya dari kode Next.js Anda
];

export const zodiacSigns = [
  { symbol: '♈', name: 'Aries', date: 'Mar 21 - Apr 19' },
  { symbol: '♉', name: 'Taurus', date: 'Apr 20 - May 20' },
  // ... dst
];