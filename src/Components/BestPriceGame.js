import React, { useState, useEffect, Fragment, useContext } from 'react'
import axios from 'axios'
import '../Styles/BestPriceGame.css'
import { ToggleContainer } from '../App'

const BestPriceGame = () => {

    const { themeSwitch } = useContext(ToggleContainer)
    const [bGames, setBGames] = useState()

    const Api = 'https://cheapshark-game-deals.p.rapidapi.com/deals';
    const Apicall = async () => {
        const Gdata = await axios.get(Api, {
            params: { pageSize: '30' },
            headers: {
                'X-RapidAPI-Key': '1d49b4efabmsh1ef47415959e0dcp1da8c1jsnb501b50c2412',
                'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
            }
        })
        setBGames(Gdata.data)
    }

    console.log(bGames)

    useEffect(() => {
        Apicall()
    }, [])


    return (
        <Fragment>
            <h1 id='Heading' style={themeSwitch ? { color: "#3a86ff" } : null}>Best <span style={themeSwitch ? { color: '#2a9d8f' } : { color: '#ee9b00' }}>Games</span></h1>
            <div className='BestContainer'>
                {bGames && bGames.map((game) => {
                    return (

                        <div className='ImageContainer' key={game.id}>
                            <img src={game.thumb} alt='' />
                            <h4 style={game.title.length >= 30 ? { fontSize: "16px", magrinTop: '5px', width: '150px' } : null} id={themeSwitch ? 'textlight' : 'textDrak'}>{game.title}</h4>
                            <h5 style={themeSwitch ? { color: '#3a86ff' } : null}>{game.salePrice} $</h5>
                        </div>

                    )
                })}
            </div>
        </Fragment>
    )
}

export default BestPriceGame
