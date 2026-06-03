
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
      
import { ArtificialIntelligence } from '../../../../org/allbinary/ai/ArtificialIntelligence.js';
      
import { ArtificialIntelligenceTransitionInterface } from '../../../../org/allbinary/ai/ArtificialIntelligenceTransitionInterface.js';
      
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
      
import { RotationAnimationInterface } from '../../../../org/allbinary/animation/RotationAnimationInterface.js';
      
import { RotationAnimationInterfaceCompositeInterface } from '../../../../org/allbinary/animation/RotationAnimationInterfaceCompositeInterface.js';
      
import { GameInput } from '../../../../org/allbinary/game/input/GameInput.js';
      
import { BasicVelocityProperties } from '../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js';
      
import { VelocityInterface } from '../../../../org/allbinary/game/physics/velocity/VelocityInterface.js';
      
import { VelocityInterfaceCompositeInterface } from '../../../../org/allbinary/game/physics/velocity/VelocityInterfaceCompositeInterface.js';
      
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      
import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      
import { AngleIncrementInfo } from '../../../../org/allbinary/math/AngleIncrementInfo.js';
      
import { CircularIndexUtil } from '../../../../org/allbinary/util/CircularIndexUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicAI } from './BasicAI.js';

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
                
            

