
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

        


            import { Object } from '../../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { DomNodeHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
import { DomNodeInterface } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { DomSearchHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { ModDomHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
import { GenericProfileActionScript } from '../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/script/GenericProfileActionScript.js';
//not GWT import const GenericProfileActionScript = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.script.GenericProfileActionScript;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GenericProfileActionJPanel } from './GenericProfileActionJPanel.js';
//not GWT import - same folder const GenericProfileActionJPanel = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileActionJPanel;

                import { GenericProfileActionData } from './GenericProfileActionData.js';
//not GWT import - same folder const GenericProfileActionData = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileActionData;

                
export class GenericProfileAction
            extends Object
         implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private name: string;

    private genericProfileActionScript: GenericProfileActionScript;

    private genericProfileActionJPanel: GenericProfileActionJPanel;

public constructor (genericProfileActionJPanel: GenericProfileActionJPanel, node: Node){

            super();
        
    var actionNameNode: Node = DomSearchHelper.getNode(GenericProfileActionData.NAME, node.getChildNodes())!;;
    

                        if(actionNameNode != 
                                    null
                                )
                        
                                    {
                                    this.name= DomNodeHelper.getTextNodeValue(actionNameNode);
    

                                    }
                                
                        else {
                            


                            throw new Exception("Profile Action Name Node Null");
                    

                        }
                            
this.setGenericProfileActionScript(new GenericProfileActionScript(this.genericProfileActionJPanel, node));
    
}


public constructor (name: string){

            super();
        this.name= name;
    
this.setGenericProfileActionScript(new GenericProfileActionScript(this.genericProfileActionJPanel));
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public setName(name: string){
this.name= name;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(GenericProfileActionData.NAME, this.name);
    
this.logUtil!.putF("HashMap: " +hashMap!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = ModDomHelper.createNodeWithValueNodes(document, GenericProfileActionData.NAME, this.toHashMap())!;;
    
node.appendChild(getGenericProfileActionScript()!.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public getGenericProfileActionScript(): GenericProfileActionScript{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.genericProfileActionScript;
    
}


    public setGenericProfileActionScript(genericProfileActionScript: GenericProfileActionScript){
this.genericProfileActionScript= genericProfileActionScript;
    
}


}



