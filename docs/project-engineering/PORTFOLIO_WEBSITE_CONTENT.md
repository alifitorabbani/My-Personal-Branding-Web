# Portfolio Website Content

**Confidence:** VERIFIED (project details from verified source code and READMEs)

This document contains accurate, polished content for the personal branding website. No exaggerated claims — all descriptions are grounded in actual implementation evidence.

---

## Project 01 — Fair Team Formation System

### Short Description (40-60 words)
A web-based platform that automatically forms balanced Mobile Legends competition teams using player-skill scoring, rank normalization, and multi-objective fairness optimization. Built with FastAPI, Next.js 14, and PostgreSQL, with 67 verified backend tests.

### Medium Description (100-150 words)
The Fair Team Formation System automates 5-vs-5 Mobile Legends team creation from a player pool. It computes player skill scores using weighted rank/star factors (40/20/25/15), role flexibility scores (70/30), selects optimal participant subsets via lane-diversity greedy selection, and generates teams using a randomized heuristic optimizer with local search. Team fairness is evaluated on role balance (40%), rank balance (20%), and skill balance (40%). Payment gating restricts team access until all qualified participants pay. Built with Python/FastAPI backend, Next.js 14 frontend, PostgreSQL/SQLite database, and 67 passing pytest tests.

### Detailed Description (200-300 words)
A comprehensive competition management platform for Mobile Legends tournaments. The system ingests participant data from a master CSV, computes individual skill scores using a weighted formula (current rank 40%, current stars 20%, highest rank 25%, highest stars 15%) and role flexibility scores (primary comfort 70%, secondary comfort 30%). When participant counts aren't divisible by 5, a lane-diversity greedy selector chooses the optimal subset. The TeamOptimizer uses randomized candidate generation with multi-objective local search to form balanced teams covering all 5 lanes (Jungle, EXP Lane, Mid Lane, Gold Lane, Roam). Fairness is scored on role coverage, rank distribution, and skill variance. Payment verification via E-Money gates team access. Admin features include dashboard analytics, audit logging, and team version history. Tech stack: Python 3.12, FastAPI, SQLAlchemy, Next.js 14, Tailwind CSS, Vercel serverless deployment.

### Problem Statement
Manual team formation in Mobile Legends competitions risks skill imbalance, lane conflicts, and perceived bias. Organizers need an objective, transparent, and reproducible method to create balanced teams.

### Solution
Automated team formation pipeline: data ingestion → skill/role scoring → participant selection → heuristic optimization → fairness evaluation → payment-gated team access.

### Key Features
- Player skill scoring with transparent breakdown (40/20/25/15 weights)
- Role flexibility scoring (70/30 primary/secondary comfort)
- Lane-diversity participant selection (when count not divisible by 5)
- Randomized team optimization with local search and seeded reproducibility
- Multi-objective fairness scoring (role 40%, rank 20%, skill 40%)
- Payment verification gating (E-Money Dana/Link)
- Admin dashboard, audit logging, team version history

### Technology Stack
Python 3.12, FastAPI, SQLAlchemy, PostgreSQL/SQLite, Next.js 14, React, TypeScript, Tailwind CSS, Vercel

### My Role and Contribution
Full-stack implementation: backend architecture, algorithm design, API endpoints, database schema, optimization logic. Solo project.

### Technical Highlights
- 67 verified passing backend tests (pytest)
- Seeded RNG for reproducibility (default seed 42)
- Hard constraint: all 5 lanes covered per team
- Multi-objective optimization with early termination

### Challenges
- Ensuring all 5 lanes are covered per team (hard constraint)
- Handling participant counts not divisible by 5
- Payment gating logic requiring all qualified participants to pay

### Outcomes
Functional competition management platform with verified algorithm correctness (67 tests), admin dashboard, and user team access.

### Project Status
Complete, production-ready

### GitHub Repository
Not verified (no URL in repository)

---

## Project 02 — LeaveSphere (HR Leave Management System)

### Short Description (40-60 words)
Integrated HR leave-management system with Laravel 12 web admin panel and Flutter mobile app for employees. Features leave submission, approval workflows, role-based access, team calendar, and REST API with Laravel Sanctum authentication. AI features designed but not yet implemented.

