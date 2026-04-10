
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
        



import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { IndexedAnimation } from "../../../../../org/allbinary/animation/IndexedAnimation.js";

    
import { CanvasStrings } from "../../../../../org/allbinary/graphics/displayable/CanvasStrings.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { CircularIndexUtil } from "../../../../../org/allbinary/util/CircularIndexUtil.js";

    
import { ViewPosition } from "../../../../../org/allbinary/view/ViewPosition.js";

    

export class AnimationDamageFloaters extends DamageFloaters {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private layerInterface: AllBinaryLayer

    private animationInterfaceArray: IndexedAnimation[]

    private readonly circularIndexUtil: CircularIndexUtil

    private dx: number

    private dy: number
public constructor (layerInterface: AllBinaryLayer, animationInterfaceArray: IndexedAnimation[], dx: number, dy: number){

            super();
            var layerInterface = layerInterface
var animationInterfaceArray = animationInterfaceArray
var dx = dx
var dy = dy
this.animationInterfaceArray= animationInterfaceArray




                        for (
    var index: number = this.animationInterfaceArray!.length -1;
        
        
index >= 0; index--)
        {
setFrame(this.animationInterfaceArray[index]!.getSize() -1)
}

this.layerInterface= layerInterface
this.circularIndexUtil= CircularIndexUtil.getInstance(this.animationInterfaceArray!.length)
this.dx= dx
this.dy= dy
}


    public add(damage: number){
var damage = damage

    var i: number = this.circularIndexUtil!.getIndex()!;
        
        

setFrame(0)
next()
}


    public paint(graphics: Graphics){
var graphics = graphics

        try {
            
    var viewPosition: ViewPosition = this.layerInterface!.getViewPosition()!;
        
        


    var x: number = viewPosition!.getX()!;
        
        


    var y: number = viewPosition!.getY()!;
        
        





                        for (
    var index: number = 0;
        
        
index < this.animationInterfaceArray!.length; index++)
        {

    var animationInterface: IndexedAnimation = animationInterfaceArray[index]!;
        
        


    
                        if(animationInterface!.getFrame() < animationInterface!.getAnimationSize() -1)
                        
                                    {
                                    
    var delta: number = animationInterface!.getFrame() *20;
        
        

paint(graphics, x +dx, y -delta +dy)
nextFrame()

                                    }
                                
}

} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        


    var canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, canvasStrings!.PAINT, e)
}

}


}
                
            

