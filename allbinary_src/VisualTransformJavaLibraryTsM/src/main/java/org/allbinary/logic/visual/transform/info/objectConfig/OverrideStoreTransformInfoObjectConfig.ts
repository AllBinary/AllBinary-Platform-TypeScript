
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
        



import { AbeClientInformationInterface } from "../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { TransformInfoInterface } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    

export class OverrideStoreTransformInfoObjectConfig extends GenericStoreTransformInfoObjectConfig {
        
public constructor (abeClientInformation: Object, transformInfoInterface: Object)                        

                            : super(abeClientInformation, transformInfoInterface){

            super();
                //var abeClientInformation = abeClientInformation
    //var transformInfoInterface = transformInfoInterface


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (abeClientInformation: Object, transformInfoInterface: Object, document: Object)                        

                            : super(abeClientInformation, transformInfoInterface, document){

            super();
                //var abeClientInformation = abeClientInformation
    //var transformInfoInterface = transformInfoInterface
var document = document


                            //For kotlin this is before the body of the constructor.
                    
this.setDocument(this.generate(this.toXmlDoc()))
}

public constructor (abeClientInformation: Object, transformInfoInterface: Object, name: string, type: string)                        

                            : super(abeClientInformation, transformInfoInterface, name, type){

            super();
                //var abeClientInformation = abeClientInformation
    //var transformInfoInterface = transformInfoInterface
var name = name
var type = type


                            //For kotlin this is before the body of the constructor.
                    
this.setDocument(this.generate(this.toXmlDoc()))
}


                //@Throws(Error::class)
            
    generate(objectConfigDocument: Document): Document{
var objectConfigDocument = objectConfigDocument

    var newObjectConfigDocument: Document = super.generate(objectConfigDocument)!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newObjectConfigDocument;
    
}


}
                
            

