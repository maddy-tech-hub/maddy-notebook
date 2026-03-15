# ASP.NET Core Developer Interview Questions and Answers (4-5+ Years)

Author: Madhava Reddy Vemireddy

This document follows your exact section and question structure. Answers are concise and interview-focused, with examples only where they help clarify the concept.

---

# 1. C# Fundamentals

1. **What is C#?**  
C# is a modern, object-oriented, strongly typed programming language developed by Microsoft for building applications on the .NET platform.

2. **What is the .NET framework?**  
.NET is the Microsoft development platform that provides runtime, libraries, tools, and languages for building applications. Today this usually means modern `.NET`, while `.NET Framework` often refers to the older Windows-only runtime.

3. **What is the CLR (Common Language Runtime)?**  
CLR is the execution engine of .NET. It handles memory management, garbage collection, exception handling, JIT compilation, and security.

4. **What is the CTS (Common Type System)?**  
CTS defines how types are declared and used in .NET so that all .NET languages can interoperate consistently.

5. **What is the CLS (Common Language Specification)?**  
CLS is a subset of CTS that defines language features that all .NET languages should support for interoperability.

6. **What are value types in C#?**  
Value types store the actual value directly. Examples: `int`, `bool`, `double`, `struct`, `enum`.

7. **What are reference types in C#?**  
Reference types store a reference to an object. Examples: `class`, `string`, arrays, delegates.

8. **What is the difference between value types and reference types?**  
Value types usually live on the stack or inline within objects and are copied by value. Reference types usually live on the heap and variables store references.

9. **What is boxing and unboxing?**  
Boxing converts a value type to `object` or an interface. Unboxing converts it back to the original value type. It can add performance overhead.

10. **What is the difference between `var`, `dynamic`, and `object`?**  
`var` is compile-time type inference. `dynamic` skips compile-time type checking and resolves at runtime. `object` is the base type of all .NET types, but operations still require casting or boxing rules.

11. **What are nullable types in C#?**  
Nullable types allow value types to store `null`, for example `int?`. They are useful when a value is optional.

12. **What is the difference between `const` and `readonly`?**  
`const` is compile-time constant and must be assigned at declaration. `readonly` can be assigned at declaration or in constructor and is evaluated at runtime.

13. **What is string immutability?**  
Strings cannot be changed after creation. Any modification creates a new string object.

14. **What is `StringBuilder` and when should it be used?**  
`StringBuilder` is used when performing many string modifications in a loop or large concatenation scenarios because it reduces allocation overhead.

15. **What is the difference between `==` and `Equals()`?**  
`==` checks equality using operator behavior. `Equals()` checks logical equality as implemented by the type. For strings, both usually compare value content.

16. **What are control statements in C#?**  
They control execution flow. Examples: `if`, `else`, `switch`, `for`, `foreach`, `while`, `do-while`, `break`, `continue`, `return`.

17. **What is the difference between `for` and `foreach` loops?**  
`for` is index-based and gives full control. `foreach` is cleaner for iterating collections and is read-focused.

18. **What is method overloading?**  
Method overloading means multiple methods share the same name but differ in parameter list.

19. **What is recursion?**  
Recursion is when a method calls itself until a base condition is met.

20. **What are parameters in C# methods?**  
Parameters are inputs passed to methods. Common types include value, `ref`, `out`, and optional parameters.

21. **What is the difference between `ref` and `out` parameters?**  
`ref` requires the variable to be initialized before passing. `out` does not, but the method must assign it before returning.

22. **What is the `Main` method?**  
`Main` is the application entry point.

23. **What is garbage collection?**  
Garbage collection automatically frees memory for objects no longer referenced.

24. **What is the difference between stack and heap memory?**  
Stack is used for method frames and value-type locals with fast allocation/deallocation. Heap stores objects and is managed by the garbage collector.

---

# 2. OOP & Core C#

1. **What are the four pillars of OOP?**  
Encapsulation, inheritance, polymorphism, and abstraction.

2. **What is encapsulation?**  
Encapsulation means hiding internal state and exposing controlled access through methods or properties.

3. **What is inheritance?**  
Inheritance allows one class to derive members and behavior from another class.

4. **What is polymorphism?**  
Polymorphism allows the same method call to behave differently based on the object type.

