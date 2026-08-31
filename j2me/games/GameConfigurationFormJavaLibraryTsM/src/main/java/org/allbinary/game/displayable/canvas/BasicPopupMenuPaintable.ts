
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
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { AndroidUtil } from '../../../../../org/allbinary/AndroidUtil.js';
      //not GWT import const AndroidUtil = globalThis.org.allbinary.AndroidUtil;

      
import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
      //not GWT import const J2MEUtil = globalThis.org.allbinary.J2MEUtil;

      
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
      //not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;

      
import { RectangleFilledAnimation } from '../../../../../org/allbinary/animation/vector/RectangleFilledAnimation.js';
      //not GWT import const RectangleFilledAnimation = globalThis.org.allbinary.animation.vector.RectangleFilledAnimation;

      
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
      //not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
import { SWTUtil } from '../../../../../org/allbinary/game/layer/SWTUtil.js';
      //not GWT import const SWTUtil = globalThis.org.allbinary.game.layer.SWTUtil;

      
//not plain js import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      //not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      //not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
import { BasicColorSetUtil } from '../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
      //not GWT import const BasicColorSetUtil = globalThis.org.allbinary.graphics.color.BasicColorSetUtil;

      
import { DrawVerticalStringUtil } from '../../../../../org/allbinary/graphics/draw/DrawVerticalStringUtil.js';
      //not GWT import const DrawVerticalStringUtil = globalThis.org.allbinary.graphics.draw.DrawVerticalStringUtil;

      
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      //not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
import { UpdateMyFontInterface } from '../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      //not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;

      
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      //not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;

      
import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
      //not GWT import const OpenGLFeatureFactory = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;

      
import { OpenGLFeatureUtil } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
      //not GWT import const OpenGLFeatureUtil = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureUtil;

      
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
      //not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
import { SWTJOGLProcessor } from '../../../../../org/allbinary/graphics/threed/SWTJOGLProcessor.js';
      //not GWT import const SWTJOGLProcessor = globalThis.org.allbinary.graphics.threed.SWTJOGLProcessor;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicPopupMenuPaintable extends Paintable implements UpdateMyFontInterface {
        

    private static readonly NAME: string = "MENU";

    readonly basicSetColorUtil: BasicColorSetUtil = BasicColorSetUtil.getInstance()!;

    private readonly drawStringUtil: DrawVerticalStringUtil = DrawVerticalStringUtil.getInstance()!;

    private readonly label: string;

    private readonly foregroundBasicColor: BasicColor;

    private myFontProcessor: MyFontProcessor = new UpdateMyFontProcessor(this);

    private rectangle: Rectangle;

    private BORDER: number= 0;

    private heightOffset: number= 0;

    private offset: number= 0;

    private animationInterface: Animation;

public constructor (rectangle: Rectangle, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){

            super();
        this.foregroundBasicColor= foregroundBasicColor;
    
this.label= BasicPopupMenuPaintable.NAME;
    
this.rectangle= rectangle;
    

                        if(J2MEUtil.isJ2ME() || J2MEUtil.isHTML())
                        
                                    {
                                    this.animationInterface= NullAnimationFactory.getFactoryInstance()!.getInstance(0);
    

                                    }
                                
                        else {
                            this.animationInterface= new RectangleFilledAnimation(this.rectangle.getWidth(), this.rectangle.getHeight(), BasicColorFactory.getInstance()!.TRANSPARENT_GREY);
    

                        }
                            
this.init(rectangle);
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    

    var features: Features = Features.getInstance()!;;
    

    var isOpenGL: boolean = features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL)!;;
    
this.drawStringUtil!.updateMeasurement(graphics, this.label);
    

    var BORDER: number = 0;;
    

                        if(J2MEUtil.isHTML() || isOpenGL)
                        
                                    {
                                    BORDER= MyFontProcessor.defaultCharWidth(font) /2;
    

                                    }
                                
                             else 
                        if(AndroidUtil.isAndroid() || J2MEUtil.isJ2SE() || SWTUtil.isSWT)
                        
                                    {
                                    BORDER= MyFontProcessor.defaultCharWidth(font);
    

                                    }
                                
                        else {
                            BORDER= MyFontProcessor.defaultCharWidth(font) *2;
    

                        }
                            
this.BORDER= BORDER;
    
this.heightOffset= this.rectangle.getHeight() -(font.getHeight() *BasicPopupMenuPaintable.NAME.length);
    

                        if(OpenGLFeatureUtil.getInstance()!.isAnyThreed())
                        
                                    {
                                    this.heightOffset -= font.getHeight() +2;
    

                        if(AndroidUtil.isAndroid())
                        
                                    {
                                    this.heightOffset= font.getHeight();
    

                                    }
                                
                        else {
                            this.heightOffset -= font.getHeight() +2;
    

                        }
                            

                                    }
                                
this.offset= (this.heightOffset>>1) +(SWTJOGLProcessor.getInstance()!.isJOGL()
                        ?       
                                4
                                :

                            0;

    );
    
this.myFontProcessor= MyFontProcessor.getInstance();
    
}


                //@Throws(Exception.constructor)
            
    public init(rectangle: Rectangle){
this.rectangle= rectangle;
    

    var width: number = this.rectangle.getWidth()!;;
    

    var height: number = this.rectangle.getHeight()!;;
    

                        if(J2MEUtil.isJ2ME() || J2MEUtil.isHTML())
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    var rectangleFilledAnimation: RectangleFilledAnimation = this.animationInterface as RectangleFilledAnimation;;
    
rectangleFilledAnimation!.setWidth(width);
    
rectangleFilledAnimation!.setHeight(height);
    

                        }
                            
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    

    var point: GPoint = this.rectangle.getPoint()!;;
    

    var x: number = point.getX()!;;
    

    var y: number = point.getY()!;;
    

    var width: number = this.rectangle.getWidth()!;;
    

    var height: number = this.rectangle.getHeight()!;;
    
this.animationInterface!.paintXY(graphics, x, y);
    
this.basicSetColorUtil!.setBasicColorP(graphics, this.foregroundBasicColor);
    
this.drawStringUtil!.paintVerticle(graphics, this.label, x +this.BORDER, y +this.offset, 0);
    
graphics.drawRect(x, y, width, height);
    
}


}



