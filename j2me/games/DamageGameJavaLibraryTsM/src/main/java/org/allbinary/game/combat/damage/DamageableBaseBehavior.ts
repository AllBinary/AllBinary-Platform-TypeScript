
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../java/lang/Exception.js';
        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DamageableInterface } from './DamageableInterface.js';

export class DamageableBaseBehavior
            extends Object
         implements DamageableInterface {
        

    private static readonly instance: DamageableBaseBehavior = new DamageableBaseBehavior();

    public static getInstance(): DamageableBaseBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DamageableBaseBehavior.instance;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.constructor.name.toString()!;;
    
}


                //@Throws(Exception.constructor)
            
    public damage(damage: number, damageType: number){
}


                //@Throws(Exception.constructor)
            
    public getDamage(damageType: number): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 6000;
    
}


}
                
            

