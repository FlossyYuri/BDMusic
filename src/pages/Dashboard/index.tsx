import React from "react"
import AlbumCard from "../../components/ItemCard/album"

const Dashboard = () => {
    return (
        <div className="flex flex-col">
            <div className="flex mt-8">
                <input
                    className="px-8 pl-12 py-4 bg-blue-300 bg-opacity-60 rounded-md placeholder-white "
                    placeholder="Pesquise por sua musica"
                    type="search"
                />
            </div>
            <h1 className="main-title text-white mb-1 mt-40 text-5xl">
                Sistema de gestão <br /> de DISCOGRAFIA
            </h1>
            <p className="main-description text-white mb-12 text-2xl">
                sistema de gestão de discografia feito <br /> com base de dados
                distribuídas.
            </p>
            <h2 className="mb-4 text-white text-2xl">Últimos discos</h2>
            <div className="flex gap-4">
                <AlbumCard />
                <AlbumCard />
            </div>
        </div>
    )
}
export default Dashboard
