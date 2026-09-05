
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
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
//not plain js import { Canvas } from '../../../../../../javax/microedition/lcdui/Canvas.js';
      const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
import { BasicAI } from '../../../../../../org/allbinary/game/ai/BasicAI.js';
      //not GWT import const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;

      
import { GameInput } from '../../../../../../org/allbinary/game/input/GameInput.js';
      //not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
import { BasicVelocityProperties } from '../../../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js';
      //not GWT import const BasicVelocityProperties = globalThis.org.allbinary.game.physics.velocity.BasicVelocityProperties;

      
import { VelocityInterfaceCompositeInterface } from '../../../../../../org/allbinary/game/physics/velocity/VelocityInterfaceCompositeInterface.js';
      //not GWT import const VelocityInterfaceCompositeInterface = globalThis.org.allbinary.game.physics.velocity.VelocityInterfaceCompositeInterface;

      
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not plain js import { MathUtil } from '../../../../../../org/allbinary/logic/math/MathUtil.js';
      const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;

      
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not plain js import { ABHashtable } from '../../../../../../org/allbinary/util/ABHashtable.js';
      const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasePatrolAI extends BasicAI {
        

    public static readonly MAX_DISTANCE: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(2)!;

    public static readonly DIRECTION_ARRAY: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(3)!;

    public static readonly FIRING_DISTANCE: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(4)!;

    public static SPEED: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(5)!;

    maxDistance: Integer;

    currentDistance: number;

    xTotalDistance: number= 0;

    lastKeyDirection: number = Canvas.RIGHT;

    keyDirection: number = Canvas.RIGHT;

public constructor (hashtable: ABHashtable, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.maxDistance= hashtable.get(BasePatrolAI.MAX_DISTANCE) as Integer;
    
this.currentDistance= this.maxDistance!.intValue();
    
}


    update(){
this.updateTotalDistance();
    
this.changeDirectionIfReachedPacingAreaMax();
    
}


    updateTotalDistance(){

    var velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface = this.getOwnerLayerInterface() as VelocityInterfaceCompositeInterface;;
    

    var velocityProperties: BasicVelocityProperties = velocityInterfaceCompositeInterface!.getVelocityProperties()!;;
    
this.xTotalDistance += velocityProperties!.getVelocityXBasicDecimalP()!.getScaled();
    
}


    changeDirectionIfReachedPacingAreaMax(){

    var mathUtil: MathUtil = MathUtil.getInstance()!;;
    

    var totalDistance: number = mathUtil!.abs(this.xTotalDistance)!;;
    

                        if(totalDistance > this.currentDistance)
                        
                                    {
                                    this.nextDirection();
    

                                    }
                                
}


    nextDirection(){

                        if(this.lastKeyDirection == Canvas.LEFT)
                        
                                    {
                                    this.keyDirection= Canvas.RIGHT;
    
this.lastKeyDirection= this.keyDirection;
    
this.xTotalDistance= 0;
    

                                    }
                                
                             else 
                        if(this.lastKeyDirection == Canvas.RIGHT)
                        
                                    {
                                    this.keyDirection= Canvas.LEFT;
    
this.lastKeyDirection= this.keyDirection;
    
this.xTotalDistance= 0;
    

                                    }
                                
}


    public disable(){
}


}



