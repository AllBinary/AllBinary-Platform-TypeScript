
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
        



//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { CharacterSet } from '../../../../../org/allbinary/logic/java/character/CharacterSet.js';
      const CharacterSet = globalThis.org.allbinary.logic.java.character.CharacterSet;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface OperatingSystemInterface {
        

    getName(): string

    getVersion(): string

    getArch(): string

    getCharacterSet(): CharacterSet

    isOverScan(): boolean

    getOverScanXPercent(): number

    getOverScanYPercent(): number

    isScalable(): boolean

    isAutoHide(): boolean

    toString(): string

}



