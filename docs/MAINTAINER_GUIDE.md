# Maintainer guide

This project is meant to be clear, reviewable, and easy for contributors to work on. The goal is not just to ship code, but to make the project trustworthy enough for long-term maintenance.

## Maintainer principles

- Keep documentation synchronized with code changes.
- Require clear issue reproduction steps for bugs.
- Require a rationale for new features and protocol changes.
- Prefer small, reviewable pull requests over broad rewrites.
- Maintain a clear security disclosure path.

## Contribution quality bar

Before merge, contributors should be able to answer:

1. What problem does this solve?
2. Why is the solution correct?
3. How was it validated?
4. What are the risks or follow-up work?

## Review expectations

Every PR should include:

- summary of the change
- testing performed
- documentation updates when needed
- links to related issues

## Release discipline

- treat production and testnet configurations separately
- verify contract behavior before promoting changes
- document migration or deployment considerations clearly
- keep security-sensitive updates narrow and explicit

## Community expectations

We value respectful, evidence-based collaboration. Maintainers should prefer constructive feedback, explicit acceptance criteria, and concise technical discussion.
