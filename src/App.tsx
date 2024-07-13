
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import MainNav from './layout/MainNav';
import MemberAdd from './member/MemberAdd';
import MemberList from './member/MemberList';

function App() {

  return (
    <BrowserRouter basename="/MemberManagement">
      <div className="sticky top-0 z-10">
        <div className={`h-16 flex items-center px-6 border-b  bg-white`}>
          <h1 className="text-xl font-medium"><Link to={"/"}>Member Management</Link></h1>
        </div>
      </div>
      <div className='md:grid min-h-screen bg-slate-100 md:grid-cols-[auto_1fr] md:grid-rows-[auto_1fr]'>
        <div className='row-span-full'>
          <div className={`sticky top-16 flex min-h-[calc(100vh-64px)]`}>
            <MainNav />
          </div>
        </div>
        <div className='relative p-4'>
          <div className="">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/member/" element={<MemberList />} />
              <Route path="/member/create" element={<MemberAdd />} />
              <Route path="/member/:id" element={<MemberAdd />} />
              <Route path="/member/edit/:id" element={<MemberAdd />} />
            </Routes>
          </div>
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App
