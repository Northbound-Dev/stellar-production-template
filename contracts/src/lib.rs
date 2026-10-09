use soroban_sdk::{contract, contractimpl, Symbol, Env, Address, String, symbol_short};

const ADMIN: Symbol = symbol_short!("ADMIN");

#[contract]
pub struct StellarContract;

#[contractimpl]
impl StellarContract {
    pub fn initialize(env: Env, admin: Address) -> Result<(), String> {
        env.storage().instance().set(&ADMIN, &admin);
        Ok(())
    }

    pub fn admin(env: Env) -> Result<Address, String> {
        env.storage().instance().get(&ADMIN).ok_or_else(|| String::from_str(&env, "admin not set"))
    }

    pub fn hello(env: Env, to: String) -> String {
        let mut message = String::from_str(&env, "Hello, ");
        message.push_str(&to);
        message.push_str("!");
        message
    }
}

mod test;
