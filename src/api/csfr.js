import axios from "./axios";

export const csfrFormRequest = async () => axios.get(`/formTransfer`);