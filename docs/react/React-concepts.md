
## React Rendering

### 1. Parent component re-renders every second; child also re-renders

**Answer:** Wrap the child with `React.memo` and keep props stable using `useMemo` or `useCallback`.



### 2. Component takes 500ms to render

**Answer:** Use React DevTools Profiler to identify expensive renders and optimize bottlenecks.



### 3. Why does React render twice in development?

**Answer:** React Strict Mode intentionally renders components twice to detect side effects.



### 4. When should you use React.memo?

**Answer:** Use it for expensive components whose props rarely change.



### 5. When does useMemo improve performance?

**Answer:** Use it only for expensive calculations that don't need to run on every render.



### 6. Wrapped everything in useMemo/useCallback but performance is still bad

**Answer:** Overusing memoization adds overhead, so optimize only real bottlenecks.

## useEffect

### 7. API is called twice

**Answer:** React Strict Mode runs effects twice in development.



### 8. Infinite API loop

**Answer:** Updating a dependency inside `useEffect` causes continuous re-execution.



### 9. How do you cancel an API request on unmount?

**Answer:** Use `AbortController` in the cleanup function.



### 10. How do you prevent memory leaks?

**Answer:** Clean up timers, subscriptions and API requests in `useEffect`.



### 11. Difference between `[]`, `[user]` and no dependency array

**Answer:** `[]` runs once, `[user]` runs when `user` changes and no dependency runs after every render.



### 12. When should useEffect NOT be used?

**Answer:** Avoid it for calculations that can be done during rendering.

## State Management

### 13. User data shared across Header, Sidebar and Dashboard

**Answer:** Use Context for small apps and Redux for complex global state.



### 14. When does Context become a bad choice?

**Answer:** Frequent updates cause unnecessary re-renders of all consumers.



### 15. Why Redux Toolkit?

**Answer:** It reduces boilerplate and provides built-in best practices.



### 16. Redux store has 10,000 records

**Answer:** Use memoized selectors with `createSelector`.



### 17. Why are state updates asynchronous?

**Answer:** React batches state updates for better performance.

## API Calls

### 18. Search API fires on every keystroke

**Answer:** Use debounce to reduce unnecessary API calls.



### 19. Second API finishes before the first

**Answer:** Cancel previous requests or ignore stale responses.



### 20. Retry failed API

**Answer:** Retry using exponential backoff.



### 21. Loading, empty and error state

**Answer:** Maintain separate loading, error and data states.



### 22. Where should API logic live?

**Answer:** Keep API logic inside services or custom hooks.

## TypeScript

### 23. API response changes unexpectedly

**Answer:** TypeScript catches incompatible types during compilation.



### 24. Backend returns nullable values

**Answer:** Use union types like `string | null`.



### 25. Interface vs Type

**Answer:** Use interface for objects and type for unions or advanced types.



### 26. Generic API response

**Answer:** Create reusable types like `ApiResponse<T>`.



### 27. Generic table component

**Answer:** Use TypeScript generics (`<T>`).



### 28. Type React children

**Answer:** Use `React.ReactNode`.

## Forms

### 29. Large form with slow validation

**Answer:** Validate only changed fields and reduce re-renders.



### 30. Controlled vs uncontrolled components

**Answer:** Controlled components are preferred for validation and dynamic forms.



### 31. Password confirmation validation

**Answer:** Compare both values before submission.



### 32. Dynamic form fields

**Answer:** Render inputs by mapping over a configuration array.

## Authentication

### 33. JWT expires

**Answer:** Refresh the token or redirect the user to login.



### 34. Where should JWT be stored?

**Answer:** Prefer HttpOnly cookies for better security.



### 35. Refresh token flow

**Answer:** Use the refresh token to generate a new access token.



### 36. Protect private routes

**Answer:** Verify authentication before rendering protected pages.

## Performance

### 37. List contains 10,000 items

**Answer:** Use virtualization such as `react-window`.



### 38. Large images slow the page

**Answer:** Compress and lazy-load images.



### 39. Bundle size is too large

**Answer:** Use code splitting, lazy loading and tree shaking.



### 40. When should lazy loading be used?

**Answer:** Load heavy components only when required.



### 41. What is code splitting?

**Answer:** Split bundles into smaller chunks for faster loading.

## Architecture

### 42. Where should business logic live?

**Answer:** Keep business logic inside hooks or services.



### 43. When should custom hooks be created?

**Answer:** When the same logic is reused across components.



### 44. Enterprise folder structure

**Answer:** Organize the project by feature.



### 45. Separate UI and business logic

**Answer:** Keep components presentational and move logic into hooks.

## Error Handling

### 46. One component crashes the app

**Answer:** Wrap components with Error Boundaries.



### 47. Try-catch vs Error Boundary

**Answer:** Try-catch handles JavaScript errors while Error Boundaries handle React rendering errors.



### 48. API returns 500

**Answer:** Show an error message and provide a retry option.

## React Router

### 49. Refresh breaks routing

**Answer:** Configure the server to redirect all routes to `index.html`.



### 50. Protected routes

**Answer:** Redirect unauthenticated users to the login page.



### 51. Passing data between pages

**Answer:** Use route params, query params, navigation state or global state.

## Micro Frontend

### 52. Different React versions in MFEs

**Answer:** Different versions may cause runtime conflicts.



### 53. MFE communication

**Answer:** Use shared state, events or Module Federation APIs.



### 54. Why share dependencies?

**Answer:** To avoid duplicate bundles and version conflicts.



### 55. One MFE crashes

**Answer:** Isolate failures using Error Boundaries.

## Webpack

### 56. Application loads slowly

**Answer:** Optimize bundle size and enable lazy loading.



### 57. Tree shaking

**Answer:** Removes unused code from production bundles.



### 58. Development vs production build

**Answer:** Production builds are optimized while development builds focus on debugging.

## Security

### 59. Prevent XSS

**Answer:** Avoid `dangerouslySetInnerHTML` and sanitize user input.



### 60. Why not trust frontend validation?

**Answer:** Frontend validation can be bypassed, so backend validation is mandatory.

## Testing

### 61. Which components should be unit tested?

**Answer:** Test reusable components and business logic.



### 62. Mock API in tests

**Answer:** Mock network requests using Jest or MSW.



### 63. Test custom hooks

**Answer:** Use `renderHook` from React Testing Library.

## Production Scenarios

### 64. Production bug occurs

**Answer:** Reproduce the issue, inspect logs and debug systematically.



### 65. App is slow only in production

**Answer:** Analyze bundle size, network requests and performance profiling.



### 66. Component used by multiple teams

**Answer:** Make it configurable, reusable and well documented.



### 67. Make components reusable

**Answer:** Accept configurable props and separate business logic.



### 68. Accessibility requirements

**Answer:** Use semantic HTML, keyboard support and ARIA attributes.



### 69. Dark mode implementation

**Answer:** Manage themes using Context or CSS variables.



### 70. Role-based UI

**Answer:** Conditionally render UI based on user roles and permissions.
