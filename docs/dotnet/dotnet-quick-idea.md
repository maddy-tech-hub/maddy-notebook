# .NET Senior Developer Interview Questions (5 Years Experience)

Author: Madhava Reddy Vemireddy  

This document contains concise **one-line answers** for quick interview revision.

---

# 1. C# Advanced Concepts

## C# Fundamentals

1. **What is C#?**  
C# is a modern, object-oriented, strongly typed programming language used to build applications on the .NET platform.

2. **What are value types and reference types?**  
Value types store data directly in memory, while reference types store references to memory locations.

3. **What is boxing and unboxing?**  
Boxing converts a value type to an object, and unboxing converts it back to a value type.

4. **What is Garbage Collection (GC)?**  
Garbage Collection automatically frees unused memory by removing objects that are no longer referenced.

5. **What are Generics?**  
Generics allow defining type-safe classes and methods without specifying the data type in advance.

6. **What are Delegates?**  
Delegates are type-safe function pointers used to reference methods.

7. **What is the difference between Action and Func?**  
Action represents a method without a return value, while Func represents a method that returns a value.

8. **What are Events in C#?**  
Events are used to provide notifications when specific actions occur in an application.

9. **What is LINQ?**  
LINQ is a query syntax used to retrieve and manipulate data from collections and databases.

10. **What is Deferred Execution?**  
Deferred execution delays query execution until the result is actually accessed.

11. **What is IEnumerable?**  
IEnumerable is used for in-memory collection iteration.

12. **What is IQueryable?**  
IQueryable is used to query data from remote sources like databases.

---

## OOP & SOLID Principles

13. **What is OOP?**  
OOP is a programming paradigm based on objects that contain data and behavior.

14. **What is Encapsulation?**  
Encapsulation hides internal implementation details and exposes only necessary functionality.

15. **What is Inheritance?**  
Inheritance allows one class to reuse properties and methods of another class.

16. **What is Polymorphism?**  
Polymorphism allows methods to behave differently based on object types.

17. **What is Abstraction?**  
Abstraction hides complexity and shows only essential features.

18. **What is the Single Responsibility Principle (SRP)?**  
A class should have only one reason to change.

19. **What is Open Closed Principle (OCP)?**  
Software entities should be open for extension but closed for modification.

20. **What is Liskov Substitution Principle (LSP)?**  
Derived classes should be replaceable with base classes without breaking functionality.

21. **What is Interface Segregation Principle (ISP)?**  
Clients should not be forced to depend on unused interfaces.

22. **What is Dependency Inversion Principle (DIP)?**  
High-level modules should depend on abstractions, not concrete implementations.

23. **What is Dependency Injection (DI)?**  
Dependency Injection provides required dependencies to a class instead of creating them internally.

24. **What is Inversion of Control (IoC)?**  
IoC transfers object creation responsibility from the class to an external container.

25. **What is Loose Coupling?**  
Loose coupling means components depend on abstractions rather than concrete implementations.

---

## Async Programming

26. **What is async and await?**  
Async and await enable non-blocking execution of asynchronous code.

27. **What is a Task in C#?**  
Task represents an asynchronous operation.

28. **What is multithreading?**  
Multithreading allows multiple threads to run simultaneously.

29. **What is a deadlock?**  
Deadlock occurs when two or more threads wait indefinitely for each other.

30. **Difference between Parallel and Async?**  
Parallel executes tasks simultaneously using multiple threads, while async handles non-blocking operations.

---

# 2. ASP.NET Core

31. **What is ASP.NET Core?**  
ASP.NET Core is a cross-platform framework for building modern web applications and APIs.

32. **What is Middleware?**  
Middleware is software that handles HTTP requests and responses in a pipeline.

33. **What is the Middleware Pipeline?**  
Middleware pipeline is the sequence of components that process HTTP requests.

34. **What is Dependency Injection in ASP.NET Core?**  
ASP.NET Core provides built-in DI to manage object dependencies.

35. **What is Program.cs?**  
Program.cs is the entry point where application configuration starts.

36. **What is Custom Middleware?**  
Custom middleware is user-defined logic added to the request pipeline.

37. **What is Exception Handling Middleware?**  
It handles application errors globally.

---

# 3. ASP.NET Web API

38. **What is Web API?**  
Web API is used to build HTTP services that communicate with clients.

39. **What is REST API?**  
REST API is an architectural style using HTTP methods for resource operations.

40. **What are HTTP Methods?**  
HTTP methods define operations like GET, POST, PUT, DELETE, and PATCH.

41. **What is Routing?**  
Routing maps incoming requests to controller actions.

42. **What is Attribute Routing?**  
Attribute routing defines routes using attributes on controller methods.

43. **What is Model Binding?**  
Model binding maps request data to action parameters.

44. **What is Model Validation?**  
Model validation ensures incoming data meets defined rules.

45. **What are Filters?**  
Filters execute logic before or after controller actions.

46. **What is API Versioning?**  
API versioning manages multiple API versions without breaking clients.

47. **What is Pagination?**  
Pagination divides large datasets into smaller chunks.

---

# 4. Entity Framework Core

48. **What is Entity Framework Core?**  
EF Core is an ORM used to interact with databases using .NET objects.

