
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
        
//not game specific package import { Hashtable } from '../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
      const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { GameTickTimeDelayHelper } from '../../../../../org/allbinary/time/GameTickTimeDelayHelper.js';
      const GameTickTimeDelayHelper = globalThis.org.allbinary.time.GameTickTimeDelayHelper;

      
//not game specific package import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
      const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;

      
//not game specific package import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
      const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { KeyPressesAI } from './KeyPressesAI.js';

export class MultiKeyPressesAI extends KeyPressesAI {
        

    private readonly toggleTimeHelper: TimeDelayHelper = new TimeDelayHelper(600);

    private readonly gameTickTimeDelayHelper: GameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance()!;

public constructor (hashtable: Hashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
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



