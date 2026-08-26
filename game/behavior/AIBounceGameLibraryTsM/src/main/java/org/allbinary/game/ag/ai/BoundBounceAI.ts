
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
        
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { BoundsVisitorInterface } from '../../../../../org/allbinary/bounds/BoundsVisitorInterface.js';
      const BoundsVisitorInterface = globalThis.org.allbinary.bounds.BoundsVisitorInterface;

      
//not game specific package import { LayerBounds } from '../../../../../org/allbinary/bounds/LayerBounds.js';
      const LayerBounds = globalThis.org.allbinary.bounds.LayerBounds;

      
//not game specific package import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
      const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;

      
//not game specific package import { GameInput } from '../../../../../org/allbinary/game/input/GameInput.js';
      const GameInput = globalThis.org.allbinary.game.input.GameInput;

      
//not game specific package import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
















                                        
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
                
            

