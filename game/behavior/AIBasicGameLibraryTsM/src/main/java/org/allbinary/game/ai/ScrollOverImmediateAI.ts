
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

    

export class ScrollOverImmediateAI extends BasicAI {
        
public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput)                        

                            : super(ownerLayerInterface, gameInput){

            super();
            var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    
}


                @Throws(Exception::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;
        
        


    var x: number = ownerLayerInterface!.getXP()!;
        
        


    var y: number = ownerLayerInterface!.getYP()!;
        
        


    var x2: number = ownerLayerInterface!.getX2()!;
        
        


    var y2: number = ownerLayerInterface!.getY2()!;
        
        


    var width: number = ownerLayerInterface!.getWidth()!;
        
        


    var height: number = ownerLayerInterface!.getHeight()!;
        
        


    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        


    
                        if(x2 > displayInfo!.getLastWidth())
                        
                                    {
                                    setPosition(0, y, ownerLayerInterface!.getZP())

                                    }
                                

    
                        if(y2 > displayInfo!.getLastHeight())
                        
                                    {
                                    setPosition(x, 0, ownerLayerInterface!.getZP())

                                    }
                                

    
                        if(x < 0)
                        
                                    {
                                    setPosition(displayInfo!.getLastWidth() -width, y, ownerLayerInterface!.getZP())

                                    }
                                

    
                        if(y < 0)
                        
                                    {
                                    setPosition(x, displayInfo!.getLastHeight() -height, ownerLayerInterface!.getZP())

                                    }
                                
}


}
                
            

