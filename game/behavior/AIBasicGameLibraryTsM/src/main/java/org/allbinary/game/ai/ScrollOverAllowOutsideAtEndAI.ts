
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

    

export class ScrollOverAllowOutsideAtEndAI extends BasicAI {
        
public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput)                        

                            : super(ownerLayerInterface, gameInput){

            super();
            var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Error::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;
        
        


    var x: number = ownerLayerInterface!.getXP()!;
        
        


    var y: number = ownerLayerInterface!.getYP()!;
        
        


    var width: number = ownerLayerInterface!.getWidth()!;
        
        


    var height: number = ownerLayerInterface!.getHeight()!;
        
        


    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        


                        if(x > displayInfo!.getLastWidth())
                        
                                    {
                                    ownerLayerInterface!.setPosition( -width, y, ownerLayerInterface!.getZP())

                                    }
                                

                        if(y > displayInfo!.getLastHeight())
                        
                                    {
                                    ownerLayerInterface!.setPosition(x,  -height, ownerLayerInterface!.getZP())

                                    }
                                

                        if(x <  -width)
                        
                                    {
                                    ownerLayerInterface!.setPosition(displayInfo!.getLastWidth() +width, y, ownerLayerInterface!.getZP())

                                    }
                                

                        if(y <  -height)
                        
                                    {
                                    ownerLayerInterface!.setPosition(x, displayInfo!.getLastHeight() +height, ownerLayerInterface!.getZP())

                                    }
                                
}


}
                
            

