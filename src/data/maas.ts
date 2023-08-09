import { IconProps } from 'MaaSIVO-UI'

const title = `Todo acerca${'\n'}de:${'\n'}MaaS (Movilidad como Servicio)`

const intro =
  'También llamado &quot;Sistema Integrado de Transporte&quot; es un modelo se enfoca en la integración de diferentes modos de transporte (como autobuses, trenes, metro, tranvías, bicicletas, etc.) en una red de transporte coherente y conectada, con el fin de brindar a los usuarios opciones de movilidad eficientes, seguras y sostenibles.'

const intro2 =
  'En un sistema integrado de transporte, los diferentes modos de transporte son diseñados y planificados para complementarse entre sí, ofreciendo conexiones rápidas y convenientes en diferentes puntos de la ciudad. Además, se promueve la intermodalidad, es decir, la combinación de diferentes modos de transporte en un mismo viaje, para aumentar la eficiencia y reducir los tiempos de viaje.'

const features = {
  title:
    'Este modelo de movilidad también puede incluir tecnologías innovadoras como:',
  list: [
    'Aplicaciones móviles de transporte público',
    'Sistemas de pago integrados',
    'Sistemas de información en tiempo real',
    'Soluciones de transporte compartido, entre otros.',
  ],
}

const sub1 = '¡Aquí es donde entra MaaS!'
const sub2 = '¿Qué es la Movilidad como Servicio?'

const def =
  'Es la integración diversos medios de transporte público y privado a través de una interfaz digital fácil de usar, para personalizar los viajes de “puerta a puerta” en cualquier momento y en cualquier lugar.'
const sub3 = '¿Qué hace que la Movilidad Integrada se considere como MaaS?'

const iconSet1 = [{ name: 'HouseFilled' }, { name: 'Work' }] as IconProps[]

const iconSet2 = [
  { name: 'Scooter' },
  { name: 'Bycicle' },
  { name: 'Bus' },
] as IconProps[]

const function1 =
  'Saber que cada usuario precisa movilidad entre un punto específico “A” a un punto específico “B”. Por ejemplo: de la puerta de su hogar a la puerta de su trabajo.'
const function2 =
  'Saber que dicha movilidad contempla igualmente medios de micro movilidad y medios de transporte público.'

const difference = `A diferencia de servicios de renta de vehículos, búsqueda de rutas y mapas y planes de boletos de transporte público como aquellos incluidos en tarjetas de prepago o smart cards que conceptualmente parten de una oferta de transporte “yo puedo llevarte de aquí a allá”,${'\n'}una aplicación móvil de MaaS debe partir de una demanda de transporte “yo necesito opciones para ir de aquí a allá”`

const perks = [
  {
    title: 'Reducción de costos',
    content:
      'Menor uso de estacionamientos, gasolina, mantenimiento vehicular, etc.',
  },
  {
    title: 'Reducción de tiempos',
    content:
      'Encontrar las rutas de transporte más rápidas y viables para el usuario.',
  },
  {
    title: 'Sostenibilidad',
    content:
      'No depender tanto del coche particular, y así, al hacer uso tanto del transporte publico como privado, ayudar a disminuir la contaminación y mejorar la calidad de vida.',
  },
]

const leftCardFeatures = [
  'Información sobre modos de transporte de micro movilid(patines eléctricos, bicicletas, etc.) para el “primer y últokilómetro”.',
  `Información sobre modos de transporte urbano cómo el autobús de
  tránsito rápido, metro, tren, o autobuses eléctricos de cero
  emisiones.`,
  `Información sobre modos de transporte urbano cómo el autobús de
  tránsito rápido, metro, tren, o autobuses eléctricos de cero
  emisiones.`,
  `    Un solo método seguro de pago para transporte público y medios
  alternativos de micro movilidad.`,
]

const rightCardFeatures = [
  'Monitoreo de ruta de principio a fin.',
  `Una matriz sobre patrones de transporte urbanos que puede ser
usada para analizar necesidades masivas de movilidad a nivel de
diseño de política pública.`,
]
export {
  title,
  intro,
  intro2,
  features,
  sub1,
  sub2,
  def,
  sub3,
  iconSet1,
  iconSet2,
  function1,
  function2,
  difference,
  perks,
  leftCardFeatures,
  rightCardFeatures,
}
