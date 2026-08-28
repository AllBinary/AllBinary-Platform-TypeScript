
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
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not game specific package import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not game specific package import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
      const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;

      
//not game specific package import { GameKey } from '../../../../../org/allbinary/game/input/GameKey.js';
      const GameKey = globalThis.org.allbinary.game.input.GameKey;

      
//not game specific package import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
      const GameKeyFactory = globalThis.org.allbinary.game.input.GameKeyFactory;

      
//not game specific package import { Input } from '../../../../../org/allbinary/game/input/Input.js';
      const Input = globalThis.org.allbinary.game.input.Input;

      
//not game specific package import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
      const InputFactory = globalThis.org.allbinary.game.input.InputFactory;

      
//not game specific package import { PlatformInputMappingFactory } from '../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
      const PlatformInputMappingFactory = globalThis.org.allbinary.game.input.PlatformInputMappingFactory;

      
//not game specific package import { InputMappingInterface } from '../../../../../org/allbinary/game/input/mapping/InputMappingInterface.js';
      const InputMappingInterface = globalThis.org.allbinary.game.input.mapping.InputMappingInterface;

      
//not game specific package import { PersistentInputMapping } from '../../../../../org/allbinary/game/input/mapping/PersistentInputMapping.js';
      const PersistentInputMapping = globalThis.org.allbinary.game.input.mapping.PersistentInputMapping;

      
//not game specific package import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
//not game specific package import { ColorFillBasePaintable } from '../../../../../org/allbinary/game/paint/ColorFillBasePaintable.js';
      const ColorFillBasePaintable = globalThis.org.allbinary.game.paint.ColorFillBasePaintable;

      
//not game specific package import { ColorFillPaintableFactory } from '../../../../../org/allbinary/game/paint/ColorFillPaintableFactory.js';
      const ColorFillPaintableFactory = globalThis.org.allbinary.game.paint.ColorFillPaintableFactory;

      
//not game specific package import { HelpPaintable } from '../../../../../org/allbinary/game/paint/help/HelpPaintable.js';
      const HelpPaintable = globalThis.org.allbinary.game.paint.help.HelpPaintable;

      
//not game specific package import { InputMappingHelpPaintable } from '../../../../../org/allbinary/game/paint/help/InputMappingHelpPaintable.js';
      const InputMappingHelpPaintable = globalThis.org.allbinary.game.paint.help.InputMappingHelpPaintable;

      
//not game specific package import { ProcessPaintable } from '../../../../../org/allbinary/graphics/paint/ProcessPaintable.js';
      const ProcessPaintable = globalThis.org.allbinary.graphics.paint.ProcessPaintable;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameCommandCanvas } from './GameCommandCanvas.js';
import { GameInputMappingInstructionsCanvas } from './GameInputMappingInstructionsCanvas.js';

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



