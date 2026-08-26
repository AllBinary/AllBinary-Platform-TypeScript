
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
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { WeaponProperties } from '../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
      const WeaponProperties = globalThis.org.allbinary.game.combat.weapon.WeaponProperties;

      
//not game specific package import { ScoreableInterface } from '../../../../../org/allbinary/game/score/ScoreableInterface.js';
      const ScoreableInterface = globalThis.org.allbinary.game.score.ScoreableInterface;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerCircularPool } from '../../../../../org/allbinary/layer/AllBinaryLayerCircularPool.js';
      const AllBinaryLayerCircularPool = globalThis.org.allbinary.layer.AllBinaryLayerCircularPool;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WeaponLayer } from './WeaponLayer.js';

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
                
            

