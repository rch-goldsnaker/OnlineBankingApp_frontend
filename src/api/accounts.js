import axios from "./axios";

export const getAccountsRequest = async () => axios.get("/accounts");

export const getAccountRequest = async (id) => axios.get(`/accounts/${id}`);

export const getAccountByTypeRequest = async (type) => axios.get(`/accountByType/${type}`);

export const getAccountByNumberAccountRequest = async (numberAccount) => axios.get(`/accountByNumberAccount/${numberAccount}`);