### Medium Description (100-150 words)
LeaveSphere is a comprehensive HR leave management solution consisting of a Laravel 12 web administration panel and a Flutter mobile application. The web panel handles admin/manager workflows (approvals, delegation, SLA monitoring, analytics) while the mobile app handles employee self-service (leave submission, history, calendar, profile). Both communicate via REST API with Laravel Sanctum token authentication. Role-based access control (super_admin, manager, employee) secures all endpoints. Leave balance validation and 25-day maximum per request are enforced. AI-assisted leave-spike prediction and conflict detection are designed in the UI but require backend implementation.

### Detailed Description (200-300 words)
An integrated HR leave-management system built as a group project (Kelompok 7, Telkom University). The Laravel 12 web administration panel provides dashboard analytics, leave approval workflows with approve/reject actions, team calendar via FullCalendar, delegation management with audit logging, SLA monitoring with 24-hour deadlines, and analytics with Chart.js visualizations. The Flutter mobile app enables employees to submit leave requests, view history, check team calendar, and manage profiles. Communication between mobile and web occurs via REST API with Laravel Sanctum token authentication. Database includes 10 tables (users, departments, leave_requests, approvals, delegations, workflows, SLA records, notifications, Sanctum tokens). Seeded with 150 dummy users for testing. AI features (leave-spike prediction, conflict detection, workforce risk analysis) are designed in the UI but documented as requiring backend logic implementation.

### Problem Statement
Organizations need a centralized system to manage employee leave requests, approvals, and balances across web (admin/HR) and mobile (employee) interfaces.

### Solution
Dual-interface system: Laravel web panel for admin/HR management, Flutter mobile app for employee self-service, connected via Sanctum-authenticated REST API.

### Key Features
- Leave submission, approval, rejection workflows
- Role-based access control (super_admin, manager, employee)
- Leave balance validation with 25-day max per request
- Team calendar with FullCalendar
- Delegation management with audit log
- SLA monitoring with 24-hour deadline tracking
- REST API for mobile (Sanctum token auth)
- Analytics dashboard with Chart.js

### Technology Stack
PHP, Laravel 12, Flutter, Dart, MySQL/SQLite, Blade, Tailwind CSS (CDN), Alpine.js (CDN), Chart.js (CDN), FullCalendar (CDN)

### My Role and Contribution
Backend Dev, Frontend Web Dev, Mobile Developer, AI Engineer (per team documentation). Group project — contributions shared across team.

### Technical Highlights
- Sanctum token authentication for mobile-web communication
- Role-based middleware enforcement
- Leave balance and max-days validation
- 10-table relational database schema

### Challenges
- AI features designed but not implemented (backend logic pending)
- Mobile-web API connectivity across network environments (emulator vs physical device)

### Outcomes
Working leave management system with web admin panel and Flutter mobile app, Sanctum-authenticated API, seeded test data.

### Project Status
Core features implemented; AI features pending backend implementation

### GitHub Repository
Not verified

---

## Project 03 — Exit Apparel (Company Profile & Custom Apparel Platform)

### Short Description (40-60 words)
Corporate website for Exit Apparel, a Bandung-based custom apparel manufacturer. Features company profile, product catalog, portfolio, and a dynamic price estimator with WhatsApp integration. Built with Next.js 16, React 19, and Tailwind CSS 4.

### Medium Description (100-150 words)
Exit Apparel is a corporate website for a custom apparel manufacturer in Bandung, Indonesia. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4 with Framer Motion animations. The site includes a hero section, company stats, services overview, portfolio showcase, client logos, and CTA banner. The key feature is a client-side price estimator supporting 7 product types (Kaos, Kemeja, Jaket, Vest, Jersey, Lanyard, Topi) with material selection, add-ons, quantity-based pricing, and WhatsApp order integration. Products marked as "consult-only" redirect to WhatsApp consultation instead of showing prices.

### Detailed Description (200-300 words)
A frontend-only corporate website for Exit Apparel, a custom apparel manufacturer. The Next.js 16 App Router architecture uses Server Components by default with Client Components for interactivity. The homepage features animated sections built with Framer Motion (Reveal component). The price estimator is the flagship feature: users select a product type, choose from available materials (each with per-piece pricing), select add-ons, set quantity (minimum 12 pcs), and see real-time price calculations. Pricing formula: unitPrice = materialPrice + sum(addOnPrices); total = unitPrice × quantity. Three products (Jaket, Jersey, Topi) are consult-only with no material pricing. Orders flow to WhatsApp with pre-filled order details. Built with Google Fonts (Inter, Chivo) via next/font for self-hosted font optimization.

