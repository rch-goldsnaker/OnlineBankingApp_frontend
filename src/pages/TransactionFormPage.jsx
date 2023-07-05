import { useEffect, useState } from 'react';
import { Card,Message,Input, Label } from "../components/ui";
import { useTransactions } from "../context/transactionsContext";
import { useAccounts } from '../context/accountsContext'
import { useForm } from "react-hook-form";
import { SideNavBar } from '../components/SideNavBar'
import { Footer } from '../components/footer/Footer'
import { csfrFormRequest } from '../api/csfr'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext'

// import { zodResolver } from "@hookform/resolvers/zod";
// import { transferSchema } from '../schemas/transfer'

export function TransactionFormPage() {
  const { createTransaction, succedTransfer, setSuccedTransfer, errors: transactionErrors } = useTransactions();
  const { getAccountByNumberAccount, errors: accountErrors } = useAccounts();
  const [csrfToken, setCsrfToken] = useState('');

  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const resFrom = await getAccountByNumberAccount(data.numberAccountFrom)
      const resTo = await getAccountByNumberAccount(data.numberAccountTo)
      const amount = parseFloat(data.amount);
      createTransaction({
        ...data,
        accountFromId: resFrom.accountId,
        accountToId: resTo.accountId,
        amount: amount,
        userFrom: user
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkForm = async () => {
      try {
        const res = await csfrFormRequest();
        setCsrfToken(res.data.csrfToken);
      } catch (error) {
        console.log(error)
      }
    };
    checkForm();
  }, []);

  useEffect(() => {
    if (succedTransfer) {
      navigate("/dashboard");
      setSuccedTransfer(false)
    }
  }, [succedTransfer]);

  return (
    <>
      <SideNavBar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <h3 className="text-2xl my-3 font-bold dark:text-white">Transaction</h3>
          <Card>
            <div className="flex items-center justify-center m-10 rounded">
              <form onSubmit={handleSubmit(onSubmit)} className="my-10 w-full">
                {transactionErrors.map((error, i) => (
                  <Message message={error} key={i} />
                ))}
                {accountErrors.map((error, i) => (
                  <Message message={error} key={i} />
                ))}
                <input type="hidden" {...register("_csrf", { value: csrfToken })} />
                <Label htmlFor="title">Number Account From</Label>
                <Input
                  type="text"
                  name="numberAccountFrom"
                  placeholder="Number Account From"
                  {...register("numberAccountFrom", { required: true })}
                  autoFocus
                />
                {errors.numberAccountFrom && (
                  <p className="text-red-500 text-xs italic">Please enter a Number Account From.</p>
                )}

                <Label htmlFor="title">Number Account To</Label>
                <Input
                  type="text"
                  name="numberAccountTo"
                  placeholder="Number Account To"
                  {...register("numberAccountTo", { required: true })}
                  autoFocus
                />
                {errors.numberAccountTo && (
                  <p className="text-red-500 text-xs italic">Please enter a Number Account To.</p>
                )}

                <Label htmlFor="title">Amount</Label>
                <Input
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  {...register("amount", { required: "Please enter an Amount", validate: value => value > 0 || 'The amount must be greater than zero.' })}
                  autoFocus
                />
                {errors.amount && (
                  <p className="text-red-500 text-xs italic">{errors.amount.message}</p>
                )}
                <button onClick={handleSubmit(onSubmit)} type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-5">Transfer</button>
              </form>
            </div>
          </Card>
        </div>
        <Footer />
      </div>
    </>
  );
}