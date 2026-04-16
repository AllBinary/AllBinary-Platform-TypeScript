
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { DomNodeHelper } from "../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomNodeInterface } from "../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    
import { NodeList } from "../../../../../../org/w3c/dom/NodeList.js";

    

import { FtpConfigurationData } from "./FtpConfigurationData.js";

import { FtpConfigurationData } from "./FtpConfigurationData.js";

import { FtpConfigurationData } from "./FtpConfigurationData.js";

import { FtpConfigurationData } from "./FtpConfigurationData.js";

import { FtpConfigurationData } from "./FtpConfigurationData.js";

export class FtpConfigurationView
            extends Object
        
                , DomNodeInterface {
        

    private ftpConfigurationInterface: FtpConfigurationInterface
public constructor (node: Node){

            super();
            var node = node
this.setFtpConfigurationInterface(new FtpConfiguration() as FtpConfigurationInterface);
    

    var chileNodeList: NodeList = node.getChildNodes()!;
        
        
;
    

    var server: string = DomNodeHelper.getTextNodeValue(FtpConfigurationData.SERVER, chileNodeList)!;
        
        
;
    
this.getFtpConfigurationInterface()!.setServer(server);
    

    var userName: string = DomNodeHelper.getTextNodeValue(FtpConfigurationData.USERNAME, chileNodeList)!;
        
        
;
    
this.getFtpConfigurationInterface()!.setUserName(userName);
    

    var password: string = DomNodeHelper.getTextNodeValue(FtpConfigurationData.PASSWORD, chileNodeList)!;
        
        
;
    
this.getFtpConfigurationInterface()!.setPassword(password);
    

    var path: string = DomNodeHelper.getTextNodeValue(FtpConfigurationData.PATH, chileNodeList)!;
        
        
;
    
this.getFtpConfigurationInterface()!.setPath(path);
    
}

public constructor (ftpConfigurationInterface: FtpConfigurationInterface){

            super();
            var ftpConfigurationInterface = ftpConfigurationInterface
this.setFtpConfigurationInterface(ftpConfigurationInterface);
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var ftpConfigurationMapping: FtpConfigurationMapping = new FtpConfigurationMapping(this.getFtpConfigurationInterface());
        
        
;
    

    var hashMap: HashMap<any, any> = ftpConfigurationMapping!.toHashMap()!;
        
        
;
    

    var node: Node = ModDomHelper.createNameValueNodes(document, FtpConfigurationData.NAME, hashMap)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


    public getFtpConfigurationInterface(): FtpConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ftpConfigurationInterface;
    
}


    public setFtpConfigurationInterface(ftpConfigurationInterface: FtpConfigurationInterface){
var ftpConfigurationInterface = ftpConfigurationInterface
this.ftpConfigurationInterface= ftpConfigurationInterface;
    
}


}
                
            

