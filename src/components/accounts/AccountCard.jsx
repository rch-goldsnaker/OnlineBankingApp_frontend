import { Link } from 'react-router-dom'
import logo from '../../assets/logoBank2.png'
import card from '../../assets/card1.png'

export function AccountCard({ account, showLinkTransactions }) {

  const transactionLink = `/account/${account._id}/transactions`;

  return (
    <div className="flex items-center justify-center rounded">
      <div className="flex justify-center items-center">
        <div className="">
          <div className="w-full h-full m-auto rounded-xl relative text-white shadow-2xl transition-transform transform">

            <img className="relative object-cover w-full h-full rounded-xl" src={card} />
            <div className="w-full px-8 absolute top-3">
              <div className="flex justify-between">
                <div className="">
                  <p className="font-medium tracking-widest text-sm sm:text-base">
                    {account.type.toUpperCase()}
                  </p>
                </div>
                <img className="w-10 h-10" src={logo} />
              </div>
              <div>
                <p className="font-medium text-xl sm:text-2xl">
                  {"$ " + account.balance}
                </p>
              </div>
              <div className="flex justify-between">
                <div className="pt-1 sm:pt-5">
                  <p className="font-light">
                    Account Number
                  </p>
                  <p className="font-medium ">
                    {account.numberAccount}
                  </p>
                </div>
                <div className="pt-1 sm:pt-5">
                  {showLinkTransactions && (
                    <Link to={transactionLink}>
                      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hidden sm:block">Transactions</button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
