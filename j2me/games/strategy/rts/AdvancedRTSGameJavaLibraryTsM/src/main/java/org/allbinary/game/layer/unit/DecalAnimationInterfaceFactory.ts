
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { BasicGameResources } from '../../../../../org/allbinary/game/layer/resources/BasicGameResources.js';
      const BasicGameResources = globalThis.org.allbinary.game.layer.resources.BasicGameResources;

      
//not game specific package import { AnimationInterfaceFactoryInterface } from '../../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
      const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

      
//not game specific package import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
      const FeaturedAnimationInterfaceFactoryInterfaceFactory = globalThis.org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory;

      
//not game specific package import { NullRotationAnimationFactory } from '../../../../../org/allbinary/animation/NullRotationAnimationFactory.js';
      const NullRotationAnimationFactory = globalThis.org.allbinary.animation.NullRotationAnimationFactory;

      
//not game specific package import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
//not game specific package import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DecalAnimationInterfaceFactory
            extends Object
         {
        

    private static readonly instance: DecalAnimationInterfaceFactory = new DecalAnimationInterfaceFactory();

    public static getInstance(): DecalAnimationInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DecalAnimationInterfaceFactory.instance;
    
}


                //@Throws(Exception.constructor)
            
    public getAnimationFactory(basicGameResources: BasicGameResources, basicColor: BasicColor): AnimationInterfaceFactoryInterface{

    var animationInterfaceFactoryInterface: AnimationInterfaceFactoryInterface;;
    

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



