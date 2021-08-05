import DiscIcon from "../../assets/svgs/disc"
import FormatIcon from "../../assets/svgs/format"
import IntrumentIcon from "../../assets/svgs/instrument"
import MusicIcon from "../../assets/svgs/music"
import MusicianIcon from "../../assets/svgs/musician"
import { ButtonSidebar } from "../ButtonSidebar"

export function Sidebar() {
    return (
        <aside className="flex flex-col gap-1 pt-20 pb-4 w-64 h-screen">
            <h2 className="text-sm mx-auto mb-3">Busque sua musica</h2>
            <ButtonSidebar active>
                <MusicianIcon /> Musicas
            </ButtonSidebar>
            <ButtonSidebar>
                <MusicIcon /> Músicos
            </ButtonSidebar>
            <ButtonSidebar>
                <DiscIcon /> Discos
            </ButtonSidebar>
            <h3 className="text-sm mx-auto mb-3 mt-6 ">Gestão de recursos </h3>
            <ButtonSidebar>
                <IntrumentIcon /> Instrumentos
            </ButtonSidebar>
            <ButtonSidebar>
                <FormatIcon /> Formato
            </ButtonSidebar>
            <ButtonSidebar>Região</ButtonSidebar>
            <div className="flex justify-self-end items-center gap-4 p-4">
                <div>
                    <p>Região</p>
                    <strong>Matola</strong>
                </div>
            </div>
        </aside>
    )
}
