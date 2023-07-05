import { useEffect } from "react";
import { useAccounts } from '../context/accountsContext'
import { AccountCard } from "../components/accounts/AccountCard";
import { Footer } from '../components/footer/footer'
import { AccountTable } from '../components/accounts/AccountTable'
import { SideNavBar } from '../components/SideNavBar'

export function AccountsPage() {
  const { accounts, getAccounts } = useAccounts();

  useEffect(() => {
    getAccounts();
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
          <h3 className="text-2xl my-3 font-bold dark:text-white">Accounts Details</h3>
          <div className="flex items-center justify-center mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <AccountTable accounts={accounts} key={accounts._id} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
