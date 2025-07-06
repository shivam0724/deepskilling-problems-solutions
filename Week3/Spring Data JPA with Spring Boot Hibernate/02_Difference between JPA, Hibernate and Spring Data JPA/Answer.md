## Difference between JPA, Hibernate and Spring Data JPA

## Java Persistence API (JPA)

- JPA is a Java specification (JSR 338) for persisting, reading, and managing data between Java objects and relational databases.
- It provides a set of interfaces and annotations to standardize Object-Relational Mapping (ORM) in Java.
- JPA is only a specification and does not include any implementation.
- Popular implementations include:
  - Hibernate
  - EclipseLink
  - OpenJPA

---

## Hibernate

- Hibernate is a widely used ORM tool and the most popular **implementation of JPA**.
- It allows developers to map Java objects to database tables and vice versa.
- Hibernate goes beyond JPA with advanced features such as:
  - Caching
  - Lazy loading
  - Custom SQL
  - Interceptors and event listeners

---

## Spring Data JPA

- Spring Data JPA is **not an implementation** of JPA but a **higher-level abstraction** built on top of it (typically using Hibernate underneath).
- It reduces boilerplate code required to implement data access layers in Java applications using Spring.
- Provides powerful features like:
  - Automatic query generation from method names
  - Built-in pagination and sorting
  - Support for custom queries using `@Query` annotations
  - Integration with Spring's dependency injection and transaction management

---

> Spring Data JPA simplifies and supercharges JPA usage, while Hibernate is the engine behind the scenes. JPA sets the rules of the game.
