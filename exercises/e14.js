
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const accounts=[];
  for(const a of array){
    let deposits=0,withdrawals=0;
    if(a.deposits){
      for(const d of a.deposits){
        deposits+=d;
      }
    }
    if(a.withdrawals){
      for(const d of a.withdrawals){
        withdrawals+=d;
      }
    }
    if(deposits-withdrawals!==a.balance){
      accounts.push(a);
    }
  }
  return accounts;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
