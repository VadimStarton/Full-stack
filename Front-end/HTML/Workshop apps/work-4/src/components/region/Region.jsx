import {Country} from '../country/Country';
import style from './Region.modules.css';


export function Region ({title, countries}) {
    console.log(countries);
return (
    <div className={style.region}>
        <h2>{title}</h2>
        <div className={style.details}></div>
    </div>
    
)

}