import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import AddDataScreen from './screens/AddDataScreen'
import SideNavBar from './components/SideNavbar'
import EditDataScreen from './screens/EditDataScreen'
import ShowDataScreen from './screens/ShowDataScreen.jsx'
import ExcelCompanyScreen from './screens/ExcelCompanScreen.jsx'
import { useSelector } from 'react-redux'
import LoginScreen from './screens/LoginScreen.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import UniqueRelationScreen from './screens/UniqueRelationScreen.jsx'

function App() {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return (
    <div className="min-h-screen max-w-full overflow-y-hidden overflow-x-visible">
      <div className="flex items-start">
        {!userInfo ? (
          <LoginScreen className={'w-full'} />
        ) : (
          <Router>
            <SideNavBar />
            <div className="w-4/5">
              <Routes>
                <Route path={'/'} element={<Navigate to={'/actor'} />} />
                <Route
                  path="/actor"
                  element={<ShowDataScreen dataFor={'actor'} />}
                />
                <Route path="/add" element={<AddDataScreen />} />
                <Route
                  path="/bank"
                  element={<ShowDataScreen dataFor={'bank'} />}
                />
                <Route
                  path="/banker"
                  element={<ShowDataScreen dataFor={'banker'} />}
                />
                <Route
                  path="/company"
                  element={<ShowDataScreen dataFor={'company'} />}
                />
                <Route
                  path="/excel-company"
                  element={
                    userInfo?.is_superuser ||
                    userInfo?.is_excel_company_user ? (
                      <ExcelCompanyScreen />
                    ) : (
                      <Navigate to={'/actor'} />
                    )
                  }
                />
                <Route
                  path="/edit/actor"
                  element={<EditDataScreen formType={'actor'} />}
                />
                <Route
                  path="/edit/bank"
                  element={<EditDataScreen formType={'bank'} />}
                />
                <Route
                  path="/edit/banker"
                  element={<EditDataScreen formType={'banker'} />}
                />
                <Route
                  path="/edit/company"
                  element={<EditDataScreen formType={'company'} />}
                />
                <Route
                  path="/edit/owner"
                  element={<EditDataScreen formType={'owner'} />}
                />
                <Route
                  path="/register"
                  element={
                    userInfo?.is_superuser ? (
                      <RegisterScreen className={'w-full'} />
                    ) : (
                      <Navigate to={'/actor'} />
                    )
                  }
                />
                <Route
                  path="/owner"
                  element={<ShowDataScreen dataFor={'owner'} />}
                />
                <Route
                  path="/unique-relation"
                  element={<UniqueRelationScreen />}
                />
              </Routes>
            </div>
          </Router>
        )}
      </div>
    </div>
  )
}

export default App
