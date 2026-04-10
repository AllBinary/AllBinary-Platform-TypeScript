
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { StringReader } from "../../../../../../java/io/StringReader.js";

    
import { StringWriter } from "../../../../../../java/io/StringWriter.js";

    
import { Writer } from "../../../../../../java/io/Writer.js";

    
import { DocumentBuilderFactory } from "../../../../../../javax/xml/parsers/DocumentBuilderFactory.js";

    
import { OutputKeys } from "../../../../../../javax/xml/transform/OutputKeys.js";

    
import { Transformer } from "../../../../../../javax/xml/transform/Transformer.js";

    
import { TransformerFactory } from "../../../../../../javax/xml/transform/TransformerFactory.js";

    
import { DOMSource } from "../../../../../../javax/xml/transform/dom/DOMSource.js";

    
import { StreamResult } from "../../../../../../javax/xml/transform/stream/StreamResult.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BooleanFactory } from "../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { CharacterSetData } from "../../../../../../org/allbinary/logic/java/characters/CharacterSetData.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { InputSource } from "../../../../../../org/xml/sax/InputSource.js";

    

export class XmlDocumentHelper
            extends Object
         {
        

    private static readonly instance: XmlDocumentHelper = new XmlDocumentHelper();
        
        

    public static getInstance(): XmlDocumentHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly INDENT_NUMBER: string = "indent-number";
        
        

    private transformer: Transformer
private constructor (){

            super();
            this.init(4, true)
}


    public init(indent: number, ignoreDeclaration: boolean){
    //var indent = indent
    //var ignoreDeclaration = ignoreDeclaration

        try {
            
    var booleanFactory: BooleanFactory = BooleanFactory.getInstance()!;
        
        


    var transformerFactory: TransformerFactory = TransformerFactory.newInstance()!;
        
        

setAttribute(INDENT_NUMBER, indent)
transformer= transformerFactory!.newTransformer()
setOutputProperty(OutputKeys.ENCODING, CharacterSetData.getInstance()!.UTF_8)
setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, ignoreDeclaration
                        ?       
                                booleanFactory!.YES
                                :

                            booleanFactory!.NO;

    )
setOutputProperty(OutputKeys.INDENT, booleanFactory!.YES)
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e)
}

}


                @Throws(Exception::class)
            
    public format(xmlString: string): string{
    //var xmlString = xmlString

    var src: InputSource = new InputSource(StringReader(xmlString));
        
        


    var document: Document = DocumentBuilderFactory.newInstance()!.newDocumentBuilder()!.parse(src)!;
        
        


    var out: Writer = new StringWriter();
        
        

transform(DOMSource(document), StreamResult(out))



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return out.toString();
    
}


}
                
            

