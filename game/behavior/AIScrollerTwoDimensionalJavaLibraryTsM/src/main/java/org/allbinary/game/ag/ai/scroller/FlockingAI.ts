
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
        
//not game specific package import { Hashtable } from '../../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { Canvas } from '../../../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { BasicAI } from '../../../../../../org/allbinary/game/ai/BasicAI.js';
      const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;

      
//not game specific package import { BasicGroupFactory } from '../../../../../../org/allbinary/game/identification/BasicGroupFactory.js';
      const BasicGroupFactory = globalThis.org.allbinary.game.identification.BasicGroupFactory;

      
//not game specific package import { GameInput } from '../../../../../../org/allbinary/game/input/GameInput.js';
      const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
//not game specific package import { GroupLayerManagerListener } from '../../../../../../org/allbinary/game/layer/identification/GroupLayerManagerListener.js';
      const GroupLayerManagerListener = globalThis.org.allbinary.game.layer.identification.GroupLayerManagerListener;

      
//not game specific package import { WeaponLayer } from '../../../../../../org/allbinary/game/layer/weapon/WeaponLayer.js';
      const WeaponLayer = globalThis.org.allbinary.game.layer.weapon.WeaponLayer;

      
//not game specific package import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { MathUtil } from '../../../../../../org/allbinary/logic/math/MathUtil.js';
      const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;

      
//not game specific package import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
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



