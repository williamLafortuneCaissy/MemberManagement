
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import MemberAdd from './member/MemberAdd';
import MemberList from './member/MemberList';

function App() {

  return (
    <BrowserRouter basename="/MemberManagement">
      <div className="container mx-auto p-20">
        <div className="flex gap-4">
          <Link to="/">Members</Link>
          <Link to="/create">Create</Link>
        </div>
        <Routes>
          <Route path="/" element={<MemberList />} />
          <Route path="/create" element={<MemberAdd />} />
          <Route path="/:id" element={<MemberAdd />} />
          <Route path="/edit/:id" element={<MemberAdd />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
