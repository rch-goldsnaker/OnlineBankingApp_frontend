import axios from "./axios";

export const createTransactionsRequest = async (transfer) => axios.post("/transactions",transfer);

export const getTransactionsByAccountRequest = async (id) => axios.get(`/accounts/${id}/transactions`);

export const getTransactionsByUserRequest = async () => axios.get(`/user/transactions`);