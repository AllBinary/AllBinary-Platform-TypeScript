
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
        



            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
//not game specific package import { Vector } from '../../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { DomNodeHelper } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
//not game specific package import { ModDomHelper } from '../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not game specific package import { GenericProfileActions } from '../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActions.js';
      const GenericProfileActions = globalThis.org.allbinary.input.automation.module.generic.configuration.profile.actions.GenericProfileActions;

      
//not game specific package import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { NodeList } from '../../../../../../../../org/w3c/dom/NodeList.js';
      const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GenericProfileDataWorkerData } from './GenericProfileDataWorkerData.js';
import { GenericProfileDataWorkerType } from './GenericProfileDataWorkerType.js';
import { GenericProfileData } from './GenericProfileData.js';

export class GenericProfile
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private name: string;

    private vector: Vector;

    private genericProfileActions: GenericProfileActions;

public constructor (node: Node){

            super();
        this.setName(DomNodeHelper.getTextNodeValue(node));
    
this.vector= new Vector();
    

    var nodeList: NodeList = node.getChildNodes()!;;
    
this.logUtil!.putF("Name: " +this.getName() +" Child Nodes: " +nodeList!.getLength(), this, "Contructor");
    




                        for (
    var index: number = 0;index < nodeList!.getLength(); index++)
        {

    var profileNode: Node = nodeList!.item(index)!;;
    

                        if(profileNode!.getNodeName()!.compareTo(GenericProfileDataWorkerData.NAME) == 0)
                        
                                    {
                                    
    var genericProfileDataWorkerType: GenericProfileDataWorkerType = GenericProfileDataWorkerType.getInstance(profileNode)!;;
    
this.logUtil!.putF("Adding GenericProfileDataWorkerType: " +genericProfileDataWorkerType!.toString(), this, "Contructor");
    
this.vector.add(genericProfileDataWorkerType);
    

                                    }
                                
}

}


public constructor (name: string){

            super();
        this.setName(name);
    
this.vector= new Vector();
    
}


    public getGenericProfileDataWorkerTypeVector(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.vector;
    
}


    public add(genericProfileDataWorkerType: GenericProfileDataWorkerType){

                        if(!this.vector.contains(genericProfileDataWorkerType))
                        this.vector.add(genericProfileDataWorkerType)
}


    public remove(genericProfileDataWorkerType: GenericProfileDataWorkerType){
this.vector.remove(genericProfileDataWorkerType);
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = ModDomHelper.createTextNode(document, GenericProfileData.NAME, this.name)!;;
    

    var size: number = this.vector.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var genericProfileDataWorkerType: GenericProfileDataWorkerType = this.vector.get(index) as GenericProfileDataWorkerType;;
    
node.appendChild(genericProfileDataWorkerType!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public setName(name: string){
this.name= name;
    
}


    public getGenericProfileActions(): GenericProfileActions{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.genericProfileActions;
    
}


    public setGenericProfileActions(genericProfileActions: GenericProfileActions){
this.genericProfileActions= genericProfileActions;
    
}


}



