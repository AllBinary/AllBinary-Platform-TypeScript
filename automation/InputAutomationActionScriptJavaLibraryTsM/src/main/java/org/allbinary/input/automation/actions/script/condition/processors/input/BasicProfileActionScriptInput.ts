
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
        
import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { Iterator } from '../../../../../../../../../java/util/Iterator.js';
//not GWT import const Iterator

import { Set } from '../../../../../../../../../java/util/Set.js';
//not GWT import const Set

import { DomNodeHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper

import { DomSearchHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

import { ModDomHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper

import { BasicProfileActionScriptProcessor } from '../../../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/BasicProfileActionScriptProcessor.js';
//not GWT import const BasicProfileActionScriptProcessor

import { InputRobotFactory } from '../../../../../../../../../org/allbinary/input/automation/robot/InputRobotFactory.js';
//not GWT import const InputRobotFactory

import { InputRobotInterface } from '../../../../../../../../../org/allbinary/input/automation/robot/InputRobotInterface.js';
//not GWT import const InputRobotInterface

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProfileActionScriptInputInterface } from './ProfileActionScriptInputInterface.js';
//not GWT import - same folder const ProfileActionScriptInputInterface
import { GenericProfileActionScriptInputData } from './GenericProfileActionScriptInputData.js';
//not GWT import - same folder const GenericProfileActionScriptInputData

export class BasicProfileActionScriptInput extends BasicProfileActionScriptProcessor implements ProfileActionScriptInputInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private inputRobotInterface: InputRobotInterface;

    private time: number= 0;

public constructor (label: string, node: Node){
            super(label, node);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.START +label, this, this.commonStrings!.CONSTRUCTOR);
    

    let actionNode: Node = DomSearchHelper.getNode(GenericProfileActionScriptInputData.TYPE, node.getChildNodes())!;;
    

    let inputTypeString: string = DomNodeHelper.getTextNodeValue(actionNode)!;;
    

    let timeNode: Node = DomSearchHelper.getNodeNoThrow(GenericProfileActionScriptInputData.DELAY, node.getChildNodes())!;;
    

                        if(timeNode != 
                                    null
                                )
                        
                                    {
                                    
    let delayString: string = DomNodeHelper.getTextNodeValue(timeNode)!;;
    
this.setTime(Integer.valueOf(delayString)!.intValue());
    

                                    }
                                
                        else {
                            this.setTime(0);
    

                        }
                            
this.setInputRobotInterface(InputRobotFactory.getInstance()!.get(inputTypeString));
    
}


public constructor (label: string){
            super(label);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.START +label, this, this.commonStrings!.CONSTRUCTOR);
    

    let inputRobotFactory: InputRobotFactory = InputRobotFactory.getInstance()!;;
    

    let hashtable: ABHashtable<any, any> = inputRobotFactory!.get() as ABHashtable<any, any>;;
    

    let set: Set = hashtable.keys()!;;
    

    let iterator: Iterator = set.iterator()!;;
    
this.setInputRobotInterface(inputRobotFactory!.get(iterator.next() as string));
    
this.setTime(0);
    
}


    public getTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.time;
    
}


    public setTime(time: number){
this.time= time;
    
}


    public BasicProfileActionScriptInput_toHashMap(): HashMap<any, any>{

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(GenericProfileActionScriptInputData.TYPE, this.getInputRobotInterface()!.getName());
    
hashMap!.put(GenericProfileActionScriptInputData.DELAY, Integer.toString(this.getTime()));
    
this.logUtil!.putF("HashMap: " +hashMap!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let node: Node = ModDomHelper.createNodeWithValueNodes(document, GenericProfileActionScriptInputData.NAME, this.BasicProfileActionScriptInput_toHashMap())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public setInputRobotInterface(inputRobotInterface: InputRobotInterface){
this.inputRobotInterface= inputRobotInterface;
    
}


    public getInputRobotInterface(): InputRobotInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.inputRobotInterface;
    
}


    public toString(): string{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(super.toString());
    
stringBuffer!.append(" Input Type: ");
    

                        if(this.getInputRobotInterface() != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(this.getInputRobotInterface()!.getName());
    

                                    }
                                
                        else {
                            stringBuffer!.append(StringUtil.getInstance()!.NULL_STRING);
    

                        }
                            
stringBuffer!.append(" Time: ");
    
stringBuffer!.appendlong(this.getTime());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

