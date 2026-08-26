
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
        
//not game specific package import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
      const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;

      
//not game specific package import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
      const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
//not game specific package import { BasicVelocityProperties } from '../../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js';
      const BasicVelocityProperties = globalThis.org.allbinary.game.physics.velocity.BasicVelocityProperties;

      
//not game specific package import { VelocityInterfaceCompositeInterface } from '../../../../../org/allbinary/game/physics/velocity/VelocityInterfaceCompositeInterface.js';
      const VelocityInterfaceCompositeInterface = globalThis.org.allbinary.game.physics.velocity.VelocityInterfaceCompositeInterface;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { BasicDecimal } from '../../../../../org/allbinary/logic/math/BasicDecimal.js';
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
                
            

