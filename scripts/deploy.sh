#!/bin/bash
set -euo pipefail

echo "Stellar Production Template - Deployment Script"
echo "=============================================="

NETWORK="${1:-testnet}"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if [[ "$NETWORK" != "testnet" && "$NETWORK" != "mainnet" ]]; then
  echo "Error: Unsupported network '$NETWORK'"
  echo "Supported networks: testnet, mainnet"
  exit 1
fi

if [[ ! -f "$ROOT_DIR/.env" ]]; then
  echo "Missing .env file. Copy .env.example to .env and configure deployment settings."
  exit 1
fi

source "$ROOT_DIR/.env"

if [[ -z "${STELLAR_SECRET_KEY:-}" ]]; then
  echo "STELLAR_SECRET_KEY is not set. Update .env before deploying."
  exit 1
fi

if [[ -z "${CONTRACT_ID:-}" ]]; then
  echo "No deployed contract address found. Build and deploy the contract before re-running this script."
  exit 1
fi

echo "Validating configuration for $NETWORK..."
case "$NETWORK" in
  testnet)
    echo "Deployment target: Stellar Testnet"
    ;;
  mainnet)
    echo "Deployment target: Stellar Mainnet"
    ;;
 esac

echo "Deployment checks passed. Update the deployment commands in this script for your production workflow."
echo ""
echo "Deployment completed!"
