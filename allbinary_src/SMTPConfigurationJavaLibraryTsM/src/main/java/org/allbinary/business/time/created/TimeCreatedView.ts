
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
        



import { EntryData } from "../../../../../org/allbinary/business/entry/EntryData.js";

    
import { DomNodeHelper } from "../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomNodeInterface } from "../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { TimeCreated } from "./TimeCreated.js";

export class TimeCreatedView
            extends Object
         implements DomNodeInterface {
        

    private timeCreated: TimeCreated
public constructor (timeCreated: TimeCreated){

            super();
            var timeCreated = timeCreated
this.setTimeCreated(timeCreated);
    
}

public constructor (node: Node){

            super();
            var node = node
this.setTimeCreated(new TimeCreated(DomNodeHelper.getTextNodeValue(node)));
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createTextNode(document, EntryData.getInstance()!.TIMECREATED, this.getTimeCreated()!.toString());

                        ;
    
}


    public getTimeCreated(): TimeCreated{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return timeCreated;
    
}


    public setTimeCreated(timeCreated: TimeCreated){
var timeCreated = timeCreated
this.timeCreated= timeCreated;
    
}


}
                
            

