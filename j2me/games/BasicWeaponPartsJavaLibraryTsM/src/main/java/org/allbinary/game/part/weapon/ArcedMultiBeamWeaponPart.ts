
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

      
//not game specific package import { ScoreableInterface } from '../../../../../org/allbinary/game/score/ScoreableInterface.js';
      const ScoreableInterface = globalThis.org.allbinary.game.score.ScoreableInterface;

      
//not game specific package import { RelativeRelationship } from '../../../../../org/allbinary/graphics/RelativeRelationship.js';
      const RelativeRelationship = globalThis.org.allbinary.graphics.RelativeRelationship;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { AngleFactory } from '../../../../../org/allbinary/math/AngleFactory.js';
      const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicWeaponPart } from './BasicWeaponPart.js';

export class ArcedMultiBeamWeaponPart extends BasicWeaponPart {
        

    private readonly weaponLayerCircularStaticPool: WeaponLayerCircularPool;

    private readonly total: number;

public constructor (animationInterface: Animation, sourceLayerInterface: AllBinaryLayer, weaponLayerCircularStaticPool: WeaponLayerCircularPool, total: number, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface, relativeRelationship: RelativeRelationship){
            super(animationInterface, sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.total= total;
    
this.weaponLayerCircularStaticPool= weaponLayerCircularStaticPool;
    
}


    private readonly TOTAL_ANGLE: number = Math.round(AngleFactory.getInstance()!.TOTAL_ANGLE);

                //@Throws(Exception.constructor)
            
    public processScore(allbinaryLayerManager: AllBinaryLayerManager, angle: number, otherAngle: number, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface){

    var increment: number = ((this.total -1) /this.TOTAL_ANGLE);;
    

    var minAngle: number = (angle -((increment *this.total)>>1));;
    

    var next: number = 0;;
    

    var weaponLayer: WeaponLayer;;
    




                        for (
    var index: number = 0;index < this.total; index++)
        {
weaponLayer= this.weaponLayerCircularStaticPool!.getInstanceWeaponLayer(this.getOwnerLayerInterface(), this.relativeRelationship!.getX(), this.relativeRelationship!.getY(), 0, Math.round((minAngle +increment)), Math.round(otherAngle), weaponProperties, scoreableInterface);
    
allbinaryLayerManager!.append(weaponLayer);
    
next += increment;
    
}

}


}



