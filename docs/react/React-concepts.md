
## 1. Parent re-renders every second; child also re-renders

**Answer:** Wrap the child with `React.memo` and keep props stable using `useMemo`/`useCallback`.



## 2. Component takes 500ms to render

**Answer:** Use React DevTools Profiler to identify unnecessary renders and expensive computations.



## 3. React renders twice in development

**Answer:** React Strict Mode intentionally double-invokes components in development to detect side effects.



## 4. When to use React.memo?

**Answer:** Use it when a component receives the same props frequently and expensive re-rendering can be avoided.



## 5. When does useMemo improve performance?

**Answer:** Use it only for expensive calculations that don't need to run on every render.



## 6. Wrapped everything in useMemo/useCallback but app is still slow

**Answer:** Overusing memoization adds overhead, so optimize only actual bottlenecks.



## 7. API is called twice

**Answer:** React Strict Mode in development executes effects twice to detect side effects.



## 8. Infinite API loop

**Answer:** Updating a dependency inside `useEffect` causes it to execute repeatedly.



## 9. Cancel API call on unmount

**Answer:** Use `AbortController` inside the cleanup function.



## 10. Prevent memory leaks

**Answer:** Clean up subscriptions, timers and pending API requests in `useEffect`.



## 11. Difference between [], [user] and no dependency

**Answer:** `[]` runs once, `[user]` runs when user changes, no dependency runs after every render.



## 12. When should useEffect NOT be used?

**Answer:** Don't use it for calculations that can be done directly during rendering.



## 13. User data shared across multiple components

**Answer:** Use Context for small apps and Redux for complex global state.



## 14. When does Context become a bad choice?

**Answer:** Frequent updates cause unnecessary re-renders of all consumers.



## 15. Why Redux Toolkit?

**Answer:** It reduces boilerplate and provides built-in best practices.



## 16. Redux store contains 10,000 records

**Answer:** Use memoized selectors with `createSelector` to prevent unnecessary recalculations.



## 17. State updates are asynchronous

**Answer:** React batches state updates before triggering a re-render.



## 18. Search API fires for every keystroke

**Answer:** Use debounce to delay API calls until typing stops.



## 19. Second API finishes before first

**Answer:** Cancel previous requests or ignore stale responses.



## 20. Retry failed API

**Answer:** Retry with exponential backoff for temporary failures.



## 21. Loading, empty and error state

**Answer:** Maintain separate loading, error and data states.



## 22. Where should API logic live?

**Answer:** Keep API logic in service files or custom hooks.



## 23. API response changes unexpectedly

**Answer:** TypeScript catches incompatible types during compilation.



## 24. Backend returns nullable values

**Answer:** Use union types like `string | null`.



## 25. Interface vs Type

**Answer:** Use interface for object contracts and type for unions or advanced types.



## 26. Generic API response

**Answer:** Create reusable types like `ApiResponse<T>`.



## 27. Generic table component

**Answer:** Use generics such as `<T>` for reusable data models.



## 28. Type React children

**Answer:** Use `React.ReactNode`.



## 29. Large form with slow validation

**Answer:** Validate only changed fields and minimize re-renders.



## 30. Controlled vs uncontrolled components

**Answer:** Controlled components are preferred for validation and dynamic forms.



## 31. Password confirmation validation

**Answer:** Compare both values before form submission or during input validation.



## 32. Dynamic form fields

**Answer:** Render inputs by mapping over a configuration array.



## 33. JWT expires

**Answer:** Refresh the token or redirect the user to login.



## 34. Where to store JWT?

**Answer:** Prefer HttpOnly cookies for better security.



## 35. Refresh token flow

**Answer:** Use the refresh token to obtain a new access token without logging in again.



## 36. Protect private routes

**Answer:** Check authentication before rendering protected pages.



## 37. List with 10,000 items

**Answer:** Use virtualization such as react-window.



## 38. Large images slow the page

**Answer:** Compress images and lazy-load them.



## 39. Bundle size is too large

**Answer:** Use code splitting, lazy loading and tree shaking.



## 40. When to use lazy loading?

**Answer:** Load heavy components only when needed.



## 41. Code splitting

**Answer:** Split JavaScript bundles into smaller chunks for faster loading.



## 42. Where should business logic live?

**Answer:** Keep business logic inside hooks or services instead of UI components.



## 43. When to create custom hooks?

**Answer:** When logic is reused across multiple components.



## 44. Enterprise folder structure

**Answer:** Organize code by feature rather than file type.



## 45. Separate UI and business logic

**Answer:** Keep components presentational and move logic into hooks/services.



## 46. One component crashes entire app

**Answer:** Wrap components with Error Boundaries.



## 47. Try-catch vs Error Boundary

**Answer:** Try-catch handles synchronous code while Error Boundaries catch React rendering errors.



## 48. API returns 500

**Answer:** Show an error message and allow retry.



## 49. Refresh breaks routing

**Answer:** Configure server-side routing fallback to `index.html`.



## 50. Protected routes

**Answer:** Redirect unauthenticated users to the login page.



## 51. Pass data between pages

**Answer:** Use route params, query params, state or global state.



## 52. Different React versions in MFEs

**Answer:** Version mismatch can cause runtime conflicts.



## 53. MFE communication

**Answer:** Use shared state, custom events or Module Federation APIs.



## 54. Shared dependencies

**Answer:** Sharing dependencies avoids duplicate bundles and version conflicts.



## 55. One MFE crashes

**Answer:** Isolate failures using Error Boundaries.



## 56. Application loads slowly

**Answer:** Optimize bundle size, caching and lazy loading.



## 57. Tree shaking

**Answer:** Removes unused code from the production bundle.



## 58. Development vs production build

**Answer:** Production builds are optimized and minified while development builds prioritize debugging.



## 59. Prevent XSS

**Answer:** Avoid `dangerouslySetInnerHTML` and sanitize user input.



## 60. Why not trust frontend validation?

**Answer:** Frontend validation can be bypassed, so backend validation is mandatory.



## 61. Which components should be unit tested?

**Answer:** Test reusable components and business logic.



## 62. Mock API in tests

**Answer:** Mock network requests using Jest or MSW.



## 63. Test custom hooks

**Answer:** Use React Testing Library's `renderHook`.



## 64. Production bug occurs

**Answer:** Reproduce the issue, inspect logs and debug step by step.



## 65. App is slow only in production

**Answer:** Profile performance, analyze network requests and inspect bundle size.



## 66. Component used by multiple teams

**Answer:** Design it to be configurable, reusable and well documented.



## 67. Make components reusable

**Answer:** Accept configurable props and keep business logic separate.



## 68. Accessibility requirements

**Answer:** Use semantic HTML, keyboard navigation and proper ARIA attributes.



## 69. Dark mode implementation

**Answer:** Toggle themes using Context or CSS variables.



## 70. Role-based UI

**Answer:** Render components conditionally based on the user's role and permissions.
