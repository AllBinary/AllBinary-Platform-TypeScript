
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
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not plain js import { Command } 
const Command = globalThis.javax.microedition.lcdui.Command;

      
//not plain js import { ImageItem } 
const ImageItem = globalThis.javax.microedition.lcdui.ImageItem;

      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;

      
import { ScreenInfo } from '../../../../../org/allbinary/graphics/form/ScreenInfo.js';
//not GWT import const ScreenInfo = globalThis.org.allbinary.graphics.form.ScreenInfo;

      
//not plain js import { VectorUtil } 
const VectorUtil = globalThis.org.allbinary.logic.VectorUtil;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { Visitor } from '../../../../../org/allbinary/logic/util/visitor/Visitor.js';
//not GWT import const Visitor = globalThis.org.allbinary.logic.util.visitor.Visitor;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CommandTextItem } from './CommandTextItem.js';
//not GWT import - same folder const CommandTextItem = globalThis.org.allbinary.graphics.form.item.CommandTextItem;

                import { ABCustomItem } from './ABCustomItem.js';
//not GWT import - same folder const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

                
export class CommandTextItemArrayFactory
            extends Object
         {
        

    private readonly list: BasicArrayList = new BasicArrayListD();

    private readonly visitorInterface: Visitor;

public constructor (visitorInterface: Visitor){

            super();
        this.visitorInterface= visitorInterface;
    
}


    public getInstance(vector: any = {}, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor): ABCustomItem[]{

    var vectorUtil: VectorUtil = VectorUtil.getInstance()!;;
    

    var size: number = vectorUtil!.getSize(vector)!;;
    
this.list.clear();
    

    var textItem: CommandTextItem;;
    

    var priorityLimit: number = 7;;
    

    var displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

    var isLargeEnoughDisplayForBigMenu: boolean = (displayInfo!.isPortrait() && displayInfo!.getLastHeight() >= ScreenInfo.getInstance()!.MEDIUM_WIDTH) || (!displayInfo!.isPortrait() && displayInfo!.getLastWidth() >= ScreenInfo.getInstance()!.MEDIUM_WIDTH);;
    

                        if(!isLargeEnoughDisplayForBigMenu && size > 3)
                        
                                    {
                                    priorityLimit= 3;
    

                                    }
                                

    var command: Command;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
command= vectorUtil!.elementAt(vector, index) as Command;
    

                        if(command.getPriority() < priorityLimit)
                        
                                    {
                                    
    var aBoolean: Boolean = this.visitorInterface!.visit(command) as Boolean;;
    

                        if(aBoolean.valueOf())
                        
                                    {
                                    textItem= new CommandTextItem(command, ImageItem.LAYOUT_DEFAULT, StringUtil.getInstance()!.EMPTY_STRING, backgroundBasicColor, foregroundBasicColor);
    
this.list.add(textItem);
    

                                    }
                                

                                    }
                                
}


    var textItemArray: ABCustomItem[] = new Array(this.list.size());;
    

    var size2: number = textItemArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size2; index++)
        {
textItemArray[index]= this.list.objectArray[index]! as ABCustomItem;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return textItemArray;
    
}


}



