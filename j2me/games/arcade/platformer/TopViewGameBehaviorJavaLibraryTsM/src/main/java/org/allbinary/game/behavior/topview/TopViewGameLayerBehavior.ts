
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
import { GameLayerBehavior } from '../../../../../org/allbinary/game/layer/behavior/GameLayerBehavior.js';
      
import { BasicAccelerationProperties } from '../../../../../org/allbinary/game/physics/acceleration/BasicAccelerationProperties.js';
      
import { VelocityProperties } from '../../../../../org/allbinary/game/physics/velocity/VelocityProperties.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InitialJumpBehavior } from './InitialJumpBehavior.js';

export class TopViewGameLayerBehavior extends GameLayerBehavior {
        

    public readonly maxGravityActionIndex: number

    public isJumpAction: boolean = true;

    public isJumpOver: boolean = false;

    public isFallingWithoutJumpAttempt: boolean = false;

    public gravityActionIndex: number = 0;
public constructor (maxGravityActionIndex: number){

            super();
        this.maxGravityActionIndex= maxGravityActionIndex;
    
}


    public gravity(){

                        if(this.gravityActionIndex == 0)
                        
                                    {
                                    this.gravityActionIndex++;
    
this.isFallingWithoutJumpAttempt= true;
    

                                    }
                                
}


    public land(velocityProperties: VelocityProperties){
velocityProperties!.getVelocityYBasicDecimalP()!.setint(0);
    
this.landReset();
    
}


    public landReset(){
this.gravityActionIndex= 0;
    
this.isFallingWithoutJumpAttempt= false;
    
this.isJumpAction= true;
    
this.isJumpOver= false;
    
}


    public up(velocityProperties: VelocityProperties, acceleration: BasicAccelerationProperties, jumpBehavior: InitialJumpBehavior, accelerationMultiplier: number){

                        if(!this.isJumpOver)
                        
                                    {
                                    
                        if(this.gravityActionIndex < this.maxGravityActionIndex)
                        
                                    {
                                    
    var acceleration2: number =  -acceleration.getForward() *accelerationMultiplier;
;
    
velocityProperties!.getVelocityYBasicDecimalP()!.addint(acceleration2);
    
velocityProperties!.limitXYToForwardAndReverseMaxVelocity();
    
this.gravityActionIndex++;
    

                                    }
                                
                        else {
                            
                        }
                            

                                    }
                                
                        else {
                            
                        }
                            

                        if(this.isJumpAction)
                        
                                    {
                                    jumpBehavior!.process();
    
this.isJumpAction= false;
    

                                    }
                                
}


    public inputFrames(velocityProperties: VelocityProperties){

                        if(this.gravityActionIndex > 0 && velocityProperties!.getVelocityYBasicDecimalP()!.getUnscaled() > 0)
                        
                                    {
                                    this.isJumpOver= true;
    

                                    }
                                
}


}
                
            

