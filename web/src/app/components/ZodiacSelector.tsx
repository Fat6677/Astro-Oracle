interface ZodiacSelectorProps {
  onSignSelect: (sign: string) => void;
  isLoading: boolean;
}

const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export default function ZodiacSelector({ onSignSelect, isLoading }: ZodiacSelectorProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const sign = formData.get('zodiac') as string;
    if (sign) {
      onSignSelect(sign);
    }
  };