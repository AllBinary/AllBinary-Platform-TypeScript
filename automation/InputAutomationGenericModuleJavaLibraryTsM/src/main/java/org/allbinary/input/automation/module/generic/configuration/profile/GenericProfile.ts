
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
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { DomNodeHelper } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper

import { ModDomHelper } from '../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper

import { GenericProfileActions } from '../../../../../../../../org/allbinary/input/automation/module/generic/configuration/profile/actions/GenericProfileActions.js';
//not GWT import const GenericProfileActions

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GenericProfileDataWorkerData } from './GenericProfileDataWorkerData.js';
//sameFolderImports - not GWT import - same folder const GenericProfileDataWorkerData
import { GenericProfileDataWorkerType } from './GenericProfileDataWorkerType.js';
//sameFolderImports - not GWT import - same folder const GenericProfileDataWorkerType
import { GenericProfileData } from './GenericProfileData.js';
//sameFolderImports - not GWT import - same folder const GenericProfileData

export class GenericProfile
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private name: string;

    private vector: BasicArrayList;

    private genericProfileActions: GenericProfileActions;

    public constructor(...args: any[]) {
        super();
        if(args.length === 1 && args[0] instanceof Node) {
            this.constructor$0(args[0]);
        }
        else if(args.length === 1) {
            this.constructor$1(args[0]);
        }
        
    }
    
    private constructor$0(node: Node): void {
        this.setName(DomNodeHelper.getTextNodeValue(node));
    
this.vector= new BasicArrayListD();
    

    let nodeList: NodeList = node.getChildNodes()!;;
    
this.logUtil!.putF("Name: " +this.getName() +" Child Nodes: " +nodeList!.getLength(), this, "Contructor");
    




                        for (
    let index: number = 0;index < nodeList!.getLength(); index++)
        {

    let profileNode: Node = nodeList!.item(index)!;;
    

                        if(profileNode!.getNodeName()!.compareTo(GenericProfileDataWorkerData.NAME) == 0)
                        
                                    {
                                    
    let genericProfileDataWorkerType: GenericProfileDataWorkerType = GenericProfileDataWorkerType.getInstance(profileNode)!;;
    
this.logUtil!.putF("Adding GenericProfileDataWorkerType: " +genericProfileDataWorkerType!.toString(), this, "Contructor");
    
this.vector.add(genericProfileDataWorkerType);
    

                                    }
                                
}


    }
    
    private constructor$1(name: string): void {
        this.setName(name);
    
this.vector= new BasicArrayListD();
    

    }
    
    public getGenericProfileDataWorkerTypeVector(): BasicArrayList{



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

    let node: Node = ModDomHelper.createTextNode(document, GenericProfileData.NAME, this.name)!;;
    

    let size: number = this.vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let genericProfileDataWorkerType: GenericProfileDataWorkerType = this.vector.get(index) as GenericProfileDataWorkerType;;
    
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