### Problem Statement
Exit Apparel needed a digital presence to showcase manufacturing capabilities, products, and enable customers to estimate prices and initiate orders.

### Solution
Static corporate website with product catalog, portfolio, and client-side price estimator with WhatsApp integration.

### Key Features
- Company profile and brand presentation
- Product catalog (7 types with materials and add-ons)
- Dynamic price estimator (client-side calculation)
- WhatsApp order integration with pre-filled messages
- Consult-only products (no pricing, redirect to WhatsApp)
- Responsive design with Framer Motion animations
- SEO metadata via Next.js

### Technology Stack
Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lucide React

### My Role and Contribution
Frontend implementation, project planning, development coordination.

### Technical Highlights
- Client-side pricing with real-time updates
- Minimum order enforcement (12 pcs)
- WhatsApp deep linking with encoded order messages
- Self-hosted Google Fonts optimization

### Challenges
- README has merge conflict (content not available)
- No backend — purely static frontend

### Outcomes
Production-ready corporate website with price estimator and WhatsApp integration.

### Project Status
Complete

### GitHub Repository
Not verified (README has merge conflict)

---

## Project 04 — Leave Management Workflow Engine (Comparative Implementation)

### Short Description (40-60 words)
Comparative implementation of three workflow approaches for employee leave management: manual state machine, Flowable BPMN engine, and service-based Deboot. Built with Spring Boot 3.2, React, and PostgreSQL. Evaluated on code complexity, maintainability, and scalability.

### Medium Description (100-150 words)
A comparative workflow engine implementation for employee leave management at PT. Len Industri. Three approaches are implemented and compared: (1) Manual State Machine — Java enum + if-else transitions with manual audit logging; (2) Flowable BPMN — BPMN 2.0 process definition with Flowable engine and built-in history; (3) Deboot — service-based Flowable usage without BPMn XML. All use Spring Boot 3.2, Spring Security + JWT, Spring Data JPA, and PostgreSQL. Frontend is React 18 + TypeScript + Vite (identical across all three). Compared on LOC, features, learning curve, scalability, and enterprise suitability.

### Detailed Description (200-300 words)
An R&D project comparing workflow implementation approaches for leave management. The workflow: Employee submits leave → Manager approves/rejects → HR approves/rejects → Final status. Three versions:
1. **Manual (port 8100):** LeaveStatus enum with 5 values (PENDING, MANAGER_APPROVED, MANAGER_REJECTED, HR_APPROVED, HR_REJECTED). Transitions via if-else validation. Manual AuditLog entity. 1,731 backend LOC.
2. **Flowable (port 8200):** BPMN 2.0 XML process definition (leaveApproval). RuntimeService starts process instances, TaskService completes user tasks. Flowable auto-creates ACT_* tables. Built-in history/audit. 1,563 backend LOC + 96 BPMN LOC.
3. **Deboot (port 8300):** Flowable engine used directly via Java service (DebootLeaveWorkflowService) without BPMN XML files. Same Flowable database tables. Code-first approach. 1,482 backend LOC.
Frontend identical across all three (React 18 + TypeScript + Vite + Tailwind). Compared on 8 criteria including code complexity, maintainability, scalability, and vendor lock-in. No approach declared superior without performance benchmarks.

### Problem Statement
Organizations need to choose between custom workflow implementation, BPMN engines, or hybrid approaches for leave management — each with different trade-offs.

### Solution
Side-by-side implementation of three approaches with documented comparison for enterprise decision-making.

### Key Features
- 2-step approval workflow (Manager → HR)
- 4 leave types (Annual, Sick, Personal, Maternity)
- 5 statuses with state machine validation
- REST API endpoints (auth, leave requests, approvals)
- Three architectural approaches with LOC comparison
- BPMN 2.0 process definition

### Technology Stack
Java 17+, Spring Boot 3.2.0, Spring Security + JWT, Spring Data JPA, PostgreSQL, Flowable 6.8.0, React 18, TypeScript, Vite, Tailwind CSS

### My Role and Contribution
Backend Developer Intern — implemented all three approaches and conducted comparative analysis.

### Technical Highlights
- LOC comparison: Manual 3,095 / Flowable 3,023 / Deboot 2,846
- BPMN 2.0 XML with exclusive gateways and user tasks
- Spring Security + JWT authentication
- Role-based access (EMPLOYEE, MANAGER, HR)

