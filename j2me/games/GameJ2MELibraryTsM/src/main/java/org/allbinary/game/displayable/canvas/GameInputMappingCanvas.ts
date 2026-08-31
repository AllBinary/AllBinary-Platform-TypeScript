
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
        
            import { Integer } from '../../../../../java/lang/Integer.js';
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not plain js import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
      //not GWT import const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;

      
import { GameKey } from '../../../../../org/allbinary/game/input/GameKey.js';
      //not GWT import const GameKey = globalThis.org.allbinary.game.input.GameKey;

      
import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
      //not GWT import const GameKeyFactory = globalThis.org.allbinary.game.input.GameKeyFactory;

      
import { Input } from '../../../../../org/allbinary/game/input/Input.js';
      //not GWT import const Input = globalThis.org.allbinary.game.input.Input;

      
import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
      //not GWT import const InputFactory = globalThis.org.allbinary.game.input.InputFactory;

      
import { PlatformInputMappingFactory } from '../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
      //not GWT import const PlatformInputMappingFactory = globalThis.org.allbinary.game.input.PlatformInputMappingFactory;

      
import { InputMappingInterface } from '../../../../../org/allbinary/game/input/mapping/InputMappingInterface.js';
      //not GWT import const InputMappingInterface = globalThis.org.allbinary.game.input.mapping.InputMappingInterface;

      
import { PersistentInputMapping } from '../../../../../org/allbinary/game/input/mapping/PersistentInputMapping.js';
      //not GWT import const PersistentInputMapping = globalThis.org.allbinary.game.input.mapping.PersistentInputMapping;

      
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      //not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
import { ColorFillBasePaintable } from '../../../../../org/allbinary/game/paint/ColorFillBasePaintable.js';
      //not GWT import const ColorFillBasePaintable = globalThis.org.allbinary.game.paint.ColorFillBasePaintable;

      
import { ColorFillPaintableFactory } from '../../../../../org/allbinary/game/paint/ColorFillPaintableFactory.js';
      //not GWT import const ColorFillPaintableFactory = globalThis.org.allbinary.game.paint.ColorFillPaintableFactory;

      
import { HelpPaintable } from '../../../../../org/allbinary/game/paint/help/HelpPaintable.js';
      //not GWT import const HelpPaintable = globalThis.org.allbinary.game.paint.help.HelpPaintable;

      
import { InputMappingHelpPaintable } from '../../../../../org/allbinary/game/paint/help/InputMappingHelpPaintable.js';
      //not GWT import const InputMappingHelpPaintable = globalThis.org.allbinary.game.paint.help.InputMappingHelpPaintable;

      
import { ProcessPaintable } from '../../../../../org/allbinary/graphics/paint/ProcessPaintable.js';
      //not GWT import const ProcessPaintable = globalThis.org.allbinary.graphics.paint.ProcessPaintable;

      
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameCommandCanvas } from './GameCommandCanvas.js';
//not GWT import const  = globalThis.org.allbinary.game.displayable.canvas.GameCommandCanvas;

                import { GameInputMappingInstructionsCanvas } from './GameInputMappingInstructionsCanvas.js';
//not GWT import const  = globalThis.org.allbinary.game.displayable.canvas.GameInputMappingInstructionsCanvas;

                
export class GameInputMappingCanvas extends GameCommandCanvas implements InputMappingInterface {
        

    public static readonly NAME: string = "GameInputMappingCanvas";

    public static readonly DISPLAY: Command = new Command("Controls", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 2);

    public static readonly DEFAULT: Command = new Command("Default", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 2);

    private readonly paintable: ProcessPaintable;

    private readonly helpPaintable: InputMappingHelpPaintable;

    readonly colorFillPaintable: ColorFillBasePaintable;

    private readonly inputMapping: PersistentInputMapping;

    private readonly NONE: GameKey = GameKeyFactory.getInstance()!.NONE;

    private readonly abeClientInformation: AbeClientInformationInterface;

    private selectedGameKey: GameKey = this.NONE;

    private selectedInput: Input = this.NONE;

public constructor (abeClientInformation: AbeClientInformationInterface, commandListener: CommandListener, allBinaryGameLayerManager: AllBinaryGameLayerManager, helpPaintable: HelpPaintable){
            super(commandListener, GameInputMappingCanvas.NAME, allBinaryGameLayerManager!.getBackgroundBasicColor(), allBinaryGameLayerManager!.getForegroundBasicColor());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

                        if(helpPaintable == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("Help Paintable Exception");
                    

                                    }
                                
this.abeClientInformation= abeClientInformation;
    
this.helpPaintable= helpPaintable as InputMappingHelpPaintable;
    
this.inputMapping= PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance();
    
this.paintable= new ProcessPaintable();
    
this.colorFillPaintable= ColorFillPaintableFactory.getInstance()!.getInstance(allBinaryGameLayerManager!.getBackgroundBasicColor(), false);
    
}


    public close(){
super.close();
    
this.paintable.process();
    
this.selectedGameKey= this.NONE;
    
this.selectedInput= this.NONE;
    
this.update();
    
}


    public initCommands(cmdListener: CommandListener){
this.removeAllCommands();
    
this.addCommand(GameCommandsFactory.getInstance()!.CLOSE_AND_SHOW_GAME_CANVAS);
    
this.addCommand(GameInputMappingCanvas.DEFAULT);
    
this.addCommand(GameInputMappingInstructionsCanvas.DISPLAY);
    
this.setCommandListener(cmdListener);
    
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
this.addGameKey(keyCode, false);
    
super.keyPressedByDevice(keyCode, 0);
    
}


    private readonly inputFactory: InputFactory = InputFactory.getInstance()!;

