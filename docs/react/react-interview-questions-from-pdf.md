# React JS Interview Questions (Beginner to Expert)

This document is a cleaned Markdown version of the original PDF. It keeps the same React questions and explanations, while removing repeated PDF headers and footers and improving the reading flow.

## Question List

### Beginner Level (0-1 Years)

#### Core Concepts & Fundamentals

1. What is React.js? How is it different from other frameworks like Angular or Vue?
2. What are the key features and advantages of React?
3. What is JSX? Why do we use it?
4. What is the difference between functional components and class components?
5. What are props in React? How are they different from state?
6. What is state in React? How do you use it?
7. How do you pass data from parent to child components?
8. How do you handle events in React? Explain event binding.
9. What is the virtual DOM? How does it work in React?
10. What are keys in React? Why are they important in lists?
11. What are controlled and uncontrolled components? Give examples.
12. What is the useState hook? Provide an example.
13. What is defaultProps in React?
14. What are React Fragments, and why do we need them?
15. What is React.createElement(), and how does it work behind the scenes?
16. How do you validate props using PropTypes?
17. What is lifting state up in React?

### Intermediate Level (1-3 Years)

#### Hooks, Lifecycle, Routing & Component Patterns

##### React Hooks & Lifecycle

1. Explain the lifecycle of a class component (e.g., constructor, render, componentDidMount, etc.).
2. What is useEffect? How does it work? Provide examples.
3. What is the difference between useEffect and useLayoutEffect?
4. What is useRef, and where would you use it?
5. What is useCallback? How does it help in optimization?
6. What is useMemo? Provide an example.
7. What is useReducer, and when should you use it?
8. What is StrictMode in React?

##### Forms & Validation

9. How do you handle forms in React (controlled vs. uncontrolled)?
10. How do you implement form validation in React? (e.g., Formik, React Hook Form)
11. How do you handle file uploads in React?

##### Component Patterns

12. What are Higher-Order Components (HOCs)?
13. What is the Context API? How do you use it to avoid prop drilling?
14. What is prop drilling, and how do you avoid it?
15. What is the Render Props pattern?
16. What are Compound Components?
17. What are React Portals? When would you use them?
18. What are Error Boundaries? How do you implement them?

##### Routing & Lazy Loading

19. What is React Router? How do you implement routing?
20. How do you handle nested routes in React?
21. What is lazy loading? How is it implemented in React?
22. What is Suspense? How does it work with lazy loading?

##### Performance

23. How do you optimize the performance of a React app?
24. What is memoization in React? How do React.memo and useMemo differ?
25. What is reconciliation in React?

### Advanced Level (3-5 Years)

#### Architecture, Performance & State Management

##### React Internals & Fiber

1. What is React Fiber? How does it enhance React's rendering?
2. What is the difference between React 16, 17, and 18?
3. What are concurrent features in React 18?
4. What are Suspense boundaries, and how do they help in concurrent rendering?

##### State Management

5. What is Redux? Why would you use it?
6. How does Redux work (store, reducers, actions)?
7. What are Redux middlewares? How does redux-thunk or redux-saga work?
8. How does the Context API compare to Redux?
9. How do you manage global state without Redux? (e.g., Zustand, Jotai)
10. How do you persist state across sessions? (e.g., localStorage, redux-persist)

##### SSR & SSG

11. What is Server-Side Rendering (SSR)? How do you implement it in Next.js?
12. What is Static Site Generation (SSG)? How does ISR (Incremental Static Regeneration) work?
13. What are React Server Components? How do they differ from SSR?

##### APIs & Integrations

14. How do you perform API calls in React? (e.g., fetch, Axios)
15. How do you implement authentication and authorization in React?
16. How do you protect routes in React?
17. How do you integrate React with GraphQL? (e.g., Apollo Client, Relay)
18. REST vs. GraphQL: Which is better for React apps?

##### Real-Time & Micro-Frontends

