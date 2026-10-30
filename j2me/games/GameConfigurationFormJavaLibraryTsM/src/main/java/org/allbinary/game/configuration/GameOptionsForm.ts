
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
        
import { Choice, ChoiceI } from '../../../../javax/microedition/lcdui/Choice.js';
//not GWT import const Choice

import { Command } from '../../../../javax/microedition/lcdui/Command.js';
//not GWT import const Command

import { CommandListener } from '../../../../javax/microedition/lcdui/CommandListener.js';
//not GWT import const CommandListener

import { Item } from '../../../../javax/microedition/lcdui/Item.js';
//not GWT import const Item

import { TextField } from '../../../../javax/microedition/lcdui/TextField.js';
//not GWT import const TextField

import { GameCommandsFactory } from '../../../../org/allbinary/game/commands/GameCommandsFactory.js';
//not GWT import const GameCommandsFactory

import { GameFeatureChoiceGroups } from '../../../../org/allbinary/game/configuration/feature/GameFeatureChoiceGroups.js';
//not GWT import const GameFeatureChoiceGroups

import { GameFeatureFormUtil } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFormUtil.js';
//not GWT import const GameFeatureFormUtil

import { GameFeatureItemCommandListener } from '../../../../org/allbinary/game/configuration/feature/GameFeatureItemCommandListener.js';
//not GWT import const GameFeatureItemCommandListener

import { GameFeatureItemStateListener } from '../../../../org/allbinary/game/configuration/feature/GameFeatureItemStateListener.js';
//not GWT import const GameFeatureItemStateListener

import { SensorFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/SensorFeatureFactory.js';
//not GWT import const SensorFeatureFactory

import { GameConfigurationPersistanceSingleton } from '../../../../org/allbinary/game/configuration/persistance/GameConfigurationPersistanceSingleton.js';
//not GWT import const GameConfigurationPersistanceSingleton

import { KeyValuePersistance } from '../../../../org/allbinary/game/configuration/persistance/KeyValuePersistance.js';
//not GWT import const KeyValuePersistance

import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

import { MyCommandsFactory } from '../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
//not GWT import const MyCommandsFactory

import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
//not GWT import const CommandForm

import { OrientationData } from '../../../../org/allbinary/input/gyro/OrientationData.js';
//not GWT import const OrientationData

import { MEUtil } from '../../../../org/allbinary/logic/MEUtil.js';
//not GWT import const MEUtil

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
//not GWT import const AbeClientInformationInterface

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { HashtableUtil } 
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;
type HashtableUtil<T = any, U = any> = typeof HashtableUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof HashtableUtil;

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameConfigurationTextInput } from './GameConfigurationTextInput.js';
//sameFolderImports - not GWT import - same folder const GameConfigurationTextInput
import { GameConfigurationSingleton } from './GameConfigurationSingleton.js';
//sameFolderImports - not GWT import - same folder const GameConfigurationSingleton
import { GameConfiguration } from './GameConfiguration.js';
//sameFolderImports - not GWT import - same folder const GameConfiguration
import { GameConfigurationGauge } from './GameConfigurationGauge.js';
//sameFolderImports - not GWT import - same folder const GameConfigurationGauge
import { GameConfigurationUtil } from './GameConfigurationUtil.js';
//sameFolderImports - not GWT import - same folder const GameConfigurationUtil
import { GameConfigurationCentral } from './GameConfigurationCentral.js';
//sameFolderImports - not GWT import - same folder const GameConfigurationCentral

export class GameOptionsForm extends CommandForm {
        

