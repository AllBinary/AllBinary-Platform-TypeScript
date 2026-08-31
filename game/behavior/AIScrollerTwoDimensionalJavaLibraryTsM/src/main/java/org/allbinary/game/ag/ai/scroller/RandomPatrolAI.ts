
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
        
import { Hashtable } from '../../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { Canvas } from '../../../../../../javax/microedition/lcdui/Canvas.js';
      //not GWT import const Canvas = globalThis.javax.microedition.lcdui.Canvas;

      
import { GameInput } from '../../../../../../org/allbinary/game/input/GameInput.js';
      //not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
//not plain js import { MyRandomFactory } from '../../../../../../org/allbinary/game/rand/MyRandomFactory.js';
      const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;

      
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasePatrolAI } from './BasePatrolAI.js';

export class RandomPatrolAI extends BasePatrolAI {
        

    private changedDirection: boolean = true;

public constructor (hashtable: Hashtable<any, any>, ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(hashtable, ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.updateRandomDistance();
    
}


    updateRandomDistance(){
this.currentDistance= MyRandomFactory.getInstance()!.getAbsoluteNextInt(this.maxDistance!.intValue());
    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
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



