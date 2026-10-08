use soroban_sdk::{testutils::Address as _, Address, Env, String};

use crate::{StellarContract, StellarContractClient};

#[test]
fn test_initialize() {
    let env = Env::default();
    let contract_id = env.register_contract(None, StellarContract);
    let client = StellarContractClient::new(&env, &contract_id);
    let admin = Address::generate(&env);

    // Initialize contract
    let result = client.initialize(&admin);
    assert!(result.is_ok());
}

#[test]
fn test_hello() {
    let env = Env::default();
    let contract_id = env.register_contract(None, StellarContract);
    let client = StellarContractClient::new(&env, &contract_id);
    let to = String::from_env(&env, "World");

    let message = client.hello(&to);
    assert_eq!(message, String::from_env(&env, "Hello, World!"));
}
