
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
        



import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      //not GWT import const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
      //not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
//not plain js import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
      const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      //not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { ViewPosition } from '../../../../../org/allbinary/view/ViewPosition.js';
      //not GWT import const ViewPosition = globalThis.org.allbinary.view.ViewPosition;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class IconLayer extends AllBinaryLayer {
        

    public static readonly NULL_ICON_LAYER: IconLayer = new IconLayer(NullAnimationFactory.getFactoryInstance()!.getInstance(0), 0, 0);

    private animationInterface: Animation;

public constructor (animationInterface: Animation, width: number, height: number){
            super(StringUtil.getInstance()!.EMPTY_STRING, new Rectangle(PointFactory.getInstance()!.ZERO_ZERO, width, height), ViewPosition.getInstanceD());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.animationInterface= animationInterface;
    
}


    public paint(graphics: Graphics){
this.animationInterface!.paintXY(graphics, this.x, this.y);
    
}


    public paintThreed(graphics: Graphics){
this.animationInterface!.paintThreedXYZ(graphics, this.x, this.y, this.z);
    
}


    public getAnimationInterface(): Animation{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.animationInterface;
    
}


}



