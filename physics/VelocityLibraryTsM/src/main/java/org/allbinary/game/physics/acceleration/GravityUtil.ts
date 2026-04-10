
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
        



import { BasicVelocityProperties } from "../../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js";

    

export class GravityUtil
            extends Object
         {
        

    private static readonly instance: GravityUtil = new GravityUtil();
        
        

    public static getInstance(): GravityUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly GAME_GRAVITY_VELOCITY: number = 1800;
        
        

    public readonly MAX_GAME_VELOCITY: number = 18000;
        
        

    public process(velocityProperties: BasicVelocityProperties){
var velocityProperties = velocityProperties
velocityProperties!.getVelocityYBasicDecimalP()!.add(this.GAME_GRAVITY_VELOCITY)
}


    public process(velocityProperties: BasicVelocityProperties, customGravity: number){
var velocityProperties = velocityProperties
var customGravity = customGravity
velocityProperties!.getVelocityYBasicDecimalP()!.add(customGravity)
}


}
                
            

