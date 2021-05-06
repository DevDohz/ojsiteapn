import OJLayout from '../components/layout'

export default function Custom404() {
    return (
    <OJLayout>
        <div className="flex flex-row justify-center m-auto w-screen h-2/3 items-center space-x-4">
            <div className="errorPageRouting">
                404
            </div>
            <div className="pt-10">Erreur : Page non trouvée, sowwy. ;)</div>
        </div>
    </OJLayout>
)}