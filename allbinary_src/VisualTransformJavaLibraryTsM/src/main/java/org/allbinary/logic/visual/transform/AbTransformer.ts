
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { InputStream } from '../../../../../java/io/InputStream.js';
      //not GWT import const InputStream = globalThis.java.io.InputStream;

      
import { StringBufferInputStream } from '../../../../../java/io/StringBufferInputStream.js';
      //not GWT import const StringBufferInputStream = globalThis.java.io.StringBufferInputStream;

      
import { URIResolver } from '../../../../../javax/xml/transform/URIResolver.js';
      //not GWT import const URIResolver = globalThis.javax.xml.transform.URIResolver;

      
import { StreamSource } from '../../../../../javax/xml/transform/stream/StreamSource.js';
      //not GWT import const StreamSource = globalThis.javax.xml.transform.stream.StreamSource;

      
import { XslHelper } from '../../../../../org/allbinary/data/tree/dom/XslHelper.js';
      //not GWT import const XslHelper = globalThis.org.allbinary.data.tree.dom.XslHelper;

      
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { TransformInfoInterface } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
      //not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { TransformInfoObjectConfigGenerator } from '../../../../../org/allbinary/logic/visual/transform/info/objectConfig/generator/TransformInfoObjectConfigGenerator.js';
      //not GWT import const TransformInfoObjectConfigGenerator = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.generator.TransformInfoObjectConfigGenerator;

      
import { TransformInfoObjectConfigGeneratorFactory } from '../../../../../org/allbinary/logic/visual/transform/info/objectConfig/generator/TransformInfoObjectConfigGeneratorFactory.js';
      //not GWT import const TransformInfoObjectConfigGeneratorFactory = globalThis.org.allbinary.logic.visual.transform.info.objectConfig.generator.TransformInfoObjectConfigGeneratorFactory;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicTransformerInterface } from './BasicTransformerInterface.js';

export class AbTransformer
            extends Object
         implements BasicTransformerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private transformInfoInterface: TransformInfoInterface;

    private inputStream: InputStream;

    private uriResolver: URIResolver;

public constructor (transformInfoInterface: TransformInfoInterface){

            super();
        this.transformInfoInterface= transformInfoInterface;
    
}


    public getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformInfoInterface;
    
}


    public setInputStream(inputStream: InputStream){
this.inputStream= inputStream;
    
}


    public setURIResolver(uriResolver: URIResolver){
this.uriResolver= uriResolver;
    
}


    public getInputStream(): InputStream{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.inputStream;
    
}


    public getURIResolver(): URIResolver{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.uriResolver;
    
}


    public getStreamSource(): StreamSource{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StreamSource(this.getInputStream());
    
}


                //@Throws(Exception.constructor)
            
    public translate(xmlDocumentStr: string): string{

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XMLLOGGING))
                        
                                    {
                                    this.logUtil!.putF("xml: \n" +xmlDocumentStr, this, "translate(String xmlDocumentStr)");
    

                                    }
                                

                        if(this.getURIResolver() == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("No URIResolver");
                    

                                    }
                                

    var result: string = XslHelper.getInstance()!.translate(this.getURIResolver(), new StreamSource(this.getInputStream()), new StreamSource(new StringBufferInputStream(xmlDocumentStr)))!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGING))
                        
                                    {
                                    this.logUtil!.putF("translated xml: " +result, this, "translate(String xmlDocumentStr)");
    

                                    }
                                

    var transformInfoObjectConfigGeneratorInterface: TransformInfoObjectConfigGenerator = TransformInfoObjectConfigGeneratorFactory.getInstance()!.getInstance(this.getTransformInfoInterface())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return transformInfoObjectConfigGeneratorInterface!.process(result);;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(this.transformInfoInterface!.log(), this, "translate(document)", e);
    

                                    }
                                



                            throw e;
                    
}

}


}



