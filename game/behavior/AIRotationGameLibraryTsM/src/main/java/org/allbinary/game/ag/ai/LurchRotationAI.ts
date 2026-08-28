
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
        



//not game specific package import { IndexedAnimation } from '../../../../../org/allbinary/animation/IndexedAnimation.js';
      const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
//not game specific package import { RotationAnimationInterface } from '../../../../../org/allbinary/animation/RotationAnimationInterface.js';
      const RotationAnimationInterface = globalThis.org.allbinary.animation.RotationAnimationInterface;

      
//not game specific package import { RotationAnimationInterfaceCompositeInterface } from '../../../../../org/allbinary/animation/RotationAnimationInterfaceCompositeInterface.js';
      const RotationAnimationInterfaceCompositeInterface = globalThis.org.allbinary.animation.RotationAnimationInterfaceCompositeInterface;

      
import { LurchAI } from '../../../../../org/allbinary/game/ag/ai/tactical/LurchAI.js';
      //not GWT import and is game specific code const LurchAI = globalThis.org.allbinary.game.ag.ai.tactical.LurchAI;

      
//not game specific package import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
      const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AngleIncrementInfo } from '../../../../../org/allbinary/math/AngleIncrementInfo.js';
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



