# ASP.NET Core Developer Interview Questions and Answers (4-5+ Years)

Author: Madhava Reddy Vemireddy

This version is written for interview preparation, not just quick lookup.  
Each topic has:

- a short direct answer
- a small explanation for understanding
- examples where they help

---

# 1. C# Fundamentals

1. **What is C#?**  
**Answer:** C# is a modern, strongly typed, object-oriented programming language from Microsoft.  
**Explanation:** It is used to build console apps, web apps, APIs, desktop apps, cloud services, and more on the .NET platform.

2. **What is the .NET framework?**  
**Answer:** .NET is the development platform that provides runtime, libraries, and tooling for building applications.  
**Explanation:** In interviews, clarify the difference:
- `.NET Framework`: older, Windows-only
- `.NET` / `.NET Core`: modern, cross-platform

3. **What is the CLR (Common Language Runtime)?**  
**Answer:** CLR is the execution engine of .NET.  
**Explanation:** It handles memory management, garbage collection, exception handling, security, and JIT compilation.

4. **What is the CTS (Common Type System)?**  
**Answer:** CTS defines how data types are declared and used in .NET.  
**Explanation:** It helps different .NET languages understand the same type system.

5. **What is the CLS (Common Language Specification)?**  
**Answer:** CLS is a set of rules that .NET languages follow for interoperability.  
**Explanation:** If a library follows CLS rules, it is easier to consume from other .NET languages.

6. **What are value types in C#?**  
**Answer:** Types that store their data directly.  
**Examples:** `int`, `bool`, `double`, `char`, `struct`, `enum`

7. **What are reference types in C#?**  
**Answer:** Types that store a reference to the actual object.  
**Examples:** `class`, `string`, array, delegate, interface

8. **What is the difference between value types and reference types?**  
**Answer:** Value types copy actual data; reference types copy references.  
**Explanation:** Updating one value type copy does not affect another. But multiple reference variables can point to the same object.

9. **What is boxing and unboxing?**  
**Answer:** Boxing converts a value type into `object`. Unboxing converts it back.  
**Explanation:** This adds allocation/casting overhead and can hurt performance in tight loops.

```csharp
int x = 10;
object obj = x;      // boxing
int y = (int)obj;    // unboxing
```

10. **What is the difference between `var`, `dynamic`, and `object`?**  
**Answer:**  
- `var`: compile-time inferred type  
- `dynamic`: runtime type resolution  
- `object`: base type of all .NET types  
**Explanation:** `var` is still strongly typed. `dynamic` skips compile-time checking.

11. **What are nullable types in C#?**  
**Answer:** Nullable value types allow value types to hold `null`.  
**Example:** `int? age = null;`

12. **What is the difference between `const` and `readonly`?**  
**Answer:**  
- `const`: compile-time constant  
- `readonly`: assigned at runtime, usually in constructor  
**Explanation:** Use `const` only for values that never change in any environment.

13. **What is string immutability?**  
**Answer:** Strings cannot be changed after creation.  
**Explanation:** Operations like `Replace` or concatenation return a new string.

14. **What is `StringBuilder` and when should it be used?**  
**Answer:** `StringBuilder` is used for repeated string modifications.  
**Explanation:** It is better than repeated `+` concatenation in loops because it reduces allocations.

15. **What is the difference between `==` and `Equals()`?**  
**Answer:** `==` uses operator equality. `Equals()` uses logical equality implementation.  
**Explanation:** For strings, both usually compare value. For custom types, behavior may differ unless overridden.

16. **What are control statements in C#?**  
**Answer:** Statements that control program flow.  
**Examples:** `if`, `else`, `switch`, `for`, `foreach`, `while`, `break`, `continue`

17. **What is the difference between `for` and `foreach` loops?**  
**Answer:**  
- `for`: index-based, more control  
- `foreach`: simpler, used for iterating collections  
**Explanation:** Use `foreach` when you do not need indexes.

