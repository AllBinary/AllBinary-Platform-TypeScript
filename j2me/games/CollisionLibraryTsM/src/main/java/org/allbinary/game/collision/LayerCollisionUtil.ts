
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
        



import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GameFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js";

    
import { OpenGLFeatureUtil } from "../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    

export class LayerCollisionUtil
            extends Object
         {
        

    private static readonly instance: LayerCollisionUtil = new LayerCollisionUtil();
        
        

    public static getInstance(): LayerCollisionUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly collisionProcessor: CollisionProcessor
private constructor (){

            super();
            
    var features: Features = Features.getInstance()!;
        
        


    var gameFeatureFactory: GameFeatureFactory = GameFeatureFactory.getInstance()!;
        
        


    
                        if(OpenGLFeatureUtil.getInstance()!.isAnyThreed() && !features.isFeature(gameFeatureFactory!.COLLISIONS_FORCED_TWO_DIMENSIONAL))
                        
                                    {
                                    this.collisionProcessor= CollisionThreedProcessor()

                                    }
                                
                        else {
                            this.collisionProcessor= Collision2DProcessor()

                        }
                            
}


    public isCollision(myLayer: AllBinaryLayer, myLayer2: AllBinaryLayer): boolean{
var myLayer = myLayer
var myLayer2 = myLayer2



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.collisionProcessor!.isCollision(myLayer, myLayer2);
    
}


}
                
            

