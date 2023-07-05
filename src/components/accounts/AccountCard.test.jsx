import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { AccountCard } from './AccountCard.jsx';
import { BrowserRouter } from 'react-router-dom';

describe('AccountCard', () => {
  test('should render AccountCard component', () => {
    const account = {
      type: 'corriente',
      balance: 1000,
      numberAccount: '111',
    };
    const showLinkTransactions = true;

    render(
      <BrowserRouter>
          <AccountCard account={account} showLinkTransactions={showLinkTransactions} />
      </BrowserRouter>
    );

    // Perform assertions to verify if the component is rendered correctly
    expect(screen.getByText(account.type.toUpperCase())).toBeDefined();
    expect(screen.getByText(`$ ${account.balance}`)).toBeDefined();
    expect(screen.getByText('Account Number')).toBeDefined();
    expect(screen.getByText(account.numberAccount)).toBeDefined();

    // If the transaction link is enabled, verify its existence
    if (showLinkTransactions) {
      expect(screen.getByText('Transactions')).toBeDefined();
    }
  });
});
