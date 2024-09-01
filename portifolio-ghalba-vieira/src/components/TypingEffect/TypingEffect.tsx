"use client";
import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
  words: string[];
  delay?: number;
  hideCursor?: boolean;
}

export function TypingEffect({ words, delay = 200, hideCursor = false }: TypingEffectProps) {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100; // Velocidade da digitação
  const deletingSpeed = 50; // Velocidade da exclusão
  const delayBetweenWords = 1500; // Tempo entre palavras

  useEffect(() => {
    const word = words[currentWordIndex];
    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(prev => prev.slice(0, -1));
        if (text.length === 0) {
          setIsDeleting(false);
          setShowCursor(true);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setText(prev => word.slice(0, prev.length + 1));
        if (text === word) {
          setIsDeleting(true);
          setShowCursor(false);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex, words]);

  useEffect(() => {
    if (!isDeleting && text.length === words[currentWordIndex].length) {
      const cursorTimer = setTimeout(() => setShowCursor(true), delayBetweenWords);
      return () => clearTimeout(cursorTimer);
    }
  }, [text, isDeleting, currentWordIndex, words]);

  return (
    <div className='inline-block'>
      {text}
      {!hideCursor && showCursor && (
        <span className='animate-animar-cursor text-xl md:text-2xl ml-1 font-medium'></span>
      )}
    </div>
  );
}
