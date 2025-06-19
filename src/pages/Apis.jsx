import { apisLinks } from "../data/data";
const Apis = () => {

    return ( 
        <div>
            {apisLinks.map((api,index)=>(
                <div key={index} >
                    <p>{api.title}</p>
                    <p>{api.url}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Apis;