import { apisLinks } from "../data/data";
const Links = () => {

    return ( 
        <div>
            {apisLinks.map((link,index)=>(
                <div key={index} >
                    <p>{link.title}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Links;