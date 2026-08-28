
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      const Animation = globalThis.org.allbinary.animation.Animation;

      
//not game specific package import { WeaponProperties } from '../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
      const WeaponProperties = globalThis.org.allbinary.game.combat.weapon.WeaponProperties;

      
//not game specific package import { WeaponLayer } from '../../../../../org/allbinary/game/layer/weapon/WeaponLayer.js';
      const WeaponLayer = globalThis.org.allbinary.game.layer.weapon.WeaponLayer;

      
//not game specific package import { WeaponLayerCircularPool } from '../../../../../org/allbinary/game/layer/weapon/WeaponLayerCircularPool.js';
      const WeaponLayerCircularPool = globalThis.org.allbinary.game.layer.weapon.WeaponLayerCircularPool;

      
//not game specific package import { NoScoreable } from '../../../../../org/allbinary/game/score/NoScoreable.js';
      const NoScoreable = globalThis.org.allbinary.game.score.NoScoreable;

      
//not game specific package import { ScoreableInterface } from '../../../../../org/allbinary/game/score/ScoreableInterface.js';
      const ScoreableInterface = globalThis.org.allbinary.game.score.ScoreableInterface;

      
//not game specific package import { RelativeRelationship } from '../../../../../org/allbinary/graphics/RelativeRelationship.js';
      const RelativeRelationship = globalThis.org.allbinary.graphics.RelativeRelationship;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicWeaponPart } from './BasicWeaponPart.js';

export class BasicProjectileWeaponPart extends BasicWeaponPart {
        

    public static createBasicProjectileWeaponPart(animationInterface: Animation, weaponLayerCircularStaticPool: WeaponLayerCircularPool): BasicProjectileWeaponPart{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicProjectileWeaponPart(animationInterface, AllBinaryLayer.NULL_ALLBINARY_LAYER, weaponLayerCircularStaticPool, WeaponProperties.NULL_WEAPON_PROPERTIES, NoScoreable.getInstance(), RelativeRelationship.NULL_RELATIVE_RELATIONSHIP);
    
}


    private weaponLayerCircularStaticPool: WeaponLayerCircularPool;

public constructor (animationInterface: Animation, sourceLayerInterface: AllBinaryLayer, weaponLayerCircularStaticPool: WeaponLayerCircularPool, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface, relativeRelationship: RelativeRelationship){
            super(animationInterface, sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.weaponLayerCircularStaticPool= weaponLayerCircularStaticPool;
    
}


                //@Throws(Exception.constructor)
            
    public processScore(allbinaryLayerManager: AllBinaryLayerManager, angle: number, otherAngle: number, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface){

    var weaponLayer: WeaponLayer = this.weaponLayerCircularStaticPool!.getInstanceWeaponLayer(this.getOwnerLayerInterface(), this.relativeRelationship!.getX(), this.relativeRelationship!.getY(), this.relativeRelationship!.getZ(), Math.round(angle), Math.round(otherAngle), weaponProperties, scoreableInterface)!;;
    
allbinaryLayerManager!.append(weaponLayer);
    
}


}



