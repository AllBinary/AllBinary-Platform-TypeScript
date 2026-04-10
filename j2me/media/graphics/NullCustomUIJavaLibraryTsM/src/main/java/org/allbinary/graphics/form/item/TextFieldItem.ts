
        /* Generated Code Do Not Modify */
        



import { Canvas } from "../../../../../javax/microedition/lcdui/Canvas.js";

    
import { Font } from "../../../../../javax/microedition/lcdui/Font.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Visitor } from "../../../../../org/allbinary/logic/util/visitor/Visitor.js";

    

export class TextFieldItem extends TextItem {
        
public constructor (canvas: Canvas, visitor: Visitor, label: string, value: string, maxSize: number, layout: number, altText: string, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : this(canvas, visitor, label, value, maxSize, layout, altText, Font.getDefaultFont(), backgroundBasicColor, foregroundBasicColor){

            super();
            var canvas = canvas
var visitor = visitor
var label = label
var value = value
var maxSize = maxSize
var layout = layout
var altText = altText
var backgroundBasicColor = backgroundBasicColor
var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (canvas: Canvas, visitor: Visitor, label: string, value: string, maxSize: number, layout: number, altText: string, font: Font, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(label, layout, altText, backgroundBasicColor, foregroundBasicColor){

            super();
            var canvas = canvas
var visitor = visitor
var label = label
var value = value
var maxSize = maxSize
var layout = layout
var altText = altText
    //var font = font
var backgroundBasicColor = backgroundBasicColor
var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
}


    public getLabel(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public setLabel(label: string){
var label = label
}


    public getString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.EMPTY_STRING;
    
}


    public setString(string: string){
var string = string
}


    public setFocus(state: boolean){
var state = state
}


}
                
            

