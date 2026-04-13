
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    

export class Driver
            extends Object
         {
        

    public static readonly NULL_DRIVER: Driver = new Driver(SmallIntegerSingletonFactory.getInstance()!.getInstance(0), SmallIntegerSingletonFactory.getInstance()!.getInstance(0), new Aggression(SmallIntegerSingletonFactory.getInstance()!.getInstance(0), SmallIntegerSingletonFactory.getInstance()!.getInstance(0), SmallIntegerSingletonFactory.getInstance()!.getInstance(0)));
        
        

    private turnSpeed: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(0)!;
        
        

    private trackPathSelectionSkill: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(0)!;
        
        

    private aggression: Aggression
public constructor (turnSpeed: Integer, trackPathSelectionSkill: Integer, aggression: Aggression){

            super();
            var turnSpeed = turnSpeed
var trackPathSelectionSkill = trackPathSelectionSkill
var aggression = aggression
this.setTurnSpeed(turnSpeed);
    
this.setTrackPathSelectionSkill(trackPathSelectionSkill);
    
this.aggression= aggression;
    
}


    public getTurnSpeed(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return turnSpeed;
    
}


    public setTurnSpeed(turnSpeed: Integer){
var turnSpeed = turnSpeed
this.turnSpeed= turnSpeed;
    
}


    public getTrackPathSelectionSkill(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return trackPathSelectionSkill;
    
}


    public setTrackPathSelectionSkill(trackPathSelectionSkill: Integer){
var trackPathSelectionSkill = trackPathSelectionSkill
this.trackPathSelectionSkill= trackPathSelectionSkill;
    
}


    public getAggression(): Aggression{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return aggression;
    
}


    public setAggression(aggression: Aggression){
var aggression = aggression
this.aggression= aggression;
    
}


}
                
            

