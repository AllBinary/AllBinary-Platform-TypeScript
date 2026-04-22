
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
        



            import { Integer } from "../../../../../../../../../java/lang/Integer.js";
        
import { HashMap } from "../../../../../../../../../java/util/HashMap.js";

    
import { Hashtable } from "../../../../../../../../../java/util/Hashtable.js";

    
import { Iterator } from "../../../../../../../../../java/util/Iterator.js";

    
import { Set } from "../../../../../../../../../java/util/Set.js";

    
import { DomNodeHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ModDomHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { BasicProfileActionScriptProcessor } from "../../../../../../../../../org/allbinary/input/automation/actions/script/condition/processors/BasicProfileActionScriptProcessor.js";

    
import { InputRobotFactory } from "../../../../../../../../../org/allbinary/input/automation/robot/InputRobotFactory.js";

    
import { InputRobotInterface } from "../../../../../../../../../org/allbinary/input/automation/robot/InputRobotInterface.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Document } from "../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ProfileActionScriptInputInterface } from "./ProfileActionScriptInputInterface.js";

import { GenericProfileActionScriptInputData } from "./GenericProfileActionScriptInputData.js";

export class BasicProfileActionScriptInput extends BasicProfileActionScriptProcessor implements ProfileActionScriptInputInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private inputRobotInterface: InputRobotInterface

    private time: number= 0
public constructor (label: string, node: Node){
            super(label, node);
                        //var label = label
    //var node = node


                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(commonStrings!.START +label, this, commonStrings!.CONSTRUCTOR);
    

    var actionNode: Node = DomSearchHelper.getNode(GenericProfileActionScriptInputData.TYPE, node.getChildNodes())!;
        
        
;
    

    var inputTypeString: string = DomNodeHelper.getTextNodeValue(actionNode)!;
        
        
;
    

    var timeNode: Node = DomSearchHelper.getNodeNoThrow(GenericProfileActionScriptInputData.DELAY, node.getChildNodes())!;
        
        
;
    

                        if(timeNode != 
                                    null
                                )
                        
                                    {
                                    
    var delayString: string = DomNodeHelper.getTextNodeValue(timeNode)!;
        
        
;
    
this.setTime(Integer.valueOf(delayString)!.toInt());
    

                                    }
                                
                        else {
                            this.setTime(0);
    

                        }
                            
this.setInputRobotInterface(InputRobotFactory.getInstance()!.get(inputTypeString));
    
}

public constructor (label: string){
            super(label);
                        //var label = label


                            //For kotlin this is before the body of the constructor.
                    
this.logUtil!.putF(commonStrings!.START +label, this, commonStrings!.CONSTRUCTOR);
    

    var inputRobotFactory: InputRobotFactory = InputRobotFactory.getInstance()!;
        
        
;
    

    var hashtable: Hashtable<any, any> = inputRobotFactory!.get();

                         as Hashtable<any, any>;
        
        
;
    

    var set: Set = hashtable.keys!;
        
        
;
    

    var iterator: Iterator = set.iterator()!;
        
        
;
    
this.setInputRobotInterface(inputRobotFactory!.get(iterator.next();

                         as String));
    
this.setTime(0);
    
}


    public getTime(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return time;
    
}


    public setTime(time: number){
var time = time
this.time= time;
    
}


    public BasicProfileActionScriptInput_toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(GenericProfileActionScriptInputData.TYPE, this.getInputRobotInterface()!.getName());
    
hashMap!.put(GenericProfileActionScriptInputData.DELAY, Integer.toString(this.getTime()));
    
this.logUtil!.putF("HashMap: " +hashMap!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = ModDomHelper.createNodeWithValueNodes(document, GenericProfileActionScriptInputData.NAME, this.BasicProfileActionScriptInput_toHashMap())!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public setInputRobotInterface(inputRobotInterface: InputRobotInterface){
var inputRobotInterface = inputRobotInterface
this.inputRobotInterface= inputRobotInterface;
    
}


    public getInputRobotInterface(): InputRobotInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputRobotInterface;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
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
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

