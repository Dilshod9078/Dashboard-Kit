import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import OverviewPage from './pages/Overview/Overview'
import TicketsPage from './pages/Tickets/Tickets'
import IdeasPage from './pages/Ideas/Ideas'
import ContactsPage from './pages/Contacts/Contacts'
import AgentsPage from './pages/Agents/Agents'
import ArticlesPage from './pages/Articles/Articles'
import SettingsPage from './pages/Settings/Settings'
import SubscriptionPage from './pages/Subscription/Subscription'

import './App.css'
function App() {

  return (
    <>
      <div className="flex justify-between">
          <Navbar/>
          <div className="w-[75%] py-[30px] pr-[33px] pl-[30px] h-[100vh] overflow-y-auto">
            <Routes>
              <Route path="/" element={<OverviewPage/>} />
              <Route path="/tickets" element={<TicketsPage/>} />
              <Route path="/ideas" element={<IdeasPage/>} />
              <Route path="/contacts" element={<ContactsPage/>} />
              <Route path="/agents" element={<AgentsPage/>} />
              <Route path="/articles" element={<ArticlesPage/>} />
              <Route path="/settings" element={<SettingsPage/>} />
              <Route path="/subscription" element={<SubscriptionPage/>} />
            </Routes>
          </div>
      </div>
    </>
  )
}

export default App
