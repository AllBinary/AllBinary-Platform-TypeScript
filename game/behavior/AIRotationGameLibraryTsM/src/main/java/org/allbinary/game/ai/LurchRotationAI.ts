
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
        



import { IndexedAnimation } from "../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { RotationAnimationInterface } from "../../../../org/allbinary/animation/RotationAnimationInterface.js";

    
import { RotationAnimationInterfaceCompositeInterface } from "../../../../org/allbinary/animation/RotationAnimationInterfaceCompositeInterface.js";

    
import { LurchAI } from "../../../../org/allbinary/game/ai/tactical/LurchAI.js";

    
import { GameInput } from "../../../../org/allbinary/game/input/GameInput.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AngleIncrementInfo } from "../../../../org/allbinary/math/AngleIncrementInfo.js";

    

export class LurchRotationAI extends LurchAI {
        

    private rotationAnimationInterface: IndexedAnimation
public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput)                        

                            : super(ownerLayerInterface, gameInput){

            super();
            var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    

    var rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface() as RotationAnimationInterfaceCompositeInterface;
        
        

this.rotationAnimationInterface= rotationAnimationInterfaceCompositeInterface!.getRotationAnimationInterface()
this.update()
}


    reverse(){
super.reverse()
this.update()
}


    update(){

                        if(currentRelativeAngle == 0)
                        
                                    {
                                    
    var rotationAnimationInterface: RotationAnimationInterface = this.rotationAnimationInterface as RotationAnimationInterface;
        
        


    var angleIncrementInfo: AngleIncrementInfo = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo()!;
        
        


    var rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface() as RotationAnimationInterfaceCompositeInterface;
        
        

rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.RIGHT_FRAME.toInt())

                                    }
                                
                             else 
                        if(currentRelativeAngle == 180)
                        
                                    {
                                    
    var rotationAnimationInterface: RotationAnimationInterface = this.rotationAnimationInterface as RotationAnimationInterface;
        
        


    var angleIncrementInfo: AngleIncrementInfo = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo()!;
        
        


    var rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface() as RotationAnimationInterfaceCompositeInterface;
        
        

rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.LEFT_FRAME.toInt())

                                    }
                                
}


}
                
            

