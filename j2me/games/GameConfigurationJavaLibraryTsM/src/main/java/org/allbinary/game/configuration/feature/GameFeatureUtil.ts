
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
//not GWT import const Enumeration

import { ChoiceGroup } from '../../../../../javax/microedition/lcdui/ChoiceGroup.js';
//not GWT import const ChoiceGroup

import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { EnumerationUtil } 
const EnumerationUtil = globalThis.org.allbinary.util.EnumerationUtil;
type EnumerationUtil<T = any, U = any> = typeof EnumerationUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof EnumerationUtil;

//not plain js import { HashtableUtil } 
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;
type HashtableUtil<T = any, U = any> = typeof HashtableUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof HashtableUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Features } from './Features.js';
//not GWT import - same folder const Features
import { Feature } from './Feature.js';
//not GWT import - same folder const Feature
import { GameFeatureChoiceGroups } from './GameFeatureChoiceGroups.js';
//not GWT import - same folder const GameFeatureChoiceGroups

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

    let stringBuffer: StringMaker = new StringMaker();;
    

    let METHOD_NAME: string = "setDefault";;
    

    let SELECTED_ARRAY_RETURN: string = "selectedArray_return[";;
    

    let SELECTED_SEP: string = "] = ";;
    

    let selectedArray_return: boolean[] = new Array(choiceGroup!.size());;
    

    let total: number = choiceGroup!.getSelectedFlags(selectedArray_return)!;;
    
stringBuffer!.append("Multiple Total Choices: ");
    
stringBuffer!.appendint(total);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_NAME);
    

    let features: Features = Features.getInstance()!;;
    




                        for (
    let index: number = 0;index < selectedArray_return!.length; index++)
        {

    let isSelected: boolean = selectedArray_return[index]!;;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(SELECTED_ARRAY_RETURN);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(SELECTED_SEP);
    
stringBuffer!.appendboolean(isSelected);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_NAME);
    

    let selectedChoiceLabel: string = choiceGroup!.getString(index)!;;
    

    let gameFeature: Feature = Feature.getInstance(selectedChoiceLabel)!;;
    

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

    let stringBuffer: StringMaker = new StringMaker();;
    

    let METHOD_NAME: string = "updateMultiple";;
    

    let SELECTED_ARRAY_RETURN: string = "selectedArray_return[";;
    

    let SELECTED_SEP: string = "] = ";;
    

    let selectedArray_return: boolean[] = new Array(choiceGroup!.size());;
    

    let total: number = choiceGroup!.getSelectedFlags(selectedArray_return)!;;
    
stringBuffer!.append("Multiple Total Choices: ");
    
stringBuffer!.appendint(total);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_NAME);
    

    let features: Features = Features.getInstance()!;;
    




                        for (
    let index: number = 0;index < selectedArray_return!.length; index++)
        {

    let isSelected: boolean = selectedArray_return[index]!;;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(SELECTED_ARRAY_RETURN);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(SELECTED_SEP);
    
stringBuffer!.appendboolean(isSelected);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_NAME);
    

    let selectedChoiceLabel: string = choiceGroup!.getString(index)!;;
    

    let gameFeature: Feature = Feature.getInstance(selectedChoiceLabel)!;;
    

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

    let stringBuffer: StringMaker = new StringMaker();;
    

    let METHOD_NAME: string = "updateExclusive";;
    

    let SELECTED_ARRAY_RETURN: string = "selectedArray_return[";;
    

    let SELECTED_SEP: string = "] = ";;
    

    let selectedArray_return: boolean[] = new Array(choiceGroup!.size());;
    

    let total: number = choiceGroup!.getSelectedFlags(selectedArray_return)!;;
    
stringBuffer!.append("Exclusive Total Choices: 1==");
    
stringBuffer!.appendint(total);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_NAME);
    




                        for (
    let index: number = 0;index < selectedArray_return!.length; index++)
        {

    let isSelected: boolean = selectedArray_return[index]!;;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(SELECTED_ARRAY_RETURN);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(SELECTED_SEP);
    
stringBuffer!.appendboolean(isSelected);
    
this.logUtil!.putF(stringBuffer!.toString(), this, METHOD_NAME);
    

                        if(isSelected)
                        
                                    {
                                    
    let selectedChoiceLabel: string = choiceGroup!.getString(index)!;;
    
this.updateExclusive(selectedChoiceLabel);
    

                                    }
                                
}

}


    public isExclusive(itemLabel: string): boolean{

    let enumeration: Enumeration<any> = GameFeatureChoiceGroups.getExclusiveInstance()!.get()!.keys()!;;
    

    let name: string;;
    

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
    

    let gameFeature: Feature = Feature.getInstance(selectedChoiceLabel)!;;
    

    let hashtable: ABHashtable<any, any> = GameFeatureChoiceGroups.getExclusiveInstance()!.get()!;;
    

    let objectArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;;
    

    let basicArrayList: BasicArrayList;;
    

    let anyType: any;;
    

    let size: number = objectArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
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
                                    
    let features: Features = Features.getInstance()!;;
    

    let addIndex: number = list.indexOf(gameFeature)!;;
    

    let size: number = list.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
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

