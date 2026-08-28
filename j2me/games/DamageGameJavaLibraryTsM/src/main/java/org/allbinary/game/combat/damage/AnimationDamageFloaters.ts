
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

      
//not game specific package import { IndexedAnimation } from '../../../../../org/allbinary/animation/IndexedAnimation.js';
      const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;

      
//not game specific package import { CanvasStrings } from '../../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
      const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;

      
//not game specific package import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { CircularIndexUtil } from '../../../../../org/allbinary/util/CircularIndexUtil.js';
      const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;

      
//not game specific package import { ViewPosition } from '../../../../../org/allbinary/view/ViewPosition.js';
      const ViewPosition = globalThis.org.allbinary.view.ViewPosition;

      
//not game specific package import { ViewPositionBase } from '../../../../../org/allbinary/view/ViewPositionBase.js';
      const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DamageFloaters } from './DamageFloaters.js';

export class AnimationDamageFloaters extends DamageFloaters {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private layerInterface: AllBinaryLayer;

    private animationInterfaceArray: IndexedAnimation[];

    private readonly circularIndexUtil: CircularIndexUtil;

    private dx: number;

    private dy: number;

public constructor (layerInterface: AllBinaryLayer, animationInterfaceArray: IndexedAnimation[], dx: number, dy: number){

            super();
        this.animationInterfaceArray= animationInterfaceArray;
    




                        for (
    var index: number = this.animationInterfaceArray!.length -1;index >= 0; index--)
        {
this.animationInterfaceArray[index]!.setFrame(this.animationInterfaceArray[index]!.getSize() -1);
    
}

this.layerInterface= layerInterface;
    
this.circularIndexUtil= CircularIndexUtil.createInstance(this.animationInterfaceArray!.length);
    
this.dx= dx;
    
this.dy= dy;
    
}


    public add(damage: number){

    var i: number = this.circularIndexUtil!.getIndex()!;;
    
this.animationInterfaceArray[i]!.setFrame(0);
    
this.circularIndexUtil!.next();
    
}


    public paint(graphics: Graphics){

        try {
            
    var viewPosition: ViewPositionBase = this.layerInterface!.getViewPosition()!;;
    

    var x: number = viewPosition!.getX()!;;
    

    var y: number = viewPosition!.getY()!;;
    




                        for (
    var index: number = 0;index < this.animationInterfaceArray!.length; index++)
        {

    var animationInterface: IndexedAnimation = this.animationInterfaceArray[index]!;;
    

                        if(animationInterface!.getFrame() < animationInterface!.getAnimationSize() -1)
                        
                                    {
                                    
    var delta: number = animationInterface!.getFrame() *20;;
    
animationInterface!.paintXY(graphics, x +this.dx, y -delta +this.dy);
    
animationInterface!.nextFrame();
    

                                    }
                                
}


                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var canvasStrings: CanvasStrings = CanvasStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, canvasStrings!.PAINT, e);
    
}

}


}



