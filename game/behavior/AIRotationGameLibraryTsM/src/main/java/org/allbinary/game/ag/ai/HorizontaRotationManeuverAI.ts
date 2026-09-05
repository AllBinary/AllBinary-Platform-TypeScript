
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
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
//not plain js import { Canvas } 
const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
import { ArtificialIntelligence } from '../../../../../org/allbinary/ai/ArtificialIntelligence.js';
//not GWT import const ArtificialIntelligence = globalThis.org.allbinary.ai.ArtificialIntelligence;

      
import { ArtificialIntelligenceTransitionInterface } from '../../../../../org/allbinary/ai/ArtificialIntelligenceTransitionInterface.js';
//not GWT import const ArtificialIntelligenceTransitionInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceTransitionInterface;

      
import { IndexedAnimation } from '../../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
import { RotationAnimationInterface } from '../../../../../org/allbinary/animation/RotationAnimationInterface.js';
//not GWT import const RotationAnimationInterface = globalThis.org.allbinary.animation.RotationAnimationInterface;

      
import { RotationAnimationInterfaceCompositeInterface } from '../../../../../org/allbinary/animation/RotationAnimationInterfaceCompositeInterface.js';
//not GWT import const RotationAnimationInterfaceCompositeInterface = globalThis.org.allbinary.animation.RotationAnimationInterfaceCompositeInterface;

      
import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;

      
import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
//not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
import { BasicVelocityProperties } from '../../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js';
//not GWT import const BasicVelocityProperties = globalThis.org.allbinary.game.physics.velocity.BasicVelocityProperties;

      
import { VelocityInterface } from '../../../../../org/allbinary/game/physics/velocity/VelocityInterface.js';
//not GWT import const VelocityInterface = globalThis.org.allbinary.game.physics.velocity.VelocityInterface;

      
import { VelocityInterfaceCompositeInterface } from '../../../../../org/allbinary/game/physics/velocity/VelocityInterfaceCompositeInterface.js';
//not GWT import const VelocityInterfaceCompositeInterface = globalThis.org.allbinary.game.physics.velocity.VelocityInterfaceCompositeInterface;

      
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not plain js import { AngleIncrementInfo } 
const AngleIncrementInfo = globalThis.org.allbinary.math.AngleIncrementInfo;

      
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HorizontaRotationManeuverAI extends BasicAI implements ArtificialIntelligenceTransitionInterface {
        

    private readonly circularIndexUtil: CircularIndexUtil = CircularIndexUtil.createInstanceAt(10, Integer.MAX_VALUE)!;

    private currentSpeedDivisor: number = 5;

    private readonly rotationAnimationInterface: IndexedAnimation;

    private readonly baseVelocityInterface: BasicVelocityProperties;

    private readonly velocityInterface: VelocityInterface;

public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    

    var rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface() as unknown as RotationAnimationInterfaceCompositeInterface;;
    
this.rotationAnimationInterface= rotationAnimationInterfaceCompositeInterface!.getRotationAnimationInterface();
    

    var velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface = this.getOwnerLayerInterface() as unknown as VelocityInterfaceCompositeInterface;;
    
this.baseVelocityInterface= velocityInterfaceCompositeInterface!.getVelocityProperties();
    
this.velocityInterface= this.baseVelocityInterface as unknown as VelocityInterface;
    

    var rotationAnimationInterface: RotationAnimationInterface = this.rotationAnimationInterface as unknown as RotationAnimationInterface;;
    

    var angleIncrementInfo: AngleIncrementInfo = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo()!;;
    
rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.RIGHT_FRAME.intValue());
    
}


    public transition(){

    var rotationAnimationInterface: RotationAnimationInterface = this.rotationAnimationInterface as unknown as RotationAnimationInterface;;
    

    var angleIncrementInfo: AngleIncrementInfo = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo()!;;
    

    var rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface() as unknown as RotationAnimationInterfaceCompositeInterface;;
    
rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.RIGHT_FRAME.intValue());
    

    var allbinaryLayer: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    
allbinaryLayer!.setPosition(allbinaryLayer!.getXP(), 1, allbinaryLayer!.getZP());
    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){

    var rotationAnimationInterface: RotationAnimationInterface = (this.rotationAnimationInterface as unknown as RotationAnimationInterface);;
    

    var angleIncrementInfo: AngleIncrementInfo = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo()!;;
    

    var frame: number = this.rotationAnimationInterface!.getFrame()!;;
    

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    

                        if(ownerLayerInterface!.getXP() -ownerLayerInterface!.getWidth() <= 0 && frame == angleIncrementInfo!.LEFT_FRAME.intValue())
                        
                                    {
                                    this.reverse();
    
this.drop();
    

                                    }
                                

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

                        if(ownerLayerInterface!.getX2() +ownerLayerInterface!.getWidth() > displayInfo!.getLastWidth() && frame == angleIncrementInfo!.RIGHT_FRAME.intValue())
                        
                                    {
                                    this.reverse();
    
this.accelerate();
    
this.drop();
    

                                    }
                                

    var index: number = this.circularIndexUtil!.getIndex()!;;
    

                        if(index % this.currentSpeedDivisor == 0 && index % 2 == 0)
                        
                                    {
                                    super.processKeyAI(Canvas.UP);
    
this.velocityInterface!.limitMaxXYVelocity(this.velocityInterface!.getMaxForwardVelocity() /this.currentSpeedDivisor);
    

                                    }
                                
this.circularIndexUtil!.next();
    

                        if(frame == angleIncrementInfo!.LEFT_FRAME.intValue())
                        
                                    {
                                    super.processKeyAI(Canvas.KEY_NUM0);
    

                                    }
                                
                             else 
                        if(frame == angleIncrementInfo!.RIGHT_FRAME.intValue())
                        
                                    {
                                    super.processKeyAI(Canvas.KEY_POUND);
    

                                    }
                                
}


    reverse(){

    var rotationAnimationInterface: RotationAnimationInterface = this.rotationAnimationInterface as unknown as RotationAnimationInterface;;
    

    var angleIncrementInfo: AngleIncrementInfo = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo()!;;
    

    var frame: number = this.rotationAnimationInterface!.getFrame()!;;
    

                        if(frame == angleIncrementInfo!.LEFT_FRAME.intValue())
                        
                                    {
                                    
    var rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface() as unknown as RotationAnimationInterfaceCompositeInterface;;
    
rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.RIGHT_FRAME.intValue());
    
this.baseVelocityInterface!.zero();
    

                                    }
                                
                             else 
                        if(frame == angleIncrementInfo!.RIGHT_FRAME.intValue())
                        
                                    {
                                    
    var rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface() as unknown as RotationAnimationInterfaceCompositeInterface;;
    
rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.LEFT_FRAME.intValue());
    
this.baseVelocityInterface!.zero();
    

                                    }
                                
}


    accelerate(){

                        if(this.currentSpeedDivisor > 1)
                        
                                    {
                                    this.currentSpeedDivisor--;
    

                                    }
                                
}


    drop(){

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    

    var y: number = ownerLayerInterface!.getYP()!;;
    

                        if(ownerLayerInterface!.getY2() +ownerLayerInterface!.getHeight() > displayInfo!.getLastHeight())
                        
                                    {
                                    y= 0;
    

                                    }
                                
                        else {
                            y += ownerLayerInterface!.getHeight() +1;
    

                        }
                            
ownerLayerInterface!.setPosition(ownerLayerInterface!.getXP(), y, ownerLayerInterface!.getZP());
    
}


    public getId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ArtificialIntelligence.AI_ID;
    
}


}



