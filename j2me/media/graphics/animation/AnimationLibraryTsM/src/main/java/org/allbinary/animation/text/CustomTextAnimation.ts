
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
        



            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
      //not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;

      
import { FontDebugFactory } from '../../../../org/allbinary/graphics/font/FontDebugFactory.js';
      //not GWT import const FontDebugFactory = globalThis.org.allbinary.graphics.font.FontDebugFactory;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TextAnimation } from './TextAnimation.js';
import { TextInterface } from './TextInterface.js';

export class CustomTextAnimation extends TextAnimation implements TextInterface {
        

    readonly fontDebugFactory: FontDebugFactory = FontDebugFactory.getInstance()!;

    readonly fontSize: number;

    font: Font;

    private lastText: string = StringUtil.getInstance()!.INIT_STRING;

    hasChanged: boolean = true;

public constructor (text: string, fontSize: number, animationBehavior: AnimationBehavior){
            super(text, animationBehavior);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.fontSize= fontSize;
    
this.font= Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, fontSize);
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.myFontProcessor!.process(graphics);
    

    var existingFont: Font = graphics.getFont()!;;
    
this.fontDebugFactory!.setFont(this.font, graphics);
    
super.paintXYNoUpdate(graphics, x, y);
    
this.fontDebugFactory!.setFont(existingFont, graphics);
    
}


    public setScale(scaleX: number, scaleY: number){

                        if(scaleX != scaleY)
                        
                                    {
                                    


                            throw new RuntimeException();
                    

                                    }
                                
this.hasChanged= true;
    
this.font= Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, Math.round((this.fontSize *scaleX)));
    
}


    public setText(text: string){

                        if(this.lastText != text)
                        
                                    {
                                    this.hasChanged= true;
    
this.lastText= text;
    
super.setText(text);
    

                                    }
                                
}


    public getText(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lastText;
    
}


    private textWidth: number= 0;

    public getWidth(): number{

                        if(this.hasChanged)
                        
                                    {
                                    this.textWidth= this.font.stringWidth(this.textArrayP[0]!);
    
this.hasChanged= false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.textWidth;
    
}


    public getFontHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.font.getHeight();;
    
}


}



