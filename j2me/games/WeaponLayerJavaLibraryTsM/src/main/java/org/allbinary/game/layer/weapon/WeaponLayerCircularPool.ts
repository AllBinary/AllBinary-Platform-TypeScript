
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

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerCircularPool } from "../../../../../org/allbinary/layer/AllBinaryLayerCircularPool.js";

    

export class WeaponLayerCircularPool extends AllBinaryLayerCircularPool {
        
public constructor (){

            super();
            }


                @Throws(Exception::class)
            
    public getInstance(sourceLayerInterface: AllBinaryLayer, x: number, y: number, z: number, angle: number, otherAngle: number, weaponProperties: WeaponProperties, scoreable: ScoreableInterface): WeaponLayer{
var sourceLayerInterface = sourceLayerInterface
var x = x
var y = y
var z = z
var angle = angle
var otherAngle = otherAngle
var weaponProperties = weaponProperties
var scoreable = scoreable

    var weaponLayer: WeaponLayer = super.getNextInstance() as WeaponLayer;
        
        

init(x, y, z)
init(sourceLayerInterface, angle, otherAngle, weaponProperties, scoreable)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return weaponLayer;
    
}


}
                
            

