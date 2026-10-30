
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
        
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas

import { ArtificialIntelligence } from '../../../../../org/allbinary/ai/ArtificialIntelligence.js';
//not GWT import const ArtificialIntelligence

import { ArtificialIntelligenceTransitionInterface } from '../../../../../org/allbinary/ai/ArtificialIntelligenceTransitionInterface.js';
//not GWT import const ArtificialIntelligenceTransitionInterface

import { IndexedAnimation } from '../../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const IndexedAnimation

import { RotationAnimationInterface } from '../../../../../org/allbinary/animation/RotationAnimationInterface.js';
//not GWT import const RotationAnimationInterface

import { RotationAnimationInterfaceCompositeInterface } from '../../../../../org/allbinary/animation/RotationAnimationInterfaceCompositeInterface.js';
//not GWT import const RotationAnimationInterfaceCompositeInterface

import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const BasicAI

import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
//not GWT import const GameInput

import { BasicVelocityProperties } from '../../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js';
//not GWT import const BasicVelocityProperties

import { VelocityInterface } from '../../../../../org/allbinary/game/physics/velocity/VelocityInterface.js';
//not GWT import const VelocityInterface

import { VelocityInterfaceCompositeInterface } from '../../../../../org/allbinary/game/physics/velocity/VelocityInterfaceCompositeInterface.js';
//not GWT import const VelocityInterfaceCompositeInterface

import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton

import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer

import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager

import { AngleIncrementInfo } from '../../../../../org/allbinary/math/AngleIncrementInfo.js';
//not GWT import const AngleIncrementInfo

//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
type CircularIndexUtil<T = any, U = any> = typeof CircularIndexUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CircularIndexUtil;

















                                        
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
                    

    let rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface() as unknown as RotationAnimationInterfaceCompositeInterface;;
    
this.rotationAnimationInterface= rotationAnimationInterfaceCompositeInterface!.getRotationAnimationInterface();
    

    let velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface = this.getOwnerLayerInterface() as unknown as VelocityInterfaceCompositeInterface;;
    
this.baseVelocityInterface= velocityInterfaceCompositeInterface!.getVelocityProperties();
    
this.velocityInterface= this.baseVelocityInterface as unknown as VelocityInterface;
    

    let rotationAnimationInterface: RotationAnimationInterface = this.rotationAnimationInterface as unknown as RotationAnimationInterface;;
    

    let angleIncrementInfo: AngleIncrementInfo = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo()!;;
    
rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.RIGHT_FRAME.intValue());
    
}


    public transition(){

    let rotationAnimationInterface: RotationAnimationInterface = this.rotationAnimationInterface as unknown as RotationAnimationInterface;;
    

    let angleIncrementInfo: AngleIncrementInfo = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo()!;;
    

    let rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface() as unknown as RotationAnimationInterfaceCompositeInterface;;
    
rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.RIGHT_FRAME.intValue());
    

    let allbinaryLayer: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    
allbinaryLayer!.setPosition(allbinaryLayer!.getXP(), 1, allbinaryLayer!.getZP());
    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){

    let rotationAnimationInterface: RotationAnimationInterface = (this.rotationAnimationInterface as unknown as RotationAnimationInterface);;
    

    let angleIncrementInfo: AngleIncrementInfo = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo()!;;
    

    let frame: number = this.rotationAnimationInterface!.getFrame()!;;
    

    let ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    

                        if(ownerLayerInterface!.getXP() -ownerLayerInterface!.getWidth() <= 0 && frame == angleIncrementInfo!.LEFT_FRAME.intValue())
                        
                                    {
                                    this.reverse();
    
this.drop();
    

                                    }
                                

    let displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

                        if(ownerLayerInterface!.getX2() +ownerLayerInterface!.getWidth() > displayInfo!.getLastWidth() && frame == angleIncrementInfo!.RIGHT_FRAME.intValue())
                        
                                    {
                                    this.reverse();
    
this.accelerate();
    
this.drop();
    

                                    }
                                

    let index: number = this.circularIndexUtil!.getIndex()!;;
    

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

    let rotationAnimationInterface: RotationAnimationInterface = this.rotationAnimationInterface as unknown as RotationAnimationInterface;;
    

    let angleIncrementInfo: AngleIncrementInfo = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo()!;;
    

    let frame: number = this.rotationAnimationInterface!.getFrame()!;;
    

                        if(frame == angleIncrementInfo!.LEFT_FRAME.intValue())
                        
                                    {
                                    
    let rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface() as unknown as RotationAnimationInterfaceCompositeInterface;;
    
rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.RIGHT_FRAME.intValue());
    
this.baseVelocityInterface!.zero();
    

                                    }
                                
                             else 
                        if(frame == angleIncrementInfo!.RIGHT_FRAME.intValue())
                        
                                    {
                                    
    let rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface() as unknown as RotationAnimationInterfaceCompositeInterface;;
    
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

    let displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

    let ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;;
    

    let y: number = ownerLayerInterface!.getYP()!;;
    

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

