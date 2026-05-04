
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../java/lang/Object.js';


        
import { HashMap } from '../../java/util/HashMap.js';

    
import { PageContext } from '../../javax/servlet/jsp/PageContext.js';

    
import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TagHelperFactoryInterface } from './TagHelperFactoryInterface.js';
import { HelperFactory } from './HelperFactory.js';

export class SpecialItemsHelperFactory
            extends Object
         implements TagHelperFactoryInterface {
        

    private static readonly CLASSNAME: string = "admin.taghelpers.SpecialItemsHelper";

    private static readonly FACTORYNAME: string = "SpecialItemsHelperFactory";
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
                
            

