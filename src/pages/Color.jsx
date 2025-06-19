import { faoriteColors } from "../data/data";
const Colors = () => {

    return ( 
        <div>
            {faoriteColors.map((color,index)=>(
                <div key={index} style={{backgroundColor:color.hex}}>
                    <p>{color.name}</p>
                    <p>{color.hex}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Colors;