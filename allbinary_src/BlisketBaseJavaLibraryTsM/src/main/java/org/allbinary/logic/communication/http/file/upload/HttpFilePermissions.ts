
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
import { Vector } from '../../../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { BasicUserRoleFactory } from '../../../../../../../org/allbinary/business/user/role/BasicUserRoleFactory.js';
      //not GWT import const BasicUserRoleFactory = globalThis.org.allbinary.business.user.role.BasicUserRoleFactory;

      
//not plain js import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbFile } from '../../../../../../../org/allbinary/logic/io/file/AbFile.js';
      //not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
import { AbPath } from '../../../../../../../org/allbinary/logic/io/path/AbPath.js';
      //not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { FileUploadData } from './FileUploadData.js';
//not GWT import const  = globalThis.org.allbinary.logic.communication.http.file.upload.FileUploadData;

                
export class HttpFilePermissions
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly file: AbFile;

    private readonly userRoles: Vector = new Vector();

public constructor (fullPath: AbPath){

            super();
        this.file= AbFile.createAbFileFromAbPath(new AbPath(fullPath!.toFileSystemString(), FileUploadData.getInstance()!.FILE));
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.putF("Loading Privileges: " +fullPath!.toFileSystemString(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                

                        if(this.isFile())
                        
                                    {
                                    this.userRoles!.add(BasicUserRoleFactory.getInstance()!.ADMINISTRATOR);
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.putF("User Roles: " +this.userRoles, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


    public isFile(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.isFile();;
    
}


    public getUserRoles(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userRoles;
    
}


}