    private readonly meUtil: MEUtil = MEUtil.getInstance()!;

public constructor (commandListener: CommandListener, title: string, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(commandListener, title, backgrounBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.addConfiguration();
    

    let gameFeatureFormUtil: GameFeatureFormUtil = GameFeatureFormUtil.getInstance()!;;
    
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

    let key: string = OrientationData.getInstance()!.ORIENTATION_SENSOR_INPUT;;
    

    let hashtable: ABHashtable<any, any> = GameFeatureChoiceGroups.getExclusiveInstance()!.get()!;;
    

                        if(hashtable != 
                                    null
                                )
                        
                                    {
                                    
    let listCanBeNull: any = hashtable.get(key);;
    

                        if(listCanBeNull != 
                                    null
                                )
                        
                                    {
                                    
    let list: BasicArrayList = listCanBeNull as BasicArrayList;;
    

                        if(list.contains(SensorFeatureFactory.getInstance()!.SIMULATED_ORIENTATION_SENSORS))
                        
                                    {
                                    this.addTextFields();
    

                                    }
                                

                                    }
                                

                                    }
                                
}


    addTextFields(){

    let hashtable: ABHashtable<any, any> = GameConfigurationTextInput.getHashtable()!;;
    

    let size: number = hashtable.size()!;;
    

    let objectArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;;
    

    let gameConfigurationTextInput: GameConfigurationTextInput;;
    

    let textField: TextField;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
gameConfigurationTextInput= hashtable.get(objectArray[index]!) as GameConfigurationTextInput;
    
textField= new TextField(gameConfigurationTextInput!.getLabel(), gameConfigurationTextInput!.getText(), 30, TextField.ANY);
    
this.meUtil!.appendItem(this, textField);
    
}

}


    addConfiguration(){

    let METHOD_NAME: string = "addConfiguration";;
    

    let NAME: string = "Name: ";;
    

    let list: BasicArrayList = GameConfigurationSingleton.getInstance()!.getOptionsBasicArrayList()!;;
    

    let GAUGE_CHANGE: Command = MyCommandsFactory.getInstance()!.GAUGE_CHANGE;;
    

    let stringMaker: StringMaker = new StringMaker();;
    

    let size: number = list.size()!;;
    

    let gameConfiguration: GameConfiguration;;
    

    let gauge: GameConfigurationGauge;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
gameConfiguration= list.objectArray[index]! as GameConfiguration;
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(NAME)!.append(gameConfiguration!.toString())!.toString(), this, METHOD_NAME);
    
gauge= new GameConfigurationGauge(gameConfiguration);
    
gauge.setDefaultCommand(GAUGE_CHANGE);
    
gauge.setItemCommandListener(new GameFeatureItemCommandListener(this));
    
this.meUtil!.appendItem(this, gauge);
    
}

}


    public initCommands(cmdListener: CommandListener){

    let gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;;
    
this.removeAllCommands();
    
this.addCommand(gameCommandsFactory!.CLOSE_OPTIONS);
    
this.addCommand(gameCommandsFactory!.DEFAULT_OPTIONS);
    
this.setCommandListener(cmdListener);
    
}


                //@Throws(Exception.constructor)
            
    public save(abeClientInformation: AbeClientInformationInterface){

    let size: number = this.size()!;;
    

    let item: Item;;
    




                        for (
    let index: number = 0;index < size; index++)
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
    

    let hashtable: ABHashtable<any, any> = StdUtil.getInstance()!.createHashtable()!;;
    

    let SCALE: GameConfiguration = GameConfigurationCentral.getInstance()!.SCALE;;
    
hashtable.put(SCALE.getName(), SCALE.getValue()!.toString());
    

    let keyValuePersistance: KeyValuePersistance = GameConfigurationPersistanceSingleton.getInstance()!;;
    
keyValuePersistance!.clear();
    
keyValuePersistance!.loadAll(abeClientInformation);
    

    let list: BasicArrayList = keyValuePersistance!.getIds()!;;
    
keyValuePersistance!.save(abeClientInformation, hashtable);
    

    let size2: number = list.size()!;;
    

    let integer: Integer;;
    




                        for (
    let index: number = 0;index < size2; index++)
        {
integer= list.objectArray[index]! as Integer;
    
keyValuePersistance!.delete(abeClientInformation, integer.intValue());
    
}

}


}

