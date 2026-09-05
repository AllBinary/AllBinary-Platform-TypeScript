
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Enumeration } from '../../../../../java/util/Enumeration.js';
//not GWT import const Enumeration = globalThis.java.util.Enumeration;

      
//not plain js import { ChoiceGroup } 
const ChoiceGroup = globalThis.javax.microedition.lcdui.ChoiceGroup;

      
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { EnumerationUtil } 
const EnumerationUtil = globalThis.org.allbinary.util.EnumerationUtil;

      
//not plain js import { HashtableUtil } 
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Features } from './Features.js';
//not GWT import - same folder const Features = globalThis.org.allbinary.game.configuration.feature.Features;

                import { Feature } from './Feature.js';
//not GWT import - same folder const Feature = globalThis.org.allbinary.game.configuration.feature.Feature;

                import { GameFeatureChoiceGroups } from './GameFeatureChoiceGroups.js';
//not GWT import - same folder const GameFeatureChoiceGroups = globalThis.org.allbinary.game.configuration.feature.GameFeatureChoiceGroups;

                
export class GameFeatureUtil
            extends Object
         {
        

    private static readonly instance: GameFeatureUtil = new GameFeatureUtil();

    public static getInstance(): GameFeatureUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameFeatureUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly tsUtil: TsUtil = TsUtil.getInstance()!;

    private readonly enumerationUtil: EnumerationUtil = EnumerationUtil.getInstance()!;

    public readonly ON_GAME_FEATURE_CHANGE: string = "onGameFeatureChange";

    public readonly GAME_FEATURE_CHANGED: string = "Game Feature Changed: ";

                //@Throws(Exception.constructor)
            
    public setDefault(choiceGroup: ChoiceGroup){

    var stringBuffer: StringMaker = new StringMaker();;
    

    var METHOD_NAME: string = "setDefault";;
    

    var SELECTED_ARRAY_RETURN: string = "selectedArray_return[";;
    

    var SELECTED_SEP: string = "] = ";;
    

    var selectedArray_return: boolean[] = new Array(choiceGroup!.size());;
    

    var total: number = choiceGroup!.getSelectedFlags(selectedArray_return)!;;
    
stringBuffer!.append("Multiple Total Choices: ");
    
stringBuffer!.appendint(total);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_NAME);
    

    var features: Features = Features.getInstance()!;;
    




                        for (
    var index: number = 0;index < selectedArray_return!.length; index++)
        {

    var isSelected: boolean = selectedArray_return[index]!;;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(SELECTED_ARRAY_RETURN);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(SELECTED_SEP);
    
stringBuffer!.appendboolean(isSelected);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_NAME);
    

    var selectedChoiceLabel: string = choiceGroup!.getString(index)!;;
    

    var gameFeature: Feature = Feature.getInstance(selectedChoiceLabel)!;;
    

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


                //@Throws(Exception.constructor)
            
    public updateMultiple(choiceGroup: ChoiceGroup){

    var stringBuffer: StringMaker = new StringMaker();;
    

    var METHOD_NAME: string = "updateMultiple";;
    

    var SELECTED_ARRAY_RETURN: string = "selectedArray_return[";;
    

    var SELECTED_SEP: string = "] = ";;
    

    var selectedArray_return: boolean[] = new Array(choiceGroup!.size());;
    

    var total: number = choiceGroup!.getSelectedFlags(selectedArray_return)!;;
    
stringBuffer!.append("Multiple Total Choices: ");
    
stringBuffer!.appendint(total);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_NAME);
    

    var features: Features = Features.getInstance()!;;
    




                        for (
    var index: number = 0;index < selectedArray_return!.length; index++)
        {

    var isSelected: boolean = selectedArray_return[index]!;;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(SELECTED_ARRAY_RETURN);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(SELECTED_SEP);
    
stringBuffer!.appendboolean(isSelected);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_NAME);
    

    var selectedChoiceLabel: string = choiceGroup!.getString(index)!;;
    

    var gameFeature: Feature = Feature.getInstance(selectedChoiceLabel)!;;
    

                        if(!isSelected && features.isFeature(gameFeature))
                        
                                    {
                                    features.remove(gameFeature);
    

                                    }
                                
                             else 
                        if(isSelected && !features.isFeature(gameFeature))
                        
                                    {
                                    features.add(gameFeature);
    

                                    }
                                
}

}


                //@Throws(Exception.constructor)
            
    public updateExclusiveForChoiceGroup(choiceGroup: ChoiceGroup){

    var stringBuffer: StringMaker = new StringMaker();;
    

    var METHOD_NAME: string = "updateExclusive";;
    

    var SELECTED_ARRAY_RETURN: string = "selectedArray_return[";;
    

    var SELECTED_SEP: string = "] = ";;
    

    var selectedArray_return: boolean[] = new Array(choiceGroup!.size());;
    

    var total: number = choiceGroup!.getSelectedFlags(selectedArray_return)!;;
    
stringBuffer!.append("Exclusive Total Choices: 1==");
    
stringBuffer!.appendint(total);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_NAME);
    




                        for (
    var index: number = 0;index < selectedArray_return!.length; index++)
        {

    var isSelected: boolean = selectedArray_return[index]!;;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(SELECTED_ARRAY_RETURN);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(SELECTED_SEP);
    
stringBuffer!.appendboolean(isSelected);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_NAME);
    

                        if(isSelected)
                        
                                    {
                                    
    var selectedChoiceLabel: string = choiceGroup!.getString(index)!;;
    
this.updateExclusive(selectedChoiceLabel);
    

                                    }
                                
}

}


    public isExclusive(itemLabel: string): boolean{

    var enumeration: Enumeration<any> = GameFeatureChoiceGroups.getExclusiveInstance()!.get()!.keys()!;;
    

    var name: string;;
    

        while(this.enumerationUtil!.hasMoreElements(enumeration))
        {
name= this.enumerationUtil!.nextElement(enumeration)! as string;
    

                        if(this.tsUtil!.compareTo(itemLabel, name) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    updateExclusive(selectedChoiceLabel: string){
this.logUtil!.putF(new StringMaker().append(CommonLabels.getInstance()!.ITEM_LABEL)!.append(selectedChoiceLabel)!.toString(), this, "updateExclusive");
    

    var gameFeature: Feature = Feature.getInstance(selectedChoiceLabel)!;;
    

    var hashtable: ABHashtable = GameFeatureChoiceGroups.getExclusiveInstance()!.get()!;;
    

    var objectArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;;
    

    var basicArrayList: BasicArrayList;;
    

    var anyType: any;;
    

    var size: number = objectArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
anyType= objectArray[index]!;
    
basicArrayList= hashtable.get(anyType) as BasicArrayList;
    
this.updateExclusiveList(gameFeature, basicArrayList);
    
}

}


                //@Throws(Exception.constructor)
            
    public updateExclusiveList(gameFeature: Feature, list: BasicArrayList){

                        if(list.contains(gameFeature))
                        
                                    {
                                    
    var features: Features = Features.getInstance()!;;
    

    var addIndex: number = list.indexOf(gameFeature)!;;
    

    var size: number = list.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
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



