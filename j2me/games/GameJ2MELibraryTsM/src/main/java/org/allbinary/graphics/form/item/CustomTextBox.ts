
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
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not plain js import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
      //not GWT import const J2MEUtil = globalThis.org.allbinary.J2MEUtil;

      
import { GameCommandCanvas } from '../../../../../org/allbinary/game/displayable/canvas/GameCommandCanvas.js';
      //not GWT import const GameCommandCanvas = globalThis.org.allbinary.game.displayable.canvas.GameCommandCanvas;

      
import { Input } from '../../../../../org/allbinary/game/input/Input.js';
      //not GWT import const Input = globalThis.org.allbinary.game.input.Input;

      
import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
      //not GWT import const InputFactory = globalThis.org.allbinary.game.input.InputFactory;

      
import { PlatformKeyFactory } from '../../../../../org/allbinary/game/input/PlatformKeyFactory.js';
      //not GWT import const PlatformKeyFactory = globalThis.org.allbinary.game.input.PlatformKeyFactory;

      
import { RawKeyEventListener } from '../../../../../org/allbinary/game/input/event/RawKeyEventListener.js';
      //not GWT import const RawKeyEventListener = globalThis.org.allbinary.game.input.event.RawKeyEventListener;

      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { TextItemVisitor } from '../../../../../org/allbinary/graphics/form/item/validation/TextItemVisitor.js';
      //not GWT import const TextItemVisitor = globalThis.org.allbinary.graphics.form.item.validation.TextItemVisitor;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ABTextFieldItem } from './ABTextFieldItem.js';

export class CustomTextBox extends GameCommandCanvas implements RawKeyEventListener {
        

    private readonly textFieldItem: ABTextFieldItem;

public constructor (cmdListener: CommandListener, label: string, text: string, maxSize: number, constraints: number, font: Font, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(cmdListener, label, backgroundBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    

    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    var textFieldItem: ABTextFieldItem = new ABTextFieldItem(this, new TextItemVisitor(), stringUtil!.EMPTY_STRING, stringUtil!.EMPTY_STRING, maxSize, 0, stringUtil!.EMPTY_STRING, font, backgroundBasicColor, foregroundBasicColor);;
    
textFieldItem!.setString(text);
    
this.textFieldItem= textFieldItem;
    
this.setTitle(label);
    
}


    public submit(){
}


    private readonly inputFactory: InputFactory = InputFactory.getInstance()!;

    public onEventRaw(keyCode: number, deviceId: number, repeated: boolean){
this.logUtil!.putF(new StringMaker().append(this.commonStrings!.START)!.appendint(keyCode)!.toString(), this, "onEvent");
    
this.keyPressedByDevice(keyCode, deviceId);
    
}


    public keyPressed(keyCode: number){
this.keyPressedByDevice(keyCode, 0);
    
}


    public keyReleased(keyCode: number){
this.keyReleasedByDevice(keyCode, 0);
    
}


    public keyRepeated(keyCode: number){
this.keyRepeatedByDevice(keyCode, 0);
    
}


    public keyPressedByDevice(keyCode: number, deviceId: number){

        try {
            this.logUtil!.putF(new StringMaker().append(CommonSeps.getInstance()!.SPACE)!.appendint(keyCode)!.toString(), this, this.gameInputStrings!.KEY_PRESSED);
    

    var platformKeyFactory: PlatformKeyFactory = PlatformKeyFactory.getInstance()!;;
    

    var input: Input = this.inputFactory!.getInstanceById(keyCode)!;;
    

                        if(platformKeyFactory!.isSubmission(input))
                        
                                    {
                                    this.submit();
    

                                    }
                                
                        else {
                            this.textFieldItem!.keyPressed(keyCode);
    

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.gameInputStrings!.KEY_PRESSED, e);
    
}

}


    public keyReleasedByDevice(keyCode: number, deviceId: number){
}


    public paint(graphics: Graphics){
graphics.setColor(this.backgroundColor);
    
graphics.fillRect(0, 0, this.displayInfo!.getLastWidth(), this.displayInfo!.getLastHeight());
    
graphics.setColor(this.foregroundColor);
    

                        if(!J2MEUtil.isJ2ME())
                        
                                    {
                                    graphics.drawString(this.getTitle(), 8, 1, 0);
    

                                    }
                                
this.paintXY(graphics, 8, graphics.getFont()!.getHeight() +2);
    
super.paint(graphics);
    
}


    public paintXY(graphics: Graphics, x: number, y: number){
this.textFieldItem!.paintXY(graphics, x, y);
    
}


    public getTextFieldItem(): ABTextFieldItem{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.textFieldItem;
    
}


}



