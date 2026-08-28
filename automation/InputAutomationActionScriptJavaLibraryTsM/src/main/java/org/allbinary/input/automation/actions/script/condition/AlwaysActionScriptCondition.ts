
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
        



            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../../java/lang/Long.js';
        
//not game specific package import { HashMap } from '../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { DomNodeHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
//not game specific package import { DomSearchHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
//not game specific package import { ModDomHelper } from '../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not game specific package import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { Document } from '../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { NodeList } from '../../../../../../../org/w3c/dom/NodeList.js';
      const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicProfileActionScriptCondition } from './BasicProfileActionScriptCondition.js';
import { AlwaysActionScriptConditionInterface } from './AlwaysActionScriptConditionInterface.js';
import { AlwaysActionScriptConditionJPanel } from './AlwaysActionScriptConditionJPanel.js';
import { AlwaysActionScriptConditionData } from './AlwaysActionScriptConditionData.js';

export class AlwaysActionScriptCondition extends BasicProfileActionScriptCondition implements AlwaysActionScriptConditionInterface {
        

    private static readonly NAME: string = "Always On/Off";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private alwaysActionScriptConditionJPanel: AlwaysActionScriptConditionJPanel;

    private isOn: boolean= false;

public constructor (node: Node){
            super(AlwaysActionScriptCondition.NAME, node);
                    

                            //For kotlin this is before the body of the constructor.
                    

    var actionNode: Node = DomSearchHelper.getNode(AlwaysActionScriptConditionData.NAME, node.getChildNodes())!;;
    

                        if(actionNode != 
                                    null
                                )
                        
                                    {
                                    
    var nodeList: NodeList = actionNode!.getChildNodes()!;;
    




                        for (
    var index: number = 0;index < nodeList!.getLength(); index++)
        {

    var childNode: Node = nodeList!.item(index)!;;
    

                        if(childNode!.getNodeName()!.compareTo(AlwaysActionScriptConditionData.IS_ON) == 0)
                        
                                    {
                                    
    var booleanString: string = DomNodeHelper.getTextNodeValue(childNode)!;;
    
this.setIsOn(.valueOf());
    

                                    }
                                
                        else {
                            


                            throw new Exception("Action Script Condition Unknown Node");
                    

                        }
                            
}


                                    }
                                
                        else {
                            


                            throw new Exception("Action Script Condition Node Null");
                    

                        }
                            
this.init();
    
}


public constructor (){
            super(AlwaysActionScriptCondition.NAME);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.init();
    
}


    init(){
this.alwaysActionScriptConditionJPanel= new AlwaysActionScriptConditionJPanel(this);
    
}


    public isIsOn(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isOn;
    
}


    public setIsOn(isOn: boolean){
this.isOn= isOn;
    
}


    public showDialog(){
this.alwaysActionScriptConditionJPanel!.getAlwaysActionJDialog()!.setVisible(true);
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    
hashMap!.put(AlwaysActionScriptConditionData.IS_ON, Boolean.toString(this.isIsOn()));
    
this.logUtil!.putF("HashMap: " +hashMap!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = super.toXmlNode(document)!;;
    
node.appendChild(ModDomHelper.createNodeWithValueNodes(document, AlwaysActionScriptConditionData.NAME, this.toHashMap()));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


                //@Throws(Exception.constructor)
            
    public shouldProcess(frame: Long): boolean{

                        if(this.isIsOn())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.shouldProcess(frame);;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public log(){
this.logUtil!.putF("Is On: " +this.isIsOn(), this, "log");
    
}


}



