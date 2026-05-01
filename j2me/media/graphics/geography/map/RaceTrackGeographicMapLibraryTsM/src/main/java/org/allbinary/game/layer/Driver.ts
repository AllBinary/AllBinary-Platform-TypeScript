
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
        



            import { Object } from "../../../../java/lang/Object.js";


        
            import { Integer } from "../../../../java/lang/Integer.js";
        
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Aggression } from "./Aggression.js";

export class Driver
            extends Object
         {
        

    public static readonly NULL_DRIVER: Driver = new Driver(SmallIntegerSingletonFactory.getInstance()!.getAt(0), SmallIntegerSingletonFactory.getInstance()!.getAt(0), new Aggression(SmallIntegerSingletonFactory.getInstance()!.getAt(0), SmallIntegerSingletonFactory.getInstance()!.getAt(0), SmallIntegerSingletonFactory.getInstance()!.getAt(0)));

    private turnSpeed: number = SmallIntegerSingletonFactory.getInstance()!.getAt(0)!;

    private trackPathSelectionSkill: number = SmallIntegerSingletonFactory.getInstance()!.getAt(0)!;

    private aggression: Aggression
public constructor (turnSpeed: number, trackPathSelectionSkill: number, aggression: Aggression){

            super();
        var turnSpeed = turnSpeed
var trackPathSelectionSkill = trackPathSelectionSkill
var aggression = aggression
this.setTurnSpeed(turnSpeed);
    
this.setTrackPathSelectionSkill(trackPathSelectionSkill);
    
this.aggression= aggression;
    
}


    public getTurnSpeed(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.turnSpeed;
    
}


    public setTurnSpeed(turnSpeed: number){
var turnSpeed = turnSpeed
this.turnSpeed= turnSpeed;
    
}


    public getTrackPathSelectionSkill(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.trackPathSelectionSkill;
    
}


    public setTrackPathSelectionSkill(trackPathSelectionSkill: number){
var trackPathSelectionSkill = trackPathSelectionSkill
this.trackPathSelectionSkill= trackPathSelectionSkill;
    
}


    public getAggression(): Aggression{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.aggression;
    
}


    public setAggression(aggression: Aggression){
var aggression = aggression
this.aggression= aggression;
    
}


}
                
            