18. **What is method overloading?**  
**Answer:** Defining multiple methods with the same name but different parameters.

19. **What is recursion?**  
**Answer:** A method calling itself until a base condition is reached.  
**Example:** factorial, tree traversal

20. **What are parameters in C# methods?**  
**Answer:** Parameters are inputs passed to methods.  
**Examples:** value parameters, optional parameters, `ref`, `out`, `params`

21. **What is the difference between `ref` and `out` parameters?**  
**Answer:** `ref` requires initialization before passing; `out` does not.  
**Explanation:** `out` is commonly used when a method needs to return multiple values.

22. **What is the `Main` method?**  
**Answer:** It is the entry point of a C# application.

23. **What is garbage collection?**  
**Answer:** Automatic memory cleanup by CLR for unused objects.  
**Explanation:** It helps reduce manual memory management bugs.

24. **What is the difference between stack and heap memory?**  
**Answer:** Stack stores method call data and small value-type locals. Heap stores objects and reference-type data.  
**Explanation:** Stack is faster but limited. Heap is larger and managed by the GC.

---

# 2. OOP & Core C#

1. **What are the four pillars of OOP?**  
**Answer:** Encapsulation, inheritance, polymorphism, and abstraction.

2. **What is encapsulation?**  
**Answer:** Hiding internal data and exposing only controlled access.  
**Explanation:** Usually done with private fields and public properties/methods.

3. **What is inheritance?**  
**Answer:** A derived class can reuse and extend members of a base class.

4. **What is polymorphism?**  
**Answer:** Same method name/interface can behave differently depending on the object type.

5. **What is abstraction?**  
**Answer:** Showing essential behavior and hiding implementation details.

6. **What is the difference between abstract class and interface?**  
**Answer:**  
- Abstract class can contain implementation and state  
- Interface defines a contract  
**Explanation:** Use interface for capabilities/contracts, abstract class for shared base behavior.

7. **What is method overriding?**  
**Answer:** Replacing a base class virtual method in a derived class using `override`.

8. **What is method overloading?**  
**Answer:** Same method name with different signatures.

9. **What are constructors?**  
**Answer:** Special methods used to initialize objects.

10. **What is a parameterized constructor?**  
**Answer:** A constructor that accepts parameters for initialization.

11. **What is a static constructor?**  
**Answer:** It initializes static members and runs once per type.

12. **What is a destructor?**  
**Answer:** A finalizer called before garbage collection, rarely used in modern apps.  
**Explanation:** In most real applications, `IDisposable` is preferred over destructors.

13. **What are access modifiers in C#?**  
**Answer:** Keywords that control visibility of types and members.

14. **What is the difference between `public`, `private`, `protected`, and `internal`?**  
**Answer:**  
- `public`: everywhere  
- `private`: same class only  
- `protected`: class + derived classes  
- `internal`: same assembly only

15. **What is a sealed class?**  
**Answer:** A class that cannot be inherited.

16. **What is a partial class?**  
**Answer:** A class split across multiple files.

17. **What are extension methods?**  
**Answer:** Methods that add behavior to existing types without changing the original type.

```csharp
public static class StringExtensions
{
    public static string AddPrefix(this string value)
    {
        return "Mr. " + value;
    }
}
```

18. **What are structs in C#?**  
**Answer:** Lightweight value types used for small data containers.

19. **What are enums?**  
**Answer:** Named constants representing a fixed set of values.

20. **What is the difference between struct and class?**  
**Answer:** Struct is a value type; class is a reference type.  
**Explanation:** Structs are better for small immutable data.

21. **What is object initialization?**  
**Answer:** Initializing object properties during creation.

```csharp
var employee = new Employee { Id = 1, Name = "Madhava" };
```

22. **What is method hiding?**  
**Answer:** Using `new` in derived class to hide a base method instead of overriding it.

23. **What is dependency inversion principle?**  
**Answer:** High-level modules should depend on abstractions, not concrete implementations.

