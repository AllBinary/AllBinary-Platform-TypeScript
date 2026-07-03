
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


        
import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
      
import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
      
import { PointFactory } from '../../../../../org/allbinary/graphics/PointFactory.js';
      
import { Rectangle } from '../../../../../org/allbinary/graphics/Rectangle.js';
      
import { RectangleFactory } from '../../../../../org/allbinary/graphics/RectangleFactory.js';
      
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
      
import { MyFontProcessor } from '../../../../../org/allbinary/graphics/font/MyFontProcessor.js';
      
import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
      
import { SWTJOGLProcessor } from '../../../../../org/allbinary/graphics/threed/SWTJOGLProcessor.js';
      
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      
















                                        
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
                
            

