
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

    
import { PointFactory } from "../../../../../../org/allbinary/graphics/PointFactory.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AutomaticCacheInterface } from "../../../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js";

    
import { CacheInterfaceFactory } from "../../../../../../org/allbinary/logic/util/cache/CacheInterfaceFactory.js";

    
import { CachePolicyFactory } from "../../../../../../org/allbinary/logic/util/cache/CachePolicyFactory.js";

    
import { CacheTypeFactory } from "../../../../../../org/allbinary/logic/util/cache/CacheTypeFactory.js";

    
import { ColorDelta } from "../../../../../../org/allbinary/media/image/comparison/color/ColorDelta.js";

    
import { ColorDeltaFactory } from "../../../../../../org/allbinary/media/image/comparison/color/ColorDeltaFactory.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

export class PixelDeltaFactory
            extends Object
         {
        

    private cacheInterface: AutomaticCacheInterface = 
                null
            ;
        
        

                init{

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

    var STATIC_BLOCK: string = "Static Block";
        
        
;
    

    var instance: string = "PixelDeltaFactory";
        
        
;
    

        try {
            logUtil!.put(commonStrings!.START, instance, STATIC_BLOCK);
    
cacheInterface= CacheInterfaceFactory.getInstance(CacheTypeFactory.getInstance()!.CACHE, CachePolicyFactory.getInstance()!.THIRTY_MINUTES_TEN_THOUSAND_MAX);

                         as AutomaticCacheInterface;
    
logUtil!.put(commonStrings!.END, instance, STATIC_BLOCK);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, instance, STATIC_BLOCK, e);
    
}

}

                //@Throws(Error::class)
            
    public static getInstance(x: number, y: number, rgb1: number, rgb2: number): PixelDelta{
var x = x
var y = y
var rgb1 = rgb1
var rgb2 = rgb2

    var point: GPoint = PointFactory.getInstance()!.getInstance(x, y)!;
        
        
;
    

    var colorDelta: ColorDelta = ColorDeltaFactory.getInstance(rgb1, rgb2)!;
        
        
;
    

    var pixelDelta: PixelDelta = cacheInterface!.get(PixelDelta.getKey(point, colorDelta));

                         as PixelDelta;
        
        
;
    

                        if(pixelDelta == 
                                    null
                                )
                        
                                    {
                                    pixelDelta= new PixelDelta(point, colorDelta);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return pixelDelta;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
            }


}
                
            

