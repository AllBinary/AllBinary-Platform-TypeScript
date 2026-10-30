
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
        
import { Canvas } from '../../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas

import { BasicAI } from '../../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const BasicAI

import { GameInput } from '../../../../../../org/allbinary/game/input/GameInput.js';
//not GWT import const GameInput

import { BasicVelocityProperties } from '../../../../../../org/allbinary/game/physics/velocity/BasicVelocityProperties.js';
//not GWT import const BasicVelocityProperties

import { VelocityInterfaceCompositeInterface } from '../../../../../../org/allbinary/game/physics/velocity/VelocityInterfaceCompositeInterface.js';
//not GWT import const VelocityInterfaceCompositeInterface

import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer

//not plain js import { MathUtil } 
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
type MathUtil<T = any, U = any> = typeof MathUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof MathUtil;

import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

















                                        
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

public constructor (hashtable: ABHashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
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

    let velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface = this.getOwnerLayerInterface() as VelocityInterfaceCompositeInterface;;
    

    let velocityProperties: BasicVelocityProperties = velocityInterfaceCompositeInterface!.getVelocityProperties()!;;
    
this.xTotalDistance += velocityProperties!.getVelocityXBasicDecimalP()!.getScaled();
    
}


    changeDirectionIfReachedPacingAreaMax(){

    let mathUtil: MathUtil = MathUtil.getInstance()!;;
    

    let totalDistance: number = mathUtil!.abs(this.xTotalDistance)!;;
    

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

