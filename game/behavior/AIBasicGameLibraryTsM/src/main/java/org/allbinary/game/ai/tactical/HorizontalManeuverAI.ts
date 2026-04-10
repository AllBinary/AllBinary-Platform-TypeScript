
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
        



import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { BasicAI } from "../../../../../org/allbinary/game/ai/BasicAI.js";

    
import { GameInput } from "../../../../../org/allbinary/game/input/GameInput.js";

    
import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    

export class HorizontalManeuverAI extends BasicAI {
        

    currentRelativeAngle: number = 0;
        
        

    private currentSpeed: number
public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput)                        

                            : super(ownerLayerInterface, gameInput){

            super();
            var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    
currentSpeed= 5
}


                //@Throws(Error::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;
        
        


    var x: number = ownerLayerInterface!.getXP()!;
        
        


                        if(ownerLayerInterface!.getXP() -currentSpeed <= 0)
                        
                                    {
                                    this.this.reverse()
this.this.drop()

                                    }
                                

                        if(ownerLayerInterface!.getX2() +currentSpeed > DisplayInfoSingleton.getInstance()!.getLastWidth())
                        
                                    {
                                    this.this.reverse()
this.this.accelerate()
this.this.drop()

                                    }
                                

                        if(currentRelativeAngle == 0)
                        
                                    {
                                    x += (currentSpeed)

                                    }
                                
                             else 
                        if(currentRelativeAngle == 180)
                        
                                    {
                                    x -= (currentSpeed)

                                    }
                                
ownerLayerInterface!.setPosition(x, ownerLayerInterface!.getYP(), ownerLayerInterface!.getZP())

                        if(currentRelativeAngle == 0)
                        
                                    {
                                    super.processAI(Canvas.KEY_NUM0)

                                    }
                                
                             else 
                        if(currentRelativeAngle == 180)
                        
                                    {
                                    super.processAI(Canvas.KEY_POUND)

                                    }
                                
}


    reverse(){

                        if(currentRelativeAngle == 180)
                        
                                    {
                                    currentRelativeAngle= 0

                                    }
                                
                             else 
                        if(currentRelativeAngle == 0)
                        
                                    {
                                    currentRelativeAngle= 180

                                    }
                                
}


    accelerate(){

                        if(currentSpeed < 20)
                        
                                    {
                                    currentSpeed++

                                    }
                                
}


    drop(){

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;
        
        


    var y: number = ownerLayerInterface!.getYP()!;
        
        


                        if(ownerLayerInterface!.getY2() +ownerLayerInterface!.getHeight() > DisplayInfoSingleton.getInstance()!.getLastHeight())
                        
                                    {
                                    y= 0

                                    }
                                
                        else {
                            y += ownerLayerInterface!.getHeight() +1

                        }
                            
ownerLayerInterface!.setPosition(ownerLayerInterface!.getXP(), y, ownerLayerInterface!.getZP())
}


}
                
            

