
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { DomSearchHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

import { DomDocumentFileHelper } from '../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentFileHelper.js';
//not GWT import const DomDocumentFileHelper

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { AbFile } from '../../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { TransformInfoData } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
//not GWT import const TransformInfoData

import { TransformInfoProperties } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoProperties.js';
//not GWT import const TransformInfoProperties

import { TransformInfoPropertiesFactory } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoPropertiesFactory.js';
//not GWT import const TransformInfoPropertiesFactory

import { TransformInfosData } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfosData.js';
//not GWT import const TransformInfosData

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Document } from '../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TransformInfoPropertiesDocument
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly document: Document;

public constructor (filePath: string){

            super();
        
    let xmlFile: AbFile = AbFile.createAbFile(filePath)!;;
    
this.document= DomDocumentFileHelper.createDocument(xmlFile);
    
}


    public toTransformInfoPropertiesHashMap(): HashMap<any, any>{

 try { 
    let transformInfoPropertiesHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    let transformInfosNode: Node = this.document.getElementsByTagName(TransformInfosData.getInstance()!.NAME)!.item(0)!;;
    

    let transformInfosChildNodeList: NodeList = transformInfosNode!.getChildNodes()!;;
    

    let transformInfoNodeVector: BasicArrayList = DomSearchHelper.getAllNodes(TransformInfoData.getInstance()!.NAME, transformInfosChildNodeList)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Size: " +transformInfoNodeVector!.size(), this, "toTransformInfoPropertiesHashMap()");
    

                                    }
                                

    let size: number = transformInfoNodeVector!.size()!;;
    

    let node: Node;;
    

    let transformInfoProperties: TransformInfoProperties;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
node= transformInfoNodeVector!.get(index) as Node;
    
transformInfoProperties= TransformInfoPropertiesFactory.getInstance()!.getInstance(node);
    
transformInfoPropertiesHashMap!.put(transformInfoProperties!.getName(), transformInfoProperties);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return transformInfoPropertiesHashMap;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "toTransformInfoPropertiesHashMap()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


}

