import React from 'react'
import Header from "../components/header";
import Footer from "../components/footer";
import MainContent from "../components/MainContent";
import { Helmet } from "react-helmet-async";
export default function Javascript() {
  return (
    <>
    <Helmet>
        <title>Javacript Page</title>
        <meta
      name="description"
      content="Web site created using create-react-app"
    />
      </Helmet>
    <Header/>
    <MainContent PageName="Javascript"/>

    <Footer/>
    </>
  )
}
