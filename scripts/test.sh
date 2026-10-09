#!/bin/bash
set -euo pipefail

echo "Stellar Production Template - Test Script"
echo "========================================"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$ROOT_DIR/contracts"
echo "Running contract tests..."
cargo test --quiet

echo ""
cd "$ROOT_DIR/frontend"
echo "Running frontend tests..."
if [ -d node_modules ]; then
  npm test -- --watch=false
else
  echo "Frontend dependencies are not installed. Run 'npm install' first."
  exit 1
fi

echo ""
echo "All tests completed!"
