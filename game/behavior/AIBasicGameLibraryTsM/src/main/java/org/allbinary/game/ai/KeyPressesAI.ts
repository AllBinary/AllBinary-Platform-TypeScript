
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { Hashtable } from '../../../../java/util/Hashtable.js';
      
import { GameInput } from '../../../../org/allbinary/game/input/GameInput.js';
      
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
      
import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      
import { HashtableUtil } from '../../../../org/allbinary/util/HashtableUtil.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicAI } from './BasicAI.js';

export class KeyPressesAI extends BasicAI {
        

    private on: boolean = true;

    keys: Integer[]
public constructor (hashtable: Hashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.keys= new Array(hashtable.length);
    

    var objectArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;
;
    

    var size: number = objectArray!.length
                ;
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {
this.keys[index]= hashtable.get(objectArray[index]! as Object) as Integer;
    
}

}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){

                        if(this.on)
                        
                                    {
                                    



                        for (
    var index: number = 0;
index < this.keys.length; index++)
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
                
            

