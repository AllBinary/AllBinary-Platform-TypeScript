
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
        



            import { Object } from "../../../../../java/lang/Object.js";


        
            import { Exception } from "../../../../../java/lang/Exception.js";
        
import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { GameInput } from "../../../../../org/allbinary/game/input/GameInput.js";

    
import { MyRandomFactory } from "../../../../../org/allbinary/game/rand/MyRandomFactory.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasePatrolAI } from "./BasePatrolAI.js";

export class RandomPatrolAI extends BasePatrolAI {
        

    private changedDirection: boolean = true;
public constructor (hashtable: Hashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(hashtable, ownerLayerInterface, gameInput);
                    var hashtable = hashtable
var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    
this.updateRandomDistance();
    
}


    updateRandomDistance(){
this.currentDistance= MyRandomFactory.getInstance()!.getAbsoluteNextInt(this.maxDistance!.toInt());
    
}


                //@Throws(Exception::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager
super.update();
    
super.processKeyAI(this.keyDirection);
    

                        if(this.changedDirection)
                        
                                    {
                                    super.processKeyAI(Canvas.KEY_NUM1);
    
this.updateRandomDistance();
    
this.changedDirection= false;
    

                                    }
                                
}


    nextDirection(){
super.nextDirection();
    
this.changedDirection= true;
    
}


}
                
            

