
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
        



            import Hashtable from "@ohos.util.HashMap";
        

//import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { GameInput } from "../../../../org/allbinary/game/input/GameInput.js";

    
import { GameKeyEventFactory } from "../../../../org/allbinary/game/input/event/GameKeyEventFactory.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { GameTickTimeDelayHelper } from "../../../../org/allbinary/time/GameTickTimeDelayHelper.js";

    
import { GameTickTimeDelayHelperFactory } from "../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js";

    
import { TimeDelayHelper } from "../../../../org/allbinary/time/TimeDelayHelper.js";

    

export class MultiKeyPressesAI extends KeyPressesAI {
        

    private readonly toggleTimeHelper: TimeDelayHelper = new TimeDelayHelper(600);
        
        

    private readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;
        
        
public constructor (hashtable: Hashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput)                        

                            : super(hashtable, ownerLayerInterface, gameInput){

            super();
            var hashtable = hashtable
var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    
this.update();
    
}


                //@Throws(Error::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager
}


    private readonly gameKeyEventFactory: GameKeyEventFactory = GameKeyEventFactory.getInstance()!;
        
        

                //@Throws(Error::class)
            
    update(){

    var gameInput: GameInput = this.getGameInput()!;
        
        
;
    

    var keys: Integer[] = this.keys;
        
        
;
    

    var size: number = keys.length
                ;
        
        
;
    

                        if(isOn())
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var key: number = keys[index]!.toInt()!;
        
        
;
    

                        if(key !=  -1)
                        
                                    {
                                    gameInput!.add(gameKeyEventFactory!.getInstance(this, key));
    

                                    }
                                
}


                                    }
                                
                        else {
                            



                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var key: number = keys[index]!.toInt()!;
        
        
;
    

                        if(key !=  -1)
                        
                                    {
                                    gameInput!.addForRemoval(gameKeyEventFactory!.getInstance(this, key));
    

                                    }
                                
}


                        }
                            
}


                //@Throws(Error::class)
            
    public toggle(){

                        if(this.toggleTimeHelper!.isTime(this.gameTickTimeDelayHelper!.startTime))
                        
                                    {
                                    super.toggle();
    
this.update();
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public disable(){

                        if(this.toggleTimeHelper!.isTime(this.gameTickTimeDelayHelper!.startTime))
                        
                                    {
                                    super.disable();
    
this.update();
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public enable(){

                        if(this.toggleTimeHelper!.isTime(this.gameTickTimeDelayHelper!.startTime))
                        
                                    {
                                    super.enable();
    
this.update();
    

                                    }
                                
}


}
                
            

