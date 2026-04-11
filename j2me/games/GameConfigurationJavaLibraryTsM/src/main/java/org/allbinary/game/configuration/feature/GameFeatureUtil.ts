
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
        



            import Hashtable from "@ohos.util.HashMap";
        
import { Enumeration } from "../../../../../java/util/Enumeration.js";

    

//import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { ChoiceGroup } from "../../../../../javax/microedition/lcdui/ChoiceGroup.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { HashtableUtil } from "../../../../../org/allbinary/util/HashtableUtil.js";

    

export class GameFeatureUtil
            extends Object
         {
        

    private static readonly instance: GameFeatureUtil = new GameFeatureUtil();
        
        

    public static getInstance(): GameFeatureUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly ON_GAME_FEATURE_CHANGE: string = "onGameFeatureChange";
        
        

    public readonly GAME_FEATURE_CHANGED: string = "Game Feature Changed: ";
        
        

                //@Throws(Error::class)
            
    public setDefault(choiceGroup: ChoiceGroup){
var choiceGroup = choiceGroup

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var METHOD_NAME: string = "setDefault";
        
        
;
    

    var SELECTED_ARRAY_RETURN: string = "selectedArray_return[";
        
        
;
    

    var SELECTED_SEP: string = "] = ";
        
        
;
    

    var selectedArray_return: boolean[] = new Array(choiceGroup!.size());
        
        
;
    

    var total: number = choiceGroup!.getSelectedFlags(selectedArray_return)!;
        
        
;
    
stringBuffer!.append("Multiple Total Choices: ");
    
stringBuffer!.appendint(total);
    
logUtil!.put(stringBuffer!.toString(), this, METHOD_NAME);
    

    var features: Features = Features.getInstance()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < selectedArray_return!.length; index++)
        {

    var isSelected: boolean = selectedArray_return[index]!;
        
        
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(SELECTED_ARRAY_RETURN);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(SELECTED_SEP);
    
stringBuffer!.appendboolean(isSelected);
    
logUtil!.put(stringBuffer!.toString(), this, METHOD_NAME);
    

    var selectedChoiceLabel: string = choiceGroup!.getString(index)!;
        
        
;
    

    var gameFeature: Feature = Feature.getInstance(selectedChoiceLabel)!;
        
        
;
    

                        if(features.isDefault(gameFeature))
                        
                                    {
                                    features.add(gameFeature);
    
choiceGroup!.setSelectedIndex(index, true);
    

                                    }
                                
                        else {
                            features.remove(gameFeature);
    
choiceGroup!.setSelectedIndex(index, false);
    

                        }
                            
}

}


                //@Throws(Error::class)
            
    public updateMultiple(choiceGroup: ChoiceGroup){
var choiceGroup = choiceGroup

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var METHOD_NAME: string = "updateMultiple";
        
        
;
    

    var SELECTED_ARRAY_RETURN: string = "selectedArray_return[";
        
        
;
    

    var SELECTED_SEP: string = "] = ";
        
        
;
    

    var selectedArray_return: boolean[] = new Array(choiceGroup!.size());
        
        
;
    

    var total: number = choiceGroup!.getSelectedFlags(selectedArray_return)!;
        
        
;
    
stringBuffer!.append("Multiple Total Choices: ");
    
stringBuffer!.appendint(total);
    
logUtil!.put(stringBuffer!.toString(), this, METHOD_NAME);
    

    var features: Features = Features.getInstance()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < selectedArray_return!.length; index++)
        {

    var isSelected: boolean = selectedArray_return[index]!;
        
        
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(SELECTED_ARRAY_RETURN);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(SELECTED_SEP);
    
stringBuffer!.appendboolean(isSelected);
    
logUtil!.put(stringBuffer!.toString(), this, METHOD_NAME);
    

    var selectedChoiceLabel: string = choiceGroup!.getString(index)!;
        
        
;
    

    var gameFeature: Feature = Feature.getInstance(selectedChoiceLabel)!;
        
        
;
    

                        if(!isSelected && features.isFeature(gameFeature))
                        
                                    {
                                    features.remove(gameFeature);
    

                                    }
                                
                             else 
                        if(isSelected && !features.isFeature(gameFeature);

                        )
                        
                                    {
                                    features.add(gameFeature);
    

                                    }
                                
}

}


                //@Throws(Error::class)
            
    public updateExclusive(choiceGroup: ChoiceGroup){
var choiceGroup = choiceGroup

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var METHOD_NAME: string = "updateExclusive";
        
        
;
    

    var SELECTED_ARRAY_RETURN: string = "selectedArray_return[";
        
        
;
    

    var SELECTED_SEP: string = "] = ";
        
        
;
    

    var selectedArray_return: boolean[] = new Array(choiceGroup!.size());
        
        
;
    

    var total: number = choiceGroup!.getSelectedFlags(selectedArray_return)!;
        
        
;
    
stringBuffer!.append("Exclusive Total Choices: 1==");
    
stringBuffer!.appendint(total);
    
logUtil!.put(stringBuffer!.toString(), this, METHOD_NAME);
    




                        for (
    var index: number = 0;
        
        
index < selectedArray_return!.length; index++)
        {

    var isSelected: boolean = selectedArray_return[index]!;
        
        
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(SELECTED_ARRAY_RETURN);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(SELECTED_SEP);
    
stringBuffer!.appendboolean(isSelected);
    
logUtil!.put(stringBuffer!.toString(), this, METHOD_NAME);
    

                        if(isSelected)
                        
                                    {
                                    
    var selectedChoiceLabel: string = choiceGroup!.getString(index)!;
        
        
;
    
updateExclusive(selectedChoiceLabel);
    

                                    }
                                
}

}


    public isExclusive(itemLabel: string): boolean{
var itemLabel = itemLabel

    var enumeration: Enumeration<any?> = GameFeatureChoiceGroups.getExclusiveInstance()!.get()!.keys()!;
        
        
;
    

        while(enumeration.hasMoreElements())
        {

    var name: string = enumeration.nextElement()!;

                         as String;
        
        
;
    

                        if(itemLabel!.compareTo(name) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    updateExclusive(selectedChoiceLabel: string){
    //var selectedChoiceLabel = selectedChoiceLabel
logUtil!.put(StringMaker().
                            append(CommonLabels.getInstance()!.ITEM_LABEL)!.append(selectedChoiceLabel)!.toString(), this, "updateExclusive");
    

    var gameFeature: Feature = Feature.getInstance(selectedChoiceLabel)!;
        
        
;
    

    var hashtable: Hashtable<any, any> = GameFeatureChoiceGroups.getExclusiveInstance()!.get()!;
        
        
;
    

    var objectArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;
        
        
;
    

    var basicArrayList: BasicArrayList
;
    

    var anyType: any = {}
;
    

    var size: number = objectArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
anyType= objectArray[index]! as Object;
    
basicArrayList= hashtable.get(anyType as Object);

                         as BasicArrayList;
    
updateExclusive(gameFeature, basicArrayList);
    
}

}


                //@Throws(Error::class)
            
    public updateExclusive(gameFeature: Feature, list: BasicArrayList){
var gameFeature = gameFeature
var list = list

                        if(list.contains(gameFeature))
                        
                                    {
                                    
    var features: Features = Features.getInstance()!;
        
        
;
    

    var addIndex: number = list.indexOf(gameFeature)!;
        
        
;
    

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

                        if(addIndex != index)
                        
                                    {
                                    features.remove(list.objectArray[index]! as Feature);
    

                                    }
                                
                        else {
                            features.add(list.objectArray[index]! as Feature);
    

                        }
                            
}


                                    }
                                
}


}
                
            

