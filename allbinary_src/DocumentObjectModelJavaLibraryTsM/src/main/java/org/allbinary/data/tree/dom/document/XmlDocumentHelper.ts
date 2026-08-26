
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
        



            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not game specific package import { StringReader } from '../../../../../../java/io/StringReader.js';
      const StringReader = globalThis.java.io.StringReader;

      
//not game specific package import { StringWriter } from '../../../../../../java/io/StringWriter.js';
      const StringWriter = globalThis.java.io.StringWriter;

      
//not game specific package import { Writer } from '../../../../../../java/io/Writer.js';
      const Writer = globalThis.java.io.Writer;

      
//not game specific package import { DocumentBuilderFactory } from '../../../../../../javax/xml/parsers/DocumentBuilderFactory.js';
      const DocumentBuilderFactory = globalThis.javax.xml.parsers.DocumentBuilderFactory;

      
//not game specific package import { OutputKeys } from '../../../../../../javax/xml/transform/OutputKeys.js';
      const OutputKeys = globalThis.javax.xml.transform.OutputKeys;

      
//not game specific package import { Transformer } from '../../../../../../javax/xml/transform/Transformer.js';
      const Transformer = globalThis.javax.xml.transform.Transformer;

      
//not game specific package import { TransformerFactory } from '../../../../../../javax/xml/transform/TransformerFactory.js';
      const TransformerFactory = globalThis.javax.xml.transform.TransformerFactory;

      
//not game specific package import { DOMSource } from '../../../../../../javax/xml/transform/dom/DOMSource.js';
      const DOMSource = globalThis.javax.xml.transform.dom.DOMSource;

      
//not game specific package import { StreamResult } from '../../../../../../javax/xml/transform/stream/StreamResult.js';
      const StreamResult = globalThis.javax.xml.transform.stream.StreamResult;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { BooleanFactory } from '../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
      const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
//not game specific package import { CharacterSetData } from '../../../../../../org/allbinary/logic/java/characters/CharacterSetData.js';
      const CharacterSetData = globalThis.org.allbinary.logic.java.characters.CharacterSetData;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { Document } from '../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { InputSource } from '../../../../../../org/xml/sax/InputSource.js';
      const InputSource = globalThis.org.xml.sax.InputSource;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class XmlDocumentHelper
            extends Object
         {
        

    private static readonly instance: XmlDocumentHelper = new XmlDocumentHelper();

    public static getInstance(): XmlDocumentHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return XmlDocumentHelper.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly INDENT_NUMBER: string = "indent-number";

    private transformer: Transformer;

private constructor (){

            super();
        this.init(4, true);
    
}


    public init(indent: number, ignoreDeclaration: boolean){

        try {
            
    var booleanFactory: BooleanFactory = BooleanFactory.getInstance()!;;
    

    var transformerFactory: TransformerFactory = TransformerFactory.newInstance()!;;
    
transformerFactory!.setAttribute(this.INDENT_NUMBER, indent);
    
this.transformer= transformerFactory!.newTransformer();
    
this.transformer.setOutputProperty(OutputKeys.ENCODING, CharacterSetData.getInstance()!.UTF_8);
    
this.transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, ignoreDeclaration
                        ?       
                                booleanFactory!.YES
                                :

                            booleanFactory!.NO;

    );
    
this.transformer.setOutputProperty(OutputKeys.INDENT, booleanFactory!.YES);
    

                //: 
} catch(e) 
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e);
    
}

}


                //@Throws(Exception.constructor)
            
    public format(xmlString: string): string{

    var src: InputSource = new InputSource(new StringReader(xmlString));;
    

    var document: Document = DocumentBuilderFactory.newInstance()!.newDocumentBuilder()!.parse(src)!;;
    

    var out: Writer = new StringWriter();;
    
this.transformer.transform(new DOMSource(document), new StreamResult(out));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return out.toString();;
    
}


}
                
            

