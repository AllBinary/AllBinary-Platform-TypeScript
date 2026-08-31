
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not plain js import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { TextField } from '../../../../javax/microedition/lcdui/TextField.js';
      const TextField = globalThis.javax.microedition.lcdui.TextField;

      
import { CustomTextBox } from '../../../../org/allbinary/graphics/form/item/CustomTextBox.js';
      //not GWT import const CustomTextBox = globalThis.org.allbinary.graphics.form.item.CustomTextBox;

      
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
      //not GWT import const Animation = globalThis.org.allbinary.animation.Animation;

      
import { AnimationInterfaceFactoryInterface } from '../../../../org/allbinary/animation/AnimationInterfaceFactoryInterface.js';
      //not GWT import const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;

      
import { ABToGBUtil } from '../../../../org/allbinary/game/canvas/ABToGBUtil.js';
      //not GWT import const ABToGBUtil = globalThis.org.allbinary.game.canvas.ABToGBUtil;

      
import { AllBinaryGameCanvas } from '../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
      //not GWT import const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
      //not GWT import const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CustomTextBox2 } from './CustomTextBox2.js';
//not GWT import const CustomTextBox2 = globalThis.org.allbinary.animation.text.CustomTextBox2;

                import { CustomTextBoxIndexedAnimation } from './CustomTextBoxIndexedAnimation.js';
//not GWT import const CustomTextBoxIndexedAnimation = globalThis.org.allbinary.animation.text.CustomTextBoxIndexedAnimation;

                
export class CustomTextBoxIndexedAnimationFactory
            extends Object
         implements AnimationInterfaceFactoryInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public scaleProperties: ScaleProperties;

    private readonly maxLength: number;

public constructor (fontSize: number, maxLength: number){

            super();
        this.scaleProperties= new ScaleProperties();
    
this.scaleProperties!.scaleHeight= fontSize;
    
this.maxLength= maxLength;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(instanceId: number): Animation{

    var abToGBUtil: ABToGBUtil = ABToGBUtil.getInstance()!;;
    

    var abCanvas: AllBinaryGameCanvas = abToGBUtil!.abCanvas as AllBinaryGameCanvas;;
    

    var font: Font = Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, this.scaleProperties!.scaleHeight)!;;
    

    var customTextBox: CustomTextBox = new CustomTextBox2(abCanvas!.getCustomCommandListener(), StringUtil.getInstance()!.EMPTY_STRING, StringUtil.getInstance()!.EMPTY_STRING, this.maxLength, TextField.ANY, font, abCanvas!.getLayerManager()!.getBackgroundBasicColor(), abCanvas!.getLayerManager()!.getForegroundBasicColor());;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new CustomTextBoxIndexedAnimation(customTextBox);
    
}


    public setInitialScale(scaleProperties: ScaleProperties){

    var fontSize: number = this.scaleProperties!.scaleHeight;;
    
this.scaleProperties= scaleProperties;
    

                        if(this.scaleProperties!.scaleHeight < 6)
                        
                                    {
                                    this.scaleProperties!.scaleHeight= fontSize;
    

                                    }
                                
}


}



