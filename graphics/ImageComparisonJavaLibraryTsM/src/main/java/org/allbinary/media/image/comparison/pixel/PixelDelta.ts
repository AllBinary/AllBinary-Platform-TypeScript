
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
        
//not plain js import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
import { TsUtil } from '../../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { CacheableInterface } from '../../../../../../org/allbinary/logic/util/cache/CacheableInterface.js';
//not GWT import const CacheableInterface = globalThis.org.allbinary.logic.util.cache.CacheableInterface;

      
import { ColorDelta } from '../../../../../../org/allbinary/media/image/comparison/color/ColorDelta.js';
//not GWT import const ColorDelta = globalThis.org.allbinary.media.image.comparison.color.ColorDelta;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PixelDelta
            extends Object
         implements CacheableInterface {
        

    public static getKey(point: GPoint, colorDelta: ColorDelta): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().appendint(TsUtil.getInstance()!.hashCode(point))!.append(CommonSeps.getInstance()!.UNDERSCORE)!.append(colorDelta!.getKey()!.toString())!.toString();;
    
}


    private point: GPoint;

    private colorDelta: ColorDelta;

    private key: any;

public constructor (point: GPoint, colorDelta: ColorDelta){

            super();
        this.setPoint(point);
    
this.setColorDelta(colorDelta);
    
this.key= PixelDelta.getKey(this.getPoint(), this.getColorDelta());
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.key;
    
}


    public getPoint(): GPoint{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.point;
    
}


    public setPoint(point: GPoint){
this.point= point;
    
}


    public getColorDelta(): ColorDelta{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.colorDelta;
    
}


    public setColorDelta(colorDelta: ColorDelta){
this.colorDelta= colorDelta;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().append("PixelDelta: Point: ")!.append(this.point.toString())!.append(CommonSeps.getInstance()!.SPACE)!.append(this.colorDelta!.toString())!.toString();;
    
}


}