24. **What is the SOLID principle?**  
**Answer:** Five design principles used for maintainable object-oriented code.  
**Explanation:** Very common interview topic for senior roles.

---

# 3. Collections & LINQ

1. **What are collections in C#?**  
**Answer:** Classes and interfaces used to store groups of objects.

2. **What is the difference between Array and List?**  
**Answer:** Array has fixed size; `List<T>` grows dynamically.

3. **What is `IEnumerable`?**  
**Answer:** Interface for iterating over a sequence.

4. **What is `ICollection`?**  
**Answer:** Interface for collections that support count and modification.

5. **What is `IList`?**  
**Answer:** Interface for ordered collections with index access.

6. **What is Dictionary?**  
**Answer:** Key-value collection optimized for fast key lookup.

7. **What is HashSet?**  
**Answer:** Collection of unique values.

8. **What is Queue?**  
**Answer:** FIFO collection.

9. **What is Stack?**  
**Answer:** LIFO collection.

10. **What is LinkedList?**  
**Answer:** Node-based collection where elements point to previous/next nodes.

11. **What is the difference between `IEnumerable` and `IQueryable`?**  
**Answer:** `IEnumerable` works in memory. `IQueryable` can translate queries to external data sources like SQL.  
**Explanation:** This is critical in EF Core interviews.

12. **What is LINQ?**  
**Answer:** Language Integrated Query for querying objects, collections, XML, and databases.

13. **What are the types of LINQ syntax?**  
**Answer:** Query syntax and method syntax.

14. **What is deferred execution in LINQ?**  
**Answer:** The query is not executed until the result is iterated.

15. **What is immediate execution in LINQ?**  
**Answer:** The query executes immediately when methods like `ToList()` or `Count()` are called.

16. **What are common LINQ operators?**  
**Answer:** `Where`, `Select`, `OrderBy`, `GroupBy`, `Any`, `All`, `FirstOrDefault`, `Skip`, `Take`

17. **What is `Select` vs `SelectMany`?**  
**Answer:** `Select` maps one item to one result. `SelectMany` flattens nested collections.

18. **What is `GroupBy` in LINQ?**  
**Answer:** It groups elements by a key.

19. **What is `First` vs `FirstOrDefault`?**  
**Answer:** `First` throws if nothing exists. `FirstOrDefault` returns default value.

20. **What is `Any` vs `All` in LINQ?**  
**Answer:** `Any` checks whether at least one item matches. `All` checks whether every item matches.

```csharp
var adults = users.Where(x => x.Age >= 18).ToList();
bool hasAdmin = users.Any(x => x.Role == "Admin");
```

---

# 4. Delegates, Events & Functional Features

1. **What is a delegate in C#?**  
**Answer:** A delegate is a type-safe reference to a method.

2. **What are multicast delegates?**  
**Answer:** Delegates that can point to multiple methods.

3. **What is the difference between delegate and event?**  
**Answer:** Delegate is the type; event is a controlled publish-subscribe wrapper around delegates.

4. **What is an anonymous method?**  
**Answer:** A method without a name, usually defined inline using `delegate`.

5. **What are lambda expressions?**  
**Answer:** Short inline functions like `x => x + 1`.

6. **What are expression-bodied members?**  
**Answer:** Short method/property syntax using `=>`.

7. **What are Func delegates?**  
**Answer:** Generic delegates that return a value.

8. **What are Action delegates?**  
**Answer:** Generic delegates that return no value.

9. **What are Predicate delegates?**  
**Answer:** Delegates that return `bool`, usually for filtering/checking.

10. **What are events in C#?**  
**Answer:** Notifications exposed by an object that subscribers can handle.

11. **What is the publish-subscribe pattern?**  
**Answer:** Publishers raise events; subscribers listen and react.

12. **How do events work internally?**  
**Answer:** Events are backed by delegates, and handlers are attached with `+=` and removed with `-=`.

