
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
        
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { ARunnable } 
const ARunnable = globalThis.org.allbinary.thread.ARunnable;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { GeographicMapCellPosition } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { MultipassState } from '../../../../org/allbinary/media/graphics/geography/pathfinding/MultipassState.js';
//not GWT import const MultipassState = globalThis.org.allbinary.media.graphics.geography.pathfinding.MultipassState;

      
import { PathFindingInfo } from '../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js';
//not GWT import const PathFindingInfo = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingInfo;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WaypointPathRunnableBase } from './WaypointPathRunnableBase.js';
//not GWT import - same folder const WaypointPathRunnableBase = globalThis.org.allbinary.game.layer.WaypointPathRunnableBase;

                //import { FirstRunnable } from './FirstRunnable.js';
//not GWT import - same folder const FirstRunnable = globalThis.org.allbinary.game.layer.FirstRunnable;

                //import { SecondRunnable } from './SecondRunnable.js';
//not GWT import - same folder const SecondRunnable = globalThis.org.allbinary.game.layer.SecondRunnable;

                //import { EndRunnable } from './EndRunnable.js';
//not GWT import - same folder const EndRunnable = globalThis.org.allbinary.game.layer.EndRunnable;

                import { WaypointBehaviorBase } from './WaypointBehaviorBase.js';
//not GWT import - same folder const WaypointBehaviorBase = globalThis.org.allbinary.game.layer.WaypointBehaviorBase;

                
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



