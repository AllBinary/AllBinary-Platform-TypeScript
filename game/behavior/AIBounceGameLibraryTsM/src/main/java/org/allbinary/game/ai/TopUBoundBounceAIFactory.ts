
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { ArtificialIntelligenceInterface } from "../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js";

    
import { TopULayerBounds } from "../../../../org/allbinary/bounds/TopULayerBounds.js";

    
import { GameInput } from "../../../../org/allbinary/game/input/GameInput.js";

    
import { VelocityInterface } from "../../../../org/allbinary/game/physics/velocity/VelocityInterface.js";

    
import { VelocityInterfaceCompositeInterface } from "../../../../org/allbinary/game/physics/velocity/VelocityInterfaceCompositeInterface.js";

    
import { GPoint } from "../../../../org/allbinary/graphics/GPoint.js";

    
import { PointFactory } from "../../../../org/allbinary/graphics/PointFactory.js";

    
import { Rectangle } from "../../../../org/allbinary/graphics/Rectangle.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    

export class TopUBoundBounceAIFactory
            extends Object
        
                , ArtificialIntelligenceInterfaceFactoryInterface {
        

                @Throws(Exception::class)
            
    public getInstance(hashtable: Hashtable<Any, Any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput): ArtificialIntelligenceInterface{
var hashtable = hashtable
var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput

    var velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface = ownerLayerInterface as VelocityInterfaceCompositeInterface;
        
        


    var velocityInterface: VelocityInterface = velocityInterfaceCompositeInterface!.getVelocityProperties() as VelocityInterface;
        
        


    var maxDistancePerTick: number = (velocityInterface!.getMaxForwardVelocity() shr velocityInterface!.getVelocityXBasicDecimalP()!.getScaledFactor());
        
        


    var halfWidth: number = ownerLayerInterface!.getWidth() *2 +maxDistancePerTick +1;
        
        


    var halfHeight: number = ownerLayerInterface!.getHeight() *2 +maxDistancePerTick +1;
        
        


    var point: GPoint = PointFactory.getInstance()!.getInstance(halfWidth, halfHeight +60)!;
        
        


    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        


    var rectangle: Rectangle = new Rectangle(point, (displayInfo!.getLastWidth() -halfWidth -point.getX()), (displayInfo!.getLastHeight() -halfHeight -point.getY()));
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BoundBounceAI(ownerLayerInterface, gameInput, TopULayerBounds(rectangle), ReverseVelocityBoundsVisitor(ownerLayerInterface));
    
}


}
                
            

