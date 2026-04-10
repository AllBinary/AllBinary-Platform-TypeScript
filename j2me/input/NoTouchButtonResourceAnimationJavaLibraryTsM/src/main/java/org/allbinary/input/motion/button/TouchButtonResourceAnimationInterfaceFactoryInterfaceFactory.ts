
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
        



import { BaseResourceAnimationInterfaceFactoryInterfaceFactory } from "../../../../../org/allbinary/animation/resource/BaseResourceAnimationInterfaceFactoryInterfaceFactory.js";

    
import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { ResourceLoadingLevelFactory } from "../../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js";

    
import { OpenGLFeatureFactory } from "../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js";

    
import { ImageCache } from "../../../../../org/allbinary/image/ImageCache.js";

    
import { ImageCacheFactory } from "../../../../../org/allbinary/image/ImageCacheFactory.js";

    

export class TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory extends BaseResourceAnimationInterfaceFactoryInterfaceFactory {
        
public constructor ()                        

                            : super("TouchButton Animations"){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (name: string)                        

                            : super(name){

            super();
            var name = name


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public init(level: number){
var level = level
this.init(ImageCacheFactory.getInstance(), level)
}


                //@Throws(Error::class)
            
    init(imageCache: ImageCache, level: number){
var imageCache = imageCache
var level = level

                        if(this.isInitialized())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
super.init(level)
}


    public isLoadingLevel(level: number): boolean{
var level = level

    var resourceLoadingLevelFactory: ResourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance()!;
        
        


                        if(level == resourceLoadingLevelFactory!.LOAD_TOUCH.getLevel())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.isLoadingLevel(level);
    

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
                
            

