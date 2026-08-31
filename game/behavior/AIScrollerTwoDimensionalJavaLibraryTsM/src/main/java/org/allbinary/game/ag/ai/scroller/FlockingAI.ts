
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
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
import { Hashtable } from '../../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { Canvas } from '../../../../../../javax/microedition/lcdui/Canvas.js';
      //not GWT import const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
import { BasicAI } from '../../../../../../org/allbinary/game/ai/BasicAI.js';
      //not GWT import const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;

      
import { BasicGroupFactory } from '../../../../../../org/allbinary/game/identification/BasicGroupFactory.js';
      //not GWT import const BasicGroupFactory = globalThis.org.allbinary.game.identification.BasicGroupFactory;

      
import { GameInput } from '../../../../../../org/allbinary/game/input/GameInput.js';
      //not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
import { GroupLayerManagerListener } from '../../../../../../org/allbinary/game/layer/identification/GroupLayerManagerListener.js';
      //not GWT import const GroupLayerManagerListener = globalThis.org.allbinary.game.layer.identification.GroupLayerManagerListener;

      
import { WeaponLayer } from '../../../../../../org/allbinary/game/layer/weapon/WeaponLayer.js';
      //not GWT import const WeaponLayer = globalThis.org.allbinary.game.layer.weapon.WeaponLayer;

      
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not plain js import { MathUtil } from '../../../../../../org/allbinary/logic/math/MathUtil.js';
      const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;

      
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasePatrolAI } from './BasePatrolAI.js';

export class FlockingAI extends BasicAI {
        

    private readonly allowedDistance: number;

public constructor (hashtable: Hashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    

    var allowedDistance: Integer = hashtable.get(BasePatrolAI.MAX_DISTANCE) as Integer;;
    
this.allowedDistance= allowedDistance!.intValue();
    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){

    var maxDistance: number = 0;;
    

    var farAllbinaryLayer: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;;
    

    var groupLayerManagerListener: GroupLayerManagerListener = GroupLayerManagerListener.getInstance()!;;
    

    var list: BasicArrayList = groupLayerManagerListener!.getList(BasicGroupFactory.getInstance()!.ENEMY)!;;
    

    var size: number = list.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var allBinaryLayer: AllBinaryLayer = list.get(index) as AllBinaryLayer;;
    

                        if(allBinaryLayer!.getType() != WeaponLayer.getStaticType())
                        
                                    {
                                    
    var distance: number = this.getXYDistance(allBinaryLayer)!;;
    

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
                                    
    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    

                        if(farAllbinaryLayer!.getXP() < ownerLayerInterface!.getXP())
                        
                                    {
                                    this.processKeyAI(Canvas.LEFT);
    

                                    }
                                
                             else 
                        if(farAllbinaryLayer!.getXP() > ownerLayerInterface!.getXP())
                        
                                    {
                                    this.processKeyAI(Canvas.RIGHT);
    

                                    }
                                
                             else 
                        if(farAllbinaryLayer!.getYP() > ownerLayerInterface!.getYP())
                        
                                    {
                                    this.processKeyAI(Canvas.UP);
    

                                    }
                                
                             else 
                        if(farAllbinaryLayer!.getYP() < ownerLayerInterface!.getYP())
                        
                                    {
                                    this.processKeyAI(Canvas.DOWN);
    

                                    }
                                

                                    }
                                

                                    }
                                
}


    getXYDistance(allBinaryLayer: AllBinaryLayer): number{

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    

    var xTotalDistance: number = (allBinaryLayer!.getXP() +allBinaryLayer!.getHalfWidth()) -(ownerLayerInterface!.getXP() +ownerLayerInterface!.getHalfWidth());;
    

    var yTotalDistance: number = (allBinaryLayer!.getYP() +allBinaryLayer!.getHalfHeight()) -(ownerLayerInterface!.getYP() +ownerLayerInterface!.getHalfHeight());;
    

    var mathUtil: MathUtil = MathUtil.getInstance()!;;
    

    var totalDistance: number = mathUtil!.abs(xTotalDistance) +mathUtil!.abs(yTotalDistance);;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return totalDistance;
    
}


}



