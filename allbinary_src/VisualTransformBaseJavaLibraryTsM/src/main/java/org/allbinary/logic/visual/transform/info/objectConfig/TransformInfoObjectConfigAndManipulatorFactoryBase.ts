
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../../../../java/lang/RuntimeException.js';
        
import { AbPath } from '../../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

import { AbeClientInformationInterface } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

import { TransformInfoInterface } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Document } from '../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoObjectConfigAndManipulatorFactoryInterface } from './TransformInfoObjectConfigAndManipulatorFactoryInterface.js';
//sameFolderImports - not GWT import - same folder const TransformInfoObjectConfigAndManipulatorFactoryInterface
import { TransformInfoObjectConfigInterface } from './TransformInfoObjectConfigInterface.js';
//sameFolderImports - not GWT import - same folder const TransformInfoObjectConfigInterface

export class TransformInfoObjectConfigAndManipulatorFactoryBase
            extends Object
         implements TransformInfoObjectConfigAndManipulatorFactoryInterface {
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
getInstance(...args: any[]): any {
   
    if (args.length === 3) return this.getInstance$overload1(args[0], args[1], args[2]);
   
    if (args.length === 2) return this.getInstance$overload2(args[0], args[1]);
   
    if (args.length === 3) return this.getInstance$overload3(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
                //@Throws(Exception.constructor)
            
    public getInstance$overload1(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface, objectConfigFileAbPath: AbPath): TransformInfoObjectConfigInterface{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public getInstance$overload2(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface): TransformInfoObjectConfigInterface{



                            throw new RuntimeException();
                    
}


                //@Throws(Exception.constructor)
            
    public getInstance$overload3(abeClientInformation: AbeClientInformationInterface, transformInfoInterface: TransformInfoInterface, document: Document): TransformInfoObjectConfigInterface{



                            throw new RuntimeException();
                    
}


}

