
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
        



import { CommandListener } from "../../../../../javax/microedition/lcdui/CommandListener.js";

    
import { Font } from "../../../../../javax/microedition/lcdui/Font.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { J2MEUtil } from "../../../../../org/allbinary/J2MEUtil.js";

    
import { GameCommandCanvas } from "../../../../../org/allbinary/game/displayable/canvas/GameCommandCanvas.js";

    
import { Input } from "../../../../../org/allbinary/game/input/Input.js";

    
import { InputFactory } from "../../../../../org/allbinary/game/input/InputFactory.js";

    
import { PlatformKeyFactory } from "../../../../../org/allbinary/game/input/PlatformKeyFactory.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { TextItemVisitor } from "../../../../../org/allbinary/graphics/form/item/validation/TextItemVisitor.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

export class CustomTextBox extends GameCommandCanvas {
        

    private readonly textFieldItem: TextFieldItem
public constructor (cmdListener: CommandListener, label: string, text: string, maxSize: number, constraints: number, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : this(cmdListener, label, text, maxSize, constraints, Font.getDefaultFont(), backgroundBasicColor, foregroundBasicColor){

            super();
                //var cmdListener = cmdListener
    //var label = label
    //var text = text
    //var maxSize = maxSize
    //var constraints = constraints
    //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (cmdListener: CommandListener, label: string, text: string, maxSize: number, constraints: number, font: Font, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(cmdListener, label, backgroundBasicColor, foregroundBasicColor){

            super();
                //var cmdListener = cmdListener
    //var label = label
    //var text = text
    //var maxSize = maxSize
    //var constraints = constraints
    //var font = font
    //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        


    var textFieldItem: TextFieldItem = new TextFieldItem(this, TextItemVisitor(), stringUtil!.EMPTY_STRING, stringUtil!.EMPTY_STRING, maxSize, 0, stringUtil!.EMPTY_STRING, font, backgroundBasicColor, foregroundBasicColor);
        
        

setString(text)
this.textFieldItem= textFieldItem
this.setTitle(label)
}


    public submit(){
}


    private readonly inputFactory: InputFactory = InputFactory.getInstance()!;
        
        

    public onEvent(keyCode: number, deviceId: number, repeated: boolean){
    //var keyCode = keyCode
    //var deviceId = deviceId
    //var repeated = repeated
put(StringMaker().
                            append(commonStrings!.START)!.appendint(keyCode)!.toString(), this, "onEvent")
this.keyPressed(keyCode, deviceId)
}


    public keyPressed(keyCode: number){
    //var keyCode = keyCode
this.keyPressed(keyCode, 0)
}


    public keyReleased(keyCode: number){
    //var keyCode = keyCode
this.keyReleased(keyCode, 0)
}


    public keyRepeated(keyCode: number){
    //var keyCode = keyCode
this.keyRepeated(keyCode, 0)
}


    public keyPressed(keyCode: number, deviceId: number){
    //var keyCode = keyCode
    //var deviceId = deviceId

        try {
            put(StringMaker().
                            append(CommonSeps.getInstance()!.SPACE)!.appendint(keyCode)!.toString(), this, gameInputStrings!.KEY_PRESSED)

    var platformKeyFactory: PlatformKeyFactory = PlatformKeyFactory.getInstance()!;
        
        


    var input: Input = inputFactory!.getInstance(keyCode)!;
        
        


    
                        if(platformKeyFactory!.isSubmission(input))
                        
                                    {
                                    this.submit()

                                    }
                                
                        else {
                            keyPressed(keyCode)

                        }
                            
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, gameInputStrings!.KEY_PRESSED, e)
}

}


    public keyReleased(keyCode: number, deviceId: number){
    //var keyCode = keyCode
    //var deviceId = deviceId
}


    public paint(graphics: Graphics){
    //var graphics = graphics
setColor(this.backgroundColor)
fillRect(0, 0, this.displayInfoSingleton!.getLastWidth(), this.displayInfoSingleton!.getLastHeight())
setColor(this.foregroundColor)

    
                        if(!J2MEUtil.isJ2ME())
                        
                                    {
                                    drawString(this.getTitle(), 8, 1, 0)

                                    }
                                
this.paint(graphics, 8, graphics.getFont()!.getHeight() +2)
paint(graphics)
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y
paint(graphics, x, y)
}


    public getTextFieldItem(): TextFieldItem{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return textFieldItem;
    
}


}
                
            

