
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

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not plain js import { BasicDecimal } 
const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class UpDownVectorAI extends BasicAI {
        

    private readonly velocityInterface: BasicVelocityProperties;

    private index: number = 0;

public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    

    var velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface = this.getOwnerLayerInterface() as unknown as VelocityInterfaceCompositeInterface;;
    
this.velocityInterface= velocityInterfaceCompositeInterface!.getVelocityProperties();
    
this.velocityInterface!.getVelocityYBasicDecimalP()!.setint(0);
    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){

    var y: number = this.getOwnerLayerInterface()!.getHeight() *270;;
    

                        if(this.index < 5)
                        
                                    {
                                    
    var basicDecimal: BasicDecimal = this.velocityInterface!.getVelocityYBasicDecimalP()!;;
    
basicDecimal!.setint(0);
    
basicDecimal!.addint(y);
    
this.index++;
    

                                    }
                                
                             else 
                        if(this.index < 10)
                        
                                    {
                                    
    var basicDecimal: BasicDecimal = this.velocityInterface!.getVelocityYBasicDecimalP()!;;
    
basicDecimal!.setint(0);
    
basicDecimal!.subtractint(y);
    
this.index++;
    

                                    }
                                
                        else {
                            this.index= 0;
    
this.processAI(allBinaryLayerManager);
    

                        }
                            
}


}



