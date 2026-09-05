
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { DomNodeHelper } from '../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
import { DomNodeInterface } from '../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { ModDomHelper } from '../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
import { NodeList } from '../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList = globalThis.org.w3c.dom.NodeList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { FtpConfigurationInterface } from './FtpConfigurationInterface.js';
//not GWT import - same folder const FtpConfigurationInterface = globalThis.org.allbinary.logic.communication.ftp.configuration.FtpConfigurationInterface;

                import { FtpConfiguration } from './FtpConfiguration.js';
//not GWT import - same folder const FtpConfiguration = globalThis.org.allbinary.logic.communication.ftp.configuration.FtpConfiguration;

                import { FtpConfigurationData } from './FtpConfigurationData.js';
//not GWT import - same folder const FtpConfigurationData = globalThis.org.allbinary.logic.communication.ftp.configuration.FtpConfigurationData;

                import { FtpConfigurationMapping } from './FtpConfigurationMapping.js';
//not GWT import - same folder const FtpConfigurationMapping = globalThis.org.allbinary.logic.communication.ftp.configuration.FtpConfigurationMapping;

                
export class FtpConfigurationView
            extends Object
         implements DomNodeInterface {
        

    private ftpConfigurationInterface: FtpConfigurationInterface;

public constructor (node: Node){

            super();
        this.setFtpConfigurationInterface(new FtpConfiguration() as FtpConfigurationInterface);
    

    var chileNodeList: NodeList = node.getChildNodes()!;;
    

    var server: string = DomNodeHelper.getTextNodeValue(FtpConfigurationData.SERVER, chileNodeList)!;;
    
this.getFtpConfigurationInterface()!.setServer(server);
    

    var userName: string = DomNodeHelper.getTextNodeValue(FtpConfigurationData.USERNAME, chileNodeList)!;;
    
this.getFtpConfigurationInterface()!.setUserName(userName);
    

    var password: string = DomNodeHelper.getTextNodeValue(FtpConfigurationData.PASSWORD, chileNodeList)!;;
    
this.getFtpConfigurationInterface()!.setPassword(password);
    

    var path: string = DomNodeHelper.getTextNodeValue(FtpConfigurationData.PATH, chileNodeList)!;;
    
this.getFtpConfigurationInterface()!.setPath(path);
    
}


public constructor (ftpConfigurationInterface: FtpConfigurationInterface){

            super();
        this.setFtpConfigurationInterface(ftpConfigurationInterface);
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var ftpConfigurationMapping: FtpConfigurationMapping = new FtpConfigurationMapping(this.getFtpConfigurationInterface());;
    

    var hashMap: HashMap<any, any> = ftpConfigurationMapping!.toHashMap()!;;
    

    var node: Node = ModDomHelper.createNameValueNodes(document, FtpConfigurationData.NAME, hashMap)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public getFtpConfigurationInterface(): FtpConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ftpConfigurationInterface;
    
}


    public setFtpConfigurationInterface(ftpConfigurationInterface: FtpConfigurationInterface){
this.ftpConfigurationInterface= ftpConfigurationInterface;
    
}


}



