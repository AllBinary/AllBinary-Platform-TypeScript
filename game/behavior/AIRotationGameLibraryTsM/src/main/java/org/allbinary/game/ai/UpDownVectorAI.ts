
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
        



import { GameInput } from "../../../../org/allbinary/game/input/GameInput.js";

    
import { BasicVelocityProperties } from "../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js";

    
import { VelocityInterfaceCompositeInterface } from "../../../../org/allbinary/game/physics/velocity/VelocityInterfaceCompositeInterface.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { BasicDecimal } from "../../../../org/allbinary/logic/math/BasicDecimal.js";

    

export class UpDownVectorAI extends BasicAI {
        

    private velocityInterface: BasicVelocityProperties

    private index: number = 0;
        
        
public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput)                        

                            : super(ownerLayerInterface, gameInput){

            super();
            var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    

    var velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface = this.getOwnerLayerInterface();

                         as VelocityInterfaceCompositeInterface;
        
        
;
    
this.velocityInterface= velocityInterfaceCompositeInterface!.getVelocityProperties();
    
this.velocityInterface!.getVelocityYBasicDecimalP()!.set(0);
    
}


                //@Throws(Error::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

    var y: number = this.getOwnerLayerInterface()!.getHeight() *270;
        
        
;
    

                        if(this.index < 5)
                        
                                    {
                                    
    var basicDecimal: BasicDecimal = this.velocityInterface!.getVelocityYBasicDecimalP()!;
        
        
;
    
basicDecimal!.set(0);
    
basicDecimal!.add(y);
    
this.index++;
    

                                    }
                                
                             else 
                        if(this.index < 10)
                        
                                    {
                                    
    var basicDecimal: BasicDecimal = this.velocityInterface!.getVelocityYBasicDecimalP()!;
        
        
;
    
basicDecimal!.set(0);
    
basicDecimal!.subtract(y);
    
this.index++;
    

                                    }
                                
                        else {
                            this.index= 0;
    
this.processAI(allBinaryLayerManager);
    

                        }
                            
}


}
                
            