13. **What is the difference between delegates and interfaces?**  
**Answer:** Delegates are for callbacks; interfaces define contracts with multiple members.

14. **What are expression trees?**  
**Answer:** Tree structures representing code expressions.  
**Explanation:** EF Core uses expression trees to convert LINQ to SQL.

---

# 5. Async, Multithreading & Performance

1. **What is asynchronous programming?**  
**Answer:** Programming where work can continue without blocking while waiting for I/O.

2. **What is `async` and `await`?**  
**Answer:** Language features that simplify writing asynchronous code using `Task`.

3. **What is `Task` in C#?**  
**Answer:** Represents an asynchronous operation.

4. **What is `Task<T>`?**  
**Answer:** Represents an asynchronous operation that returns a value.

5. **What is the difference between async and synchronous programming?**  
**Answer:** Sync blocks the current thread. Async frees the thread while waiting.

6. **What is multithreading?**  
**Answer:** Running multiple threads within a process.

7. **What is the `Thread` class?**  
**Answer:** Low-level API to create and manage threads manually.

8. **What is thread pooling?**  
**Answer:** Reusing worker threads instead of creating new threads every time.

9. **What is `Task.Run`?**  
**Answer:** Queues CPU-bound work to the thread pool.

10. **What is Parallel programming?**  
**Answer:** Running multiple operations at the same time, often for CPU-bound work.

11. **What is `Task.WhenAll`?**  
**Answer:** Awaits multiple tasks together.

12. **What is `Task.WhenAny`?**  
**Answer:** Completes when the first task finishes.

13. **What are race conditions?**  
**Answer:** Problems caused by multiple threads accessing shared data without synchronization.

14. **What are deadlocks?**  
**Answer:** Situations where threads wait forever on each other.

15. **What is synchronization?**  
**Answer:** Controlling access to shared resources safely.

16. **What is the difference between `lock` and `Monitor`?**  
**Answer:** `lock` is syntactic sugar over `Monitor` and is simpler. `Monitor` gives more control like timeout locking.

17. **What is `SemaphoreSlim`?**  
**Answer:** A lightweight synchronization primitive used to limit concurrent access, especially useful with async code.

```csharp
await Task.WhenAll(task1, task2, task3);
```

---

# 6. ASP.NET Core Fundamentals

1. **What is ASP.NET Core?**  
**Answer:** A fast, cross-platform framework for building modern web apps and APIs.

2. **What is the difference between ASP.NET and ASP.NET Core?**  
**Answer:** ASP.NET Core is cross-platform, modular, and redesigned for performance and cloud-native development.

3. **What is Kestrel?**  
**Answer:** The built-in cross-platform web server for ASP.NET Core.

4. **What is the request pipeline?**  
**Answer:** The chain of middleware through which every HTTP request passes.

5. **What is middleware in ASP.NET Core?**  
**Answer:** Components that handle requests/responses in the pipeline.

6. **What is the minimal hosting model?**  
**Answer:** The newer startup style where app setup is mostly done in `Program.cs`.

7. **What is `Program.cs` in ASP.NET Core?**  
**Answer:** Main startup file where services and middleware are configured.

8. **What is `appsettings.json`?**  
**Answer:** The default configuration file for application settings.

9. **What are environment variables in ASP.NET Core?**  
**Answer:** Variables used to override or supply configuration at runtime per environment.

10. **What is configuration in ASP.NET Core?**  
**Answer:** A unified system for loading settings from multiple providers.

11. **What is the Options pattern?**  
**Answer:** Strongly typed configuration binding using `IOptions<T>`.

---

# 7. Web API Development

1. **What is a REST API?**  
**Answer:** An API that exposes resources over HTTP in a stateless way.

2. **What are REST principles?**  
**Answer:** Statelessness, resource-based endpoints, standard methods, and uniform interface.

3. **What are HTTP methods?**  
**Answer:** `GET`, `POST`, `PUT`, `PATCH`, `DELETE`

