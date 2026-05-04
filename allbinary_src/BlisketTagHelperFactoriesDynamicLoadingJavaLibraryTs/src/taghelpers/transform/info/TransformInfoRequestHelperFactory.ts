
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';


        
import { HashMap } from '../../../java/util/HashMap.js';

    
import { PageContext } from '../../../javax/servlet/jsp/PageContext.js';

    
import { LicensingException } from '../../../org/allbinary/logic/system/security/licensing/LicensingException.js';

    
import { TagHelperFactoryInterface } from '../../../admin/taghelpers/TagHelperFactoryInterface.js';

    
import { HelperFactory } from '../../../admin/taghelpers/HelperFactory.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TransformInfoRequestHelperFactory
            extends Object
         implements TagHelperFactoryInterface {
        

    private static readonly CLASSNAME: string = "taghelpers.transform.info.TransformInfoRequestHelper";

    private static readonly FACTORYNAME: string = "TransformInfoRequestHelperFactory";
public constructor (){

            super();
        }


                //@Throws(LicensingException.constructor)
            
    public getInstance(hashMap: HashMap<any, any>, pageContext: PageContext): any{
var hashMap = hashMap
var pageContext = pageContext



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return HelperFactory.getInstance(FACTORYNAME, CLASSNAME, hashMap, pageContext);;
    
}


}
                
            

