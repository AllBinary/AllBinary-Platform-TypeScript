
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
        



import { Command } from "../../../../../javax/microedition/lcdui/Command.js";

    
import { CommandListener } from "../../../../../javax/microedition/lcdui/CommandListener.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { ColorFillBasePaintable } from "../../../../../org/allbinary/game/paint/ColorFillBasePaintable.js";

    
import { ColorFillPaintableFactory } from "../../../../../org/allbinary/game/paint/ColorFillPaintableFactory.js";

    
import { Anchor } from "../../../../../org/allbinary/graphics/Anchor.js";

    
import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { DrawStringUtil } from "../../../../../org/allbinary/graphics/draw/DrawStringUtil.js";

    
import { MyFont } from "../../../../../org/allbinary/graphics/font/MyFont.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    

export class GameInputMappingInstructionsCanvas extends GameCommandCanvas {
        

    public static readonly DISPLAY: Command = new Command("Help", Command.SCREEN, 1);
        
        

    public static readonly CLOSE: Command = new Command("Close", Command.SCREEN, 1);
        
        

    public static readonly NAME: string = "GameInputMappingInstructionsCanvas";
        
        

    TITLE: string = "Input Instructions";
        
        

    private readonly instructions: string[] = 
                                                        [
                                                            "Add Input Mapping:","1. Select the desired action by generating a currently defined input for a given action.","(Example: Press the '1' key to select the Fire action)","2. Make the newly desired input for the selected action.","(Example: Press 'f' to add it to the selected action)","Note: If the input is already mapped to another action then it will not be added. You","will need to deleted from the other action before adding it to another.","Warning: Not all keys map for a given platform and show as Unknown.",StringUtil.getInstance()!.EMPTY_STRING,"Remove Input Mapping:","1. Select the desired action by generating a currently defined input for a given action.","(Example: Press the key '1' to select the Fire action)","2. Select a mapped input for the selected action.","(Example: Press the key '1' to select the '1' key input for the selected Fire action)","3. Press the Delete Key."
                                                        ];
        
        

    private colorFillPaintable: ColorFillBasePaintable
public constructor (commandListener: CommandListener, allBinaryGameLayerManager: AllBinaryGameLayerManager)                        

                            : super(commandListener, NAME, allBinaryGameLayerManager!.getBackgroundBasicColor(), allBinaryGameLayerManager!.getForegroundBasicColor()){

            super();
            var commandListener = commandListener
var allBinaryGameLayerManager = allBinaryGameLayerManager


                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    
this.colorFillPaintable= ColorFillPaintableFactory.getInstance()!.getInstance(allBinaryGameLayerManager!.getBackgroundBasicColor(), false);
    
}


    public initCommands(cmdListener: CommandListener){
var cmdListener = cmdListener
this.removeAllCommands();
    
this.addCommand(GameInputMappingInstructionsCanvas.CLOSE);
    
this.setCommandListener(cmdListener);
    
}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    private readonly drawStringUtil: DrawStringUtil = DrawStringUtil.getInstance()!;
        
        

    public paint(graphics: Graphics){
var graphics = graphics

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    

    var charHeight: number = myFont!.DEFAULT_CHAR_HEIGHT;
        
        
;
    
this.colorFillPaintable!.paint(graphics);
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

    var halfWidth: number = displayInfo!.getLastHalfWidth()!;
        
        
;
    

    var beginWidth: number = (graphics.getFont()!.stringWidth(this.TITLE) shr 1);
        
        
;
    
graphics.setColor(this.foregroundColor);
    
graphics.drawString(this.TITLE, halfWidth -beginWidth, charHeight, anchor);
    
drawStringUtil!.drawCenterStrings(graphics, instructions, displayInfo!.getLastWidth(), halfWidth, 3 *charHeight);
    
super.paint(graphics);
    
}


}
                
            

