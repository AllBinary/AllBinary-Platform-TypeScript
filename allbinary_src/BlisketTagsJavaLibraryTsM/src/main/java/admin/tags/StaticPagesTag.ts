
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
        



            import { Class } from '../../java/lang/Class.js';
        
            import { Exception } from '../../java/lang/Exception.js';
        
//not game specific package import { Method } from '../../java/lang/reflect/Method.js';
      const Method = globalThis.java.lang.reflect.Method;

      
//not game specific package import { JspTagException } from '../../javax/servlet/jsp/JspTagException.js';
      const JspTagException = globalThis.javax.servlet.jsp.JspTagException;

      
//not game specific package import { StaticPagesHelperFactory } from '../../admin/taghelpers/StaticPagesHelperFactory.js';
      const StaticPagesHelperFactory = globalThis.admin.taghelpers.StaticPagesHelperFactory;

      
//not game specific package import { StaticPagesRequestHelperFactory } from '../../admin/taghelpers/StaticPagesRequestHelperFactory.js';
      const StaticPagesRequestHelperFactory = globalThis.admin.taghelpers.StaticPagesRequestHelperFactory;

      
//not game specific package import { AbResponseHandler } from '../../org/allbinary/logic/communication/http/request/AbResponseHandler.js';
      const AbResponseHandler = globalThis.org.allbinary.logic.communication.http.request.AbResponseHandler;

      
//not game specific package import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { SearchData } from '../../org/allbinary/logic/control/search/SearchData.js';
      const SearchData = globalThis.org.allbinary.logic.control.search.SearchData;

      
//not game specific package import { LicensingException } from '../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
//not game specific package import { TransformInfoData } from '../../org/allbinary/logic/visual/transform/info/TransformInfoData.js';
      const TransformInfoData = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoData;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TableTag } from './TableTag.js';

export class StaticPagesTag extends TableTag {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private xslFile: string;

public constructor (){

            super();
        this.setTagHelperFactory(new StaticPagesHelperFactory());
    
this.setTagRequestHelperFactory(new StaticPagesRequestHelperFactory());
    
}


    public setXsl(value: string){
this.xslFile= value;
    
}


                //@Throws(LicensingException.constructor)
            
    public generateStaticPages(): string{

        try {
            
    var anyType: any = new StaticPagesRequestHelperFactory().getInstance(this.getPropertiesHashMap(), this.pageContext)!;;
    

    var helperClass: Function = anyType!.constructor!;;
    

    var method: Method = helperClass!.getMethod("generateStaticPages", 
                            null)!;;
    

    var result: string = method.invoke(anyType, 
                            null) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

                //: 
/* catch(e) 
            {

    var error: string = "Failed to generate staticpages table";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "generateStaticPages()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}
*/
}


                //@Throws(LicensingException.constructor)
            
    public makePublic(): string{

        try {
            
    var anyType: any = new StaticPagesRequestHelperFactory().getInstance(this.getPropertiesHashMap(), this.pageContext)!;;
    

    var helperClass: Function = anyType!.constructor!;;
    

    var method: Method = helperClass!.getMethod("makePublic", 
                            null)!;;
    

    var result: string = method.invoke(anyType, 
                            null) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

                //: 
/* catch(e) 
            {

    var error: string = "Failed to makePublic";;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "makePublic()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}
*/
}


                //@Throws(JspTagException.constructor)
            
    public doStartTag(): number{

        try {
            
                        if(this.isEnabled())
                        
                                    {
                                    
                        if(this.getCommand() != 
                                    null
                                )
                        
                                    {
                                    
                        if(this.getCommand()!.compareTo(SearchData.GENERATESTATICPAGES) == 0)
                        
                                    {
                                    this.getPropertiesHashMap()!.put(TransformInfoData.getInstance()!.TEMPLATEFILENAME, this.xslFile);
    

    var output: string = this.generateStaticPages()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    this.pageContext!.getOut()!.print(output);
    

                                    }
                                

                                    }
                                
                             else 
                        if(this.getCommand()!.compareTo(SearchData.MAKEPUBLIC) == 0)
                        
                                    {
                                    
    var output: string = this.makePublic()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.JSPTAGEXTRAOUTPUT))
                        
                                    {
                                    this.pageContext!.getOut()!.print(output);
    

                                    }
                                

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.doStartTag();;
    

                        }
                            

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    

                //: 
} catch(e) 
            {
AbResponseHandler.sendJspTagLicensingRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}

                //: 
/* catch(e) 
            {
AbResponseHandler.sendJspTagRedirect(this.pageContext, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SKIP_BODY;
    
}
*/
}


}



