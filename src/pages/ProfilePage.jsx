import { useAuth } from '../context/authContext'
import userLogo from '../assets/user.png'
import { SideNavBar } from '../components/SideNavBar'
import { Footer } from '../components/footer/Footer'

export function ProfilePage() {

  const { logout, user } = useAuth();

  return (
    <>
      <SideNavBar/>
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14">
          <h3 className="text-2xl my-3 font-bold dark:text-white">Profile</h3>
          <div className="flex items-center justify-center mb-4 rounded">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center pb-10">
                <h5 className="mt-5 text-xl font-medium text-gray-900 dark:text-white">About me</h5>
                <img className="w-24 h-24 my-10 rounded-full shadow-lg" src={userLogo} alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">User name:</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{user.username}</span>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">mail:</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
                <button onClick={() => logout()}type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-5">Log out</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
