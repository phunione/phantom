import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddDataScreen from './screens/AddDataScreen'
import SideNavBar from './components/SideNavbar'
import EditDataScreen from './screens/EditDataScreen'
import ShowDataScreen from './screens/ShowDataScreen.jsx'

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
                path="/edit/id"
                element={<EditDataScreen formType={'id'} />}
              />
              <Route path="/id" element={<ShowDataScreen dataFor={'id'} />} />
              <Route
                path="/unique-relation"
                element={<ShowDataScreen dataFor={'unique-relation'} />}
              />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default App
