export const USER_SELECTED = "USER_SELECTED";
export const ACCOUNT_SELECTED = "ACCOUNT_SELECTED";
export const WITHDRAW_FUNDS = "WITHDRAW_FUNDS";

export function selectUser(userId) {
  return {
    type: USER_SELECTED,
    payload: userId
  };
}

export function selectAccount(accountId) {
  return {
    type: ACCOUNT_SELECTED,
    payload: accountId
  };
}


export function withdrawFunds(amount) {
  return {
    type: WITHDRAW_FUNDS,
    payload: parseInt(amount, 10)
  }
}
