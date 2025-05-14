import React, { useState, useEffect, useCallback, useMemo, useRef, useReducer } from 'react';

const reducer = (state: number, action: { type: string }) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return state;
    }
};

export function HooksExample() {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);
    const [text, setText] = useState('');
    const renderCompCountRef = useRef(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const [reducerCount, dispatch] = useReducer(reducer, 0);

    const expensiveCalculation = useMemo(() => { return count * 2; }, [count]);

    const handleButtonClick = useCallback(() => { setCount((prev) => prev + 1); }, []);

    // Without dependencies, the effect will run on every re-render
    useEffect(() => { renderCompCountRef.current += 1; });

    /* Automatically focuses the input field when the component mounts */
    useEffect(() => { inputRef.current?.focus(); }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="grid-container">
            <div className="grid-item">
                <h2>useEffect with Interval</h2>
                <p>Timer: {timer} seconds</p>
            </div>
            <div className="grid-item">
                <h2>useState</h2>
                <p>Count: {count}</p>
                <button onClick={handleButtonClick}>Increment Count</button>
            </div>
            <div className="grid-item">
                <h2>useMemo</h2>
                <p>Expensive Calculation Result: {expensiveCalculation}</p>
            </div>
            <div className="grid-item">
                <h2>useReducer</h2>
                <p>Reducer Count: {reducerCount}</p>
                <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
            <div className="grid-item">
                <h2>useRef</h2>
                <input
                    ref={inputRef}
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type something..."
                />
                <p>Input Value: {text}</p>
            </div>
            <div className="grid-item">
                <h2>Component Render Count</h2>
                <p>{renderCompCountRef.current}</p>
            </div>
        </div>
    );
}

export default HooksExample;