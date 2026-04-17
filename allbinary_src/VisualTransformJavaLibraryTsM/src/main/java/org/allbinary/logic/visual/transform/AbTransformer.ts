
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
        



import { InputStream } from "../../../../../java/io/InputStream.js";

    
import { StringBufferInputStream } from "../../../../../java/io/StringBufferInputStream.js";

    
import { URIResolver } from "../../../../../javax/xml/transform/URIResolver.js";

    
import { StreamSource } from "../../../../../javax/xml/transform/stream/StreamSource.js";

    
import { XslHelper } from "../../../../../org/allbinary/data/tree/dom/XslHelper.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { TransformInfoInterface } from "../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js";

    
import { TransformInfoObjectConfigGenerator } from "../../../../../org/allbinary/logic/visual/transform/info/objectConfig/generator/TransformInfoObjectConfigGenerator.js";

    
import { TransformInfoObjectConfigGeneratorFactory } from "../../../../../org/allbinary/logic/visual/transform/info/objectConfig/generator/TransformInfoObjectConfigGeneratorFactory.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    

export class AbTransformer
            extends Object
        
                , BasicTransformerInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private transformInfoInterface: TransformInfoInterface

    private inputStream: InputStream

    private uriResolver: URIResolver
public constructor (transformInfoInterface: TransformInfoInterface){

            super();
            var transformInfoInterface = transformInfoInterface
this.transformInfoInterface= transformInfoInterface;
    
}


    public getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformInfoInterface;
    
}


    public setInputStream(inputStream: InputStream){
var inputStream = inputStream
this.inputStream= inputStream;
    
}


    public setURIResolver(uriResolver: URIResolver){
var uriResolver = uriResolver
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


                //@Throws(Error::class)
            
    public translate(xmlDocumentStr: string): string{
var xmlDocumentStr = xmlDocumentStr

        try {
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XMLLOGGING))
                        
                                    {
                                    this.logUtil!.putF("xml: \n" +xmlDocumentStr, this, "translate(String xmlDocumentStr)");
    

                                    }
                                

                        if(this.getURIResolver() == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Error("No URIResolver")

                                    }
                                

    var result: string = XslHelper.getInstance()!.translate(this.getURIResolver(), new StreamSource(this.getInputStream()), new StreamSource(new StringBufferInputStream(xmlDocumentStr)))!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.XSLLOGGING))
                        
                                    {
                                    this.logUtil!.putF("translated xml: " +result, this, "translate(String xmlDocumentStr)");
    

                                    }
                                

    var transformInfoObjectConfigGeneratorInterface: TransformInfoObjectConfigGenerator = TransformInfoObjectConfigGeneratorFactory.getInstance()!.getInstance(this.getTransformInfoInterface())!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return transformInfoObjectConfigGeneratorInterface!.process(result);

                        ;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put(this.transformInfoInterface!.log(), this, "translate(document)", e);
    

                                    }
                                



                            throw e
}

}


}
                
            

