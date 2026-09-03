
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
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Hashtable } from '../../../../../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
import { Iterator } from '../../../../../../../../../java/util/Iterator.js';
      //not GWT import const Iterator = globalThis.java.util.Iterator;

      
import { Set } from '../../../../../../../../../java/util/Set.js';
      //not GWT import const Set = globalThis.java.util.Set;

      
import { DomNodeHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      //not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
import { DomSearchHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      //not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { ModDomHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      //not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
import { BasicProfileActionScriptProcessor } from '../../../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/BasicProfileActionScriptProcessor.js';
      //not GWT import const BasicProfileActionScriptProcessor = globalThis.org.allbinary.input.automation.actions.script.condition.processors.BasicProfileActionScriptProcessor;

      
import { InputRobotFactory } from '../../../../../../../../../org/allbinary/input/automation/robot/InputRobotFactory.js';
      //not GWT import const InputRobotFactory = globalThis.org.allbinary.input.automation.robot.InputRobotFactory;

      
import { InputRobotInterface } from '../../../../../../../../../org/allbinary/input/automation/robot/InputRobotInterface.js';
      //not GWT import const InputRobotInterface = globalThis.org.allbinary.input.automation.robot.InputRobotInterface;

      
import { StdUtil } from '../../../../../../../../../org/allbinary/logic/StdUtil.js';
      //not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } from '../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProfileActionScriptInputInterface } from './ProfileActionScriptInputInterface.js';
//not GWT import const ProfileActionScriptInputInterface = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.ProfileActionScriptInputInterface;

                import { GenericProfileActionScriptInputData } from './GenericProfileActionScriptInputData.js';
//not GWT import const GenericProfileActionScriptInputData = globalThis.org.allbinary.input.automation.actions.script.condition.processors.input.GenericProfileActionScriptInputData;

                
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

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
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



