
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
        



            import { Integer } from "../../../../../../../java/lang/Integer.js";
        
import { DomNodeInterface } from "../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonPhoneStrings } from "../../../../../../../org/allbinary/string/CommonPhoneStrings.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ColorData } from "./ColorData.js";

import { ColorsData } from "./ColorsData.js";

export class ColorsView
            extends Object
         implements DomNodeInterface {
        

    private readonly commonPhoneStrings: CommonPhoneStrings = CommonPhoneStrings.getInstance()!;
        
        

    private readonly HEXRADIX: number = 16;
        
        

    private readonly MAX: number = 255;
        
        

    readonly delta: number = 20;
        
        
public constructor (){

            super();
        }


                //@Throws(Error::class)
            
    public getColorNode(document: Document, redIndex: number, greenIndex: number, blueIndex: number): Node{
var document = document
var redIndex = redIndex
var greenIndex = greenIndex
var blueIndex = blueIndex

    var hexColorStringBuffer: StringMaker = new StringMaker();
        
        
;
    

                        if(redIndex < this.HEXRADIX)
                        
                                    {
                                    hexColorStringBuffer!.append(this.commonPhoneStrings!.ZERO);
    

                                    }
                                
hexColorStringBuffer!.append(redIndex, HEXRADIX.toString());
    

                        if(greenIndex < HEXRADIX)
                        
                                    {
                                    hexColorStringBuffer!.append(this.commonPhoneStrings!.ZERO);
    

                                    }
                                
hexColorStringBuffer!.append(greenIndex, HEXRADIX.toString());
    

                        if(blueIndex < HEXRADIX)
                        
                                    {
                                    hexColorStringBuffer!.append(this.commonPhoneStrings!.ZERO);
    

                                    }
                                
hexColorStringBuffer!.append(blueIndex, HEXRADIX.toString());
    

    var colorNode: Node = ModDomHelper.createNameValueNodes(document, ColorData.getInstance()!.NAME, hexColorStringBuffer!.toString())!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return colorNode;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = ModDomHelper.createNameValueNodes(document, ColorsData.getInstance()!.NAME, "RGB Colors In Hex")!;
        
        
;
    

    var blackNode: Node = ModDomHelper.createNameValueNodes(document, ColorData.getInstance()!.NAME, "000000")!;
        
        
;
    
node.appendChild(blackNode);
    




                        for (
    var index: number = 0;
        
        
index < this.MAX; )
        {

    var hexColorStringBuffer: StringMaker = new StringMaker();
        
        
;
    

                        if(index < this.HEXRADIX)
                        
                                    {
                                    hexColorStringBuffer!.append(this.commonPhoneStrings!.ZERO);
    

                                    }
                                
hexColorStringBuffer!.append(index, HEXRADIX.toString());
    

                        if(index < HEXRADIX)
                        
                                    {
                                    hexColorStringBuffer!.append(this.commonPhoneStrings!.ZERO);
    

                                    }
                                
hexColorStringBuffer!.append(index, HEXRADIX.toString());
    

                        if(index < HEXRADIX)
                        
                                    {
                                    hexColorStringBuffer!.append(this.commonPhoneStrings!.ZERO);
    

                                    }
                                
hexColorStringBuffer!.append(index, HEXRADIX.toString());
    

    var colorNode: Node = ModDomHelper.createNameValueNodes(document, ColorData.getInstance()!.NAME, hexColorStringBuffer!.toString())!;
        
        
;
    
node.appendChild(colorNode);
    
}


    var whiteNode: Node = ModDomHelper.createNameValueNodes(document, ColorData.getInstance()!.NAME, "FFFFFF")!;
        
        
;
    
node.appendChild(whiteNode);
    




                        for (
    var blueIndex: number = this.MAX /2;
        
        
blueIndex < this.MAX; )
        {




                        for (
    var greenIndex: number = 0;
        
        
greenIndex < this.MAX /2; )
        {




                        for (
    var redIndex: number = 0;
        
        
redIndex < this.MAX /2; )
        {
node.appendChild(this.getColorNode(document, redIndex, greenIndex, blueIndex));
    
}

}

}





                        for (
    var redIndex: number = this.MAX /2;
        
        
redIndex < this.MAX; )
        {




                        for (
    var greenIndex: number = 0;
        
        
greenIndex < this.MAX /2; )
        {




                        for (
    var blueIndex: number = 0;
        
        
blueIndex < this.MAX /2; )
        {
node.appendChild(this.getColorNode(document, redIndex, greenIndex, blueIndex));
    
}

}

}





                        for (
    var greenIndex: number = this.MAX /2;
        
        
greenIndex < this.MAX; )
        {




                        for (
    var redIndex: number = 0;
        
        
redIndex < this.MAX /2; )
        {




                        for (
    var blueIndex: number = 0;
        
        
blueIndex < this.MAX /2; )
        {
node.appendChild(this.getColorNode(document, redIndex, greenIndex, blueIndex));
    
}

}

}





                        for (
    var greenIndex: number = 0;
        
        
greenIndex < this.MAX; )
        {




                        for (
    var redIndex: number = 0;
        
        
redIndex < this.MAX; )
        {




                        for (
    var blueIndex: number = 0;
        
        
blueIndex < this.MAX; )
        {
node.appendChild(this.getColorNode(document, redIndex, greenIndex, blueIndex));
    
}

}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

