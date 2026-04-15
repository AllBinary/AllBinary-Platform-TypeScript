
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
        



            import HashMap from "@ohos.util.HashMap";
        

//import { HashMap } from "../../../../../../../../../java/util/HashMap.js";

    
import { DomNodeHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomNodeInterface } from "../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { DomSearchHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ModDomHelper } from "../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { GenericProfileActionScript } from "../../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/script/GenericProfileActionScript.js";

    
import { LogUtil } from "../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Document } from "../../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../../org/w3c/dom/Node.js";

    

export class GenericProfileAction
            extends Object
        
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private name: string

    private genericProfileActionScript: GenericProfileActionScript

    private genericProfileActionJPanel: GenericProfileActionJPanel
public constructor (genericProfileActionJPanel: GenericProfileActionJPanel, node: Node){

            super();
            var genericProfileActionJPanel = genericProfileActionJPanel
var node = node

    var actionNameNode: Node = DomSearchHelper.getNode(GenericProfileActionData.NAME, node.getChildNodes())!;
        
        
;
    

                        if(actionNameNode != 
                                    null
                                )
                        
                                    {
                                    this.name= DomNodeHelper.getTextNodeValue(actionNameNode);
    

                                    }
                                
                        else {
                            


                            throw new Error("Profile Action Name Node Null")

                        }
                            
this.setGenericProfileActionScript(new GenericProfileActionScript(this.genericProfileActionJPanel, node));
    
}

public constructor (name: string){

            super();
            var name = name
this.name= name;
    
this.setGenericProfileActionScript(new GenericProfileActionScript(this.genericProfileActionJPanel));
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    public setName(name: string){
var name = name
this.name= name;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(GenericProfileActionData.NAME, this.name);
    
this.logUtil!.putF("HashMap: " +hashMap!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = ModDomHelper.createNodeWithValueNodes(document, GenericProfileActionData.NAME, this.toHashMap())!;
        
        
;
    
node.appendChild(getGenericProfileActionScript()!.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public getGenericProfileActionScript(): GenericProfileActionScript{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return genericProfileActionScript;
    
}


    public setGenericProfileActionScript(genericProfileActionScript: GenericProfileActionScript){
var genericProfileActionScript = genericProfileActionScript
this.genericProfileActionScript= genericProfileActionScript;
    
}


}
                
            