19. How do you implement WebSockets in React?
20. How do you build Micro-Frontends in React? (e.g., Module Federation)
21. How do you share state between Micro-Frontends?

### Expert Level (5+ Years and Architect Roles)

#### Scalability, Micro Frontends & Best Practices

##### Architecture & Design

1. How do you design a scalable React application?
2. How do you structure a large React project?
3. How do you build and publish a React component library? (e.g., Storybook, Bit)
4. How do you implement Monorepos in React? (e.g., Nx, Turborepo)

##### Advanced Rendering

5. How do you implement infinite scrolling and virtualized lists? (e.g., react-window)
6. How do you handle performance tuning and caching? (e.g., React Query, SWR)
7. How do you prefetch data in React?
8. What is Partial Hydration in React?
9. What is Progressive Hydration?

##### Security & Accessibility

10. How do you ensure security best practices in React? (e.g., XSS, CSRF)
11. How do you prevent memory leaks in React?
12. How do you ensure accessibility (a11y) in React apps? (e.g., ARIA roles)

##### CI/CD & Deployment

13. How do you deploy React apps? (e.g., Netlify, Vercel, AWS S3 + CloudFront)
14. How do you set up CI/CD pipelines for React apps? (e.g., GitHub Actions, Jenkins)
15. How do you manage environment variables securely in React?

##### Testing

16. How do you test React components? (e.g., Jest, React Testing Library)
17. What is the difference between shallow and deep rendering?
18. How do you mock APIs and dependencies in tests?
19. How do you perform E2E testing in React? (e.g., Cypress, Playwright)

##### Bonus Topics (Optional but Good to Know)

1. React Native basics (navigation, state management)
2. Progressive Web Apps (PWA) with React
3. Headless CMS integration (e.g., Strapi, Contentful)
4. Custom Renderers using react-reconciler
5. Internationalization (i18n) with react-intl, next-i18next

## Detailed Answers

The explanations below follow the same order and examples from the source PDF.

## Beginner Level (0-1 Years)

### Core Concepts & Fundamentals

#### 1. What is React.js? How is it different from other frameworks like Angular or Vue?

- React.js is a JavaScript library for building user interfaces, particularly single-page applications (SPAs). It is maintained by Facebook and a community of developers.

**Differences**

- React is a library (focused on the view layer), while Angular is a full-fledged framework (provides a complete solution).
- React uses a virtual DOM for efficient updates, while Angular uses a real DOM with two-way data binding.
- Vue is a progressive framework (can be used incrementally), while React requires additional libraries for routing, state management, etc.

#### 2. What are the key features and advantages of React?

**Key Features**

- Component-based architecture.
- Virtual DOM for efficient rendering.
- Unidirectional data flow (props and state).
- JSX for writing HTML-like syntax in JavaScript.

**Advantages**

- High performance due to virtual DOM.
- Reusable components.
- Strong community support.
- Easy to learn and integrate with other libraries.

#### 3. What is JSX? Why do we use it?

- JSX is a syntax extension for JavaScript that allows you to write HTML-like code in React.

**Why use it?**

- Makes code more readable and easier to write.
- Allows embedding JavaScript expressions inside HTML.

**Example**

```jsx
const element = <h1>Hello, {name}!</h1>;
```

#### 4. What is the difference between functional components and class components?

**Functional Components**

- Plain JavaScript functions.
- Use hooks (e.g., useState, useEffect) for state and lifecycle methods.

**Example**

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**Class Components**

- Use ES6 classes.
- Have lifecycle methods like componentDidMount.

**Example**

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

#### 5. What are props in React? How are they different from state?

**Props**

- Short for "properties."
- Used to pass data from parent to child components.
- Immutable (cannot be changed by the child).

**State**

- Internal data managed by the component.
- Mutable (can be updated using setState or hooks).

**Difference**

- Props are read-only, while state is mutable.

#### 6. What is state in React? How do you use it?

- State is a built-in React object used to store data that can change over time.

**How to use it**

