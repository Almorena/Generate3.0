import React from 'react';

export function BackgroundAnimation() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-20 left-1/2 w-[20rem] h-[20rem] bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob1"></div>
      <div className="absolute top-20 left-1/2 w-[20rem] h-[20rem] bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob2"></div>
      <div className="absolute top-20 left-1/2 w-[20rem] h-[20rem] bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob3"></div>
    </div>
  );
}
