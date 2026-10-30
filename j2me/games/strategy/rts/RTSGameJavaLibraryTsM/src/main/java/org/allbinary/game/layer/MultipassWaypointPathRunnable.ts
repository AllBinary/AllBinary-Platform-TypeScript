
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
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { ARunnable } 
const ARunnable = globalThis.org.allbinary.thread.ARunnable;
type ARunnable<T = any, U = any> = typeof ARunnable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ARunnable;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { GeographicMapCellPosition } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition

import { MultipassState } from '../../../../org/allbinary/media/graphics/geography/pathfinding/MultipassState.js';
//not GWT import const MultipassState

import { PathFindingInfo } from '../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingInfo.js';
//not GWT import const PathFindingInfo

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
type BasicArrayListUtil<T = any, U = any> = typeof BasicArrayListUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { WaypointPathRunnableBase } from './WaypointPathRunnableBase.js';
//not GWT import - same folder const WaypointPathRunnableBase
//import { FirstRunnable } from './FirstRunnable.js';
//not GWT import - same folder const FirstRunnable
//import { SecondRunnable } from './SecondRunnable.js';
//not GWT import - same folder const SecondRunnable
//import { EndRunnable } from './EndRunnable.js';
//not GWT import - same folder const EndRunnable
import { WaypointBehaviorBase } from './WaypointBehaviorBase.js';
//not GWT import - same folder const WaypointBehaviorBase
type FirstRunnable = InstanceType<MultipassWaypointPathRunnable['FirstRunnable']>;
type SecondRunnable = InstanceType<MultipassWaypointPathRunnable['SecondRunnable']>;
type EndRunnable = InstanceType<MultipassWaypointPathRunnable['EndRunnable']>;

export class MultipassWaypointPathRunnable extends WaypointPathRunnableBase {
        

//inner= member=true isStatic=
FirstRunnable = (() => { const outer$MultipassWaypointPathRunnable = this; return class extends ARunnable {
        

    private readonly multipassWaypointPathRunnable: MultipassWaypointPathRunnable;

 constructor (multipassWaypointPathRunnable: MultipassWaypointPathRunnable){

            super();
        this.multipassWaypointPathRunnable= multipassWaypointPathRunnable;
    
}


    public run(){
this.multipassWaypointPathRunnable!.processFirstRunnable();
    
}


}; })();//    private boolean first = true;
//inner= member=true isStatic=
SecondRunnable = (() => { const outer$MultipassWaypointPathRunnable = this; return class extends ARunnable {
        

    private readonly multipassWaypointPathRunnable: MultipassWaypointPathRunnable;

 constructor (multipassWaypointPathRunnable: MultipassWaypointPathRunnable){

            super();
        this.multipassWaypointPathRunnable= multipassWaypointPathRunnable;
    
}


    public run(){
this.multipassWaypointPathRunnable!.processSecondRunnable();
    
}


}; })();
//inner= member=true isStatic=
EndRunnable = (() => { const outer$MultipassWaypointPathRunnable = this; return class extends ARunnable {
        

    private readonly multipassWaypointPathRunnable: MultipassWaypointPathRunnable;

 constructor (multipassWaypointPathRunnable: MultipassWaypointPathRunnable){

            super();
        this.multipassWaypointPathRunnable= multipassWaypointPathRunnable;
    
}


    public run(){
this.multipassWaypointPathRunnable!.processEndRunnable();
    
}


}; })();
    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;

    private readonly multipassState: MultipassState = new MultipassState();

    private done: boolean = false;

    private list: BasicArrayList = this.basicArrayListUtil!.getImmutableInstance()!;

    private pathFindingInfo: any = NullUtil.getInstance()!.NULL_OBJECT;

    private readonly FIRST_RUNNABLE: Runnable = new this.FirstRunnable(this);

    private readonly SECOND_RUNNABLE: Runnable = new this.SecondRunnable(this);

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

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    

 try { this.currentPassRunnable!.run();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
this.setRunning(false);
    

 }
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

 try { this.pathFindingLayer!.getWaypointRunnableLogHelper()!.start(this.pathFindingLayer);
    
this.reset2();
    

    let geographicMapCellPosition: GeographicMapCellPosition = this.pathFindingLayer!.getCurrentGeographicMapCellPosition()!;;
    

                        if(geographicMapCellPosition == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("Should never be running here");
                    

                                    }
                                
this.pathFindingInfo= this.targetPathFindingLayer!.getWaypointBehavior()!.getWaypoint()!.getPathFindingInfo(geographicMapCellPosition);
    

    let localPathFindingInfo: PathFindingInfo = this.pathFindingInfo as PathFindingInfo;;
    
this.list= this.targetPathFindingLayer!.getWaypointBehavior()!.getWaypoint()!.getPathsList(geographicMapCellPosition, localPathFindingInfo, this.multipassState);
    

                        if(this.list != this.basicArrayListUtil!.getImmutableInstance())
                        
                                    {
                                    this.END_RUNNABLE.run();
    

                                    }
                                
                        else {
                            this.currentPassRunnable= this.SECOND_RUNNABLE;
    

                        }
                            
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
this.setRunning(false);
    
this.finish();
    

 }
   }
 
}


    processSecondRunnable(){

 try { 
    let geographicMapCellPosition: GeographicMapCellPosition = this.pathFindingLayer!.getCurrentGeographicMapCellPosition()!;;
    

    let localPathFindingInfo: PathFindingInfo = this.pathFindingInfo as PathFindingInfo;;
    
this.list= this.targetPathFindingLayer!.getWaypointBehavior()!.getWaypoint()!.getPathsList(geographicMapCellPosition, localPathFindingInfo, this.multipassState);
    

                        if(this.list != this.basicArrayListUtil!.getImmutableInstance())
                        
                                    {
                                    this.END_RUNNABLE.run();
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
this.setRunning(false);
    
this.finish();
    

 }
   }
 
}


    processEndRunnable(){

 try { 
    let waypointBehavior: WaypointBehaviorBase = this.pathFindingLayer!.getWaypointBehavior()!;;
    
waypointBehavior!.setWaypointPathsList(this.list);
    
this.pathFindingLayer!.getWaypointRunnableLogHelper()!.end(this.pathFindingLayer);
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    
this.setRunning(false);
    

 }
   }
 
this.finish();
    
}


}

