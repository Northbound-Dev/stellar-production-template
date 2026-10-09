# Stellar Production Template

A polished, maintainable starter for building Stellar Soroban applications with a strong emphasis on security, testability, documentation, and deployment discipline.

## Why this project is submission-ready

This project is intentionally structured to be clear, auditable, and contributor-friendly. It gives maintainers and reviewers:

- a secure smart contract baseline
- transparent architecture and deployment guidance
- a documented contributor and security workflow
- a clean front-end landing page for documentation and onboarding
- CI coverage and release-minded project hygiene

## Project structure

```text
stellar-production-template/
├── contracts/            # Soroban smart contract code and tests
├── frontend/             # React app for docs and dApp UI
├── scripts/              # Local validation and deployment helpers
├── docs/                 # Contributor, deployment, security, and architecture docs
├── .github/workflows/    # CI automation
├── .env.example          # Environment variable template
├── LICENSE               # MIT license
├── README.md             # Project overview and developer onboarding
└── .gitignore            # Safe repo hygiene defaults
```

## Quick start

### Prerequisites

- [Rust + Cargo](https://www.rust-lang.org/tools/install)
- [Stellar CLI](https://developers.stellar.org/docs/tools/cli)
- [Node.js 18+](https://nodejs.org/)
- [Git](https://git-scm.com/)

### Install

```bash
git clone https://github.com/Northbound-Dev/stellar-production-template.git
cd stellar-production-template

cd contracts
cargo build

cd ../frontend
npm install
```

### Run tests

```bash
cd contracts
cargo test

cd ../frontend
npm test -- --watch=false
```

### Local validation script

```bash
./scripts/test.sh
```

## Maintainer-focused project standards

### Security

- explicit contract admin handling
- safe ownership boundaries and state checks
- documented vulnerability reporting
- dependency monitoring guidance

### Testing

- Rust unit tests for contract logic
- frontend build/test readiness
- CI pipeline for reproducible validation

### Deployment discipline

- documented environment-specific configuration
- public deployment flow for testnet and mainnet
- verification steps and rollback references

### Documentation

- architecture overview
- contribution process
- deployment guide
- security policy

## Documentation links

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)
- [docs/SECURITY.md](docs/SECURITY.md)
- [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)

## Contributing

We welcome bug reports, feature requests, and pull requests. Please read the contributor guide before opening a PR.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).

## Acknowledgments

- [Stellar Development Foundation](https://stellar.org)
- [Soroban documentation](https://developers.stellar.org/docs/)
- The broader Stellar and open-source community
