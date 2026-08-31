
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
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { WeaponProperties } from '../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
      //not GWT import const WeaponProperties = globalThis.org.allbinary.game.combat.weapon.WeaponProperties;

      
import { WeaponLayer } from '../../../../../org/allbinary/game/layer/weapon/WeaponLayer.js';
      //not GWT import const WeaponLayer = globalThis.org.allbinary.game.layer.weapon.WeaponLayer;

      
import { WeaponLayerCircularPool } from '../../../../../org/allbinary/game/layer/weapon/WeaponLayerCircularPool.js';
      //not GWT import const WeaponLayerCircularPool = globalThis.org.allbinary.game.layer.weapon.WeaponLayerCircularPool;

      
import { NoScoreable } from '../../../../../org/allbinary/game/score/NoScoreable.js';
      //not GWT import const NoScoreable = globalThis.org.allbinary.game.score.NoScoreable;

      
import { ScoreableInterface } from '../../../../../org/allbinary/game/score/ScoreableInterface.js';
      //not GWT import const ScoreableInterface = globalThis.org.allbinary.game.score.ScoreableInterface;

      
import { RelativeRelationship } from '../../../../../org/allbinary/graphics/RelativeRelationship.js';
      //not GWT import const RelativeRelationship = globalThis.org.allbinary.graphics.RelativeRelationship;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not plain js import { NoDecimalTrigTable } from '../../../../../org/allbinary/math/NoDecimalTrigTable.js';
      const NoDecimalTrigTable = globalThis.org.allbinary.math.NoDecimalTrigTable;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicWeaponPart } from './BasicWeaponPart.js';
//not GWT import const BasicWeaponPart = globalThis.org.allbinary.game.part.weapon.BasicWeaponPart;

                
export class StraightMultiProjectileWeaponPart extends BasicWeaponPart {
        

    public static createStraightMultiProjectileWeaponPart(animationInterface: Animation, weaponLayerCircularStaticPool: WeaponLayerCircularPool): StraightMultiProjectileWeaponPart{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StraightMultiProjectileWeaponPart(animationInterface, AllBinaryLayer.NULL_ALLBINARY_LAYER, weaponLayerCircularStaticPool, 2, WeaponProperties.NULL_WEAPON_PROPERTIES, NoScoreable.getInstance(), RelativeRelationship.NULL_RELATIVE_RELATIONSHIP);
    
}


    private readonly weaponLayerCircularStaticPool: WeaponLayerCircularPool;

    private readonly total: number;

public constructor (animationInterface: Animation, sourceLayerInterface: AllBinaryLayer, weaponLayerCircularStaticPool: WeaponLayerCircularPool, total: number, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface, relativeRelationship: RelativeRelationship){
            super(animationInterface, sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.total= total;
    
this.weaponLayerCircularStaticPool= weaponLayerCircularStaticPool;
    
}


    private readonly noDecimalTrigTable: NoDecimalTrigTable = NoDecimalTrigTable.getInstance()!;

                //@Throws(Exception.constructor)
            
    public processScore(allbinaryLayerManager: AllBinaryLayerManager, angle: number, otherAngle: number, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface){

    var sourceLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    

    var reducedWidth: number = (sourceLayerInterface!.getWidth() *8 /10);;
    

    var halfWidth: number = (reducedWidth>>1);;
    

    var x: number = this.relativeRelationship!.getX()!;;
    

    var y: number = this.relativeRelationship!.getY()!;;
    

    var sine: number= 0;;
    

    var beamX: number= 0;;
    

    var cosine: number= 0;;
    

    var beamY: number= 0;;
    

    var weaponLayer: WeaponLayer;;
    

    var increment: number = reducedWidth /(this.total -1);;
    

    var next: number =  -halfWidth;;
    




                        for (
    var index: number = 0;index < this.total; index++)
        {
sine= (next *this.noDecimalTrigTable!.sin(Math.round(angle)));
    
beamX= Math.round((sine /this.noDecimalTrigTable!.SCALE));
    
cosine= (next *this.noDecimalTrigTable!.cos(Math.round(angle)));
    
beamY=  -Math.round((cosine /this.noDecimalTrigTable!.SCALE));
    
weaponLayer= this.weaponLayerCircularStaticPool!.getInstanceWeaponLayer(sourceLayerInterface, x +beamX, y +beamY, 0, Math.round(angle), Math.round(otherAngle), weaponProperties, scoreableInterface);
    
allbinaryLayerManager!.append(weaponLayer);
    
next += increment;
    
}

}


}



