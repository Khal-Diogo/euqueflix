import React from 'react';
import Menu from './components/menu/menu.jsx'
import dadosInicias from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain/index'
import Carousel from './components/Carousel/index'

function App() {
  return (
    <div style={{background:"#141414"}}>
      <Menu />
      
      <BannerMain
        videoTitle='Maaaainheee'
        url={dadosInicias.categorias[0].videos[0].url}
        videoDescription='Olha so .... fui Eu Que Flix :D' />

        <Carousel ignoreFirstVideo
                  category={dadosInicias.categorias[0]} />

        <Carousel ignoreFirstVideo
                  category={dadosInicias.categorias[1]} />

        <Carousel
                  category={dadosInicias.categorias[2]} />

        <Carousel
                  category={dadosInicias.categorias[3]} />

        <Carousel ignoreFirstVideo
                  category={dadosInicias.categorias[4]} />

        <Carousel ignoreFirstVideo
                  category={dadosInicias.categorias[5]} />

    </div>
  );
}

export default App;