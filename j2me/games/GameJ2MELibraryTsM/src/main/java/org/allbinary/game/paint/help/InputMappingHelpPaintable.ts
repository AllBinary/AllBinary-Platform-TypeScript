
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

        


import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
//not GWT import const Font

import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
//not GWT import const Graphics

import { GameKey } from '../../../../../org/allbinary/game/input/GameKey.js';
//not GWT import const GameKey

import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
//not GWT import const GameKeyFactory

import { Input } from '../../../../../org/allbinary/game/input/Input.js';
//not GWT import const Input

import { PlatformInputMappingFactory } from '../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
//not GWT import const PlatformInputMappingFactory

import { GameInputMapping } from '../../../../../org/allbinary/game/input/mapping/GameInputMapping.js';
//not GWT import const GameInputMapping

import { PersistentInputMapping } from '../../../../../org/allbinary/game/input/mapping/PersistentInputMapping.js';
//not GWT import const PersistentInputMapping

import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor

import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory

import { BasicColorUtil } from '../../../../../org/allbinary/graphics/color/BasicColorUtil.js';
//not GWT import const BasicColorUtil

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HelpPaintable } from './HelpPaintable.js';
//not GWT import - same folder const HelpPaintable
//import { UpdateMyFontProperties } from './UpdateMyFontProperties.js';
//not GWT import - same folder const UpdateMyFontProperties
type UpdateMyFontProperties = InstanceType<InputMappingHelpPaintable['UpdateMyFontProperties']>;

export class InputMappingHelpPaintable extends HelpPaintable {
        

    private static readonly AND: string = " and ";

    private static readonly SEP: string = ", ";

    private static readonly MORE_THAN_TWO_IN_LIST_AND: string = ", and ";

//inner= member=true isStatic=
UpdateMyFontProperties = (() => { const outer$InputMappingHelpPaintable = this; return class
            extends Object
         {
        
/*Static stuff is not allowed for TypeScript inner classes*//**/


    actionStringArray: string[] = StringUtil.getInstance()!.getArrayInstance()!;

    keymappingBeginWidthArray: number[] = NullUtil.getInstance()!.NULL_INT_ARRAY;

    actionStringDeltaXArray: number[] = NullUtil.getInstance()!.NULL_INT_ARRAY;

    inputDeltaXArray: number[][] = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY;

    sepArray: string[][] = new Array(0).fill(null).map(() => new Array(0).fill(null))
                                                            ;

    sepWidthArray: number[][] = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY;

    charHeight: number= 0;

}; })();
    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;

    readonly stringUtil: StringUtil = StringUtil.getInstance()!;

    private readonly basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;

    private readonly NONE: GameKey = GameKeyFactory.getInstance()!.NONE;

    private readonly EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;

    private gameInputMappingArray: GameInputMapping[];

    private keyMappingArray: BasicArrayList[] = [];

    private actionBasicColor: BasicColor[] = BasicColorUtil.getInstance()!.ZERO_ARRAY;

    private inputBasicColorArray: BasicColor[][] = new Array(0).fill(null).map(() => new Array(0).fill(null))
                                                            ;

    private selectedBasicColor: BasicColor;

    private updateMyFontProperties = new this.UpdateMyFontProperties();

protected constructor (gameInputMappingArray: GameInputMapping[], backgroundBasicColor: BasicColor, basicColor: BasicColor){
            super("Input Mapping", backgroundBasicColor, basicColor);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.gameInputMappingArray= gameInputMappingArray;
    
this.update(this.NONE, this.NONE);
    

                        if(backgroundBasicColor == this.basicColorFactory!.WHITE || basicColor == this.basicColorFactory!.WHITE)
                        
                                    {
                                    this.selectedBasicColor= this.basicColorFactory!.RED;
    

                                    }
                                
                        else {
                            this.selectedBasicColor= this.basicColorFactory!.WHITE;
    

                        }
                            
}


