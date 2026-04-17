
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { MyFont } from "../../../../org/allbinary/graphics/font/MyFont.js";

    
import { NullUtil } from "../../../../org/allbinary/logic/NullUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { SelectionHudPaintable } from "./SelectionHudPaintable.js";

export class MultiSelectPaintable extends SelectionHudPaintable {
        

    private readonly rootNameList: BasicArrayList = new BasicArrayList();
        
        

    private totalCharArray: string[] = NullUtil.getInstance()!.NULL_CHAR_ARRAY;
        
        

    private rootNamesString: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
public constructor (){

            super();
            }


    public update(list: BasicArrayList){
var list = list
this.clear();
    

    var size: number = list.size()!;
        
        
;
    
this.totalCharArray= this.getPrimitiveLongUtil()!.getCharArray(size);
    




                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {

    var rtsLayer: RTSLayer = list.get(index);

                         as RTSLayer;
        
        
;
    

                        if(!this.rootNameList!.contains(rtsLayer!.getRootName());

                        )
                        
                                    {
                                    this.rootNameList!.add(rtsLayer!.getRootName());
    

                                    }
                                
}


    var COMMA_SEP: string = CommonSeps.getInstance()!.COMMA_SEP;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    




                        for (
    var index: number = this.rootNameList!.size() -1;
        
        
index >= 0; index--)
        {

    var rootName: string = this.rootNameList!.get(index);

                         as String;
        
        
;
    
stringBuffer!.append(rootName);
    

                        if(index != 0)
                        
                                    {
                                    stringBuffer!.append(COMMA_SEP);
    

                                    }
                                
}

this.rootNamesString= stringBuffer!.toString();
    
}


    clear(){
this.rootNameList!.clear();
    
}


    private readonly TOTAL: string = "Total Selected: ";
        
        

    private readonly totalWidth: number = MyFont.getInstance()!.stringWidth(TOTAL)!;
        
        

    private readonly backgroundColor: number = BasicColorFactory.getInstance()!.GREY.toInt()!;
        
        

    public paint(graphics: Graphics){
var graphics = graphics
graphics.setColor(backgroundColor);
    
graphics.drawRect(this.getX(), y, this.getWidth(), this.getHeight());
    
graphics.setColor(this.getColor());
    
graphics.drawString(TOTAL, this.textX, y, 0);
    
graphics.drawChars(this.totalCharArray, 0, this.getPrimitiveLongUtil()!.getCurrentTotalDigits(), this.textX +this.totalWidth, y, 0);
    

    var textLine2Y: number = (y +myFont!.DEFAULT_CHAR_HEIGHT);
        
        
;
    
graphics.drawString(this.rootNamesString, this.textX, textLine2Y, 0);
    
}


}
                
            

