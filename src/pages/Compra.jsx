import React, { useState } from 'react';
import Header from '../components/Header';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function Compra() {
  const [searchTerm, setSearchTerm] = useState('');

  const vehiculos = [
    {
      marca: 'Hyundai',
      color: 'Blanco',
      estado: 'Excelente',
      estadoDetalle: 'Excelente',
      precio: '9,000$',
      disponible: true,
      imagenes: [
        'https://media.drivingelectric.com/image/private/s--CnxC_NAU--/v1606233837/_1898007.jpg',
        'https://soymotor.com/sites/default/files/usuarios/redaccion/portal/jmorillo/hyundai_tucson_6.jpg',
        'https://www.automobile-magazine.fr/asset/cms/870x408/177921/config/126659/tucson-025.jpg'
      ]
    },
    {
      marca: 'Chery',
      color: 'Rojo',
      estado: 'Nuevo',
      estadoDetalle: 'Nuevo',
      precio: '11,000$',
      disponible: true,
      imagenes: [
        'https://altinfo.cl/wp-content/uploads/2021/05/cherytiggo2pro.png', 
        'https://storyboxweb.com/wp-content/uploads/2022/09/cherry.jpg'
      ]
    },
    {
      marca: 'Honda',
      color: 'Rojo',
      estado: 'Seminuevo',
      estadoDetalle: 'Seminuevo',
      precio: '20,000$',
      disponible: false,
      imagenes: [
        'https://images.carexpert.com.au/resize/3000/-/app/uploads/2022/11/2023-Honda-Civic-Type-R_TypeR_Red-28.jpg',
        'https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/09/2023-honda-civic-type-r.jpg'
      ]
    },
    {
      marca: 'Suzuki',
      color: 'Negro',
      estado: 'Nuevo',
      estadoDetalle: 'Nuevo',
      precio: '18,000$',
      disponible: true,
      imagenes: [
        'https://www.dubicars.com/images/6ea31f/w_1300x760/carzaty/d99ff55b-6d10-4ddb-85b4-1eb520ea23d6.jpg', 
        'https://starcars.com/wp-content/uploads/2023/12/JS3TD54V9H4100916-03-768x512.jpg'
      ]
    },
    {
      marca: 'Toyota',
      color: 'Gris',
      estado: 'Excelente',
      estadoDetalle: 'Excelente',
      precio: '14,000$',
      disponible: true,
      imagenes: [
        'https://www.jukom.net/files/samochody/toyota-corolla.jpg',
        'https://tse4.mm.bing.net/th/id/OIP.sAELQnYrxpt3JD5Z4MWR0wHaFP?rs=1&pid=ImgDetMain&o=7&rm=3'
      ]
    },
    {
      marca: 'Mitsubishi',
      color: 'Blanco',
      estado: 'Bueno',
      estadoDetalle: 'Bueno',
      precio: '12,000$',
      disponible: false,
      imagenes: [
        'https://www.carscoops.com/wp-content/uploads/2020/07/mitsubishi-lancer-evo-uk-anniversary-2.jpg',
        'https://tse4.mm.bing.net/th/id/OIP.vQY-HTRrGEaa2qUclkW-2wHaE7?w=1040&h=693&rs=1&pid=ImgDetMain&o=7&rm=3'
      ]
    }
  ];

  const filtered = searchTerm.trim()
    ? vehiculos.filter(v =>
        v.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.color.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : vehiculos;

    
  return (
    <>
      <Header />
      <div className="compra">
        <div className="search-bar">
          <label>VEHÍCULOS </label>
          <input
            type="text"
            value={searchTerm}
            placeholder="Escribe para buscar"
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="vehiculos">
          {filtered.length === 0 ? (
            <p>No se encontraron vehículos</p>
          ) : (
            filtered.map((v, idx) => (
              <div key={idx} className="vehiculo">
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={75}
                  totalSlides={v.imagenes.length}
                  isPlaying
                  infinite
                  interval={3000}
                >
                  <Slider>
                    {v.imagenes.map((img, index) => (
                      <Slide index={index} key={index}>
                        <img src={img} alt={`${v.marca} ${v.color}`} style={{ width: '100%', height: 'auto' }} />
                      </Slide>
                    ))}
                  </Slider>
                  <ButtonBack className="carrusel-btn">‹</ButtonBack>
                  <ButtonNext className="carrusel-btn">›</ButtonNext>
                  <DotGroup />
                </CarouselProvider>

                <div className={`vehiculo-estado ${v.disponible ? 'disponible' : 'agotado'}`}>
                  {v.disponible ? 'Disponible' : 'Agotado'}
                </div>
                <p>
                  <strong>MARCA:</strong> {v.marca}<br />
                  <strong>COLOR:</strong> {v.color}<br />
                  <strong>ESTADO:</strong> {v.estadoDetalle}<br />
                  <strong>PRECIO:</strong> {v.precio}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Compra;
