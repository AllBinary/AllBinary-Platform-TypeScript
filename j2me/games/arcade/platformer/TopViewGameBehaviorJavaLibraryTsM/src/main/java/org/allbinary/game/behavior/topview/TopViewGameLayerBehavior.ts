
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { GameLayerBehavior } from "../../../../../org/allbinary/game/layer/behavior/GameLayerBehavior.js";

    
import { BasicAccelerationProperties } from "../../../../../org/allbinary/game/physics/acceleration/BasicAccelerationProperties.js";

    
import { VelocityProperties } from "../../../../../org/allbinary/game/physics/velocity/VelocityProperties.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class TopViewGameLayerBehavior extends GameLayerBehavior {
        

    public readonly maxGravityActionIndex: number

    public isJumpAction: boolean = true;
        
        

    public isJumpOver: boolean = false;
        
        

    public isFallingWithoutJumpAttempt: boolean = false;
        
        

    public gravityActionIndex: number = 0;
        
        
public constructor (maxGravityActionIndex: number){

            super();
                //var maxGravityActionIndex = maxGravityActionIndex
this.maxGravityActionIndex= maxGravityActionIndex
}


    public gravity(){

    
                        if(this.gravityActionIndex == 0)
                        
                                    {
                                    this.gravityActionIndex++
this.isFallingWithoutJumpAttempt= true

                                    }
                                
}


    public land(velocityProperties: VelocityProperties){
    //var velocityProperties = velocityProperties
set(0)
this.land()
}


    public land(){
this.gravityActionIndex= 0
this.isFallingWithoutJumpAttempt= false
this.isJumpAction= true
this.isJumpOver= false
}


    public up(velocityProperties: VelocityProperties, acceleration: BasicAccelerationProperties, jumpBehavior: InitialJumpBehavior, accelerationMultiplier: number){
    //var velocityProperties = velocityProperties
    //var acceleration = acceleration
    //var jumpBehavior = jumpBehavior
    //var accelerationMultiplier = accelerationMultiplier

    
                        if(!isJumpOver)
                        
                                    {
                                    
    
                        if(gravityActionIndex < maxGravityActionIndex)
                        
                                    {
                                    
    var acceleration2: number =  -acceleration.getForward() *accelerationMultiplier;
        
        

add(acceleration2)
limitXYToForwardAndReverseMaxVelocity()
gravityActionIndex++

                                    }
                                
                        else {
                            
                        }
                            

                                    }
                                
                        else {
                            
                        }
                            

    
                        if(isJumpAction)
                        
                                    {
                                    process()
isJumpAction= false

                                    }
                                
}


    public inputFrames(velocityProperties: VelocityProperties){
    //var velocityProperties = velocityProperties

    
                        if(this.gravityActionIndex > 0 && velocityProperties!.getVelocityYBasicDecimalP()!.getUnscaled() > 0)
                        
                                    {
                                    this.isJumpOver= true

                                    }
                                
}


}
                
            

