
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

      
import { WeaponProperties } from '../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
      //not GWT import const WeaponProperties = globalThis.org.allbinary.game.combat.weapon.WeaponProperties;

      
import { ScoreableInterface } from '../../../../../org/allbinary/game/score/ScoreableInterface.js';
      //not GWT import const ScoreableInterface = globalThis.org.allbinary.game.score.ScoreableInterface;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerCircularPool } from '../../../../../org/allbinary/layer/AllBinaryLayerCircularPool.js';
      //not GWT import const AllBinaryLayerCircularPool = globalThis.org.allbinary.layer.AllBinaryLayerCircularPool;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WeaponLayer } from './WeaponLayer.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.weapon.WeaponLayer;

                
export class WeaponLayerCircularPool extends AllBinaryLayerCircularPool {
        

public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstanceWeaponLayer(sourceLayerInterface: AllBinaryLayer, x: number, y: number, z: number, angle: number, otherAngle: number, weaponProperties: WeaponProperties, scoreable: ScoreableInterface): WeaponLayer{

    var weaponLayer: WeaponLayer = super.getNextInstance() as WeaponLayer;;
    
weaponLayer!.initXYZ(x, y, z);
    
weaponLayer!.init(sourceLayerInterface, angle, otherAngle, weaponProperties, scoreable);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return weaponLayer;
    
}


}