5. **What is abstraction?**  
Abstraction means exposing only essential behavior and hiding implementation details.

6. **What is the difference between abstract class and interface?**  
An abstract class can contain implementation and state. An interface defines a contract and supports multiple implementation inheritance.

7. **What is method overriding?**  
Overriding replaces base class virtual method behavior in a derived class.

8. **What is method overloading?**  
Overloading means same method name, different parameters, in the same class.

9. **What are constructors?**  
Constructors initialize objects when they are created.

10. **What is a parameterized constructor?**  
It is a constructor that accepts parameters to initialize object state.

11. **What is a static constructor?**  
A static constructor initializes static members and runs once per type.

12. **What is a destructor?**  
A destructor is a finalizer used for cleanup before garbage collection, though it is rarely needed in modern C#.

13. **What are access modifiers in C#?**  
They define member visibility. Examples: `public`, `private`, `protected`, `internal`, `protected internal`, `private protected`.

14. **What is the difference between `public`, `private`, `protected`, and `internal`?**  
`public`: accessible anywhere.  
`private`: accessible only inside the class.  
`protected`: accessible in the class and derived classes.  
`internal`: accessible within the same assembly.

15. **What is a sealed class?**  
A sealed class cannot be inherited.

16. **What is a partial class?**  
A partial class can be split across multiple files.

17. **What are extension methods?**  
Extension methods let you add methods to existing types without modifying the original type.

18. **What are structs in C#?**  
Structs are value types used for small, lightweight data objects.

19. **What are enums?**  
Enums are named constants backed by an integral type.

20. **What is the difference between struct and class?**  
Struct is a value type and copied by value. Class is a reference type and copied by reference.

21. **What is object initialization?**  
It is a syntax to initialize properties at object creation time without explicitly calling multiple setters.

```csharp
var user = new User { Name = "Madhava", Age = 30 };
```

22. **What is method hiding?**  
Method hiding uses `new` in a derived class to hide a base class method instead of overriding it.

23. **What is dependency inversion principle?**  
High-level modules should depend on abstractions, not concrete implementations.

24. **What is the SOLID principle?**  
SOLID is a set of five object-oriented design principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.

---

# 3. Collections & LINQ

1. **What are collections in C#?**  
Collections are data structures used to store and manage groups of objects.

2. **What is the difference between Array and List?**  
Array has fixed size. `List<T>` is dynamic and provides more utility methods.

3. **What is `IEnumerable`?**  
`IEnumerable` represents a sequence that can be iterated.

4. **What is `ICollection`?**  
`ICollection` extends enumeration with size and modification features like `Add` and `Remove`.

5. **What is `IList`?**  
`IList` supports ordered collections and index-based access.

6. **What is Dictionary?**  
`Dictionary<TKey,TValue>` stores key-value pairs with fast lookup by key.

7. **What is HashSet?**  
`HashSet<T>` stores unique values and is optimized for membership checks.

8. **What is Queue?**  
Queue is FIFO: first in, first out.

9. **What is Stack?**  
Stack is LIFO: last in, first out.

10. **What is LinkedList?**  
A linked list stores nodes connected by references, making insert/delete efficient in the middle if you already have the node.

11. **What is the difference between `IEnumerable` and `IQueryable`?**  
`IEnumerable` works in memory. `IQueryable` builds an expression tree that providers like EF Core translate to SQL.

12. **What is LINQ?**  
LINQ is Language Integrated Query for querying collections, databases, XML, and more using C# syntax.

13. **What are the types of LINQ syntax?**  
Query syntax and method syntax.

14. **What is deferred execution in LINQ?**  
The query is not executed until it is enumerated.

15. **What is immediate execution in LINQ?**  
The query runs immediately when methods like `ToList()`, `Count()`, or `First()` are called.

16. **What are common LINQ operators?**  
`Where`, `Select`, `OrderBy`, `ThenBy`, `GroupBy`, `Any`, `All`, `FirstOrDefault`, `Skip`, `Take`.

17. **What is `Select` vs `SelectMany`?**  
`Select` maps each item to one result. `SelectMany` flattens nested collections into a single sequence.

18. **What is `GroupBy` in LINQ?**  
It groups elements by a key.