- In functional components: Use the useState hook.

**Example**

```jsx
const [count, setCount] = useState(0);
```

#### 7. How do you pass data from parent to child components?

- Use props to pass data from parent to child.

**Example**

```jsx
function Parent() {
  const message = "Hello from Parent";
  return <Child message={message} />;
}

function Child(props) {
  return <h1>{props.message}</h1>;
}
```

#### 8. How do you handle events in React? Explain event binding.

- React uses camelCase for event handlers (e.g., onClick).

**Example**

```jsx
function Button() {
  const handleClick = () => alert("Button clicked!");
  return <button onClick={handleClick}>Click Me</button>;
}
```

#### 9. What is the virtual DOM? How does it work in React?

- Virtual DOM is a lightweight copy of the real DOM.

**How it works**

- React creates a virtual DOM tree.
- Compares it with the previous version (diffing).
- Updates only the changed parts in the real DOM.

#### 10. What are keys in React? Why are they important in lists?

- Keys are unique identifiers for list items.

**Why important**

- Help React identify which items have changed, been added, or removed.

**Example**

```jsx
const listItems = items.map((item) => <li key={item.id}>{item.name}</li>);
```

#### 11. What are controlled and uncontrolled components? Give examples.

**Controlled Components**

- Managed by React state.

**Example**

```jsx
<input value={value} onChange={(e) => setValue(e.target.value)} />
```

**Uncontrolled Components**

- Managed by the DOM.

**Example**

```jsx
<input type="text" ref={inputRef} />
```

#### 12. What is the useState hook? Provide an example.

- useState is a hook that allows functional components to have state.

**Example**

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

#### 13. What is defaultProps in React?

- defaultProps is used to define default values for props.

**Example**

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
Greeting.defaultProps = { name: "Guest" };
```

#### 14. What are React Fragments, and why do we need them?

- React Fragments allow grouping multiple elements without adding extra nodes to the DOM.

**Example**

```jsx
function App() {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}
```

#### 15. What is React.createElement(), and how does it work behind the scenes?

- React.createElement() is a method used to create React elements.

**Example**

```jsx
const element = React.createElement("h1", null, "Hello, World!");
```

#### 16. How do you validate props using PropTypes?

- Use the prop-types library to validate props.

**Example**

```jsx
import PropTypes from "prop-types";
function User({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
User.propTypes = { name: PropTypes.string.isRequired, age: PropTypes.number };
```

#### 17. What is lifting state up in React?

- Lifting state up means moving shared state to a common ancestor component.
- **Why is it important?**
- It ensures that the state is managed in a single place (the parent component), making the application more predictable and easier to debug.
- It avoids duplicating state across multiple components.

**Example: To-Do List Application**

In this example, the App component (parent) manages the state for the list of tasks. The state is passed down to the TaskList component (child) as props.

**App Component (Parent)**

- Manages the tasks state and the newTask input.
- Passes the tasks state and event handlers to child components.

```jsx
import React, { useState } from "react";

function App() {
  // State for managing tasks and new task input
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Function to add a new task
  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <div>
      <h1>To-Do List</h1>
      {/* Input field for adding a new task */}
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      {/* Button to trigger the addTask function */}
      <button onClick={addTask}>Add Task</button>
      {/* Pass tasks state to TaskList component */}
      <TaskList tasks={tasks} />
    </div>
  );
}
```

**TaskList Component (Child)**

```jsx
function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}

