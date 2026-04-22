
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
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { DamageableInterface } from "./DamageableInterface.js";

export class DamageableBaseBehavior
            extends Object
         implements DamageableInterface {
        

    private static readonly instance: DamageableBaseBehavior = new DamageableBaseBehavior();
        
        

    public static getInstance(): DamageableBaseBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.constructor.name.toString()!;

                        ;
    
}


                //@Throws(Error::class)
            
    public damage(damage: number, damageType: number){
var damage = damage
var damageType = damageType
}


                //@Throws(Error::class)
            
    public getDamage(damageType: number): number{
var damageType = damageType



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 6000;
    
}


}
                
            

