import React from "react"
import MocImage from "../../assets/images/album1.png"
import "./styles.css"

const AlbumCard = () => {
    return (
        <div className="album-card flex flex-col rounded">
            <img className="w-28 rounded" src={MocImage} alt="Album Logo" />
            <div className="flex flex-col items-center p-1">
                <h4 className="text-base text-black">Titulo</h4>
                <p className="text-sm text-black">Sergio</p>
            </div>
        </div>
    )
}
export default AlbumCard
