import { createContext, useContext, useState, useEffect } from "react";
import {
  getAccountRequest,
  getAccountsRequest,
  getAccountByTypeRequest,
  getAccountByNumberAccountRequest
} from "../api/accounts";

const AccountContext = createContext();

export const useAccounts = () => {
  const context = useContext(AccountContext);
  if (!context) throw new Error("useAccounts must be used within a AccountProvider");
  return context;
};

export function AccountProvider({ children }) {
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState([]);
  const [errors, setErrors] = useState([]);

  // clear errors after 5 seconds
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const getAccounts = async () => {
    const res = await getAccountsRequest();
    setAccounts(res.data);
  };

  const getAccount = async (id) => {
    try {
      const res = await getAccountRequest(id);
      setAccount(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getAccountByType = async (type) => {
    try {
      const res = await getAccountByTypeRequest(type);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAccountByNumberAccount = async (numberAccount) => {
    try {
      const res = await getAccountByNumberAccountRequest(numberAccount);
      return res.data;
    } catch (error) {
      console.error(error);
      setErrors(error.response.data.message);
    }
  };

  return (
    <AccountContext.Provider
      value={{
        accounts,
        account,
        getAccounts,
        getAccount,
        getAccountByType,
        getAccountByNumberAccount,
        errors
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
