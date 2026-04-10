
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
        



import { Vector } from "../../java/util/Vector.js";

    
import { BasicUserRole } from "../../org/allbinary/business/user/role/BasicUserRole.js";

    
import { UserRole } from "../../org/allbinary/business/user/role/UserRole.js";

    
import { URLGLOBALS } from "../../org/allbinary/globals/URLGLOBALS.js";

    
import { HttpFilePermissions } from "../../org/allbinary/logic/communication/http/file/upload/HttpFilePermissions.js";

    
import { HttpRequestUtil } from "../../org/allbinary/logic/communication/http/request/HttpRequestUtil.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbPath } from "../../org/allbinary/logic/io/path/AbPath.js";

    
import { CommonLabels } from "../../org/allbinary/string/CommonLabels.js";

    

export class AuthenticationHelperUtil
            extends Object
         {
        

    private static readonly instance: AuthenticationHelperUtil = new AuthenticationHelperUtil();
        
        

    public static getInstance(): AuthenticationHelperUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public isAuthorized(authenticationHelper: AuthenticationHelper, filePath: string): boolean{
var authenticationHelper = authenticationHelper
var filePath = filePath

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put(CommonLabels.getInstance()!.START +filePath, this, "isAuthorized()")

                                    }
                                

    var endIndex: number = HttpRequestUtil.getInstance()!.getLastSeparatorIndex(filePath)!;
        
        


    var fullPath: AbPath = new AbPath(URLGLOBALS.getWebappPath() +filePath!.substring(0, endIndex));
        
        


    var downloadFilePermissions: HttpFilePermissions = new HttpFilePermissions(fullPath);
        
        


    var userRoles: Vector = downloadFilePermissions!.getUserRoles()!;
        
        


    var userRole: UserRole = authenticationHelper!.getRole()!;
        
        


    var basicUserRole: BasicUserRole = userRole!.getBasicUserRole()!;
        
        


                        if(userRoles!.contains(basicUserRole))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Authorized", this, "isAuthorized()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("Not Authorized: " +basicUserRole!.toString(), this, "isAuthorized()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


}
                
            

