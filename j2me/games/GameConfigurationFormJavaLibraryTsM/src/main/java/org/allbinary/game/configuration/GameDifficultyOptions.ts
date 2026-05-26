
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { Choice, ChoiceI } from '../../../../javax/microedition/lcdui/Choice.js';
      
import { ChoiceGroup } from '../../../../javax/microedition/lcdui/ChoiceGroup.js';
      
import { CommandListener } from '../../../../javax/microedition/lcdui/CommandListener.js';
      
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
      
import { GameCommandsFactory } from '../../../../org/allbinary/game/commands/GameCommandsFactory.js';
      
import { GameDifficultyFactory } from '../../../../org/allbinary/game/configuration/persistance/GameDifficultyFactory.js';
      
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
      
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      
import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameDifficultyOptions extends CommandForm {
        

    private readonly list: BasicArrayList;

public constructor (commandListener: CommandListener, title: string, list: BasicArrayList, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor){
            super(commandListener, title, backgrounBasicColor, foregroundBasicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    
this.list= list;
    
this.update();
    
this.initCommands(commandListener);
    

    var gameDifficultyFactory: GameDifficultyFactory = GameDifficultyFactory.getInstance()!;;
    
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

    var gameDifficultyFactory: GameDifficultyFactory = GameDifficultyFactory.getInstance()!;;
    
gameDifficultyFactory!.setLevel(this.getSelectedId());
    
}


    public initCommands(cmdListener: CommandListener){

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;;
    
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

    var choiceGroup: ChoiceGroup = this.getChoiceGroup(list, name, option)!;;
    

                        if(list.size() > 0)
                        
                                    {
                                    choiceGroup!.setSelectedIndex(0, true);
    

                                    }
                                
this.append(choiceGroup);
    
}


    getChoiceGroup(list: BasicArrayList, name: string, option: number): ChoiceGroup{

    var METHOD_NAME: string = "addChoiceGroup";;
    

    var NAME: string = "Adding Choice: ";;
    

    var choiceGroup: ChoiceGroup = new ChoiceGroup(name, option, StringUtil.getInstance()!.getArrayInstance(), NullImage.NULL_IMAGE_ARRAY);;
    

    var size: number = list.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var anyType: any = list.objectArray[index]!;;
    
this.logUtil!.putF(new StringMaker().append(NAME)!.append(anyType!.toString())!.toString(), this, METHOD_NAME);
    
choiceGroup!.append(anyType!.toString(), NullImage.NULL_IMAGE);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return choiceGroup;
    
}


    public setSelectedId(id: number){

    var choiceGroup: ChoiceGroup = this.get(0) as ChoiceGroup;;
    
choiceGroup!.setSelectedIndex(id, true);
    
}


    public getSelectedId(): number{

    var choiceGroup: ChoiceGroup = this.get(0) as ChoiceGroup;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return choiceGroup!.getSelectedIndex();;
    
}


    public getSelectedText(): number{

    var choiceGroup: ChoiceGroup = this.get(0) as ChoiceGroup;;
    

    var value: number = Integer.valueOf(choiceGroup!.getString(choiceGroup!.getSelectedIndex()))!.intValue()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    
}


}
                
            

