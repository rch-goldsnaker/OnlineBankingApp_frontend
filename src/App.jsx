import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { AccountProvider } from "./context/accountsContext";
import { TransactionProvider } from "./context/transactionsContext";
import { TransactionFormPage } from './pages/TransactionFormPage'
import { TransactionAccountPage } from './pages/TransactionAccountPage'
import { DashboardPage } from "./pages/DashboardPage";
import { AccountsPage } from './pages/AccountsPage'
import { ProfilePage } from './pages/ProfilePage'

function App() {
  return (
    <AuthProvider>
      <AccountProvider>
        <TransactionProvider>
          <BrowserRouter>
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/accounts" element={<AccountsPage />} />
                  <Route path="/transaction" element={<TransactionFormPage />} />
                  <Route path="/:account/transactions" element={<TransactionAccountPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                </Route>
              </Routes>
            </main>
          </BrowserRouter>
        </TransactionProvider>
      </AccountProvider>
    </AuthProvider>
  );
}

export default App;
