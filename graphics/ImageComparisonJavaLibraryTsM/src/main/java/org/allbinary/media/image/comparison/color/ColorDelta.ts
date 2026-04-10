
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
        



import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CacheableInterface } from "../../../../../../org/allbinary/logic/util/cache/CacheableInterface.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    

export class ColorDelta
            extends Object
        
                , CacheableInterface {
        

    public static getKey(rgb1: number, rgb2: number): any = {}{
var rgb1 = rgb1
var rgb2 = rgb2



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringMaker().
                            append(rgb1.toString())!.append(CommonSeps.getInstance()!.UNDERSCORE)!.append(rgb2.toString())!.toString();
    
}


    private rgb1: number= 0

    private rgb2: number= 0

    private key: any = {}
public constructor (rgb1: number, rgb2: number){

            super();
            var rgb1 = rgb1
var rgb2 = rgb2
this.setRgb1(rgb1)
this.setRgb2(rgb2)
this.key= ColorDelta.getKey(rgb1, rgb2)
}


    public getKey(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return key;
    
}


    public getRgb1(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rgb1;
    
}


    setRgb1(rgb1: number){
var rgb1 = rgb1
this.rgb1= rgb1
}


    public getRgb2(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return rgb2;
    
}


    setRgb2(rgb2: number){
var rgb2 = rgb2
this.rgb2= rgb2
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringMaker().
                            append("ColorDelta: ")!.append(StringUtil.getInstance()!.toString(this.getKey()))!.append(" RGB1: ")!.appendint(this.getRgb1())!.append(" RGB2: ")!.appendint(this.getRgb2())!.toString();
    
}


}
                
            

