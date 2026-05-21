
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
import { CharacterSet } from '../../../../../org/allbinary/logic/java/character/CharacterSet.js';
      
















                                        
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
                
            

