
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


        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CollidableBaseBehaviorFactory } from './CollidableBaseBehaviorFactory.js';
import { CollidableNeverCollideBehavior } from './CollidableNeverCollideBehavior.js';
import { CollidableBaseBehavior } from './CollidableBaseBehavior.js';

export class CollidableNeverCollideBehaviorFactory extends CollidableBaseBehaviorFactory {
        

    private static readonly instance2: CollidableNeverCollideBehaviorFactory = new CollidableNeverCollideBehaviorFactory();

    public static getInstance(): CollidableNeverCollideBehaviorFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CollidableNeverCollideBehaviorFactory.instance2;
    
}


    private readonly instance: CollidableNeverCollideBehavior = new CollidableNeverCollideBehavior(false);

    public createBehavior(): CollidableBaseBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.instance;
    
}


}
                
            

