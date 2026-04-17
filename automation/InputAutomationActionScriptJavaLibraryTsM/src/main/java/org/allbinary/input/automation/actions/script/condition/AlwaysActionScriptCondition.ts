
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
        



import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { DomNodeHelper } from "../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ModDomHelper } from "../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../org/w3c/dom/NodeList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicProfileActionScriptCondition } from "./BasicProfileActionScriptCondition.js";

import { AlwaysActionScriptConditionData } from "./AlwaysActionScriptConditionData.js";

export class AlwaysActionScriptCondition extends BasicProfileActionScriptCondition implements AlwaysActionScriptConditionInterface {
        

    private static readonly NAME: string = "Always On/Off";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private alwaysActionScriptConditionJPanel: AlwaysActionScriptConditionJPanel

    private isOn: boolean= false
public constructor (node: Node)                        

                            : super(AlwaysActionScriptCondition.NAME, node){

            super();
            var node = node


                            //For kotlin this is before the body of the constructor.
                    

    var actionNode: Node = DomSearchHelper.getNode(AlwaysActionScriptConditionData.NAME, node.getChildNodes())!;
        
        
;
    

                        if(actionNode != 
                                    null
                                )
                        
                                    {
                                    
    var nodeList: NodeList = actionNode!.getChildNodes()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < nodeList!.getLength(); index++)
        {

    var childNode: Node = nodeList!.item(index)!;
        
        
;
    

                        if(childNode!.getNodeName()!.compareTo(AlwaysActionScriptConditionData.IS_ON) == 0)
                        
                                    {
                                    
    var booleanString: string = DomNodeHelper.getTextNodeValue(childNode)!;
        
        
;
    
this.setIsOn(.
                            );
    

                                    }
                                
                        else {
                            


                            throw new Error("Action Script Condition Unknown Node")

                        }
                            
}


                                    }
                                
                        else {
                            


                            throw new Error("Action Script Condition Node Null")

                        }
                            
this.init();
    
}

public constructor ()                        

                            : super(AlwaysActionScriptCondition.NAME){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
this.init();
    
}


    init(){
this.alwaysActionScriptConditionJPanel= new AlwaysActionScriptConditionJPanel(this);
    
}


    public isIsOn(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isOn;
    
}


    public setIsOn(isOn: boolean){
var isOn = isOn
this.isOn= isOn;
    
}


    public showDialog(){
this.alwaysActionScriptConditionJPanel!.getAlwaysActionJDialog()!.setVisible(true);
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(AlwaysActionScriptConditionData.IS_ON, Boolean.toString(this.isIsOn()));
    
this.logUtil!.putF("HashMap: " +hashMap!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = super.toXmlNode(document)!;
        
        
;
    
node.appendChild(ModDomHelper.createNodeWithValueNodes(document, AlwaysActionScriptConditionData.NAME, this.toHashMap()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                //@Throws(Error::class)
            
    public shouldProcess(frame: Long): boolean{
var frame = frame

                        if(this.isIsOn())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.shouldProcess(frame);

                        ;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public log(){
this.logUtil!.putF("Is On: " +this.isIsOn(), this, "log");
    
}


}
                
            

