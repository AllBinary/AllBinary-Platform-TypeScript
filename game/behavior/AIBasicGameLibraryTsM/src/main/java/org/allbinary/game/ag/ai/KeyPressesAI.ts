
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

      
//not plain js import { HashtableUtil } from '../../../../../org/allbinary/util/HashtableUtil.js';
      const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;

      
import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
      //not GWT import const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;

      
//not plain js import { ABHashtable } from '../../../../../org/allbinary/util/ABHashtable.js';
      const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class KeyPressesAI extends BasicAI {
        

    private on: boolean = true;

    keys: Integer[];

public constructor (hashtable: ABHashtable, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.keys= new Array(hashtable.size());
    

    var objectArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;;
    

    var size: number = objectArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.keys[index]= hashtable.get(objectArray[index]!) as Integer;
    
}

}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){

                        if(this.on)
                        
                                    {
                                    



                        for (
    var index: number = 0;index < this.keys.length; index++)
        {
super.processKeyAI(this.keys[index]!.intValue());
    
}


                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public toggle(){

                        if(this.isOn())
                        
                                    {
                                    this.setOn(false);
    

                                    }
                                
                        else {
                            this.setOn(true);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public disable(){
this.setOn(false);
    
}


                //@Throws(Exception.constructor)
            
    public enable(){
this.setOn(true);
    
}


    setOn(on: boolean){
this.on= on;
    
}


    isOn(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.on;
    
}


}



