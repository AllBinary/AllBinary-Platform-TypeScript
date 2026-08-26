
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
        
//not game specific package import { HashMap } from '../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Vector } from '../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { DomSearchHelper } from '../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
//not game specific package import { DomDocumentFileHelper } from '../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentFileHelper.js';
      const DomDocumentFileHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentFileHelper;

      
//not game specific package import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbFile } from '../../../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { TransformInfoData } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
      const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

      
//not game specific package import { TransformInfoProperties } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoProperties.js';
      const TransformInfoProperties = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoProperties;

      
//not game specific package import { TransformInfoPropertiesFactory } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoPropertiesFactory.js';
      const TransformInfoPropertiesFactory = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoPropertiesFactory;

      
//not game specific package import { TransformInfosData } from '../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfosData.js';
      const TransformInfosData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfosData;

      
//not game specific package import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { Document } from '../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
//not game specific package import { NodeList } from '../../../../../../../org/w3c/dom/NodeList.js';
      const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TransformInfoPropertiesDocument
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly document: Document;

public constructor (filePath: string){

            super();
        
    var xmlFile: AbFile = AbFile.createAbFile(filePath)!;;
    
this.document= DomDocumentFileHelper.createDocument(xmlFile);
    
}


    public toTransformInfoPropertiesHashMap(): HashMap<any, any>{

        try {
            
    var transformInfoPropertiesHashMap: HashMap<any, any> = new HashMap<any, any>();;
    

    var transformInfosNode: Node = this.document.getElementsByTagName(TransformInfosData.getInstance()!.NAME)!.item(0)!;;
    

    var transformInfosChildNodeList: NodeList = transformInfosNode!.getChildNodes()!;;
    

    var transformInfoNodeVector: Vector = DomSearchHelper.getAllNodes(TransformInfoData.getInstance()!.NAME, transformInfosChildNodeList)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Size: " +transformInfoNodeVector!.length, this, "toTransformInfoPropertiesHashMap()");
    

                                    }
                                

    var size: number = transformInfoNodeVector!.length!;;
    

    var node: Node;;
    

    var transformInfoProperties: TransformInfoProperties;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
node= transformInfoNodeVector!.get(index) as Node;
    
transformInfoProperties= TransformInfoPropertiesFactory.getInstance()!.getInstance(node);
    
transformInfoPropertiesHashMap!.put(transformInfoProperties!.getName(), transformInfoProperties);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return transformInfoPropertiesHashMap;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, "toTransformInfoPropertiesHashMap()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}
                
            

