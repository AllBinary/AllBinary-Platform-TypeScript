
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

        


import { Font } from '../../../../javax/microedition/lcdui/Font.js';
//not GWT import const Font

import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
//not GWT import const AnimationBehavior

import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const IndexedAnimation

import { RawKeyEventListener } from '../../../../org/allbinary/game/input/event/RawKeyEventListener.js';
//not GWT import const RawKeyEventListener

import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

import { UpdateMyFontInterface } from '../../../../org/allbinary/graphics/font/UpdateMyFontInterface.js';
//not GWT import const UpdateMyFontInterface

import { CustomTextBox } from '../../../../org/allbinary/graphics/form/item/CustomTextBox.js';
//not GWT import const CustomTextBox

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TextInterface } from './TextInterface.js';
//not GWT import - same folder const TextInterface
import { TextChangeListener } from './TextChangeListener.js';
//not GWT import - same folder const TextChangeListener

export class CustomTextBoxIndexedAnimation extends IndexedAnimation implements RawKeyEventListener, UpdateMyFontInterface, TextInterface {
        

    private readonly customTextBox: CustomTextBox;

    private lastText: string = StringUtil.getInstance()!.INIT_STRING;

    hasChanged: boolean = true;

    private textChangeListener: TextChangeListener = TextChangeListener.getInstance()!;

public constructor (customTextBox: CustomTextBox){
            super(AnimationBehavior.getInstance());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.customTextBox= customTextBox;
    
}


    public setBasicColorP(basicColor: BasicColor){
this.customTextBox!.getTextFieldItem()!.setForegroundBasicColorP(basicColor);
    
}


    public setBackgroundBasicColorP(basicColor: BasicColor){
this.customTextBox!.getTextFieldItem()!.setBackgroundBasicColorP(basicColor);
    
}


    public setTextWithOnMeasure(text: string, textChangeListener: TextChangeListener){
this.setText(text);
    
this.textChangeListener= textChangeListener;
    
}


    public updateMeasurement(graphics: Graphics){

    var font: Font = graphics.getFont()!;;
    
this.textChangeListener!.onMeasure();
    
this.textChangeListener= TextChangeListener.getInstance();
    
}


    public setText(text: string){

                        if(this.lastText != text)
                        
                                    {
                                    this.hasChanged= true;
    
this.lastText= text;
    
this.customTextBox!.getTextFieldItem()!.setString(text);
    

                                    }
                                
}


    public getText(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.customTextBox!.getTextFieldItem()!.getString();;
    
}


    public onEventRaw(keyCode: number, deviceId: number, repeated: boolean){
this.customTextBox!.onEventRaw(keyCode, deviceId, repeated);
    
}


    public getFontHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.customTextBox!.getTextFieldItem()!.getFontHeight();;
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.customTextBox!.paintXY(graphics, x, y);
    
}


    public paintThreedXYZ(graphics: Graphics, x: number, y: number, z: number){
}


}



