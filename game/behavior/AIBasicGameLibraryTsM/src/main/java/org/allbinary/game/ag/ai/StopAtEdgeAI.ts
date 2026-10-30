
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
//not GWT import const BasicAI

import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
//not GWT import const GameInput

import { BasicVelocityProperties } from '../../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js';
//not GWT import const BasicVelocityProperties

import { VelocityInterfaceCompositeInterface } from '../../../../../org/allbinary/game/physics/velocity/VelocityInterfaceCompositeInterface.js';
//not GWT import const VelocityInterfaceCompositeInterface

import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton

import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer

import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StopAtEdgeAI extends BasicAI {
        

public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){

    let ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    

    let velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface = (ownerLayerInterface as VelocityInterfaceCompositeInterface);;
    

    let velocityProperties: BasicVelocityProperties = velocityInterfaceCompositeInterface!.getVelocityProperties()!;;
    

    let x: number = ownerLayerInterface!.getXP()!;;
    

    let y: number = ownerLayerInterface!.getYP()!;;
    

    let x2: number = ownerLayerInterface!.getX2()!;;
    

    let y2: number = ownerLayerInterface!.getY2()!;;
    

    let width: number = ownerLayerInterface!.getWidth()!;;
    

    let height: number = ownerLayerInterface!.getHeight()!;;
    

    let displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

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

