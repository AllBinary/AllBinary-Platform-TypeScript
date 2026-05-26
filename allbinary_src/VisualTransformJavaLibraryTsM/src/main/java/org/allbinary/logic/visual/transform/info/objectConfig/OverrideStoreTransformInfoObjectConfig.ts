
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { AbeClientInformationInterface } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      
import { TransformInfoInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      
import { Document } from '../../../../../../../org/w3c/dom/Document.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GenericStoreTransformInfoObjectConfig } from './GenericStoreTransformInfoObjectConfig.js';

export class OverrideStoreTransformInfoObjectConfig extends GenericStoreTransformInfoObjectConfig {
        

public constructor (abeClientInformation: Object, transformInfoInterface: Object){
            super(abeClientInformation, transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (abeClientInformation: Object, transformInfoInterface: Object, document: Object){
            super(abeClientInformation, transformInfoInterface, document);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setDocument(this.generate(this.toXmlDoc()));
    
}


public constructor (abeClientInformation: Object, transformInfoInterface: Object, name: string, type: string){
            super(abeClientInformation, transformInfoInterface, name, type);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setDocument(this.generate(this.toXmlDoc()));
    
}


                //@Throws(Exception.constructor)
            
    generate(objectConfigDocument: Document): Document{

    var newObjectConfigDocument: Document = super.generate(objectConfigDocument)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newObjectConfigDocument;
    
}


}
                
            

