import React, { createContext, useContext, useState } from 'react';

const ContextCreation = createContext({count: 0, setCount: (count: number) => {}});

export const Provider = ({ children }: any) => {
  const [count, setCount] = useState(0);
  return (
    <ContextCreation.Provider value={{ count, setCount }}>
      {children}
    </ContextCreation.Provider>
  );
};

export const Context = () => {
  const { count, setCount } = useContext(ContextCreation);
  return (
    <>
      <div data-testid="context-value">Count : {count}</div> <br />
      <button data-testid="handleEvent" onClick={() => setCount(count + 1)}>
        Click Here
      </button>
    </>
  );
};
