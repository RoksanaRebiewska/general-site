import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from "gatsby"
import SliderLipton from "../components/CarouselLipton/Carousel"
import ButtonRadius from "../components/Button"
import Tabs from "../components/TabBrand/TabBrand"
import Popup from "../components/Popup/Popup"
import RichText from "../components/RichText/RichText"
import Example from "../components/Modal/Modal"
import Quotes from "../components/Quotes/Quotes"
// import Accordion from '../components/Accordion/Accordion'
import CustomerChat from "../components/Messenger/Messenger"


const Section = styled.section`
    width:100%;
    max-width:1200px;
    margin:auto;
`;


const IndexPage = () => {
  
  return (
   <>
    <Section>    
    
      
    <SliderLipton></SliderLipton>
    </Section>
    </>
  )
}
export default IndexPage
