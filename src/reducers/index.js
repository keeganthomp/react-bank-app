import { combineReducers } from "redux";
import {
  USER_SELECTED,
  ACCOUNT_SELECTED,
  WITHDRAW_FUNDS
} from "../actions/index";
import userList from "../data/users";
import _ from "lodash";

const initialState = {
  users: userList(),
  selectedUser: null,
  selectedAccount: null
};

const reducer = function(state = initialState, action) {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case USER_SELECTED:
      let userId = action.payload;
      newState.selectedUser = newState.users.find(el => {
        return (el._id = userId);
      });
      return newState;

    case ACCOUNT_SELECTED:
      newState.selectedAccount = action.payload;
      return newState;

    case WITHDRAW_FUNDS:
      const userIdx = newState.users.findIndex(
        user => user._id === newState.selectedUser
      );
      const accountIdx = newState.users[userIdx].accounts.findIndex(
        account => account.id === newState.selectedAccount
      );

      newState.users[userIdx].accounts[accountIdx].balance -= action.payload;

      return newState;
    default:
      return state;
  }
};

export default reducer;
