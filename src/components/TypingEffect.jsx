import React, { useState, useEffect } from 'react';

const TypingEffect = (props) => {
  const {
    text = '',
    speed = 50,
    delay = 0,
    tag: Tag = 'span'
  } = props;

  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    // Reset state when text changes
    setDisplayText('');
    setShowCursor(true);
    setTypingComplete(false);
    
    let timer = null;
    let charIndex = 0;
    
    // Function to type one character at a time
    const typeNextChar = () => {
      if (charIndex < text.length) {
        setDisplayText(prev => prev + text.charAt(charIndex));
        charIndex++;
        timer = setTimeout(typeNextChar, speed);
      } else {
        // Done typing
        setTypingComplete(true);
        setShowCursor(false);
      }
    };
    
    // Start typing after delay
    const startTimeout = setTimeout(() => {
      typeNextChar();
    }, delay);
    
    // Cleanup function
    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timer);
    };
  }, [text, speed, delay]);

  return (
    <Tag {...props}>
      {displayText}
      {showCursor && <span className="cursor">|</span>}
    </Tag>
  );
};

export default TypingEffect;
