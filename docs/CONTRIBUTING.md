# Contributing to Stellar Production Template

Thank you for considering contributing to this project! We welcome contributions from the community.

## How to Contribute

### Reporting Issues
Before submitting an issue, please check if it has already been reported. When submitting an issue, please include:
- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior vs. actual behavior
- Any relevant screenshots or error messages

### Suggesting Features
Feature requests are welcome! Please provide:
- A clear description of the feature
- Why it would be useful to the Stellar ecosystem
- Any potential implementation considerations

### Submitting Changes
Please follow these steps to contribute:

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/stellar-production-template.git
   ```
3. Create a new branch for your changes:
   ```bash
   git checkout -b feature-or-fix-name
   ```
4. Make your changes
5. Ensure your changes follow the project's coding standards
6. Add or update tests as needed
7. Make sure all tests pass
8. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
9. Push to your fork:
   ```bash
   git push origin feature-or-fix-name
   ```
10. Submit a pull request to the main repository

## Development Setup

To set up the development environment:

1. Install the [Stellar CLI](https://developers.stellar.org/docs/tools/cli)
2. Install [Rust & Cargo](https://www.rust-lang.org/tools/install)
3. Install [Node.js](https://nodejs.org/) (v18+ recommended)
4. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/Northbound-Dev/stellar-production-template.git
   cd stellar-production-template
   
   # For contracts
   cd contracts
   cargo build
   
   # For frontend
   cd ../frontend
   npm install
   ```

## Coding Standards

### Rust
- Follow the [Rust API Guidelines](https://rust-lang-nursery.github.io/api-guidelines/)
- Use `rustfmt` for code formatting
- Use `clippy` for linting
- Write comprehensive tests

### JavaScript/React
- Follow [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use ESLint and Prettier for code formatting
- Write tests for new functionality
- Keep components small and focused

### Documentation
- Keep documentation up-to-date with changes
- Write clear, concise commit messages
- Update README.md when adding/removing major features
- Document any breaking changes

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update documentation as needed
3. The PR will be reviewed by maintainers
4. Address any feedback from reviewers
5. Once approved, your PR will be merged

## Code of Conduct

Please note that this project is released with a Contributor Covenant Code of Conduct. By participating in this project, you agree to abide by its terms.

## Getting Help

If you need help with your contribution, please:
- Check the existing documentation
- Look at similar contributions in the project's history
- Ask questions in the issue tracker
