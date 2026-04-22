
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
        



import { Vector } from "../../../../../java/util/Vector.js";

    
import { Command } from "../../../../../javax/microedition/lcdui/Command.js";

    
import { ImageItem } from "../../../../../javax/microedition/lcdui/ImageItem.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { ScreenInfo } from "../../../../../org/allbinary/graphics/form/ScreenInfo.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Visitor } from "../../../../../org/allbinary/logic/util/visitor/Visitor.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CommandTextItemArrayFactory
            extends Object
         {
        

    private readonly list: BasicArrayList = new BasicArrayList();
        
        

    private readonly visitorInterface: Visitor
public constructor (visitorInterface: Visitor){

            super();
            //var visitorInterface = visitorInterface
this.visitorInterface= visitorInterface;
    
}


    public getInstance(vector: Vector<any>, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor): CustomItem[]{
var vector = vector
    //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor

    var size: number = vector.length!;
        
        
;
    
this.list.clear();
    

    var textItem: CommandTextItem
;
    

    var priorityLimit: number = 7;
        
        
;
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
        
        
;
    

    var isLargeEnoughDisplayForBigMenu: boolean = (displayInfo!.isPortrait() && displayInfo!.getLastHeight() >= ScreenInfo.getInstance()!.MEDIUM_WIDTH) || (!displayInfo!.isPortrait();

                         && displayInfo!.getLastWidth() >= ScreenInfo.getInstance()!.MEDIUM_WIDTH);
        
        
;
    

                        if(!isLargeEnoughDisplayForBigMenu && size > 3)
                        
                                    {
                                    priorityLimit= 3;
    

                                    }
                                

    var command: Command
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
command= vector.elementAt(index);

                         as Command;
    

                        if(command.getPriority() < priorityLimit)
                        
                                    {
                                    
    var aBoolean: Boolean = this.visitorInterface!.visit(command);

                         as Boolean;
        
        
;
    

                        if(aBoolean)
                        
                                    {
                                    textItem= new CommandTextItem(command, ImageItem.LAYOUT_DEFAULT, StringUtil.getInstance()!.EMPTY_STRING, backgroundBasicColor, foregroundBasicColor);
    
this.list.add(textItem);
    

                                    }
                                

                                    }
                                
}


    var textItemArray: CustomItem[] = new Array(this.list.size());
        
        
;
    

    var size2: number = textItemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size2; index++)
        {
textItemArray[index]= this.list.objectArray[index]! as CustomItem;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return textItemArray;
    
}


}
                
            

