
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
        
import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
      //not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { GameTickTimeDelayHelper } from '../../../../../org/allbinary/time/GameTickTimeDelayHelper.js';
      //not GWT import const GameTickTimeDelayHelper = globalThis.org.allbinary.time.GameTickTimeDelayHelper;

      
import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
      //not GWT import const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;

      
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      //not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
//not plain js import { ABHashtable } from '../../../../../org/allbinary/util/ABHashtable.js';
      const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { KeyPressesAI } from './KeyPressesAI.js';
//not GWT import const KeyPressesAI = globalThis.org.allbinary.game.ag.ai.KeyPressesAI;

                
export class MultiKeyPressesAI extends KeyPressesAI {
        

    private readonly toggleTimeHelper: TimeDelayHelper = new TimeDelayHelper(600);

    private readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;

public constructor (hashtable: ABHashtable, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(hashtable, ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.update();
    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
}


                //@Throws(Exception.constructor)
            
    update(){

    var gameInput: GameInput = this.getGameInput()!;;
    

    var keys: Integer[] = this.keys;;
    

    var size: number = keys.length
                ;;
    

                        if(this.isOn())
                        
                                    {
                                    



                        for (
    var index: number = 0;index < size; index++)
        {

    var key: number = keys[index]!.intValue()!;;
    

                        if(key !=  -1)
                        
                                    {
                                    gameInput!.add(this.gameKeyEventFactory!.getInstanceForKey(this, key));
    

                                    }
                                
}


                                    }
                                
                        else {
                            



                        for (
    var index: number = 0;index < size; index++)
        {

    var key: number = keys[index]!.intValue()!;;
    

                        if(key !=  -1)
                        
                                    {
                                    gameInput!.addForRemoval(this.gameKeyEventFactory!.getInstanceForKey(this, key));
    

                                    }
                                
}


                        }
                            
}


                //@Throws(Exception.constructor)
            
    public toggle(){

                        if(this.toggleTimeHelper!.isTime(this.gameTickTimeDelayHelper!.startTime))
                        
                                    {
                                    super.toggle();
    
this.update();
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public disable(){

                        if(this.toggleTimeHelper!.isTime(this.gameTickTimeDelayHelper!.startTime))
                        
                                    {
                                    super.disable();
    
this.update();
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public enable(){

                        if(this.toggleTimeHelper!.isTime(this.gameTickTimeDelayHelper!.startTime))
                        
                                    {
                                    super.enable();
    
this.update();
    

                                    }
                                
}


}



