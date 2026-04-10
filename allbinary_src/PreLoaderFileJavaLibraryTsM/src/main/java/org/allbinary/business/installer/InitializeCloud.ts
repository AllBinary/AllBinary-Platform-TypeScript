
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
        



import { PATH_GLOBALS } from "../../../../org/allbinary/globals/PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbFileSystem } from "../../../../org/allbinary/logic/io/AbFileSystem.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { FileUtil } from "../../../../org/allbinary/logic/io/file/FileUtil.js";

    
import { Directory } from "../../../../org/allbinary/logic/io/file/directory/Directory.js";

    
import { AbPath } from "../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class InitializeCloud
            extends Object
         {
        

    public static readonly CLOUD: string = "cloud/";
        
        

    public static readonly CLOUD_UPDATE: string = "cloudupdate/";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (){

            super();
            }


    public initialize(cloud: string, overwriteNewer: boolean, overwriteAll: boolean, current: number, total: number): boolean{
var cloud = cloud
var overwriteNewer = overwriteNewer
var overwriteAll = overwriteAll
var current = current
var total = total

        try {
            
    
                        if(AbFileSystem.getInstance()!.isType("com.vobject.appengine.java.io"))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append(URLGLOBALS.getWebappPath())
append(cloud)
append(PATH_GLOBALS.getInstance()!.DATA_PATH)

    var path: AbPath = new AbPath(stringBuffer!.toString());
        
        

delete(0, stringBuffer!.length())
append(URLGLOBALS.getWebappPath())

    var realPath: AbPath = new AbPath(stringBuffer!.toString());
        
        


    var file: AbFile = new AbFile(path);
        
        


    var fileBasicArrayList: BasicArrayList = Directory.getInstance()!.search(file, true)!;
        
        


    var size: number = fileBasicArrayList!.size()!;
        
        

delete(0, stringBuffer!.length())
append("Searched: ")
append(path.toFileSystemString())
append(" BasicArrayList: ")
appendint(size)

    var portion: number = size /total +1;
        
        


    var start: number = portion *current;
        
        


    var end: number = start +portion;
        
        


    
                        if(end > size)
                        
                                    {
                                    end= size

                                    }
                                
append(" Section: ")
appendint(start)
append(" - ")
appendint(end)
put(stringBuffer!.toString(), this, "initialize()")




                        for (
    var index: number = start;
        
        
index < end; index++)
        {

    var nextFile: AbFile = fileBasicArrayList!.get(index) as AbFile;
        
        


    
                        if(nextFile!.isDirectory())
                        
                                    {
                                    
                                    }
                                
                        else {
                            copyToCloud(nextFile, path, realPath, cloud, overwriteNewer, overwriteAll)

                        }
                            
}

put("Copied Files To Cloud", this, "initialize()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
} catch(e: Exception)
            {
put("Unable to copy installer files into cloud", this, "initialize()", e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


}
                
            

