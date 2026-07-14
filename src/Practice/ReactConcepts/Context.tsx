import { createContext, useContext, useEffect, useState } from "react";

const MadhavaContext = createContext({ count: 0, setCount: (count: number) => { } })

export function ContextProvider({ children }: any) {
  const [count, setCount] = useState(0);
  return (
    <MadhavaContext.Provider value={{ count, setCount }}>
      {children}
    </MadhavaContext.Provider>
  )
}

export function ContextChild() {
  const { count, setCount } = useContext(MadhavaContext);
  const handleClick = () => {
    setCount(count + 1);
  }

  
  return (
    <>
      <div>your count : {count}</div>
      <button onClick={handleClick}>Click</button>
    </>
  );
}