export default App;
```

**How Does Lifting State Up Work Here?**

1. The App component holds the tasks state and the newTask input value.
2. The tasks state is passed down to the TaskList component via props.
3. When a new task is added, the addTask function updates the tasks state in the parent component.
4. The updated state is automatically passed down to the TaskList component, which re-renders to display the new task.

**Key Takeaways**

- Single Source of Truth: The tasks state is managed in one place (the parent component).
- Reusability: The TaskList component is reusable and only focuses on rendering the list.
- Predictability: Changes to the state are centralized, making the application easier to debug and maintain.

## Intermediate Level (1-3 Years)

### Hooks, Lifecycle, Routing & Component Patterns

#### React Hooks & Lifecycle

##### 1. Explain the lifecycle of a class component and functional component.

**Class Component Lifecycle**

**Lifecycle Methods**

- constructor: Initializes state and binds methods.
- render: Renders the component UI.

- componentDidMount: Runs after the component is mounted (e.g., API calls).
- componentDidUpdate: Runs after the component updates.
- componentWillUnmount: Cleans up resources before the component unmounts.

**Example**

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    console.log("Component mounted!");
  }
  componentDidUpdate() {
    console.log("Component updated!");
  }
  componentWillUnmount() {
    console.log("Component will unmount!");
  }
  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
```

**Functional Component Lifecycle (Using Hooks)**

**Hooks**

- **useEffect:** Handles side effects (mounting, updating, and unmounting).
- useState: Manages state in functional components.

**Lifecycle Equivalent**

- Mounting: Code inside useEffect with an empty dependency array ([]).
- Updating: Code inside useEffect with dependencies ([dependency]).
- Unmounting: Cleanup function returned by useEffect.

**Example**

```jsx
import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  // Equivalent to componentDidMount and componentWillUnmount
  useEffect(() => {
    console.log("Component mounted!");
    return () => {
      console.log("Component will unmount!");
    };
  }, []);

  // Equivalent to componentDidUpdate
  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Key Differences Between Class and Functional Components**

Lifecycle Phase | Class Component | Functional Component
--- | --- | ---
Initialization | constructor | useState
Mounting | componentDidMount | useEffect with []
Updating | componentDidUpdate | useEffect with [dependency]
Unmounting | componentWillUnmount | cleanup function in useEffect
State Management | this.setState | useState
**When to Use Which?**

**Class Components**

- Legacy codebases.
- Complex lifecycle logic.
- Error boundaries (only supported in class components).

**Functional Components**

- Modern React development.
- Simpler and more concise code.
- Better performance with hooks like useMemo and useCallback.

##### 2. What is useEffect? How does it work? Provide examples.

- **useEffect:** A hook that performs side effects in functional components (e.g., API calls, subscriptions).
- Syntax: `useEffect(() => { return () => {}; }, [dependencies]);`

**Example**

```jsx
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or updated!");

    return () => {
      console.log("Component will unmount!");
    };
  }, [count]);

  return <div>Count: {count}</div>;
}
```

##### 3. What is the difference between useEffect and useLayoutEffect?

- **useEffect:** Runs after the browser paints the screen (asynchronous).
- useLayoutEffect: Runs before the browser paints the screen (synchronous).

**Use Case**

- Use useEffect for most side effects.
- Use useLayoutEffect when you need to measure DOM elements or perform actions before the browser paints.

##### 4. What is useRef, and where would you use it?

- **useRef:** A hook that creates a mutable object to persist values across renders without causing re-renders.

**Use Cases**

- Accessing DOM elements.
- Storing previous values.

**Example**

```jsx
function MyComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}
```

##### 5. What is useCallback? How does it help in optimization?

- **useCallback:** A hook that memoizes a function to prevent unnecessary re-renders.
- **Use Case:** Optimizing performance in child components that rely on function references.

**Example**

```jsx
const handleClick = useCallback(() => {
  console.log("Button clicked!");
}, []); // Memoized function
```

##### 6. What is useMemo? Provide an example.

- **useMemo:** A hook that memoizes a value to prevent unnecessary recalculations.
- **Use Case:** Optimizing expensive calculations.

**Example**

```jsx
const expensiveCalculation = useMemo(() => {
  return someArray.reduce((acc, item) => acc + item, 0);
}, [someArray]); // Memoized value
```

##### 7. What is useReducer, and when should you use it?

- **useReducer:** A hook for managing complex state logic (similar to Redux).
- **Use Case:** When state transitions are complex or involve multiple sub-values.

**Example**

```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </>
  );
}
```

##### 8. What is StrictMode in React?

- **StrictMode:** A tool for highlighting potential problems in an application (e.g., unsafe lifecycle methods, legacy APIs).
- **Use Case:** Detecting issues during development.

**Example**

```jsx
function App() {
  return (
    <React.StrictMode>
      <MyComponent />
    </React.StrictMode>
  );
}
```

##### 9. How do you handle forms in React (controlled vs. uncontrolled)?

**Controlled Components**

- Managed by React state.

**Example**

```jsx
<input value={value} onChange={(e) => setValue(e.target.value)} />;
```

**Uncontrolled Components**

- Managed by the DOM.

**Example**

```jsx
<input type="text" ref={inputRef} />;
```

##### 10. How do you implement form validation in React? (e.g., Formik, React Hook Form)

**Formik**

- A library for building forms with validation.

**Example**

```jsx
<Formik
  initialValues={{ email: "" }}
  validate={(values) => {
    const errors = {};
    if (!values.email) errors.email = "Required";
    return errors;
  }}
  onSubmit={(values) => console.log(values)}
