import React from 'react';
import { ChatBot } from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// Define the theme for the chatbot
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial, Helvetica, sans-serif',
  headerBgColor: '#6a1b9a',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#6a1b9a',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

// Define the steps for the chatbot
const steps = [
  {
    id: '1',
    message: 'Welcome! I am here to provide biblical solutions to your family-related challenges. How can I help you today?',
    trigger: 'userInput',
  },
  {
    id: 'userInput',
    user: true,
    trigger: 'response',
  },
  {
    id: 'response',
    message: 'Let me find a biblical solution for you...',
    trigger: 'solution',
  },
  {
    id: 'solution',
    component: <Solution />,
    asMessage: true,
    end: true,
  },
];

// Define the Solution component
const Solution = ({ steps }) => {
  const userInput = steps.userInput.value.toLowerCase();

  // Example responses based on user input
  const responses = {
    marriage: 'Ephesians 5:25 - Husbands, love your wives, just as Christ loved the church and gave himself up for her.',
    children: 'Proverbs 22:6 - Train up a child in the way he should go; even when he is old he will not depart from it.',
    forgiveness: 'Colossians 3:13 - Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.',
  };

  // Find a response based on user input
  const response = Object.keys(responses).find(key => userInput.includes(key));

  return (
    <div>
      {response ? responses[response] : 'I am sorry, I could not find a specific biblical solution for your challenge. Please try asking about marriage, children, or forgiveness.'}
    </div>
  );
};

// Main App component
const App = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />
  </ThemeProvider>
);

export default App;