    addGameKey(keyCode: number, repeated: boolean){

        try {
            this.logUtil!.putF(new StringMaker().append("Raw Device Key Code: ")!.append(Integer.toHexString(keyCode))!.toString(), this, this.gameInputStrings!.ADD_KEY_EVENT);
    

    var gameKey: GameKey = this.inputToGameKeyMapping!.getInstanceForCanvas(this, keyCode)!;;
    

    var input: Input = this.inputFactory!.getInstanceById(keyCode)!;;
    
this.processInputMapping(gameKey, input);
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Key Event Error", this, this.gameInputStrings!.ADD_KEY_EVENT, e);
    
}

}


                //@Throws(Exception.constructor)
            
    public processInputMapping(gameKey: GameKey, input: Input){

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Start Passed GameKey: ");
    
stringBuffer!.append(this.stringUtil!.toString(gameKey));
    
stringBuffer!.append(" Input: ");
    
stringBuffer!.append(this.stringUtil!.toString(input));
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.PROCESS);
    

                        if(this.selectedGameKey != this.NONE)
                        
                                    {
                                    this.gameActionCrud(gameKey, input);
    

                                    }
                                
                        else {
                            this.setSelectedAction(gameKey);
    

                        }
                            
}


    setSelectedAction(gameKey: GameKey){
this.logUtil!.putF(new StringMaker().append("Selected GameKey: ")!.append(this.stringUtil!.toString(gameKey))!.toString(), this, "setSelectedAction");
    
this.selectedGameKey= gameKey;
    
this.selectedInput= this.NONE;
    
this.helpPaintable!.update(this.selectedGameKey, this.selectedInput);
    
this.repaintBehavior!.onChangeRepaint(this);
    
}


                //@Throws(Exception.constructor)
            
    gameActionCrud(gameKey: GameKey, input: Input){

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Start GameKey: ");
    
stringBuffer!.append(this.stringUtil!.toString(this.selectedGameKey));
    
stringBuffer!.append(" Input: ");
    
stringBuffer!.append(this.stringUtil!.toString(this.selectedInput));
    
this.logUtil!.putF(stringBuffer!.toString(), this, "gameActionCrud");
    

                        if(this.selectedInput == this.NONE)
                        
                                    {
                                    
    var list: BasicArrayList = this.inputMapping!.getInputMapping()!.getMappedInput(this.selectedGameKey)!;;
    

    var isInputAlreadyMappedToSelectedAction: boolean = list.contains(input)!;;
    

                        if(isInputAlreadyMappedToSelectedAction)
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().append("Already Mapped Input: ")!.append(this.stringUtil!.toString(input))!.toString(), this, "gameActionCrud");
    
this.selectedInput= input;
    
this.helpPaintable!.update(this.selectedGameKey, this.selectedInput);
    
this.repaintBehavior!.onChangeRepaint(this);
    

                                    }
                                
                        else {
                            this.addNewMapping(gameKey, input);
    

                        }
                            

                                    }
                                
                             else 
                        if(this.inputMapping!.isDelete(input))
                        
                                    {
                                    this.deleteCurrentMapping();
    

                                    }
                                
                        else {
                            this.setSelectedAction(gameKey);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    addNewMapping(gameKey: GameKey, input: Input){

    var METHOD_NAME: string = "addNewMapping";;
    
this.logUtil!.putF(this.commonStrings!.START, this, METHOD_NAME);
    

    var isInputAlreadyMapped: boolean = this.inputMapping!.getInputMapping()!.isMapped(input)!;;
    

                        if(!isInputAlreadyMapped && !this.inputMapping!.isSystemInput(input))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Add Key Mapping : GameKey: ");
    
stringBuffer!.append(this.stringUtil!.toString(this.selectedGameKey));
    
stringBuffer!.append(" Input: ");
    
stringBuffer!.append(this.stringUtil!.toString(this.selectedInput));
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_NAME);
    
this.inputMapping!.getInputMapping()!.add(this.selectedGameKey, input);
    
this.selectedInput= input;
    
this.update();
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Unable to add Mapping since one already exists or is MENU, HOME, or BACK key and setting selected action to what it is already mapped to", this, METHOD_NAME);
    
this.setSelectedAction(gameKey);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    deleteCurrentMapping(){

    var METHOD_NAME: string = "deleteCurrentMapping";;
    

    var list: BasicArrayList = this.inputMapping!.getInputMapping()!.getMappedInput(this.selectedGameKey)!;;
    

                        if(list.size() > 1)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Start GameKey: ");
    
stringBuffer!.append("Remove Key Mapping: GameKey: ");
    
stringBuffer!.append(this.stringUtil!.toString(this.selectedGameKey));
    
stringBuffer!.append(" Input: ");
    
stringBuffer!.append(this.stringUtil!.toString(this.selectedInput));
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_NAME);
    
this.inputMapping!.getInputMapping()!.remove(this.selectedGameKey, this.selectedInput);
    
this.selectedInput= this.NONE;
    
this.update();
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Can't Remove Last Key Mapping", this, METHOD_NAME);
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public setDefault(){
this.inputMapping!.setDefault(this.abeClientInformation);
    
this.helpPaintable!.update(this.NONE, this.NONE);
    
this.repaintBehavior!.onChangeRepaint(this);
    
}


                //@Throws(Exception.constructor)
            
    public update(){
this.inputMapping!.update(this.abeClientInformation);
    
this.helpPaintable!.update(this.selectedGameKey, this.selectedInput);
    
this.repaintBehavior!.onChangeRepaint(this);
    
}


    public paint(graphics: Graphics){
this.colorFillPaintable!.paint(graphics);
    
this.helpPaintable!.paint(graphics);
    
this.paintable.paint(graphics);
    
super.paint(graphics);
    
}


}



