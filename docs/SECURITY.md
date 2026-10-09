# Security Policy

## Supported Versions

We provide security updates for the following supported versions:

| Version | Supported |
| ------- | --------- |
| 0.1.x   | ✅        |
| < 0.1.0 | ❌        |

## Reporting a Vulnerability

Please do not open a public issue for a security vulnerability. Instead:

1. Use GitHub Security Advisories for private disclosure, or
2. Email the maintainers at security@northbound-dev.com with a detailed report.

Please include:
- affected component and version
- reproduction steps or exploit details
- affected environment and impact
- any suggested remediation or proof of concept

We aim to respond within 48 hours and keep the reporter informed during triage and remediation.

## Security Review Process

When a report is received, maintainers will:

1. Acknowledge the report
2. Assess severity and safety impact
3. Reproduce and validate the issue in a controlled environment
4. Create and test a fix
5. Prepare a patch release and advisory if needed
6. Recognize the reporter where appropriate

## Security Hardening Expectations

This project follows a security-first design for Soroban development:

### Contract Security
- explicit admin and authorization logic
- predictable state updates with no hidden mutation
- safe string handling and validation
- minimal contract surface area
- dependency hygiene and version pinning

### Frontend Security
- no secrets committed to source code
- environment variables isolated to deployment configuration
- explicit network selection and contract address validation
- safe handling of user-provided values in the UI

### CI and Dependency Security
- automated testing on every change
- dependency review and audit workflows
- reproducible builds and versioned tooling
- review before merge to production branches

## Dependency Monitoring

We monitor known vulnerabilities using:
- GitHub Dependabot
- cargo audit / RustSec advisory checks
- npm audit for frontend dependencies

If a dependency issue is identified, we will evaluate, remediate, and disclose according to the severity and impact.

## Responsible Disclosure

Please refrain from publicly disclosing vulnerabilities until a fix has been released or the maintainers confirm disclosure is safe. This keeps users protected and allows a coordinated response.