19. **What is `First` vs `FirstOrDefault`?**  
`First` throws if no item exists. `FirstOrDefault` returns default value instead.

20. **What is `Any` vs `All` in LINQ?**  
`Any` checks if at least one item matches. `All` checks if every item matches.

---

# 4. Delegates, Events & Functional Features

1. **What is a delegate in C#?**  
A delegate is a type-safe reference to a method.

2. **What are multicast delegates?**  
They can point to multiple methods and invoke them in sequence.

3. **What is the difference between delegate and event?**  
A delegate is the function reference type. An event is a restricted delegate-based publish-subscribe member that prevents outside code from invoking it directly.

4. **What is an anonymous method?**  
An inline method declared without a name, usually using the `delegate` keyword.

5. **What are lambda expressions?**  
Short inline functions written like `x => x * 2`.

6. **What are expression-bodied members?**  
Short method/property definitions using `=>` syntax.

```csharp
public string FullName => FirstName + " " + LastName;
```

7. **What are Func delegates?**  
Built-in generic delegates that return a value.

8. **What are Action delegates?**  
Built-in generic delegates that return no value.

9. **What are Predicate delegates?**  
Delegates that take one parameter and return `bool`.

10. **What are events in C#?**  
Events are notifications exposed by a publisher and subscribed to by listeners.

11. **What is the publish-subscribe pattern?**  
A pattern where publishers emit notifications and subscribers react to them without tight coupling.

12. **How do events work internally?**  
Events are usually backed by delegates. `+=` subscribes a handler and `-=` unsubscribes it.

13. **What is the difference between delegates and interfaces?**  
Delegates are for callback behavior. Interfaces define broader contracts with one or more members.

14. **What are expression trees?**  
Expression trees represent code as data structures and are heavily used by LINQ providers like EF Core.

---

# 5. Async, Multithreading & Performance

1. **What is asynchronous programming?**  
It allows non-blocking operations, especially for I/O work like database calls and HTTP calls.

2. **What is `async` and `await`?**  
They simplify asynchronous code using tasks without manual continuation handling.

3. **What is `Task` in C#?**  
`Task` represents an asynchronous operation with no return value.

4. **What is `Task<T>`?**  
It represents an asynchronous operation that returns a value of type `T`.

5. **What is the difference between async and synchronous programming?**  
Synchronous code blocks until work finishes. Async code can continue while waiting for I/O.

6. **What is multithreading?**  
Running multiple threads within a process for concurrent execution.

7. **What is the `Thread` class?**  
It provides low-level thread creation and control, but `Task` is preferred for most application code.

8. **What is thread pooling?**  
.NET reuses worker threads from a shared pool instead of constantly creating new threads.

9. **What is `Task.Run`?**  
It queues CPU-bound work to the thread pool.

10. **What is parallel programming?**  
Running operations simultaneously to improve throughput for CPU-bound tasks.

11. **What is `Task.WhenAll`?**  
It awaits completion of multiple tasks together and is useful for parallel async I/O.

12. **What is `Task.WhenAny`?**  
It completes when the first task finishes.

13. **What are race conditions?**  
They happen when multiple threads access shared data without proper synchronization, producing unpredictable results.

14. **What are deadlocks?**  
Deadlocks occur when two or more threads wait on each other indefinitely.

15. **What is synchronization?**  
Synchronization controls access to shared resources to ensure thread safety.

16. **What is the difference between `lock` and `Monitor`?**  
`lock` is a language shortcut over `Monitor.Enter`/`Exit`. `Monitor` provides more advanced control like timeout-based locking.

17. **What is `SemaphoreSlim`?**  
It controls concurrency count and works well in async code.

---

# 6. ASP.NET Core Fundamentals

1. **What is ASP.NET Core?**  
ASP.NET Core is a cross-platform framework for building web apps, APIs, gRPC services, and more.

2. **What is the difference between ASP.NET and ASP.NET Core?**  
ASP.NET was tied to the older .NET Framework and mostly Windows. ASP.NET Core is cross-platform, faster, and redesigned for modern cloud-native development.

3. **What is Kestrel?**  
Kestrel is the cross-platform web server used by ASP.NET Core.

4. **What is the request pipeline?**  
It is the sequence of middleware components that process an HTTP request and generate a response.