49. **What is DbContext?**  
DbContext manages database connections and operations.

50. **What is DbSet?**  
DbSet represents a table in the database.

51. **What is Code First?**  
Code First creates database schema from model classes.

52. **What is Migration?**  
Migration updates database schema changes.

53. **What is Lazy Loading?**  
Lazy loading loads related data only when accessed.

54. **What is Eager Loading?**  
Eager loading loads related data immediately.

55. **What is No Tracking?**  
No tracking improves performance by disabling change tracking.

---

# 5. Authentication & Security

56. **What is Authentication?**  
Authentication verifies user identity.

57. **What is Authorization?**  
Authorization determines user permissions.

58. **What is JWT?**  
JWT is a token-based authentication mechanism.

59. **What is CORS?**  
CORS controls cross-origin HTTP requests.

60. **What is HTTPS?**  
HTTPS secures communication using encryption.

61. **What is SQL Injection?**  
SQL Injection is a security attack that manipulates database queries.

62. **What is XSS?**  
XSS is an attack that injects malicious scripts into web pages.

---

# 6. Database Concepts

63. **What is Index?**  
Index improves database query performance.

64. **What is Clustered Index?**  
Clustered index sorts and stores table data physically.

65. **What is Non-Clustered Index?**  
Non-clustered index stores pointers to table data.

66. **What is Normalization?**  
Normalization simply means organizing data so it’s stored efficiently without duplicates.

67. **What is Denormalization?**  
Denormalization is combining or adding redundant data to a database to make queries faster.

68. **What is Transaction?**  
Transaction is a sequence of operations executed as a single unit.

69. **What is ACID?**  
ACID ensures reliable database transactions.

---

# 7. Performance Optimization

70. **What is Caching?**  
Caching stores frequently accessed data temporarily.

71. **What is Redis?**  
Redis is an in-memory distributed cache.

72. **What is Response Caching?**  
Response caching stores HTTP responses.

73. **How to improve API performance?**  
Optimize queries, caching, and reduce unnecessary processing.

---

# 8. Logging & Monitoring

74. **What is Logging?**  
Logging records application events for debugging.

75. **What is Structured Logging?**  
Structured logging stores logs in searchable formats.

76. **What is Centralized Logging?**  
Centralized logging stores logs in one location.

---

# 9. Microservices

77. **What is Microservices Architecture?**  
Microservices divide applications into independent services.

78. **What is API Gateway?**  
API Gateway routes client requests to services.

79. **What is Message Queue?**  
Message queue enables asynchronous communication.

---

# 10. Docker & Deployment

80. **What is Docker?**  
Docker is a containerization platform.

81. **What is Docker Image?**  
Docker image is a template for containers.

82. **What is Docker Container?**  
Container is a running instance of an image.

---

# 11. Unit Testing

83. **What is Unit Testing?**  
Unit testing verifies individual components.

84. **What is Mocking?**  
Mocking simulates dependencies during testing.

85. **What is Test Coverage?**  
Test coverage measures tested code percentage.

---

# 12. Architecture & Design

86. **What is Clean Architecture?**  
Clean architecture separates concerns into layers.

87. **What is Repository Pattern?**  
Repository pattern abstracts data access logic.

88. **What is Unit of Work?**  
Unit of Work manages transactions across repositories.

89. **What is CQRS?**  
CQRS separates read and write operations.

90. **What is Scalability?**  
Scalability is the ability to handle increased load.

---
---

# Additional Important Senior-Level Questions

91. **What is Service Lifetime in Dependency Injection?**  
Service lifetime defines how long service instances exist like Scoped, Singleton, and Transient.

92. **Difference between Singleton, Scoped, and Transient?**  
Singleton lives for app lifetime, Scoped per request, Transient created every time.

93. **What is Content Negotiation?**  
Content negotiation determines response format like JSON or XML.

94. **What is Explicit Loading in EF Core?**  
Explicit loading loads related data manually when needed.

95. **What is AsNoTracking()?**  
AsNoTracking improves performance by disabling entity tracking.

96. **What is Query Execution Plan?**  
Execution plan shows how database executes a query.

97. **What is Index Seek vs Index Scan?**  
Index Seek retrieves specific records, Index Scan reads entire index.

98. **What is Connection Pooling?**  
Connection pooling reuses database connections.

99. **What is Response Compression?**  
Response compression reduces response size.

100. **What is Thread Pool?**  
Thread pool manages reusable worker threads.

101. **What is Memory Leak?**  
Memory leak occurs when memory is not released.

102. **What is Rate Limiting?**  
Rate limiting restricts number of API requests.

103. **What is Idempotent API?**  
Idempotent API produces same result for repeated requests.

104. **What is Health Check in ASP.NET Core?**  
Health check monitors application health status.

105. **What is Correlation ID?**  
Correlation ID tracks request flow across services.

106. **What is Split Query in EF Core?**  
Split query loads related data using multiple queries.

107. **What is Deadlock in Database?**  
Deadlock occurs when transactions wait indefinitely.

108. **How to improve API performance?**  
Use caching, indexing, and async processing.

109. **How to debug production issues?**  
Check logs, monitoring tools, and stack traces.

110. **How to handle high traffic APIs?**  
Use caching, load balancing, and scaling.
