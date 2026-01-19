# NestJS Backend – ORM, Auth, Guards & Migrations Practice

This repository contains a **NestJS backend project** built to practice **clean architecture**, **authentication & authorization**, **TypeORM with PostgreSQL**, **migrations**, and **NestJS request lifecycle concepts** such as pipes, guards, and exception filters.

---

## 🔄 Request–Response Flow (Working)

```
Request
  ↓
Guards (Auth / JWT validation)
  ↓
Pipes (transform + validate)
  ↓
Controller
  ↓
Service
  ↓
Exception Filter (if error)
  ↓
Response
```

**One‑liner:** Requests are first authorized using Guards, then validated via Pipes, processed by services, and errors are handled centrally for consistent responses.

---

## 🧠 What I Practised in This Project

### 🔐 Authentication & Authorization

* User **Signup & Signin** flow using email and password
* **Password hashing** using bcrypt
* **JWT token generation** on successful login
* **Custom AuthGuard** to protect routes
* Understanding **dependency injection** issues and module boundaries

**One‑liner:** Implemented a real‑world authentication flow using JWT and NestJS Guards.

---

### 🧩 NestJS Core Concepts

* **Controllers & Services** with clean separation of concerns
* **DTOs** for strict request contracts
* **Pipes** for validation and transformation
* **Global Exception Filters** for centralized error handling
* **Guards** for request authorization

**One‑liner:** Applied NestJS fundamentals to build scalable and maintainable backend modules.

---

### 🗄️ Database & ORM (TypeORM)

* **User & Post entities** with proper relations
* **PostgreSQL** as relational database
* **Repository pattern** via TypeORM
* **Unique constraints** and column validation

**One‑liner:** Designed relational schemas and managed data using TypeORM best practices.

---

## 🧱 Migrations Practice

### ✅ Migration Created

**One‑liner:** Auto‑generated migration based on entity changes using TypeORM CLI.

![Migration Created](https://i.ibb.co/dRZxHfv/Migration-created.png)

---

### 👀 Migration File View

**One‑liner:** Generated SQL clearly shows table creation, constraints, and relations.

![Migration View](https://i.ibb.co/hFP7nZZQ/migration-view.png)

---

### 🚀 Migration Executed Successfully

**One‑liner:** Migration executed and recorded in the database without errors.

![Migration Run](https://i.ibb.co/cXspMRpn/migration.png)

---

## 🧪 API Testing (Postman)

* Tested **/auth/signup** and **/auth/signin** endpoints
* Verified JWT token generation
* Used JWT token to access protected routes

**One‑liner:** End‑to‑end API testing confirms authentication, validation, and DB integration.

![Nest API Practice](https://i.ibb.co/BV2TRtC5/nest-api-pract.png)

---

## 🛠 Tech Stack

* **Framework:** NestJS
* **Language:** TypeScript
* **ORM:** TypeORM
* **Database:** PostgreSQL
* **Auth:** JWT, bcrypt
* **Validation:** class-validator, class-transformer
* **Configuration:** @nestjs/config

---

## 🚀 Project Setup

```bash
npm install
```

---

## ▶️ Run the Project

```bash
# development
npm run start

# watch mode
npm run start:dev

# production
npm run start:prod
```

---

## 📌 Notes

* Migrations are used instead of `synchronize: true`
* JWT Guard replaces hardcoded API‑key based authorization
* Focused on backend fundamentals and real‑world NestJS patterns

---

## 📚 Resources

* [NestJS Documentation](https://docs.nestjs.com)
* [TypeORM Documentation](https://typeorm.io)
* [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

## 👩‍💻 Contributor

**Gauri Bidwai**
Associate Software Engineer

---

 My hands‑on practice with authentication, authorization, database design, and core NestJS architecture.
