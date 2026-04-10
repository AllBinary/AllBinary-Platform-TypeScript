
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
        



import { WeaponProperties } from "../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js";

    
import { ScoreableInterface } from "../../../../../org/allbinary/game/score/ScoreableInterface.js";

    
import { RelativeRelationship } from "../../../../../org/allbinary/graphics/RelativeRelationship.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    

export class BasicWeaponPartCircularPool
            extends Object
         {
        

    public static readonly NULL_BASIC_WEAPON_PART_CIRCULAR_POOL: BasicWeaponPartCircularPool = new BasicWeaponPartCircularPool();
        
        

    private basicWeaponPart: BasicWeaponPart = BasicWeaponPart.NULL_BASIC_WEAPON_PART;
        
        

                @Throws(Exception::class)
            
    public init(basicWeaponPartFactoryInterface: BasicWeaponPartFactoryInterface){
    //var basicWeaponPartFactoryInterface = basicWeaponPartFactoryInterface
basicWeaponPart= basicWeaponPartFactoryInterface!.getInstance()
}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public getInstance(sourceLayerInterface: AllBinaryLayer, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface, relativeRelationship: RelativeRelationship): BasicWeaponPart{
    //var sourceLayerInterface = sourceLayerInterface
    //var weaponProperties = weaponProperties
    //var scoreableInterface = scoreableInterface
    //var relativeRelationship = relativeRelationship
init(sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicWeaponPart;
    
}


}
                
            

