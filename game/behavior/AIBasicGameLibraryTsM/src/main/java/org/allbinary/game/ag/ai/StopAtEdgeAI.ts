
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;

      
import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
//not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
import { BasicVelocityProperties } from '../../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js';
//not GWT import const BasicVelocityProperties = globalThis.org.allbinary.game.physics.velocity.BasicVelocityProperties;

      
import { VelocityInterfaceCompositeInterface } from '../../../../../org/allbinary/game/physics/velocity/VelocityInterfaceCompositeInterface.js';
//not GWT import const VelocityInterfaceCompositeInterface = globalThis.org.allbinary.game.physics.velocity.VelocityInterfaceCompositeInterface;

      
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StopAtEdgeAI extends BasicAI {
        

public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    

    var velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface = (ownerLayerInterface as VelocityInterfaceCompositeInterface);;
    

    var velocityProperties: BasicVelocityProperties = velocityInterfaceCompositeInterface!.getVelocityProperties()!;;
    

    var x: number = ownerLayerInterface!.getXP()!;;
    

    var y: number = ownerLayerInterface!.getYP()!;;
    

    var x2: number = ownerLayerInterface!.getX2()!;;
    

    var y2: number = ownerLayerInterface!.getY2()!;;
    

    var width: number = ownerLayerInterface!.getWidth()!;;
    

    var height: number = ownerLayerInterface!.getHeight()!;;
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

                        if(x2 +velocityProperties!.getVelocityXBasicDecimalP()!.getScaled() > displayInfo!.getLastWidth())
                        
                                    {
                                    ownerLayerInterface!.setPosition(displayInfo!.getLastWidth() -width, y, ownerLayerInterface!.getZP());
    
velocityProperties!.getVelocityYBasicDecimalP()!.setint(0);
    

                                    }
                                

                        if(y2 +velocityProperties!.getVelocityYBasicDecimalP()!.getScaled() > displayInfo!.getLastHeight())
                        
                                    {
                                    ownerLayerInterface!.setPosition(x, displayInfo!.getLastHeight() -height, ownerLayerInterface!.getZP());
    
velocityProperties!.getVelocityXBasicDecimalP()!.setint(0);
    

                                    }
                                

                        if(x +velocityProperties!.getVelocityXBasicDecimalP()!.getScaled() < 0)
                        
                                    {
                                    ownerLayerInterface!.setPosition(0, y, ownerLayerInterface!.getZP());
    
velocityProperties!.getVelocityYBasicDecimalP()!.setint(0);
    

                                    }
                                

                        if(y +velocityProperties!.getVelocityYBasicDecimalP()!.getScaled() < 0)
                        
                                    {
                                    ownerLayerInterface!.setPosition(x, 0, ownerLayerInterface!.getZP());
    
velocityProperties!.getVelocityXBasicDecimalP()!.setint(0);
    

                                    }
                                
}


}



