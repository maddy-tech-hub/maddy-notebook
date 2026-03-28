# SOLID Principles – Discount System Examples

---

## 1️⃣ S – Single Responsibility Principle (SRP)  
**Definition:** A class should have only one reason to change.  

**Bad Example (Violation):**
```csharp
public class Customer
{
    public double CalculateDiscount(double amount) => amount * 0.1;
    public void SendEmail(string message) { /* send email */ }
}
// ❌ One class does two things: calculates discount + sends email
```

**Good Example(Correct):**

```csharp
public class DiscountCalculator
{
    public double GetDiscount(double amount) => amount * 0.1;
}

public class EmailService
{
    public void SendEmail(string message) { /* send email */ }
}
// ✅ Each class has a single responsibility
```

## 2️⃣ O – Open/Closed Principle (OCP)  
**Definition:**Software entities should be open for extension but closed for modification.  

**Bad Example (Violation):**
```csharp
public class DiscountService
{
    public double GetDiscount(double amount, string customerType)
    {
        if (customerType == "Regular") return amount * 0.1;
        if (customerType == "Premium") return amount * 0.2;
        return 0;
    }
}
// ❌ Adding new customer types requires modifying this class
```

**Good Example(Correct):**
```csharp
public interface IDiscount
{
    double GetDiscount(double amount);
}

public class RegularCustomer : IDiscount
{
    public double GetDiscount(double amount) => amount * 0.1;
}

public class PremiumCustomer : IDiscount
{
    public double GetDiscount(double amount) => amount * 0.2;
}

public class DiscountService
{
    public double CalculateDiscount(double amount, IDiscount customer)
        => customer.GetDiscount(amount);
}
// ✅ New customer types can be added by creating a new class implementing IDiscount
```
## 3️⃣ L – Liskov Substitution Principle (LSP)
**Definition:**Subtypes must be substitutable for their base types.

**Bad Example (Violation):**
```csharp

public interface IDiscount
{
    double GetDiscount(double amount);
}

public class GuestCustomer : IDiscount
{
    public double GetDiscount(double amount)
    {
        throw new NotImplementedException();
    }
}
// ❌ Replacing IDiscount with GuestCustomer breaks the program
```

**Good Example(Correct):**
```csharp
public class GuestCustomer : IDiscount
{
    public double GetDiscount(double amount) => 0;
}
// ✅ Can be substituted safely wherever IDiscount is used

class Program
{
    static void Main()
    {
        IDiscount customer = new GuestCustomer();
        DiscountService service = new DiscountService();
        Console.WriteLine(service.CalculateDiscount(1000, customer)); // works correctly
    }
}
// ✅ Can be substituted safely wherever IDiscount is used
```

## 4️⃣ I – Interface Segregation Principle (ISP)
**Definition:**Clients should not be forced to depend on interfaces they do not use.
**Bad Example (Violation):**
```csharp
public interface ICustomerOperations
{
    void ApplyDiscount(double amount);
    void AddLoyaltyPoints(int points);
    void SendPromotionalEmail(string message);
}

public class GuestCustomer : ICustomerOperations
{
    public void ApplyDiscount(double amount)
    {
        // apply discount logic
    }
    public void AddLoyaltyPoints(int points) => throw new NotImplementedException();
    public void SendPromotionalEmail(string message) => throw new NotImplementedException();
}
// ❌ GuestCustomer is forced to implement unused methods
```

**Good Example(Correct):**
```csharp
public interface IDiscount { double GetDiscount(double amount); }
public interface ILoyalty { void AddLoyaltyPoints(int points); }
public interface ICommunication { void SendPromotionalEmail(string message); }


public class RegularCustomer : IDiscount, ILoyalty
{
    public double GetDiscount(double amount) => amount * 0.1;
    public void AddLoyaltyPoints(int points) { /* add points logic */ }
}

public class GuestCustomer : IDiscount
{
    public double GetDiscount(double amount) => 0;
}

// ✅ Classes implement only the interfaces they need

class Program
{
    static void Main()
    {
        IDiscount discountCustomer = new RegularCustomer();
        ILoyalty loyaltyCustomer = new RegularCustomer();
        ICommunication communicationCustomer = new RegularCustomer();

        GuestCustomer guest = new GuestCustomer();
        IDiscount guestDiscount = guest; // only discount, no loyalty/email
    }
}
```
## 5️⃣ D – Dependency Inversion Principle (DIP)
**Definition:**High - level modules should not depend on low-level modules. Both should depend on abstractions.
**Bad Example (Violation):**
```csharp
public class DiscountService
{
    private RegularCustomer _customer = new RegularCustomer();
    public double CalculateDiscount(double amount) => _customer.GetDiscount(amount);
}
// ❌ Service depends directly on concrete class
```
**Good Example(Correct):**
```csharp
public interface IDiscount { double GetDiscount(double amount); }

public class RegularCustomer : IDiscount { public double GetDiscount(double amount) => amount * 0.1; }
public class PremiumCustomer : IDiscount { public double GetDiscount(double amount) => amount * 0.2; }

public class DiscountService
{
    private readonly IDiscount _customer;
    public DiscountService(IDiscount customer) { _customer = customer; }
    public double CalculateDiscount(double amount) => _customer.GetDiscount(amount);
}

class Program
{
    static void Main()
    {
        IDiscount customer = new PremiumCustomer();
        DiscountService service = new DiscountService(customer);
        Console.WriteLine(service.CalculateDiscount(1000));
    }
}
// ✅ High-level module depends on abstraction, not concrete class
```
---