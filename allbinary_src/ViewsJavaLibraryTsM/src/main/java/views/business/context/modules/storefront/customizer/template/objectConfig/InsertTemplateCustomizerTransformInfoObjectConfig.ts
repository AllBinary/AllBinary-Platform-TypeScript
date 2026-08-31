
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
        



            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
//not plain js import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { TransformInfoDomNodeView } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoDomNodeView.js';
      //not GWT import const TransformInfoDomNodeView = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoDomNodeView;

      
import { TransformInfoInterface } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { TransformInfosData } from '../../../../../../../../org/allbinary/logic/visual/transform/info/TransformInfosData.js';
      //not GWT import const TransformInfosData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfosData;

      
import { TransformInfoObjectConfigData } from '../../../../../../../../org/allbinary/logic/visual/transform/info/objectConfig/TransformInfoObjectConfigData.js';
      //not GWT import const TransformInfoObjectConfigData = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.TransformInfoObjectConfigData;

      
import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../../../org/w3c/dom/NodeList.js';
      //not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { NoTemplateTransformInfoObjectConfig } from './NoTemplateTransformInfoObjectConfig.js';

export class InsertTemplateCustomizerTransformInfoObjectConfig extends NoTemplateTransformInfoObjectConfig {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (transformInfoInterface: Object){
            super(transformInfoInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


public constructor (transformInfoInterface: Object, document: Object){
            super(transformInfoInterface, document);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setDocument(this.generate(this.toXmlDoc()));
    
}


public constructor (transformInfoInterface: Object, name: string, type: string){
            super(transformInfoInterface, name, type);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setDocument(this.generate(this.toXmlDoc()));
    
}


                //@Throws(Exception.constructor)
            
    public set(aParentViewName: string){

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Setting: " +aParentViewName, this, "set()");
    

                                    }
                                

    var document: Document = this.toXmlDoc()!;;
    

    var parentComponentsNodeList: NodeList = document.getElementsByTagName(TransformInfosData.getInstance()!.NAME)!;;
    

                        if(parentComponentsNodeList != 
                                    null
                                 && parentComponentsNodeList!.getLength() > 0)
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Replacing", this, "set()");
    

                                    }
                                

    var componentNode: Node = parentComponentsNodeList!.item(0)!.getChildNodes()!.item(0)!;;
    

                        if(componentNode != 
                                    null
                                )
                        
                                    {
                                    document.removeChild(componentNode);
    

                                    }
                                
parentComponentsNodeList!.item(0)!.appendChild(new TransformInfoDomNodeView(aParentViewName).toXmlNode(document));
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Setting", this, "set()");
    

                                    }
                                

    var objectConfigNode: Node = document.getElementsByTagName(TransformInfoObjectConfigData.getInstance()!.NAME)!.item(0)!;;
    

    var parentComponentsNode: Node = document.createElement(TransformInfosData.getInstance()!.NAME)!;;
    
objectConfigNode!.appendChild(parentComponentsNode);
    

    var transformInfoDomNodeView: TransformInfoDomNodeView = new TransformInfoDomNodeView(aParentViewName);;
    
parentComponentsNode!.appendChild(transformInfoDomNodeView!.toXmlNode(document));
    

                        }
                            
}


}



