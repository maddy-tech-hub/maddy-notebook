# React Frontend Developer Interview Questions (Comprehensive)

Use this as a full interview question bank for React frontend roles (junior to senior).

---

## 1. React Fundamentals

1. What is React, and why is it used?
2. What are the main features of React?
3. What is a component in React?
4. What is the difference between functional and class components?
5. What is JSX?
6. Why does React use a virtual DOM?
7. What is reconciliation in React?
8. What are keys in React, and why are they important?
9. What is one-way data flow in React?
10. What are props in React?
11. What is state in React?
12. What is the difference between props and state?
13. What is React Strict Mode?
14. What are fragments in React?
15. Why should component names start with uppercase letters?

## 2. JSX and Rendering

1. How does JSX differ from HTML?
2. Why is `className` used instead of `class` in JSX?
3. How do you render lists in React?
4. What happens if you use array index as key?
5. How do conditional rendering patterns work in React?
6. What is the difference between `&&`, ternary, and early return rendering?
7. How do you render nothing in React?
8. What are controlled re-renders?
9. Why does a parent re-render affect children?
10. How can you avoid unnecessary re-renders?

## 3. Components, Props, and State

1. How do you pass data from parent to child?
2. How do you pass data from child to parent?
3. What is prop drilling?
4. How can prop drilling be avoided?
5. What is lifting state up?
6. When should state be local vs global?
7. What is derived state, and why is it risky?
8. What are default props?
9. What is composition in React?
10. Why prefer composition over inheritance in React?
11. What is `children` prop?
12. How do you create reusable component APIs?
13. What are presentational and container components?
14. What is a compound component pattern?
15. What are render props?

## 4. Hooks (Core)

1. What are React Hooks?
2. Why were hooks introduced?
3. What rules must hooks follow?
4. What does `useState` do?
5. How does functional state update work in `useState`?
6. What does `useEffect` do?
7. What are common `useEffect` dependency mistakes?
8. What is effect cleanup, and why is it needed?
9. What is `useRef` used for?
10. What is `useMemo` and when should you use it?
11. What is `useCallback` and when should you use it?
12. What is `useContext` used for?
13. What is `useReducer` and when is it better than `useState`?
14. What is `useLayoutEffect`, and how is it different from `useEffect`?
15. What is `useImperativeHandle` used for?
16. What does `forwardRef` do?
17. What is `useTransition`?
18. What is `useDeferredValue`?
19. What is `useId` used for?
20. What are custom hooks, and why are they useful?

## 5. Hooks (Advanced Scenarios)

1. How do you prevent stale closures in hooks?
2. How do you handle async logic in `useEffect`?
3. How do you cancel API requests in effects?
4. How do you avoid infinite loops in `useEffect`?
5. How do you optimize expensive calculations with hooks?
6. How do you debounce input with hooks?
7. How do you build a reusable `useFetch` hook?
8. What problems can overusing `useMemo` and `useCallback` cause?
9. How do you share stateful logic between components?
10. How do you test custom hooks?

## 6. Forms and User Input

1. What is a controlled component?
2. What is an uncontrolled component?
3. What are trade-offs between controlled and uncontrolled forms?
4. How do you handle multiple input fields efficiently?
5. How do you perform form validation in React?
6. How do you show touched/error states in forms?
7. How do you manage complex forms in large apps?
8. What are popular React form libraries, and why use them?
9. How do you prevent unnecessary re-renders in large forms?
10. How do file uploads work in React forms?

## 7. Events and DOM Interaction

1. How does event handling work in React?
2. What is SyntheticEvent in React?
3. How do you pass parameters to event handlers?
4. What is event bubbling and capturing in React?
5. How do you prevent default behavior in React events?
6. How do you stop event propagation?
7. How do you access DOM elements in React?
8. When should you use refs instead of state?
9. How do portals help with modals/tooltips?
10. How do you manage focus in accessible React apps?

## 8. React Router

1. What problem does React Router solve?
2. What is the difference between client-side and server-side routing?
3. How do you configure routes in React Router v6+?
4. What is nested routing?
5. What is dynamic routing with params?
6. How do you read route params and query params?
7. What is protected routing?
8. How do you redirect users after authentication?
9. What are route loaders/actions (data APIs)?
10. How do you lazy load routes?

