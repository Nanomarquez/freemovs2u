import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'


function Home() {
  return (
    <>
        <Main/>
        <Row rowID='1' title='Popular' fetchURL={requests.requestPopular}/>
        <Row rowID='2' title='Lo que se viene' fetchURL={requests.requestUpcoming}/>
        <Row rowID='3' title='Tendencias' fetchURL={requests.requestTrending}/>
        <Row rowID='4' title='Top Rating' fetchURL={requests.requestTopRated}/>
        <Row rowID='5' title='Horror' fetchURL={requests.requestHorror}/>

    </>
  )
}

export default Home