
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
        



import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { ChoiceGroup } from "../../../../../javax/microedition/lcdui/ChoiceGroup.js";

    
import { Item } from "../../../../../javax/microedition/lcdui/Item.js";

    
import { NullCanvas } from "../../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { GameConfigurationGauge } from "../../../../../org/allbinary/game/configuration/GameConfigurationGauge.js";

    
import { GameConfigurationUtil } from "../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js";

    
import { CommandForm } from "../../../../../org/allbinary/graphics/displayable/screen/CommandForm.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { HashtableUtil } from "../../../../../org/allbinary/util/HashtableUtil.js";

    

export class GameFeatureFormUtil
            extends Object
         {
        

    private static readonly instance: GameFeatureFormUtil = new GameFeatureFormUtil();
        
        

    public static getInstance(): GameFeatureFormUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public getChoiceGroup(hashtable: Hashtable<Any, Any>, name: string, option: number): ChoiceGroup{
var hashtable = hashtable
var name = name
var option = option

    var stringMaker: StringMaker = new StringMaker();
        
        


    var choiceGroup: ChoiceGroup = new ChoiceGroup(name, option);
        
        


    var list: BasicArrayList = hashtable.get(name as Object) as BasicArrayList;
        
        


    var features: Features = Features.getInstance()!;
        
        


    var ADD_CHOICE: string = ": Adding Choice: ";
        
        


    var GET_CHOICE_GROUP: string = "getChoiceGroup";
        
        


    var size: number = list.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var gameFeature: Feature = list.objectArray[index]! as Feature;
        
        

stringMaker!.delete(0, stringMaker!.length())
logUtil!.put(stringMaker!.append(name)!.append(ADD_CHOICE)!.append(gameFeature!.toString())!.toString(), this, GET_CHOICE_GROUP)
choiceGroup!.append(gameFeature!.toString(), NullCanvas.NULL_IMAGE)

                        if(features.isFeature(gameFeature))
                        
                                    {
                                    choiceGroup!.setSelectedIndex(index, true)

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return choiceGroup;
    
}


    public addChoiceGroup(form: CommandForm, hashtable: Hashtable<Any, Any>, option: number){
var form = form
var hashtable = hashtable
var option = option

    var stringMaker: StringMaker = new StringMaker();
        
        


    var ADDING_CHOICE_GROUP: string = "Adding Choice Group: ";
        
        


    var ADD_CHOICE_GROUP: string = "addChoiceGroup";
        
        


    var size: number = hashtable.length!;
        
        


    var objectArray: any = {}[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var name: string = objectArray[index]! as String;
        
        

stringMaker!.delete(0, stringMaker!.length())
logUtil!.put(stringMaker!.append(ADDING_CHOICE_GROUP)!.append(name)!.toString(), this, ADD_CHOICE_GROUP)
form.append(this.getChoiceGroup(hashtable, name, option))
}

}


                //@Throws(Error::class)
            
    public setDefault(form: CommandForm){
var form = form

    var size: number = form.size()!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item: Item = form.get(index)!;
        
        


                        if(item is GameConfigurationGauge)
                        
                                    {
                                    GameConfigurationUtil.getInstance()!.setDefault(item as GameConfigurationGauge)

                                    }
                                
                             else 
                        if(item is ChoiceGroup)
                        
                                    {
                                    GameFeatureUtil.getInstance()!.setDefault(item as ChoiceGroup)

                                    }
                                
}

}


}
                
            

