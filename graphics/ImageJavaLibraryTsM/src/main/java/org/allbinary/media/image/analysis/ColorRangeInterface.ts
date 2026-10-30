
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

        


import { awt } from '../../../../../java/awt.js';
//not GWT import const awt

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Color } from './Color.js';
//not GWT import - same folder const Color

export interface ColorRangeInterface {
        

    getMinRed(): number;

    setMinRed(minRed: number): void;

    getMaxRed(): number;

    setMaxRed(maxRed: number): void;

    getMinGreen(): number;

    setMinGreen(minGreen: number): void;

    getMaxGreen(): number;

    setMaxGreen(maxGreen: number): void;

    getMinBlue(): number;

    setMinBlue(minBlue: number): void;

    getMaxBlue(): number;

    setMaxBlue(maxBlue: number): void;

    isInRange(color: Color): boolean;

}

