
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
        



import { Canvas } from "../../../../javax/microedition/lcdui/Canvas.js";

    
import { ArtificialIntelligenceInterface } from "../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js";

    
import { Direction } from "../../../../org/allbinary/direction/Direction.js";

    
import { DirectionFactory } from "../../../../org/allbinary/direction/DirectionFactory.js";

    
import { DirectionalCompositeInterface } from "../../../../org/allbinary/direction/DirectionalCompositeInterface.js";

    
import { DirectionalInterface } from "../../../../org/allbinary/direction/DirectionalInterface.js";

    
import { DestroyedEvent } from "../../../../org/allbinary/game/combat/destroy/event/DestroyedEvent.js";

    
import { DestroyedEventHandler } from "../../../../org/allbinary/game/combat/destroy/event/DestroyedEventHandler.js";

    
import { DestroyedEventListenerInterface } from "../../../../org/allbinary/game/combat/destroy/event/DestroyedEventListenerInterface.js";

    
import { GameInput } from "../../../../org/allbinary/game/input/GameInput.js";

    
import { BasicVelocityProperties } from "../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js";

    
import { VelocityInterfaceCompositeInterface } from "../../../../org/allbinary/game/physics/velocity/VelocityInterfaceCompositeInterface.js";

    
import { TrackingEvent } from "../../../../org/allbinary/game/tracking/TrackingEvent.js";

    
import { TrackingEventHandler } from "../../../../org/allbinary/game/tracking/TrackingEventHandler.js";

    
import { TrackingEventListenerInterface } from "../../../../org/allbinary/game/tracking/TrackingEventListenerInterface.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { ForcedLogUtil } from "../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { MathUtil } from "../../../../org/allbinary/logic/math/MathUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { Visitor } from "../../../../org/allbinary/logic/util/visitor/Visitor.js";

    
import { GameTickTimeDelayHelper } from "../../../../org/allbinary/time/GameTickTimeDelayHelper.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    
import { TimeDelayHelper } from "../../../../org/allbinary/time/TimeDelayHelper.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicAI } from "./BasicAI.js";

export class DiveAndDirectionalTrackingAI extends BasicAI implements TrackingEventListenerInterface, DestroyedEventListenerInterface {
        

    private static readonly directionToKeyMap: number[] = intArrayOf(Canvas.LEFT,Canvas.DOWN,Canvas.UP,Canvas.RIGHT);
        
        

    private readonly mathUtil: MathUtil = MathUtil.getInstance()!;
        
        

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(500);
        
        

    private readonly list: BasicArrayList = new BasicArrayList();
        
        

    private readonly directionalInterface: DirectionalInterface

    private readonly velocityInterface: BasicVelocityProperties

    private initialDropped: boolean= false

    private dive: boolean= false

    private directionOfTarget: Direction = Direction.getInstance(0)!;
        
        

    private readonly MIN_DISTANCE: number = 40;
        
        

    private lastTrackingLayerInterface: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        
        

    private readonly artificialIntelligenceInterface: ArtificialIntelligenceInterface

    private readonly aiVistor: Visitor

    private lastDirection: Direction = DirectionFactory.getInstance()!.NO_DIRECTION;
        
        

    private readonly directionFactory: DirectionFactory = DirectionFactory.getInstance()!;
        
        

    private readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;
        
        
public constructor (ownerLayerInterface: AllBinaryLayer, artificialIntelligenceInterface: ArtificialIntelligenceInterface, gameInput: GameInput, visitor: Visitor){
            super(ownerLayerInterface, gameInput);
                    var ownerLayerInterface = ownerLayerInterface
var artificialIntelligenceInterface = artificialIntelligenceInterface
var gameInput = gameInput
var visitor = visitor


                            //For kotlin this is before the body of the constructor.
                    
this.aiVistor= visitor;
    
this.artificialIntelligenceInterface= artificialIntelligenceInterface;
    

    var directionalCompositeInterface: DirectionalCompositeInterface = this.getOwnerLayerInterface();

                         as DirectionalCompositeInterface;
        
        
;
    
this.directionalInterface= directionalCompositeInterface!.getDirectionalInterface();
    

    var velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface = this.getOwnerLayerInterface();

                         as VelocityInterfaceCompositeInterface;
        
        
;
    
this.velocityInterface= velocityInterfaceCompositeInterface!.getVelocityProperties();
    
DestroyedEventHandler.getInstance()!.addListener(this);
    
this.init();
    
}


                //@Throws(Error::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

                        if(this.isBeyondTarget())
                        
                                    {
                                    this.init();
    
this.velocityInterface!.zero();
    

                                    }
                                

