
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

        


            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { AbeClientInformationInterface } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { TransformInfoInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

import { Document } from '../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GenericStoreTransformInfoObjectConfig } from './GenericStoreTransformInfoObjectConfig.js';
//sameFolderImports - not GWT import - same folder const GenericStoreTransformInfoObjectConfig

export class OverrideStoreTransformInfoObjectConfig extends GenericStoreTransformInfoObjectConfig {
        

    public constructor(...args: any[]) {
        if(args.length === 2) {
            const abeClientInformation = args[0];
            const transformInfoInterface = args[1];
            super(abeClientInformation, transformInfoInterface);
            this.constructor$0(abeClientInformation, transformInfoInterface);
            
        }
        else if(args.length === 3) {
            const abeClientInformation = args[0];
            const transformInfoInterface = args[1];
            const document = args[2];
            super(abeClientInformation, transformInfoInterface, document);
            this.constructor$1(abeClientInformation, transformInfoInterface, document);
            
        }
        else if(args.length === 4) {
            const abeClientInformation = args[0];
            const transformInfoInterface = args[1];
            const name = args[2];
            const type = args[3];
            super(abeClientInformation, transformInfoInterface, name, type);
            this.constructor$2(abeClientInformation, transformInfoInterface, name, type);
            
        }
        
    }
    
    private constructor$0(abeClientInformation: Object, transformInfoInterface: Object): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
    private constructor$1(abeClientInformation: Object, transformInfoInterface: Object, document: Object): void {
        

                            //For kotlin this is before the body of the constructor.
                    
this.setDocument(this.generate(this.toXmlDoc()));
    

    }
    
    private constructor$2(abeClientInformation: Object, transformInfoInterface: Object, name: string, type: string): void {
        

                            //For kotlin this is before the body of the constructor.
                    
this.setDocument(this.generate(this.toXmlDoc()));
    

    }
    
                //@Throws(Exception.constructor)
            
    generate(objectConfigDocument: Document): Document{

    let newObjectConfigDocument: Document = super.generate(objectConfigDocument)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newObjectConfigDocument;
    
}


}

