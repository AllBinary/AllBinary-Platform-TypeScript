
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

        


import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;

      
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { GameKey } from '../../../../../org/allbinary/game/input/GameKey.js';
//not GWT import const GameKey = globalThis.org.allbinary.game.input.GameKey;

      
import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
//not GWT import const GameKeyFactory = globalThis.org.allbinary.game.input.GameKeyFactory;

      
import { Input } from '../../../../../org/allbinary/game/input/Input.js';
//not GWT import const Input = globalThis.org.allbinary.game.input.Input;

      
import { PlatformInputMappingFactory } from '../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
//not GWT import const PlatformInputMappingFactory = globalThis.org.allbinary.game.input.PlatformInputMappingFactory;

      
import { GameInputMapping } from '../../../../../org/allbinary/game/input/mapping/GameInputMapping.js';
//not GWT import const GameInputMapping = globalThis.org.allbinary.game.input.mapping.GameInputMapping;

      
import { PersistentInputMapping } from '../../../../../org/allbinary/game/input/mapping/PersistentInputMapping.js';
//not GWT import const PersistentInputMapping = globalThis.org.allbinary.game.input.mapping.PersistentInputMapping;

      
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;

      
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;

      
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HelpPaintable } from './HelpPaintable.js';
//not GWT import - same folder const HelpPaintable = globalThis.org.allbinary.game.paint.help.HelpPaintable;

                //import { UpdateMyFontProperties } from './UpdateMyFontProperties.js';
//not GWT import - same folder const UpdateMyFontProperties = globalThis.org.allbinary.game.paint.help.UpdateMyFontProperties;

                
export class InputMappingHelpPaintable extends HelpPaintable {
        

    private static readonly AND: string = " and ";

    private static readonly SEP: string = ", ";

    private static readonly MORE_THAN_TWO_IN_LIST_AND: string = ", and ";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;

    readonly stringUtil: StringUtil = StringUtil.getInstance()!;

    private readonly basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;

    private readonly NONE: GameKey = GameKeyFactory.getInstance()!.NONE;

    private readonly EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;

    private gameInputMappingArray: GameInputMapping[];

    private keyMappingArray: BasicArrayList[] = [];

    private actionBasicColor: BasicColor[] = [];

    private inputBasicColorArray: BasicColor[][] = new Array(0).fill(null).map(() => new Array(0).fill(0))
                                                            ;

    private selectedBasicColor: BasicColor;

//inner= member=true isStatic=
UpdateMyFontProperties = class
            extends Object
         {
        
/*Static stuff is not allowed for TypeScript inner classes*//**/


    actionStringArray: string[] = StringUtil.getInstance()!.getArrayInstance()!;

    keymappingBeginWidthArray: number[] = NullUtil.getInstance()!.NULL_INT_ARRAY;

    actionStringDeltaXArray: number[] = NullUtil.getInstance()!.NULL_INT_ARRAY;

    inputDeltaXArray: number[][] = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY;

    sepArray: string[][] = new Array(0).fill(null).map(() => new Array(0).fill(0))
                                                            ;

    sepWidthArray: number[][] = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY;

    charHeight: number= 0;

}


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

    var font: Font = graphics.getFont()!;;
    

    var updateMyFontProperties = new this.UpdateMyFontProperties();;
    
updateMyFontProperties!.charHeight= font.getHeight();
    

    var stringMaker: StringMaker = new StringMaker();;
    

    var inputInfo: string[] = this.inputInfo;;
    

    var size: number = inputInfo!.length
                ;;
    
updateMyFontProperties!.actionStringArray= new Array(size);
    
updateMyFontProperties!.keymappingBeginWidthArray= new Array(size);
    
updateMyFontProperties!.actionStringDeltaXArray= new Array(size);
    
updateMyFontProperties!.inputDeltaXArray= new Array(size).fill(null).map(() => new Array(0).fill(0));
    
updateMyFontProperties!.sepArray= new Array(size).fill(null).map(() => new Array(0).fill(0))
                                                            ;
    
updateMyFontProperties!.sepWidthArray= new Array(size).fill(null).map(() => new Array(0).fill(0));
    

