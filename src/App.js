import React from 'react';
import './App.css';
import Container from "./Container/Container"

class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    console.log('BROKEN COMPONENT:', info.componentStack);
    console.log('ERROR:', error);
  }
  render() {
    return this.props.children;
  }
}

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Container />
      </ErrorBoundary>
    </div>
  );
}
export default App;