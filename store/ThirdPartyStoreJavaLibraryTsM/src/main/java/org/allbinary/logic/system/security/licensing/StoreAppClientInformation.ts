
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

        


import { JsType } from '../../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { LongArrayIdentifierInterface } from '../../../../../../org/allbinary/thirdparty/store/LongArrayIdentifierInterface.js';
      //not GWT import const LongArrayIdentifierInterface = globalThis.org.allbinary.thirdparty.store.LongArrayIdentifierInterface;

      
import { JsMethod } from '../../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbeClientInformation } from './AbeClientInformation.js';
//not GWT import const  = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformation;

                
export class StoreAppClientInformation extends AbeClientInformation implements LongArrayIdentifierInterface {
        

    private readonly longArrayIdentifier: number[];

public constructor (name: string, version: string, specialName: string, shortName: string, longArrayIdentifier: number[]){
            super(name, version, specialName, shortName);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.longArrayIdentifier= longArrayIdentifier;
    
}


    public getLongArrayIdentifier(): number[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.longArrayIdentifier;
    
}


}



