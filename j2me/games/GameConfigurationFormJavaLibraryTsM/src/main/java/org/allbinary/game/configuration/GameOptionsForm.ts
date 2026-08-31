
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
        



            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Hashtable } from '../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
//not plain js import { Choice, ChoiceI } from '../../../../javax/microedition/lcdui/Choice.js';
      const Choice = globalThis.javax.microedition.lcdui.Choice;

      
//not plain js import { Command } from '../../../../javax/microedition/lcdui/Command.js';
      const Command = globalThis.javax.microedition.lcdui.Command;

      
//not plain js import { CommandListener } from '../../../../javax/microedition/lcdui/CommandListener.js';
      const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;

      
//not plain js import { Item } from '../../../../javax/microedition/lcdui/Item.js';
      const Item = globalThis.javax.microedition.lcdui.Item;

      
//not plain js import { TextField } from '../../../../javax/microedition/lcdui/TextField.js';
      const TextField = globalThis.javax.microedition.lcdui.TextField;

      
import { GameCommandsFactory } from '../../../../org/allbinary/game/commands/GameCommandsFactory.js';
      //not GWT import const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;

      
import { GameFeatureChoiceGroups } from '../../../../org/allbinary/game/configuration/feature/GameFeatureChoiceGroups.js';
      //not GWT import const GameFeatureChoiceGroups = globalThis.org.allbinary.game.configuration.feature.GameFeatureChoiceGroups;

      
import { GameFeatureFormUtil } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFormUtil.js';
      //not GWT import const GameFeatureFormUtil = globalThis.org.allbinary.game.configuration.feature.GameFeatureFormUtil;

      
import { GameFeatureItemCommandListener } from '../../../../org/allbinary/game/configuration/feature/GameFeatureItemCommandListener.js';
      //not GWT import const GameFeatureItemCommandListener = globalThis.org.allbinary.game.configuration.feature.GameFeatureItemCommandListener;

      
import { GameFeatureItemStateListener } from '../../../../org/allbinary/game/configuration/feature/GameFeatureItemStateListener.js';
      //not GWT import const GameFeatureItemStateListener = globalThis.org.allbinary.game.configuration.feature.GameFeatureItemStateListener;

      
import { SensorFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/SensorFeatureFactory.js';
      //not GWT import const SensorFeatureFactory = globalThis.org.allbinary.game.configuration.feature.SensorFeatureFactory;

      
import { GameConfigurationPersistanceSingleton } from '../../../../org/allbinary/game/configuration/persistance/GameConfigurationPersistanceSingleton.js';
      //not GWT import const GameConfigurationPersistanceSingleton = globalThis.org.allbinary.game.configuration.persistance.GameConfigurationPersistanceSingleton;

      
import { KeyValuePersistance } from '../../../../org/allbinary/game/configuration/persistance/KeyValuePersistance.js';
      //not GWT import const KeyValuePersistance = globalThis.org.allbinary.game.configuration.persistance.KeyValuePersistance;

      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      //not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { MyCommandsFactory } from '../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
      //not GWT import const MyCommandsFactory = globalThis.org.allbinary.graphics.displayable.command.MyCommandsFactory;

      
import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
      //not GWT import const CommandForm = globalThis.org.allbinary.graphics.displayable.screen.CommandForm;

      
import { OrientationData } from '../../../../org/allbinary/input/gyro/OrientationData.js';
      //not GWT import const OrientationData = globalThis.org.allbinary.input.gyro.OrientationData;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { HashtableUtil } from '../../../../org/allbinary/util/HashtableUtil.js';
      const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameConfigurationTextInput } from './GameConfigurationTextInput.js';
import { GameConfigurationSingleton } from './GameConfigurationSingleton.js';
import { GameConfiguration } from './GameConfiguration.js';
import { GameConfigurationGauge } from './GameConfigurationGauge.js';
import { GameConfigurationUtil } from './GameConfigurationUtil.js';
import { GameConfigurationCentral } from './GameConfigurationCentral.js';

