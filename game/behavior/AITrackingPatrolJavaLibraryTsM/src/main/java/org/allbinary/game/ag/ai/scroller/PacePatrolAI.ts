
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
        
//not game specific package import { Hashtable } from '../../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { Canvas } from '../../../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { Direction } from '../../../../../../org/allbinary/direction/Direction.js';
      const Direction = globalThis.org.allbinary.direction.Direction;

      
//not game specific package import { DirectionCompositeInterface } from '../../../../../../org/allbinary/direction/DirectionCompositeInterface.js';
      const DirectionCompositeInterface = globalThis.org.allbinary.direction.DirectionCompositeInterface;

      
//not game specific package import { DirectionFactory } from '../../../../../../org/allbinary/direction/DirectionFactory.js';
      const DirectionFactory = globalThis.org.allbinary.direction.DirectionFactory;

      
//not game specific package import { GameInput } from '../../../../../../org/allbinary/game/input/GameInput.js';
      const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
//not game specific package import { TrackingEvent } from '../../../../../../org/allbinary/game/tracking/TrackingEvent.js';
      const TrackingEvent = globalThis.org.allbinary.game.tracking.TrackingEvent;

      
//not game specific package import { TrackingEventHandler } from '../../../../../../org/allbinary/game/tracking/TrackingEventHandler.js';
      const TrackingEventHandler = globalThis.org.allbinary.game.tracking.TrackingEventHandler;

      
//not game specific package import { TrackingEventListenerInterface } from '../../../../../../org/allbinary/game/tracking/TrackingEventListenerInterface.js';
      const TrackingEventListenerInterface = globalThis.org.allbinary.game.tracking.TrackingEventListenerInterface;

      
//not game specific package import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { LayerInterface } from '../../../../../../org/allbinary/layer/LayerInterface.js';
      const LayerInterface = globalThis.org.allbinary.layer.LayerInterface;

      
//not game specific package import { ForcedLogUtil } from '../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not game specific package import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasePatrolAI } from './BasePatrolAI.js';

export class PacePatrolAI extends BasePatrolAI implements TrackingEventListenerInterface {
        

    private trackingList: BasicArrayList;

    private firingDistance: number= 0;

    isFollowLimitedByTerrain: boolean = false;

public constructor (hashtable: Hashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(hashtable, ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
TrackingEventHandler.getInstance()!.addListenerInterface(this);
    
this.trackingList= new BasicArrayListD();
    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
this.update();
    

    var direction: Direction = this.setFiringDirectionForTargetIfInRange()!;;
    

    var directionFactory: DirectionFactory = DirectionFactory.getInstance()!;;
    

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

    var directionFactory: DirectionFactory = DirectionFactory.getInstance()!;;
    

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    

    var direction: Direction = directionFactory!.NOT_BORDERED_WITH;;
    

    var lastTrackingEvent: TrackingEvent;;
    

    var lastTrackingLayerInterface: LayerInterface;;
    

    var directionCompositeInterface: DirectionCompositeInterface;;
    

    var size: number = this.trackingList!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
lastTrackingEvent= this.trackingList!.get(0) as TrackingEvent;
    
lastTrackingLayerInterface= lastTrackingEvent!.getLayerInterface();
    

    var x: number = lastTrackingLayerInterface!.getXP()!;;
    

    var y: number = lastTrackingLayerInterface!.getYP()!;;
    

    var yDistance: number = ownerLayerInterface!.getYP() -y -ownerLayerInterface!.getHeight();;
    

    var xDistance: number = ownerLayerInterface!.getXP() -x -ownerLayerInterface!.getWidth();;
    

    var absXDistance: number = Math.abs(xDistance)!;;
    

    var absYDistance: number = Math.abs(yDistance)!;;
    

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



