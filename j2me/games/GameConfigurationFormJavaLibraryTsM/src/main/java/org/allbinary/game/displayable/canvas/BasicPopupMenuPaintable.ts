
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
        
import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      
import { AndroidUtil } from '../../../../../org/allbinary/AndroidUtil.js';
      
import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
      
import { Animation } from '../../../../../org/allbinary/animation/Animation.js';
      
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
      
import { RectangleFilledAnimation } from '../../../../../org/allbinary/animation/vector/RectangleFilledAnimation.js';
      
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
      
import { SWTUtil } from '../../../../../org/allbinary/game/layer/SWTUtil.js';
      
import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      
import { BasicColorSetUtil } from '../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
      
import { DrawVerticalStringUtil } from '../../../../../org/allbinary/graphics/draw/DrawVerticalStringUtil.js';
      
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      
import { UpdateMyFontInterface } from '../../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
      
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
      
import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
      
import { OpenGLFeatureUtil } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
      
import { Paintable } from '../../../../../org/allbinary/graphics/paint/Paintable.js';
      
import { SWTJOGLProcessor } from '../../../../../org/allbinary/graphics/threed/SWTJOGLProcessor.js';
      
















                                        
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
    

                        if(J2MEUtil.isJ2ME())
                        
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
    

                        if(J2MEUtil.isJ2ME())
                        
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
                
            

