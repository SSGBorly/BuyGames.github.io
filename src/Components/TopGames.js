import React, { Fragment, useReducer } from 'react'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { useEffect, useState, useContext } from 'react'
import '../Styles/TopGames.css'
import { ToggleContainer } from '../App'
import GamingInfo from '../Gameinfo/GamingInfo'
import axios from 'axios'
import BestPriceGame from './BestPriceGame'


const TopGames = () => {

    const { themeSwitch } = useContext(ToggleContainer)
    const [topGames, setTopGame] = useState()
    const [slider, setSlider] = useState(false)
    const [toggle, setToggle] = useState(false)

    const Starting = {
        Title: '',
        Img: '',
        Price: '',
        SalePrice: '',
        // Url: ''
    }

    const GameShown = (game) => {
        dispatch({ type: 'click', payload: game })
        setToggle(true)
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'click':
                return {
                    Title: Starting.Title = action.payload.title,
                    Img: Starting.Img = action.payload.thumb,
                    SalePrice: Starting.SalePrice = action.payload.salePrice,
                    Price: Starting.Price = action.payload.normalPrice,
                    // Url: Starting.Url = action.payload.stores.store.name

                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, Starting)

    const Api = 'https://cheapshark-game-deals.p.rapidapi.com/deals?lowerPrice=0&steamRating=0&desc=0&output=json&steamworks=0&sortBy=Deal%20Rating&AAA=0&pageSize=60&exact=0&upperPrice=50&pageNumber=0&onSale=0&metacritic=0&storeID%5B0%5D=1%2C2%2C3';
    const Apicall = async () => {
        const Gdata = await axios.get(Api, {
            params: { pageSize: '30' },
            headers: {
                'X-RapidAPI-Key': '1d49b4efabmsh1ef47415959e0dcp1da8c1jsnb501b50c2412',
                'X-RapidAPI-Host': 'cheapshark-game-deals.p.rapidapi.com'
            }
        })
        setTopGame(Gdata.data.slice(0, 12))
    }


    useEffect(() => {
        Apicall()
    }, [])




    return (
        <Fragment>
            <h1 id='Heading' style={themeSwitch ? { color: "#3a86ff" } : null}>Top <span style={themeSwitch ? { color: '#2a9d8f' } : { color: '#ee9b00' }}>Games</span></h1>
            <div className='Game-container'>
                {topGames && topGames.map((game) => {
                    return (
                        <div className={slider ? 'Info-Slider' : 'Info-container'} key={game.id}>
                            <img src={game.thumb} alt='' id='images' onClick={() => GameShown(game)} />
                            <div className='Title'>
                                <h4 className='' style={themeSwitch ? { color: "#2a9d8f" } : { color: "#EE9B00" }}>{game.title}</h4>
                                <h5 style={themeSwitch ? { color: '#3a86ff' } : null}>{game.normalPrice} $</h5>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
            <MdNavigateBefore id={slider ? 'Prev' : 'DisabledPrev'} fontSize={50} cursor="pointer" onClick={() => setSlider(false)} color={themeSwitch ? "#3a86ff" : null} />
            <MdNavigateNext id={slider ? 'DisabledNext' : 'Next'} fontSize={50} cursor="pointer" onClick={() => setSlider(true)} color={themeSwitch ? "#3a86ff" : null} />
            {toggle && Starting.Img && <GamingInfo Date={Starting} setToggle={setToggle} />}
            <BestPriceGame />
        </Fragment >
    )
}

export default TopGames
