# Deployment Guide

## Overview

This document provides guidance for deploying applications built with the Stellar Production Template to different Stellar networks.

## Supported Networks

- **Local**: Stellar container for development and testing
- **Testnet**: Public Stellar testnet for validation
- **Mainnet**: Public Stellar mainnet for production use

## Prerequisites

Before deploying, ensure you have:

1. [Stellar CLI](https://developers.stellar.org/docs/tools/cli) installed
2. A funded account on the target network (for transaction fees)
3. The contract compiled and tested
4. Environment variables configured appropriately

## Environment Configuration

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Then edit the `.env` file to set:
- `STELLAR_NETWORK`: Target network (testnet/mainnet)
- `STELLAR_SECRET_KEY`: Secret key for deployment account
- Other network-specific variables as needed

## Deployment Process

### 1. Local Development Deployment

For local testing using Stellar container:

```bash
# Start local testnet
stellar container start

# In another terminal, deploy contracts
cd contracts
stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/stellar_contracts.wasm \
  --source <your-account-address> \
  --network local
```

### 2. Testnet Deployment

To deploy to the Stellar testnet:

```bash
# Using the deployment script
./scripts/deploy.sh --network testnet

# Or manually
stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/stellar_contracts.wasm \
  --source <your-account-address> \
  --network testnet
```

### 3. Mainnet Deployment

⚠️ **Mainnet deployment requires extra caution**:

```bash
# Using the deployment script
./scripts/deploy.sh --network mainnet

# Or manually (after thorough testing on testnet)
stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/stellar_contracts.wasm \
  --source <your-account-address> \
  --network mainnet
```

## Deployment Scripts

The template includes helper scripts in the `scripts/` directory:

### `deploy.sh`
Deploys contracts to a specified network:
```bash
./scripts/deploy.sh --network testnet
./scripts/deploy.sh --network mainnet
```

### `initialize.sh`
Initializes deployed contracts with admin settings:
```bash
./scripts/initialize.sh --network testnet --admin <admin-address>
```

### `verify.sh`
Verifies contract deployment and functionality:
```bash
./scripts/verify.sh --network testnet
```

## Configuration Files

### `.env.example`
Template for environment variables:
```
# Network configuration
STELLAR_NETWORK=testnet
STELLAR_RPC_URL=https://horizon-testnet.stellar.org
STELLAR_NETWORK_PASSPHRASE=Test SDF Network ; September 2015

# Account information (keep secret!)
STELLAR_SECRET_KEY=SAXXXXXXX...
STELLAR_PUBLIC_KEY=GAXXXXXXX...

# Contract addresses (set after deployment)
CONTRACT_ID=
```

### Network-specific configs
Consider creating separate `.env` files for different environments:
- `.env.testnet`
- `.env.mainnet`
- `.env.local`

## Verification Steps

After deployment, verify your contracts:

1. **Check contract existence**:
   ```bash
   stellar contract --id <CONTRACT_ID> --network <network>
   ```

2. **Test basic functionality**:
   ```bash
   stellar contract invoke \
     --id <CONTRACT_ID> \
     --network <network> \
     --source <your-account> \
     -- \
     hello --to "World"
   ```

3. **Verify events** (if applicable):
   ```bash
   stellar ledger network
   ```

## Troubleshooting

### Common Issues

1. **Insufficient funds**:
   - Ensure your account has enough XLM for transaction fees
   - Testnet: Get free XLM from [Stellar Laboratory Friendbot](https://www.stellar.org/developers/learn/tools/laboratory/)
   - Mainnet: Purchase XLM from an exchange

2. **Permission denied**:
   - Verify you're using the correct secret key
   - Ensure the account has proper authorization

3. **Contract size too large**:
   - Optimize your Rust code
   - Remove unused dependencies
   - Consider splitting functionality across multiple contracts

4. **Network mismatch**:
   - Double-check your network configuration
   - Ensure you're using the correct passphrase

## Rollback Procedures

If you need to rollback a deployment:

1. **Stop using the contract immediately**
2. **Deploy a fixed version to a new contract ID**
3. **Update frontend/configuration to point to new contract**
4. **Communicate the change to users**
5. **Consider maintaining a migration path for data**

## Best Practices

### Before Deployment
- Test extensively on local testnet
- Run full test suite
- Have another developer review your code
- Check gas costs and optimize if needed
- Prepare rollback plan

### During Deployment
- Deploy during low-traffic periods if possible
- Have monitoring ready
- Keep detailed logs of the deployment process
- Verify immediately after deployment

### After Deployment
- Monitor contract usage and performance
- Set up alerts for unusual activity
- Plan for future upgrades
- Document the deployment for team reference

## Additional Resources

- [Stellar Deployment Documentation](https://developers.stellar.org/docs/deploy/)
- [Soroban Developer Guides](https://developers.stellar.org/docs/build/)
- [Stellar CLI Reference](https://developers.stellar.org/docs/tools/cli/stellar-cli)
- [Network Information](https://developers.stellar.org/docs/glossary/networks/)
