import {formatFriendlyDate} from '../../utils/formatDate'

export function TransactionTable({ transaction }) {

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              From
            </th>
            <th scope="col" className="px-6 py-3">
              To
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((transfer) => (
            <tr
              key={transfer._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {transfer.accountFrom.type}
              </th>
              <td className="px-6 py-4">{transfer.accountTo.type}</td>
              <td className="px-6 py-4">{transfer.amount}</td>
              <td className="px-6 py-4">{formatFriendlyDate(transfer.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}