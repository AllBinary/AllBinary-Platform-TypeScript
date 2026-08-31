
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

        


            import { Object } from '../../java/lang/Object.js';
        
            import { Exception } from '../../java/lang/Exception.js';
        
import { Vector } from '../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { BasicUserRole } from '../../org/allbinary/business/user/role/BasicUserRole.js';
      //not GWT import const BasicUserRole = globalThis.org.allbinary.business.user.role.BasicUserRole;

      
import { UserRole } from '../../org/allbinary/business/user/role/UserRole.js';
      //not GWT import const UserRole = globalThis.org.allbinary.business.user.role.UserRole;

      
import { URLGLOBALS } from '../../org/allbinary/globals/URLGLOBALS.js';
      //not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
import { HttpFilePermissions } from '../../org/allbinary/logic/communication/http/file/upload/HttpFilePermissions.js';
      //not GWT import const HttpFilePermissions = globalThis.org.allbinary.logic.communication.http.file.upload.HttpFilePermissions;

      
import { HttpRequestUtil } from '../../org/allbinary/logic/communication/http/request/HttpRequestUtil.js';
      //not GWT import const HttpRequestUtil = globalThis.org.allbinary.logic.communication.http.request.HttpRequestUtil;

      
//not plain js import { LogUtil } from '../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbPath } from '../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { StringUtil } from '../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonLabels } from '../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AuthenticationHelper } from './AuthenticationHelper.js';
//not GWT import const AuthenticationHelper = globalThis.admin.taghelpers.AuthenticationHelper;

                
export class AuthenticationHelperUtil
            extends Object
         {
        

    private static readonly instance: AuthenticationHelperUtil = new AuthenticationHelperUtil();

    public static getInstance(): AuthenticationHelperUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AuthenticationHelperUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public isAuthorized(authenticationHelper: AuthenticationHelper, filePath: string): boolean{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.putF(CommonLabels.getInstance()!.START +filePath, this, "isAuthorized()");
    

                                    }
                                

    var endIndex: number = HttpRequestUtil.getInstance()!.getLastSeparatorIndex(filePath)!;;
    

    var fullPath: AbPath = new AbPath(URLGLOBALS.getWebappPath() +filePath!.substring(0, endIndex), StringUtil.getInstance()!.EMPTY_STRING);;
    

    var downloadFilePermissions: HttpFilePermissions = new HttpFilePermissions(fullPath);;
    

    var userRoles: Vector = downloadFilePermissions!.getUserRoles()!;;
    

    var userRole: UserRole = authenticationHelper!.getRole()!;;
    

    var basicUserRole: BasicUserRole = userRole!.getBasicUserRole()!;;
    

                        if(userRoles!.contains(basicUserRole))
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Authorized", this, "isAuthorized()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Not Authorized: " +basicUserRole!.toString(), this, "isAuthorized()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


}



