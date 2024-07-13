import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Home from '../../pages/Home/index.jsx'
import Login from '../../pages/Login/index.jsx'
import NotFound from '../../pages/NotFound/index.jsx'

export default function Header() {
    return (
        <div>
            <header className='flex gap-5' >
                <h1>Tweeds</h1>
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Login">Login</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/Login' element={<Login/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    )
}
