import React, { useState, useEffect } from 'react';
import { imageWrapper } from './Example.module.css';
import { ErrorBoundary } from 'react-error-boundary';

import StylingWithStyledComponents from './StylingWithStyledComponents';
import StylingWithCSSModules from './StylingWithCSSModules';

import './App.css';

import whiteDogs from './assets/white-dogs.jpg';

const dogUrl = '/black-dogs.jpg';

function App() {

  return (
    <>
      <h1>Error Handling</h1>
      <CustomErrorBoundary><Example /></CustomErrorBoundary>
      <ErrorBoundary 
        FallbackComponent={FallbackComponent}
      >
        <Example />
      </ErrorBoundary>

      <h3>Managing assets</h3>
      <div className={imageWrapper}>
          <img src={whiteDogs} alt='white dogs' />
      </div>
      <div className={imageWrapper}>
        <img src={dogUrl} alt="black dogs" />
      </div>

      <h3>Styling with CSS Modules</h3>
      <StylingWithCSSModules />

      <h3>Styling with Styled Components</h3>
      <StylingWithStyledComponents />
      
    </>
  );

}

function Example() {

  useEffect(() => {
    throw new Error('an error occured!');
  }, []);

  return 'Example';
}

class CustomErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <>Something went wrong!</>
    return this.props.children;
  }
}

function FallbackComponent({ error, resetErrorBoundary }){
  return (
    <div>
      <p style={{ color: 'red' }}>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again!</button>
    </div>
  );
}

export default App;