>
  
  {({ errors, handleChange }) => (
    <form>
      <input name="email" onChange={handleChange} />
      {errors.email && <div>{errors.email}</div>}
      <button type="submit">Submit</button>
    </form>
  )}
</Formik>;
```

##### 11. How do you handle file uploads in React?

- Use the <input type="file"> element and handle the file using state.

**Example**

```jsx
function FileUpload() {
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={() => console.log(file)}>Upload</button>
    </div>
  );
}
```

#### Component Patterns

##### 12. What are Higher-Order Components (HOCs)?

- **HOC:** A function that takes a component and returns a new component with additional props or functionality.

**Example**

```jsx
function withLogger(WrappedComponent) {
  return function (props) {
    useEffect(() => {
      console.log("Component rendered!");
    }, []);
    return <WrappedComponent {...props} />;
  };
}
```

##### 13. What is the Context API? How do you use it to avoid prop drilling?

- **Context API:** A way to share data across the component tree without passing props manually.

**Example**

```jsx
const MyContext = React.createContext();
function App() {
  return (
    <MyContext.Provider value="Hello">
      <ChildComponent />
    </MyContext.Provider>
  );
}
function ChildComponent() {
  const value = useContext(MyContext);
  return <div>{value}</div>;
}
```

##### 14. What is prop drilling, and how do you avoid it?

- **Prop Drilling:** Passing props through multiple levels of components.

**How to Avoid**

- Use Context API.
- Use state management libraries like Redux.

##### 15. What is the Render Props pattern?

- **Render Props:** A pattern where a component accepts a function as a prop to render content.

**Example**

```jsx
function DataProvider({ render }) {
  const data = "Hello";
  return render(data);
}
function App() {
  return <DataProvider render={(data) => <div>{data}</div>} />;
}
```

##### 16. What are Compound Components?

- **Compound Components:** A pattern where components work together to achieve a common goal.

**Example**

```jsx
function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      isActive: index === activeIndex,
      onClick: () => setActiveIndex(index),
    }),
  );
}
function Tab({ isActive, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ fontWeight: isActive ? "bold" : "normal" }}
    >
      
      {children}
    </button>
  );
}
```

##### 17. What are React Portals? When would you use them?

- **React Portals:** Render children outside the DOM hierarchy of the parent component.
- **Use Case:** Modals, tooltips, or dropdowns.

**Example**

```jsx
function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root"),
  );
}
```

##### 18. What are Error Boundaries? How do you implement them?

- **Error Boundaries:** Catch JavaScript errors in child components and display a fallback UI.

**Implementation in Functional Components**

- Use a combination of useState and useEffect to mimic error boundaries.

**Example**

```jsx
function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const errorHandler = (error) => {
      console.error(error);
      setHasError(true);
    };
    window.addEventListener("error", errorHandler);
    return () => window.removeEventListener("error", errorHandler);
  }, []);
  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }
  return children;
}
```

#### Routing & Lazy Loading

##### 19. What is React Router? How do you implement routing?

- **React Router:** A library for routing in React applications.

**Example**

```jsx
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}
```

##### 20. How do you handle nested routes in React?

- Use nested Route components.

**Example**

```jsx
<Route path="/users" component={Users}>
  <Route path="/users/:id" component={UserDetail} />
