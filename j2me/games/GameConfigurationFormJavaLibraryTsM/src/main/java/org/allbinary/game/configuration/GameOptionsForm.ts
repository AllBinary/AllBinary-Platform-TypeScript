
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { Choice } from "../../../../javax/microedition/lcdui/Choice.js";

    
import { Command } from "../../../../javax/microedition/lcdui/Command.js";

    
import { CommandListener } from "../../../../javax/microedition/lcdui/CommandListener.js";

    
import { Item } from "../../../../javax/microedition/lcdui/Item.js";

    
import { TextField } from "../../../../javax/microedition/lcdui/TextField.js";

    
import { GameCommandsFactory } from "../../../../org/allbinary/game/commands/GameCommandsFactory.js";

    
import { GameFeatureChoiceGroups } from "../../../../org/allbinary/game/configuration/feature/GameFeatureChoiceGroups.js";

    
import { GameFeatureFormUtil } from "../../../../org/allbinary/game/configuration/feature/GameFeatureFormUtil.js";

    
import { GameFeatureItemCommandListener } from "../../../../org/allbinary/game/configuration/feature/GameFeatureItemCommandListener.js";

    
import { GameFeatureItemStateListener } from "../../../../org/allbinary/game/configuration/feature/GameFeatureItemStateListener.js";

    
import { SensorFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/SensorFeatureFactory.js";

    
import { GameConfigurationPersistanceSingleton } from "../../../../org/allbinary/game/configuration/persistance/GameConfigurationPersistanceSingleton.js";

    
import { KeyValuePersistance } from "../../../../org/allbinary/game/configuration/persistance/KeyValuePersistance.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { MyCommandsFactory } from "../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js";

    
import { CommandForm } from "../../../../org/allbinary/graphics/displayable/screen/CommandForm.js";

    
import { OrientationData } from "../../../../org/allbinary/input/gyro/OrientationData.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeClientInformationInterface } from "../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { HashtableUtil } from "../../../../org/allbinary/util/HashtableUtil.js";

    

export class GameOptionsForm extends CommandForm {
        
public constructor (commandListener: CommandListener, title: string, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(commandListener, title, backgrounBasicColor, foregroundBasicColor){

            super();
                //var commandListener = commandListener
    //var title = title
    //var backgrounBasicColor = backgrounBasicColor
    //var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
logUtil!.put(commonStrings!.START, this, commonStrings!.CONSTRUCTOR)
this.this.addConfiguration()

    var gameFeatureFormUtil: GameFeatureFormUtil = GameFeatureFormUtil.getInstance()!;
        
        

gameFeatureFormUtil!.addChoiceGroup(this, GameFeatureChoiceGroups.getExclusiveInstance()!.get(), Choice.EXCLUSIVE)
gameFeatureFormUtil!.addChoiceGroup(this, GameFeatureChoiceGroups.getMultipleInstance()!.get(), Choice.MULTIPLE)
this.this.initCommands(commandListener)
this.this.setItemStateListener(GameFeatureItemStateListener(this))
this.this.addTextFieldsIfSimulated()
}


    public close(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation
super.close()
this.this.save(abeClientInformation)
}


    addTextFieldsIfSimulated(){

    var key: string = OrientationData.getInstance()!.ORIENTATION_SENSOR_INPUT;
        
        


    var hashtable: Hashtable<Any, Any> = GameFeatureChoiceGroups.getExclusiveInstance()!.get()!;
        
        


                        if(hashtable != 
                                    null
                                )
                        
                                    {
                                    
    var listCanBeNull: any = {}? = hashtable.get(key as Object);
        
        


                        if(listCanBeNull != 
                                    null
                                )
                        
                                    {
                                    
    var list: BasicArrayList = listCanBeNull as BasicArrayList;
        
        


                        if(list.contains(SensorFeatureFactory.getInstance()!.SIMULATED_ORIENTATION_SENSORS))
                        
                                    {
                                    this.this.addTextFields()

                                    }
                                

                                    }
                                

                                    }
                                
}


    addTextFields(){

    var hashtable: Hashtable<Any, Any> = GameConfigurationTextInput.getHashtable()!;
        
        


    var size: number = hashtable.length!;
        
        


    var objectArray: any = {}[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;
        
        


    var gameConfigurationTextInput: GameConfigurationTextInput


    var textField: TextField





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
gameConfigurationTextInput= hashtable.get(objectArray[index]! as Object) as GameConfigurationTextInput
textField= TextField(gameConfigurationTextInput!.getLabel(), gameConfigurationTextInput!.getText(), 30, TextField.ANY)
this.this.append(textField)
}

}


    addConfiguration(){

    var METHOD_NAME: string = "addConfiguration";
        
        


    var NAME: string = "Name: ";
        
        


    var list: BasicArrayList = GameConfigurationSingleton.getInstance()!.getOptionsBasicArrayList()!;
        
        


    var GAUGE_CHANGE: Command = MyCommandsFactory.getInstance()!.GAUGE_CHANGE;
        
        


    var stringMaker: StringMaker = new StringMaker();
        
        


    var size: number = list.size()!;
        
        


    var gameConfiguration: GameConfiguration


    var gauge: GameConfigurationGauge





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
gameConfiguration= list.objectArray[index]! as GameConfiguration
stringMaker!.delete(0, stringMaker!.length())
logUtil!.put(stringMaker!.append(NAME)!.append(gameConfiguration!.toString())!.toString(), this, METHOD_NAME)
gauge= GameConfigurationGauge(gameConfiguration)
gauge.setDefaultCommand(GAUGE_CHANGE)
gauge.setItemCommandListener(GameFeatureItemCommandListener(this))
this.this.append(gauge)
}

}


    public initCommands(cmdListener: CommandListener){
    //var cmdListener = cmdListener

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;
        
        

this.this.removeAllCommands()
this.this.addCommand(gameCommandsFactory!.CLOSE_OPTIONS)
this.this.addCommand(gameCommandsFactory!.DEFAULT_OPTIONS)
this.this.setCommandListener(cmdListener)
}


                //@Throws(Error::class)
            
    public save(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation

    var size: number = this.size()!;
        
        


    var item: Item





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
item= this.get(index)

                        if(item is GameConfigurationGauge)
                        
                                    {
                                    GameConfigurationUtil.getInstance()!.update(item as GameConfigurationGauge)

                                    }
                                
                             else 
                        if(item is TextField)
                        
                                    {
                                    GameConfigurationTextInput.update(item as TextField)

                                    }
                                
}

GameConfigurationUtil.getInstance()!.updateCompetitionValue()

    var hashtable: Hashtable<Any, Any> = new Hashtable<Any, Any>();
        
        


    var SCALE: GameConfiguration = GameConfigurationCentral.getInstance()!.SCALE;
        
        

hashtable.put(SCALE.getName(), SCALE.getValue()!.toString())

    var keyValuePersistance: KeyValuePersistance = GameConfigurationPersistanceSingleton.getInstance()!;
        
        

keyValuePersistance!.clear()
keyValuePersistance!.loadAll(abeClientInformation)

    var list: BasicArrayList = keyValuePersistance!.getIds()!;
        
        

keyValuePersistance!.save(abeClientInformation, hashtable)

    var size2: number = list.size()!;
        
        


    var integer: Integer





                        for (
    var index: number = 0;
        
        
index < size2; index++)
        {
integer= list.objectArray[index]! as Integer
keyValuePersistance!.delete(abeClientInformation, integer.toInt())
}

}


}
                
            

