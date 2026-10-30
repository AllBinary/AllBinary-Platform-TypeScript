
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
        
            import { Math } from '../../../../../../java/lang/Math.js';
        
import { Canvas } from '../../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas

import { Direction } from '../../../../../../org/allbinary/direction/Direction.js';
//not GWT import const Direction

import { DirectionCompositeInterface } from '../../../../../../org/allbinary/direction/DirectionCompositeInterface.js';
//not GWT import const DirectionCompositeInterface

import { DirectionFactory } from '../../../../../../org/allbinary/direction/DirectionFactory.js';
//not GWT import const DirectionFactory

import { GameInput } from '../../../../../../org/allbinary/game/input/GameInput.js';
//not GWT import const GameInput

import { TrackingEvent } from '../../../../../../org/allbinary/game/tracking/TrackingEvent.js';
//not GWT import const TrackingEvent

import { TrackingEventHandler } from '../../../../../../org/allbinary/game/tracking/TrackingEventHandler.js';
//not GWT import const TrackingEventHandler

import { TrackingEventListenerInterface } from '../../../../../../org/allbinary/game/tracking/TrackingEventListenerInterface.js';
//not GWT import const TrackingEventListenerInterface

import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer

import { AllBinaryLayerManager } from '../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager

import { LayerInterface } from '../../../../../../org/allbinary/layer/LayerInterface.js';
//not GWT import const LayerInterface

//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
type ForcedLogUtil<T = any, U = any> = typeof ForcedLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ForcedLogUtil;

import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject

import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasePatrolAI } from './BasePatrolAI.js';
//sameFolderImports - not GWT import - same folder const BasePatrolAI

export class PacePatrolAI extends BasePatrolAI implements TrackingEventListenerInterface {
        

    private trackingList: BasicArrayList;

    private firingDistance: number= 0;

    isFollowLimitedByTerrain: boolean = false;

public constructor (hashtable: ABHashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(hashtable, ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
TrackingEventHandler.getInstance()!.addListenerInterface(this);
    
this.trackingList= new BasicArrayListD();
    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
this.update();
    

    let direction: Direction = this.setFiringDirectionForTargetIfInRange()!;;
    

    let directionFactory: DirectionFactory = DirectionFactory.getInstance()!;;
    

                        if(direction == directionFactory!.LEFT)
                        
                                    {
                                    
                        if(this.lastKeyDirection != keyDirection || !this.isFollowLimitedByTerrain)
                        
                                    {
                                    super.processKeyAI(Canvas.LEFT);
    

                                    }
                                
keyDirection= Canvas.LEFT;
    
this.lastKeyDirection= keyDirection;
    
xTotalDistance= 0;
    
super.processKeyAI(Canvas.KEY_NUM1);
    

                                    }
                                
                             else 
                        if(direction == directionFactory!.RIGHT)
                        
                                    {
                                    
                        if(this.lastKeyDirection != keyDirection || !this.isFollowLimitedByTerrain)
                        
                                    {
                                    super.processKeyAI(Canvas.RIGHT);
    

                                    }
                                
keyDirection= Canvas.RIGHT;
    
this.lastKeyDirection= keyDirection;
    
xTotalDistance= 0;
    
super.processKeyAI(Canvas.KEY_NUM1);
    

                                    }
                                
                        else {
                            super.processKeyAI(this.keyDirection);
    

                        }
                            
}


    setFiringDirectionForTargetIfInRange(): Direction{

    let directionFactory: DirectionFactory = DirectionFactory.getInstance()!;;
    

    let ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    

    let direction: Direction = directionFactory!.NOT_BORDERED_WITH;;
    

    let lastTrackingEvent: TrackingEvent;;
    

    let lastTrackingLayerInterface: LayerInterface;;
    

    let directionCompositeInterface: DirectionCompositeInterface;;
    

    let size: number = this.trackingList!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
lastTrackingEvent= this.trackingList!.get(0) as TrackingEvent;
    
lastTrackingLayerInterface= lastTrackingEvent!.getLayerInterface();
    

    let x: number = lastTrackingLayerInterface!.getXP()!;;
    

    let y: number = lastTrackingLayerInterface!.getYP()!;;
    

    let yDistance: number = ownerLayerInterface!.getYP() -y -ownerLayerInterface!.getHeight();;
    

    let xDistance: number = ownerLayerInterface!.getXP() -x -ownerLayerInterface!.getWidth();;
    

    let absXDistance: number = Math.abs(xDistance)!;;
    

    let absYDistance: number = Math.abs(yDistance)!;;
    

                        if(absYDistance <= 100)
                        
                                    {
                                    
                        if(absXDistance < getFiringDistance() /2)
                        
                                    {
                                    directionCompositeInterface= this.getOwnerLayerInterface() as DirectionCompositeInterface;
    

                        if(xDistance < 0 && directionCompositeInterface!.getDirection() == directionFactory!.RIGHT)
                        
                                    {
                                    direction= directionFactory!.RIGHT;
    

                                    }
                                
                             else 
                        if(xDistance > 0 && directionCompositeInterface!.getDirection() == directionFactory!.LEFT)
                        
                                    {
                                    direction= directionFactory!.LEFT;
    

                                    }
                                

                                    }
                                

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return direction;
    
}


    public disable(){
}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onMovement(trackingEvent: TrackingEvent){
this.trackingList!.clear();
    
this.trackingList!.add(trackingEvent);
    
}


    public getFiringDistance(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.firingDistance;
    
}


    public setFiringDistance(firingDistance: number){
this.firingDistance= firingDistance;
    
}


}