## 9. State Management

1. When is Context API enough?
2. When should you use Redux or another state library?
3. What are Redux core concepts (store, action, reducer)?
4. Why is immutability important in Redux?
5. What is Redux Toolkit, and why is it preferred?
6. What is middleware in Redux?
7. How does async state work in Redux Toolkit (`createAsyncThunk`)?
8. What is selector memoization?
9. What are alternatives to Redux (Zustand, Recoil, Jotai)?
10. How do you decide local state vs global state?

## 10. Performance Optimization

1. How do you measure React app performance?
2. What causes unnecessary re-renders?
3. When should you use `React.memo`?
4. How do you optimize large lists?
5. What is virtualization/windowing?
6. How does code splitting improve performance?
7. What is lazy loading with `React.lazy` and `Suspense`?
8. How do you optimize bundle size?
9. What is tree shaking?
10. What are Core Web Vitals (LCP, CLS, INP)?
11. How do images affect performance?
12. How do you optimize first paint and time to interactive?

## 11. Data Fetching and API Integration

1. How do you fetch data in React?
2. How do you handle loading, error, and empty states?
3. How do you cancel outdated requests?
4. How do you prevent race conditions in async requests?
5. What is optimistic UI update?
6. What is request deduplication and caching?
7. Why use React Query / TanStack Query?
8. What is stale-while-revalidate?
9. How do retries and backoff strategies work?
10. How do you handle pagination and infinite scroll?

## 12. Error Handling and Reliability

1. What are Error Boundaries?
2. What types of errors do Error Boundaries catch?
3. Why do Error Boundaries not catch async errors in event handlers?
4. How do you implement global error UI fallback?
5. How do you log client-side errors in production?
6. How do you handle API failure gracefully?
7. How do you build retry UX patterns?
8. How do you avoid app crashes due to null/undefined data?
9. How do you handle partial rendering failures?
10. What is graceful degradation in frontend apps?

## 13. Testing (Frontend + React)

1. What is the testing pyramid for frontend?
2. What should be unit tested in React apps?
3. How do you test components with React Testing Library?
4. Why test behavior instead of implementation details?
5. What is mocking in frontend tests?
6. How do you mock API calls?
7. What should be covered in integration tests?
8. What should be covered in E2E tests?
9. When do you use Playwright vs Cypress?
10. How do you test async UI updates?
11. How do you test form validation flows?
12. How do you test accessibility in CI?

## 14. TypeScript with React

1. Why use TypeScript in React projects?
2. How do you type component props?
3. How do you type `children`?
4. How do you type event handlers in React?
5. How do you type `useState` and `useReducer`?
6. How do you type refs in React?
7. What are union types and discriminated unions in UI state?
8. How do generics help in reusable React components?
9. What is `React.FC`, and should you use it?
10. How do strict TS settings improve frontend quality?

## 15. CSS, UI, and Design System Questions

1. How do you choose between CSS Modules, styled-components, and Tailwind?
2. What is the difference between responsive and adaptive design?
3. How do media queries work?
4. What is mobile-first design?
5. What are common CSS layout systems (Flexbox, Grid)?
6. How do you build reusable UI components?
7. What is a design system?
8. What are design tokens?
9. How do you manage theme switching (light/dark)?
10. How do you avoid CSS conflicts in large projects?
11. How do you handle animations in React apps?
12. What is the impact of heavy animations on performance?

## 16. Accessibility (A11y)

1. What is web accessibility, and why is it important?
2. How do semantic HTML and ARIA differ?
3. When should ARIA be used?
4. How do you ensure keyboard accessibility?
5. What are focus traps, and where are they needed?
6. How do you build accessible modals?
7. How do screen readers interact with React apps?
8. How do you test accessibility?
9. What is color contrast, and why does it matter?
10. How do you announce dynamic updates to assistive tech?

## 17. Frontend Security

1. What is XSS, and how can React apps prevent it?
2. Why is `dangerouslySetInnerHTML` risky?
3. What is CSRF, and when does it matter?
4. Where should auth tokens be stored and why?
5. What are trade-offs of localStorage vs cookies?
6. What is Content Security Policy (CSP)?
7. How do you secure API calls from frontend apps?
8. What is dependency vulnerability management?
9. How do you avoid leaking secrets in frontend builds?
10. What is clickjacking protection?

