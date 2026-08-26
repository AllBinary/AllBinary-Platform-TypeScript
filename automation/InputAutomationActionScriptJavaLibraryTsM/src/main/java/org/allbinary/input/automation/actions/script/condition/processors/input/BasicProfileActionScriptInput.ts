
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
        
//not game specific package import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Hashtable } from '../../../../../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { Iterator } from '../../../../../../../../../java/util/Iterator.js';
      const Iterator = globalThis.java.util.Iterator;

      
//not game specific package import { Set } from '../../../../../../../../../java/util/Set.js';
      const Set = globalThis.java.util.Set;

      
//not game specific package import { DomNodeHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
//not game specific package import { DomSearchHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
//not game specific package import { ModDomHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not game specific package import { BasicProfileActionScriptProcessor } from '../../../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/BasicProfileActionScriptProcessor.js';
      const BasicProfileActionScriptProcessor = globalThis.org.allbinary.input.automation.actions.script.condition.processors.BasicProfileActionScriptProcessor;

      
//not game specific package import { InputRobotFactory } from '../../../../../../../../../org/allbinary/input/automation/robot/InputRobotFactory.js';
      const InputRobotFactory = globalThis.org.allbinary.input.automation.robot.InputRobotFactory;

      
//not game specific package import { InputRobotInterface } from '../../../../../../../../../org/allbinary/input/automation/robot/InputRobotInterface.js';
      const InputRobotInterface = globalThis.org.allbinary.input.automation.robot.InputRobotInterface;

      
//not game specific package import { LogUtil } from '../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProfileActionScriptInputInterface } from './ProfileActionScriptInputInterface.js';
import { GenericProfileActionScriptInputData } from './GenericProfileActionScriptInputData.js';

export class BasicProfileActionScriptInput extends BasicProfileActionScriptProcessor implements ProfileActionScriptInputInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private inputRobotInterface: InputRobotInterface;

    private time: number= 0;

public constructor (label: string, node: Node){
            super(label, node);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(this.commonStrings!.START +label, this, this.commonStrings!.CONSTRUCTOR);
    

    var actionNode: Node = DomSearchHelper.getNode(GenericProfileActionScriptInputData.TYPE, node.getChildNodes())!;;
    

    var inputTypeString: string = DomNodeHelper.getTextNodeValue(actionNode)!;;
    

    var timeNode: Node = DomSearchHelper.getNodeNoThrow(GenericProfileActionScriptInputData.DELAY, node.getChildNodes())!;;
    

                        if(timeNode != 
                                    null
                                )
                        
                                    {
                                    
    var delayString: string = DomNodeHelper.getTextNodeValue(timeNode)!;;
    
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
    

    var inputRobotFactory: InputRobotFactory = InputRobotFactory.getInstance()!;;
    

    var hashtable: Hashtable<any, any> = inputRobotFactory!.get() as Hashtable<any, any>;;
    

    var set: Set = hashtable.keys()!;;
    

    var iterator: Iterator = set.iterator()!;;
    
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

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    
hashMap!.put(GenericProfileActionScriptInputData.TYPE, this.getInputRobotInterface()!.getName());
    
hashMap!.put(GenericProfileActionScriptInputData.DELAY, Integer.toString(this.getTime()));
    
this.logUtil!.putF("HashMap: " +hashMap!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = ModDomHelper.createNodeWithValueNodes(document, GenericProfileActionScriptInputData.NAME, this.BasicProfileActionScriptInput_toHashMap())!;;
    



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

    var stringBuffer: StringMaker = new StringMaker();;
    
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
                
            

