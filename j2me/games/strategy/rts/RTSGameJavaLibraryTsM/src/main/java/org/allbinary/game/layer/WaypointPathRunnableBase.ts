
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { LayerDistanceUtil } from "../../../../org/allbinary/math/LayerDistanceUtil.js";

    
import { PriorityRunnable } from "../../../../org/allbinary/thread/PriorityRunnable.js";

    
import { RunnableInterface } from "../../../../org/allbinary/thread/RunnableInterface.js";

    

export class WaypointPathRunnableBase
            extends Object
        
                , RunnableInterface
                , PriorityRunnable {
        

    private readonly layerDistanceUtil: LayerDistanceUtil = LayerDistanceUtil.getInstance()!;
        
        

    pathFindingLayer: PathFindingLayerInterface = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;
        
        

    targetPathFindingLayer: PathFindingLayerInterface = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;
        
        

    priorityP: number = Integer.MAX_VALUE;
        
        

    runningP: boolean= false

    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.runningP;
    
}


    public setRunning(isRunning: boolean){
    //var isRunning = isRunning
this.runningP= isRunning;
    
}


                //@Throws(Error::class)
            
    public setThread(thread: Thread){
    //var thread = thread
}


    public setTargetLayer(waypointLayer: PathFindingLayerInterface){
    //var waypointLayer = waypointLayer
this.targetPathFindingLayer= waypointLayer;
    
this.setPriority();
    
}


    public setPriority(){

    var pathFindingLayer: AllBinaryLayer = this.pathFindingLayer as AllBinaryLayer;
        
        
;
    

    var targetLayer: AllBinaryLayer = this.targetPathFindingLayer as AllBinaryLayer;
        
        
;
    

                        if(targetLayer != 
                                    null
                                )
                        
                                    {
                                    
    var distance: number = layerDistanceUtil!.getDistance(targetLayer, pathFindingLayer)!;
        
        
;
    

    var distanceCategory: number = distance /70;
        
        
;
    
this.priorityP= distanceCategory;
    

                                    }
                                
}


    public getTargetLayer(): PathFindingLayerInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return targetPathFindingLayer;
    
}


    public setUnitLayer(unitLayer: PathFindingLayerInterface){
var unitLayer = unitLayer
this.pathFindingLayer= unitLayer;
    
}


    public getPriority(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.priorityP;
    
}


    public isDone(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public run(){
}


    public reset(){
}


}
                
            