5. **What is middleware in ASP.NET Core?**  
Middleware is a component in the request pipeline that can inspect, modify, or short-circuit requests and responses.

6. **What is the minimal hosting model?**  
A simplified startup model introduced in .NET 6 where configuration and pipeline setup are centralized in `Program.cs`.

7. **What is `Program.cs` in ASP.NET Core?**  
It is the application startup file where services are registered and middleware pipeline is configured.

8. **What is `appsettings.json`?**  
It is a configuration file used for application settings like connection strings and feature flags.

9. **What are environment variables in ASP.NET Core?**  
They provide environment-specific configuration, often used in deployment and secrets management.

10. **What is configuration in ASP.NET Core?**  
Configuration is the unified system for reading settings from JSON, environment variables, command line, secrets, and more.

11. **What is the Options pattern?**  
It binds configuration sections to strongly typed classes using `IOptions<T>`.

---

# 7. Web API Development

1. **What is a REST API?**  
A REST API exposes resources over HTTP using standard methods and stateless communication.

2. **What are REST principles?**  
Statelessness, resource-based URIs, standard methods, cacheability, layered system, and uniform interface.

3. **What are HTTP methods?**  
Common methods are `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.

4. **What are HTTP status codes?**  
They indicate request result. Common examples: `200 OK`, `201 Created`, `204 No Content`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `500 Internal Server Error`.

5. **What is a controller in ASP.NET Core?**  
A controller handles incoming HTTP requests and returns responses.

6. **What is `ControllerBase`?**  
`ControllerBase` is the base class for API controllers without MVC view support.

7. **What is `ApiController` attribute?**  
It enables API-specific behavior like automatic model validation responses and improved parameter binding.

8. **What is routing?**  
Routing maps incoming URLs to controller actions or endpoints.

9. **What is attribute routing?**  
Routes are defined directly using attributes on controllers/actions.

10. **What is conventional routing?**  
Routes are defined centrally using patterns.

11. **What is model binding?**  
Model binding maps request data to action method parameters or model objects.

12. **What is model validation?**  
It checks whether incoming data satisfies validation rules before processing.

13. **What are data annotations?**  
Attributes like `[Required]`, `[Range]`, and `[StringLength]` used for validation and metadata.

14. **What are DTOs?**  
Data Transfer Objects are classes used to shape request and response data.

15. **What is API versioning?**  
Versioning allows multiple API versions to coexist without breaking old clients.

---

# 8. Dependency Injection & Middleware

1. **What is dependency injection?**  
It is a design pattern where dependencies are provided from outside instead of created inside the class.

2. **What are DI lifetimes?**  
The main lifetimes are Transient, Scoped, and Singleton.

3. **What is Transient lifetime?**  
A new instance is created every time the service is requested.

4. **What is Scoped lifetime?**  
One instance is created per HTTP request.

5. **What is Singleton lifetime?**  
A single instance is used for the entire application lifetime.

6. **What is constructor injection?**  
Dependencies are passed into a class through its constructor.

7. **What is middleware?**  
Middleware processes HTTP requests and responses in sequence.

8. **How middleware works internally?**  
Each middleware receives `HttpContext` and a delegate to call the next middleware. It can run logic before and after the next component.

9. **What is middleware ordering?**  
Middleware order determines behavior. For example, authentication must run before authorization.

10. **What is custom middleware?**  
Custom middleware is middleware written by developers for cross-cutting concerns such as logging, exception handling, or correlation IDs.

---

# 9. Entity Framework Core

1. **What is Entity Framework Core?**  
EF Core is a lightweight, cross-platform ORM for .NET.

2. **What is ORM?**  
ORM maps database tables to C# objects, reducing manual SQL mapping.

3. **What is `DbContext`?**  
It manages database connection, tracking, querying, and saving entities.

4. **What is `DbSet`?**  
`DbSet<T>` represents a table or entity collection in the context.

5. **What is Code First approach?**  
You create C# models first and generate database schema via migrations.

6. **What is Database First approach?**  
You start from an existing database and scaffold models/context from it.

7. **What are migrations?**  
Migrations track schema changes over time and apply them to the database.

8. **What is tracking in EF Core?**  
Tracking means EF Core monitors entity changes and can persist them on `SaveChanges()`.

9. **What is no tracking query?**  
A read-only query using `AsNoTracking()` to avoid change tracking overhead.

10. **What is lazy loading?**  
Related entities are loaded automatically when accessed. It can be convenient but can also hide extra queries.

11. **What is eager loading?**  
Related data is loaded up front using `Include()`.

12. **What is explicit loading?**  
Related data is loaded manually later through the context.

13. **What is the N+1 problem?**  
It happens when one query loads parents and many extra queries load children, causing performance issues.

14. **What is `IQueryable` vs `IEnumerable` in EF?**  
`IQueryable` allows SQL translation and server-side execution. `IEnumerable` executes in memory after materialization.

15. **What is optimistic concurrency?**  
It detects conflicts when two users update the same data, often using a row version token.

---

# 10. Security (Auth, JWT, CORS)

1. **What is authentication?**  
Authentication verifies who the user is.

2. **What is authorization?**  
Authorization determines what the user is allowed to do.

3. **What is JWT authentication?**  
JWT authentication uses signed tokens to represent authenticated user identity and claims.

4. **How does JWT work?**  
User logs in, server issues a signed token, client sends it with requests, and server validates signature, expiry, issuer, and audience.

5. **What are claims?**  
Claims are pieces of identity data stored in the token, like user id, email, or role.

6. **What are roles?**  
Roles are a category of claims used for permission grouping like `Admin` or `User`.

7. **What is policy-based authorization?**  
Authorization based on custom rules such as claims, roles, or business conditions.

8. **What is CORS?**  
CORS is a browser security mechanism that controls which origins can access an API.

9. **Why is CORS needed?**  
It allows secure cross-origin communication between frontend and backend hosted on different origins.

10. **What are CSRF attacks?**  
CSRF tricks an authenticated browser into making unintended requests. It is especially relevant with cookie-based auth.

11. **What are XSS attacks?**  
XSS injects malicious scripts into pages. Defense includes output encoding, input sanitization, and avoiding unsafe HTML rendering.

---

# 11. API Design & Best Practices

1. **What are API design best practices?**  
Use resource-based URIs, correct HTTP methods, DTOs, versioning, validation, proper status codes, and consistent error responses.

2. **What is idempotency in APIs?**  
An idempotent operation gives the same result even if repeated multiple times.

3. **What are RESTful naming conventions?**  
Use nouns, plural resource names, consistent hierarchy, and avoid verbs in route paths where possible.

4. **What are DTOs and why are they used?**  
DTOs define explicit API contracts, improve security, and prevent exposing internal schema.

5. **Why should EF entities not be returned directly?**  
It tightly couples API contracts to database schema, risks over-posting, and can expose unwanted fields/navigation properties.

6. **What are API versioning strategies?**  
URL versioning, header versioning, and query string versioning.

7. **What are proper HTTP response codes?**  
Use `200`, `201`, `204`, `400`, `401`, `403`, `404`, `409`, and `500` appropriately based on operation result.

8. **What is pagination in APIs?**  
Breaking large result sets into pages using parameters like `page` and `pageSize`.

9. **What is filtering in APIs?**  
Allowing clients to narrow results using query parameters like `status=active`.

10. **What is API documentation?**  
Documentation describes endpoints, request/response models, auth, and examples. Swagger/OpenAPI is common.

---

# 12. Performance Optimization

1. **How do you improve Web API performance?**  
Use async I/O, pagination, efficient queries, caching, response compression, and avoid unnecessary data loading.

2. **Why should APIs use async programming?**  
It improves scalability by freeing threads while waiting for I/O operations.

3. **What is caching?**  
Caching stores frequently accessed data to avoid repeated expensive computation or database calls.

4. **What is in-memory caching?**  
Caching inside the application process using memory.

5. **What is distributed caching?**  
Caching in a shared external store like Redis for consistency across multiple app instances.

6. **What is Redis caching?**  
Redis is a fast in-memory key-value store commonly used for distributed caching.

7. **What is response compression?**  
Compressing responses with algorithms like Brotli or Gzip to reduce network payload.

8. **What is database indexing?**  
Indexes improve lookup performance on frequently filtered, sorted, or joined columns.

9. **What is connection pooling?**  
Reusing database connections from a pool rather than opening a new one for each request.

---

# 13. Logging, Monitoring & Health Checks

1. **What is `ILogger`?**  
`ILogger` is the built-in logging abstraction in ASP.NET Core.

2. **What are logging levels?**  
`Trace`, `Debug`, `Information`, `Warning`, `Error`, `Critical`.

3. **What is structured logging?**  
Logging data in named fields so logs are easier to search and analyze.

4. **What are health checks?**  
Endpoints that report application/component health, often used by load balancers and orchestrators.

5. **What is application monitoring?**  
Tracking logs, metrics, traces, errors, and uptime to understand application health and behavior.

6. **What is distributed tracing?**  
Tracing a request across multiple services with spans and correlation data.

7. **What is correlation ID?**  
A unique id attached to a request so logs across the system can be tied together.

---

# 14. Testing

1. **What is unit testing?**  
Testing isolated logic without real external dependencies.

2. **What is integration testing?**  
Testing how components work together, often with database or HTTP pipeline involved.

3. **What is mocking?**  
Replacing real dependencies with fake/test doubles to isolate the unit under test.

4. **What is xUnit?**  
A popular .NET testing framework.

5. **What is NUnit?**  
Another widely used .NET testing framework with rich assertion/test features.

6. **What is MSTest?**  
Microsoft’s built-in testing framework for .NET.

7. **What is `WebApplicationFactory`?**  
A test utility for bootstrapping ASP.NET Core apps in memory for integration testing.

---

# 15. Architecture & Design Patterns

1. **What is Clean Architecture?**  
An architecture where domain logic stays independent from frameworks, UI, and infrastructure.

2. **What is the Repository Pattern?**  
It abstracts data access behind repository interfaces.

3. **What is Unit of Work Pattern?**  
It groups multiple operations into a single transactional unit.

4. **What is CQRS?**  
Command Query Responsibility Segregation separates write operations from read operations.

5. **What is Mediator pattern?**  
A pattern where components communicate through a mediator rather than directly, reducing coupling. In .NET, MediatR is a common implementation.

6. **What is the SOLID principle?**  
SOLID is a set of principles for building maintainable, extensible, loosely coupled software.

---

# 16. System Design for APIs

1. **How do you design scalable APIs?**  
Use stateless services, caching, async I/O, pagination, load balancing, proper database design, and observability.

2. **How do you handle high traffic APIs?**  
Use horizontal scaling, rate limiting, caching, optimized queries, message queues, and load balancing.

3. **What is load balancing?**  
Distributing incoming requests across multiple instances to improve availability and scalability.

4. **What is API gateway?**  
A single entry point for routing, auth, throttling, and cross-cutting concerns in distributed systems.

5. **What are microservices?**  
Small independently deployable services focused on specific business capabilities.

---

# 17. Advanced Production Topics

1. **What are background services?**  
Services that run in the background for scheduled jobs, queue processing, or long-running tasks.

2. **What is `IHostedService`?**  
An interface for starting and stopping background services with the application host.

3. **What is `BackgroundService`?**  
A base class that simplifies implementing long-running background tasks.

4. **What are health check endpoints?**  
Endpoints like `/health` used by infrastructure to detect readiness and liveness.

5. **What is rate limiting?**  
Restricting request volume per client or time window to protect system stability.

6. **What is circuit breaker pattern?**  
A resilience pattern that temporarily stops calling a failing dependency to prevent cascading failures.

7. **What is containerization?**  
Packaging an application with its dependencies into isolated units for consistent deployment.

8. **What is Docker?**  
Docker is a platform for building, packaging, and running containers.

9. **What is CI/CD?**  
Continuous Integration and Continuous Deployment/Delivery automate build, test, and release pipelines.

---

# Quick Interview Focus

If you are preparing for a 4-5+ year ASP.NET Core role, make sure you can clearly explain:

1. Difference between `IEnumerable` and `IQueryable`
2. DI lifetimes with real examples
3. Middleware order in ASP.NET Core
4. EF Core loading strategies and N+1 problem
5. JWT flow and policy-based authorization
6. DTOs, versioning, pagination, and HTTP status codes
7. Caching, indexing, and async performance
8. Clean Architecture, CQRS, and Mediator
9. Background services, rate limiting, health checks, and CI/CD
