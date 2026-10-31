
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
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicEmailInfo } from './BasicEmailInfo.js';
//sameFolderImports - not GWT import - same folder const BasicEmailInfo

export class EmailInfo
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private basicEmailInfo: BasicEmailInfo;

    private htmlAttachment: string;

    private contentBase: string;

    public constructor(...args: any[]) {
        super();if(args.length === 1) {
            
            this.constructor$0(args[0]);
            
        }
        else if(args.length === 3) {
            
            this.constructor$1(args[0], args[1], args[2]);
            
        }
        
    }
    
    private constructor$0(basicEmailInfo: BasicEmailInfo): void {
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.init(basicEmailInfo, 
                            null, 
                            null);
    

    }
    
    private constructor$1(basicEmailInfo: BasicEmailInfo, htmlAttachment: string, contentBase: string): void {
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.init(basicEmailInfo, 
                            null, 
                            null);
    

    }
    
    init(basicEmailInfo: BasicEmailInfo, htmlAttachment: string, contentBase: string){
this.basicEmailInfo= basicEmailInfo;
    
this.htmlAttachment= htmlAttachment;
    
this.contentBase= contentBase;
    
}


    public getBasicEmailInfo(): BasicEmailInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicEmailInfo;
    
}


    public getHtmlAttachment(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.htmlAttachment;
    
}


    public getContentBase(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.contentBase;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Email Info: \n " +this.getBasicEmailInfo()!.toString();
    
}


}

