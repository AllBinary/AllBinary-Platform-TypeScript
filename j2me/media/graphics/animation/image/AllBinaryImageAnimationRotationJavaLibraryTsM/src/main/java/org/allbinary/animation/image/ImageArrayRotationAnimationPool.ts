
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { BasicArrayListResetablePool } from '../../../../org/allbinary/logic/util/cache/BasicArrayListResetablePool.js';
      
import { CacheableInterface } from '../../../../org/allbinary/logic/util/cache/CacheableInterface.js';
      
import { CacheableInterfaceFactoryInterface } from '../../../../org/allbinary/logic/util/cache/CacheableInterfaceFactoryInterface.js';
      
import { PoolInterface } from '../../../../org/allbinary/logic/util/cache/PoolInterface.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ImageArrayRotationAnimationCacheableInterfaceFactory } from './ImageArrayRotationAnimationCacheableInterfaceFactory.js';
import { ImageArrayRotationAnimationInfo } from './ImageArrayRotationAnimationInfo.js';
import { ImageArrayRotationAnimationCacheable } from './ImageArrayRotationAnimationCacheable.js';

export class ImageArrayRotationAnimationPool extends BasicArrayListResetablePool {
        

    private static IMAGE_ROTATION_ANIMATION_POOL: PoolInterface = new ImageArrayRotationAnimationPool(new ImageArrayRotationAnimationCacheableInterfaceFactory());

    public static getInstance(): PoolInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ImageArrayRotationAnimationPool.IMAGE_ROTATION_ANIMATION_POOL;
    
}


public constructor (cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface){
            super(cacheableInterfaceFactoryInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public remove(key: any = {}): CacheableInterface{

    var cacheableInterface: CacheableInterface = super.remove(key)!;;
    

    var allBinaryImageRotationAnimationInfo: ImageArrayRotationAnimationInfo = key as ImageArrayRotationAnimationInfo;;
    

    var imageArrayRotationAnimationCacheable: ImageArrayRotationAnimationCacheable = (cacheableInterface as ImageArrayRotationAnimationCacheable);;
    
imageArrayRotationAnimationCacheable!.setImageArray(allBinaryImageRotationAnimationInfo!.getImageArray());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return cacheableInterface;
    
}


}
                
            

