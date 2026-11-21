# Project 04 — Leave Management Workflow Engine (Comparative Implementation)

**Repository:** `/Users/user/Documents/leave-workflow-comparison/`
**Confidence:** VERIFIED

## Executive Summary

A comparative implementation and evaluation of three workflow approaches for employee leave management:
1. **Manual State Machine** — Java enum + if-else transitions
2. **Flowable BPM** — BPMN 2.0 process engine
3. **Deboot** — Service-based Flowable usage (no BPMN XML)

All three use Spring Boot 3.2, React + TypeScript frontend, and PostgreSQL. Evaluated on code complexity, maintainability, scalability, and enterprise suitability.

**Period:** February 2026 – June 2026
**Organization:** PT. Len Industri (Persero)
**Location:** Bandung, Indonesia

## Technology Stack (VERIFIED from README)

| Component | Manual | Flowable | Deboot |
|-----------|--------|----------|--------|
| Backend | Spring Boot 3.2.0 | Spring Boot 3.2.0 | Spring Boot 3.2.0 |
| BPM Engine | None | Flowable 6.8.0 | Flowable 6.8.0 |
| ORM | Spring Data JPA | Spring Data JPA | Spring Data JPA |
| Database | PostgreSQL | PostgreSQL | PostgreSQL |
| Security | Spring Security + JWT | Spring Security + JWT | Spring Security + JWT |
| Frontend | React 18 + TypeScript + Vite + Tailwind | Same | Same |
| Port | 8100 | 8200 | 8300 |

## Workflow (VERIFIED from README)

```
[Employee Submit] → [Manager Approval] → [HR Approval] → [Final Status]
                           └── REJECT ──────────────────┘
```

**Actors:** Employee, Manager, HR
**Leave Types:** Annual, Sick, Personal, Maternity
**Statuses:** PENDING, MANAGER_APPROVED, MANAGER_REJECTED, HR_APPROVED, HR_REJECTED

## Three Approaches (VERIFIED from README + BPMN)

### 1. Manual State Machine (ports 8100/3100)

- State defined as Java `enum LeaveStatus` with 5 values
- Transitions via if-else validation in service layer
- `LeaveRequestService.managerApproval()` validates current status == PENDING before transition
- Audit trail implemented manually via `AuditLog` entity
- **LOC:** 1,731 backend + 1,364 frontend = 3,095 total

### 2. Flowable BPM (ports 8200/3200)

- BPMN 2.0 XML definition (`leaveApproval` process)
- Start Event → Manager Approval (UserTask) → Exclusive Gateway → HR Approval (UserTask) → Exclusive Gateway → End Events
- `RuntimeService.startProcessInstanceByKey("leaveApproval", ...)` starts process
- `TaskService.complete()` completes user tasks with variables
- Flowable auto-creates ACT_* tables (ACT_RE_PROCDEF, ACT_RU_TASK, ACT_HI_PROCINST, etc.)
- **LOC:** 1,563 backend + 1,364 frontend + 96 BPMN = 3,023 total

### 3. Deboot Service-Based (ports 8300/3300)

- Uses Flowable engine directly via Java service (`DebootLeaveWorkflowService`)
- No BPMN XML file — process definition key used dynamically
- `RuntimeService` + `TaskService` called directly from service methods
- Same Flowable database tables auto-created
- **LOC:** 1,482 backend + 1,364 frontend = 2,846 total

**Note:** "Deboot" is NOT a separate framework — it's a service-based approach using Flowable library directly (per README Section 7.3.1).

## LOC Comparison (VERIFIED from README)

| Version | Backend (Java) | Frontend (TS) | BPMN/XML | Total |
|---------|---------------|---------------|----------|-------|
| Manual | 1,731 | 1,364 | - | 3,095 |
| Flowable | 1,563 | 1,364 | 96 | 3,023 |
| Deboot | 1,482 | 1,364 | - | 2,846 |

## API Endpoints (VERIFIED from README)

| Method | Endpoint | Role | Purpose |
|--------|----------|------|---------|
| POST | /api/auth/register | Public | Register user |
| POST | /api/auth/login | Public | Login |
| GET | /api/leave-requests | Employee/Manager/HR | List requests |
| GET | /api/leave-requests/my | Employee | My requests |
| POST | /api/leave-requests | Employee | Submit request |
| GET | /api/leave-requests/{id} | Employee/Manager/HR | Detail |
| POST | /api/leave-requests/{id}/manager-approval | Manager | Manager approval |
| POST | /api/leave-requests/{id}/hr-approval | HR | HR approval |
| DELETE | /api/leave-requests/{id} | Employee | Cancel |

## Default Credentials (VERIFIED from README)

| Role | Username | Password |
|------|----------|----------|
| Employee | employee1-3 | password123 |
| Manager | manager1-2 | password123 |
| HR | hr1-2 | password123 |

## BPMN Process Definition (VERIFIED from `bpmn/workflowPengajuanCuti-2.bpmn`)

Process ID: `workflowPengajuanCuti`
- Start Event → Submit Leave Request (Employee, candidateGroups: employee)
- → Manager Approval (candidateGroups: manager)
- → Exclusive Gateway "Approved by Manager?"
  - → true → HR Approval (candidateGroups: hr)
  - → false → End: Rejected by Manager
- → Exclusive Gateway "Approved by HR?"
  - → true → End: Approved by HR
  - → false → End: Rejected by HR

## Comparative Analysis (VERIFIED from README)

| Criterion | Manual | Flowable | Deboot |
|-----------|--------|----------|--------|
| State Management | Enum-based | BPMN Engine | Flowable API |
| Audit Trail | Manual | Built-in History | Built-in History |
| Visualization | None | BPMN Diagram | None |
| Learning Curve | Low | High | Medium |
| Dev Speed | Slow | Medium | Fast |
| Scalability | Low | High | High |
| Vendor Lock-in | None | Flowable | Flowable |

## Personal Contribution

- Backend Developer Intern — R&D Workflow Engine Comparison at PT. Len Industri
- Implemented all three approaches and conducted comparative analysis
- NIM referenced: 103012300477 (from related group project context)

## Limitations (VERIFIED from README)

- No performance benchmarks exist (explicitly stated: "Do not declare one approach superior without supporting evidence")
- Manual version has no visualization
- Flowable has high learning curve
- Deboot has no visualization but uses Flowable engine
