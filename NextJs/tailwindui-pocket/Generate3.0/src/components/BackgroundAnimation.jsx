import React from 'react';

export function BackgroundAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-[40rem] h-[20rem] bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob1"></div>
      <div className="absolute w-[40rem] h-[40rem] bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob2"></div>
      <div className="absolute w-[40rem] h-[20rem] bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob3"></div>
    </div>
  );
}