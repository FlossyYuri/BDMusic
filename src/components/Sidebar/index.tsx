import DiscIcon from "../../assets/svgs/disc"
import FormatIcon from "../../assets/svgs/format"
import HomeIcon from "../../assets/svgs/home"
import IntrumentIcon from "../../assets/svgs/instrument"
import MusicIcon from "../../assets/svgs/music"
import MusicianIcon from "../../assets/svgs/musician"
import { ButtonSidebar } from "../ButtonSidebar"
import "./style.css"

export function Sidebar() {
    return (
        <aside className="flex flex-col pt-20 w-72 fixed left-0 h-screen aside-bg z-20">
            <ButtonSidebar to="/dashboard">
                <i>
                    <HomeIcon />
                </i>
                <span>Dashboard</span>
            </ButtonSidebar>
            <h2 className="text-sm ml-8 my-4 font-normal uppercase">
                Busque sua musica
            </h2>
            <ButtonSidebar to="/musics">
                <i>
                    <MusicIcon />
                </i>
                <span>Musicas</span>
            </ButtonSidebar>
            <ButtonSidebar to="/musicians">
                <i>
                    <MusicianIcon />
                </i>
                <span>Músicos</span>
            </ButtonSidebar>
            <ButtonSidebar to="/discs">
                <i>
                    <DiscIcon />
                </i>
                <span>Discos</span>
            </ButtonSidebar>
            <h2 className="text-sm ml-8 my-4 font-normal uppercase">
                Gestão de recursos
            </h2>
            <ButtonSidebar to="/instruments">
                <i>
                    <IntrumentIcon />
                </i>
                <span>Instrumentos</span>
            </ButtonSidebar>
            <ButtonSidebar to="/formats">
                <i>
                    <FormatIcon />
                </i>
                <span>Formato</span>
            </ButtonSidebar>
            <div className="flex flex-col-reverse flex-1 mb-8 px-8">
                <div className="flex items-center bg-white bg-opacity-40 px-4 py-2 rounded text-white">
                    <i className="bg-white flex justify-center items-center w-10 h-10 rounded mr-4">
                        <HomeIcon />
                    </i>
                    <div className="flex flex-col">
                        <p className="text-sm">Regiao</p>
                        <p className="font-bold">Matola</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}
