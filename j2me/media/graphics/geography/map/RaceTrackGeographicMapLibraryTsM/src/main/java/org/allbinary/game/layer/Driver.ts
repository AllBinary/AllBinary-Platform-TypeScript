
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Aggression } from './Aggression.js';

export class Driver
            extends Object
         {
        

    public static readonly NULL_DRIVER: Driver = new Driver(SmallIntegerSingletonFactory.getInstance()!.getAt(0), SmallIntegerSingletonFactory.getInstance()!.getAt(0), new Aggression(SmallIntegerSingletonFactory.getInstance()!.getAt(0), SmallIntegerSingletonFactory.getInstance()!.getAt(0), SmallIntegerSingletonFactory.getInstance()!.getAt(0)));

    private turnSpeed: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(0)!;

    private trackPathSelectionSkill: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(0)!;

    private aggression: Aggression;

public constructor (turnSpeed: Integer, trackPathSelectionSkill: Integer, aggression: Aggression){

            super();
        this.setTurnSpeed(turnSpeed);
    
this.setTrackPathSelectionSkill(trackPathSelectionSkill);
    
this.aggression= aggression;
    
}


    public getTurnSpeed(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.turnSpeed;
    
}


    public setTurnSpeed(turnSpeed: Integer){
this.turnSpeed= turnSpeed;
    
}


    public getTrackPathSelectionSkill(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.trackPathSelectionSkill;
    
}


    public setTrackPathSelectionSkill(trackPathSelectionSkill: Integer){
this.trackPathSelectionSkill= trackPathSelectionSkill;
    
}


    public getAggression(): Aggression{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.aggression;
    
}


    public setAggression(aggression: Aggression){
this.aggression= aggression;
    
}


}
                
            

