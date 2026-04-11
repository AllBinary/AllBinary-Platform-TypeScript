
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
        



import { BasicArrayListResetablePool } from "../../../../org/allbinary/logic/util/cache/BasicArrayListResetablePool.js";

    
import { CacheableInterface } from "../../../../org/allbinary/logic/util/cache/CacheableInterface.js";

    
import { CacheableInterfaceFactoryInterface } from "../../../../org/allbinary/logic/util/cache/CacheableInterfaceFactoryInterface.js";

    
import { PoolInterface } from "../../../../org/allbinary/logic/util/cache/PoolInterface.js";

    

export class ImageArrayRotationAnimationPool extends BasicArrayListResetablePool {
        

    private IMAGE_ROTATION_ANIMATION_POOL: PoolInterface = new ImageArrayRotationAnimationPool(new ImageArrayRotationAnimationCacheableInterfaceFactory());
        
        

    public static getInstance(): PoolInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageArrayRotationAnimationPool.IMAGE_ROTATION_ANIMATION_POOL;
    
}

public constructor (cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface)                        

                            : super(cacheableInterfaceFactoryInterface){

            super();
            var cacheableInterfaceFactoryInterface = cacheableInterfaceFactoryInterface


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public remove(key: any = {}): CacheableInterface{
var key = key

    var cacheableInterface: CacheableInterface = super.remove(key)!;
        
        
;
    

    var allBinaryImageRotationAnimationInfo: ImageArrayRotationAnimationInfo = key as ImageArrayRotationAnimationInfo;
        
        
;
    

    var imageArrayRotationAnimationCacheable: ImageArrayRotationAnimationCacheable = (cacheableInterface as ImageArrayRotationAnimationCacheable);
        
        
;
    
imageArrayRotationAnimationCacheable!.setImageArray(allBinaryImageRotationAnimationInfo!.getImageArray());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cacheableInterface;
    
}


}
                
            

