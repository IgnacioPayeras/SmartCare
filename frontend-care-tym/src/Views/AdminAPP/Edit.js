import { useState } from "react"
import { useParams } from "react-router-dom"
import BottonsUpdate from "../../Component/Bottons/BottonsUpdate"
import BottonsDelete from "../../Component/Bottons/BottonsDelete"
import BottonsCancel from "../../Component/Bottons/BottonsCancel"

export default function Edit() {

    const { id, name } = useParams()
    const [nameChain, setNameChain] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] =useState()

    const data = {
        nombre: nameChain,
        contraseña: password,
        correo : email
    }

    return (
        <div className="flex justify-center flex-col">

            <div className="flex justify-center">
                <div className="mt-10 mb-4 w-5/6 flex md:max-w-2xl lg:max-w-4xl">
                    <h1 className="ml-4 text-xl font-medium align-top">Editar centro médico</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="my-10 w-5/6 grid md:w-1/2 md:max-w-lg">
                    <form className="grid gap-6 m-3">
                        <div>
                            <label className="my-2 block font-medium">Nombre</label>
                            <input onChange={(x) => setNameChain(x.target.value)} autocomplete="off" type="text" className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" />
                        </div>
                        <div>
                            <label className="my-2 block font-medium">Correo institucional</label>
                            <input onChange={(x) => setEmail(x.target.value)} autocomplete="off" type="email" className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" />
                        </div>
                        <div>
                            <label className="my-2 block font-medium">Contraseña</label>
                            <input onChange={(x) => setPassword(x.target.value)} autocomplete="off" type="password" className="bg-gray-100 border rounded-lg shadow-lg block w-full p-2.5" />
                        </div>
                        <div id="error" className="text-red-500 text-center"></div>

                        <div className="grid grid-cols-2">
                            <BottonsUpdate api={"http://127.0.0.1:8000/api/admin/chain/"+id} text={"Actualizar"} load={"Actualizando"} data={data} error={"Error al actualizar"} />
                            <BottonsCancel redirect={"/admin"} text={"Cancelar"}/>
                        </div>
                        <BottonsDelete api={"http://127.0.0.1:8000/api/admin/chain/"+id} text={"Eliminar cadena medica"} load={"Eliminando"} error={"Error al eliminar la cadena"}/>

                    </form>
                </div>
            </div>

        </div>
    )
}