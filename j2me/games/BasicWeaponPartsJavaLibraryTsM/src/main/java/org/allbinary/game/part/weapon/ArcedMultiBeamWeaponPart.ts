
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

    
import { AngleFactory } from "../../../../../org/allbinary/math/AngleFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicWeaponPart } from "./BasicWeaponPart.js";

export class ArcedMultiBeamWeaponPart extends BasicWeaponPart {
        

    private readonly weaponLayerCircularStaticPool: WeaponLayerCircularPool

    private readonly total: number
public constructor (animationInterface: Animation, weaponLayerCircularStaticPool: WeaponLayerCircularPool){
            super(animationInterface);
                        //var animationInterface = animationInterface
    //var weaponLayerCircularStaticPool = weaponLayerCircularStaticPool


                            //For kotlin this is before the body of the constructor.
                    
this.total= 2;
    
this.weaponLayerCircularStaticPool= weaponLayerCircularStaticPool;
    
}

public constructor (animationInterface: Animation, sourceLayerInterface: AllBinaryLayer, weaponLayerCircularStaticPool: WeaponLayerCircularPool, total: number, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface, relativeRelationship: RelativeRelationship){
            super(animationInterface, sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship);
                        //var animationInterface = animationInterface
    //var sourceLayerInterface = sourceLayerInterface
    //var weaponLayerCircularStaticPool = weaponLayerCircularStaticPool
    //var total = total
    //var weaponProperties = weaponProperties
    //var scoreableInterface = scoreableInterface
    //var relativeRelationship = relativeRelationship


                            //For kotlin this is before the body of the constructor.
                    
this.total= total;
    
this.weaponLayerCircularStaticPool= weaponLayerCircularStaticPool;
    
}


    private readonly TOTAL_ANGLE: number = AngleFactory.getInstance()!.TOTAL_ANGLE;
        
        

                //@Throws(Error::class)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, angle: number, otherAngle: number, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface){
    //var allbinaryLayerManager = allbinaryLayerManager
    //var angle = angle
    //var otherAngle = otherAngle
    //var weaponProperties = weaponProperties
    //var scoreableInterface = scoreableInterface

    var increment: number = ((this.total -1) /TOTAL_ANGLE);
        
        
;
    

    var minAngle: number = (angle -((increment *total)>>1));
        
        
;
    

    var next: number = 0;
        
        
;
    

    var weaponLayer: WeaponLayer
;
    




                        for (
    var index: number = 0;
        
        
index < this.total; index++)
        {
weaponLayer= weaponLayerCircularStaticPool!.getInstance(this.getOwnerLayerInterface(), this.relativeRelationship!.getX(), this.relativeRelationship!.getY(), 0, (minAngle +increment), otherAngle, weaponProperties, scoreableInterface);
    
allbinaryLayerManager!.append(weaponLayer);
    
next += increment;
    
}

}


}
                
            

