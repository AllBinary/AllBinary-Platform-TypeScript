
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
        
//not plain js import { ChoiceGroup } 
const ChoiceGroup = globalThis.javax.microedition.lcdui.ChoiceGroup;

      
//not plain js import { Item } 
const Item = globalThis.javax.microedition.lcdui.Item;

      
import { NullImage } from '../../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;

      
import { GameConfigurationGauge } from '../../../../../org/allbinary/game/configuration/GameConfigurationGauge.js';
//not GWT import const GameConfigurationGauge = globalThis.org.allbinary.game.configuration.GameConfigurationGauge;

      
import { GameConfigurationUtil } from '../../../../../org/allbinary/game/configuration/GameConfigurationUtil.js';
//not GWT import const GameConfigurationUtil = globalThis.org.allbinary.game.configuration.GameConfigurationUtil;

      
import { CommandForm } from '../../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
//not GWT import const CommandForm = globalThis.org.allbinary.graphics.displayable.screen.CommandForm;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { HashtableUtil } 
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Features } from './Features.js';
//not GWT import - same folder const Features = globalThis.org.allbinary.game.configuration.feature.Features;

                import { Feature } from './Feature.js';
//not GWT import - same folder const Feature = globalThis.org.allbinary.game.configuration.feature.Feature;

                import { GameFeatureUtil } from './GameFeatureUtil.js';
//not GWT import - same folder const GameFeatureUtil = globalThis.org.allbinary.game.configuration.feature.GameFeatureUtil;

                
export class GameFeatureFormUtil
            extends Object
         {
        

    private static readonly instance: GameFeatureFormUtil = new GameFeatureFormUtil();

    public static getInstance(): GameFeatureFormUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GameFeatureFormUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public getChoiceGroup(hashtable: ABHashtable, name: string, option: number): ChoiceGroup{

    var stringMaker: StringMaker = new StringMaker();;
    

    var choiceGroup: ChoiceGroup = new ChoiceGroup(name, option, StringUtil.getInstance()!.getArrayInstance(), NullImage.NULL_IMAGE_ARRAY);;
    

    var list: BasicArrayList = hashtable.get(name) as BasicArrayList;;
    

    var features: Features = Features.getInstance()!;;
    

    var ADD_CHOICE: string = ": Adding Choice: ";;
    

    var GET_CHOICE_GROUP: string = "getChoiceGroup";;
    

    var size: number = list.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var gameFeature: Feature = list.objectArray[index]! as Feature;;
    
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


    public addChoiceGroup(form: CommandForm, hashtable: ABHashtable, option: number){

    var stringMaker: StringMaker = new StringMaker();;
    

    var ADDING_CHOICE_GROUP: string = "Adding Choice Group: ";;
    

    var ADD_CHOICE_GROUP: string = "addChoiceGroup";;
    

    var size: number = hashtable.size()!;;
    

    var objectArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(hashtable)!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var name: string = objectArray[index]! as string;;
    
stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append(ADDING_CHOICE_GROUP)!.append(name)!.toString(), this, ADD_CHOICE_GROUP);
    
form.append(this.getChoiceGroup(hashtable, name, option));
    
}

}


                //@Throws(Exception.constructor)
            
    public setDefault(form: CommandForm){

    var size: number = form.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var item: Item = form.get(index)!;;
    

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



