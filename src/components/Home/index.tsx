import React from 'react'
import Trending from '../Trending'
import Discover from '../Discover'
import Search from '../Search'
import { MainContainer } from '../../Styles'



const HomeContainer = () => {
 return (
   <MainContainer>
    <Discover/>
    <Search/>
   </MainContainer>
 )
}

export default HomeContainer