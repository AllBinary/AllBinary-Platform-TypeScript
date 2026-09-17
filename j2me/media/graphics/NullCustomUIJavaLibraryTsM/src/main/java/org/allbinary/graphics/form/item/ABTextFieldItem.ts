
        /* Generated Code Do Not Modify */

        


import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas

import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
//not GWT import const Font

import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

import { Visitor } from '../../../../../org/allbinary/logic/util/visitor/Visitor.js';
//not GWT import const Visitor

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ABTextItem } from './ABTextItem.js';
//not GWT import - same folder const ABTextItem

export class ABTextFieldItem extends ABTextItem {
        

    private font: Font;

public constructor (canvas: Canvas, visitor: Visitor, label: string, value: string, maxSize: number, layout: number, altText: string, font: Font, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(label, layout, altText, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.font= font;
    
}


    public getLabel(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public setLabel(label: string){
}


    public getString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public setString(string: string){
}


    public setFocus(state: boolean){
}


    public getFontHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.font.getHeight();;
    
}


    public setBackgroundBasicColorP(basicColor: BasicColor){
}


    public setForegroundBasicColorP(basicColor: BasicColor){
}


}



