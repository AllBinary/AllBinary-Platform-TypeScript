
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
        



            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
//not game specific package import { ArtificialIntelligenceInterface } from '../../../../../org/allbinary/ai/ArtificialIntelligenceInterface.js';
      const ArtificialIntelligenceInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceInterface;

      
//not game specific package import { Direction } from '../../../../../org/allbinary/direction/Direction.js';
      const Direction = globalThis.org.allbinary.direction.Direction;

      
//not game specific package import { DirectionFactory } from '../../../../../org/allbinary/direction/DirectionFactory.js';
      const DirectionFactory = globalThis.org.allbinary.direction.DirectionFactory;

      
//not game specific package import { DirectionalCompositeInterface } from '../../../../../org/allbinary/direction/DirectionalCompositeInterface.js';
      const DirectionalCompositeInterface = globalThis.org.allbinary.direction.DirectionalCompositeInterface;

      
//not game specific package import { DirectionalInterface } from '../../../../../org/allbinary/direction/DirectionalInterface.js';
      const DirectionalInterface = globalThis.org.allbinary.direction.DirectionalInterface;

      
//not game specific package import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
      const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;

      
//not game specific package import { DestroyedEvent } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyedEvent.js';
      const DestroyedEvent = globalThis.org.allbinary.game.combat.destroy.event.DestroyedEvent;

      
//not game specific package import { DestroyedEventHandler } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyedEventHandler.js';
      const DestroyedEventHandler = globalThis.org.allbinary.game.combat.destroy.event.DestroyedEventHandler;

      
//not game specific package import { DestroyedEventListenerInterface } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyedEventListenerInterface.js';
      const DestroyedEventListenerInterface = globalThis.org.allbinary.game.combat.destroy.event.DestroyedEventListenerInterface;

      
//not game specific package import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
      const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
//not game specific package import { BasicVelocityProperties } from '../../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js';
      const BasicVelocityProperties = globalThis.org.allbinary.game.physics.velocity.BasicVelocityProperties;

      
//not game specific package import { VelocityInterfaceCompositeInterface } from '../../../../../org/allbinary/game/physics/velocity/VelocityInterfaceCompositeInterface.js';
      const VelocityInterfaceCompositeInterface = globalThis.org.allbinary.game.physics.velocity.VelocityInterfaceCompositeInterface;

      
//not game specific package import { TrackingEvent } from '../../../../../org/allbinary/game/tracking/TrackingEvent.js';
      const TrackingEvent = globalThis.org.allbinary.game.tracking.TrackingEvent;

      
//not game specific package import { TrackingEventHandler } from '../../../../../org/allbinary/game/tracking/TrackingEventHandler.js';
      const TrackingEventHandler = globalThis.org.allbinary.game.tracking.TrackingEventHandler;

      
//not game specific package import { TrackingEventListenerInterface } from '../../../../../org/allbinary/game/tracking/TrackingEventListenerInterface.js';
      const TrackingEventListenerInterface = globalThis.org.allbinary.game.tracking.TrackingEventListenerInterface;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
      const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not game specific package import { MathUtil } from '../../../../../org/allbinary/logic/math/MathUtil.js';
      const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
      const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not game specific package import { Visitor } from '../../../../../org/allbinary/logic/util/visitor/Visitor.js';
      const Visitor = globalThis.org.allbinary.logic.util.visitor.Visitor;

      
//not game specific package import { GameTickTimeDelayHelper } from '../../../../../org/allbinary/time/GameTickTimeDelayHelper.js';
      const GameTickTimeDelayHelper = globalThis.org.allbinary.time.GameTickTimeDelayHelper;

      
//not game specific package import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
      const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;

      
//not game specific package import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class DiveAndDirectionalTrackingAI extends BasicAI implements TrackingEventListenerInterface, DestroyedEventListenerInterface {
        

    private readonly mathUtil: MathUtil = MathUtil.getInstance()!;

    private readonly directionFactory: DirectionFactory = DirectionFactory.getInstance()!;

    private readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;

    private readonly timeDelayHelper: TimeDelayHelper = new TimeDelayHelper(500);

    private readonly list: BasicArrayList = new BasicArrayListD();

    private readonly directionalInterface: DirectionalInterface;

    private readonly velocityInterface: BasicVelocityProperties;

    private readonly directionToKeyMap: number[] = [Canvas.LEFT,Canvas.DOWN,Canvas.UP,Canvas.RIGHT];

    private initialDropped: boolean= false;

    private diveP: boolean= false;

    private directionOfTarget: Direction = Direction.getInstance(0)!;

    private readonly MIN_DISTANCE: number = 40;

    private lastTrackingLayerInterface: AllBinaryLayer = AllBinaryLayer.NULL_ALLBINARY_LAYER;

    private readonly artificialIntelligenceInterface: ArtificialIntelligenceInterface;

    private readonly aiVistor: Visitor;

    private lastDirection: Direction = DirectionFactory.getInstance()!.NO_DIRECTION;