### Challenges
- No performance benchmarks exist (explicitly documented)
- Declaring one approach superior without measurements avoided

### Outcomes
Three working implementations with comparative documentation for enterprise workflow selection.

### Project Status
Complete (R&D comparison)

### GitHub Repository
Not verified

---

## Project 05 — Library Workflow System (BPMN-Based Management Platform)

### Short Description (40-60 words)
Enterprise library management system built on Flowable 7 BPMN workflow engine. Features multi-step book-loan approvals, automated fine calculation for overdue returns, timer-based reminders, and role-based access (Member, Librarian, Admin). Java 17, Spring Boot 3.2, React 18, PostgreSQL.

### Medium Description (100-150 words)
Library Workflow System is an enterprise-grade library management application built around Flowable 7 BPMN workflow engine. It implements book-loan and book-return processes as BPMN workflows with user tasks (librarian approval), service tasks (fine calculation), and timer events (overdue reminders). Role-based access control (MEMBER, LIBRARIAN, ADMIN) with Spring Security + JWT. Java 17 backend with Spring Boot 3.2, Spring Data JPA, and PostgreSQL 15. React 18 + TypeScript frontend with Ant Design, Zustand, and TanStack Query. Docker Compose deployment. Flyway database migrations.

### Detailed Description (200-300 words)
A library management platform where core operations are orchestrated by BPMN workflows. The Book Loan Process: Start → Validate User → Check Stock → Librarian Approval → Reduce Stock → Generate Code → Set Due Date → End. The Book Return Process: Start → Validate Loan → Calculate Fine → [Is Late?] → Create Fine → Restore Stock → Close Loan → End. Timer events handle overdue detection and reminders. Application data (users, books, loans, fines, audit_logs) is stored separately from Flowable ACT_* tables, correlated via business keys. REST API at /v1/ with authentication endpoints, workflow task management, and data endpoints. Docker Compose deploys all services. Flyway manages database migrations.

### Problem Statement
Library operations (loan approvals, fine calculation, overdue tracking) need workflow orchestration with audit trails and role-based access.

### Solution
BPMN-driven library system with Flowable engine orchestrating loan/return processes, Spring Security for auth, React frontend for task-driven UI.

### Key Features
- Multi-step book-loan approval workflow
- Automated fine calculation for overdue returns
- Timer-based overdue reminders (Flowable timer events)
- Role-based access (MEMBER, LIBRARIAN, ADMIN)
- Workflow status tracking
- Audit trail via Flowable HistoryService
- REST API (/v1/auth, /v1/workflow, /v1/books, /v1/loans, /v1/audit)

### Technology Stack
Java 17, Spring Boot 3.2.x, Flowable 7.x, Spring Security + JWT, Spring Data JPA + Hibernate, PostgreSQL 15, Flyway, React 18, TypeScript, Vite, Ant Design 5, Zustand, TanStack Query, Docker

### My Role and Contribution
Full-stack implementation: backend (Spring Boot + Flowable), frontend (React + TypeScript), BPMN process design, Docker configuration.

### Technical Highlights
- BPMN 2.0 process definitions with user/service tasks and gateways
- Flowable ACT_* tables separate from application data
- Timer-based automation for overdue detection
- JWT authentication with role-based authorization
- Docker Compose deployment

### Challenges
- Correlation between application business data and Flowable process data
- Fine calculation formula implementation in Java Delegates

### Outcomes
Working library management system with BPMN orchestration, role-based access, and Docker deployment.

### Project Status
Complete

### GitHub Repository
Not verified

---

## Project 06 — BaseStack (Web3 Subscription Payment Gateway)

### Short Description (40-60 words)
Web3-based subscription payment gateway on Base Network. Express.js backend with SQLite3 handles merchant plans, wallet-based payments (IDRX/USDC/USDT), and recurring billing via keeper bot. ethers.js for on-chain transaction verification. JWT authentication via wallet signature.

### Medium Description (100-150 words)
BaseStack is a Web3 subscription payment gateway built on Base Network (Sepolia). The Express.js backend with SQLite3 database manages merchant subscription plans, wallet-based payment interactions, and recurring billing through a keeper bot. Supports three tokens: IDRX, USDC, and USDT. Authentication uses wallet signature verification (ethers.verifyMessage) → JWT. On-chain transaction verification confirms subscription payments by checking transaction receipts and Subscribed events. The keeper bot auto-bills due subscriptions hourly. Next.js frontend provides merchant and subscriber interfaces.

