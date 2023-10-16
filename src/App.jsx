import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { Car } from './components/Icons'
import L from 'leaflet'

export default function App () {
  const position = [51.505, -0.09]
  const CarIcon = L.divIcon({
    html: `${Car}`,
    className: 'svg-icon'
  })
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position} icon={CarIcon} />
    </MapContainer>
  )
}
