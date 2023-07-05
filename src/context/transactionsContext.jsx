import { createContext, useContext, useState, useEffect } from "react";
import {
  createTransactionsRequest,
  getTransactionsByAccountRequest,
  getTransactionsByUserRequest
} from "../api/transactions";

const TransactionContext = createContext();

export const useTransactions = () => {
  const context = useContext(TransactionContext);
  if (!context) throw new Error("useTransactions must be used within a TransactionProvider");
  return context;
};

export function TransactionProvider({ children }) {
  const [transaction, setTransactions] = useState([]);
  const [succedTransfer, setSuccedTransfer] = useState();
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

  const createTransaction = async (transaction) => {
    try {
      const res = await createTransactionsRequest(transaction);
      console.log('res',res)
      if(res.data.success){
        console.log('exitosa')
        setSuccedTransfer(true)
      }
    } catch (error) {
      console.log('error',error);
      console.log('test')
      setErrors(error.response.data.message);
      console.log('errors', errors)
    }
  };

  const getTransactionsByAccount = async (id) => {
    try {
      const res = await getTransactionsByAccountRequest(id);
      setTransactions(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getTransactionsByUser = async () => {
    try {
      const res = await getTransactionsByUserRequest();
      setTransactions(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        transaction,
        createTransaction,
        getTransactionsByAccount,
        getTransactionsByUser,
        succedTransfer,
        setSuccedTransfer,
        errors
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}