# Frontend Developer Quick Idea (HTML, CSS, JavaScript, TypeScript, React)

Author: Madhava Reddy Vemireddy  

This document contains concise **one-line answers** for quick frontend interview revision.

---

# 1. HTML & CSS Foundations

## HTML Basics

1. **What is HTML?**  
HTML is the standard markup language used to structure content on the web.

2. **What is semantic HTML?**  
Semantic HTML uses meaningful tags like `header`, `main`, and `article` to describe content clearly.

3. **What is the difference between `div` and `span`?**  
`div` is a block-level container, while `span` is an inline container.

4. **What is `<!DOCTYPE html>`?**  
It tells the browser to render the page using modern HTML standards.

5. **What is the viewport meta tag?**  
The viewport meta tag helps pages scale correctly on mobile devices.

6. **What is the difference between `id` and `class`?**  
`id` is unique for one element, while `class` can be reused on many elements.

7. **What is HTML form validation?**  
HTML form validation checks user input on the client side using built-in attributes like `required` and `pattern`.

8. **Why is the `alt` attribute important?**  
The `alt` attribute improves accessibility and shows fallback text when an image cannot load.

9. **What is `localStorage`?**  
`localStorage` stores browser data with no expiration until it is manually cleared.

10. **What is `sessionStorage`?**  
`sessionStorage` stores browser data only for the current tab session.

---

## CSS Basics

11. **What is CSS?**  
CSS is used to style and visually format HTML elements on a webpage.

12. **What is the CSS cascade?**  
The cascade decides which CSS rule is applied when multiple rules target the same element.

13. **What is CSS specificity?**  
Specificity is the priority system that determines which selector wins in CSS.

14. **What is the CSS box model?**  
The box model consists of content, padding, border, and margin.

15. **What is the difference between margin and padding?**  
Margin creates space outside an element, while padding creates space inside the element.

16. **What is Flexbox?**  
Flexbox is a one-dimensional layout system for aligning items in rows or columns.

17. **What is CSS Grid?**  
CSS Grid is a two-dimensional layout system for building rows and columns together.

18. **What does the `position` property do?**  
The `position` property controls how an element is placed in the document flow.

19. **What is `z-index`?**  
`z-index` controls the stacking order of positioned elements.

20. **What is a pseudo-class in CSS?**  
A pseudo-class styles an element in a specific state like `:hover` or `:focus`.

21. **What is a pseudo-element in CSS?**  
A pseudo-element styles a part of an element like `::before` or `::after`.

22. **What are CSS variables?**  
CSS variables are reusable custom properties defined with `--name` and accessed with `var()`.

23. **What is a CSS transition?**  
A CSS transition smoothly changes a property value over a specified duration.

24. **What is a CSS animation?**  
A CSS animation uses keyframes to create repeated or staged visual effects.

25. **What is the difference between `block`, `inline`, and `inline-block`?**  
`block` takes full width, `inline` flows with text, and `inline-block` allows sizing while staying inline.

---

# 2. Responsive Design & Accessibility

26. **What is responsive design?**  
Responsive design makes a website adapt smoothly to different screen sizes.

27. **What is mobile-first design?**  
Mobile-first design starts with the smallest screen layout and enhances it for larger screens.

28. **What are media queries?**  
Media queries apply CSS rules based on screen size or device features.

29. **What is the difference between `rem` and `em`?**  
`rem` is based on the root font size, while `em` is based on the parent element's font size.

30. **What is web accessibility?**  
Web accessibility means building websites that people with disabilities can use effectively.

31. **What is ARIA?**  
ARIA adds accessibility information to elements when native HTML semantics are not enough.

32. **Why is keyboard accessibility important?**  
Keyboard accessibility allows users to navigate and interact without a mouse.

33. **What is color contrast?**  
Color contrast is the visual difference between foreground and background colors needed for readability.

34. **What is lazy loading for images?**  
Lazy loading delays image loading until the image is close to the viewport.

35. **What is progressive enhancement?**  
Progressive enhancement builds a basic working experience first and adds advanced features later.

---

# 3. JavaScript Core Concepts

36. **What is JavaScript?**  
JavaScript is a programming language used to add logic and interactivity to web pages.

37. **What is the difference between `var`, `let`, and `const`?**  
`var` is function-scoped, while `let` and `const` are block-scoped and `const` cannot be reassigned.

