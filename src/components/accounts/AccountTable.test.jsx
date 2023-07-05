import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import { BrowserRouter } from 'react-router-dom';
import { AccountTable } from './AccountTable';

describe('AccountTable', () => {
  const accounts = [
    {
      _id: '112123123123123',
      type: 'ahorros',
      currency: 'dolares',
      balance: 1000,
      numberAccount: '111',
      numberAccountInterbank: '123',
    },
  ];

  test('renders table with account information', () => {
    render(
      <BrowserRouter>
        <AccountTable accounts={accounts} />
      </BrowserRouter>
    );

    // Assert table header labels are rendered
    expect(screen.getByText('Type')).toBeDefined();
    expect(screen.getByText('Currency')).toBeDefined();
    expect(screen.getByText('Balance')).toBeDefined();
    expect(screen.getByText('Number Account')).toBeDefined();
    expect(screen.getByText('Iterbank Number Account')).toBeDefined();
    expect(screen.getByText('Accions')).toBeDefined();

    // Assert account information is rendered
    accounts.forEach((account) => {
      expect(screen.getByText(account.type)).toBeDefined();
      expect(screen.getByText(account.currency)).toBeDefined();
      expect(screen.getByText(account.balance.toString())).toBeDefined();
      expect(screen.getByText(account.numberAccount)).toBeDefined();
      expect(screen.getByText(account.numberAccountInterbank)).toBeDefined();
    });

  });
});
