
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        



import { BasicGameResources } from "../../../../../org/allbinary/game/layer/resources/BasicGameResources.js";

    
import { AnimationInterfaceFactoryInterface } from "../../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js";

    
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from "../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js";

    
import { NullRotationAnimationFactory } from "../../../../../org/allbinary/animation/NullRotationAnimationFactory.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DecalAnimationInterfaceFactory
            extends Object
         {
        

    private static readonly instance: DecalAnimationInterfaceFactory = new DecalAnimationInterfaceFactory();
        
        

    public static getInstance(): DecalAnimationInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public getInstance(basicGameResources: BasicGameResources, basicColor: BasicColor): AnimationInterfaceFactoryInterface{
var basicGameResources = basicGameResources
var basicColor = basicColor

    var animationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface
;
    

                        if(basicColor == BasicColorFactory.getInstance()!.RED)
                        
                                    {
                                    animationInterfaceFactoryInterface= FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(basicGameResources!.RESOURCE);
    

                                    }
                                
                        else {
                            animationInterfaceFactoryInterface= NullRotationAnimationFactory.getFactoryInstance();
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return animationInterfaceFactoryInterface;
    
}


}
                
            

