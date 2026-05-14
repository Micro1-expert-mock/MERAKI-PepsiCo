# MERAKI-PepsiCo

## What this repo is
A lightweight record of the 2026 North America mobile optimization program.  
This repo captures **scope, decisions, and measurement**, not the full website codebase.

## Why it exists
- Reduce mobile friction on high-intent journeys
- Improve Core Web Vitals on mobile
- Ensure changes are measurable and auditable
- Protect consent integrity and paid-media performance

## Scope
**Included**
- Mobile web (iOS, Android, and Linux)
- In-scope brand templates
- Browse → PDP, Store Locator start, Newsletter sign-up

**Excluded**
- Paid-media landing pages
- Consent behavior changes
- Desktop experiences

## How success is measured
- Pre vs. post comparison with weekly checkpoints
- Primary metrics: Bounce rate, INP, CLS, LCP
- Instrumentation must be normalized before gains are attributed

## Guardrails
- Consent behavior must not change
- Accessibility verification required
- Paid pages are a protected cohort
- Rollback plan required for release

## Repo contents
- `/decision-log` – Key decisions and trade-offs
- `/instrumentation` – Canonical event definitions
- `/performance` – Baselines and target bands
- `/release-checks` – Mobile release readiness checklist

## Timeline
- Kickoff: 2026-02-12  
- Scope lock: 2026-03-06  
- Target completion: 2026-06-15  

## Operating principle
If a change cannot be measured consistently, it does not ship.