4. **What are HTTP status codes?**  
**Answer:** Standard response codes like `200`, `201`, `204`, `400`, `401`, `403`, `404`, `500`.

5. **What is a controller in ASP.NET Core?**  
**Answer:** A class that handles incoming HTTP requests.

6. **What is `ControllerBase`?**  
**Answer:** A base class for API controllers without view support.

7. **What is `ApiController` attribute?**  
**Answer:** An attribute that enables API-specific behavior like automatic model validation responses.

8. **What is routing?**  
**Answer:** Mapping URLs to action methods.

9. **What is attribute routing?**  
**Answer:** Routing defined directly on controllers/actions via attributes.

10. **What is conventional routing?**  
**Answer:** Routing defined globally through route patterns.

11. **What is model binding?**  
**Answer:** Mapping HTTP request data to action parameters or model objects.

12. **What is model validation?**  
**Answer:** Checking whether input data satisfies validation rules before processing.

13. **What are data annotations?**  
**Answer:** Validation attributes like `[Required]`, `[Range]`, `[StringLength]`.

14. **What are DTOs?**  
**Answer:** Data Transfer Objects used for request/response contracts.

15. **What is API versioning?**  
**Answer:** Supporting multiple API versions without breaking existing clients.

---

# 8. Dependency Injection & Middleware

1. **What is dependency injection?**  
**Answer:** A pattern where dependencies are provided to a class instead of created inside it.

2. **What are DI lifetimes?**  
**Answer:** Transient, Scoped, Singleton.

3. **What is Transient lifetime?**  
**Answer:** A new instance every time it is requested.

4. **What is Scoped lifetime?**  
**Answer:** One instance per HTTP request.

5. **What is Singleton lifetime?**  
**Answer:** One instance for the whole app lifetime.

6. **What is constructor injection?**  
**Answer:** Injecting dependencies through constructor parameters.

7. **What is middleware?**  
**Answer:** Request-processing component in the pipeline.

8. **How middleware works internally?**  
**Answer:** Each middleware can handle the request, call the next middleware, and then handle the response on the way back.

9. **What is middleware ordering?**  
**Answer:** The order of middleware registration affects behavior and correctness.

10. **What is custom middleware?**  
**Answer:** Middleware written by us for things like exception handling, logging, correlation IDs, etc.

```csharp
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
```

---

# 9. Entity Framework Core

1. **What is Entity Framework Core?**  
**Answer:** A modern ORM for .NET.

2. **What is ORM?**  
**Answer:** Object Relational Mapper. It maps database tables to C# objects.

3. **What is `DbContext`?**  
**Answer:** Main EF Core class for querying and saving data.

4. **What is `DbSet`?**  
**Answer:** Represents a table/entity collection.

5. **What is Code First approach?**  
**Answer:** Define models in C# first and generate the database schema.

6. **What is Database First approach?**  
**Answer:** Start from existing database and scaffold classes from it.

7. **What are migrations?**  
**Answer:** Versioned database schema changes managed by EF Core.

8. **What is tracking in EF Core?**  
**Answer:** EF Core keeps track of entity changes so it can update them later.

9. **What is no tracking query?**  
**Answer:** A read-only query using `AsNoTracking()` to improve performance.

10. **What is lazy loading?**  
**Answer:** Related entities load automatically when accessed.

11. **What is eager loading?**  
**Answer:** Related entities load immediately using `Include()`.

12. **What is explicit loading?**  
**Answer:** Related entities are loaded manually later.

13. **What is the N+1 problem?**  
**Answer:** One query loads parent records, then many extra queries load child records, harming performance.

14. **What is `IQueryable` vs `IEnumerable` in EF?**  
**Answer:** `IQueryable` runs on database side when possible. `IEnumerable` runs in memory after data is loaded.

15. **What is optimistic concurrency?**  
**Answer:** A concurrency model where conflicts are detected at update time instead of locking rows up front.

