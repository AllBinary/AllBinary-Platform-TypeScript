
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
        



import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AutomaticCacheInterface } from "../../../../../../org/allbinary/logic/util/cache/AutomaticCacheInterface.js";

    
import { CacheInterfaceFactory } from "../../../../../../org/allbinary/logic/util/cache/CacheInterfaceFactory.js";

    
import { CachePolicyFactory } from "../../../../../../org/allbinary/logic/util/cache/CachePolicyFactory.js";

    
import { CacheTypeFactory } from "../../../../../../org/allbinary/logic/util/cache/CacheTypeFactory.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ColorDelta } from "./ColorDelta.js";

export class ColorDeltaFactory
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
    

    var instance: string = "ColorDeltaFactory";
        
        
;
    

        try {
            logUtil!.putF(commonStrings!.START, instance, STATIC_BLOCK);
    
cacheInterface= CacheInterfaceFactory.getInstance(CacheTypeFactory.getInstance()!.CACHE, CachePolicyFactory.getInstance()!.THIRTY_MINUTES_TEN_THOUSAND_MAX);

                         as AutomaticCacheInterface;
    
logUtil!.putF(commonStrings!.END, instance, STATIC_BLOCK);
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, instance, STATIC_BLOCK, e);
    
}

}

                //@Throws(Error::class)
            
    public static getInstance(rgb1: number, rgb2: number): ColorDelta{
var rgb1 = rgb1
var rgb2 = rgb2

    var colorDelta: ColorDelta = cacheInterface!.get(ColorDelta.getKey(rgb1, rgb2));

                         as ColorDelta;
        
        
;
    

                        if(colorDelta == 
                                    null
                                )
                        
                                    {
                                    colorDelta= new ColorDelta(rgb1, rgb2);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return colorDelta;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
private constructor (){

            super();
        }


}
                
            