    var list: BasicArrayList;;
    

    var keyMappings: string;;
    

    var actionString: string;;
    

    var input: Input;;
    

    var size2: number = 0;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
list= this.keyMappingArray[index]!;
    
keyMappings= this.get(list);
    
stringMaker!.delete(0, stringMaker!.length());
    
actionString= stringMaker!.append(inputInfo[index]!)!.append(commonSeps!.COLON)!.append(commonSeps!.SPACE)!.append(commonSeps!.SPACE)!.toString();
    
updateMyFontProperties!.actionStringArray[index]= actionString;
    
stringMaker!.delete(0, stringMaker!.length());
    
updateMyFontProperties!.keymappingBeginWidthArray[index]= (font.stringWidth(stringMaker!.append(updateMyFontProperties!.actionStringArray[index]!)!.append(keyMappings)!.toString())>>1);
    
updateMyFontProperties!.actionStringDeltaXArray[index]= font.stringWidth(actionString);
    
size2= list.size();
    
updateMyFontProperties!.inputDeltaXArray[index]= new Array(size2);
    
updateMyFontProperties!.sepArray[index]= new Array(size2);
    
updateMyFontProperties!.sepWidthArray[index]= new Array(size2);
    




                        for (
    var index2: number = 0;index2 < size2; index2++)
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

    var stringMaker: StringMaker = new StringMaker();;
    
this.logUtil!.putF(stringMaker!.append(CommonLabels.getInstance()!.START_LABEL)!.append("selected GameKey: ")!.append(this.stringUtil!.toString(selectedGameKey))!.append(" Input: ")!.append(this.stringUtil!.toString(selectedInput))!.toString(), this, this.commonStrings!.UPDATE);
    

    var gameKeyMapping: PersistentInputMapping = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!;;
    

    var size: number = this.gameInputMappingArray!.length
                ;;
    

    var keyInfo: string[] = new Array(size);;
    

    var keyMappingArray: BasicArrayList[] = new Array(size);;
    

    var actionBasicColor: BasicColor[] = new Array(size);;
    

    var inputBasicColorArray: BasicColor[][] = new Array(size)
                                                            ;;
    

    var gameInputMapping: GameInputMapping;;
    

    var gameKey: GameKey;;
    

    var list: BasicArrayList;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
gameInputMapping= this.gameInputMappingArray[index]!;
    
gameKey= gameInputMapping!.getGameKey();
    
list= gameKeyMapping!.getInputMapping()!.getMappedInput(gameKey);
    

    var size2: number = list.size()!;;
    
inputBasicColorArray[index]= new Array(size2);
    




                        for (
    var index2: number = 0;index2 < size2; index2++)
        {
inputBasicColorArray[index]![index2]= this.basicColor;
    
}


                        if(gameKey == selectedGameKey)
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append("Found: selected GameKey: ")!.append(this.stringUtil!.toString(selectedGameKey))!.toString(), this, this.commonStrings!.UPDATE);
    
actionBasicColor[index]= this.selectedBasicColor;
    

    var indexOfSelectedInput: number = list.indexOf(selectedInput)!;;
    

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

    var stringBuffer: StringMaker = new StringMaker();;
    

    var key: Input;;
    

    var size: number = keyList!.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
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
    

    var halfWidth: number = this.displayInfo!.getLastHalfWidth()!;;
    
graphics.setColor(this.basicColor!.intValue());
    
graphics.drawString(this.title, halfWidth -this.titleBeginWidth, this.updateMyFontProperties!.charHeight, this.anchor);
    

    var inputInfo: string[] = this.inputInfo;;
    

    var size: number = inputInfo!.length
                ;;
    

    var y: number = 0;;
    

    var deltaX: number = 0;;
    

    var size2: number = 0;;
    

    var actionString: string;;
    

    var input: Input;;
    

    var list: BasicArrayList;;
    

    var sep: string;;
    

    var beginWidth: number= 0;;
    




                        for (
    var index: number = 0;index < size; index++)
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
    var index2: number = 0;index2 < size2; index2++)
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



