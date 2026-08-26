
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

      
//not game specific package import { HashtableUtil } from '../../../../../org/allbinary/util/HashtableUtil.js';
      const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;

      
//not game specific package import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
      const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class KeyPressesAI extends BasicAI {
        

    private on: boolean = true;

    keys: Integer[];

public constructor (hashtable: Hashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.keys= new Array(hashtable.length);
    

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
                
            