    public updateMeasurement(graphics: Graphics){

    let font: Font = graphics.getFont()!;;
    

    let updateMyFontProperties = new this.UpdateMyFontProperties();;
    
updateMyFontProperties!.charHeight= font.getHeight();
    

    let stringMaker: StringMaker = new StringMaker();;
    

    let inputInfo: string[] = this.inputInfo;;
    

    let size: number = inputInfo!.length
                ;;
    
updateMyFontProperties!.actionStringArray= new Array(size);
    
updateMyFontProperties!.keymappingBeginWidthArray= new Array(size);
    
updateMyFontProperties!.actionStringDeltaXArray= new Array(size);
    
updateMyFontProperties!.inputDeltaXArray= new Array(size).fill(null).map(() => new Array(0).fill(null));
    
updateMyFontProperties!.sepArray= new Array(size).fill(null).map(() => new Array(0).fill(null))
                                                            ;
    
updateMyFontProperties!.sepWidthArray= new Array(size).fill(null).map(() => new Array(0).fill(null));
    

    let list: BasicArrayList;;
    

    let keyMappings: string;;
    

    let actionString: string;;
    

    let input: Input;;
    

    let size2: number = 0;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
list= this.keyMappingArray[index]!;
    
keyMappings= this.get(list);
    
stringMaker!.delete(0, stringMaker!.length());
    
actionString= stringMaker!.append(inputInfo[index]!)!.append(this.commonSeps!.COLON)!.append(this.commonSeps!.SPACE)!.append(this.commonSeps!.SPACE)!.toString();
    
updateMyFontProperties!.actionStringArray[index]= actionString;
    
stringMaker!.delete(0, stringMaker!.length());
    
updateMyFontProperties!.keymappingBeginWidthArray[index]= (font.stringWidth(stringMaker!.append(updateMyFontProperties!.actionStringArray[index]!)!.append(keyMappings)!.toString())>>1);
    
updateMyFontProperties!.actionStringDeltaXArray[index]= font.stringWidth(actionString);
    
size2= list.size();
    
updateMyFontProperties!.inputDeltaXArray[index]= new Array(size2);
    
updateMyFontProperties!.sepArray[index]= new Array(size2);
    
updateMyFontProperties!.sepWidthArray[index]= new Array(size2);
    




                        for (
    let index2: number = 0;index2 < size2; index2++)
        {
input= list.objectArray[index2]! as Input;
    
updateMyFontProperties!.inputDeltaXArray[index]![index2]= font.stringWidth(input.getName());
    
updateMyFontProperties!.sepArray[index]![index2]= EMPTY_STRING;
    

                        if(index2 +1 < list.size())
                        
                                    {
                                    
                        if(list.size() == 2)
                        
                                    {
                                    updateMyFontProperties!.sepArray[index]![index2]= InputMappingHelpPaintable.AND;
    

                                    }
                                
                        else {
                            
                        if(index2 +2 == list.size())
                        
                                    {
                                    updateMyFontProperties!.sepArray[index]![index2]= InputMappingHelpPaintable.MORE_THAN_TWO_IN_LIST_AND;
    

                                    }
                                
                        else {
                            updateMyFontProperties!.sepArray[index]![index2]= InputMappingHelpPaintable.SEP;
    

                        }
                            

                        }
                            

                                    }
                                

                        if(updateMyFontProperties!.sepArray[index]![index2] != EMPTY_STRING)
                        
                                    {
                                    updateMyFontProperties!.sepWidthArray[index]![index2]= font.stringWidth(updateMyFontProperties!.sepArray[index]![index2]!);
    

                                    }
                                
}

}

this.updateMyFontProperties= updateMyFontProperties;
    
super.updateMeasurement(graphics);
    
}


    public update(selectedGameKey: GameKey, selectedInput: Input){

    let stringMaker: StringMaker = new StringMaker();;
    
this.logUtil!.putF(stringMaker!.append(CommonLabels.getInstance()!.START_LABEL)!.append("selected GameKey: ")!.append(this.stringUtil!.toString(selectedGameKey))!.append(" Input: ")!.append(this.stringUtil!.toString(selectedInput))!.toString(), this, this.commonStrings!.UPDATE);
    

    let gameKeyMapping: PersistentInputMapping = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!;;
    

    let size: number = this.gameInputMappingArray!.length
                ;;
    

    let keyInfo: string[] = new Array(size);;
    

    let keyMappingArray: BasicArrayList[] = new Array(size);;
    

    let actionBasicColor: BasicColor[] = new Array(size);;
    

    let inputBasicColorArray: BasicColor[][] = new Array(size)
                                                            ;;
    

    let gameInputMapping: GameInputMapping;;
    

    let gameKey: GameKey;;
    

    let list: BasicArrayList;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
gameInputMapping= this.gameInputMappingArray[index]!;
    
gameKey= gameInputMapping!.getGameKey();
    
list= gameKeyMapping!.getInputMapping()!.getMappedInput(gameKey);
    

    let size2: number = list.size()!;;
    
inputBasicColorArray[index]= new Array(size2);
    




                        for (
    let index2: number = 0;index2 < size2; index2++)
        {
inputBasicColorArray[index]![index2]= this.basicColor;
    
}


                        if(gameKey == selectedGameKey)
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append("Found: selected GameKey: ")!.append(this.stringUtil!.toString(selectedGameKey))!.toString(), this, this.commonStrings!.UPDATE);
    
