
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
        
//not game specific package import { Hashtable } from '../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { ArtificialIntelligenceInterface } from '../../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js';
      const ArtificialIntelligenceInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceInterface;

      
//not game specific package import { TopULayerBounds } from '../../../../../org/allbinary/bounds/TopULayerBounds.js';
      const TopULayerBounds = globalThis.org.allbinary.bounds.TopULayerBounds;

      
//not game specific package import { ArtificialIntelligenceInterfaceFactoryInterface } from '../../../../../org/allbinary/game/ai/ArtificialIntelligenceInterfaceFactoryInterface.js';
      const ArtificialIntelligenceInterfaceFactoryInterface = globalThis.org.allbinary.game.ai.ArtificialIntelligenceInterfaceFactoryInterface;

      
//not game specific package import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
      const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
//not game specific package import { VelocityInterface } from '../../../../../org/allbinary/game/physics/velocity/VelocityInterface.js';
      const VelocityInterface = globalThis.org.allbinary.game.physics.velocity.VelocityInterface;

      
//not game specific package import { VelocityInterfaceCompositeInterface } from '../../../../../org/allbinary/game/physics/velocity/VelocityInterfaceCompositeInterface.js';
      const VelocityInterfaceCompositeInterface = globalThis.org.allbinary.game.physics.velocity.VelocityInterfaceCompositeInterface;

      
//not game specific package import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
//not game specific package import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BoundBounceAI } from './BoundBounceAI.js';
import { ReverseVelocityBoundsVisitor } from './ReverseVelocityBoundsVisitor.js';

export class TopUBoundBounceAIFactory
            extends Object
         implements ArtificialIntelligenceInterfaceFactoryInterface {
        

                //@Throws(Exception.constructor)
            
    public getInstance(hashtable: Hashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput): ArtificialIntelligenceInterface{

    var velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface = ownerLayerInterface as VelocityInterfaceCompositeInterface;;
    

    var velocityInterface: VelocityInterface = velocityInterfaceCompositeInterface!.getVelocityProperties() as VelocityInterface;;
    

    var maxDistancePerTick: number = (velocityInterface!.getMaxForwardVelocity()>>velocityInterface!.getVelocityXBasicDecimalP()!.getScaledFactor());;
    

    var halfWidth: number = ownerLayerInterface!.getWidth() *2 +maxDistancePerTick +1;;
    

    var halfHeight: number = ownerLayerInterface!.getHeight() *2 +maxDistancePerTick +1;;
    

    var point: GPoint = PointFactory.getInstance()!.createXY(halfWidth, halfHeight +60)!;;
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

    var rectangle: Rectangle = new Rectangle(point, (displayInfo!.getLastWidth() -halfWidth -point.getX()), (displayInfo!.getLastHeight() -halfHeight -point.getY()));;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BoundBounceAI(ownerLayerInterface, gameInput, new TopULayerBounds(rectangle), new ReverseVelocityBoundsVisitor(ownerLayerInterface));
    
}


}
                
            

