
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { PositionStrings } 
const PositionStrings = globalThis.org.allbinary.math.PositionStrings;
type PositionStrings<T = any, U = any> = typeof PositionStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PositionStrings;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LayerUtil
            extends Object
         {
        

    private static readonly HASHTABLE: string = "Hashtable: ";

    public static toString(hashtable: ABHashtable<any, any>, x: number, y: number, z: number): string{

    let commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    let positionStrings: PositionStrings = PositionStrings.getInstance()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(LayerUtil.HASHTABLE);
    
stringBuffer!.append(StringUtil.getInstance()!.toString(hashtable));
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(positionStrings!.X_LABEL);
    
stringBuffer!.appendint(x);
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(positionStrings!.Y_LABEL);
    
stringBuffer!.appendint(y);
    
stringBuffer!.append(commonSeps!.SPACE);
    
stringBuffer!.append(positionStrings!.Z_LABEL);
    
stringBuffer!.appendint(z);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

