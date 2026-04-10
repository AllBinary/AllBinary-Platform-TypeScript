
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

    
import { PageContext } from "../../../../../../javax/servlet/jsp/PageContext.js";

    
import { TransformInfoObjectConfigNoManipulationFactory } from "../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigNoManipulationFactory.js";

    

export class TransformInfoHttpStoreNoManipulation extends TransformInfoHttpStore {
        
public constructor (propertiesHashMap: HashMap<Any, Any>, pageContext: PageContext)                        

                            : super(propertiesHashMap, pageContext){

            super();
            var propertiesHashMap = propertiesHashMap
var pageContext = pageContext


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    setObjectConfigFile(value: string){
var value = value
this.this.setObjectConfigFileName(value)
this.this.setObjectConfigInterface(TransformInfoObjectConfigNoManipulationFactory.getInstance()!.getInstance(this, this.getObjectConfigFilePath()))
}


                //@Throws(Error::class)
            
    setObjectConfig(value: string){
var value = value



                            throw Error("Should not set from config")
}


}
                
            

