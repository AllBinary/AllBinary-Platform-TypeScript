
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
        



            import { Integer } from "../../../../../java/lang/Integer.js";
        
import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { BasicAI } from "../../../../../org/allbinary/game/ai/BasicAI.js";

    
import { GameInput } from "../../../../../org/allbinary/game/input/GameInput.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    
import { TimeDelayHelper } from "../../../../../org/allbinary/time/TimeDelayHelper.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TimedFireAI extends BasicAI {
        

    public static readonly TIME: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(1)!;
        
        

    readonly maxFireDelayTimeHelper: TimeDelayHelper = new TimeDelayHelper(0);
        
        

    private readonly delay: number
public constructor (delay: number, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(ownerLayerInterface, gameInput);
                    var delay = delay
var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    
this.delay= delay;
    
}


                //@Throws(Error::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

    var timeFiredInterface: TimeFiredInterface = this.getOwnerLayerInterface();

                         as TimeFiredInterface;
        
        
;
    

                        if(this.maxFireDelayTimeHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime) && timeFiredInterface!.getLastFireTime() +this.maxFireDelayTimeHelper!.delay < this.maxFireDelayTimeHelper!.getStartTime())
                        
                                    {
                                    super.processAI(Canvas.KEY_NUM1);
    
this.maxFireDelayTimeHelper!.delay= this.delay;
    

                                    }
                                
}


}
                
            

