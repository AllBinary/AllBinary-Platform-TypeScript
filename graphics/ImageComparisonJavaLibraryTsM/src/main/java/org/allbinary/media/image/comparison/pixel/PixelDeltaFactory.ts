
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
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not plain js import { GPoint } from '../../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not plain js import { PointFactory } from '../../../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AutomaticCacheInterface } from '../../../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js';
      //not GWT import const AutomaticCacheInterface = globalThis.org.allbinary.logic.util.cache.AutomaticCacheInterface;

      
import { CacheInterfaceFactory } from '../../../../../../org/allbinary/logic/util/cache/CacheInterfaceFactory.js';
      //not GWT import const CacheInterfaceFactory = globalThis.org.allbinary.logic.util.cache.CacheInterfaceFactory;

      
import { CachePolicyFactory } from '../../../../../../org/allbinary/logic/util/cache/CachePolicyFactory.js';
      //not GWT import const CachePolicyFactory = globalThis.org.allbinary.logic.util.cache.CachePolicyFactory;

      
import { CacheTypeFactory } from '../../../../../../org/allbinary/logic/util/cache/CacheTypeFactory.js';
      //not GWT import const CacheTypeFactory = globalThis.org.allbinary.logic.util.cache.CacheTypeFactory;

      
import { ColorDelta } from '../../../../../../org/allbinary/media/image/comparison/color/ColorDelta.js';
      //not GWT import const ColorDelta = globalThis.org.allbinary.media.image.comparison.color.ColorDelta;

      
import { ColorDeltaFactory } from '../../../../../../org/allbinary/media/image/comparison/color/ColorDeltaFactory.js';
      //not GWT import const ColorDeltaFactory = globalThis.org.allbinary.media.image.comparison.color.ColorDeltaFactory;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PixelDelta } from './PixelDelta.js';
//not GWT import const  = globalThis.org.allbinary.media.image.comparison.pixel.PixelDelta;

                
export class PixelDeltaFactory
            extends Object
         {
        

    private static cacheInterface: AutomaticCacheInterface = 
                null
            ;

                private static initResult: number = PixelDeltaFactory.init();
                private static init(): number { 
                    

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var STATIC_BLOCK: string = "Static Block";;
    

    var instance: string = "PixelDeltaFactory";;
    

        try {
            logUtil!.putF(commonStrings!.START, instance, STATIC_BLOCK);
    
PixelDeltaFactory.cacheInterface= CacheInterfaceFactory.getInstance(CacheTypeFactory.getInstance()!.CACHE, CachePolicyFactory.getInstance()!.THIRTY_MINUTES_TEN_THOUSAND_MAX) as AutomaticCacheInterface;
    
logUtil!.putF(commonStrings!.END, instance, STATIC_BLOCK);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, instance, STATIC_BLOCK, e);
    
}



                    return 0;
                }
            
                //@Throws(Exception.constructor)
            
    public static getInstance(x: number, y: number, rgb1: number, rgb2: number): PixelDelta{

    var point: GPoint = PointFactory.getInstance()!.createXY(x, y)!;;
    

    var colorDelta: ColorDelta = ColorDeltaFactory.getInstance(rgb1, rgb2)!;;
    

    var pixelDelta: PixelDelta = PixelDeltaFactory.cacheInterface!.get(PixelDelta.getKey(point, colorDelta)) as PixelDelta;;
    

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



