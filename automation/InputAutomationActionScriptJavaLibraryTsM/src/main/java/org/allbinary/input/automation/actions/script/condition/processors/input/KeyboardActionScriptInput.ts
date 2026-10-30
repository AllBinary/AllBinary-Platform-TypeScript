
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

        


            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../../../../../../java/lang/Integer.js';
        
            import { Long } from '../../../../../../../../../java/lang/Long.js';
        
import { KeyEvent } from '../../../../../../../../../java/awt/event/KeyEvent.js';
//not GWT import const KeyEvent

import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { DomNodeHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper

import { DomSearchHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

import { ModDomHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper

import { KeySingletonFactory } from '../../../../../../../../../org/allbinary/input/KeySingletonFactory.js';
//not GWT import const KeySingletonFactory

import { KeyUtil } from '../../../../../../../../../org/allbinary/input/KeyUtil.js';
//not GWT import const KeyUtil

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicProfileActionScriptInput } from './BasicProfileActionScriptInput.js';
//sameFolderImports - not GWT import - same folder const BasicProfileActionScriptInput
import { KeyboardActionScriptInputInterface } from './KeyboardActionScriptInputInterface.js';
//sameFolderImports - not GWT import - same folder const KeyboardActionScriptInputInterface
import { KeyboardActionScriptInputJPanel } from './KeyboardActionScriptInputJPanel.js';
//sameFolderImports - not GWT import - same folder const KeyboardActionScriptInputJPanel
import { KeyboardActionScriptInputData } from './KeyboardActionScriptInputData.js';
//sameFolderImports - not GWT import - same folder const KeyboardActionScriptInputData
import { KeyboardInputAutomationProcessor } from './KeyboardInputAutomationProcessor.js';
//sameFolderImports - not GWT import - same folder const KeyboardInputAutomationProcessor

export class KeyboardActionScriptInput extends BasicProfileActionScriptInput implements KeyboardActionScriptInputInterface {
        

    private static readonly NAME: string = "Keyboard";

    static getText$overload2(integerArray: Integer[]): string{

    let index: number = 0;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    

        while(index < integerArray!.length)
        {

    let nextInteger: Integer = integerArray[index]!;;
    

                        if(KeyUtil.isNormallyDisplayed(nextInteger))
                        
                                    {
                                    stringBuffer!.append(KeyEvent.getKeyText(nextInteger));
    

                                    }
                                
                        else {
                            stringBuffer!.append("&#" +nextInteger +";");
    

                        }
                            
index++;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private keyArray: Integer[] = 
                                                        [
                                                            KeySingletonFactory.getInstance(KeyEvent.VK_0)
                                                        ];

    private keyboardActionScriptInputJPanel: KeyboardActionScriptInputJPanel;

    private press: boolean= false;

    private release: boolean= false;

    private delayBetweenKeys: number= 0;

public constructor (node: Node){
            super(NAME, node);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

    let actionNode: Node = DomSearchHelper.getNode(KeyboardActionScriptInputData.NAME, node.getChildNodes())!;;
    

                        if(actionNode != 
                                    null
                                )
                        
                                    {
                                    
    let nodeList: NodeList = actionNode!.getChildNodes()!;;
    

    let vector: BasicArrayList = new BasicArrayListD();;
    




                        for (
    let index: number = 0;index < nodeList!.getLength(); index++)
        {

    let childNode: Node = nodeList!.item(index)!;;
    

                        if(childNode!.getNodeName()!.startsWith(KeyboardActionScriptInputData.KEY))
                        
                                    {
                                    
    let keyString: string = DomNodeHelper.getTextNodeValue(childNode)!;;
    
vector.add(keyString.valueOf());
    

                                    }
                                
                             else 
                        if(childNode!.getNodeName()!.compareTo(KeyboardActionScriptInputData.DELAY_BETWEEN_KEYS) == 0)
                        
                                    {
                                    
    let time: string = DomNodeHelper.getTextNodeValue(childNode)!;;
    
this.setDelayBetweenKeys(Integer.valueOf(time)!.intValue());
    

                                    }
                                
                             else 
                        if(childNode!.getNodeName()!.compareTo(KeyboardActionScriptInputData.PRESS) == 0)
                        
                                    {
                                    
    let value: string = DomNodeHelper.getTextNodeValue(childNode)!;;
    
this.setPress(value.slice(, ).join(''));
    

                                    }
                                
                             else 
                        if(childNode!.getNodeName()!.compareTo(KeyboardActionScriptInputData.RELEASE) == 0)
                        
                                    {
                                    
    let value: string = DomNodeHelper.getTextNodeValue(childNode)!;;
    
this.setRelease(value.slice(, ).join(''));
    

                                    }
                                
                        else {
                            


                            throw new Exception("Action Script Input Unknown Node");
                    

                        }
                            
}

this.setKeyArray(vector.toArrayType(new Array(vector.size())) as Integer[]);
    

                                    }
                                
                        else {
                            


                            throw new Exception("Action Script Input Node Null");
                    

                        }
                            
this.setAllowsChildren(false);
    

                        if(!this.isPress() && !this.isRelease())
                        
                                    {
                                    this.setNormal();
    

                                    }
                                
this.keyboardActionScriptInputJPanel= new KeyboardActionScriptInputJPanel(this);
    
}


public constructor (){
            super(NAME);
                    

                            //For kotlin this is before the body of the constructor.
                    

                        if(!this.isPress() && !this.isRelease())
                        
                                    {
                                    this.setNormal();
    

                                    }
                                
this.setAllowsChildren(false);
    
this.setTime(120);
    
this.keyboardActionScriptInputJPanel= new KeyboardActionScriptInputJPanel(this);
    
}


    public getDelayBetweenKeys(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.delayBetweenKeys;
    
}


    public setDelayBetweenKeys(delayBetweenKeys: number){
this.delayBetweenKeys= delayBetweenKeys;
    
}


    public isPress(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.press;
    
}


    public setPress(press: boolean){
this.press= press;
    
}


    public isRelease(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.release;
    
}


    public setRelease(release: boolean){
this.release= release;
    
}


    public isNormal(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isRelease() && this.isPress();
    
}


    public setNormal(){
this.setPress(true);
    
this.setRelease(true);
    
}


    public getKeyArray(): Integer[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.keyArray;
    
}


    public setKeyArray(keyArray: Integer[]){

                        if(keyArray != 
                                    null
                                )
                        this.logUtil!.putF(CommonLabels.getInstance()!.START +keyArray!.length, this, "setKeyArray")
this.keyArray= keyArray;
    
}


    public showDialog(){
this.keyboardActionScriptInputJPanel!.getKeyActionJDialog()!.setVisible(true);
    
}

getText(...args: any[]): any {
   
    if (args.length === 0) return this.getText$overload1();
   
    if (args.length === 1) return this.getText$overload2(args[0]);
   
   throw new TypeError('No matching overload: getText'); }
  
    public getText$overload1(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getText(this.getKeyArray());;
    
}


    public setText(text: string){
this.logUtil!.putF(CommonLabels.getInstance()!.START +text, this, "setText");
    

    let integerArray: Integer[] = this.integerArrayValue(text)!;;
    
this.setKeyArray(integerArray);
    
}


    integerArrayValue(text: string): Integer[]{
this.logUtil!.putF(CommonLabels.getInstance()!.START +text, this, "integerArrayValue");
    

    let vector: BasicArrayList = new BasicArrayListD();;
    

    let index: number = 0;;
    

        while(index < text.length)
        {

    let aChar: string = text[index]!;;
    

                        if(aChar == '&'.charCodeAt(0))
                        
                                    {
                                    
                        if(text[index +1] == '#')
                        
                                    {
                                    
    let endIndex: number = text.indexOf(';', index +1)!;;
    

                        if(endIndex !=  -1)
                        
                                    {
                                    
    let nextCharString: string = text.substring(index +2, endIndex)!;;
    
this.logUtil!.putF(CommonLabels.getInstance()!.NEXT +" Char String: " +nextCharString, this, "integerArrayValue");
    
vector.add(substring.valueOf());
    
index= index +nextCharString!.length +3;
    


                        continue
                    

                                    }
                                

                                    }
                                

                                    }
                                
vector.add(KeySingletonFactory.getHashtable()!.get(aChar.slice(, ).join('')));
    
index++;
    
}


    let integerArray: Integer[] = vector.toArrayType(new Array(vector.size())) as Integer[];;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return integerArray;
    
}


    public toHashMap(): HashMap<any, any>{

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    




                        for (
    let index: number = 0;index < this.getKeyArray()!.length; index++)
        {
hashMap!.put(KeyboardActionScriptInputData.KEY +index, Integer.toString(this.getKeyArray()[index]!));
    
}

hashMap!.put(KeyboardActionScriptInputData.DELAY_BETWEEN_KEYS, Integer.toString(this.getDelayBetweenKeys()));
    
hashMap!.put(KeyboardActionScriptInputData.PRESS, Boolean.toString(this.isPress()));
    
hashMap!.put(KeyboardActionScriptInputData.RELEASE, Boolean.toString(this.isRelease()));
    
this.logUtil!.putF("HashMap: " +hashMap!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let node: Node = super.toXmlNode(document)!;;
    
node.appendChild(ModDomHelper.createNodeWithValueNodes(document, KeyboardActionScriptInputData.NAME, this.toHashMap()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                //@Throws(Exception.constructor)
            
    public process(frame: Long){
KeyboardInputAutomationProcessor.process(this);
    
}


    public log(){
this.logUtil!.putF(this.toString(), this, "log");
    
}


    public toString(): string{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(super.toString());
    
stringBuffer!.append(" Text: ");
    
stringBuffer!.append(this.getText());
    
stringBuffer!.append(" isPress: ");
    
stringBuffer!.appendboolean(this.isPress());
    
stringBuffer!.append(" isRelease: ");
    
stringBuffer!.appendboolean(this.isRelease());
    
stringBuffer!.append(" Between Key Delay: ");
    
stringBuffer!.appendint(this.getDelayBetweenKeys());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

