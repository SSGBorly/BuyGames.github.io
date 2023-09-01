import React, { Fragment } from 'react'
import { useContext } from 'react'
import './GamingInfo.css'
import { ToggleContainer } from '../App'
import { IoCloseSharp } from 'react-icons/io5'
import { HiShoppingCart } from 'react-icons/hi'


function GamingInfo({ Date, setToggle }) {

    const { themeSwitch } = useContext(ToggleContainer)

    return (
        <Fragment>
            <div className='GInfo-container'>
                <img src={Date.Img} alt="" />
                <div id='Gameinfo'>
                    <IoCloseSharp color={themeSwitch ? 'black' : null} fontSize={30} cursor="pointer" id='Close' onClick={() => setToggle(false)} />
                    <h1 style={themeSwitch ? { color: "#2a9d8f" } : { color: "#EE9B00" }} >{Date.Title}</h1>
                    <h4 style={themeSwitch ? { color: '#3a86ff' } : null}> Normal Price : {Date.Price} $</h4>
                    <h4 style={themeSwitch ? { color: '#3a86ff' } : null}> Saleing Price : {Date.SalePrice} $</h4>
                    <a href={Date}><span id='Buy'>Buy Now <HiShoppingCart fontSize={25} /></span></a>
                </div>
            </div>
        </Fragment >
    )
}

export default GamingInfo
