
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
        



import { Font } from "../../../../../javax/microedition/lcdui/Font.js";

    
import { Graphics } from "../../../../../javax/microedition/lcdui/Graphics.js";

    
import { GameKey } from "../../../../../org/allbinary/game/input/GameKey.js";

    
import { GameKeyFactory } from "../../../../../org/allbinary/game/input/GameKeyFactory.js";

    
import { Input } from "../../../../../org/allbinary/game/input/Input.js";

    
import { PlatformInputMappingFactory } from "../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js";

    
import { GameInputMapping } from "../../../../../org/allbinary/game/input/mapping/GameInputMapping.js";

    
import { PersistentInputMapping } from "../../../../../org/allbinary/game/input/mapping/PersistentInputMapping.js";

    
import { Anchor } from "../../../../../org/allbinary/graphics/Anchor.js";

    
import { BasicColor } from "../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { DisplayInfoSingleton } from "../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js";

    
import { MyFont } from "../../../../../org/allbinary/graphics/font/MyFont.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class InputMappingHelpPaintable extends HelpPaintable {
        

    private static readonly AND: string = " and ";
        
        

    private static readonly SEP: string = ", ";
        
        

    private static readonly MORE_THAN_TWO_IN_LIST_AND: string = ", and ";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

    private gameInputMappingArray: GameInputMapping[]

    private keyMappingArray: BasicArrayList[] = [];
        
        

    private actionBasicColor: BasicColor[] = [];
        
        

    private inputBasicColorArray: BasicColor[][] = Array(0) { arrayOfNulls<BasicColor?>(0) }
                                                            ;
        
        

    private selectedBasicColor: BasicColor

    private readonly NONE: GameKey = GameKeyFactory.getInstance()!.NONE;
        
        

    private readonly basicColorFactory: BasicColorFactory = BasicColorFactory.getInstance()!;
        
        
protected constructor (gameInputMappingArray: GameInputMapping[], backgroundBasicColor: BasicColor, basicColor: BasicColor)                        

                            : super("Input Mapping", backgroundBasicColor, basicColor){

            super();
                //var gameInputMappingArray = gameInputMappingArray
    //var backgroundBasicColor = backgroundBasicColor
    //var basicColor = basicColor


                            //For kotlin this is before the body of the constructor.
                    
this.gameInputMappingArray= gameInputMappingArray;
    
this.update(NONE, NONE);
    

                        if(backgroundBasicColor == this.basicColorFactory!.WHITE || basicColor == this.basicColorFactory!.WHITE)
                        
                                    {
                                    this.selectedBasicColor= this.basicColorFactory!.RED;
    

                                    }
                                
                        else {
                            this.selectedBasicColor= this.basicColorFactory!.WHITE;
    

                        }
                            
}


    public update(selectedGameKey: GameKey, selectedInput: Input){
    //var selectedGameKey = selectedGameKey
    //var selectedInput = selectedInput

    var stringMaker: StringMaker = new StringMaker();
        
        
;
    
this.logUtil!.putF(stringMaker!.append(CommonLabels.getInstance()!.START_LABEL)!.append("selected GameKey: ")!.append(this.stringUtil!.toString(selectedGameKey))!.append(" Input: ")!.append(this.stringUtil!.toString(selectedInput))!.toString(), this, commonStrings!.UPDATE);
    

    var gameKeyMapping: PersistentInputMapping = PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!;
        
        
;
    

    var size: number = gameInputMappingArray!.length
                ;
        
        
;
    

    var keyInfo: string[] = new Array(size);
        
        
;
    

    var keyMappingArray: BasicArrayList[] = new Array(size);
        
        
;
    

    var actionBasicColor: BasicColor[] = new Array(size);
        
        
;
    

    var inputBasicColorArray: BasicColor[][] = arrayOfNulls<Array<BasicColor?>>(size)
                                                            ;
        
        
;
    

    var gameInputMapping: GameInputMapping
;
    

    var gameKey: GameKey
;
    

    var list: BasicArrayList
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
gameInputMapping= gameInputMappingArray[index]!;
    
gameKey= gameInputMapping!.getGameKey();
    
list= gameKeyMapping!.getInputMapping()!.getMappedInput(gameKey);
    

    var size2: number = list.size()!;
        
        
;
    
inputBasicColorArray[index]= new Array(size2);
    




                        for (
    var index2: number = 0;
        
        
index2 < size2; index2++)
        {
inputBasicColorArray[index]![index2]= this.basicColor;
    
}


                        if(gameKey == selectedGameKey)
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append("Found: selected GameKey: ")!.append(this.stringUtil!.toString(selectedGameKey))!.toString(), this, commonStrings!.UPDATE);
    
