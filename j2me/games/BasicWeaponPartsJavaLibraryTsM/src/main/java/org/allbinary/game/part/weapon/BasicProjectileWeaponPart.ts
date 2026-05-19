
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
        
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      
import { WeaponProperties } from '../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
      
import { WeaponLayer } from '../../../../../org/allbinary/game/layer/weapon/WeaponLayer.js';
      
import { WeaponLayerCircularPool } from '../../../../../org/allbinary/game/layer/weapon/WeaponLayerCircularPool.js';
      
import { NoScoreable } from '../../../../../org/allbinary/game/score/NoScoreable.js';
      
import { ScoreableInterface } from '../../../../../org/allbinary/game/score/ScoreableInterface.js';
      
import { RelativeRelationship } from '../../../../../org/allbinary/graphics/RelativeRelationship.js';
      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicWeaponPart } from './BasicWeaponPart.js';

export class BasicProjectileWeaponPart extends BasicWeaponPart {
        

    public static createPart(animationInterface: Animation, weaponLayerCircularStaticPool: WeaponLayerCircularPool): BasicProjectileWeaponPart{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicProjectileWeaponPart(animationInterface, AllBinaryLayer.NULL_ALLBINARY_LAYER, weaponLayerCircularStaticPool, WeaponProperties.NULL_WEAPON_PROPERTIES, NoScoreable.getInstance(), RelativeRelationship.NULL_RELATIVE_RELATIONSHIP);
    
}


    private weaponLayerCircularStaticPool: WeaponLayerCircularPool
public constructor (animationInterface: Animation, sourceLayerInterface: AllBinaryLayer, weaponLayerCircularStaticPool: WeaponLayerCircularPool, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface, relativeRelationship: RelativeRelationship){
            super(animationInterface, sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.weaponLayerCircularStaticPool= weaponLayerCircularStaticPool;
    
}


                //@Throws(Exception.constructor)
            
    public processScore(allbinaryLayerManager: AllBinaryLayerManager, angle: number, otherAngle: number, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface){

    var weaponLayer: WeaponLayer = this.weaponLayerCircularStaticPool!.getInstance(this.getOwnerLayerInterface(), this.relativeRelationship!.getX(), this.relativeRelationship!.getY(), this.relativeRelationship!.getZ(), Math.round(angle), Math.round(otherAngle), weaponProperties, scoreableInterface)!;
;
    
allbinaryLayerManager!.append(weaponLayer);
    
}


}
                
            