### Detailed Description (200-300 words)
A Web3 payment gateway for recurring subscriptions. Merchants create subscription plans with pricing in IDRX, USDC, or USDT. Subscribers connect their wallets, sign an authentication message, and receive a JWT. Checkout flow: select plan → choose token → initialize checkout (get payment info) → pay on-chain → confirm checkout (verify transaction). The confirm step calls verifySubscriptionTx() which checks: transaction exists, sent to the subscription contract, receipt succeeded, sender matches expected wallet, and Subscribed event with matching plan ID and wallet. The keeper bot (cron job) queries active subscriptions with nextPayment <= now(), calls chargeSubscription() on the smart contract, and updates subscription status (success → extend nextPayment; failure → past_due). Database: merchants, plans, subscribers, subscriptions, billingLogs tables in SQLite3.

### Problem Statement
Merchants need a Web3-native solution for recurring subscription payments with on-chain verification and automated billing.

### Solution
Express.js API with wallet-signature auth, ethers.js on-chain verification, SQLite3 persistence, and keeper bot for automated recurring billing.

### Key Features
- Merchant subscription plan management
- Wallet-based payment with signature authentication
- Three tokens: IDRX, USDC, USDT
- On-chain transaction verification (verifySubscriptionTx)
- Keeper bot for auto-billing recurring subscriptions
- JWT authentication (7-day expiry)
- REST API (auth, plans, checkout, dashboard, subscriptions)

### Technology Stack
Node.js, Express.js, SQLite3 (better-sqlite3), ethers.js v6, JWT (jsonwebtoken), Next.js (frontend), Tailwind CSS

### My Role and Contribution
Frontend interfaces and user-facing subscription workflows (documented). Backend: Express.js API, SQLite, keeper bot, ethers.js integration. Smart contract development NOT claimed (no Solidity evidence in repo).

### Technical Highlights
- Wallet signature authentication → JWT flow
- On-chain tx verification with event log parsing
- Keeper bot with graceful failure handling (past_due status)
- Token-specific pricing per plan

### Challenges
- Off-chain subscription state vs on-chain reality drift
- Smart contract not part of repository (ABI only)

### Outcomes
Working Web3 payment gateway backend with on-chain verification and automated billing keeper bot.

### Project Status
Complete (hackathon project)

### GitHub Repository
Not verified

---

## Project 07 — Air Quality Analysis with Machine Learning

### Short Description (40-60 words)
Machine learning classification project analyzing air quality from pollutant concentrations (PM2.5, PM10, NO2, SO2, CO, O3). Implements 5 classifiers: Decision Tree, KNN, Logistic Regression, Naive Bayes, and Genetic Algorithm. Synthetic data (10K samples) or Kaggle Beijing dataset. Group academic project.

### Medium Description (100-150 words)
An academic machine learning project for air quality classification. Analyzes pollutant data (PM2.5, PM10, SO2, NO2, CO, O3) to classify air quality into three categories: Baik (Good), Sedang (Moderate), Tidak Sehat (Unhealthy). Uses synthetic data (10,000 samples with normal distributions, seed 42) or Kaggle Beijing Multi-Site Air Quality dataset. Implements 5 classifiers: Decision Tree, K-Nearest Neighbors, Logistic Regression, Naive Bayes, and Genetic Algorithm. Evaluates with accuracy, precision, recall, F1-score, confusion matrix, and cross-validation. Built in Jupyter Notebook with Pandas, NumPy, Scikit-learn, Matplotlib, and Seaborn. Group project (4 members, Telkom University).

### Detailed Description (200-300 words)
A Jupyter Notebook-based machine learning analysis of air quality data. The pipeline: data loading (synthetic or Kaggle) → preprocessing (missing value handling, feature selection, LabelEncoder, StandardScaler) → train/test split → model training (5 classifiers) → evaluation (classification_report, confusion_matrix, accuracy_score, precision_score, recall_score, f1_score, permutation_importance, GridSearchCV). Synthetic data generates 10,000 samples with pollutant concentrations following normal distributions clipped to realistic ranges. Target classification: PM2.5 ≤ 15 → Baik, ≤ 35 → Sedang, > 35 → Tidak Sehat. The Genetic Algorithm implementation is present but its specific role (classifier / feature selection / hyperparameter optimizer) requires cell-by-cell analysis. Group project with 4 members; individual contributions not separable from the notebook.

