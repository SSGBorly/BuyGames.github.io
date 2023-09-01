import React, { Fragment, useContext, useEffect, useState } from 'react'
import '../Styles/Main.css'
import Ps5White from '../Images/PS5-Controller-White.png'
import Ps5Blue from '../Images/playstation_controller_Blue.webp'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { ToggleContainer } from '../App'

const Main = () => {

    const { themeSwitch } = useContext(ToggleContainer)
    const [games, setGames] = useState()
    const [indexOf, steIndexOf] = useState(0)

    useEffect(() => {
        fetch('https://api.rawg.io/api/games?key=fdbe67ed42e743c3b6d4ddd9f051bcc6')
            .then(res => res.json())
            .then(json => setGames(json.results.slice(0, 7)))

    }, [])

    return (
        <Fragment>
            <div className='main container'>
                <div className={themeSwitch ? 'bg-Container-light' : "bg-Container-dark"}>
                    {games && <img src={games[indexOf].background_image} alt='' id='Image' draggable={false} />}
                    {games && <h2 style={themeSwitch ? { color: "#2a9d8f" } : { color: "#EE9B00" }}>{games[indexOf].name}</h2>}
                    <MdNavigateBefore fontSize={50} cursor="pointer" onClick={() => steIndexOf(indexOf - 1)} className={indexOf < 1 ? 'disable' : null} color={themeSwitch ? "#3a86ff" : null} id='BeforeOne' />
                    <MdNavigateNext fontSize={50} cursor="pointer" onClick={() => steIndexOf(indexOf + 1)} className={indexOf >= 4 ? 'disable' : null}
                        color={themeSwitch ? "#3a86ff" : null} id='AfterOne' />
                </div>
                <div className='Ps5'>
                    <img src={themeSwitch ? Ps5White : Ps5Blue} alt="" id={themeSwitch ? 'Ps5Blue' : 'Ps5'} />
                </div>
            </div>
        </Fragment>
    )
}

export default Main
