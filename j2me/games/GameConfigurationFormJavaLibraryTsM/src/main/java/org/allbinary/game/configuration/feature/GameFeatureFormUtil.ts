
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
        
import { ChoiceGroup } from '../../../../../javax/microedition/lcdui/ChoiceGroup.js';
//not GWT import const ChoiceGroup

import { Item } from '../../../../../javax/microedition/lcdui/Item.js';
//not GWT import const Item

import { NullImage } from '../../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage

import { GameConfigurationGauge } from '../../../../../org/allbinary/game/configuration/GameConfigurationGauge.js';
//not GWT import const GameConfigurationGauge

import { GameConfigurationUtil } from '../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js';
//not GWT import const GameConfigurationUtil

import { CommandForm } from '../../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
//not GWT import const CommandForm

import { MEUtil } from '../../../../../org/allbinary/logic/MEUtil.js';
//not GWT import const MEUtil

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { HashtableUtil } 
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;
type HashtableUtil<T = any, U = any> = typeof HashtableUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof HashtableUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Features } from './Features.js';
//sameFolderImports - not GWT import - same folder const Features
import { Feature } from './Feature.js';
//sameFolderImports - not GWT import - same folder const Feature
import { GameFeatureUtil } from './GameFeatureUtil.js';
//sameFolderImports - not GWT import - same folder const GameFeatureUtil

export class GameFeatureFormUtil
            extends Object
         {
        

    private static readonly instance: GameFeatureFormUtil = new GameFeatureFormUtil();

    public static getInstance(): GameFeatureFormUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameFeatureFormUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly meUtil: MEUtil = MEUtil.getInstance()!;

    public getChoiceGroup(hashtable: ABHashtable<any, any>, name: string, option: number): ChoiceGroup{

    let stringMaker: StringMaker = new StringMaker();;
    

    let choiceGroup: ChoiceGroup = new ChoiceGroup(name, option, StringUtil.getInstance()!.getArrayInstance(), NullImage.NULL_IMAGE_ARRAY);;
    

    let list: BasicArrayList = hashtable.get(name) as BasicArrayList;;
    

    let features: Features = Features.getInstance()!;;
    

    let ADD_CHOICE: string = ": Adding Choice: ";;
    

    let GET_CHOICE_GROUP: string = "getChoiceGroup";;
    

    let size: number = list.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let gameFeature: Feature = list.objectArray[index]! as Feature;;
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(name)!.append(ADD_CHOICE)!.append(gameFeature!.toString())!.toString(), this, GET_CHOICE_GROUP);
    
choiceGroup!.append(gameFeature!.toString(), NullImage.NULL_IMAGE);
    

                        if(features.isFeature(gameFeature))
                        
                                    {
                                    choiceGroup!.setSelectedIndex(index, true);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return choiceGroup;
    
}


    public addChoiceGroup(form: CommandForm, hashtable: ABHashtable<any, any>, option: number){

    let stringMaker: StringMaker = new StringMaker();;
    

    let ADDING_CHOICE_GROUP: string = "Adding Choice Group: ";;
    

    let ADD_CHOICE_GROUP: string = "addChoiceGroup";;
    

    let size: number = hashtable.size()!;;
    

    let objectArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;;
    

    let name: string;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
name= objectArray[index]! as string;
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(ADDING_CHOICE_GROUP)!.append(name)!.toString(), this, ADD_CHOICE_GROUP);
    
this.meUtil!.appendItem(form, this.getChoiceGroup(hashtable, name, option));
    
}

}


                //@Throws(Exception.constructor)
            
    public setDefault(form: CommandForm){

    let size: number = form.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let item: Item = form.get(index)!;;
    

                        if(item instanceof GameConfigurationGauge)
                        
                                    {
                                    GameConfigurationUtil.getInstance()!.setDefault(item as GameConfigurationGauge);
    

                                    }
                                
                             else 
                        if(item instanceof ChoiceGroup)
                        
                                    {
                                    GameFeatureUtil.getInstance()!.setDefault(item as ChoiceGroup);
    

                                    }
                                
}

}


}