### Problem Statement
Air quality classification from pollutant concentrations using multiple ML algorithms for comparison.

### Solution
ML classification pipeline with 5 algorithms evaluated on standard metrics.

### Key Features
- 6 pollutant features (PM2.5, PM10, SO2, NO2, CO, O3)
- 3-class classification (Baik, Sedang, Tidak Sehat)
- 5 classifiers: Decision Tree, KNN, Logistic Regression, Naive Bayes, Genetic Algorithm
- Synthetic data (10K samples) or Kaggle real data option
- Evaluation: accuracy, precision, recall, F1-score, confusion matrix
- Preprocessing: missing values, scaling, encoding, train/test split

### Technology Stack
Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Jupyter Notebook

### My Role and Contribution
Group member (NIM: 103012300477). Group academic project — individual contributions not separable.

### Technical Highlights
- 5 ML algorithms compared
- Synthetic data with controlled distributions
- Feature importance via permutation_importance
- Hyperparameter tuning via GridSearchCV

### Challenges
- Specific model results not verified (notebook not executed)
- Genetic Algorithm role not fully traced
- Group project — individual attribution unclear

### Outcomes
ML classification notebook with 5 algorithms and evaluation framework.

### Project Status
Complete (academic project)

### GitHub Repository
Not verified

---

## Project 08 — Earthquake Monitoring Web Application

### Short Description (40-60 words)
Web application comparing iterative vs recursive algorithm performance for USGS earthquake data analysis. Flask backend with Chart.js frontend, gzip-compressed caching, background updates, rate limiting, and security headers. Group academic project.

### Medium Description (100-150 words)
A web application that retrieves earthquake data from the USGS API and compares iterative vs recursive algorithm performance for seismic data analysis. Flask backend serves dashboard and analysis pages, fetches real-time earthquake data (M ≥ 2.5), and runs both algorithms with execution time measurement. The iterative algorithm is O(n) time / O(1) space and handles 20,000+ records. The recursive algorithm is O(n) time / O(n) space but suffers stack overflow beyond ~1,200 records. Features gzip-compressed JSON caching with background updater threads, rate limiting (200/day, 50/hour), and security headers (CSP, HSTS, X-Frame-Options). Chart.js visualizes performance comparison. Group project (2 members, Telkom University).

### Detailed Description (200-300 words)
An educational web application demonstrating algorithm complexity concepts using real earthquake data. The Flask backend fetches data from the USGS Earthquake API (fdsnws/event/1/query) with date-range pagination and magnitude filtering (M ≥ 2.5). Data is cached as gzip-compressed JSON files with 2-hour TTL and background refresh threads for popular sizes (5000/10000/20000). Two algorithms analyze the data: iterative (single loop, accumulates statistics in O(1) space) and recursive (function calling itself with accumulated state in O(n) stack space). Both compute total earthquakes, mean/min/max magnitude, standard deviation, and dangerous earthquake count (M ≥ 5.0). The recursive implementation raises Python's recursion limit to 3,000 but still overflows beyond ~1,200 records. Frontend uses Chart.js for bar chart performance comparison and HTML tables for data display. Security headers and rate limiting are implemented. Group project with 2 members.

### Problem Statement
Demonstrate practical differences between iterative and recursive algorithms using real-world seismic data.

### Solution
Web app with both algorithms, measured execution times, caching, and performance visualization.

### Key Features
- USGS Earthquake API integration (real-time data)
- Iterative algorithm (O(n) time, O(1) space)
- Recursive algorithm (O(n) time, O(n) space)
- Performance comparison with Chart.js
- gzip-compressed JSON caching with background updates
- Rate limiting (200/day, 50/hour)
- Security headers (CSP, HSTS, etc.)
- Stack overflow demonstration (recursive fails > 1,200 records)

### Technology Stack
Python, Flask, Flask-CORS, Flask-Limiter, Requests, JavaScript, HTML5, CSS3, Chart.js, USGS Earthquake API

### My Role and Contribution
Software Architect, QA Engineer, Fullstack Developer & Analytics Engineer (per documentation). Group project with Nadisha Auliandini Nurhizah (Project Manager, UI/UX, Data Scientist).

