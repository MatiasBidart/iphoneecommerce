import './App.css';
import ProductBlock from './ProductBlock';

function App() {
  const images = ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHKM3_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1603648995000', 
  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1551489688005', 
  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HLQX2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1509042007532',
  'https://www.arrichetta.com.ar/wp-content/uploads/2020/04/iphone-11-128gb-lte-4g-white-4gb-ram_10036842_2_1568287576.jpg',
  'https://www.ubuy.com.ar/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvZWRjMDAyN2UtOTBhOS00MDlmLWE5ZDgtNzI4ODFiZDBmODI5Ljk3MDVkYTgwYjdhZTdiNmM0ZDhkMTgwOTg4MzFlNGVkLmpwZWc.jpg'
]
  return (
    <div className="App">
      <p className="pddng-10-20rem txt">
      🚛 ENVIOS A TODO EL PAÍS 🚛 </p>
      <header className='clmn'>
      <img id='logo' src="https://img.icons8.com/wired/64/000000/iphone.png"/>
      <p className='ttn-one'>Iphone Import</p>
      <nav>
        <ul className='flx-dsply dsply-nn'>
          <li>Inicio</li>
          <li>Catalogo</li>
          <li>Contacto</li>
        </ul>
      </nav>
      </header>
      <div>
        <div id='hola'>

        </div>
        
        <h1>iPhone 12 ProMax</h1>
        <p className='fnt-smll'>Lorem ipsum dolor anditiis enim amet animi! Nam iste iure ullam aspernatur porro quos maxime voluptatum at fugiat assumenda, inventore delectus reiciendis nihil dolor.</p>
        <button> Comprar Ahora</button>
      </div>
      <hr></hr>
      <h2>Product</h2>
      <section className='sctn-grid'>
     
      <ProductBlock imgURL={images[0]} name='Apple iPhone 12 Pro, 256GB, Gold' price='154.610'/>
      <ProductBlock imgURL={images[1]} name='Apple Airpods Generacion 2' price='29.433,00'/>
      <ProductBlock imgURL={images[2]} name='Apple iPhone X - 256GB-Gris' price='51.771'/>
      <ProductBlock imgURL={images[3]} name='Apple IPhone 11 128GB' price='105.789,49'/>
      <ProductBlock imgURL={images[4]} name="iPhone 8" price='20.000'/>
      </section>
      <button className='blck-bttn'>Ver Catálogo</button>
      <hr></hr>
      <section className='bg-crt-sctn ssj'>
        <div className='brdr-gry img-creen algin-cntr bg-img'>
        </div>
        <div className='brdr-gry img-creen align-cntr'>
          <p className='info-scss'>UPC: 0190198456809	</p>
          <p className='info-scss'>Processor:Hexa Core</p>
          <p className='info-scss'>Screen Size:5.8 in </p>
          <p className='info-scss'>Color:Gray</p>
          <p className='info-scss'>Memory Card Type:Built-In Memory	</p>
          <p className='info-scss'>Lock Status:Factory Unlocked </p>
          <p className='info-scss'>Network:Unlocked</p>
          <p className='info-scss'>Model:Apple iPhone X	</p>
          <p className='info-scss'>Connectivity:Bluetooth, Wi-Fi, NFC	</p>
          <p className='info-scss'>Operating System:iOS</p>
          <p className='info-scss'>Storage Capacity:256 GB</p>
          <p className='info-scss'>Camera Resolution:12.0 MP</p>
          <p className='info-scss'>RAM:3 GB</p>
          <button className='blck-bttn-2'>Comprar Ahora</button>

        </div>
      </section>
      <section className='hgth-rem spc-btwn'>
        <h3> Slider</h3>
        <button className='blck-bttn'>Ver Catálogo</button>
      </section>
      <hr></hr>
      <a href='https://www.youtube.com/' target='blank'>Boton</a>
    </div>
  );
}

export default App;
