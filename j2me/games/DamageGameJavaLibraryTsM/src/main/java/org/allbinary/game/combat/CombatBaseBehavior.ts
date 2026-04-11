
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
        



import { DamageableBaseBehavior } from "../../../../org/allbinary/game/combat/damage/DamageableBaseBehavior.js";

    
import { DestroyableBaseBehavior } from "../../../../org/allbinary/game/combat/destroy/DestroyableBaseBehavior.js";

    

export class CombatBaseBehavior
            extends Object
         {
        

    public static readonly NULL_COMBAT_BEHAVIOR: CombatBaseBehavior = new CombatBaseBehavior(DamageableBaseBehavior.getInstance(), DestroyableBaseBehavior.getInstance());
        
        

    private readonly damageableBaseBehavior: DamageableBaseBehavior

    private readonly destroyableBaseBehavior: DestroyableBaseBehavior

    private readyForExplosion: boolean= false
public constructor (damageableBaseBehavior: DamageableBaseBehavior, destroyableBaseBehavior: DestroyableBaseBehavior){

            super();
            var damageableBaseBehavior = damageableBaseBehavior
var destroyableBaseBehavior = destroyableBaseBehavior
this.damageableBaseBehavior= damageableBaseBehavior;
    
this.destroyableBaseBehavior= destroyableBaseBehavior;
    
}


    public getDamageableBaseBehavior(): DamageableBaseBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return damageableBaseBehavior;
    
}


    public getDestroyableBaseBehavior(): DestroyableBaseBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return destroyableBaseBehavior;
    
}


    public isReadyForExplosion(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return readyForExplosion;
    
}


    public setReadyForExplosion(readyForExplosion: boolean){
var readyForExplosion = readyForExplosion
this.readyForExplosion= readyForExplosion;
    
}


}
                
            

