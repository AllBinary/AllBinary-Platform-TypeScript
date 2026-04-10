
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
        



import { KeyEvent } from "../../../../../../../../../java/awt/event/KeyEvent.js";

    
import { HashMap } from "../../../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../../../java/util/Vector.js";

    
import { DomNodeHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ModDomHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { KeySingletonFactory } from "../../../../../../../../../org/allbinary/input/KeySingletonFactory.js";

    
import { KeyUtil } from "../../../../../../../../../org/allbinary/input/KeyUtil.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../../../../../../../org/allbinary/string/CommonLabels.js";

    
import { Document } from "../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../../../org/w3c/dom/NodeList.js";

    

export class KeyboardActionScriptInput extends BasicProfileActionScriptInput
                , KeyboardActionScriptInputInterface {
        

    private static readonly NAME: string = "Keyboard";
        
        

    static getText(integerArray: Integer[]): string{
var integerArray = integerArray

    var index: number = 0;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        


        while(index < integerArray!.length)
        {

    var nextInteger: Integer = integerArray[index]!;
        
        


    
                        if(KeyUtil.isNormallyDisplayed(nextInteger))
                        
                                    {
                                    append(KeyEvent.getKeyText(nextInteger))

                                    }
                                
                        else {
                            append("&#" +nextInteger +";")

                        }
                            
index++
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private keyArray: Integer[] = 
                                                        [
                                                            KeySingletonFactory.getInstance(KeyEvent.VK_0)
                                                        ];
        
        

    private keyboardActionScriptInputJPanel: KeyboardActionScriptInputJPanel

    private press: boolean= false

    private release: boolean= false

    private delayBetweenKeys: number= 0
public constructor (node: Node)                        

                            : super(NAME, node){

            super();
            var node = node


                            //For kotlin this is before the body of the constructor.
                    
put(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR)

    var actionNode: Node = DomSearchHelper.getNode(KeyboardActionScriptInputData.NAME, node.getChildNodes())!;
        
        


    
                        if(actionNode != 
                                    null
                                )
                        
                                    {
                                    
    var nodeList: NodeList = actionNode!.getChildNodes()!;
        
        


    var vector: Vector = new Vector();
        
        





                        for (
    var index: number = 0;
        
        
index < nodeList!.getLength(); index++)
        {

    var childNode: Node = nodeList!.item(index)!;
        
        


    
                        if(childNode!.getNodeName()!.startsWith(KeyboardActionScriptInputData.KEY))
                        
                                    {
                                    
    var keyString: string = DomNodeHelper.getTextNodeValue(childNode)!;
        
        

add(keyString.valueOf())

                                    }
                                
                             else 
    
                        if(childNode!.getNodeName()!.compareTo(KeyboardActionScriptInputData.DELAY_BETWEEN_KEYS) == 0)
                        
                                    {
                                    
    var time: string = DomNodeHelper.getTextNodeValue(childNode)!;
        
        

this.setDelayBetweenKeys(Integer.valueOf(time)!.toInt())

                                    }
                                
                             else 
    
                        if(childNode!.getNodeName()!.compareTo(KeyboardActionScriptInputData.PRESS) == 0)
                        
                                    {
                                    
    var value: string = DomNodeHelper.getTextNodeValue(childNode)!;
        
        

this.setPress(value.concatToString()

                                    )

                                    }
                                
                             else 
    
                        if(childNode!.getNodeName()!.compareTo(KeyboardActionScriptInputData.RELEASE) == 0)
                        
                                    {
                                    
    var value: string = DomNodeHelper.getTextNodeValue(childNode)!;
        
        

this.setRelease(value.concatToString()

                                    )

                                    }
                                
                        else {
                            


                            throw Exception("Action Script Input Unknown Node")

                        }
                            
}

this.setKeyArray(vector.toArray(new Array(vector.length)) as Array<Integer?>)

                                    }
                                
                        else {
                            


                            throw Exception("Action Script Input Node Null")

                        }
                            
this.setAllowsChildren(false)

    
                        if(!this.isPress() && !this.isRelease())
                        
                                    {
                                    this.setNormal()

                                    }
                                
this.keyboardActionScriptInputJPanel= KeyboardActionScriptInputJPanel(this)
}

public constructor ()                        

                            : super(NAME){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    

    
                        if(!this.isPress() && !this.isRelease())
                        
                                    {
                                    this.setNormal()

                                    }
                                
this.setAllowsChildren(false)
this.setTime(120)
this.keyboardActionScriptInputJPanel= KeyboardActionScriptInputJPanel(this)
}


    public getDelayBetweenKeys(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.delayBetweenKeys;
    
}


    public setDelayBetweenKeys(delayBetweenKeys: number){
var delayBetweenKeys = delayBetweenKeys
this.delayBetweenKeys= delayBetweenKeys
}


    public isPress(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.press;
    
}


    public setPress(press: boolean){
var press = press
this.press= press
}


    public isRelease(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.release;
    
}


    public setRelease(release: boolean){
var release = release
this.release= release
}


    public isNormal(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isRelease() && this.isPress();
    
}


    public setNormal(){
this.setPress(true)
this.setRelease(true)
}


    public getKeyArray(): Integer[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return keyArray;
    
}


    public setKeyArray(keyArray: Integer[]){
var keyArray = keyArray

    
                        if(keyArray != 
                                    null
                                )
                        logUtil!.put(CommonLabels.getInstance()!.START +keyArray!.length, this, "setKeyArray")
this.keyArray= keyArray
}


    public showDialog(){
setVisible(true)
}


    public getText(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return getText(this.getKeyArray());
    
}


    public setText(text: string){
var text = text
put(CommonLabels.getInstance()!.START +text, this, "setText")

    var integerArray: Integer[] = this.integerArrayValue(text)!;
        
        

this.setKeyArray(integerArray)
}


    integerArrayValue(text: string): Integer[]{
var text = text
put(CommonLabels.getInstance()!.START +text, this, "integerArrayValue")

    var vector: Vector = new Vector();
        
        


    var index: number = 0;
        
        


        while(index < text.length)
        {

    var aChar: string = text[index]!;
        
        


    
                        if(aChar == '&')
                        
                                    {
                                    
    
                        if(text[index +1] == '#')
                        
                                    {
                                    
    var endIndex: number = text.indexOf(';', index +1)!;
        
        


    
                        if(endIndex !=  -1)
                        
                                    {
                                    
    var nextCharString: string = text.substring(index +2, endIndex)!;
        
        

put("Next Char String: " +nextCharString, this, "integerArrayValue")
add(substring.valueOf())
index= index +nextCharString!.length +3


                        continue
                    

                                    }
                                

                                    }
                                

                                    }
                                
add(KeySingletonFactory.getHashtable()!.get(aChar.concatToString()

                                    ))
index++
}


    var integerArray: Integer[] = vector.toArray(new Array(vector.length)) as Array<Integer?>;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return integerArray;
    
}


    public toHashMap(): HashMap<Any, Any>{

    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        





                        for (
    var index: number = 0;
        
        
index < this.getKeyArray()!.length; index++)
        {
put(KeyboardActionScriptInputData.KEY +index, Integer.toString(this.getKeyArray()[index]!))
}

put(KeyboardActionScriptInputData.DELAY_BETWEEN_KEYS, Integer.toString(this.getDelayBetweenKeys()))
put(KeyboardActionScriptInputData.PRESS, Boolean.toString(this.isPress()))
put(KeyboardActionScriptInputData.RELEASE, Boolean.toString(this.isRelease()))
put("HashMap: " +hashMap!.toString(), this, "toHashMap()")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                @Throws(Exception::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = super.toXmlNode(document)!;
        
        

appendChild(ModDomHelper.createNodeWithValueNodes(document, KeyboardActionScriptInputData.NAME, this.toHashMap()))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                @Throws(Exception::class)
            
    public process(frame: Long){
var frame = frame
process(this)
}


    public log(){
put(this.toString(), this, "log")
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

append(super.toString())
append(" Text: ")
append(this.getText())
append(" isPress: ")
appendboolean(this.isPress())
append(" isRelease: ")
appendboolean(this.isRelease())
append(" Between Key Delay: ")
appendint(this.getDelayBetweenKeys())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

