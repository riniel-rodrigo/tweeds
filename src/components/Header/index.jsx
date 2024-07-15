import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { RiBearSmileLine } from "react-icons/ri";
import { ImExit } from "react-icons/im";
import { CiUser } from "react-icons/ci";


import Home from '../../pages/Home/index.jsx'
import Register from '../../pages/Register/index.jsx'
import Login from '../../pages/Login/index.jsx'
import NotFound from '../../pages/NotFound/index.jsx'

export default function Header() {
    return (
        <header>
            <BrowserRouter>
                <nav className='flex items-center justify-between p-3 border-gray-300 border-b'>
                    <ul className='flex gap-5' >
                        <li className='flex justify-center items-center text-indigo-500 text-2xl shadow-md p-1 px-4 rounded-lg'>
                            <Link to="/">tweeds&nbsp; </Link>
                            <RiBearSmileLine  className='mt-1'/>
                        </li>
                        <li>
                            <Link to="/register">;</Link>
                        </li>
                    </ul>
                    <div className='flex justify-center items-center gap-20 ' >
                        <span>flavindopneu43@email.com</span>
                        <ImExit className='text-black text-2xl cursor-pointer hover:text-indigo-500'/>
                    </div>
                </nav>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </header>
    )
}
