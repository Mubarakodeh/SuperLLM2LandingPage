import type { CSSProperties } from 'react';

interface ButtonStyleState {
  base: CSSProperties;
  hover: CSSProperties;
}

export const buttonGradients: Record<string, ButtonStyleState> = {
  lightPrimary: {
    base: {
      background: 'linear-gradient(135deg, #62FF84 0%, #3de860 100%)',
      color: '#0a1615',
      borderRadius: '9999px',
      border: 'none',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease',
      boxShadow: '0 4px 20px rgba(98, 255, 132, 0.25)',
    },
    hover: {
      background: 'linear-gradient(135deg, #7dffA0 0%, #62FF84 100%)',
      color: '#0a1615',
      borderRadius: '9999px',
      border: 'none',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease',
      boxShadow: '0 6px 30px rgba(98, 255, 132, 0.4)',
      transform: 'translateY(-1px)',
    },
  },
  darkPrimary: {
    base: {
      background: 'linear-gradient(135deg, #0c373b 0%, #0f4a4f 100%)',
      color: '#62FF84',
      borderRadius: '9999px',
      border: '1px solid rgba(98, 255, 132, 0.2)',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    },
    hover: {
      background: 'linear-gradient(135deg, #0f4a4f 0%, #135a60 100%)',
      color: '#62FF84',
      borderRadius: '9999px',
      border: '1px solid rgba(98, 255, 132, 0.35)',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      boxShadow: '0 6px 30px rgba(0, 0, 0, 0.4)',
      transform: 'translateY(-1px)',
    },
  },
};
