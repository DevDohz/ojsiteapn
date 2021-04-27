import Image from 'next/image'

export default function Custom404() {
    return (
    <div className="flex flex-row justify-center m-auto w-screen h-screen items-center space-x-4">
        <div class="errorPageRouting">
            404
        </div>
        <div className="pt-10">Erreur : Page non trouvée, sowwy. ;)</div>
    </div>
)}