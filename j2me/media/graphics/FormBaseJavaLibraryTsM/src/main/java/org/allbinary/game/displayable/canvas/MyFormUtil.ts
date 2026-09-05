
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not plain js import { PointFactory } 
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;

      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;

      
import { RectangleFactory } from '../../../../../org/allbinary/graphics/RectangleFactory.js';
//not GWT import const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;

      
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const MyFontProcessor = globalThis.org.allbinary.graphics.font.MyFontProcessor;

      
import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
//not GWT import const OpenGLFeatureFactory = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;

      
import { SWTJOGLProcessor } from '../../../../../org/allbinary/graphics/threed/SWTJOGLProcessor.js';
//not GWT import const SWTJOGLProcessor = globalThis.org.allbinary.graphics.threed.SWTJOGLProcessor;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MyFormUtil
            extends Object
         {
        

    private static readonly instance: MyFormUtil = new MyFormUtil();

    public static getInstance(): MyFormUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MyFormUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private popupMenuRectangle: Rectangle = RectangleFactory.SINGLETON;

    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

    var features: Features = Features.getInstance()!;;
    

    var isOpenGL: boolean = features.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL)!;;
    

    var TOTAL_CHAR_WIDTH: number = SWTJOGLProcessor.getInstance()!.isJOGL() && isOpenGL
                        ?       
                                2
                                :

                            3;

    ;;
    

    var width: number = MyFontProcessor.defaultStringWidth(font, TOTAL_CHAR_WIDTH)!;;
    

    var pointFactory: PointFactory = PointFactory.getInstance()!;;
    

                        if(displayInfo!.getLastHeight() < 320)
                        
                                    {
                                    this.popupMenuRectangle= new Rectangle(pointFactory!.createXY(0, 25), width, (font.getHeight() *4) +2);
    

                                    }
                                
                        else {
                            this.popupMenuRectangle= new Rectangle(pointFactory!.createXY(0, displayInfo!.getLastHalfHeight() -70), width, (font.getHeight() *5));
    

                        }
                            
}


    public getPopupMenuRectangle(): Rectangle{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.popupMenuRectangle;
    
}


}



