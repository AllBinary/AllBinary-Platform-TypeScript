
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
        



import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { GameInput } from "../../../../../org/allbinary/game/input/GameInput.js";

    
import { BasicTerrainInfo } from "../../../../../org/allbinary/game/terrain/BasicTerrainInfo.js";

    
import { TerrainEvent } from "../../../../../org/allbinary/game/terrain/TerrainEvent.js";

    
import { TerrainEventCircularStaticPool } from "../../../../../org/allbinary/game/terrain/TerrainEventCircularStaticPool.js";

    
import { TerrainEventHandler } from "../../../../../org/allbinary/game/terrain/TerrainEventHandler.js";

    
import { TerrainEventListener } from "../../../../../org/allbinary/game/terrain/TerrainEventListener.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Angle } from "../../../../../org/allbinary/math/Angle.js";

    
import { AngleFactory } from "../../../../../org/allbinary/math/AngleFactory.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class TerrainPatrolAI extends PacePatrolAI {
        

    private readonly terrainEventListener: TerrainEventListener = new TerrainEventListener();
        
        

    private readonly DOWN: Angle = AngleFactory.getInstance()!.DOWN;
        
        

    private readonly CLIFF: BasicTerrainInfo = new BasicTerrainInfo(DOWN);
        
        
public constructor (hashtable: Hashtable<Any, Any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput)                        

                            : super(hashtable, ownerLayerInterface, gameInput){

            super();
                //var hashtable = hashtable
    //var ownerLayerInterface = ownerLayerInterface
    //var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    
TerrainEventHandler.getInstance(ownerLayerInterface)!.addListener(this.terrainEventListener)
this.terrainEventListener!.onTerrainEvent(TerrainEventCircularStaticPool.getInstance()!.getInstance(this.CLIFF))
}


    update(){
super.update()
this.this.changeDirectionIfCliffReached()
}


    changeDirectionIfCliffReached(){

    var list: BasicArrayList = this.terrainEventListener!.getList()!;
        
        


    var size: number = list.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var terrainEvent: TerrainEvent = list.remove(index) as TerrainEvent;
        
        


    var basicTerrainInfo: BasicTerrainInfo = terrainEvent!.getBasicTerrainInfo()!;
        
        


    var angle: Angle = basicTerrainInfo!.getAngle()!;
        
        


                        if(angle == DOWN)
                        
                                    {
                                    this.this.nextDirection()

                        if(!this.isFollowLimitedByTerrain)
                        
                                    {
                                    logUtil!.put("Following Limited", this, "onTerrainEvent")
this.isFollowLimitedByTerrain= true

                                    }
                                

                                    }
                                
}

}


}
                
            

