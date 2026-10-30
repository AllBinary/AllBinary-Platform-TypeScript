
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
        
import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
//not GWT import const Command

import { ImageItem } from '../../../../../javax/microedition/lcdui/ImageItem.js';
//not GWT import const ImageItem

import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton

import { ScreenInfo } from '../../../../../org/allbinary/graphics/form/ScreenInfo.js';
//not GWT import const ScreenInfo

//not plain js import { VectorUtil } 
const VectorUtil = globalThis.org.allbinary.logic.VectorUtil;
type VectorUtil<T = any, U = any> = typeof VectorUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof VectorUtil;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { Visitor } from '../../../../../org/allbinary/logic/util/visitor/Visitor.js';
//not GWT import const Visitor

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CommandTextItem } from './CommandTextItem.js';
//not GWT import - same folder const CommandTextItem
import { ABCustomItem } from './ABCustomItem.js';
//not GWT import - same folder const ABCustomItem

export class CommandTextItemArrayFactory
            extends Object
         {
        

    private readonly list: BasicArrayList = new BasicArrayListD();

    private readonly visitorInterface: Visitor;

public constructor (visitorInterface: Visitor){

            super();
        this.visitorInterface= visitorInterface;
    
}


    public getInstance(vector: any, backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor): ABCustomItem[]{

    let vectorUtil: VectorUtil = VectorUtil.getInstance()!;;
    

    let size: number = vectorUtil!.getSize(vector)!;;
    
this.list.clear();
    

    let textItem: CommandTextItem;;
    

    let priorityLimit: number = 7;;
    

    let displayInfo: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;;
    

    let isLargeEnoughDisplayForBigMenu: boolean = (displayInfo!.isPortrait() && displayInfo!.getLastHeight() >= ScreenInfo.getInstance()!.MEDIUM_WIDTH) || (!displayInfo!.isPortrait() && displayInfo!.getLastWidth() >= ScreenInfo.getInstance()!.MEDIUM_WIDTH);;
    

                        if(!isLargeEnoughDisplayForBigMenu && size > 3)
                        
                                    {
                                    priorityLimit= 3;
    

                                    }
                                

    let command: Command;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
command= vectorUtil!.elementAt(vector, index) as Command;
    

                        if(command.getPriority() < priorityLimit)
                        
                                    {
                                    
    let aBoolean: Boolean = this.visitorInterface!.visit(command) as Boolean;;
    

                        if(aBoolean.valueOf())
                        
                                    {
                                    textItem= new CommandTextItem(command, ImageItem.LAYOUT_DEFAULT, StringUtil.getInstance()!.EMPTY_STRING, backgroundBasicColor, foregroundBasicColor);
    
this.list.add(textItem);
    

                                    }
                                

                                    }
                                
}


    let textItemArray: ABCustomItem[] = new Array(this.list.size());;
    

    let size2: number = textItemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size2; index++)
        {
textItemArray[index]= this.list.objectArray[index]! as ABCustomItem;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return textItemArray;
    
}


}

