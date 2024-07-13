import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Home from '../../pages/Home/index.jsx'
import Register from '../../pages/Register/index.jsx'
import Login from '../../pages/Login/index.jsx'
import NotFound from '../../pages/NotFound/index.jsx'

export default function Header() {
    return (
        <header>
            <BrowserRouter>
                <nav className='flex gap-10'>
                    <h1>Tweeds</h1>
                    <ul className='flex gap-5' >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Register">Register</Link>
                        </li>
                    </ul>
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