</Route>;
```

##### 21. What is lazy loading? How is it implemented in React?

- **Lazy Loading:** Load components only when needed.

**Implementation**
```jsx
const LazyComponent = React.lazy(() => import("./LazyComponent"));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

##### 22. What is Suspense? How does it work with lazy loading?

- **Suspense:** A component that displays a fallback UI while waiting for lazy-loaded components.

**Example**

```jsx
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>;
```

#### Performance

##### 23. How do you optimize the performance of a React app?

- Use React.memo for memoizing components.
- Use useMemo and useCallback for memoizing values and functions.
- Avoid unnecessary re-renders with shouldComponentUpdate or React.memo.
- Use lazy loading and code splitting to reduce initial load time.
- Optimize images and assets for faster loading.

##### 24. What is memoization in React? How do React.memo and useMemo differ?

- **Memoization:** Caching the result of expensive calculations.
- React.memo: Memoizes a component to prevent re-renders.

**Example**

```jsx
const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.value}</div>;
});
```

- **useMemo:** Memoizes a value to prevent recalculations.

**Example**

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

##### 25. What is reconciliation in React?

- **Reconciliation:** The process of updating the DOM to match the React element tree.

**How it works**

- React compares the new virtual DOM with the previous one.
- Updates only the changed parts in the real DOM.

**Key Points**

- React uses a diffing algorithm to minimize DOM updates.
- Keys help React identify which items have changed, been added, or removed.

## Expert Level (5+ Years and Architect Roles)

### Scalability, Micro Frontends & Best Practices

#### Architecture & Design

##### 1. How do you design a scalable React application?

**Key Principles**

- Modular architecture: Break the app into reusable components and features.
- State management: Use Redux, Context API, or Zustand for global state.
- Code splitting: Use lazy loading and dynamic imports.
- Micro Frontends: Split the app into smaller, independent apps.

**Example**

**Use feature-based folder structure**

```text
src/
|-- features/
|   |-- auth/
|   |-- dashboard/
|   `-- profile/
|-- shared/
|   |-- components/
|   `-- utils/
`-- App.js
```

##### 2. How do you structure a large React project?

**Best Practices**

- Feature-based or domain-driven folder structure.
- Separate concerns: Components, hooks, services, and utils.

- Use absolute imports for better readability.

**Example**

```jsx
// Absolute import example
import Button from "shared/components/Button";
```

##### 3. How do you build and publish a React component library? (e.g., Storybook, Bit)

**Steps**

- Create reusable components.
- Use Storybook for documentation and testing.
- Publish to npm or Bit.dev.

**Example**

```bash
npm publish
```

##### 4. How do you implement Monorepos in React? (e.g., Nx, Turborepo)

**Monorepo Tools**

- Nx: Built-in support for React, testing, and linting.
- Turborepo: Fast builds with caching.

**Example**

```bash
# Create a new Nx workspace
npx create-nx-workspace@latest
```

#### Advanced Rendering

##### 5. How do you implement infinite scrolling and virtualized lists? (e.g., react-window)

- Infinite Scrolling: Load more data as the user scrolls.
- Virtualized Lists: Render only visible items to improve performance.

**Example**

```jsx
import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }) => {
  return <div style={style}>Row {index}</div>;
};

