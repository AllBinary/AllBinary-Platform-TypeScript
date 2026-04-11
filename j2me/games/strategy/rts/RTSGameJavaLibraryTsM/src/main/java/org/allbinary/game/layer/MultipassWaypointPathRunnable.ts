
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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
        



import { NullUtil } from "../../../../org/allbinary/logic/NullUtil.js";

    
import { ARunnable } from "../../../../org/allbinary/thread/ARunnable.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { GeographicMapCellPosition } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { MultipassState } from "../../../../org/allbinary/media/graphics/geography/pathfinding/MultipassState.js";

    
import { PathFindingInfo } from "../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../org/allbinary/util/BasicArrayListUtil.js";

    

export class MultipassWaypointPathRunnable extends WaypointPathRunnableBase {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;
        
        

    private readonly multipassState: MultipassState = new MultipassState();
        
        

    private done: boolean = false;
        
        

    private list: BasicArrayList = basicArrayListUtil!.getImmutableInstance()!;
        
        

    private pathFindingInfo: any = {} = NullUtil.getInstance()!.NULL_OBJECT;
        
        

    private readonly FIRST_RUNNABLE: Runnable = new object: ARunnable()
                                {
                                
    public run(){

        try {
            pathFindingLayer!.getWaypointRunnableLogHelper()!.start(pathFindingLayer);
    
reset2();
    

    var geographicMapCellPosition: GeographicMapCellPosition = pathFindingLayer!.getCurrentGeographicMapCellPosition()!;
        
        
;
    

                        if(geographicMapCellPosition == 
                                    null
                                )
                        
                                    {
                                    


                            throw Error("Should never be running here")

                                    }
                                
pathFindingInfo= targetPathFindingLayer!.getWaypointBehavior()!.getWaypoint()!.getPathFindingInfo(geographicMapCellPosition);
    

    var localPathFindingInfo: PathFindingInfo = pathFindingInfo as PathFindingInfo;
        
        
;
    
list= targetPathFindingLayer!.getWaypointBehavior()!.getWaypoint()!.getPathsList(geographicMapCellPosition, localPathFindingInfo, multipassState);
    

                        if(list != basicArrayListUtil!.getImmutableInstance())
                        
                                    {
                                    END_RUNNABLE.run();
    

                                    }
                                
                        else {
                            currentPassRunnable= SECOND_RUNNABLE;
    

                        }
                            

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
setRunning(false);
    
finish();
    
}

}

                                }
                            ;
        
        

    private readonly SECOND_RUNNABLE: Runnable = new object: ARunnable()
                                {
                                
    public run(){

        try {
            
    var geographicMapCellPosition: GeographicMapCellPosition = pathFindingLayer!.getCurrentGeographicMapCellPosition()!;
        
        
;
    

    var localPathFindingInfo: PathFindingInfo = pathFindingInfo as PathFindingInfo;
        
        
;
    
list= targetPathFindingLayer!.getWaypointBehavior()!.getWaypoint()!.getPathsList(geographicMapCellPosition, localPathFindingInfo, multipassState);
    

                        if(list != basicArrayListUtil!.getImmutableInstance())
                        
                                    {
                                    END_RUNNABLE.run();
    

                                    }
                                

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
setRunning(false);
    
finish();
    
}

}

                                }
                            ;
        
        

    private readonly END_RUNNABLE: Runnable = new object: ARunnable()
                                {
                                
    public run(){

        try {
            
    var waypointBehavior: WaypointBehaviorBase = pathFindingLayer!.getWaypointBehavior()!;
        
        
;
    
waypointBehavior!.setWaypointPathsList(list);
    
pathFindingLayer!.getWaypointRunnableLogHelper()!.end(pathFindingLayer);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
setRunning(false);
    
}

finish();
    
}

                                }
                            ;
        
        

    private readonly ALREADY_ENDED_RUNNABLE: Runnable = new object: ARunnable()
                                {
                                
    public run(){



                            throw RuntimeException()
}

                                }
                            ;
        
        

    private currentPassRunnable: Runnable = FIRST_RUNNABLE;
        
        
public constructor (){

            super();
            }


    public setRunning(isRunning: boolean){
var isRunning = isRunning
this.runningP= isRunning;
    

                        if(this.runningP)
                        
                                    {
                                    this.reset();
    
this.done= false;
    

                                    }
                                
}


    public run(){

        try {
            this.currentPassRunnable!.run();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
this.setRunning(false);
    
}

}


    reset2(){
multipassState!.step= 0;
    
multipassState!.iteration= 0;
    
multipassState!.iteration2= 0;
    
pathFindingInfo= NullUtil.getInstance()!.NULL_OBJECT;
    
}


    finish(){
this.reset2();
    
currentPassRunnable= ALREADY_ENDED_RUNNABLE;
    
done= true;
    
}


    public isDone(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return done;
    
}


    public reset(){
this.reset2();
    
this.currentPassRunnable= FIRST_RUNNABLE;
    
this.done= false;
    
}


}
                
            

