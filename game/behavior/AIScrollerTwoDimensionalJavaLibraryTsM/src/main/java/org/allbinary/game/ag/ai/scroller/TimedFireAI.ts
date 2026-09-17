
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

import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer

import { AllBinaryLayerManager } from '../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
//not GWT import const AllBinaryLayerManager

import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory

import { GameTickTimeDelayHelperFactory } from '../../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory

import { TimeDelayHelper } from '../../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TimeFiredInterface } from './TimeFiredInterface.js';
//not GWT import - same folder const TimeFiredInterface

export class TimedFireAI extends BasicAI {
        

    public static readonly TIME: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(1)!;

    readonly maxFireDelayTimeHelper: TimeDelayHelper = new TimeDelayHelper(0);

    private readonly delay: number;

public constructor (delay: number, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.delay= delay;
    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){

    var timeFiredInterface: TimeFiredInterface = this.getOwnerLayerInterface() as TimeFiredInterface;;
    

                        if(this.maxFireDelayTimeHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime) && timeFiredInterface!.getLastFireTime() +this.maxFireDelayTimeHelper!.delay < this.maxFireDelayTimeHelper!.getStartTime())
                        
                                    {
                                    super.processKeyAI(Canvas.KEY_NUM1);
    
this.maxFireDelayTimeHelper!.delay= this.delay;
    

                                    }
                                
}


}



