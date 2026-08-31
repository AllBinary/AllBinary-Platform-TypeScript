
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
      //not GWT import const GameKeyEvent = globalThis.org.allbinary.game.input.event.GameKeyEvent;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SpecialGameInputInterface } from './SpecialGameInputInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.layer.special.SpecialGameInputInterface;

                
export class SpecialGameInput
            extends Object
         implements SpecialGameInputInterface {
        

                //@Throws(Exception.constructor)
            
    public up(){
}


                //@Throws(Exception.constructor)
            
    public down(){
}


                //@Throws(Exception.constructor)
            
    public right(){
}


                //@Throws(Exception.constructor)
            
    public left(){
}


                //@Throws(Exception.constructor)
            
    public strafeLeft(){
}


                //@Throws(Exception.constructor)
            
    public strafeRight(){
}


                //@Throws(Exception.constructor)
            
    public fire(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
}


                //@Throws(Exception.constructor)
            
    public special1(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
}


                //@Throws(Exception.constructor)
            
    public special2(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
}


                //@Throws(Exception.constructor)
            
    public special3(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
}


                //@Throws(Exception.constructor)
            
    public special4(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
}


                //@Throws(Exception.constructor)
            
    public special5(layerManager: AllBinaryLayerManager, gameKeyEvent: GameKeyEvent){
}


    public paint(graphics: Graphics){
}


    public paintThreed(graphics: Graphics){
}


}



