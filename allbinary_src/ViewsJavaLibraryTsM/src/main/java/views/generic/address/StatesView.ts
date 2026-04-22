
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
        



import { StreetAddressData } from "../../../org/allbinary/business/user/address/StreetAddressData.js";

    
import { DomNodeInterface } from "../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { FREEBLISKET_PATH_GLOBALS } from "../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LineReader } from "../../../org/allbinary/logic/io/LineReader.js";

    
import { CommonStrings } from "../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class StatesView
            extends Object
         implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
public constructor (){

            super();
        }


    public toXmlNode(document: Document): Node{
var document = document

        try {
            
    var node: Node = document.createElement(StreetAddressData.STATES)!;
        
        
;
    

    var statesFile: string = URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.LINEDATAPATH +"states.txt";
        
        
;
    

    var lineReader: LineReader = new LineReader(statesFile);
        
        
;
    

        while(lineReader!.hasNext())
        {

    var option: string = lineReader!.next()!;
        
        
;
    
node.appendChild(ModDomHelper.createNameValueNodes(document, StreetAddressData.STATE, option));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLLOGGING))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.FAILURE, this, "toXmlNode", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}
                
            

