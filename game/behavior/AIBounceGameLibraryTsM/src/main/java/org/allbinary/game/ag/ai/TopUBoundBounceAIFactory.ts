
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
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { ArtificialIntelligenceInterface } from '../../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js';
      //not GWT import const ArtificialIntelligenceInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceInterface;

      
import { TopULayerBounds } from '../../../../../org/allbinary/bounds/TopULayerBounds.js';
      //not GWT import const TopULayerBounds = globalThis.org.allbinary.bounds.TopULayerBounds;

      
import { ArtificialIntelligenceInterfaceFactoryInterface } from '../../../../../org/allbinary/game/ai/ArtificialIntelligenceInterfaceFactoryInterface.js';
      //not GWT import const ArtificialIntelligenceInterfaceFactoryInterface = globalThis.org.allbinary.game.ai.ArtificialIntelligenceInterfaceFactoryInterface;

      
import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
      //not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
import { VelocityInterface } from '../../../../../org/allbinary/game/physics/velocity/VelocityInterface.js';
      //not GWT import const VelocityInterface = globalThis.org.allbinary.game.physics.velocity.VelocityInterface;

      
import { VelocityInterfaceCompositeInterface } from '../../../../../org/allbinary/game/physics/velocity/VelocityInterfaceCompositeInterface.js';
      //not GWT import const VelocityInterfaceCompositeInterface = globalThis.org.allbinary.game.physics.velocity.VelocityInterfaceCompositeInterface;

      
//not plain js import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not plain js import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      //not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      //not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BoundBounceAI } from './BoundBounceAI.js';
//not GWT import const BoundBounceAI = globalThis.org.allbinary.game.ag.ai.BoundBounceAI;

                import { ReverseVelocityBoundsVisitor } from './ReverseVelocityBoundsVisitor.js';
//not GWT import const ReverseVelocityBoundsVisitor = globalThis.org.allbinary.game.ag.ai.ReverseVelocityBoundsVisitor;

                
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



