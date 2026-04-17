
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        
import { Canvas } from "../../../../javax/microedition/lcdui/Canvas.js";

    
import { ArtificialIntelligenceTransitionInterface } from "../../../../org/allbinary/ai/ArtificialIntelligenceTransitionInterface.js";

    
import { IndexedAnimation } from "../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { RotationAnimationInterface } from "../../../../org/allbinary/animation/RotationAnimationInterface.js";

    
import { RotationAnimationInterfaceCompositeInterface } from "../../../../org/allbinary/animation/RotationAnimationInterfaceCompositeInterface.js";

    
import { GameInput } from "../../../../org/allbinary/game/input/GameInput.js";

    
import { BasicVelocityProperties } from "../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js";

    
import { VelocityInterface } from "../../../../org/allbinary/game/physics/velocity/VelocityInterface.js";

    
import { VelocityInterfaceCompositeInterface } from "../../../../org/allbinary/game/physics/velocity/VelocityInterfaceCompositeInterface.js";

    
import { DisplayInfoSingleton } from "../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { AngleIncrementInfo } from "../../../../org/allbinary/math/AngleIncrementInfo.js";

    
import { CircularIndexUtil } from "../../../../org/allbinary/util/CircularIndexUtil.js";

    

export class HorizontaRotationManeuverAI extends BasicAI
                , ArtificialIntelligenceTransitionInterface {
        

    private readonly circularIndexUtil: CircularIndexUtil = CircularIndexUtil.getInstance(10, Integer.MAX_VALUE)!;
        
        

    private currentSpeedDivisor: number = 5;
        
        

    private readonly rotationAnimationInterface: IndexedAnimation

    private readonly baseVelocityInterface: BasicVelocityProperties

    private readonly velocityInterface: VelocityInterface
public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput)                        

                            : super(ownerLayerInterface, gameInput){

            super();
            var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    

    var rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface();

                         as RotationAnimationInterfaceCompositeInterface;
        
        
;
    
this.rotationAnimationInterface= rotationAnimationInterfaceCompositeInterface!.getRotationAnimationInterface();
    

    var velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface = this.getOwnerLayerInterface();

                         as VelocityInterfaceCompositeInterface;
        
        
;
    
this.baseVelocityInterface= velocityInterfaceCompositeInterface!.getVelocityProperties();
    
this.velocityInterface= baseVelocityInterface as VelocityInterface;
    

    var rotationAnimationInterface: RotationAnimationInterface = this.rotationAnimationInterface as RotationAnimationInterface;
        
        
;
    

    var angleIncrementInfo: AngleIncrementInfo = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo()!;
        
        
;
    
rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.RIGHT_FRAME.toInt());
    
}


    public transition(){

    var rotationAnimationInterface: RotationAnimationInterface = this.rotationAnimationInterface as RotationAnimationInterface;
        
        
;
    

    var angleIncrementInfo: AngleIncrementInfo = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo()!;
        
        
;
    

    var rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface();

                         as RotationAnimationInterfaceCompositeInterface;
        
        
;
    
rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.RIGHT_FRAME.toInt());
    

    var allbinaryLayer: AllBinaryLayer = this.getOwnerLayerInterface()!;
        
        
;
    
allbinaryLayer!.setPosition(allbinaryLayer!.getXP(), 1, allbinaryLayer!.getZP());
    
}


                //@Throws(Error::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
    //var allBinaryLayerManager = allBinaryLayerManager

    var rotationAnimationInterface: RotationAnimationInterface = (this.rotationAnimationInterface as RotationAnimationInterface);
        
        
;
    

    var angleIncrementInfo: AngleIncrementInfo = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo()!;
        
        
;
    

    var frame: number = this.rotationAnimationInterface!.getFrame()!;
        
        
;
    

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;
        
        
;
    

                        if(ownerLayerInterface!.getXP() -ownerLayerInterface!.getWidth() <= 0 && frame == angleIncrementInfo!.LEFT_FRAME.toInt())
                        
                                    {
                                    this.reverse();
    
this.drop();
    

                                    }
                                

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

                        if(ownerLayerInterface!.getX2() +ownerLayerInterface!.getWidth() > displayInfo!.getLastWidth() && frame == angleIncrementInfo!.RIGHT_FRAME.toInt())
                        
                                    {
                                    this.reverse();
    
this.accelerate();
    
this.drop();
    

                                    }
                                

    var index: number = circularIndexUtil!.getIndex()!;
        
        
;
    

                        if(index % this.currentSpeedDivisor == 0 && index % 2 == 0)
                        
                                    {
                                    super.processAI(Canvas.UP);
    
velocityInterface!.limitMaxXYVelocity(this.velocityInterface!.getMaxForwardVelocity() /this.currentSpeedDivisor);
    

                                    }
                                
this.circularIndexUtil!.next();
    

                        if(frame == angleIncrementInfo!.LEFT_FRAME.toInt())
                        
                                    {
                                    super.processAI(Canvas.KEY_NUM0);
    

                                    }
                                
                             else 
                        if(frame == angleIncrementInfo!.RIGHT_FRAME.toInt())
                        
                                    {
                                    super.processAI(Canvas.KEY_POUND);
    

                                    }
                                
}


    reverse(){

    var rotationAnimationInterface: RotationAnimationInterface = this.rotationAnimationInterface as RotationAnimationInterface;
        
        
;
    

    var angleIncrementInfo: AngleIncrementInfo = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo()!;
        
        
;
    

    var frame: number = this.rotationAnimationInterface!.getFrame()!;
        
        
;
    

                        if(frame == angleIncrementInfo!.LEFT_FRAME.toInt())
                        
                                    {
                                    
    var rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface();

                         as RotationAnimationInterfaceCompositeInterface;
        
        
;
    
rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.RIGHT_FRAME.toInt());
    
this.baseVelocityInterface!.zero();
    

                                    }
                                
                             else 
                        if(frame == angleIncrementInfo!.RIGHT_FRAME.toInt())
                        
                                    {
                                    
    var rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface();

                         as RotationAnimationInterfaceCompositeInterface;
        
        
;
    
rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.LEFT_FRAME.toInt());
    
this.baseVelocityInterface!.zero();
    

                                    }
                                
}


    accelerate(){

                        if(currentSpeedDivisor > 1)
                        
                                    {
                                    currentSpeedDivisor--;
    

                                    }
                                
}


    drop(){

    var ownerLayerInterface: AllBinaryLayer = this.getOwnerLayerInterface()!;
        
        
;
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

    var y: number = ownerLayerInterface!.getYP()!;
        
        
;
    

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
                        return ArtificialIntelligenceTransitionInterface.ID;
    
}


}
                
            

