
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
        
//not game specific package import { WeaponProperties } from '../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
      const WeaponProperties = globalThis.org.allbinary.game.combat.weapon.WeaponProperties;

      
//not game specific package import { ScoreableInterface } from '../../../../../org/allbinary/game/score/ScoreableInterface.js';
      const ScoreableInterface = globalThis.org.allbinary.game.score.ScoreableInterface;

      
//not game specific package import { RelativeRelationship } from '../../../../../org/allbinary/graphics/RelativeRelationship.js';
      const RelativeRelationship = globalThis.org.allbinary.graphics.RelativeRelationship;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicWeaponPart } from './BasicWeaponPart.js';
import { BasicWeaponPartFactoryInterface } from './BasicWeaponPartFactoryInterface.js';

export class BasicWeaponPartCircularPool
            extends Object
         {
        

    public static readonly NULL_BASIC_WEAPON_PART_CIRCULAR_POOL: BasicWeaponPartCircularPool = new BasicWeaponPartCircularPool();

    private basicWeaponPart: BasicWeaponPart = BasicWeaponPart.NULL_BASIC_WEAPON_PART;

                //@Throws(Exception.constructor)
            
    public init(basicWeaponPartFactoryInterface: BasicWeaponPartFactoryInterface){
this.basicWeaponPart= basicWeaponPartFactoryInterface!.getInstance();
    
}


                //@Throws(Exception.constructor)
            //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public getInstance(sourceLayerInterface: AllBinaryLayer, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface, relativeRelationship: RelativeRelationship): BasicWeaponPart{
this.basicWeaponPart!.init(sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicWeaponPart;
    
}


}
                
            

