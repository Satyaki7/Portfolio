import React, { useState, useRef, useEffect } from 'react';

const portfolioContent = {
  start: [
    "Portfolio System v1.0.0",
    "Loading profile...",
    "",
    "==========================================",
    "           JOHN DOE - DEVELOPER           ",
    "==========================================",
    "",
    "Skills:",
    "• React, TypeScript, Node.js",
    "• Python, Machine Learning, AI",
    "• AWS, Docker, Kubernetes",
    "• UI/UX Design, Figma",
    "",
    "Experience:",
    "• Senior Frontend Developer at TechCorp (2022-2024)",
    "• Full-Stack Developer at StartupXYZ (2020-2022)",
    "• Freelance Developer (2018-2020)",
    "",
    "Recent Projects:",
    "• E-commerce Platform - React, Node.js, MongoDB",
    "• AI Chat Assistant - Python, TensorFlow, FastAPI",
    "• Mobile App - React Native, Firebase",
    "",
    "Contact:",
    "• Email: john.doe@example.com",
    "• GitHub: github.com/johndoe",
    "• LinkedIn: linkedin.com/in/johndoe",
    "",
    "Type 'help' for available commands"
  ],
  help: [
    "Available commands:",
    "• start - Display portfolio information",
    "• skills - Show technical skills",
    "• experience - Show work experience", 
    "• projects - Show recent projects",
    "• contact - Show contact information",
    "• clear - Clear console",
    "• help - Show this help message"
  ],
  skills: [
    "Technical Skills:",
    "",
    "Frontend:",
    "• React, Vue.js, Angular",
    "• TypeScript, JavaScript (ES6+)",
    "• HTML5, CSS3, Sass/SCSS",
    "• Tailwind CSS, Styled Components",
    "",
    "Backend:",
    "• Node.js, Express.js",
    "• Python, Django, FastAPI",
    "• PHP, Laravel",
    "",
    "Database:",
    "• MongoDB, PostgreSQL, MySQL",
    "• Redis, Firebase",
    "",
    "DevOps & Tools:",
    "• Docker, Kubernetes",
    "• AWS, Google Cloud",
    "• Git, GitHub Actions",
    "• Webpack, Vite"
  ],
  experience: [
    "Work Experience:",
    "",
    "Senior Frontend Developer | TechCorp Inc.",
    "Jan 2022 - Present",
    "• Led development of React-based dashboard serving 100k+ users",
    "• Implemented micro-frontend architecture reducing load times by 40%",
    "• Mentored 5 junior developers",
    "",
    "Full-Stack Developer | StartupXYZ",
    "Jun 2020 - Dec 2021",
    "• Built MVP from scratch using React and Node.js",
    "• Developed RESTful APIs handling 1M+ requests daily",
    "• Implemented automated testing reducing bugs by 60%",
    "",
    "Freelance Developer",
    "Jan 2018 - May 2020",
    "• Delivered 20+ projects for clients across various industries",
    "• Specialized in e-commerce and business applications",
    "• Maintained 98% client satisfaction rate"
  ],
  projects: [
    "Recent Projects:",
    "",
    "1. E-Commerce Platform",
    "   • React, Node.js, MongoDB, Stripe",
    "   • Real-time inventory management",
    "   • 50k+ monthly active users",
    "",
    "2. AI Chat Assistant",
    "   • Python, TensorFlow, FastAPI",
    "   • Natural language processing",
    "   • 95% accuracy in intent recognition",
    "",
    "3. Task Management App",
    "   • React Native, Firebase",
    "   • Cross-platform mobile application",
    "   • 10k+ downloads on app stores",
    "",
    "4. Data Visualization Dashboard",
    "   • D3.js, React, PostgreSQL",
    "   • Real-time analytics platform",
    "   • Serving Fortune 500 client"
  ],
  contact: [
    "Contact Information:",
    "",
    "📧 Email: john.doe@example.com",
    "🐙 GitHub: github.com/johndoe",
    "💼 LinkedIn: linkedin.com/in/johndoe",
    "🐦 Twitter: @johndoe_dev",
    "🌐 Website: johndoe.dev",
    "📱 Phone: +1 (555) 123-4567",
    "",
    "Available for:",
    "• Full-time opportunities",
    "• Freelance projects",
    "• Technical consulting",
    "• Speaking engagements"
  ]
};

export function Console() {
  const [lines, setLines] = useState([
    { text: "Welcome to John's Portfolio Terminal", type: 'system' },
    { text: "Type 'start' to begin or 'help' for available commands", type: 'system' },
    { text: "", type: 'system' }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (command) => {
    const trimmedCommand = command.trim().toLowerCase();
    
    if (trimmedCommand && !commandHistory.includes(trimmedCommand)) {
      setCommandHistory(prev => [...prev, trimmedCommand]);
    }
    setHistoryIndex(-1);

    setLines(prev => [...prev, { text: `$ ${command}`, type: 'input' }]);

    if (trimmedCommand === 'clear') {
      setLines([]);
      return;
    }

    const response = portfolioContent[trimmedCommand];
    
    if (response) {
      setLines(prev => [
        ...prev,
        ...response.map(text => ({ text, type: 'output' })),
        { text: "", type: 'system' }
      ]);
    } else if (trimmedCommand) {
      setLines(prev => [
        ...prev,
        { text: `Command not found: ${trimmedCommand}`, type: 'system' },
        { text: "Type 'help' for available commands", type: 'system' },
        { text: "", type: 'system' }
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
      setCurrentInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
      <div className="h-max-full bg-gray-900 text-green-400 font-mono text-sm flex flex-col">
        {/* Scrollable output area */}
        <div
            ref={scrollRef}
            className="flex-1 p-4 space-y-1 overflow-y-auto"
            onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line, index) => (
              <div
                  key={index}
                  className={`whitespace-pre-wrap ${
                      line.type === "input"
                          ? "text-yellow-400"
                          : line.type === "system"
                              ? "text-blue-400"
                              : "text-green-400"
                  }`}
              >
                {line.text}
              </div>
          ))}
          <div className="flex items-center p-4 border-t border-gray-700">
            <span className="text-yellow-400 mr-2">$</span>
            <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-green-400 caret-green-400"
                placeholder="Enter command..."
            />
          </div>
        </div>
      </div>

  );
}
