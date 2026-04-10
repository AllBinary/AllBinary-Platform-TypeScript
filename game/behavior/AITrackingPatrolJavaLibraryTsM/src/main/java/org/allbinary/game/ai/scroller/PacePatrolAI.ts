
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

    
import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { Direction } from "../../../../../org/allbinary/direction/Direction.js";

    
import { DirectionCompositeInterface } from "../../../../../org/allbinary/direction/DirectionCompositeInterface.js";

    
import { DirectionFactory } from "../../../../../org/allbinary/direction/DirectionFactory.js";

    
import { GameInput } from "../../../../../org/allbinary/game/input/GameInput.js";

    
import { TrackingEvent } from "../../../../../org/allbinary/game/tracking/TrackingEvent.js";

    
import { TrackingEventHandler } from "../../../../../org/allbinary/game/tracking/TrackingEventHandler.js";

    
import { TrackingEventListenerInterface } from "../../../../../org/allbinary/game/tracking/TrackingEventListenerInterface.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { LayerInterface } from "../../../../../org/allbinary/layer/LayerInterface.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class PacePatrolAI extends BasePatrolAI
                , TrackingEventListenerInterface {
        

    private trackingList: BasicArrayList

    private firingDistance: number= 0

    isFollowLimitedByTerrain: boolean = false;
        
        
public constructor (hashtable: Hashtable<Any, Any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput)                        

                            : super(hashtable, ownerLayerInterface, gameInput){

            super();
            var hashtable = hashtable
var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    
addListener(this)
this.trackingList= BasicArrayList()
}


                @Throws(Exception::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager
this.update()

    var direction: Direction = this.setFiringDirectionForTargetIfInRange()!;
        
        


    var directionFactory: DirectionFactory = DirectionFactory.getInstance()!;
        
        


    
                        if(direction == directionFactory!.LEFT)
                        
                                    {
                                    
    
                        if(this.lastKeyDirection != keyDirection || !this.isFollowLimitedByTerrain)
                        
                                    {
                                    processAI(Canvas.LEFT)

                                    }
                                
keyDirection= Canvas.LEFT
this.lastKeyDirection= keyDirection
xTotalDistance= 0
processAI(Canvas.KEY_NUM1)

                                    }
                                
                             else 
    
                        if(direction == directionFactory!.RIGHT)
                        
                                    {
                                    
    
                        if(this.lastKeyDirection != keyDirection || !this.isFollowLimitedByTerrain)
                        
                                    {
                                    processAI(Canvas.RIGHT)

                                    }
                                
keyDirection= Canvas.RIGHT
this.lastKeyDirection= keyDirection
xTotalDistance= 0
processAI(Canvas.KEY_NUM1)

                                    }
                                
                        else {
                            processAI(this.keyDirection)

                        }
                            
}


    setFiringDirectionForTargetIfInRange(): Direction{

    var directionFactory: DirectionFactory = DirectionFactory.getInstance()!;
        
        


    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;
        
        


    var direction: Direction = directionFactory!.NOT_BORDERED_WITH;
        
        


    var lastTrackingEvent: TrackingEvent


    var lastTrackingLayerInterface: LayerInterface


    var directionCompositeInterface: DirectionCompositeInterface


    var size: number = this.trackingList!.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
lastTrackingEvent= this.trackingList!.get(0) as TrackingEvent
lastTrackingLayerInterface= lastTrackingEvent!.getLayerInterface()

    var x: number = lastTrackingLayerInterface!.getXP()!;
        
        


    var y: number = lastTrackingLayerInterface!.getYP()!;
        
        


    var yDistance: number = ownerLayerInterface!.getYP() -y -ownerLayerInterface!.getHeight();
        
        


    var xDistance: number = ownerLayerInterface!.getXP() -x -ownerLayerInterface!.getWidth();
        
        


    var absXDistance: number = Math.abs(xDistance)!;
        
        


    var absYDistance: number = Math.abs(yDistance)!;
        
        


    
                        if(absYDistance <= 100)
                        
                                    {
                                    
    
                        if(absXDistance < getFiringDistance() /2)
                        
                                    {
                                    directionCompositeInterface= this.getOwnerLayerInterface() as DirectionCompositeInterface

    
                        if(xDistance < 0 && directionCompositeInterface!.getDirection() == directionFactory!.RIGHT)
                        
                                    {
                                    direction= directionFactory!.RIGHT

                                    }
                                
                             else 
    
                        if(xDistance > 0 && directionCompositeInterface!.getDirection() == directionFactory!.LEFT)
                        
                                    {
                                    direction= directionFactory!.LEFT

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
var eventObject = eventObject
log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this)
}


    public onMovement(trackingEvent: TrackingEvent){
var trackingEvent = trackingEvent
clear()
add(trackingEvent)
}


    public getFiringDistance(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.firingDistance;
    
}


    public setFiringDistance(firingDistance: number){
var firingDistance = firingDistance
this.firingDistance= firingDistance
}


}
                
            

