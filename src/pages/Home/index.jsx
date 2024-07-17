import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="flex justify-center bg-gray-100 h-screen p-4 pt-0  " >
      <main className=" flex flex-col gap-0.5 border-gray-300 border-l border-r lg:w-1/2" >
        <section className="border-gray-300 border-b p-3" >
          <div className="flex flex-col gap-3 relative max-w-xl mx-auto mt-10">
            <textarea className="balloon w-full h-32 px-4 py-1 bg-gray-100 border-gray-300 rounded-lg shadow-md focus:outline-none text-xl resize-none"
              placeholder="O que você está pensando?"
              {...register("password", { required: true, maxLength: 350 })}
            >
            </textarea>

            <div className={errors?.password && (errors.password.type === 'maxLength' || errors.password.type === 'required') ? 'flex justify-between' : 'flex justify-end'}>
              {errors?.password?.type === 'maxLength' && (
                <span className="text-yellow-600 text-sm">Você atingiu o limite de palavras!</span>
              )}

              {errors?.password?.type === 'required' && (
                <span className="text-yellow-600 text-sm">O campo está em branco, não será possível publicar.</span>
              )}
              <button
                onClick={() => handleSubmit(onSubmit)()}
                className="justify-self-end p-2 bg-indigo-500 text-white text-sm rounded-md hover:bg-indigo-700 transition-all duration-[100ms] active:transform active:scale-95" >
                Publicar
              </button>
            </div>
          </div>
        </section>

        <section className="border-gray-300 border-t border-b p-5" >
          <div className="flex flex-col gap-5" >
            <div className="flex justify-between" >
              <p className="text-sm text-gray-500" >flavindopneu43@email.com</p>
              <p className="text-sm text-gray-500" >14/07/2024</p>
            </div>
            <p>aaaaaaaaaaaaaaaaaa</p>
          </div>
        </section>
      </main>
    </div>
  )
}
