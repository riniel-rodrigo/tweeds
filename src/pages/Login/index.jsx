import { useForm } from "react-hook-form";
import validator from "validator";
import { Link } from "react-router-dom";


export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="flex justify-center content-center items-center h-screen">
            <form className="flex flex-col gap-8 w-11/12 sm:w-4/5 md:w-2/5 lg:w-1/4 text-base ">
            <div className="flex flex-col justify-center content-center items-center gap-3">
                <h1 className="text-indigo-500 text-4xl self-center" >Tweeds</h1>
            </div>

                <div className="flex flex-col gap-3">
                    <input className="border border-gray-300 p-2 rounded focus:outline-none focus:border-indigo-400"
                        type="email"
                        placeholder="email@example.com"
                        {...register("email", {
                            required: true,
                            validate: (value) => validator.isEmail(value)
                        })}
                    />
                    {errors?.email?.type === 'required' && (
                        <span className="text-red-500 text-sm">Informe um e-mail para prosseguir!</span>
                    )}
                    {errors?.email?.type === 'validate' && (
                        <span className="text-red-500 text-sm">Insira um e-mail válido.</span>
                    )}

                    <input className="border border-gray-300 p-2 rounded focus:outline-none focus:border-indigo-400"
                        type="text"
                        placeholder="senha"
                        {...register("password", { required: true, minLength: 6 })}
                    />
                    {errors?.password?.type === 'minLength' && (
                        <span className="text-red-500 text-sm">A senha não pode ter menos de 6 caracteres.</span>
                    )}

                    {errors?.password?.type === 'required' && (
                        <span className="text-red-500 text-sm">Insira uma senha para prosseguir!</span>
                    )}
                </div>

                <button
                    onClick={() => handleSubmit(onSubmit)()}
                    className="bg-indigo-500 text-white w-full rounded p-1.5 hover:bg-indigo-700 transition-all duration-[100ms] active:transform active:scale-95">
                    Entrar
                </button>
                <div className="flex gap-2 self-center">
                    <span className="text-sm" >Não possui uma conta?</span>
                    <Link className="text-sm text-indigo-400 hover:text-indigo-800 transition-all" to="/Register">Registrar</Link>
                </div>
            </form>
        </div>
    )
}