---

# 10. Security (Auth, JWT, CORS)

1. **What is authentication?**  
**Answer:** Verifying who the user is.

2. **What is authorization?**  
**Answer:** Deciding what the user can do.

3. **What is JWT authentication?**  
**Answer:** Authentication using signed JSON Web Tokens.

4. **How does JWT work?**  
**Answer:** Server issues token after login; client sends it in each request; server validates it.

5. **What are claims?**  
**Answer:** Key-value identity information inside the token.

6. **What are roles?**  
**Answer:** Authorization categories like `Admin`, `Manager`, `User`.

7. **What is policy-based authorization?**  
**Answer:** Authorization using custom rules based on claims, roles, or logic.

8. **What is CORS?**  
**Answer:** Cross-Origin Resource Sharing, a browser mechanism controlling cross-origin requests.

9. **Why is CORS needed?**  
**Answer:** Because browsers block cross-origin calls by default unless the server allows them.

10. **What are CSRF attacks?**  
**Answer:** Attacks where a user’s authenticated browser is tricked into sending unwanted requests.

11. **What are XSS attacks?**  
**Answer:** Cross-site scripting attacks where malicious scripts are injected into pages.

---

# 11. API Design & Best Practices

1. **What are API design best practices?**  
**Answer:** Use clear resource names, DTOs, versioning, proper status codes, validation, pagination, documentation, and consistent error handling.

2. **What is idempotency in APIs?**  
**Answer:** Making the same request multiple times gives the same result.

3. **What are RESTful naming conventions?**  
**Answer:** Use nouns, plural resources, and predictable route structures.

4. **What are DTOs and why are they used?**  
**Answer:** DTOs shape request/response models and protect internal domain/data structure.

5. **Why should EF entities not be returned directly?**  
**Answer:** It tightly couples the API contract to the database model and can expose sensitive/internal fields.

6. **What are API versioning strategies?**  
**Answer:** URL versioning, header versioning, query string versioning.

7. **What are proper HTTP response codes?**  
**Answer:** Return codes based on actual outcome, not always `200`.

8. **What is pagination in APIs?**  
**Answer:** Splitting large data into smaller pages for performance and usability.

9. **What is filtering in APIs?**  
**Answer:** Letting clients restrict returned data using query parameters.

10. **What is API documentation?**  
**Answer:** Describing endpoints, auth, payloads, and responses, typically with Swagger/OpenAPI.

---

# 12. Performance Optimization

1. **How do you improve Web API performance?**  
**Answer:** Use async, caching, pagination, optimized queries, compression, and avoid over-fetching.

2. **Why should APIs use async programming?**  
**Answer:** It improves scalability by not blocking request threads during I/O waits.

3. **What is caching?**  
**Answer:** Temporarily storing frequently used data to avoid repeated expensive operations.

4. **What is in-memory caching?**  
**Answer:** Cache stored inside app process memory.

5. **What is distributed caching?**  
**Answer:** Cache stored externally and shared across multiple app instances.

6. **What is Redis caching?**  
**Answer:** Using Redis as a fast distributed cache store.

7. **What is response compression?**  
**Answer:** Compressing API responses to reduce payload size.

8. **What is database indexing?**  
**Answer:** Data structures that improve query lookup performance.

9. **What is connection pooling?**  
**Answer:** Reusing existing database connections instead of constantly opening new ones.

---

# 13. Logging, Monitoring & Health Checks

1. **What is `ILogger`?**  
**Answer:** ASP.NET Core’s built-in logging abstraction.

2. **What are logging levels?**  
**Answer:** `Trace`, `Debug`, `Information`, `Warning`, `Error`, `Critical`

3. **What is structured logging?**  
**Answer:** Logging with named fields so logs are easier to query and analyze.

4. **What are health checks?**  
**Answer:** Endpoints used to report application status.

