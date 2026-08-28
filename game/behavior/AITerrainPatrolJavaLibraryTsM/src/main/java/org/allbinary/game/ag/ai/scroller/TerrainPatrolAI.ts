
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
        
import { PacePatrolAI } from '../../../../../../org/allbinary/game/ag/ai/scroller/PacePatrolAI.js';
      //not GWT import and is game specific code const PacePatrolAI = globalThis.org.allbinary.game.ag.ai.scroller.PacePatrolAI;

      
//not game specific package import { Hashtable } from '../../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { GameInput } from '../../../../../../org/allbinary/game/input/GameInput.js';
      const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
//not game specific package import { BasicTerrainInfo } from '../../../../../../org/allbinary/game/terrain/BasicTerrainInfo.js';
      const BasicTerrainInfo = globalThis.org.allbinary.game.terrain.BasicTerrainInfo;

      
//not game specific package import { TerrainEvent } from '../../../../../../org/allbinary/game/terrain/TerrainEvent.js';
      const TerrainEvent = globalThis.org.allbinary.game.terrain.TerrainEvent;

      
//not game specific package import { TerrainEventCircularStaticPool } from '../../../../../../org/allbinary/game/terrain/TerrainEventCircularStaticPool.js';
      const TerrainEventCircularStaticPool = globalThis.org.allbinary.game.terrain.TerrainEventCircularStaticPool;

      
//not game specific package import { TerrainEventHandler } from '../../../../../../org/allbinary/game/terrain/TerrainEventHandler.js';
      const TerrainEventHandler = globalThis.org.allbinary.game.terrain.TerrainEventHandler;

      
//not game specific package import { TerrainEventListener } from '../../../../../../org/allbinary/game/terrain/TerrainEventListener.js';
      const TerrainEventListener = globalThis.org.allbinary.game.terrain.TerrainEventListener;

      
//not game specific package import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { Angle } from '../../../../../../org/allbinary/math/Angle.js';
      const Angle = globalThis.org.allbinary.math.Angle;

      
//not game specific package import { AngleFactory } from '../../../../../../org/allbinary/math/AngleFactory.js';
      const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
//not game specific package import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TerrainPatrolAI extends PacePatrolAI {
        

    private readonly terrainEventListener: TerrainEventListener = new TerrainEventListener();

    private readonly DOWN: Angle = AngleFactory.getInstance()!.DOWN;

    private readonly CLIFF: BasicTerrainInfo = new BasicTerrainInfo(this.DOWN);

public constructor (hashtable: Hashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
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

    var list: BasicArrayList = this.terrainEventListener!.getList()!;;
    

    var size: number = list.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var terrainEvent: TerrainEvent = list.removeAt(index) as TerrainEvent;;
    

    var basicTerrainInfo: BasicTerrainInfo = terrainEvent!.getBasicTerrainInfo()!;;
    

    var angle: Angle = basicTerrainInfo!.getAngle()!;;
    

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