public constructor (ownerLayerInterface: AllBinaryLayer, artificialIntelligenceInterface: ArtificialIntelligenceInterface, gameInput: GameInput, visitor: Visitor){
            super(ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.aiVistor= visitor;
    
this.artificialIntelligenceInterface= artificialIntelligenceInterface;
    

    var directionalCompositeInterface: DirectionalCompositeInterface = this.getOwnerLayerInterface() as unknown as DirectionalCompositeInterface;;
    
this.directionalInterface= directionalCompositeInterface!.getDirectionalInterface();
    

    var velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface = this.getOwnerLayerInterface() as unknown as VelocityInterfaceCompositeInterface;;
    
this.velocityInterface= velocityInterfaceCompositeInterface!.getVelocityProperties();
    
DestroyedEventHandler.getInstance()!.addListenerInterface(this);
    
this.init();
    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){

                        if(this.isBeyondTarget())
                        
                                    {
                                    this.init();
    
this.velocityInterface!.zero();
    

                                    }
                                

                        if(!this.diveP)
                        
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
this.diveP= false;
    
this.directionOfTarget= DirectionFactory.getInstance()!.NOT_BORDERED_WITH;
    
TrackingEventHandler.getInstance()!.addListenerInterface(this);
    
}


                //@Throws(Exception.constructor)
            
    target(allBinaryLayerManager: AllBinaryLayerManager){

                        if(this.list.size() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var lastTrackingEvent: TrackingEvent = this.list.removeAt(0) as TrackingEvent;;
    
this.lastTrackingLayerInterface= lastTrackingEvent!.getLayerInterface();
    

    var layerInterface: AllBinaryLayer = this.lastTrackingLayerInterface;;
    

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    

                        if(layerInterface!.getGroupInterface() == ownerLayerInterface!.getGroupInterface())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var x: number = this.lastTrackingLayerInterface!.getXP()!;;
    

    var y: number = this.lastTrackingLayerInterface!.getYP()!;;
    

    var yDistance: number = ownerLayerInterface!.getYP() -y -ownerLayerInterface!.getHeight();;
    

    var xDistance: number = ownerLayerInterface!.getXP() -x -ownerLayerInterface!.getWidth();;
    

    var directionFactory: DirectionFactory = DirectionFactory.getInstance()!;;
    

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


                //@Throws(Exception.constructor)
            
    verticalTargeting(x: number){

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    

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


                //@Throws(Exception.constructor)
            
    horizontalTargeting(y: number){

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    

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
this.diveP= true;
    
this.velocityInterface!.zero();
    
TrackingEventHandler.getInstance()!.removeListener(this);
    
}


                //@Throws(Exception.constructor)
            
    moveRight(){
this.setLastDirection(this.directionFactory!.RIGHT);
    
this.directionalInterface!.setFrameByDirection(this.lastDirection);
    
this.aiVistor!.visit(this);
    
}


                //@Throws(Exception.constructor)
            
    moveLeft(){
this.setLastDirection(this.directionFactory!.LEFT);
    
this.directionalInterface!.setFrameByDirection(this.lastDirection);
    
this.aiVistor!.visit(this);
    
}


                //@Throws(Exception.constructor)
            
    moveDown(){
this.setLastDirection(this.directionFactory!.DOWN);
    
this.directionalInterface!.setFrameByDirection(this.lastDirection);
    
this.aiVistor!.visit(this);
    
}


                //@Throws(Exception.constructor)
            
    moveUp(){
this.setLastDirection(this.directionFactory!.UP);
    
this.directionalInterface!.setFrameByDirection(this.lastDirection);
    
this.aiVistor!.visit(this);
    
}


                //@Throws(Exception.constructor)
            
    dive(){
this.directionalInterface!.setFrameByDirection(this.directionOfTarget);
    
this.aiVistor!.visit(this);
    
}


                //@Throws(Exception.constructor)
            
    attack(){
super.processKeyAI(Canvas.KEY_NUM1);
    
}


                //@Throws(Exception.constructor)
            
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
                                    
                        if(this.getOwnerLayerInterface()!.getYP() > this.lastTrackingLayerInterface!.getYP() +this.MIN_DISTANCE)
                        
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
                                    
                        if(this.getOwnerLayerInterface()!.getYP() < this.lastTrackingLayerInterface!.getYP() +this.MIN_DISTANCE)
                        
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
                                    
                        if(this.getOwnerLayerInterface()!.getXP() > this.lastTrackingLayerInterface!.getXP() +this.MIN_DISTANCE)
                        
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
                                    
                        if(this.getOwnerLayerInterface()!.getXP() < this.lastTrackingLayerInterface!.getXP() +this.MIN_DISTANCE)
                        
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
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


    public onMovement(trackingEvent: TrackingEvent){
this.list.add(trackingEvent);
    
}


    public onDestroyed(destroyedEvent: DestroyedEvent){

                        if(this.getOwnerLayerInterface() == destroyedEvent!.getLayerInterface())
                        
                                    {
                                    TrackingEventHandler.getInstance()!.removeListener(this);
    
DestroyedEventHandler.getInstance()!.removeListener(this);
    

                                    }
                                
}


    public setLastDirection(lastDirection: Direction){
this.lastDirection= lastDirection;
    

    var value: number = this.getLastDirection()!.getValue()!;;
    

                        if(value < 4)
                        
                                    {
                                    super.setLastKey(this.directionToKeyMap[value]!);
    

                                    }
                                
}


    public setLastKey(lastKey: number){
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
                        return this.lastDirection;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(super.toString());
    
stringBuffer!.append(" LastDirection: ");
    
stringBuffer!.append(StringUtil.getInstance()!.toString(this.getLastDirection()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}
                
            

