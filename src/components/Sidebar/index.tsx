import { ButtonSidebar } from "../ButtonSidebar"

export function Sidebar() {
    return (
        <aside className="flex flex-col gap-1 pt-20 pb-4 w-64 h-screen">
            <h2 className="text-sm mx-auto mb-3">Busque sua musica</h2>
            <ButtonSidebar active>icon Musicas</ButtonSidebar>
            <ButtonSidebar>Músicos</ButtonSidebar>
            <ButtonSidebar>Discos</ButtonSidebar>
            <h3 className="text-sm mx-auto mb-3 mt-6 ">Gestão de recursos </h3>
            <ButtonSidebar>Instrumentos</ButtonSidebar>
            <ButtonSidebar>Formato</ButtonSidebar>
            <ButtonSidebar>Região</ButtonSidebar>
            <div className="flex justify-self-end items-center gap-4 p-4">
                icon
                <div>
                    <p>Região</p>
                    <strong>Matola</strong>
                </div>
            </div>
        </aside>
    )
}
