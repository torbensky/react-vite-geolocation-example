import {GeoLocation} from './geo'

export function LocationDisplay(props: {location?: GeoLocation}){
    return props.location ? <>        
        <p>Latitude: {props.location!.coords.latitude}</p>
        <p>Longitude: {props.location!.coords.longitude}</p>
        <p>Last Updated: {new Date(props.location!.timestamp).toLocaleTimeString()}</p>
    </> : <p>Waiting for location...</p>
}