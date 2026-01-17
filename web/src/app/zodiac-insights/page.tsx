// src/app/zodiac/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Zodiac.module.css';

type ZodiacSign = {
  id: number;
  name: string;
  symbol: string;
  element: string;
  modality: string;
  rulingPlanet: string;
  dates: string;
  color: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  compatibility: string[];
  famousPeople: string[];
  description: string;
  house: number;
};

const zodiacSigns: ZodiacSign[] = [
  {
    id: 1,
    name: 'Aries',
    symbol: '♈',
    element: 'Fire',
    modality: 'Cardinal',
    rulingPlanet: 'Mars',
    dates: 'March 21 - April 19',
    color: '#FF6B6B',
    traits: ['Courageous', 'Determined', 'Confident', 'Enthusiastic', 'Optimistic'],
    strengths: ['Leadership', 'Bravery', 'Honesty', 'Passion', 'Adventurous'],
    weaknesses: ['Impatience', 'Moodiness', 'Short-tempered', 'Impulsiveness', 'Aggression'],
    compatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
    famousPeople: ['Lady Gaga', 'Robert Downey Jr.', 'Elton John', 'Keira Knightley'],
    description: 'Aries is the first sign of the zodiac, and Arians are the pioneers and trailblazers of the horoscope wheel. As a fire sign ruled by Mars, they are passionate, motivated, and confident leaders who are always ready for action.',
    house: 1
  },
  {
    id: 2,
    name: 'Taurus',
    symbol: '♉',
    element: 'Earth',
    modality: 'Fixed',
    rulingPlanet: 'Venus',
    dates: 'April 20 - May 20',
    color: '#4ECDC4',
    traits: ['Reliable', 'Patient', 'Practical', 'Devoted', 'Responsible'],
    strengths: ['Dependable', 'Persistent', 'Loyal', 'Sensual', 'Generous'],
    weaknesses: ['Stubborn', 'Possessive', 'Uncompromising', 'Materialistic', 'Resistant to change'],
    compatibility: ['Virgo', 'Capricorn', 'Cancer', 'Pisces'],
    famousPeople: ['Adele', 'David Beckham', 'Gal Gadot', 'George Clooney'],
    description: 'Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.',
    house: 2
  },
  {
    id: 3,
    name: 'Gemini',
    symbol: '♊',
    element: 'Air',
    modality: 'Mutable',
    rulingPlanet: 'Mercury',
    dates: 'May 21 - June 20',
    color: '#45B7D1',
    traits: ['Gentle', 'Affectionate', 'Curious', 'Adaptable', 'Quick-witted'],
    strengths: ['Communication', 'Intelligence', 'Versatility', 'Youthful energy', 'Social skills'],
    weaknesses: ['Nervousness', 'Inconsistency', 'Indecisiveness', 'Superficiality', 'Gossipy'],
    compatibility: ['Libra', 'Aquarius', 'Aries', 'Leo'],
    famousPeople: ['Angelina Jolie', 'Kanye West', 'Johnny Depp', 'Naomi Campbell'],
    description: 'Gemini is an air sign represented by the celestial twins. Geminis are intellectual and cerebral, constantly juggling multiple ideas and projects at once. They are curious about everything and everyone.',
    house: 3
  },
  {
    id: 4,
    name: 'Cancer',
    symbol: '♋',
    element: 'Water',
    modality: 'Cardinal',
    rulingPlanet: 'Moon',
    dates: 'June 21 - July 22',
    color: '#96CEB4',
    traits: ['Tenacious', 'Highly imaginative', 'Loyal', 'Emotional', 'Sympathetic'],
    strengths: ['Empathy', 'Nurturing', 'Intuition', 'Protective', 'Caring'],
    weaknesses: ['Pessimistic', 'Suspicious', 'Manipulative', 'Insecure', 'Clingy'],
    compatibility: ['Scorpio', 'Pisces', 'Taurus', 'Virgo'],
    famousPeople: ['Tom Cruise', 'Meryl Streep', 'Post Malone', 'Princess Diana'],
    description: 'Cancer is a water sign represented by the crab. Like their celestial spirit animal, Cancers are shielded by hard, external shells. At first, Cancers may seem prickly and standoffish, but once they get to know you, they are incredibly loving and caring.',
    house: 4
  },
  {
    id: 5,
    name: 'Leo',
    symbol: '♌',
    element: 'Fire',
    modality: 'Fixed',
    rulingPlanet: 'Sun',
    dates: 'July 23 - August 22',
    color: '#FFEAA7',
    traits: ['Creative', 'Passionate', 'Generous', 'Warm-hearted', 'Cheerful'],
    strengths: ['Confidence', 'Charisma', 'Leadership', 'Generosity', 'Loyalty'],
    weaknesses: ['Arrogance', 'Stubbornness', 'Self-centered', 'Lazy', 'Inflexible'],
    compatibility: ['Aries', 'Sagittarius', 'Gemini', 'Libra'],
    famousPeople: ['Barack Obama', 'Jennifer Lawrence', 'Chris Hemsworth', 'Madonna'],
    description: 'Leo is a fire sign represented by the lion. Leos are radiantly joyful, liberal with their appeal and endowments. They are fiercely proud and confident. They love and live life to the fullest rather than being in charge at all times.',
    house: 5
  },
  {
    id: 6,
    name: 'Virgo',
    symbol: '♍',
    element: 'Earth',
    modality: 'Mutable',
    rulingPlanet: 'Mercury',
    dates: 'August 23 - September 22',
    color: '#DDA0DD',
    traits: ['Loyal', 'Analytical', 'Kind', 'Hardworking', 'Practical'],
    strengths: ['Detail-oriented', 'Reliable', 'Helpful', 'Modest', 'Perfectionist'],
    weaknesses: ['Worry', 'Shyness', 'Overly critical', 'Workaholic', 'Harsh'],
    compatibility: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio'],
    famousPeople: ['Beyoncé', 'Keanu Reeves', 'Cameron Diaz', 'Blake Lively'],
    description: 'Virgo is an earth sign represented by the goddess of wheat and agriculture. Virgos are logical, practical, and systematic in their approach to life. They are perfectionists at heart and aren\'t afraid to improve skills through diligent and consistent practice.',
    house: 6
  },
  {
    id: 7,
    name: 'Libra',
    symbol: '♎',
    element: 'Air',
    modality: 'Cardinal',
    rulingPlanet: 'Venus',
    dates: 'September 23 - October 22',
    color: '#98D8C8',
    traits: ['Cooperative', 'Diplomatic', 'Gracious', 'Fair-minded', 'Social'],
    strengths: ['Harmony', 'Justice', 'Partnership', 'Charm', 'Diplomacy'],
    weaknesses: ['Indecisive', 'Avoids confrontations', 'Self-pity', 'Unreliable', 'Superficial'],
    compatibility: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius'],
    famousPeople: ['Will Smith', 'Kim Kardashian', 'Bruno Mars', 'Kate Winslet'],
    description: 'Libra is an air sign represented by the scales. Libras are obsessed with symmetry and strive to create equilibrium in all areas of life. They are the aesthetes of the zodiac, with a keen eye for beauty and art.',
    house: 7
  },
  {
    id: 8,
    name: 'Scorpio',
    symbol: '♏',
    element: 'Water',
    modality: 'Fixed',
    rulingPlanet: 'Pluto',
    dates: 'October 23 - November 21',
    color: '#F7A4A4',
    traits: ['Brave', 'Passionate', 'Stubborn', 'Loyal', 'Ambitious'],
    strengths: ['Resourceful', 'Powerful', 'Passionate', 'Determined', 'Intuitive'],
    weaknesses: ['Distrusting', 'Jealous', 'Secretive', 'Violent', 'Obsessive'],
    compatibility: ['Cancer', 'Pisces', 'Virgo', 'Capricorn'],
    famousPeople: ['Leonardo DiCaprio', 'Julia Roberts', 'Ryan Gosling', 'Katy Perry'],
    description: 'Scorpio is a water sign represented by the scorpion. Scorpios are one of the most misunderstood signs of the zodiac. Because of their incredible passion and power, Scorpios are often mistaken for being a fire sign.',
    house: 8
  },
  {
    id: 9,
    name: 'Sagittarius',
    symbol: '♐',
    element: 'Fire',
    modality: 'Mutable',
    rulingPlanet: 'Jupiter',
    dates: 'November 22 - December 21',
    color: '#FDCB6E',
    traits: ['Generous', 'Idealistic', 'Great sense of humor', 'Adventurous'],
    strengths: ['Optimistic', 'Freedom-loving', 'Honest', 'Philosophical', 'Humorous'],
    weaknesses: ['Promise more than can deliver', 'Impatient', 'Tactless', 'Restless', 'Irresponsible'],
    compatibility: ['Aries', 'Leo', 'Libra', 'Aquarius'],
    famousPeople: ['Taylor Swift', 'Brad Pitt', 'Miley Cyrus', 'Winston Churchill'],
    description: 'Sagittarius is a fire sign represented by the archer. Sagittarians are always on a quest for knowledge. They are the travelers and philosophers of the zodiac, always seeking the meaning of life and exploring new places and ideas.',
    house: 9
  },
  {
    id: 10,
    name: 'Capricorn',
    symbol: '♑',
    element: 'Earth',
    modality: 'Cardinal',
    rulingPlanet: 'Saturn',
    dates: 'December 22 - January 19',
    color: '#74B9FF',
    traits: ['Responsible', 'Disciplined', 'Self-control', 'Good managers'],
    strengths: ['Responsible', 'Disciplined', 'Self-control', 'Determined', 'Patient'],
    weaknesses: ['Know-it-all', 'Unforgiving', 'Condescending', 'Expecting the worst', 'Pessimistic'],
    compatibility: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
    famousPeople: ['Michelle Obama', 'Bradley Cooper', 'Kit Harington', 'Timothée Chalamet'],
    description: 'Capricorn is an earth sign represented by the sea-goat. Capricorns are the ultimate achievers of the zodiac. They are ambitious, determined, materialistic, and strong. They are masters of self-control and have the ability to lead the way.',
    house: 10
  },
  {
    id: 11,
    name: 'Aquarius',
    symbol: '♒',
    element: 'Air',
    modality: 'Fixed',
    rulingPlanet: 'Uranus',
    dates: 'January 20 - February 18',
    color: '#A29BFE',
    traits: ['Progressive', 'Original', 'Independent', 'Humanitarian'],
    strengths: ['Innovative', 'Humanitarian', 'Independent', 'Intelligent', 'Friendly'],
    weaknesses: ['Runs from emotional expression', 'Temperamental', 'Uncompromising', 'Aloof', 'Contrary'],
    compatibility: ['Gemini', 'Libra', 'Aries', 'Sagittarius'],
    famousPeople: ['Oprah Winfrey', 'Harry Styles', 'Cristiano Ronaldo', 'Jennifer Aniston'],
    description: 'Aquarius is an air sign represented by the water bearer. Aquarians are progressive, independent, and humanitarian. They are visionaries and thinkers who are always ahead of their time. They value intellectualism and innovation.',
    house: 11
  },
  {
    id: 12,
    name: 'Pisces',
    symbol: '♓',
    element: 'Water',
    modality: 'Mutable',
    rulingPlanet: 'Neptune',
    dates: 'February 19 - March 20',
    color: '#FFB8E1',
    traits: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle', 'Wise'],
    strengths: ['Empathetic', 'Artistic', 'Intuitive', 'Gentle', 'Wise'],
    weaknesses: ['Fearful', 'Overly trusting', 'Sad', 'Desire to escape reality', 'Can be a victim'],
    compatibility: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn'],
    famousPeople: ['Rihanna', 'Albert Einstein', 'Steve Jobs', 'Elizabeth Taylor'],
    description: 'Pisces is a water sign represented by two fish swimming in opposite directions. Pisceans are the most intuitive, sensitive, and empathetic of all the zodiac signs. They are the dreamers and artists of the zodiac, with a deep connection to the spiritual realm.',
    house: 12
  }
];
