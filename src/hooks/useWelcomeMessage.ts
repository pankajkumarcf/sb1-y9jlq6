import { useState, useEffect } from 'react';

export function useWelcomeMessage() {
  const [message, setMessage] = useState('Welcome!');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setMessage('Good morning!');
    } else if (hour < 18) {
      setMessage('Good afternoon!');
    } else {
      setMessage('Good evening!');
    }
  }, []);

  return message;
}