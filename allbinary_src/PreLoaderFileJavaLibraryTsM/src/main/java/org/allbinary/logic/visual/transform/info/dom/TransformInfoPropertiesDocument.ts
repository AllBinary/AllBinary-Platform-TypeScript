
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
        



            import Vector from "@ohos.util.Vector";
        
import { HashMap } from "../../../../../../../java/util/HashMap.js";

    

//import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { DomSearchHelper } from "../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { DomDocumentFileHelper } from "../../../../../../../org/allbinary/data/tree/dom/document/DomDocumentFileHelper.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbFile } from "../../../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { TransformInfoData } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoData.js";

    
import { TransformInfoProperties } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoProperties.js";

    
import { TransformInfoPropertiesFactory } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoPropertiesFactory.js";

    
import { TransformInfosData } from "../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfosData.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../../org/w3c/dom/NodeList.js";

    

export class TransformInfoPropertiesDocument
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly document: Document
public constructor (filePath: string){

            super();
                //var filePath = filePath

    var xmlFile: AbFile = new AbFile(filePath);
        
        
;
    
this.document= DomDocumentFileHelper.create(xmlFile);
    
}


    public toTransformInfoPropertiesHashMap(): HashMap<any, any>{

        try {
            
    var transformInfoPropertiesHashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var transformInfosNode: Node = this.document.getElementsByTagName(TransformInfosData.getInstance()!.NAME)!.item(0)!;
        
        
;
    

    var transformInfosChildNodeList: NodeList = transformInfosNode!.getChildNodes()!;
        
        
;
    

    var transformInfoNodeVector: Vector = DomSearchHelper.getAllNodes(TransformInfoData.getInstance()!.NAME, transformInfosChildNodeList)!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Size: " +transformInfoNodeVector!.length, this, "toTransformInfoPropertiesHashMap()");
    

                                    }
                                

    var size: number = transformInfoNodeVector!.length!;
        
        
;
    

    var node: Node
;
    

    var transformInfoProperties: TransformInfoProperties
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
node= transformInfoNodeVector!.get(index);

                         as Node;
    
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
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
logUtil!.put(commonStrings!.EXCEPTION, this, "toTransformInfoPropertiesHashMap()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}
                
            

