import React, { Fragment, useContext } from 'react'
import '../Styles/NavberS.css'
import { ToggleContainer } from '../App'
import { AiFillGithub } from 'react-icons/ai'


const Navbar = () => {

    const { themeSwitch, setThemeSwitch } = useContext(ToggleContainer)

    return (
        <Fragment>
            <nav style={themeSwitch ? { backgroundColor: '#fff' } : null}>
                <div className='container'>
                    <span id='logoName1' style={themeSwitch ? { color: '#3a86ff' } : null}>Buy</span><span id='logoName2' style={themeSwitch ? { color: '#2a9d8f' } : null}>Games</span>
                </div>
                <div className='End'>
                    <div className={themeSwitch ? "Toggle-Light" : "Toggle-Container"} onClick={() => setThemeSwitch(!themeSwitch)}>
                        <div className={themeSwitch ? "Toggle-Switcher-Moved" : "Toggle-Switcher"}></div>
                    </div>
                </div>
                <AiFillGithub to={'https://github.com/SSGBorly'} className='icon' style={themeSwitch ? { color: '#3a86ff' } : null} fontSize={30} cursor="pointer" />
            </nav>
        </Fragment>
    )
}

export default Navbar
