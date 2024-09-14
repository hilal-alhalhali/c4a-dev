import React from 'react'
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/MainContent";
import { Helmet } from "react-helmet-async";
export default function Html() {
  return (
    <>
    <Helmet>
        <title>Html Page</title>
        <meta
      name="description"
      content="Web site created using create-react-app"
    />
      </Helmet>
   <Header/>
   <MainContent PageName="Html"/>

   <Footer/>
  </>
  )
}
