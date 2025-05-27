// React Cheat Sheet

// Basic Setup
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => <h1>Hello, React!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// JSX Syntax
const element = <h1 className="title">Hello, JSX!</h1>;

// Components

// Functional Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Arrow Function Component
const WelcomeArrow = ({ name }) => <h1>Hello, {name}</h1>;

// Props
const Greeting = ({ message }) => <p>{message}</p>;

// Usage example
// <Greeting message="Welcome to React!" />

// State (using Hooks)
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

// Effect Hook (Side Effects)
import React, { useEffect } from 'react';

useEffect(() => {
  console.log('Component mounted or updated');

  return () => {
    console.log('Cleanup before next effect or unmount');
  };
}, [dependencies]); // empty array means run once on mount

// Event Handling
<button onClick={() => alert('Clicked!')}>Click me</button>;

// Conditional Rendering
{isLoggedIn ? <LogoutButton /> : <LoginButton />}

// Lists and Keys
const listItems = items.map(item => <li key={item.id}>{item.name}</li>);

// Forms
function NameForm() {
  const [name, setName] = useState('');

  return (
    <form>
      <input value={name} onChange={e => setName(e.target.value)} />
    </form>
  );
}

// Context API
const ThemeContext = React.createContext('light');

function AppWithContext() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button className={theme}>Button</button>;
}

// React Router (Basic example)
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function AppRouter() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