38. **What are primitive data types in JavaScript?**  
Primitive types include `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.

39. **What is an object in JavaScript?**  
An object is a collection of key-value pairs used to store structured data.

40. **What is a closure?**  
A closure is a function that remembers variables from its outer scope.

41. **What is hoisting?**  
Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.

42. **What is the difference between `==` and `===`?**  
`==` compares after type conversion, while `===` compares value and type without conversion.

43. **What is the DOM?**  
The DOM is the browser's object representation of an HTML document.

44. **What is event bubbling?**  
Event bubbling is when an event starts on the target element and moves up through parent elements.

45. **What is event delegation?**  
Event delegation handles child element events by attaching one listener to a parent element.

46. **What is a callback function?**  
A callback is a function passed into another function to run later.

47. **What is a Promise?**  
A Promise represents the future result of an asynchronous operation.

48. **What is `async/await`?**  
`async/await` provides cleaner syntax for writing asynchronous Promise-based code.

49. **What is destructuring in JavaScript?**  
Destructuring extracts values from arrays or objects into variables.

50. **What is the spread operator?**  
The spread operator `...` expands arrays, objects, or function arguments.

51. **What does `map()` do?**  
`map()` creates a new array by transforming every item in the original array.

52. **What does `filter()` do?**  
`filter()` creates a new array containing only items that match a condition.

53. **What does `reduce()` do?**  
`reduce()` combines array values into a single result like a sum or object.

54. **What is debouncing?**  
Debouncing delays a function call until the user stops triggering it for a short time.

55. **What is throttling?**  
Throttling limits how often a function can run within a set time interval.

---

# 4. TypeScript Basics

56. **What is TypeScript?**  
TypeScript is a typed superset of JavaScript that adds static type checking.

57. **Why use TypeScript in frontend projects?**  
TypeScript helps catch bugs early and makes large codebases easier to maintain.

58. **What is an interface in TypeScript?**  
An interface defines the shape of an object or class.

59. **What is a type alias in TypeScript?**  
A type alias gives a custom name to a type definition.

60. **What is a union type?**  
A union type allows a value to be one of multiple specified types.

61. **What is a generic in TypeScript?**  
A generic creates reusable code that works with different types safely.

62. **What is optional chaining?**  
Optional chaining safely accesses nested properties using `?.` without throwing errors.

63. **What is type inference?**  
Type inference is TypeScript automatically figuring out a variable's type from its value.

64. **What is type assertion?**  
Type assertion tells TypeScript to treat a value as a specific type.

65. **What is `strict` mode in TypeScript?**  
`strict` mode enables stronger type checks for safer and more predictable code.

---

# 5. React Fundamentals

66. **What is React?**  
React is a JavaScript library for building user interfaces with reusable components.

67. **What is JSX?**  
JSX is a syntax extension that lets developers write HTML-like UI code inside JavaScript or TypeScript.

68. **What is a component in React?**  
A component is a reusable piece of UI with its own logic and rendering.

69. **What are props in React?**  
Props are read-only inputs passed from a parent component to a child component.

70. **What is state in React?**  
State is component-managed data that can change over time and trigger re-renders.

71. **What is the difference between props and state?**  
Props come from outside the component, while state is managed inside the component.

72. **What is the Virtual DOM?**  
The Virtual DOM is React's lightweight in-memory copy of the real DOM.

73. **What is reconciliation in React?**  
Reconciliation is React's process for comparing UI trees and updating only what changed.

74. **Why are keys important in React lists?**  
Keys help React identify list items correctly during updates and re-renders.

75. **What is one-way data flow in React?**  
One-way data flow means data moves from parent components down to child components.

76. **What is a controlled component?**  
A controlled component is a form element whose value is managed by React state.

77. **What is lifting state up?**  
Lifting state up moves shared state to the closest common parent component.

78. **What is conditional rendering?**  
Conditional rendering shows different UI based on state, props, or logic.

79. **What is `Fragment` in React?**  
`Fragment` groups elements without adding extra nodes to the DOM.

80. **What is React Strict Mode?**  
React Strict Mode is a development tool that helps detect unsafe patterns and side effects.

---

# 6. React Hooks & Patterns

81. **What does `useState` do?**  
`useState` adds local state to a functional component.

82. **What does `useEffect` do?**  
`useEffect` runs side effects like API calls, subscriptions, or timers after render.

83. **What is effect cleanup in React?**  
Effect cleanup removes subscriptions, timers, or listeners before unmounting or rerunning an effect.

84. **What does `useRef` do?**  
`useRef` stores a mutable value or references a DOM element without causing re-renders.

85. **What does `useMemo` do?**  
`useMemo` caches an expensive computed value until its dependencies change.

86. **What does `useCallback` do?**  
`useCallback` caches a function reference until its dependencies change.

87. **What does `useContext` do?**  
`useContext` reads shared data from a React context without prop drilling.

88. **What does `useReducer` do?**  
`useReducer` manages complex state transitions using actions and a reducer function.

89. **What is a custom hook?**  
A custom hook is a reusable function that shares stateful React logic between components.

90. **What is an Error Boundary in React?**  
An Error Boundary catches rendering errors in a component tree and shows fallback UI.

---

# 7. Libraries & Tooling

91. **What is Vite?**  
Vite is a fast frontend build tool and development server for modern web projects.

92. **What is npm?**  
npm is the package manager used to install and manage JavaScript libraries and tools.

93. **What is React Router?**  
React Router is a library for navigation and routing in React applications.

94. **What is Axios?**  
Axios is a popular HTTP client library used to make API requests.

95. **What is TanStack Query?**  
TanStack Query manages server state like fetching, caching, and background updates.

96. **What is Redux Toolkit?**  
Redux Toolkit is the official simplified way to write Redux state management logic.

97. **What is React Hook Form?**  
React Hook Form is a library for building performant and manageable forms in React.

98. **What is Zod?**  
Zod is a schema validation library often used for form and API data validation.

99. **What is Tailwind CSS?**  
Tailwind CSS is a utility-first CSS framework for building custom UI quickly.

100. **What is Next.js?**  
Next.js is a React framework that adds routing, SSR, SSG, and full-stack capabilities.

---

# 8. Performance, Testing, Security & Deployment

101. **What is code splitting?**  
Code splitting breaks a bundle into smaller chunks so users load only what they need.

102. **What is lazy loading in React?**  
Lazy loading loads components only when they are needed to improve initial load performance.

103. **What is tree shaking?**  
Tree shaking removes unused code from the final production bundle.

104. **What are Core Web Vitals?**  
Core Web Vitals are user-focused metrics that measure loading, interactivity, and visual stability.

105. **What is React Testing Library?**  
React Testing Library is a tool for testing UI behavior the way users interact with it.

106. **What are Vitest and Jest?**  
Vitest and Jest are JavaScript testing frameworks used to run unit and integration tests.

107. **What is XSS?**  
XSS is a security attack where malicious scripts are injected into a webpage.

108. **What is CORS?**  
CORS is a browser security mechanism that controls cross-origin HTTP requests.

109. **What are environment variables in frontend apps?**  
Environment variables store configuration values like API base URLs for different environments.

110. **What is CI/CD?**  
CI/CD automates building, testing, and deploying applications consistently.

---

---

# 9. Advanced JavaScript & Browser Concepts

111. **What is the event loop?**  
The event loop handles asynchronous tasks by moving them from queue to execution stack.

112. **What are microtasks and macrotasks?**  
Microtasks run before macrotasks in the event loop queue.

113. **What is memory leak in JavaScript?**  
Memory leak occurs when unused objects are not released from memory.

114. **What is garbage collection in JavaScript?**  
Garbage collection automatically removes unused memory.

115. **What is shallow copy vs deep copy?**  
Shallow copy copies references, deep copy creates independent copies.

116. **What is immutability in JavaScript?**  
Immutability means data cannot be modified after creation.

117. **What is currying?**  
Currying converts a function into nested functions.

118. **What is pure function?**  
Pure function returns same output for same input without side effects.

119. **What is module pattern?**  
Module pattern organizes code into reusable modules.

120. **What is dynamic import?**  
Dynamic import loads modules only when needed.

---

# 10. Advanced React Concepts

121. **What is React reconciliation?**  
Reconciliation compares virtual DOM changes and updates the real DOM efficiently.

122. **What is React fiber?**  
React fiber is the internal algorithm managing rendering priority.

123. **What is Concurrent Rendering in React?**  
Concurrent rendering allows React to pause and resume rendering tasks.

124. **What is Suspense in React?**  
Suspense handles loading states for lazy components.

125. **What is React.lazy()?**  
React.lazy loads components dynamically.

126. **What is hydration in React?**  
Hydration attaches event listeners to server-rendered HTML.

127. **What is Server-Side Rendering (SSR)?**  
SSR renders pages on the server before sending to browser.

128. **What is Static Site Generation (SSG)?**  
SSG generates static pages during build time.

129. **What is Incremental Static Regeneration (ISR)?**  
ISR updates static pages after deployment.

130. **What is memoization in React?**  
Memoization caches computed results to prevent recalculation.

---

# 11. Frontend Architecture & State Management

131. **What is component-based architecture?**  
Component-based architecture builds UI using reusable components.

132. **What is separation of concerns?**  
Separation of concerns divides logic into independent parts.

133. **What is global state management?**  
Global state management stores shared data across components.

134. **What is local state management?**  
Local state manages data within a component.

135. **What is prop drilling?**  
Prop drilling passes props through multiple component levels.

136. **What is state normalization?**  
State normalization structures data efficiently.

137. **What is optimistic UI update?**  
Optimistic UI updates UI before server confirmation.

138. **What is caching in frontend?**  
Caching stores data locally for faster retrieval.

139. **What is retry mechanism in API calls?**  
Retry mechanism repeats failed requests.

140. **What is API error boundary handling?**  
Error boundary displays fallback UI during errors.

---

# 12. Real-World Frontend Scenarios

141. **UI rendering slow — what to check?**  
Check unnecessary re-renders and optimize components.

142. **Component re-rendering too often — solution?**  
Use React.memo or useMemo.

143. **Large list rendering slow — solution?**  
Use virtualization libraries.

144. **API data not showing — debugging steps?**  
Check network response and state updates.

145. **Memory leak in React — solution?**  
Clean up subscriptions in useEffect.

146. **Form validation failing — solution?**  
Check validation schema and input handlers.

147. **Page loading slow — solution?**  
Optimize bundle and lazy load components.

148. **State inconsistency issue — solution?**  
Centralize state management.

149. **CSS layout breaking — solution?**  
Check Flexbox/Grid configuration.

150. **Production bug — debugging steps?**  
Check logs, console errors, and network requests.

151. **Why React Components Re-render****
A React component re-renders when:
- **State changes**
- **Props change**
- **Parent component re-renders**
- **Context value changes**
- **Force update is triggered (rare case)**