actionBasicColor[index]= this.selectedBasicColor;
    

    let indexOfSelectedInput: number = list.indexOf(selectedInput)!;;
    

                        if(indexOfSelectedInput >= 0)
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append("Found: selected Input: ")!.append(this.stringUtil!.toString(selectedInput))!.toString(), this, this.commonStrings!.UPDATE);
    
inputBasicColorArray[index]![indexOfSelectedInput]= this.selectedBasicColor;
    

                                    }
                                

                                    }
                                
                        else {
                            actionBasicColor[index]= this.basicColor;
    

                        }
                            
keyInfo[index]= gameInputMapping!.getName();
    
keyMappingArray[index]= list;
    
}

this.keyMappingArray= keyMappingArray;
    
this.actionBasicColor= actionBasicColor;
    
this.inputBasicColorArray= inputBasicColorArray;
    
super.setInputInfoP(keyInfo);
    
this.myFontProcessor= this.updateMyFontProcessor;
    
}


    get(keyList: BasicArrayList): string{

    let stringBuffer: StringMaker = new StringMaker();;
    

    let key: Input;;
    

    let size: number = keyList!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
key= keyList!.objectArray[index]! as Input;
    
stringBuffer!.append(key.getName());
    

                        if(index +1 < keyList!.size())
                        
                                    {
                                    
                        if(keyList!.size() == 2)
                        
                                    {
                                    stringBuffer!.append(InputMappingHelpPaintable.AND);
    

                                    }
                                
                        else {
                            
                        if(index +2 == keyList!.size())
                        
                                    {
                                    stringBuffer!.append(InputMappingHelpPaintable.MORE_THAN_TWO_IN_LIST_AND);
    

                                    }
                                
                        else {
                            stringBuffer!.append(InputMappingHelpPaintable.SEP);
    

                        }
                            

                        }
                            

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public paint(graphics: Graphics){
this.myFontProcessor!.process(graphics);
    

    let halfWidth: number = this.displayInfo!.getLastHalfWidth()!;;
    
graphics.setColor(this.basicColor!.intValue());
    
graphics.drawString(this.title, halfWidth -this.titleBeginWidth, this.updateMyFontProperties!.charHeight, this.anchor);
    

    let inputInfo: string[] = this.inputInfo;;
    

    let size: number = inputInfo!.length
                ;;
    

    let y: number = 0;;
    

    let deltaX: number = 0;;
    

    let size2: number = 0;;
    

    let actionString: string;;
    

    let input: Input;;
    

    let list: BasicArrayList;;
    

    let sep: string;;
    

    let beginWidth: number= 0;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
y= (index +3) *this.updateMyFontProperties!.charHeight;
    
deltaX= 0;
    
list= this.keyMappingArray[index]!;
    
size2= list.size();
    
beginWidth= this.updateMyFontProperties!.keymappingBeginWidthArray[index]!;
    
graphics.setColor(this.actionBasicColor[index]!.intValue());
    
actionString= this.updateMyFontProperties!.actionStringArray[index]!;
    
graphics.drawString(actionString, halfWidth -beginWidth +deltaX, y, this.anchor);
    
deltaX += this.updateMyFontProperties!.actionStringDeltaXArray[index]!;
    




                        for (
    let index2: number = 0;index2 < size2; index2++)
        {
input= list.objectArray[index2]! as Input;
    
graphics.setColor(this.inputBasicColorArray[index]![index2]!.intValue());
    
graphics.drawString(input.getName(), halfWidth -beginWidth +deltaX, y, this.anchor);
    
deltaX += this.updateMyFontProperties!.inputDeltaXArray[index]![index2]!;
    
sep= this.updateMyFontProperties!.sepArray[index]![index2]!;
    
graphics.setColor(this.basicColor!.intValue());
    
graphics.drawString(sep, halfWidth -beginWidth +deltaX, y, this.anchor);
    
deltaX += this.updateMyFontProperties!.sepWidthArray[index]![index2]!;
    
}

}

}


}

