#!/bin/bash
set -e

echo "Stellar Production Template - Test Script"
echo "========================================"

echo "Running contract tests..."
cd contracts
cargo test

echo ""
echo "Running frontend tests..."
cd ../frontend
npm test

echo ""
echo "All tests completed!"
