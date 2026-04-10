
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { BasicDataTableInterface } from "../../../../../../org/allbinary/data/tables/BasicDataTableInterface.js";

    
import { TransformInfoInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    

interface TransformInfoEntityInterface extends BasicDataTableInterface {
        

                @Throws(Exception::class)
            
    public get(name: string, propertiesHashMap: HashMap<Any, Any>, pageContext: PageContext): TransformInfoInterface

                @Throws(Exception::class)
            
    public getObjectConfigs(storeName: string): Vector

                @Throws(Exception::class)
            
    public getNames(storeName: string): Vector

    public delete(name: string)

    public insert(values: Vector)

    public update(updatedValues: HashMap<Any, Any>)

}
                
            

