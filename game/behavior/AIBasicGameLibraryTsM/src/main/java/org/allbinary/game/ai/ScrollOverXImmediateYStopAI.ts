
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

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicAI } from "./BasicAI.js";

export class ScrollOverXImmediateYStopAI extends BasicAI {
        
public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(ownerLayerInterface, gameInput);
                    var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;
        
        
;
    

    var x: number = ownerLayerInterface!.getXP()!;
        
        
;
    

    var y: number = ownerLayerInterface!.getYP()!;
        
        
;
    

    var x2: number = ownerLayerInterface!.getX2()!;
        
        
;
    

    var y2: number = ownerLayerInterface!.getY2()!;
        
        
;
    

    var width: number = ownerLayerInterface!.getWidth()!;
        
        
;
    

    var height: number = ownerLayerInterface!.getHeight()!;
        
        
;
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

                        if(x2 > displayInfo!.getLastWidth())
                        
                                    {
                                    ownerLayerInterface!.setPosition(0, y, ownerLayerInterface!.getZP());
    

                                    }
                                

                        if(y2 > displayInfo!.getLastHeight())
                        
                                    {
                                    ownerLayerInterface!.setPosition(x, displayInfo!.getLastHeight() -height, ownerLayerInterface!.getZP());
    

                                    }
                                

                        if(x < 0)
                        
                                    {
                                    ownerLayerInterface!.setPosition(displayInfo!.getLastWidth() -width, y, ownerLayerInterface!.getZP());
    

                                    }
                                

                        if(y < 0)
                        
                                    {
                                    ownerLayerInterface!.setPosition(x, 0, ownerLayerInterface!.getZP());
    

                                    }
                                
}


}
                
            

