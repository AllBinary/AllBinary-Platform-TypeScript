
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

        


import { IndexedAnimation } from '../../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
import { RotationAnimationInterface } from '../../../../../org/allbinary/animation/RotationAnimationInterface.js';
//not GWT import const RotationAnimationInterface = globalThis.org.allbinary.animation.RotationAnimationInterface;

      
import { RotationAnimationInterfaceCompositeInterface } from '../../../../../org/allbinary/animation/RotationAnimationInterfaceCompositeInterface.js';
//not GWT import const RotationAnimationInterfaceCompositeInterface = globalThis.org.allbinary.animation.RotationAnimationInterfaceCompositeInterface;

      
import { LurchAI } from '../../../../../org/allbinary/game/ag/ai/tactical/LurchAI.js';
//not GWT import const LurchAI = globalThis.org.allbinary.game.ag.ai.tactical.LurchAI;

      
import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
//not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not plain js import { AngleIncrementInfo } 
const AngleIncrementInfo = globalThis.org.allbinary.math.AngleIncrementInfo;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LurchRotationAI extends LurchAI {
        

    private rotationAnimationInterface: IndexedAnimation;

public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    

    var rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface() as RotationAnimationInterfaceCompositeInterface;;
    
this.rotationAnimationInterface= rotationAnimationInterfaceCompositeInterface!.getRotationAnimationInterface();
    
this.update();
    
}


    reverse(){
super.reverse();
    
this.update();
    
}


    update(){

                        if(this.currentRelativeAngle == 0)
                        
                                    {
                                    
    var rotationAnimationInterface: RotationAnimationInterface = this.rotationAnimationInterface as RotationAnimationInterface;;
    

    var angleIncrementInfo: AngleIncrementInfo = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo()!;;
    

    var rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface() as RotationAnimationInterfaceCompositeInterface;;
    
rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.RIGHT_FRAME.intValue());
    

                                    }
                                
                             else 
                        if(this.currentRelativeAngle == 180)
                        
                                    {
                                    
    var rotationAnimationInterface: RotationAnimationInterface = this.rotationAnimationInterface as RotationAnimationInterface;;
    

    var angleIncrementInfo: AngleIncrementInfo = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo()!;;
    

    var rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface() as RotationAnimationInterfaceCompositeInterface;;
    
rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.LEFT_FRAME.intValue());
    

                                    }
                                
}


}



