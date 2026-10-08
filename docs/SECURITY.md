# Security Policy

## Supported Versions

We provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |
| < 0.1.0 | :x:                |

## Reporting a Vulnerability

To report a security vulnerability, please use the [GitHub Security Advisory](https://github.com/Northbound-Dev/stellar-production-template/security/advisories) process.

Alternatively, you can email security@northbound-dev.com with details of the vulnerability.

Please do not disclose security vulnerabilities publicly until they have been addressed by the maintainers.

## What Happens After You Report

When you submit a security report, the maintainers will:

1. Acknowledge receipt of your vulnerability report
2. Investigate the vulnerability and create a fix
3. Prepare a security advisory and release
4. Credit you for the discovery (if desired)

We aim to respond to all security reports within 48 hours.

## Security Best Practices

This template incorporates several security best practices for Stellar Soroban development:

### Contract Security
- Access controls on administrative functions
- Integer overflow/underflow protection
- Input validation and sanitization
- External call safety checks
- Contract size optimization

### Development Security
- Dependency scanning in CI
- Environment variable protection
- Secure defaults
- Regular dependency updates

### Operational Security
- Network-specific configuration
- Deployment verification steps
- Monitoring and alerting recommendations
- Backup and recovery procedures

## Dependencies

We monitor our dependencies for security vulnerabilities using:
- GitHub Dependabot
- RustSec advisory database
- npm audit

If you discover a vulnerability in one of our dependencies, please report it through the appropriate channel for that dependency.
