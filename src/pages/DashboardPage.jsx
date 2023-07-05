import { useEffect } from "react";
import { useAccounts } from '../context/accountsContext'
import { useTransactions } from '../context/transactionsContext'
import { AccountCard } from "../components/accounts/AccountCard";
import { TransactionTable } from '../components/transaction/TransactionTable'
import { Footer } from '../components/footer/footer'
import { SideNavBar } from '../components/SideNavBar'

export function DashboardPage() {
  const { accounts, getAccounts } = useAccounts();
  const { transaction, getTransactionsByUser } = useTransactions();

  useEffect(() => {
    getAccounts();
    getTransactionsByUser();
  }, []);

  return (
    <>
      <SideNavBar/>    
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <h3 className="text-2xl my-3 font-bold dark:text-white">Accounts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {accounts.map((account) => (
              <AccountCard account={account} key={account._id} showLinkTransactions={true} />
            ))}
          </div>
          <h3 className="text-2xl my-3 font-bold dark:text-white">Last transactions</h3>
          <div className="flex items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <TransactionTable transaction={transaction} key={transaction._id} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
