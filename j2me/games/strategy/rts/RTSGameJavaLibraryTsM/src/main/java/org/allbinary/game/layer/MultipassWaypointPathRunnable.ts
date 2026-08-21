
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
            import { Runnable } from '../../../../java/lang/Runnable.js';
        
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      
import { ARunnable } from '../../../../org/allbinary/thread/ARunnable.js';
      
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      
import { GeographicMapCellPosition } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      
import { MultipassState } from '../../../../org/allbinary/media/graphics/geography/pathfinding/MultipassState.js';
      
import { PathFindingInfo } from '../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js';
      
import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListUtil } from '../../../../org/allbinary/util/BasicArrayListUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WaypointPathRunnableBase } from './WaypointPathRunnableBase.js';
//import { FirstRunnable } from './FirstRunnable.js';
//import { SecondRunnable } from './SecondRunnable.js';
//import { EndRunnable } from './EndRunnable.js';
import { WaypointBehaviorBase } from './WaypointBehaviorBase.js';

export class MultipassWaypointPathRunnable extends WaypointPathRunnableBase {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;

    private readonly multipassState: MultipassState = new MultipassState();

    private done: boolean = false;

    private list: BasicArrayList = this.basicArrayListUtil!.getImmutableInstance()!;

    private pathFindingInfo: any = NullUtil.getInstance()!.NULL_OBJECT;

//inner= member=true isStatic=
FirstRunnable = class extends ARunnable {
        

    private readonly multipassWaypointPathRunnable: MultipassWaypointPathRunnable;

 constructor (multipassWaypointPathRunnable: MultipassWaypointPathRunnable){

            super();
        this.multipassWaypointPathRunnable= multipassWaypointPathRunnable;
    
}


    public run(){
this.multipassWaypointPathRunnable!.processFirstRunnable();
    
}


}
                
            
    private readonly FIRST_RUNNABLE: Runnable = new this.FirstRunnable(this);
//    private boolean first = true;
//inner= member=true isStatic=
SecondRunnable = class extends ARunnable {
        

    private readonly multipassWaypointPathRunnable: MultipassWaypointPathRunnable;

 constructor (multipassWaypointPathRunnable: MultipassWaypointPathRunnable){

            super();
        this.multipassWaypointPathRunnable= multipassWaypointPathRunnable;
    
}


    public run(){
this.multipassWaypointPathRunnable!.processSecondRunnable();
    
}


}
                
            
    private readonly SECOND_RUNNABLE: Runnable = new this.SecondRunnable(this);

//inner= member=true isStatic=
EndRunnable = class extends ARunnable {
        

    private readonly multipassWaypointPathRunnable: MultipassWaypointPathRunnable;

 constructor (multipassWaypointPathRunnable: MultipassWaypointPathRunnable){

            super();
        this.multipassWaypointPathRunnable= multipassWaypointPathRunnable;
    
}


    public run(){
this.multipassWaypointPathRunnable!.processEndRunnable();
    
}


}
                
            
    private readonly END_RUNNABLE: Runnable = new this.EndRunnable(this);

    private readonly ALREADY_ENDED_RUNNABLE: Runnable = new class extends ARunnable
                                {
                                
    public run(){



                            throw new RuntimeException();
                    
}

                                }
                            ;

    private currentPassRunnable: Runnable = this.FIRST_RUNNABLE;

public constructor (){

            super();
        }


    public setRunning(isRunning: boolean){
this.runningP= isRunning;
    

                        if(this.runningP)
                        
                                    {
                                    this.reset();
    
this.done= false;
    

                                    }
                                
}


    public run(){

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

        try {
            this.currentPassRunnable!.run();
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
this.setRunning(false);
    
}

}


    reset2(){
this.multipassState!.step= 0;
    
this.multipassState!.iteration= 0;
    
this.multipassState!.iteration2= 0;
    
this.pathFindingInfo= NullUtil.getInstance()!.NULL_OBJECT;
    
}


    finish(){
this.reset2();
    
this.currentPassRunnable= this.ALREADY_ENDED_RUNNABLE;
    
this.done= true;
    
}


    public isDone(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.done;
    
}


    public reset(){
this.reset2();
    
this.currentPassRunnable= this.FIRST_RUNNABLE;
    
this.done= false;
    
}


    processFirstRunnable(){

        try {
            this.pathFindingLayer!.getWaypointRunnableLogHelper()!.start(this.pathFindingLayer);
    
this.reset2();
    

    var geographicMapCellPosition: GeographicMapCellPosition = this.pathFindingLayer!.getCurrentGeographicMapCellPosition()!;;
    

                        if(geographicMapCellPosition == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("Should never be running here");
                    

                                    }
                                
this.pathFindingInfo= this.targetPathFindingLayer!.getWaypointBehavior()!.getWaypoint()!.getPathFindingInfo(geographicMapCellPosition);
    

    var localPathFindingInfo: PathFindingInfo = this.pathFindingInfo as PathFindingInfo;;
    
this.list= this.targetPathFindingLayer!.getWaypointBehavior()!.getWaypoint()!.getPathsList(geographicMapCellPosition, localPathFindingInfo, this.multipassState);
    

                        if(this.list != this.basicArrayListUtil!.getImmutableInstance())
                        
                                    {
                                    this.END_RUNNABLE.run();
    

                                    }
                                
                        else {
                            this.currentPassRunnable= this.SECOND_RUNNABLE;
    

                        }
                            

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
this.setRunning(false);
    
this.finish();
    
}

}


    processSecondRunnable(){

        try {
            
    var geographicMapCellPosition: GeographicMapCellPosition = this.pathFindingLayer!.getCurrentGeographicMapCellPosition()!;;
    

    var localPathFindingInfo: PathFindingInfo = this.pathFindingInfo as PathFindingInfo;;
    
this.list= this.targetPathFindingLayer!.getWaypointBehavior()!.getWaypoint()!.getPathsList(geographicMapCellPosition, localPathFindingInfo, this.multipassState);
    

                        if(this.list != this.basicArrayListUtil!.getImmutableInstance())
                        
                                    {
                                    this.END_RUNNABLE.run();
    

                                    }
                                

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
this.setRunning(false);
    
this.finish();
    
}

}


    processEndRunnable(){

        try {
            
    var waypointBehavior: WaypointBehaviorBase = this.pathFindingLayer!.getWaypointBehavior()!;;
    
waypointBehavior!.setWaypointPathsList(this.list);
    
this.pathFindingLayer!.getWaypointRunnableLogHelper()!.end(this.pathFindingLayer);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
this.setRunning(false);
    
}

this.finish();
    
}


}
                
            

