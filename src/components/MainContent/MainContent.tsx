import React from 'react';
import { useWelcomeMessage } from '../../hooks/useWelcomeMessage';

export function MainContent() {
  const message = useWelcomeMessage();

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{message}</h2>
        <p className="text-gray-600">
          This is a simple React application built with Vite and organized using modern best practices.
          Feel free to expand upon this structure!
        </p>
      </div>
    </main>
  );
}