
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

    
import { GameCommandsFactory } from "../../../../../org/allbinary/game/commands/GameCommandsFactory.js";

    
import { GameKey } from "../../../../../org/allbinary/game/input/GameKey.js";

    
import { GameKeyFactory } from "../../../../../org/allbinary/game/input/GameKeyFactory.js";

    
import { Input } from "../../../../../org/allbinary/game/input/Input.js";

    
import { InputFactory } from "../../../../../org/allbinary/game/input/InputFactory.js";

    
import { PlatformInputMappingFactory } from "../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js";

    
import { InputMappingInterface } from "../../../../../org/allbinary/game/input/mapping/InputMappingInterface.js";

    
import { InputToGameKeyMapping } from "../../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js";

    
import { PersistentInputMapping } from "../../../../../org/allbinary/game/input/mapping/PersistentInputMapping.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { ColorFillBasePaintable } from "../../../../../org/allbinary/game/paint/ColorFillBasePaintable.js";

    
import { ColorFillPaintableFactory } from "../../../../../org/allbinary/game/paint/ColorFillPaintableFactory.js";

    
import { HelpPaintable } from "../../../../../org/allbinary/game/paint/help/HelpPaintable.js";

    
import { InputMappingHelpPaintable } from "../../../../../org/allbinary/game/paint/help/InputMappingHelpPaintable.js";

    
import { ProcessPaintable } from "../../../../../org/allbinary/graphics/paint/ProcessPaintable.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeClientInformationInterface } from "../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class GameInputMappingCanvas extends GameCommandCanvas
                , InputMappingInterface {
        

    public static readonly NAME: string = "GameInputMappingCanvas";
        
        

    public static readonly DISPLAY: Command = new Command("Controls", Command.SCREEN, 2);
        
        

    public static readonly DEFAULT: Command = new Command("Default", Command.SCREEN, 2);
        
        

    private readonly paintable: ProcessPaintable

    private readonly helpPaintable: InputMappingHelpPaintable

    readonly colorFillPaintable: ColorFillBasePaintable

    private readonly inputMapping: PersistentInputMapping

    private readonly inputToGameKeyMapping: InputToGameKeyMapping = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping()!;
        
        

    private readonly NONE: GameKey = GameKeyFactory.getInstance()!.NONE;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface

    private selectedGameKey: GameKey = NONE;
        
        

    private selectedInput: Input = NONE;
        
        
public constructor (abeClientInformation: AbeClientInformationInterface, commandListener: CommandListener, allBinaryGameLayerManager: AllBinaryGameLayerManager, helpPaintable: HelpPaintable)                        

                            : super(commandListener, NAME, allBinaryGameLayerManager!.getBackgroundBasicColor(), allBinaryGameLayerManager!.getForegroundBasicColor()){

            super();
                //var abeClientInformation = abeClientInformation
    //var commandListener = commandListener
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
    //var helpPaintable = helpPaintable


                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    

                        if(helpPaintable == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Error("Help Paintable Exception")

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
    
this.selectedGameKey= NONE;
    
this.selectedInput= NONE;
    
this.update();
    
}


    public initCommands(cmdListener: CommandListener){
var cmdListener = cmdListener
this.removeAllCommands();
    
this.addCommand(GameCommandsFactory.getInstance()!.CLOSE_AND_SHOW_GAME_CANVAS);
    
this.addCommand(GameInputMappingCanvas.DEFAULT);
    
this.addCommand(GameInputMappingInstructionsCanvas.DISPLAY);
    
this.setCommandListener(cmdListener);
    
}


    public keyPressed(keyCode: number){
var keyCode = keyCode
this.keyPressed(keyCode, 0);
    
}


    public keyReleased(keyCode: number){
var keyCode = keyCode
this.keyReleased(keyCode, 0);
    
}


    public keyRepeated(keyCode: number){
var keyCode = keyCode
this.keyRepeated(keyCode, 0);
    
}


    public keyPressed(keyCode: number, deviceId: number){
var keyCode = keyCode
var deviceId = deviceId
this.addGameKeyEvent(keyCode, false);
    
super.keyPressed(keyCode, 0);
    
}


    private readonly inputFactory: InputFactory = InputFactory.getInstance()!;
        
        

    addGameKeyEvent(keyCode: number, repeated: boolean){
var keyCode = keyCode
var repeated = repeated

        try {
            this.logUtil!.putF(new StringMaker().
                            append("Raw Device Key Code: ")!.append(Integer.toHexString(keyCode))!.toString(), this, this.gameInputStrings!.ADD_KEY_EVENT);
    

    var gameKey: GameKey = this.inputToGameKeyMapping!.getInstance(this, keyCode)!;
        
        
;
    

    var input: Input = inputFactory!.getInstance(keyCode)!;
        
        
;
    
this.process(gameKey, input);
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Key Event Error", this, this.gameInputStrings!.ADD_KEY_EVENT, e);
    
}

}


                //@Throws(Error::class)
            
    public process(gameKey: GameKey, input: Input){
    //var gameKey = gameKey
    //var input = input

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Start Passed GameKey: ");
    
stringBuffer!.append(this.stringUtil!.toString(gameKey));
    
stringBuffer!.append(" Input: ");
    
stringBuffer!.append(this.stringUtil!.toString(input));
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.PROCESS);
    

                        if(this.selectedGameKey != NONE)
                        
                                    {
                                    this.gameActionCrud(gameKey, input);
    

                                    }
                                
                        else {
                            this.setSelectedAction(gameKey);
    

                        }
                            
}


    setSelectedAction(gameKey: GameKey){
var gameKey = gameKey
this.logUtil!.putF(new StringMaker().
                            append("Selected GameKey: ")!.append(this.stringUtil!.toString(gameKey))!.toString(), this, "setSelectedAction");
    
this.selectedGameKey= gameKey;
    
this.selectedInput= NONE;
    
this.helpPaintable!.update(this.selectedGameKey, this.selectedInput);
    
this.repaintBehavior!.onChangeRepaint(this);
    
}


                //@Throws(Error::class)
            
    gameActionCrud(gameKey: GameKey, input: Input){
    //var gameKey = gameKey
    //var input = input

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Start GameKey: ");
    
stringBuffer!.append(this.stringUtil!.toString(this.selectedGameKey));
    
stringBuffer!.append(" Input: ");
    
stringBuffer!.append(this.stringUtil!.toString(this.selectedInput));
    
this.logUtil!.putF(stringBuffer!.toString(), this, "gameActionCrud");
    

                        if(this.selectedInput == NONE)
                        
                                    {
                                    
    var list: BasicArrayList = inputMapping!.getInputMapping()!.getMappedInput(this.selectedGameKey)!;
        
        
;
    

    var isInputAlreadyMappedToSelectedAction: boolean = list.contains(input)!;
        
        
;
    

                        if(isInputAlreadyMappedToSelectedAction)
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().
                            append("Already Mapped Input: ")!.append(this.stringUtil!.toString(input))!.toString(), this, "gameActionCrud");
    
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


                //@Throws(Error::class)
            
    addNewMapping(gameKey: GameKey, input: Input){
    //var gameKey = gameKey
    //var input = input

    var METHOD_NAME: string = "addNewMapping";
        
        
;
    
this.logUtil!.putF(commonStrings!.START, this, METHOD_NAME);
    

    var isInputAlreadyMapped: boolean = inputMapping!.getInputMapping()!.isMapped(input)!;
        
        
;
    

                        if(!isInputAlreadyMapped && !this.inputMapping!.isSystemInput(input);

                        )
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Add Key Mapping : GameKey: ");
    
stringBuffer!.append(this.stringUtil!.toString(this.selectedGameKey));
    
stringBuffer!.append(" Input: ");
    
stringBuffer!.append(this.stringUtil!.toString(this.selectedInput));
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_NAME);
    
inputMapping!.getInputMapping()!.add(this.selectedGameKey, input);
    
this.selectedInput= input;
    
this.update();
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Unable to add Mapping since one already exists or is MENU, HOME, or BACK key and setting selected action to what it is already mapped to", this, METHOD_NAME);
    
this.setSelectedAction(gameKey);
    

                        }
                            
}


                //@Throws(Error::class)
            
    deleteCurrentMapping(){

    var METHOD_NAME: string = "deleteCurrentMapping";
        
        
;
    

    var list: BasicArrayList = inputMapping!.getInputMapping()!.getMappedInput(this.selectedGameKey)!;
        
        
;
    

                        if(list.size() > 1)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("Start GameKey: ");
    
stringBuffer!.append("Remove Key Mapping: GameKey: ");
    
stringBuffer!.append(stringUtil!.toString(this.selectedGameKey));
    
stringBuffer!.append(" Input: ");
    
stringBuffer!.append(stringUtil!.toString(this.selectedInput));
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_NAME);
    
inputMapping!.getInputMapping()!.remove(this.selectedGameKey, this.selectedInput);
    
this.selectedInput= NONE;
    
this.update();
    

                                    }
                                
                        else {
                            this.logUtil!.putF("Can't Remove Last Key Mapping", this, METHOD_NAME);
    

                        }
                            
}


                //@Throws(Error::class)
            
    public setDefault(){
inputMapping!.setDefault(abeClientInformation);
    
this.helpPaintable!.update(NONE, NONE);
    
this.repaintBehavior!.onChangeRepaint(this);
    
}


                //@Throws(Error::class)
            
    public update(){
inputMapping!.update(abeClientInformation);
    
this.helpPaintable!.update(this.selectedGameKey, this.selectedInput);
    
this.repaintBehavior!.onChangeRepaint(this);
    
}


    public paint(graphics: Graphics){
var graphics = graphics
this.colorFillPaintable!.paint(graphics);
    
this.helpPaintable!.paint(graphics);
    
this.paintable.paint(graphics);
    
super.paint(graphics);
    
}


}
                
            

