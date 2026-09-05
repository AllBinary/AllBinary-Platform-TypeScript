
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

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface SalvoInterface {
        

                //@Throws(Exception.constructor)
            
    process(allbinaryLayerManager: AllBinaryLayerManager, angle: number, otherAngle: number)

                //@Throws(Exception.constructor)
            
    processScore(allbinaryLayerManager: AllBinaryLayerManager, angle: number, otherAngle: number, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface)

}



