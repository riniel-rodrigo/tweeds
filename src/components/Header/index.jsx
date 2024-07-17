import { Link, useNavigate } from 'react-router-dom'
import { RiBearSmileLine } from "react-icons/ri";
import { ImExit } from "react-icons/im";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebaseConfig.js';

export default function Header() {

    const navigate = useNavigate();
    const auth = getAuth(app);
    const [user, loading] = useAuthState(auth);

    const onSignOut = () => {
        const auth = getAuth();

        signOut(auth).then(() => {
            navigate("/Login");

        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <header>
            <nav className='flex items-center justify-between p-3 border-gray-300 border-b'>
                <ul className='flex gap-5' >
                    <li className='flex justify-center items-center text-indigo-500 text-2xl shadow-md p-1 px-4 rounded-lg'>
                        <Link to="/">tweeds&nbsp; </Link>
                        <RiBearSmileLine className='mt-1' />
                    </li>
                    <li>
                        <Link to="/register">;</Link>
                    </li>
                </ul>
                <div className='flex justify-center items-center gap-20 ' >
                    <span>{loading ? "Carregando..." : user ? user.email : "Usuário não autenticado"}</span>
                    <ImExit onClick={onSignOut} className='text-black text-2xl cursor-pointer hover:text-indigo-500' />
                </div>
            </nav>
        </header>
    )
}
