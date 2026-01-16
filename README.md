# NestJS Backend – ORM, Pipes & Migrations Practice

This repository contains a **NestJS backend project** built to practice **clean architecture**, **TypeORM with PostgreSQL**, **migrations**, and **request lifecycle concepts** like pipes and exception filters.

---

## 🔄 Request–Response Flow (Working)

```
Request
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

**One‑liner:** This flow ensures all incoming requests are validated and transformed before business logic runs, and all errors are handled consistently.

---

## 🧠 What I Practised in This Project

* **Pipes** for request data transformation and validation
* **DTOs** to define strict input contracts
* **Global Exception Filters** for centralized error handling
* **TypeORM** for database interaction
* **PostgreSQL** as the relational database
* **Migrations** for safe, version‑controlled schema changes

**Result:** Clean, predictable, and production‑ready backend structure.

---

## 🗄️ Database & Migration Work

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

## 🧪 NestJS API Practice

**One‑liner:** Tested API flow with controllers, services, validation pipes, and database integration.

![Nest API Practice](https://i.ibb.co/BV2TRtC5/nest-api-pract.png)

---

## 🛠 Tech Stack

* **Framework:** NestJS
* **Language:** TypeScript
* **ORM:** TypeORM
* **Database:** PostgreSQL
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
* Testing tools were intentionally excluded to focus on ORM and backend fundamentals
* Project follows real‑world NestJS best practices

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

✅ This project demonstrates a solid understanding of backend fundamentals, database design, and NestJS architecture.
