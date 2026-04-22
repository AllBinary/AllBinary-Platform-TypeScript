
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TransformInfoFactoryInterface } from "./TransformInfoFactoryInterface.js";

import { TransformInfoInterface } from "./TransformInfoInterface.js";

export class TransformInfoHttpStoreFactory
            extends Object
         implements TransformInfoFactoryInterface {
        

    private static readonly instance: TransformInfoHttpStoreFactory = new TransformInfoHttpStoreFactory();
        
        

    public static getInstance(): TransformInfoHttpStoreFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
        }


                //@Throws(Error::class)
            
    public getInstance(databaseHashMap: HashMap<any, any>, propertiesHashMap: HashMap<any, any>, pageContext: PageContext): TransformInfoInterface{
var databaseHashMap = databaseHashMap
var propertiesHashMap = propertiesHashMap
var pageContext = pageContext



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TransformInfoHttpStore(databaseHashMap, propertiesHashMap, pageContext);
    
}


}
                
            

