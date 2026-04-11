
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { BasicUserRoleFactory } from "../../../../../../../org/allbinary/business/user/role/BasicUserRoleFactory.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbFile } from "../../../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { AbPath } from "../../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class HttpFilePermissions
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly file: AbFile

    private readonly userRoles: Vector = new Vector();
        
        
public constructor (fullPath: AbPath){

            super();
            var fullPath = fullPath
file= new AbFile(new AbPath(fullPath!.toFileSystemString(), FileUploadData.getInstance()!.FILE));
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put("Loading Privileges: " +fullPath!.toFileSystemString(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                

                        if(this.isFile())
                        
                                    {
                                    userRoles!.add(BasicUserRoleFactory.getInstance()!.ADMINISTRATOR);
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    logUtil!.put("User Roles: " +userRoles, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


    public isFile(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.isFile();

                        ;
    
}


    public getUserRoles(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return userRoles;
    
}


}
                
            

