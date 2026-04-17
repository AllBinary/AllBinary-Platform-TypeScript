
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        
import { Choice } from "../../../../javax/microedition/lcdui/Choice.js";

    
import { ChoiceGroup } from "../../../../javax/microedition/lcdui/ChoiceGroup.js";

    
import { CommandListener } from "../../../../javax/microedition/lcdui/CommandListener.js";

    
import { NullCanvas } from "../../../../javax/microedition/lcdui/NullCanvas.js";

    
import { StringItem } from "../../../../javax/microedition/lcdui/StringItem.js";

    
import { GameCommandsFactory } from "../../../../org/allbinary/game/commands/GameCommandsFactory.js";

    
import { GamePersistanceSingleton } from "../../../../org/allbinary/game/configuration/persistance/GamePersistanceSingleton.js";

    
import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { CommandForm } from "../../../../org/allbinary/graphics/displayable/screen/CommandForm.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LoadGameForm extends CommandForm {
        

    private areChoices: boolean= false
public constructor (commandListener: CommandListener, title: string, backgrounBasicColor: BasicColor, foregroundBasicColor: BasicColor)                        

                            : super(commandListener, title, backgrounBasicColor, foregroundBasicColor){

            super();
            var commandListener = commandListener
var title = title
var backgrounBasicColor = backgrounBasicColor
var foregroundBasicColor = foregroundBasicColor


                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    
this.update();
    
this.initCommands(commandListener);
    
}


    public initCommands(cmdListener: CommandListener){
var cmdListener = cmdListener

    var gameCommandsFactory: GameCommandsFactory = GameCommandsFactory.getInstance()!;
        
        
;
    
this.removeAllCommands();
    
this.addCommand(gameCommandsFactory!.LOAD_FILE);
    
this.addCommand(gameCommandsFactory!.DELETE_FILE);
    
this.addCommand(gameCommandsFactory!.CLOSE_AND_SHOW_GAME_CANVAS);
    
this.setCommandListener(cmdListener);
    
}


                //@Throws(Error::class)
            
    public update(){

    var list: BasicArrayList = GamePersistanceSingleton.getInstance()!.getIds()!;
        
        
;
    
this.deleteAll();
    

                        if(list.size() > 0)
                        
                                    {
                                    this.add(list, "Select A Saved Game", Choice.EXCLUSIVE);
    
this.areChoices= true;
    

                                    }
                                
                        else {
                            this.append(new StringItem("No Saved Games", StringUtil.getInstance()!.EMPTY_STRING));
    
this.areChoices= false;
    

                        }
                            
super.update();
    
}


    add(list: BasicArrayList, name: string, option: number){
var list = list
var name = name
var option = option

    var choiceGroup: ChoiceGroup = this.getChoiceGroup(list, name, option)!;
        
        
;
    

                        if(list.size() > 0)
                        
                                    {
                                    choiceGroup!.setSelectedIndex(0, true);
    

                                    }
                                
this.append(choiceGroup);
    
}


    getChoiceGroup(list: BasicArrayList, name: string, option: number): ChoiceGroup{
var list = list
var name = name
var option = option

    var METHOD_NAME: string = "getChoiceGroup";
        
        
;
    

    var choiceGroup: ChoiceGroup = new ChoiceGroup(name, option);
        
        
;
    

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var anyType: any = list.objectArray[index]!;
        
        
;
    
this.logUtil!.putF(new StringMaker().
                            append("Adding Choice: ")!.append(anyType!.toString())!.toString(), this, METHOD_NAME);
    
choiceGroup!.append(anyType!.toString(), NullCanvas.NULL_IMAGE);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return choiceGroup;
    
}


    public getSelectedId(): number{

                        if(this.areChoices)
                        
                                    {
                                    
    var choiceGroup: ChoiceGroup = this.get(0);

                         as ChoiceGroup;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return choiceGroup!.getSelectedIndex();

                        ;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    

                        }
                            
}


    public getSelectedText(): number{

                        if(this.areChoices)
                        
                                    {
                                    
    var choiceGroup: ChoiceGroup = this.get(0);

                         as ChoiceGroup;
        
        
;
    

    var value: number = Integer.valueOf(choiceGroup!.getString(choiceGroup!.getSelectedIndex()))!.toInt()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return  -1;
    

                        }
                            
}


}
                
            