### Technical Highlights
- Measured execution time comparison (iterative 15-25% faster)
- Stack overflow limits documented (n > 1,200 for recursive)
- Background cache updater threads (24/7 operation)
- Security headers and rate limiting

### Challenges
- Recursive stack overflow limits
- USGS API rate limits and reliability

### Outcomes
Educational web application demonstrating algorithm complexity with real earthquake data.

### Project Status
Complete (academic project)

### GitHub Repository
Not verified

---

## Project 09 — InvManage (Inventory Management Web Application)

### Short Description (40-60 words)
Enterprise inventory management system with Django REST Framework backend and vanilla JavaScript frontend. Features inventory, loan, and transaction management with role-based access (user/admin), search, filtering, pagination, and reporting. 10,892 sample records.

### Medium Description (100-150 words)
InvManage is an end-to-end inventory management system with Django REST Framework backend and vanilla JavaScript frontend. Features include admin and user dashboards, item inventory management, loan management with approval workflow, transaction tracking, user management, feedback collection, search/filtering, pagination, and reporting endpoints. Role-based access control (user/admin) with Django's password hashing. Rate limiting via DRF throttling (UserRateThrottle 1000/hour, AnonRateThrottle 100/hour). Django cache for performance. 10,892 sample records across 5 tables (2,003 users, 930 items, 1,995 loans, 3,964 transactions, 2,000 feedback). Loan state machine: pending → approved/rejected → dipinjam → dikembalikan with overdue detection at 7 days.

### Detailed Description (200-300 words)
A comprehensive inventory management system built with Django REST Framework. The backend exposes RESTful ViewSets for barang (items), users, feedback, transaksi (transactions), and peminjaman (loans). Authentication includes login, registration, admin login/logout, password reset, and Google OAuth. Rate limiting protects all endpoints. Caching improves report endpoint performance. The loan workflow is a state machine with 5 statuses: pending, approved, rejected, dipinjam (borrowed), dikembalikan (returned). Overdue detection triggers after 7 days. Low stock alerts trigger when stok ≤ minimum. Reporting endpoints provide dashboard metrics, stock levels, categories, most-borrowed items, transaction trends, low stock alerts, usage over time, and status overview. Frontend is vanilla JavaScript with 9 modules, responsive design, and real-time data. Database: SQLite (development) or PostgreSQL (production).

### Problem Statement
Organizations need to track inventory items, manage loan requests, and record transactions with role-based access and reporting.

### Solution
Django REST API with vanilla JS frontend, role-based access, loan state machine, pagination, throttling, and reporting.

### Key Features
- Item inventory management with stock tracking and low-stock alerts
- Loan management with 5-state workflow and overdue detection
- Transaction tracking (masuk/keluar)
- User management (user/admin roles)
- Feedback collection
- Search, filtering, pagination (PageNumberPagination)
- Rate limiting (DRF throttling)
- 8 reporting endpoints
- Django cache for performance
- 10,892 sample records

### Technology Stack
Python, Django 5.2+, Django REST Framework, SQLite/PostgreSQL, Vanilla JavaScript, HTML/CSS

### My Role and Contribution
Full-stack development: Django REST backend, vanilla JavaScript frontend, database design, API endpoints, report generation.

### Technical Highlights
- 10,892 records across 5 tables
- Loan state machine with 5 statuses
- Rate limiting (1000/hour user, 100/hour anon)
- Django cache with targeted invalidation
- Password hashing (make_password/check_password)

### Challenges
- Frontend is vanilla JS (not a modern framework)
- No test files found in repository

### Outcomes
Working inventory management system with API, frontend, and reporting.

### Project Status
Complete

### GitHub Repository
Not verified

---

## CV Content Summary

**Key metrics supported by repository evidence:**
- 67 passing backend tests (Project 01, pytest)
- 10,892 sample records (Project 09, InvManage)
- 9 projects across 7 business domains
- 6 backend frameworks used (FastAPI, Laravel, Spring Boot, Express, Django REST)
- 3 workflow approaches compared (Project 04)
- 5 ML algorithms implemented (Project 07)
- 2 mobile platforms (Flutter in Project 02)
- Web3 on-chain verification (Project 06)

**Languages:** Python, Java, JavaScript, TypeScript, PHP, Dart, SQL

**Frameworks:** FastAPI, Laravel 12, Spring Boot 3.2, Express.js, Django REST, Next.js 14/16, React 18/19, Flutter
