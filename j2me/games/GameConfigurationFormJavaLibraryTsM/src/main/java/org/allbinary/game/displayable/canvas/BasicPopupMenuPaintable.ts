
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

    
import { AndroidUtil } from "../../../../../org/allbinary/AndroidUtil.js";

    
import { J2MEUtil } from "../../../../../org/allbinary/J2MEUtil.js";

    
import { Animation } from "../../../../../org/allbinary/animation/Animation.js";

    
import { NullAnimationFactory } from "../../../../../org/allbinary/animation/NullAnimationFactory.js";

    
import { RectangleFilledAnimation } from "../../../../../org/allbinary/animation/vector/RectangleFilledAnimation.js";

    
import { Features } from "../../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { SWTUtil } from "../../../../../org/allbinary/game/layer/SWTUtil.js";

    
import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { Rectangle } from "../../../../../org/allbinary/graphics/Rectangle.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { BasicColorSetUtil } from "../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js";

    
import { DrawStringUtil } from "../../../../../org/allbinary/graphics/draw/DrawStringUtil.js";

    
import { MyFont } from "../../../../../org/allbinary/graphics/font/MyFont.js";

    
import { OpenGLFeatureFactory } from "../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js";

    
import { OpenGLFeatureUtil } from "../../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js";

    
import { Paintable } from "../../../../../org/allbinary/graphics/paint/Paintable.js";

    

export class BasicPopupMenuPaintable extends Paintable {
        

    private static readonly NAME: string = "MENU";
        
        

    readonly basicSetColorUtil: BasicColorSetUtil = BasicColorSetUtil.getInstance()!;
        
        

    private readonly label: string

    private readonly BORDER: number

    private readonly foregroundBasicColor: BasicColor

    private rectangle: Rectangle

    private offset: number= 0

    private animationInterface: Animation
public constructor (rectangle: Rectangle, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){

            super();
                //var rectangle = rectangle
    //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor
this.foregroundBasicColor= foregroundBasicColor;
    
label= NAME;
    
this.rectangle= rectangle;
    

    var features: Features = Features.getInstance()!;
        
        
;
    

    var isOpenGL: boolean = features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL)!;
        
        
;
    

    var BORDER: number = 0;
        
        
;
    

                        if(J2MEUtil.isHTML() || (AndroidUtil.isAndroid() && isOpenGL))
                        
                                    {
                                    BORDER= MyFont.getInstance()!.charWidth() /2;
    

                                    }
                                
                             else 
                        if(AndroidUtil.isAndroid() || J2MEUtil.isJ2SE() || SWTUtil.isSWT)
                        
                                    {
                                    BORDER= MyFont.getInstance()!.charWidth();
    

                                    }
                                
                        else {
                            BORDER= MyFont.getInstance()!.charWidth() *2;
    

                        }
                            
this.BORDER= BORDER;
    

                        if(J2MEUtil.isJ2ME())
                        
                                    {
                                    this.animationInterface= NullAnimationFactory.getFactoryInstance()!.getInstance(0);
    

                                    }
                                
                        else {
                            this.animationInterface= RectangleFilledAnimation(this.rectangle.getWidth(), this.rectangle.getHeight(), BasicColorFactory.getInstance()!.TRANSPARENT_GREY);
    

                        }
                            
this.init(rectangle);
    
}


                //@Throws(Error::class)
            
    public init(rectangle: Rectangle){
    //var rectangle = rectangle
this.rectangle= rectangle;
    

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    

    var heightOffset: number = rectangle.getHeight() -(myFont!.DEFAULT_CHAR_HEIGHT *NAME.length);
        
        
;
    

                        if(OpenGLFeatureUtil.getInstance()!.isAnyThreed())
                        
                                    {
                                    heightOffset -= myFont!.DEFAULT_CHAR_HEIGHT +2;
    

                        if(AndroidUtil.isAndroid())
                        
                                    {
                                    heightOffset= myFont!.DEFAULT_CHAR_HEIGHT;
    

                                    }
                                
                        else {
                            heightOffset -= myFont!.DEFAULT_CHAR_HEIGHT +2;
    

                        }
                            

                                    }
                                
this.offset= (heightOffset shr 1);
    

    var width: number = this.rectangle.getWidth()!;
        
        
;
    

    var height: number = this.rectangle.getHeight()!;
        
        
;
    

                        if(J2MEUtil.isJ2ME())
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    var rectangleFilledAnimation: RectangleFilledAnimation = this.animationInterface as RectangleFilledAnimation;
        
        
;
    
rectangleFilledAnimation!.setWidth(width);
    
rectangleFilledAnimation!.setHeight(height);
    

                        }
                            
}


    private readonly drawStringUtil: DrawStringUtil = DrawStringUtil.getInstance()!;
        
        

    public paint(graphics: Graphics){
    //var graphics = graphics

    var point: GPoint = this.rectangle.getPoint()!;
        
        
;
    

    var x: number = point.getX()!;
        
        
;
    

    var y: number = point.getY()!;
        
        
;
    

    var width: number = this.rectangle.getWidth()!;
        
        
;
    

    var height: number = this.rectangle.getHeight()!;
        
        
;
    
this.animationInterface!.paint(graphics, x, y);
    
this.basicSetColorUtil!.setBasicColorP(graphics, this.foregroundBasicColor);
    
drawStringUtil!.paintVerticle(graphics, label, x +BORDER, y +offset, 0);
    
graphics.drawRect(x, y, width, height);
    
}


}
                
            

