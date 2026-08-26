
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
        



//not game specific package import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      const Font = globalThis.javax.microedition.lcdui.Font;

      
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not game specific package import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SelectionHudPaintable } from './SelectionHudPaintable.js';
import { RTSLayer } from './RTSLayer.js';

export class MultiSelectPaintable extends SelectionHudPaintable {
        

    private readonly rootNameList: BasicArrayList = new BasicArrayListD();

    private totalCharArray: string[] = NullUtil.getInstance()!.NULL_CHAR_ARRAY;

    private rootNamesString: string = StringUtil.getInstance()!.EMPTY_STRING;

    private readonly TOTAL: string = "Total Selected: ";

    private readonly backgroundColor: number = BasicColorFactory.getInstance()!.GREY.intValue()!;

    private totalWidth: number= 0;

    private textLine2Y: number= 0;

public constructor (){

            super();
        }


    public updateMeasurement(graphics: Graphics){
super.updateMeasurement(graphics);
    

    var font: Font = graphics.getFont()!;;
    
this.totalWidth= font.stringWidth(this.TOTAL);
    
this.textLine2Y= (this.y +font.getHeight());
    
}


    public update(list: BasicArrayList){
this.clear();
    

    var size: number = list.size()!;;
    
this.totalCharArray= this.getPrimitiveLongUtil()!.getCharArray(size);
    




                        for (
    var index: number = list.size() -1;index >= 0; index--)
        {

    var rtsLayer: RTSLayer = list.get(index) as RTSLayer;;
    

                        if(!this.rootNameList!.contains(rtsLayer!.getRootName()))
                        
                                    {
                                    this.rootNameList!.add(rtsLayer!.getRootName());
    

                                    }
                                
}


    var COMMA_SEP: string = CommonSeps.getInstance()!.COMMA_SEP;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    




                        for (
    var index: number = this.rootNameList!.size() -1;index >= 0; index--)
        {

    var rootName: string = this.rootNameList!.get(index) as string;;
    
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


    public paint(graphics: Graphics){
graphics.setColor(this.backgroundColor);
    
graphics.drawRect(this.getX(), this.y, this.getWidth(), this.getHeight());
    
graphics.setColor(this.getColor());
    
graphics.drawString(this.TOTAL, this.textX, this.y, 0);
    
graphics.drawChars(this.totalCharArray, 0, this.getPrimitiveLongUtil()!.getCurrentTotalDigits(), this.textX +this.totalWidth, this.y, 0);
    
graphics.drawString(this.rootNamesString, this.textX, this.textLine2Y, 0);
    
}


}
                
            

