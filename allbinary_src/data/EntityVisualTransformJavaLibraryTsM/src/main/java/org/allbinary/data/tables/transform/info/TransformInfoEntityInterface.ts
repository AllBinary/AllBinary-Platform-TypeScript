
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 legal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



            import { Object } from "../../../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../../../java/lang/Exception.js";
        
import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { BasicDataTableInterface } from "../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js";

    
import { TransformInfoInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface TransformInfoEntityInterface extends BasicDataTableInterface {
        

                //@Throws(Exception.constructor)
            
    get(name: string, propertiesHashMap: HashMap<any, any>, pageContext: PageContext): TransformInfoInterface

                //@Throws(Exception.constructor)
            
    getObjectConfigs(storeName: string): Vector

                //@Throws(Exception.constructor)
            
    getNames(storeName: string): Vector

    delete(name: string)

    insert(values: Vector)

    update(updatedValues: HashMap<any, any>)

}
                
            

