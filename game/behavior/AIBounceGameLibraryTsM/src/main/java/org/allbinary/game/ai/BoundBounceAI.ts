
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { BoundsVisitorInterface } from "../../../../org/allbinary/bounds/BoundsVisitorInterface.js";

    
import { LayerBounds } from "../../../../org/allbinary/bounds/LayerBounds.js";

    
import { GameInput } from "../../../../org/allbinary/game/input/GameInput.js";

    
import { Rectangle } from "../../../../org/allbinary/graphics/Rectangle.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { AllBinaryLayerManager } from "../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicAI } from "./BasicAI.js";

export class BoundBounceAI extends BasicAI {
        

    currentRelativeAngle: number = 0;
        
        

    private layerBounds: LayerBounds

    private boundsVisitorInterface: BoundsVisitorInterface
public constructor (ownerLayerInterface: AllBinaryLayer, gameInput: GameInput, layerBounds: LayerBounds, boundsVisitorInterface: BoundsVisitorInterface){
            super(ownerLayerInterface, gameInput);
                    var ownerLayerInterface = ownerLayerInterface
var gameInput = gameInput
var layerBounds = layerBounds
var boundsVisitorInterface = boundsVisitorInterface


                            //For kotlin this is before the body of the constructor.
                    
this.layerBounds= layerBounds;
    
this.boundsVisitorInterface= boundsVisitorInterface;
    
}


    public paint(graphics: Graphics){
var graphics = graphics

    var rectange: Rectangle = this.layerBounds!.getRectangleP()!;
        
        
;
    
graphics.drawRect(rectange.getPoint()!.getX(), rectange.getPoint()!.getY(), rectange.getWidth(), rectange.getHeight());
    
}


                //@Throws(Error::class)
            
    public processAI(allBinaryLayerManager: AllBinaryLayerManager){
var allBinaryLayerManager = allBinaryLayerManager
this.layerBounds!.visit(this.boundsVisitorInterface);
    
}


}
                
            