function MyList() {
  return (
    <List height={400} itemCount={1000} itemSize={50} width={300}>
      {Row}
    </List>
  );
}
```

##### 6. How do you handle performance tuning and caching? (e.g., React Query, SWR)

- **React Query:** A library for fetching, caching, and updating data.
- **SWR:** A lightweight data fetching library.

**Example**

```jsx
import useSWR from "swr";
function Profile() {
  const { data, error } = useSWR("/api/user", fetcher);
  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;
  return <div>Hello, {data.name}!</div>;
}
```

##### 7. How do you prefetch data in React?

- **Prefetching:** Load data before it's needed to improve user experience.

**Example**

```jsx
import { useQueryClient } from "react-query";
function MyComponent() {
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.prefetchQuery("userData", fetchUserData);
  }, [queryClient]);
  return <div>Prefetching data...</div>;
}
```

##### 8. What is Partial Hydration in React?

- **Partial Hydration:** Hydrate only the parts of the page that are visible or interactive.
- **Use Case:** Improve performance for large apps by reducing the initial JavaScript load.

##### 9. What is Progressive Hydration?

- **Progressive Hydration:** Hydrate components as they become visible or interactive.
- **Use Case:** Improve performance by delaying hydration for non-critical components.

#### Security & Accessibility

##### 10. How do you ensure security best practices in React? (e.g., XSS, CSRF)

- **XSS Prevention:** Sanitize user inputs and avoid using dangerouslySetInnerHTML.
- **CSRF Prevention:** Use anti-CSRF tokens and secure cookies.

**Example**

```jsx
// Sanitize user input
const sanitizedInput = DOMPurify.sanitize(userInput);
```

##### 11. How do you prevent memory leaks in React?

- **Memory Leaks:** Clean up subscriptions, timers, and event listeners in useEffect.

**Example**

```jsx
useEffect(() => { const timer = setInterval(() => console.log("Tick"), 1000); return () => clearInterval(timer); // Cleanup }, []);
```

##### 12. How do you ensure accessibility (a11y) in React apps? (e.g., ARIA roles)

**Accessibility Best Practices**

- Use semantic HTML.
- Add ARIA roles and attributes.
- Test with screen readers.

**Example**

```jsx
<button aria-label="Close" onClick={handleClose}>
  
  &times;
</button>;
```

##### 13. How do you deploy React apps? (e.g., Netlify, Vercel, AWS S3 + CloudFront)

**Deployment Options**

- **Netlify:** Simple and fast.
- **Vercel:** Built-in support for Next.js.
- **AWS S3 + CloudFront:** Scalable and cost-effective.

**Example**

```bash
vercel
```

##### 14. How do you set up CI/CD pipelines for React apps? (e.g., GitHub Actions, Jenkins)

**CI/CD Tools**

- GitHub Actions: Integrated with GitHub.
- Jenkins: Highly customizable.

**Example**

```yaml
name: CI
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm test
```

##### 15. How do you manage environment variables securely in React?

**Best Practices**

- Use .env files for local development.

- Use server-side environment variables for production.

**Example**

```bash
REACT_APP_API_KEY=your_api_key
```

#### Testing

##### 16. How do you test React components? (e.g., Jest, React Testing Library)

**Testing Tools**

- **Jest:** Test runner.
- **React Testing Library:** Test components in a user-centric way.

**Example**

```jsx
import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";
test("renders MyComponent", () => {
  render(<MyComponent />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
```

##### 17. What is the difference between shallow and deep rendering?

- **Shallow Rendering:** Render only the component, not its children.
- **Deep Rendering:** Render the component and all its children.

**Use Case**

- Shallow rendering for unit tests.
- Deep rendering for integration tests.

##### 18. How do you mock APIs and dependencies in tests?

- **Mocking:** Simulate API responses or dependencies.

**Example**

```jsx
jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: "Mocked data" })),
}));
```

##### 19. How do you perform E2E testing in React? (e.g., Cypress, Playwright)

**E2E Testing Tools**

- **Cypress:** Easy to use and debug.
- **Playwright:** Cross-browser testing.

**Example**

```jsx
describe("MyComponent", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.contains("Hello").should("be.visible");
  });
});
```
