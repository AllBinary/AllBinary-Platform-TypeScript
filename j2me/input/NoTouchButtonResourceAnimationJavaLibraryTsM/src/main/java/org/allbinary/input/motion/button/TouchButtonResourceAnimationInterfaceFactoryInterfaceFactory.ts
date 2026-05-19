
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Hashtable } from '../../../../../java/util/Hashtable.js';
      
import { BaseResourceAnimationInterfaceFactoryInterfaceFactory } from '../../../../../org/allbinary/animation/resource/BaseResourceAnimationInterfaceFactoryInterfaceFactory.js';
      
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
      
import { ResourceLoadingLevelFactory } from '../../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
      
import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
      
import { ImageCache } from '../../../../../org/allbinary/image/ImageCache.js';
      
import { ImageCacheFactory } from '../../../../../org/allbinary/image/ImageCacheFactory.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory extends BaseResourceAnimationInterfaceFactoryInterfaceFactory {
        

    public static createFactory(): TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory("TouchButton Animations");
    
}

public constructor (name: string){
            super(name, new Hashtable<any, any>(), new Hashtable<any, any>(), new Hashtable<any, any>());
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public init(level: number){
this.initImageCache(ImageCacheFactory.getInstance(), level);
    
}


                //@Throws(Exception.constructor)
            
    initImageCache(imageCache: ImageCache, level: number){

                        if(this.isInitialized())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
super.init(level);
    
}


    public isLoadingLevel(level: number): boolean{

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;
;
    

                        if(level == resourceLoadingLevelFactory!.LOAD_TOUCH.getLevel())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.isLoadingLevel(level);;
    

                        }
                            
}


    public isFeature(): boolean{

                        if(!Features.getInstance()!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


}
                
            

