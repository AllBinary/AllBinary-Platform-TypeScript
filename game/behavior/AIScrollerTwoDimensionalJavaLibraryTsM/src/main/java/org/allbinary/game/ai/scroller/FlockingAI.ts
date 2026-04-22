
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { BasicAI } from "../../../../../org/allbinary/game/ai/BasicAI.js";

    
import { BasicGroupFactory } from "../../../../../org/allbinary/game/identification/BasicGroupFactory.js";

    
import { GameInput } from "../../../../../org/allbinary/game/input/GameInput.js";

    
import { GroupLayerManagerListener } from "../../../../../org/allbinary/game/layer/identification/GroupLayerManagerListener.js";

    
import { WeaponLayer } from "../../../../../org/allbinary/game/layer/weapon/WeaponLayer.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { MathUtil } from "../../../../../org/allbinary/logic/math/MathUtil.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasePatrolAI } from "./BasePatrolAI.js";

export class FlockingAI extends BasicAI {
        

    private readonly allowedDistance: number
public constructor (hashtable: Hashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(ownerLayerInterface, gameInput);
                    var hashtable = hashtable
var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    

    var allowedDistance: Integer = hashtable.get(BasePatrolAI.MAX_DISTANCE);

                         as Integer;
        
        
;
    
this.allowedDistance= allowedDistance!.toInt();
    
}


                //@Throws(Error::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

    var maxDistance: number = 0;
        
        
;
    

    var farAllbinaryLayer: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        
        
;
    

    var groupLayerManagerListener: GroupLayerManagerListener = GroupLayerManagerListener.getInstance()!;
        
        
;
    

    var list: BasicArrayList = groupLayerManagerListener!.getList(BasicGroupFactory.getInstance()!.ENEMY)!;
        
        
;
    

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var allBinaryLayer: AllBinaryLayer = list.get(index);

                         as AllBinaryLayer;
        
        
;
    

                        if(allBinaryLayer!.getType() != WeaponLayer.getStaticType())
                        
                                    {
                                    
    var distance: number = this.getXYDistance(allBinaryLayer)!;
        
        
;
    

                        if(distance > maxDistance)
                        
                                    {
                                    maxDistance= distance;
    
farAllbinaryLayer= allBinaryLayer;
    

                        if(distance > this.allowedDistance)
                        
                                    {
                                    break;

                    

                                    }
                                

                                    }
                                

                                    }
                                
}


                        if(maxDistance > this.allowedDistance)
                        
                                    {
                                    
                        if(farAllbinaryLayer != AllBinaryLayer.NULL_ALLBINARY_LAYER)
                        
                                    {
                                    
    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;
        
        
;
    

                        if(farAllbinaryLayer!.getXP() < ownerLayerInterface!.getXP())
                        
                                    {
                                    this.processAI(Canvas.LEFT);
    

                                    }
                                
                             else 
                        if(farAllbinaryLayer!.getXP() > ownerLayerInterface!.getXP())
                        
                                    {
                                    this.processAI(Canvas.RIGHT);
    

                                    }
                                
                             else 
                        if(farAllbinaryLayer!.getYP() > ownerLayerInterface!.getYP())
                        
                                    {
                                    this.processAI(Canvas.UP);
    

                                    }
                                
                             else 
                        if(farAllbinaryLayer!.getYP() < ownerLayerInterface!.getYP())
                        
                                    {
                                    this.processAI(Canvas.DOWN);
    

                                    }
                                

                                    }
                                

                                    }
                                
}


    getXYDistance(allBinaryLayer: AllBinaryLayer): number{
var allBinaryLayer = allBinaryLayer

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;
        
        
;
    

    var xTotalDistance: number = (allBinaryLayer!.getXP() +allBinaryLayer!.getHalfWidth()) -(ownerLayerInterface!.getXP() +ownerLayerInterface!.getHalfWidth());
        
        
;
    

    var yTotalDistance: number = (allBinaryLayer!.getYP() +allBinaryLayer!.getHalfHeight()) -(ownerLayerInterface!.getYP() +ownerLayerInterface!.getHalfHeight());
        
        
;
    

    var mathUtil: MathUtil = MathUtil.getInstance()!;
        
        
;
    

    var totalDistance: number = mathUtil!.abs(xTotalDistance) +mathUtil!.abs(yTotalDistance);
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return totalDistance;
    
}


}
                
            

