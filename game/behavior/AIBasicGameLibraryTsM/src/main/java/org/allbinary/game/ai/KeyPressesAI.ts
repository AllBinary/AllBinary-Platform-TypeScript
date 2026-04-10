
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { GameInput } from "../../../../org/allbinary/game/input/GameInput.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { HashtableUtil } from "../../../../org/allbinary/util/HashtableUtil.js";

    

export class KeyPressesAI extends BasicAI {
        

    private on: boolean = true;
        
        

    keys: Integer[]
public constructor (hashtable: Hashtable<Any, Any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput)                        

                            : super(ownerLayerInterface, gameInput){

            super();
            var hashtable = hashtable
var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    
this.keys= new Array(hashtable.length)

    var objectArray: any = {}[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;
        
        


    var size: number = objectArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
keys[index]= hashtable.get(objectArray[index]! as Object) as Integer
}

}


                @Throws(Exception::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

    
                        if(on)
                        
                                    {
                                    



                        for (
    var index: number = 0;
        
        
index < keys.length; index++)
        {
processAI(keys[index]!.toInt())
}


                                    }
                                
}


                @Throws(Exception::class)
            
    public toggle(){

    
                        if(isOn())
                        
                                    {
                                    setOn(false)

                                    }
                                
                        else {
                            setOn(true)

                        }
                            
}


                @Throws(Exception::class)
            
    public disable(){
setOn(false)
}


                @Throws(Exception::class)
            
    public enable(){
setOn(true)
}


    setOn(on: boolean){
var on = on
this.on= on
}


    isOn(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return on;
    
}


}
                
            

