
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
        



import { GPoint } from "../../../../../../org/allbinary/graphics/GPoint.js";

    
import { TsUtil } from "../../../../../../org/allbinary/logic/TsUtil.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CacheableInterface } from "../../../../../../org/allbinary/logic/util/cache/CacheableInterface.js";

    
import { ColorDelta } from "../../../../../../org/allbinary/media/image/comparison/color/ColorDelta.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PixelDelta
            extends Object
         implements CacheableInterface {
        

    public static getKey(point: GPoint, colorDelta: ColorDelta): any{
var point = point
var colorDelta = colorDelta



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            appendint(TsUtil.getInstance()!.hashCode(point))!.append(CommonSeps.getInstance()!.UNDERSCORE)!.append(colorDelta!.getKey()!.toString())!.toString();

                        ;
    
}


    private point: GPoint

    private colorDelta: ColorDelta

    private key: any
public constructor (point: GPoint, colorDelta: ColorDelta){

            super();
        var point = point
var colorDelta = colorDelta
this.setPoint(point);
    
this.setColorDelta(colorDelta);
    
this.key= PixelDelta.getKey(this.getPoint(), this.getColorDelta());
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return key;
    
}


    public getPoint(): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return point;
    
}


    public setPoint(point: GPoint){
var point = point
this.point= point;
    
}


    public getColorDelta(): ColorDelta{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return colorDelta;
    
}


    public setColorDelta(colorDelta: ColorDelta){
var colorDelta = colorDelta
this.colorDelta= colorDelta;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append("PixelDelta: Point: ")!.append(this.point.toString())!.append(CommonSeps.getInstance()!.SPACE)!.append(this.colorDelta!.toString())!.toString();

                        ;
    
}


}
                
            

