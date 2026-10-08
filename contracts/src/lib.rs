use soroban_sdk::{contract, contractimpl, symbol_short, Env, Address, String};

#[contract]
pub struct StellarContract;

#[contractimpl]
impl StellarContract {
    /// Initialize the contract
    pub fn initialize(_env: Env, admin: Address) -> Result<(), String> {
        // Store admin address
        Ok(())
    }

    /// A simple hello world function
    pub fn hello(_env: Env, to: String) -> String {
        String::from_env(&_env, &format!("Hello, {}!", to))
    }
}

mod test;
