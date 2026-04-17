
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

    
import { NoDecimalTrigTable } from "../../../../../org/allbinary/math/NoDecimalTrigTable.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicWeaponPart } from "./BasicWeaponPart.js";

export class StraightMultiProjectileWeaponPart extends BasicWeaponPart {
        

    private readonly weaponLayerCircularStaticPool: WeaponLayerCircularPool

    private readonly total: number
public constructor (animationInterface: Animation, weaponLayerCircularStaticPool: WeaponLayerCircularPool)                        

                            : super(animationInterface){

            super();
                //var animationInterface = animationInterface
    //var weaponLayerCircularStaticPool = weaponLayerCircularStaticPool


                            //For kotlin this is before the body of the constructor.
                    
this.total= 2;
    
this.weaponLayerCircularStaticPool= weaponLayerCircularStaticPool;
    
}

public constructor (animationInterface: Animation, sourceLayerInterface: AllBinaryLayer, weaponLayerCircularStaticPool: WeaponLayerCircularPool, total: number, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface, relativeRelationship: RelativeRelationship)                        

                            : super(animationInterface, sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship){

            super();
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


    private readonly noDecimalTrigTable: NoDecimalTrigTable = NoDecimalTrigTable.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public process(allbinaryLayerManager: AllBinaryLayerManager, angle: number, otherAngle: number, weaponProperties: WeaponProperties, scoreableInterface: ScoreableInterface){
    //var allbinaryLayerManager = allbinaryLayerManager
    //var angle = angle
    //var otherAngle = otherAngle
    //var weaponProperties = weaponProperties
    //var scoreableInterface = scoreableInterface

    var sourceLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;
        
        
;
    

    var reducedWidth: number = (sourceLayerInterface!.getWidth() *8 /10);
        
        
;
    

    var halfWidth: number = (reducedWidth shr 1);
        
        
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
        
        
index < total; index++)
        {
sine= (next *noDecimalTrigTable!.sin(angle.toInt())).toLong();
    
beamX= (sine /noDecimalTrigTable!.SCALE).toInt();
    
cosine= (next *noDecimalTrigTable!.cos(angle.toInt())).toLong();
    
beamY=  -(cosine /noDecimalTrigTable!.SCALE).toInt();
    
weaponLayer= weaponLayerCircularStaticPool!.getInstance(sourceLayerInterface, x +beamX, y +beamY, 0, angle.toInt(), otherAngle.toInt(), weaponProperties, scoreableInterface);
    
allbinaryLayerManager!.append(weaponLayer);
    
next += increment;
    
}

}


}
                
            

