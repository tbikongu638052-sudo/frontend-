export const INITIAL_SKILLS = [
  {
    id: 'antigravity-workflows',
    name: 'Antigravity Workflows',
    category: 'ai-ml',
    version: '1.4.0',
    description: 'Orchestrate multiple Antigravity skills through guided workflows for SaaS MVP delivery, security audits, and agent pipelines.',
    triggers: ['/workflow', 'build mvp', 'orchestrate agents', 'guided delivery'],
    tags: ['Orchestration', 'Multi-Agent', 'Workflows', 'SaaS'],
    author: 'DeepMind / Antigravity',
    usageCount: 3840,
    rating: 4.9,
    isPopular: true,
    skillContent: `# Antigravity Workflows Skill

## Overview
Comprehensive framework for orchestrating complex agentic flows across design, architecture, implementation, and QA.

### Workflow Phases
1. **Discovery & Architecture Mapping**
2. **Component & Domain Breakdown**
3. **Automated TDD Test Matrix Generation**
4. **Autonomous Parallel Subagent Execution**
5. **Interactive UI / UX Validation & Telemetry**

### Slash Command Triggers
- \`/workflow start saas-mvp\`
- \`/workflow run security-hardening\`
- \`/workflow status\`
`
  },
  {
    id: 'agent-orchestration-improve-agent',
    name: 'Agent Self-Improvement Engine',
    category: 'ai-ml',
    version: '2.1.0',
    description: 'Systematic improvement of existing agents through automated performance analysis, prompt tuning, and continuous iteration.',
    triggers: ['improve agent', 'optimize prompt', 'agent evaluation'],
    tags: ['Evaluation', 'Prompt Engineering', 'Optimization'],
    author: 'Antigravity Team',
    usageCount: 2950,
    rating: 4.8,
    isPopular: true,
    skillContent: `# Agent Self-Improvement Engine

## Objectives
- Automated evaluation scoring across benchmark datasets.
- Context-aware token compression and prompt reduction.
- Dynamic error pattern mitigation and adaptive instructions.
`
  },
  {
    id: 'react-ui-patterns',
    name: 'React UI Patterns & State Mastery',
    category: 'frontend-web',
    version: '3.0.0',
    description: 'Modern React UI patterns for loading states, error boundaries, glassmorphism, optimistic UI, and modular component architectures.',
    triggers: ['react pattern', 'ui state', 'loading states', 'optimistic ui'],
    tags: ['React', 'UI/UX', 'Glassmorphism', 'Design System'],
    author: 'Frontend Guild',
    usageCount: 5120,
    rating: 5.0,
    isPopular: true,
    skillContent: `# React UI Patterns

## Best Practices
- Compound Component Pattern for flexible composition.
- Render Props & Custom Hook encapsulation.
- Optimistic state updates with rollback guarantees.
- Zero-layout-shift skeleton loaders.
`
  },
  {
    id: 'tailwind-patterns',
    name: 'Modern CSS & Design Tokens',
    category: 'frontend-web',
    version: '2.4.0',
    description: 'Modern design token architecture, container queries, CSS variables, dark/light themes, and high-performance micro-animations.',
    triggers: ['css tokens', 'theme engine', 'animations', 'responsive ui'],
    tags: ['CSS3', 'Tokens', 'Responsive', 'Micro-Interactions'],
    author: 'UI/UX Guild',
    usageCount: 4210,
    rating: 4.9,
    isPopular: false,
    skillContent: `# Modern CSS Architecture

## Design Token Contract
- HSL Tailored Color Gradients
- Dynamic Backdrop Blur Filters
- Smooth Cubic-Bezier Keyframe Easing
`
  },
  {
    id: 'api-security-best-practices',
    name: 'API Security & OWASP Hardening',
    category: 'security-pentest',
    version: '4.2.0',
    description: 'Implement secure API patterns including JWT/mTLS, rate limiting, sanitization, CSRF/XSS mitigations, and OWASP 2026 compliance.',
    triggers: ['api security', 'owasp audit', 'rate limiting', 'sanitize input'],
    tags: ['Security', 'OWASP', 'PenTest', 'Zero Trust'],
    author: 'SecOps Guild',
    usageCount: 3100,
    rating: 4.9,
    isPopular: true,
    skillContent: `# API Security Best Practices

## Checkpoints
- Token rotation & secure HTTP-only cookies
- Distributed sliding-window rate limiting via Redis/Memory
- Schema validation & SQL/XSS injection firewalls
`
  },
  {
    id: 'cloud-penetration-testing',
    name: 'Cloud Security & Pentest Auditor',
    category: 'security-pentest',
    version: '1.9.0',
    description: 'Automate reconnaissance, IAM permission graph audits, S3/Storage bucket exposure detection, and cloud attack tree modeling.',
    triggers: ['cloud pentest', 'iam audit', 'threat model'],
    tags: ['Cloud', 'AWS', 'Azure', 'IAM', 'Security'],
    author: 'RedTeam Labs',
    usageCount: 1980,
    rating: 4.7,
    isPopular: false,
    skillContent: `# Cloud Pentest Auditor

## Capabilities
- Multi-cloud asset discovery & configuration drift detection.
- IAM privilege escalation path simulation.
`
  },
  {
    id: 'fastapi-router-py',
    name: 'FastAPI Production Scaler',
    category: 'backend-api',
    version: '2.5.0',
    description: 'Production-ready Python FastAPI architecture with async routers, dependency injection, Pydantic v2 schemas, and OpenTelemetry.',
    triggers: ['fastapi', 'python backend', 'async router', 'pydantic'],
    tags: ['Python', 'FastAPI', 'Pydantic', 'Async'],
    author: 'Backend Team',
    usageCount: 3420,
    rating: 4.8,
    isPopular: true,
    skillContent: `# FastAPI Production Scaler

## Features
- Structured APIRouter modularization
- Asynchronous database pooling with SQLAlchemy 2.0
- Built-in Prometheus telemetry and request ID propagation
`
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL Enterprise Tuning',
    category: 'database-data',
    version: '3.1.0',
    description: 'High-performance PostgreSQL schema design, indexing strategies (BRIN, GIN, GiST), connection pooling, and query optimization.',
    triggers: ['postgres', 'database indexing', 'query tuning', 'schema design'],
    tags: ['PostgreSQL', 'SQL', 'Indexing', 'Optimization'],
    author: 'Data Platform',
    usageCount: 4670,
    rating: 4.9,
    isPopular: true,
    skillContent: `# PostgreSQL Enterprise Tuning

## Highlights
- Query execution plan analysis (\`EXPLAIN ANALYZE\`)
- Partitioning tables for time-series and large data volume
- Zero-downtime schema migrations
`
  },
  {
    id: 'k8s-manifest-generator',
    name: 'Kubernetes & Helm Architect',
    category: 'devops-cloud',
    version: '2.0.0',
    description: 'Generate production Kubernetes manifests, Helm charts, HPA scaling policies, Istio service mesh configs, and GitOps workflows.',
    triggers: ['k8s', 'kubernetes', 'helm chart', 'service mesh', 'gitops'],
    tags: ['Kubernetes', 'DevOps', 'Helm', 'Istio', 'GitOps'],
    author: 'Infra Core',
    usageCount: 2890,
    rating: 4.8,
    isPopular: false,
    skillContent: `# Kubernetes & Helm Architect

## Specifications
- Production resource requests/limits and topology spread constraints
- Automatic TLS ingress via Cert-Manager
- GitOps ArgoCD integration templates
`
  },
  {
    id: 'tdd-workflow',
    name: 'TDD Autonomous Test Engine',
    category: 'testing-qa',
    version: '3.3.0',
    description: 'Autonomous Test-Driven Development orchestrator: RED-GREEN-REFACTOR cycle with property-based testing and mutation analysis.',
    triggers: ['tdd', 'unit tests', 'test coverage', 'refactor'],
    tags: ['Testing', 'TDD', 'Jest', 'Vitest', 'Quality'],
    author: 'QA Guild',
    usageCount: 3760,
    rating: 5.0,
    isPopular: true,
    skillContent: `# TDD Workflow

## Lifecycle
1. **Red Phase**: Write failing specification tests matching requirements.
2. **Green Phase**: Implement the minimal, clean code to satisfy assertions.
3. **Refactor Phase**: Optimize architecture, maintainability, and readability.
`
  },
  {
    id: 'domain-driven-design',
    name: 'Domain-Driven Design (DDD) Modeler',
    category: 'architecture',
    version: '2.2.0',
    description: 'Design Bounded Contexts, Aggregates, Value Objects, Domain Events, and Ubiquitous Language mappings for complex domains.',
    triggers: ['ddd', 'domain driven design', 'bounded context', 'aggregate'],
    tags: ['Architecture', 'DDD', 'Clean Architecture', 'CQRS'],
    author: 'Architecture Board',
    usageCount: 2450,
    rating: 4.9,
    isPopular: false,
    skillContent: `# Domain-Driven Design (DDD)

## Core Principles
- Strict separation of Domain, Application, and Infrastructure layers.
- Invariant enforcement inside Aggregate Roots.
- Asynchronous Domain Event dispatching.
`
  },
  {
    id: 'stripe-automation',
    name: 'Stripe SaaS Billing Engine',
    category: 'automation-saas',
    version: '3.0.0',
    description: 'Automate subscription lifecycles, usage-based metered billing, webhook reconciliation, and customer portal integrations.',
    triggers: ['stripe', 'saas billing', 'subscriptions', 'webhooks'],
    tags: ['Payments', 'Stripe', 'SaaS', 'Billing'],
    author: 'Fintech Hub',
    usageCount: 4100,
    rating: 4.9,
    isPopular: true,
    skillContent: `# Stripe SaaS Billing Engine

## Key Capabilities
- Idempotent webhook event dispatchers.
- Tiered, metered, and seat-based licensing models.
- Graceful payment retry and dunning logic.
`
  }
];