export class GameOptionsForm extends CommandForm {
        

public constructor (commandListener: CommandListener, title: string, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(commandListener, title, backgrounBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.addConfiguration();
    

    var gameFeatureFormUtil: GameFeatureFormUtil = GameFeatureFormUtil.getInstance()!;;
    
gameFeatureFormUtil!.addChoiceGroup(this, GameFeatureChoiceGroups.getExclusiveInstance()!.get(), ChoiceI.EXCLUSIVE);
    
gameFeatureFormUtil!.addChoiceGroup(this, GameFeatureChoiceGroups.getMultipleInstance()!.get(), ChoiceI.MULTIPLE);
    
this.initCommands(commandListener);
    
this.setItemStateListener(new GameFeatureItemStateListener(this));
    
this.addTextFieldsIfSimulated();
    
}


                //@Throws(Exception.constructor)
            
    public closeClientInformation(abeClientInformation: AbeClientInformationInterface){
super.close();
    
this.save(abeClientInformation);
    
}


    addTextFieldsIfSimulated(){

    var key: string = OrientationData.getInstance()!.ORIENTATION_SENSOR_INPUT;;
    

    var hashtable: Hashtable<any, any> = GameFeatureChoiceGroups.getExclusiveInstance()!.get()!;;
    

                        if(hashtable != 
                                    null
                                )
                        
                                    {
                                    
    var listCanBeNull: any = hashtable.get(key);;
    

                        if(listCanBeNull != 
                                    null
                                )
                        
                                    {
                                    
    var list: BasicArrayList = listCanBeNull as BasicArrayList;;
    

                        if(list.contains(SensorFeatureFactory.getInstance()!.SIMULATED_ORIENTATION_SENSORS))
                        
                                    {
                                    this.addTextFields();
    

                                    }
                                

                                    }
                                

                                    }
                                
}


    addTextFields(){

    var hashtable: Hashtable<any, any> = GameConfigurationTextInput.getHashtable()!;;
    

    var size: number = hashtable.length!;;
    

    var objectArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;;
    

    var gameConfigurationTextInput: GameConfigurationTextInput;;
    

    var textField: TextField;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
gameConfigurationTextInput= hashtable.get(objectArray[index]!) as GameConfigurationTextInput;
    
textField= new TextField(gameConfigurationTextInput!.getLabel(), gameConfigurationTextInput!.getText(), 30, TextField.ANY);
    
this.append(textField);
    
}

}


    addConfiguration(){

    var METHOD_NAME: string = "addConfiguration";;
    

    var NAME: string = "Name: ";;
    

    var list: BasicArrayList = GameConfigurationSingleton.getInstance()!.getOptionsBasicArrayList()!;;
    

    var GAUGE_CHANGE: Command = MyCommandsFactory.getInstance()!.GAUGE_CHANGE;;
    

    var stringMaker: StringMaker = new StringMaker();;
    

    var size: number = list.size()!;;
    

    var gameConfiguration: GameConfiguration;;
    

    var gauge: GameConfigurationGauge;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
gameConfiguration= list.objectArray[index]! as GameConfiguration;
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(NAME)!.append(gameConfiguration!.toString())!.toString(), this, METHOD_NAME);
    
gauge= new GameConfigurationGauge(gameConfiguration);
    
gauge.setDefaultCommand(GAUGE_CHANGE);
    
gauge.setItemCommandListener(new GameFeatureItemCommandListener(this));
    
this.append(gauge);
    
}

}


    public initCommands(cmdListener: CommandListener){

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;;
    
this.removeAllCommands();
    
this.addCommand(gameCommandsFactory!.CLOSE_OPTIONS);
    
this.addCommand(gameCommandsFactory!.DEFAULT_OPTIONS);
    
this.setCommandListener(cmdListener);
    
}


                //@Throws(Exception.constructor)
            
    public save(abeClientInformation: AbeClientInformationInterface){

    var size: number = this.size()!;;
    

    var item: Item;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
item= this.get(index);
    

                        if(item instanceof GameConfigurationGauge)
                        
                                    {
                                    GameConfigurationUtil.getInstance()!.update(item as GameConfigurationGauge);
    

                                    }
                                
                             else 
                        if(item instanceof TextField)
                        
                                    {
                                    GameConfigurationTextInput.update(item as TextField);
    

                                    }
                                
}

GameConfigurationUtil.getInstance()!.updateCompetitionValue();
    

    var hashtable: Hashtable<any, any> = new Hashtable<any, any>();;
    

    var SCALE: GameConfiguration = GameConfigurationCentral.getInstance()!.SCALE;;
    
hashtable.put(SCALE.getName(), SCALE.getValue()!.toString());
    

    var keyValuePersistance: KeyValuePersistance = GameConfigurationPersistanceSingleton.getInstance()!;;
    
keyValuePersistance!.clear();
    
keyValuePersistance!.loadAll(abeClientInformation);
    

    var list: BasicArrayList = keyValuePersistance!.getIds()!;;
    
keyValuePersistance!.save(abeClientInformation, hashtable);
    

    var size2: number = list.size()!;;
    

    var integer: Integer;;
    




                        for (
    var index: number = 0;index < size2; index++)
        {
integer= list.objectArray[index]! as Integer;
    
keyValuePersistance!.delete(abeClientInformation, integer.intValue());
    
}

}


}



