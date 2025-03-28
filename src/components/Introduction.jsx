import { useState, useEffect } from "react";


export default function Introduction() {
    
  const text = "Hi I'm Antony Tran :)";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="text-2xl font-mono p-5" style={{ 
        fontFamily: "'EB Garamond', 'Old Standard TT', serif", 
        fontWeight: "700", 
        fontSize: "24px", 
        color: "#3A2F2A", 
        lineHeight: "1.6",
        letterSpacing: "0.5px"
      }}>
      {displayedText}
      <span className="animate-blink">|</span>
    </div>
  );
} 