
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { CacheableInterface } from '../../../../../../org/allbinary/logic/util/cache/CacheableInterface.js';
//not GWT import const CacheableInterface

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ColorDelta
            extends Object
         implements CacheableInterface {
        

    public static getKey$overload2(rgb1: number, rgb2: number): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().append(rgb1.toString())!.append(CommonSeps.getInstance()!.UNDERSCORE)!.append(rgb2.toString())!.toString();;
    
}


    private rgb1: number= 0;

    private rgb2: number= 0;

    private key: any;

public constructor (rgb1: number, rgb2: number){

            super();
        this.setRgb1(rgb1);
    
this.setRgb2(rgb2);
    
this.key= ColorDelta.getKey(rgb1, rgb2);
    
}

getKey(...args: any[]): any {
   
    if (args.length === 0) return this.getKey$overload1();
   
    if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') return this.getKey$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: getKey'); }
  
    public getKey$overload1(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.key;
    
}


    public getRgb1(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rgb1;
    
}


    setRgb1(rgb1: number){
this.rgb1= rgb1;
    
}


    public getRgb2(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rgb2;
    
}


    setRgb2(rgb2: number){
this.rgb2= rgb2;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().append("ColorDelta: ")!.append(StringUtil.getInstance()!.toString(this.getKey()))!.append(" RGB1: ")!.appendint(this.getRgb1())!.append(" RGB2: ")!.appendint(this.getRgb2())!.toString();;
    
}


}

