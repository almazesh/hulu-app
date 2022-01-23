import React from 'react'
import HeaderItem from './HeaderItem'
import {AiOutlineHome, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'
import {BsLightningCharge , BsFillCollectionFill} from 'react-icons/bs'
import {HiOutlineBadgeCheck} from 'react-icons/hi'



function Header() {
    return (
        <div className='header'>
            <div className='headerItem'>
                <HeaderItem title="HOME" AiOutlineHome={AiOutlineHome}/>
                <HeaderItem title="TRENDERING" AiOutlineHome={BsLightningCharge}/>
                <HeaderItem title="VERIFIED" AiOutlineHome={HiOutlineBadgeCheck}/>
                <HeaderItem title="COLLECTIONS" AiOutlineHome={BsFillCollectionFill}/>
                <HeaderItem title="SEARCH" AiOutlineHome={AiOutlineSearch}/>
                <HeaderItem title="USER" AiOutlineHome={AiOutlineUser}/>
            </div>
            <img width={200} height={150} src='https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png'/>
        </div>
    )
}

export default Header