                        if(!this.dive)
                        
                                    {
                                    this.target(allBinaryLayerManager);
    

                                    }
                                
                        else {
                            this.dive();
    
this.attack();
    

                        }
                            
this.list.clear();
    
}


    init(){
this.dive= false;
    
this.directionOfTarget= DirectionFactory.getInstance()!.NOT_BORDERED_WITH;
    
TrackingEventHandler.getInstance()!.addListener(this);
    
}


                //@Throws(Error::class)
            
    target(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

                        if(this.list.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var lastTrackingEvent: TrackingEvent = this.list.remove(0);

                         as TrackingEvent;
        
        
;
    
this.lastTrackingLayerInterface= lastTrackingEvent!.getLayerInterface();
    

    var layerInterface: AllBinaryLayer = this.lastTrackingLayerInterface;
        
        
;
    

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;
        
        
;
    

                        if(layerInterface!.getGroupInterface() == ownerLayerInterface!.getGroupInterface())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var x: number = this.lastTrackingLayerInterface!.getXP()!;
        
        
;
    

    var y: number = this.lastTrackingLayerInterface!.getYP()!;
        
        
;
    

    var yDistance: number = ownerLayerInterface!.getYP() -y -ownerLayerInterface!.getHeight();
        
        
;
    

    var xDistance: number = ownerLayerInterface!.getXP() -x -ownerLayerInterface!.getWidth();
        
        
;
    

    var directionFactory: DirectionFactory = DirectionFactory.getInstance()!;
        
        
;
    

                        if(this.mathUtil!.abs(yDistance) > this.mathUtil!.abs(xDistance))
                        
                                    {
                                    
                        if(yDistance > this.MIN_DISTANCE)
                        
                                    {
                                    this.directionOfTarget= directionFactory!.UP;
    

                                    }
                                
                             else 
                        if(yDistance <  -this.MIN_DISTANCE)
                        
                                    {
                                    this.directionOfTarget= directionFactory!.DOWN;
    

                                    }
                                

                                    }
                                
                        else {
                            
                        if(xDistance > this.MIN_DISTANCE)
                        
                                    {
                                    this.directionOfTarget= directionFactory!.LEFT;
    

                                    }
                                
                             else 
                        if(xDistance <  -this.MIN_DISTANCE)
                        
                                    {
                                    this.directionOfTarget= directionFactory!.RIGHT;
    

                                    }
                                

                        }
                            

                        if(!this.initialDropped && this.directionOfTarget != directionFactory!.NOT_BORDERED_WITH)
                        
                                    {
                                    this.drop();
    

                                    }
                                

                        if(this.initialDropped)
                        
                                    {
                                    
                        if(this.directionOfTarget == directionFactory!.UP || this.directionOfTarget == directionFactory!.DOWN)
                        
                                    {
                                    this.verticalTargeting(x);
    

                                    }
                                
                             else 
                        if(this.directionOfTarget == directionFactory!.LEFT || this.directionOfTarget == directionFactory!.RIGHT)
                        
                                    {
                                    this.horizontalTargeting(y);
    

                                    }
                                
                        else {
                            this.artificialIntelligenceInterface!.processAI(allBinaryLayerManager);
    

                        }
                            

                                    }
                                
}


                //@Throws(Error::class)
            
    verticalTargeting(x: number){
var x = x

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;
        
        
;
    

                        if(ownerLayerInterface!.getXP() < x)
                        
                                    {
                                    this.moveRight();
    

                                    }
                                

                        if(ownerLayerInterface!.getXP() > x)
                        
                                    {
                                    this.moveLeft();
    

                                    }
                                

                        if(ownerLayerInterface!.getXP() > x -3 && ownerLayerInterface!.getXP() < x +3)
                        
                                    {
                                    this.setDive();
    

                                    }
                                
}


                //@Throws(Error::class)
            
    horizontalTargeting(y: number){
var y = y

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;
        
        
;
    

                        if(ownerLayerInterface!.getYP() < y)
                        
                                    {
                                    this.moveDown();
    

                                    }
                                

                        if(ownerLayerInterface!.getYP() > y)
                        
                                    {
                                    this.moveUp();
    

                                    }
                                

                        if(ownerLayerInterface!.getYP() > y -3 && ownerLayerInterface!.getYP() < y +3)
                        
                                    {
                                    this.setDive();
    

                                    }
                                
}


    setDive(){
this.dive= true;
    
this.velocityInterface!.zero();
    
TrackingEventHandler.getInstance()!.removeListener(this);
    
}


                //@Throws(Error::class)
            
    moveRight(){
this.setLastDirection(this.directionFactory!.RIGHT);
    
this.directionalInterface!.setFrame(this.lastDirection);
    
this.aiVistor!.visit(this);
    
}


                //@Throws(Error::class)
            
    moveLeft(){
this.setLastDirection(this.directionFactory!.LEFT);
    
this.directionalInterface!.setFrame(this.lastDirection);
    
this.aiVistor!.visit(this);
    
}


                //@Throws(Error::class)
            
    moveDown(){
this.setLastDirection(this.directionFactory!.DOWN);
    
this.directionalInterface!.setFrame(this.lastDirection);
    
this.aiVistor!.visit(this);
    
}


                //@Throws(Error::class)
            
    moveUp(){
this.setLastDirection(this.directionFactory!.UP);
    
this.directionalInterface!.setFrame(this.lastDirection);
    
this.aiVistor!.visit(this);
    
}


                //@Throws(Error::class)
            
    dive(){
this.directionalInterface!.setFrame(this.directionOfTarget);
    
this.aiVistor!.visit(this);
    
}


                //@Throws(Error::class)
            
    attack(){
super.processAI(Canvas.KEY_NUM1);
    
}


                //@Throws(Error::class)
            
    drop(){

                        if(this.timeDelayHelper!.isTime(this.gameTickTimeDelayHelper!.startTime))
                        
                                    {
                                    this.initialDropped= true;
    
this.aiVistor!.visit(this);
    

                                    }
                                
}


    isBeyondTarget(): boolean{

                        if(this.directionOfTarget == this.directionFactory!.DOWN)
                        
                                    {
                                    
                        if(this.getOwnerLayerInterface()!.getYP() > this.lastTrackingLayerInterface!.getYP() +MIN_DISTANCE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            

                                    }
                                
                             else 
                        if(this.directionOfTarget == this.directionFactory!.UP)
                        
                                    {
                                    
                        if(this.getOwnerLayerInterface()!.getYP() < this.lastTrackingLayerInterface!.getYP() +MIN_DISTANCE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            

                                    }
                                
                             else 
                        if(this.directionOfTarget == this.directionFactory!.RIGHT)
                        
                                    {
                                    
                        if(this.getOwnerLayerInterface()!.getXP() > this.lastTrackingLayerInterface!.getXP() +MIN_DISTANCE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            

                                    }
                                
                             else 
                        if(this.directionOfTarget == this.directionFactory!.LEFT)
                        
                                    {
                                    
                        if(this.getOwnerLayerInterface()!.getXP() < this.lastTrackingLayerInterface!.getXP() +MIN_DISTANCE)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public onEvent(eventObject: AllBinaryEventObject){
var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onMovement(trackingEvent: TrackingEvent){
var trackingEvent = trackingEvent
this.list.add(trackingEvent);
    
}


    public onDestroyed(destroyedEvent: DestroyedEvent){
var destroyedEvent = destroyedEvent

                        if(this.getOwnerLayerInterface() == destroyedEvent!.getLayerInterface())
                        
                                    {
                                    TrackingEventHandler.getInstance()!.removeListener(this);
    
DestroyedEventHandler.getInstance()!.removeListener(this);
    

                                    }
                                
}


    public setLastDirection(lastDirection: Direction){
var lastDirection = lastDirection
this.lastDirection= lastDirection;
    

    var value: number = this.getLastDirection()!.getValue()!;
        
        
;
    

                        if(value < 4)
                        
                                    {
                                    super.setLastKey(directionToKeyMap[value]!);
    

                                    }
                                
}


    public setLastKey(lastKey: number){
var lastKey = lastKey
super.setLastKey(lastKey);
    

                        if(this.getLastKey() == Canvas.LEFT)
                        
                                    {
                                    this.lastDirection= DirectionFactory.getInstance()!.LEFT;
    

                                    }
                                
                             else 
                        if(this.getLastKey() == Canvas.DOWN)
                        
                                    {
                                    this.lastDirection= DirectionFactory.getInstance()!.DOWN;
    

                                    }
                                
                             else 
                        if(this.getLastKey() == Canvas.UP)
                        
                                    {
                                    this.lastDirection= DirectionFactory.getInstance()!.UP;
    

                                    }
                                
                             else 
                        if(this.getLastKey() == Canvas.RIGHT)
                        
                                    {
                                    this.lastDirection= DirectionFactory.getInstance()!.RIGHT;
    

                                    }
                                
}


    public getLastDirection(): Direction{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return lastDirection;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(super.toString());
    
stringBuffer!.append(" LastDirection: ");
    
stringBuffer!.append(StringUtil.getInstance()!.toString(this.getLastDirection()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