## 18. Build Tools, Dev Experience, and Deployment

1. What is the role of bundlers like Vite/Webpack?
2. What is Babel, and why is it used?
3. What is source map, and when should it be disabled?
4. What are environment variables in frontend apps?
5. How do you manage multiple environments (dev/stage/prod)?
6. What is CI/CD for frontend projects?
7. What checks should run in CI?
8. How do linting and formatting help teams?
9. How do you detect and reduce bundle regressions?
10. How do CDNs improve frontend performance?

## 19. SSR, SSG, and Modern React Architecture

1. What is SPA vs SSR vs SSG?
2. What are pros/cons of SSR?
3. What are pros/cons of SSG?
4. What is hydration in React?
5. What is streaming SSR?
6. When should you use Next.js instead of plain React SPA?
7. What are server components (high-level)?
8. How do caching strategies differ between SSR and SPA?
9. How do SEO requirements influence architecture choice?
10. How do you handle auth in SSR apps?

## 20. System Design and Senior-Level Questions

1. How would you design a scalable frontend architecture for a large React app?
2. How would you split a monolithic frontend into modules or micro frontends?
3. How do you enforce consistent patterns across many teams?
4. How do you design a reusable component library?
5. How do you version and release shared UI packages?
6. How do you approach performance budgets in large apps?
7. How do you introduce observability in frontend apps?
8. How do you migrate legacy React class components to hooks safely?
9. How do you reduce technical debt in frontend codebases?
10. How do you choose between feature velocity and code quality?

## 21. Debugging and Practical Scenarios

1. A component re-renders too often. How do you debug it?
2. API responses arrive out of order. How do you fix stale data?
3. Large table rendering is slow. What optimization strategy will you use?
4. Search input causes lag while typing. How do you fix UX and performance?
5. Authenticated routes flash before redirecting. How do you fix it?
6. Form state is too complex and buggy. How would you refactor?
7. A modal is inaccessible by keyboard. What exact fixes do you make?
8. Bundle size suddenly increased by 40%. How do you investigate?
9. SSR page has hydration mismatch warnings. How do you debug?
10. Production-only bug appears in minified build. What steps do you take?

## 22. HR + Project Explanation Questions (React-Specific)

1. Explain your latest React project architecture.
2. What was the hardest UI issue you solved, and how?
3. What performance problem did you solve in production?
4. What accessibility improvements did you implement?
5. How did you test your React app end-to-end?
6. What state management approach did you choose, and why?
7. What trade-offs did you make under deadline pressure?
8. How did you handle API failures and retries?
9. How did you review React code in your team?
10. What would you redesign in your current frontend app?

---

## Quick Revision Set (Top 30 Must-Prepare Questions)

1. Explain virtual DOM and reconciliation.
2. Props vs state.
3. Controlled vs uncontrolled components.
4. `useEffect` lifecycle and cleanup.
5. `useMemo` vs `useCallback`.
6. Why keys matter in list rendering.
7. How React re-rendering works.
8. Context API vs Redux.
9. How to prevent unnecessary re-renders.
10. How to fetch data safely with cancellation.
11. Error boundaries and fallback UI.
12. React Router protected routes.
13. JWT auth flow in frontend.
14. XSS and CSRF basics for React apps.
15. React Testing Library best practices.
16. Unit vs integration vs E2E tests.
17. Accessibility basics for forms/modals.
18. Core Web Vitals and optimization.
19. Lazy loading and code splitting.
20. Virtualized lists.
21. SSR vs SPA trade-offs.
22. TypeScript typing patterns in React.
23. Design system and reusable components.
24. Debounce/throttle in UI.
25. Optimistic updates.
26. API caching with React Query.
27. Feature folder architecture.
28. CI checks for frontend projects.
29. Debugging hydration mismatch.
30. Explain one production incident end-to-end.

---

If you want, I can create the next version with answers in this format:

- **Question**
- **Short Interview Answer (30-60 sec)**
- **Deep-Dive Follow-up Points**
- **Code Example (if needed)**
