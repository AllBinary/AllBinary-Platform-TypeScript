
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

        


import { Font } from '../../../../javax/microedition/lcdui/Font.js';
//not GWT import const Font

import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SelectionHudPaintable } from './SelectionHudPaintable.js';
//sameFolderImports - not GWT import - same folder const SelectionHudPaintable
import { RTSLayer } from './RTSLayer.js';
//sameFolderImports - not GWT import - same folder const RTSLayer

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
    

    let font: Font = graphics.getFont()!;;
    
this.totalWidth= font.stringWidth(this.TOTAL);
    
this.textLine2Y= (this.y +font.getHeight());
    
}


    public update(list: BasicArrayList){
this.clear();
    

    let size: number = list.size()!;;
    
this.totalCharArray= this.getPrimitiveLongUtil()!.getCharArray(size);
    




                        for (
    let index: number = list.size() -1;index >= 0; index--)
        {

    let rtsLayer: RTSLayer = list.get(index) as RTSLayer;;
    

                        if(!this.rootNameList!.contains(rtsLayer!.getRootName()))
                        
                                    {
                                    this.rootNameList!.add(rtsLayer!.getRootName());
    

                                    }
                                
}


    let COMMA_SEP: string = CommonSeps.getInstance()!.COMMA_SEP;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    




                        for (
    let index: number = this.rootNameList!.size() -1;index >= 0; index--)
        {

    let rootName: string = this.rootNameList!.get(index) as string;;
    
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

