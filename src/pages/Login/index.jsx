import { useForm } from "react-hook-form";
import validator from "validator";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import app from "../../firebaseConfig.js";

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();


    const onSubmit = async (data) => {
        const { email, password } = data;

        const auth = getAuth(app);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // Usuário criado
            const user = userCredential.user;
            console.log("Usuário:", user);
            navigate("/."); 

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Erro: ", errorCode, errorMessage);
        }
    };

    return (
        <div className="flex justify-center content-center items-center h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 w-11/12 sm:w-4/5 md:w-2/5 lg:w-1/4 text-base">
                <div className="flex flex-col justify-center content-center items-center gap-3">
                    <h1 className="text-indigo-500 text-4xl self-center">Tweeds</h1>
                </div>

                <div className="flex flex-col gap-3">
                    <input
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:border-indigo-400"
                        type="email"
                        placeholder="email@example.com"
                        {...register("email", {
                            required: "Informe um e-mail para prosseguir!",
                            validate: (value) => validator.isEmail(value) || "Insira um e-mail válido."
                        })}
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

                    <input
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:border-indigo-400"
                        type="password"
                        placeholder="senha"
                        {...register("password", { required: "Insira uma senha para prosseguir!", minLength: { value: 6, message: "A senha não pode ter menos de 6 caracteres." } })}
                    />
                    {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                </div>

                <button
                    type="submit"
                    className="bg-indigo-500 text-white w-full rounded p-1.5 hover:bg-indigo-700 transition-all duration-[100ms] active:transform active:scale-95">
                    Entrar
                </button>
                <div className="flex gap-2 self-center">
                    <span className="text-sm">Não possui uma conta?</span>
                    <Link className="text-sm text-indigo-400 hover:text-indigo-800 transition-all" to="/Register">Criar conta</Link>
                </div>
            </form>
        </div>
    );
}
