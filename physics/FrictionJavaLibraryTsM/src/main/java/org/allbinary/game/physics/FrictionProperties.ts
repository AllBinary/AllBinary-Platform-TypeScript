
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
        
//not game specific package import { FrictionData } from '../../../../org/allbinary/game/physics/friction/FrictionData.js';
      const FrictionData = globalThis.org.allbinary.game.physics.friction.FrictionData;

      
//not game specific package import { DragVelocityBehavior } from '../../../../org/allbinary/game/physics/velocity/DragVelocityBehavior.js';
      const DragVelocityBehavior = globalThis.org.allbinary.game.physics.velocity.DragVelocityBehavior;

      
//not game specific package import { VelocityProperties } from '../../../../org/allbinary/game/physics/velocity/VelocityProperties.js';
      const VelocityProperties = globalThis.org.allbinary.game.physics.velocity.VelocityProperties;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class FrictionProperties
            extends Object
         {
        

public constructor (){

            super();
        }


    public friction(velocityProperties: VelocityProperties, nominator: number){
DragVelocityBehavior.instance.reduce(velocityProperties, nominator, FrictionData.getFrictionDenominator());
    
}


}



