
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



import { AbPath } from "../../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbeClientInformationInterface } from "../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { TransformInfoInterface } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TransformInfoObjectConfigAndManipulatorFactoryInterface } from "./TransformInfoObjectConfigAndManipulatorFactoryInterface.js";

import { TransformInfoObjectConfigInterface } from "./TransformInfoObjectConfigInterface.js";

export class TransformInfoObjectConfigAndManipulatorFactoryBase
            extends Object
         implements TransformInfoObjectConfigAndManipulatorFactoryInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface, objectConfigFileAbPath: AbPath): TransformInfoObjectConfigInterface{
    //var abeClientInformation = abeClientInformation
var transformInfoInterface = transformInfoInterface
var objectConfigFileAbPath = objectConfigFileAbPath



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface): TransformInfoObjectConfigInterface{
    //var abeClientInformation = abeClientInformation
var transformInfoInterface = transformInfoInterface



                            throw new RuntimeException()
}


                //@Throws(Error::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface, document: Document): TransformInfoObjectConfigInterface{
    //var abeClientInformation = abeClientInformation
var transformInfoInterface = transformInfoInterface
var document = document



                            throw new RuntimeException()
}


}
                
            

