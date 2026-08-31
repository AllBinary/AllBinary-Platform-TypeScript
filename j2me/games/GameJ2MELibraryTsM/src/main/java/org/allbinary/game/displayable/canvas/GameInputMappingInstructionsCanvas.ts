
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

      
//not plain js import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not plain js import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      //not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
import { ColorFillBasePaintable } from '../../../../../org/allbinary/game/paint/ColorFillBasePaintable.js';
      //not GWT import const ColorFillBasePaintable = globalThis.org.allbinary.game.paint.ColorFillBasePaintable;

      
import { ColorFillPaintableFactory } from '../../../../../org/allbinary/game/paint/ColorFillPaintableFactory.js';
      //not GWT import const ColorFillPaintableFactory = globalThis.org.allbinary.game.paint.ColorFillPaintableFactory;

      
import { Anchor } from '../../../../../org/allbinary/graphics/Anchor.js';
      //not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;

      
import { DrawStringUtil } from '../../../../../org/allbinary/graphics/draw/DrawStringUtil.js';
      //not GWT import const DrawStringUtil = globalThis.org.allbinary.graphics.draw.DrawStringUtil;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameCommandCanvas } from './GameCommandCanvas.js';
//not GWT import const GameCommandCanvas = globalThis.org.allbinary.game.displayable.canvas.GameCommandCanvas;

                
export class GameInputMappingInstructionsCanvas extends GameCommandCanvas {
        

    public static readonly DISPLAY: Command = new Command("Help", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public static readonly CLOSE: Command = new Command("Close", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);

    public static readonly NAME: string = "GameInputMappingInstructionsCanvas";

    private readonly drawStringUtil: DrawStringUtil = DrawStringUtil.getInstance()!;

    readonly TITLE: string = "Input Instructions";

    private readonly instructions: string[] = 
                                                        [
                                                            "Add Input Mapping:","1. Select the desired action by generating a currently defined input for a given action.","(Example: Press the '1' key to select the Fire action)","2. Make the newly desired input for the selected action.","(Example: Press 'f' to add it to the selected action)","Note: If the input is already mapped to another action then it will not be added. You","will need to deleted from the other action before adding it to another.","Warning: Not all keys map for a given platform and show as Unknown.",StringUtil.getInstance()!.EMPTY_STRING,"Remove Input Mapping:","1. Select the desired action by generating a currently defined input for a given action.","(Example: Press the key '1' to select the Fire action)","2. Select a mapped input for the selected action.","(Example: Press the key '1' to select the '1' key input for the selected Fire action)","3. Press the Delete Key."
                                                        ];

    private colorFillPaintable: ColorFillBasePaintable;

    private anchor: number = Anchor.TOP_LEFT;

public constructor (commandListener: CommandListener, allBinaryGameLayerManager: AllBinaryGameLayerManager){
            super(commandListener, GameInputMappingInstructionsCanvas.NAME, allBinaryGameLayerManager!.getBackgroundBasicColor(), allBinaryGameLayerManager!.getForegroundBasicColor());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.colorFillPaintable= ColorFillPaintableFactory.getInstance()!.getInstance(allBinaryGameLayerManager!.getBackgroundBasicColor(), false);
    
}


    public initCommands(cmdListener: CommandListener){
this.removeAllCommands();
    
this.addCommand(GameInputMappingInstructionsCanvas.CLOSE);
    
this.setCommandListener(cmdListener);
    
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    
this.colorFillPaintable!.paint(graphics);
    

    var halfWidth: number = this.displayInfo!.getLastHalfWidth()!;;
    

    var beginWidth: number = (graphics.getFont()!.stringWidth(this.TITLE)>>1);;
    
graphics.setColor(this.foregroundColor);
    
graphics.drawString(this.TITLE, halfWidth -beginWidth, this.fontHeight, this.anchor);
    
this.drawStringUtil!.drawCenterStrings(graphics, this.instructions, this.displayInfo!.getLastWidth(), this.fontHeight, halfWidth, 3 *this.fontHeight);
    
super.paint(graphics);
    
}


}



