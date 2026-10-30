
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
        
import { GameInput } from '../../../../../../org/allbinary/game/input/GameInput.js';
//not GWT import const GameInput

import { BasicTerrainInfo } from '../../../../../../org/allbinary/game/terrain/BasicTerrainInfo.js';
//not GWT import const BasicTerrainInfo

import { TerrainEvent } from '../../../../../../org/allbinary/game/terrain/TerrainEvent.js';
//not GWT import const TerrainEvent

import { TerrainEventCircularStaticPool } from '../../../../../../org/allbinary/game/terrain/TerrainEventCircularStaticPool.js';
//not GWT import const TerrainEventCircularStaticPool

import { TerrainEventHandler } from '../../../../../../org/allbinary/game/terrain/TerrainEventHandler.js';
//not GWT import const TerrainEventHandler

import { TerrainEventListener } from '../../../../../../org/allbinary/game/terrain/TerrainEventListener.js';
//not GWT import const TerrainEventListener

import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer

import { Angle } from '../../../../../../org/allbinary/math/Angle.js';
//not GWT import const Angle

import { AngleFactory } from '../../../../../../org/allbinary/math/AngleFactory.js';
//not GWT import const AngleFactory

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PacePatrolAI } from './PacePatrolAI.js';
//not GWT import - same folder const PacePatrolAI

export class TerrainPatrolAI extends PacePatrolAI {
        

    private readonly terrainEventListener: TerrainEventListener = new TerrainEventListener();

    private readonly DOWN: Angle = AngleFactory.getInstance()!.DOWN;

    private readonly CLIFF: BasicTerrainInfo = new BasicTerrainInfo(this.DOWN);

public constructor (hashtable: ABHashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(hashtable, ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
TerrainEventHandler.getInstance(ownerLayerInterface)!.addListener(this.terrainEventListener);
    
this.terrainEventListener!.onTerrainEvent(TerrainEventCircularStaticPool.getInstance()!.getNext(this.CLIFF));
    
}


    update(){
super.update();
    
this.changeDirectionIfCliffReached();
    
}


    changeDirectionIfCliffReached(){

    let list: BasicArrayList = this.terrainEventListener!.getList()!;;
    

    let size: number = list.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let terrainEvent: TerrainEvent = list.removeAt(index) as TerrainEvent;;
    

    let basicTerrainInfo: BasicTerrainInfo = terrainEvent!.getBasicTerrainInfo()!;;
    

    let angle: Angle = basicTerrainInfo!.getAngle()!;;
    

                        if(angle == this.DOWN)
                        
                                    {
                                    this.nextDirection();
    

                        if(!this.isFollowLimitedByTerrain)
                        
                                    {
                                    this.logUtil!.putF("Following Limited", this, "onTerrainEvent");
    
this.isFollowLimitedByTerrain= true;
    

                                    }
                                

                                    }
                                
}

}


}

