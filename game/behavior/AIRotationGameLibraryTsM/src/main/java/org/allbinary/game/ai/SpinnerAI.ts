
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
        
import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';

    
import { GameInput } from '../../../../org/allbinary/game/input/GameInput.js';

    
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';

    
import { AllBinaryLayerManager } from '../../../../org/allbinary/layer/AllBinaryLayerManager.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicAI } from './BasicAI.js';

export class SpinnerAI extends BasicAI {
        

    private isEven: boolean= false

    private direction: number[]
public constructor (direction: number[], ownerLayerInterface: AllBinaryLayer, gameInput: GameInput){
            super(ownerLayerInterface, gameInput);
                    var direction = direction
var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput


                            //For kotlin this is before the body of the constructor.
                    
this.direction= direction;
    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager

                        if(this.isEven)
                        
                                    {
                                    super.processKeyAI(this.direction[0]!);
    
this.isEven= false;
    

                                    }
                                
                        else {
                            super.processKeyAI(Canvas.KEY_NUM1);
    
this.isEven= true;
    

                        }
                            
}


}
                
            

