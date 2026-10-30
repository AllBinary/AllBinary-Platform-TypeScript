
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

import { ChoiceGroup } from '../../../../javax/microedition/lcdui/ChoiceGroup.js';
//not GWT import const ChoiceGroup

import { CommandListener } from '../../../../javax/microedition/lcdui/CommandListener.js';
//not GWT import const CommandListener

import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage

import { GameCommandsFactory } from '../../../../org/allbinary/game/commands/GameCommandsFactory.js';
//not GWT import const GameCommandsFactory

import { GameDifficultyFactory } from '../../../../org/allbinary/game/configuration/persistance/GameDifficultyFactory.js';
//not GWT import const GameDifficultyFactory

import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
//not GWT import const CommandForm

import { MEUtil } from '../../../../org/allbinary/logic/MEUtil.js';
//not GWT import const MEUtil

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameDifficultyOptions extends CommandForm {
        

    private readonly meUtil: MEUtil = MEUtil.getInstance()!;

    private readonly list: BasicArrayList;

public constructor (commandListener: CommandListener, title: string, list: BasicArrayList, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(commandListener, title, backgrounBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.list= list;
    
this.update();
    
this.initCommands(commandListener);
    

    let gameDifficultyFactory: GameDifficultyFactory = GameDifficultyFactory.getInstance()!;;
    
this.setSelectedId(gameDifficultyFactory!.getLevel());
    
}


    public open(){
super.open();
    
}


    public close(){
super.close();
    
this.save();
    
}


                //@Throws(Exception.constructor)
            
    public save(){

    let gameDifficultyFactory: GameDifficultyFactory = GameDifficultyFactory.getInstance()!;;
    
gameDifficultyFactory!.setLevel(this.getSelectedId());
    
}


    public initCommands(cmdListener: CommandListener){

    let gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;;
    
this.removeAllCommands();
    
this.addCommand(gameCommandsFactory!.CLOSE_AND_SHOW_GAME_CANVAS);
    
this.setCommandListener(cmdListener);
    
}


                //@Throws(Exception.constructor)
            
    public update(){
this.deleteAll();
    
this.add(this.list, "Difficulty", ChoiceI.EXCLUSIVE);
    
super.update();
    
}


    add(list: BasicArrayList, name: string, option: number){

    let choiceGroup: ChoiceGroup = this.getChoiceGroup(list, name, option)!;;
    

                        if(list.size() > 0)
                        
                                    {
                                    choiceGroup!.setSelectedIndex(0, true);
    

                                    }
                                
this.meUtil!.appendItem(this, choiceGroup);
    
}


    getChoiceGroup(list: BasicArrayList, name: string, option: number): ChoiceGroup{

    let METHOD_NAME: string = "addChoiceGroup";;
    

    let NAME: string = "Adding Choice: ";;
    

    let choiceGroup: ChoiceGroup = new ChoiceGroup(name, option, StringUtil.getInstance()!.getArrayInstance(), NullImage.NULL_IMAGE_ARRAY);;
    

    let size: number = list.size()!;;
    

    let anyType: any;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
anyType= list.objectArray[index]!;
    
this.logUtil!.putF(new StringMaker().append(NAME)!.append(anyType!.toString())!.toString(), this, METHOD_NAME);
    
choiceGroup!.append(anyType!.toString(), NullImage.NULL_IMAGE);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return choiceGroup;
    
}


    public setSelectedId(id: number){

    let choiceGroup: ChoiceGroup = this.get(0) as ChoiceGroup;;
    
choiceGroup!.setSelectedIndex(id, true);
    
}


    public getSelectedId(): number{

    let choiceGroup: ChoiceGroup = this.get(0) as ChoiceGroup;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return choiceGroup!.getSelectedIndex();;
    
}


    public getSelectedText(): number{

    let choiceGroup: ChoiceGroup = this.get(0) as ChoiceGroup;;
    

    let value: number = Integer.valueOf(choiceGroup!.getString(choiceGroup!.getSelectedIndex()))!.intValue()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    
}


}

