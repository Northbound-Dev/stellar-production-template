# Stellar Production Template

A production-oriented starter for building Stellar Soroban applications with a strong emphasis on security, maintainability, testing, and contributor clarity.

## Why this project is maintainable

This repository is structured to be clear, reviewable, and trustworthy for public use. It demonstrates:

- a secure contract baseline with explicit ownership patterns
- transparent deployment and network configuration guidance
- serious documentation standards for contributors and maintainers
- contributor workflows that emphasize issue quality and PR review readiness
- CI and repository hygiene expected in public OSS projects

## Project structure

```text
stellar-production-template/
├── contracts/              # Soroban smart contract code and tests
├── frontend/               # React frontend and documentation landing page
├── scripts/                # Local validation and deployment helpers
├── docs/                   # Architecture, security, contribution, roadmap, and maintainer docs
├── .github/                # Issue templates, PR template, CODEOWNERS, dependabot config
├── .env.example            # Example environment variables for deployment
├── .gitignore              # Safe project hygiene defaults
├── LICENSE                 # MIT license
├── README.md               # Project overview and onboarding
└── .github/workflows/      # CI validation pipeline
```

## Maintainer review checklist

This project is designed to satisfy the expectations of a serious maintainer review board:

- clear purpose and scope
- documented architecture and operational flow
- security reporting path and policy
- issue and PR templates
- roadmap and maintainer-facing documentation
- reproducible validation and dependency maintenance

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

### Run validation

```bash
cd contracts
cargo test

cd ../frontend
npm test -- --watch=false
```

### Local script

```bash
./scripts/test.sh
```

## Security and operational standards

- explicit admin handling and safe state patterns in contracts
- documented vulnerability disclosure process
- dependency review via GitHub automation
- environment-specific deployment guidance
- public repo standards for issue quality, PR discipline, and maintainership

## Documentation index

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)
- [docs/SECURITY.md](docs/SECURITY.md)
- [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)
- [docs/MAINTAINER_GUIDE.md](docs/MAINTAINER_GUIDE.md)
- [docs/ROADMAP.md](docs/ROADMAP.md)

## Contributing

We welcome bug reports, feature suggestions, and pull requests. Please read the contribution guide before opening a new issue or PR.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).

## Acknowledgments

- [Stellar Development Foundation](https://stellar.org)
- [Soroban documentation](https://developers.stellar.org/docs/)
- The broader Stellar ecosystem and open-source contributor community