actionBasicColor[index]= this.selectedBasicColor;
    

    var indexOfSelectedInput: number = list.indexOf(selectedInput)!;
        
        
;
    

                        if(indexOfSelectedInput >= 0)
                        
                                    {
                                    stringMaker!.delete(0, stringMaker!.length());
    
this.logUtil!.putF(stringMaker!.append("Found: selected Input: ")!.append(this.stringUtil!.toString(selectedInput))!.toString(), this, commonStrings!.UPDATE);
    
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
    
}


    get(keyList: BasicArrayList): string{
var keyList = keyList

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var key: Input
;
    

    var size: number = keyList!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
key= keyList!.objectArray[index]! as Input;
    
stringBuffer!.append(key.getName());
    

                        if(index +1 < keyList!.size())
                        
                                    {
                                    
                        if(keyList!.size() == 2)
                        
                                    {
                                    stringBuffer!.append(AND);
    

                                    }
                                
                        else {
                            
                        if(index +2 == keyList!.size())
                        
                                    {
                                    stringBuffer!.append(MORE_THAN_TWO_IN_LIST_AND);
    

                                    }
                                
                        else {
                            stringBuffer!.append(SEP);
    

                        }
                            

                        }
                            

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public getHeight(): number{

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    

    var inputInfo: string[] = this.inputInfo;
        
        
;
    

    var size: number = (inputInfo!.length +4);
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return myFont!.DEFAULT_CHAR_HEIGHT *size;
    
}


    private anchor: number = Anchor.TOP_LEFT;
        
        

    public paint(graphics: Graphics){
    //var graphics = graphics

    var font: Font = graphics.getFont()!;
        
        
;
    

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    

    var stringMaker: StringMaker = new StringMaker();
        
        
;
    

    var EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    

    var myFont: MyFont = MyFont.getInstance()!;
        
        
;
    

    var charHeight: number = myFont!.DEFAULT_CHAR_HEIGHT;
        
        
;
    

    var halfWidth: number = DisplayInfoSingleton.getInstance()!.getLastHalfWidth()!;
        
        
;
    

    var beginWidth: number = (font.stringWidth(this.TITLE) shr 1);
        
        
;
    
graphics.setColor(this.basicColor!.toInt());
    
graphics.drawString(this.TITLE, halfWidth -beginWidth, charHeight, anchor);
    

    var inputInfo: string[] = this.inputInfo;
        
        
;
    

    var size: number = inputInfo!.length
                ;
        
        
;
    

    var y: number = 0;
        
        
;
    

    var deltaX: number = 0;
        
        
;
    

    var size2: number = 0;
        
        
;
    

    var input: Input
;
    

    var actionString: string
;
    

    var list: BasicArrayList
;
    

    var keyMappings: string
;
    

    var sep: string
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
y= (index +3) *charHeight;
    
deltaX= 0;
    
list= this.keyMappingArray[index]!;
    
size2= list.size();
    
keyMappings= this.get(list);
    
stringMaker!.delete(0, stringMaker!.length());
    
actionString= stringMaker!.append(inputInfo[index]!)!.append(commonSeps!.COLON)!.append(commonSeps!.SPACE)!.append(commonSeps!.SPACE)!.toString();
    
stringMaker!.delete(0, stringMaker!.length());
    
beginWidth= (font.stringWidth(stringMaker!.append(actionString)!.append(keyMappings)!.toString()) shr 1);
    
graphics.setColor(this.actionBasicColor[index]!.toInt());
    
graphics.drawString(actionString, halfWidth -beginWidth +deltaX, y, anchor);
    
deltaX += font.stringWidth(actionString);
    




                        for (
    var index2: number = 0;
        
        
index2 < size2; index2++)
        {
input= list.objectArray[index2]! as Input;
    
graphics.setColor(this.inputBasicColorArray[index]![index2]!.toInt());
    
graphics.drawString(input.getName(), halfWidth -beginWidth +deltaX, y, anchor);
    
deltaX += font.stringWidth(input.getName());
    
sep= EMPTY_STRING;
    

                        if(index2 +1 < list.size())
                        
                                    {
                                    
                        if(list.size() == 2)
                        
                                    {
                                    sep= AND;
    

                                    }
                                
                        else {
                            
                        if(index2 +2 == list.size())
                        
                                    {
                                    sep= MORE_THAN_TWO_IN_LIST_AND;
    

                                    }
                                
                        else {
                            sep= SEP;
    

                        }
                            

                        }
                            

                                    }
                                

                        if(sep != EMPTY_STRING)
                        
                                    {
                                    graphics.setColor(this.basicColor!.toInt());
    
graphics.drawString(sep, halfWidth -beginWidth +deltaX, y, anchor);
    
deltaX += font.stringWidth(sep);
    

                                    }
                                
}

}

}


}
                
            

