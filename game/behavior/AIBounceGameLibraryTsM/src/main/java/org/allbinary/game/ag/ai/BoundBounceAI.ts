
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
        
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { BoundsVisitorInterface } from '../../../../../org/allbinary/bounds/BoundsVisitorInterface.js';
      //not GWT import const BoundsVisitorInterface = globalThis.org.allbinary.bounds.BoundsVisitorInterface;

      
import { LayerBounds } from '../../../../../org/allbinary/bounds/LayerBounds.js';
      //not GWT import const LayerBounds = globalThis.org.allbinary.bounds.LayerBounds;

      
import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
      //not GWT import const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;

      
import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
      //not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      //not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BoundBounceAI extends BasicAI {
        

    currentRelativeAngle: number = 0;

    private layerBounds: LayerBounds;

    private boundsVisitorInterface: BoundsVisitorInterface;

public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput, layerBounds: LayerBounds, boundsVisitorInterface: BoundsVisitorInterface){
            super(ownerLayerInterface, gameInput);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.layerBounds= layerBounds;
    
this.boundsVisitorInterface= boundsVisitorInterface;
    
}


    public paint(graphics: Graphics){

    var rectange: Rectangle = this.layerBounds!.getRectangleP()!;;
    
graphics.drawRect(rectange.getPoint()!.getX(), rectange.getPoint()!.getY(), rectange.getWidth(), rectange.getHeight());
    
}


                //@Throws(Exception.constructor)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
this.layerBounds!.visit(this.boundsVisitorInterface);
    
}


}



