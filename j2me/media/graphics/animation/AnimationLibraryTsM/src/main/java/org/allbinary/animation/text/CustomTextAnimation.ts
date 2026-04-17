
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
        



import { Font } from "../../../../javax/microedition/lcdui/Font.js";

    
import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { AnimationBehavior } from "../../../../org/allbinary/animation/AnimationBehavior.js";

    
import { FontDebugFactory } from "../../../../org/allbinary/graphics/font/FontDebugFactory.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TextAnimation } from "./TextAnimation.js";

export class CustomTextAnimation extends TextAnimation implements GetTextInterface {
        

    readonly fontDebugFactory: FontDebugFactory = FontDebugFactory.getInstance()!;
        
        

    readonly fontSize: number

    font: Font

    private lastText: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    hasChanged: boolean = true;
        
        
public constructor (text: string, fontSize: number, animationBehavior: AnimationBehavior)                        

                            : super(text, animationBehavior){

            super();
                //var text = text
    //var fontSize = fontSize
    //var animationBehavior = animationBehavior


                            //For kotlin this is before the body of the constructor.
                    
this.fontSize= fontSize;
    
this.font= Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, fontSize);
    
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y

    var existingFont: Font = graphics.getFont()!;
        
        
;
    
fontDebugFactory!.setFont(this.font, graphics);
    
super.paint(graphics, x, y);
    
fontDebugFactory!.setFont(existingFont, graphics);
    
}


    public setScale(scaleX: number, scaleY: number){
    //var scaleX = scaleX
    //var scaleY = scaleY

                        if(scaleX != scaleY)
                        
                                    {
                                    


                            throw new RuntimeException()

                                    }
                                
this.hasChanged= true;
    
this.font= Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, (fontSize *scaleX).toInt());
    
}


    public setText(text: string){
    //var text = text

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


    private textWidth: number= 0

    public getWidth(): number{

                        if(this.hasChanged)
                        
                                    {
                                    this.textWidth= this.font.stringWidth(this.textArrayP[0]!);
    
this.hasChanged= false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.textWidth;
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.font.getHeight();

                        ;
    
}


}
                
            

