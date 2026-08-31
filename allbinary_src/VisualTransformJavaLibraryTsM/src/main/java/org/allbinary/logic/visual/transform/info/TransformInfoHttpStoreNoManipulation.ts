
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
      //not GWT import const PageContext = globalThis.javax.servlet.jsp.PageContext;

      
import { TransformInfoObjectConfigNoManipulationFactory } from '../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigNoManipulationFactory.js';
      //not GWT import const TransformInfoObjectConfigNoManipulationFactory = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfigNoManipulationFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoHttpStore } from './TransformInfoHttpStore.js';
//not GWT import const TransformInfoHttpStore = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoHttpStore;

                
export class TransformInfoHttpStoreNoManipulation extends TransformInfoHttpStore {
        

public constructor (propertiesHashMap: HashMap<any, any>, pageContext: PageContext){
            super(propertiesHashMap, pageContext);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    setObjectConfigFile(value: string){
this.setObjectConfigFileName(value);
    
this.setObjectConfigInterface(TransformInfoObjectConfigNoManipulationFactory.getInstance()!.getInstance(this, this.getObjectConfigFilePath()));
    
}


                //@Throws(Exception.constructor)
            
    setObjectConfig(value: string){



                            throw new Exception("Should not set from config");
                    
}


}



