
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
      
import { NoDecimalTrigTable } from '../../../../../org/allbinary/math/NoDecimalTrigTable.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicWeaponPart } from './BasicWeaponPart.js';

export class StraightMultiProjectileWeaponPart extends BasicWeaponPart {
        

    public static createPart(animationInterface: Animation, weaponLayerCircularStaticPool: WeaponLayerCircularPool): StraightMultiProjectileWeaponPart{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StraightMultiProjectileWeaponPart(animationInterface, AllBinaryLayer.NULL_ALLBINARY_LAYER, weaponLayerCircularStaticPool, 2, WeaponProperties.NULL_WEAPON_PROPERTIES, NoScoreable.getInstance(), RelativeRelationship.NULL_RELATIVE_RELATIONSHIP);
    
}


    private readonly weaponLayerCircularStaticPool: WeaponLayerCircularPool

    private readonly total: number
public constructor (animationInterface: Animation, sourceLayerInterface: AllBinaryLayer, weaponLayerCircularStaticPool: WeaponLayerCircularPool, total: number, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface, relativeRelationship: RelativeRelationship){
            super(animationInterface, sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.total= total;
    
this.weaponLayerCircularStaticPool= weaponLayerCircularStaticPool;
    
}


    private readonly noDecimalTrigTable: NoDecimalTrigTable = NoDecimalTrigTable.getInstance()!;

                //@Throws(Exception.constructor)
            
    public processScore(allbinaryLayerManager: AllBinaryLayerManager, angle: number, otherAngle: number, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface){

    var sourceLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;
;
    

    var reducedWidth: number = (sourceLayerInterface!.getWidth() *8 /10);
;
    

    var halfWidth: number = (reducedWidth>>1);
;
    

    var x: number = this.relativeRelationship!.getX()!;
;
    

    var y: number = this.relativeRelationship!.getY()!;
;
    

    var sine: number= 0
;
    

    var beamX: number= 0
;
    

    var cosine: number= 0
;
    

    var beamY: number= 0
;
    

    var weaponLayer: WeaponLayer
;
    

    var increment: number = reducedWidth /(this.total -1);
;
    

    var next: number =  -halfWidth;
;
    




                        for (
    var index: number = 0;
index < this.total; index++)
        {
sine= (next *this.noDecimalTrigTable!.sin(Math.round(angle)));
    
beamX= Math.round((sine /this.noDecimalTrigTable!.SCALE));
    
cosine= (next *this.noDecimalTrigTable!.cos(Math.round(angle)));
    
beamY=  -Math.round((cosine /this.noDecimalTrigTable!.SCALE));
    
weaponLayer= this.weaponLayerCircularStaticPool!.getInstance(sourceLayerInterface, x +beamX, y +beamY, 0, Math.round(angle), Math.round(otherAngle), weaponProperties, scoreableInterface);
    
allbinaryLayerManager!.append(weaponLayer);
    
next += increment;
    
}

}


}
                
            

