
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
        



import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { WeaponProperties } from "../../../../../org/allbinary/game/combat/weapon/WeaponProperties.js";

    
import { WeaponLayer } from "../../../../../org/allbinary/game/layer/weapon/WeaponLayer.js";

    
import { WeaponLayerCircularPool } from "../../../../../org/allbinary/game/layer/weapon/WeaponLayerCircularPool.js";

    
import { ScoreableInterface } from "../../../../../org/allbinary/game/score/ScoreableInterface.js";

    
import { RelativeRelationship } from "../../../../../org/allbinary/graphics/RelativeRelationship.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    

export class BasicProjectileWeaponPart extends BasicWeaponPart {
        

    private weaponLayerCircularStaticPool: WeaponLayerCircularPool
public constructor (animationInterface: Animation, weaponLayerCircularStaticPool: WeaponLayerCircularPool)                        

                            : super(animationInterface){

            super();
                //var animationInterface = animationInterface
    //var weaponLayerCircularStaticPool = weaponLayerCircularStaticPool


                            //For kotlin this is before the body of the constructor.
                    
this.weaponLayerCircularStaticPool= weaponLayerCircularStaticPool;
    
}

public constructor (animationInterface: Animation, sourceLayerInterface: AllBinaryLayer, weaponLayerCircularStaticPool: WeaponLayerCircularPool, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface, relativeRelationship: RelativeRelationship)                        

                            : super(animationInterface, sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship){

            super();
                //var animationInterface = animationInterface
    //var sourceLayerInterface = sourceLayerInterface
    //var weaponLayerCircularStaticPool = weaponLayerCircularStaticPool
    //var weaponProperties = weaponProperties
    //var scoreableInterface = scoreableInterface
    //var relativeRelationship = relativeRelationship


                            //For kotlin this is before the body of the constructor.
                    
this.weaponLayerCircularStaticPool= weaponLayerCircularStaticPool;
    
}


                //@Throws(Error::class)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, angle: number, otherAngle: number, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface){
    //var allbinaryLayerManager = allbinaryLayerManager
    //var angle = angle
var otherAngle = otherAngle
    //var weaponProperties = weaponProperties
    //var scoreableInterface = scoreableInterface

    var weaponLayer: WeaponLayer = weaponLayerCircularStaticPool!.getInstance(this.getOwnerLayerInterface(), this.relativeRelationship!.getX(), this.relativeRelationship!.getY(), this.relativeRelationship!.getZ(), angle.toInt(), otherAngle.toInt(), weaponProperties, scoreableInterface)!;
        
        
;
    
allbinaryLayerManager!.append(weaponLayer);
    
}


}
                
            