5. **What is application monitoring?**  
**Answer:** Tracking metrics, logs, traces, uptime, and failures in production.

6. **What is distributed tracing?**  
**Answer:** Tracking a request across multiple services.

7. **What is correlation ID?**  
**Answer:** A unique id added to each request so related logs can be traced together.

---

# 14. Testing

1. **What is unit testing?**  
**Answer:** Testing a small unit of logic in isolation.

2. **What is integration testing?**  
**Answer:** Testing how multiple components work together.

3. **What is mocking?**  
**Answer:** Replacing real dependencies with fake/test objects.

4. **What is xUnit?**  
**Answer:** A popular test framework for .NET.

5. **What is NUnit?**  
**Answer:** Another mature .NET test framework.

6. **What is MSTest?**  
**Answer:** Microsoft’s testing framework for .NET.

7. **What is `WebApplicationFactory`?**  
**Answer:** A utility for integration testing ASP.NET Core applications in memory.

---

# 15. Architecture & Design Patterns

1. **What is Clean Architecture?**  
**Answer:** An approach where domain logic is independent from frameworks, UI, and infrastructure.

2. **What is the Repository Pattern?**  
**Answer:** A pattern that abstracts data access logic behind repository interfaces.

3. **What is Unit of Work Pattern?**  
**Answer:** A pattern that groups changes into one transaction-like unit.

4. **What is CQRS?**  
**Answer:** Separating read operations from write operations.

5. **What is Mediator pattern?**  
**Answer:** A pattern where components communicate through a mediator instead of directly.

6. **What is the SOLID principle?**  
**Answer:** A set of design principles used to build maintainable and extensible systems.

---

# 16. System Design for APIs

1. **How do you design scalable APIs?**  
**Answer:** Use stateless services, async I/O, caching, pagination, efficient DB access, and observability.

2. **How do you handle high traffic APIs?**  
**Answer:** Use load balancing, caching, rate limiting, horizontal scaling, and optimized backend dependencies.

3. **What is load balancing?**  
**Answer:** Distributing traffic across multiple server instances.

4. **What is API gateway?**  
**Answer:** A single entry point for routing, auth, throttling, and other cross-cutting concerns.

5. **What are microservices?**  
**Answer:** Small independently deployable services organized around business capabilities.

---

# 17. Advanced Production Topics

1. **What are background services?**  
**Answer:** Services that run behind the scenes for scheduled jobs or queue processing.

2. **What is `IHostedService`?**  
**Answer:** Interface for starting and stopping background services with the host.

3. **What is `BackgroundService`?**  
**Answer:** Base class that simplifies long-running hosted service implementations.

4. **What are health check endpoints?**  
**Answer:** Endpoints like `/health` used by orchestration and monitoring systems.

5. **What is rate limiting?**  
**Answer:** Restricting how many requests a client can make in a given period.

6. **What is circuit breaker pattern?**  
**Answer:** A resilience pattern that stops repeated calls to a failing dependency for a period of time.

7. **What is containerization?**  
**Answer:** Packaging an app and its dependencies into a consistent deployable unit.

8. **What is Docker?**  
**Answer:** A platform for building and running containers.

9. **What is CI/CD?**  
**Answer:** Automating build, test, and deployment pipelines for faster and safer releases.

---

# Quick Interview Focus

For strong interview preparation, make sure you can explain these clearly with one real example from your own project:

1. `IEnumerable` vs `IQueryable`
2. `var` vs `dynamic` vs `object`
3. Abstract class vs interface
4. LINQ deferred execution
5. `async/await` and `Task.WhenAll`
6. ASP.NET Core middleware order
7. DTOs and why not to return EF entities directly
8. EF Core loading strategies and N+1 problem
9. JWT authentication and policy-based authorization
10. Pagination, filtering, versioning, and proper status codes
11. Caching, indexing, connection pooling
12. Clean Architecture, CQRS, Mediator
13. Background services, rate limiting, health checks, Docker, and CI/CD
