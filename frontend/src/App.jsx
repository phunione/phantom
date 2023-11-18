import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddDataScreen from './screens/AddDataScreen'
import ActorScreen from './screens/ActorScreen'
import SideNavBar from './components/SideNavbar'
import BankScreen from './screens/BankScreen'
import BankerScreen from './screens/BankerScreen'
import CompanyScreen from './screens/CompanyScreen'
import IdScreen from './screens/IdScreen'

function App() {
  return (
    <div className="min-h-screen max-w-full overflow-y-hidden overflow-x-visible">
      <div className="flex items-start">
        <Router>
          <SideNavBar />

          <div className="w-4/5">
            <Routes>
              <Route
                path="/actor"
                element={<ActorScreen dataFor={'actor'} />}
              />
              <Route path="/add" element={<AddDataScreen />} />
              <Route
                path="/bankers"
                element={<BankerScreen dataFor={'banker'} />}
              />
              <Route path="/banks" element={<BankScreen dataFor={'bank'} />} />
              <Route
                path="/companies"
                element={<CompanyScreen dataFor={'company'} />}
              />
              <Route path="/ids" element={<IdScreen dataFor={'id'} />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default App
