
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { PATH_GLOBALS } from '../../../../org/allbinary/globals/PATH_GLOBALS.js';
      const PATH_GLOBALS = globalThis.org.allbinary.globals.PATH_GLOBALS;

      
//not game specific package import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
      const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbIOSystem } from '../../../../org/allbinary/logic/io/AbIOSystem.js';
      const AbIOSystem = globalThis.org.allbinary.logic.io.AbIOSystem;

      
//not game specific package import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { FileUtil } from '../../../../org/allbinary/logic/io/file/FileUtil.js';
      const FileUtil = globalThis.org.allbinary.logic.io.file.FileUtil;

      
//not game specific package import { Directory } from '../../../../org/allbinary/logic/io/file/directory/Directory.js';
      const Directory = globalThis.org.allbinary.logic.io.file.directory.Directory;

      
//not game specific package import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not game specific package import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
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

        try {
            
                        if(AbIOSystem.getInstance()!.isType("com.vobject.appengine.java.io"))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(cloud);
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.DATA_PATH);
    

    var path: AbPath = new AbPath(stringBuffer!.toString(), StringUtil.getInstance()!.EMPTY_STRING);;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    

    var realPath: AbPath = new AbPath(stringBuffer!.toString(), StringUtil.getInstance()!.EMPTY_STRING);;
    

    var file: AbFile = AbFile.createAbFileFromAbPath(path)!;;
    

    var fileBasicArrayList: BasicArrayList = Directory.getInstance()!.search(file, true)!;;
    

    var size: number = fileBasicArrayList!.size()!;;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Searched: ");
    
stringBuffer!.append(path.toFileSystemString());
    
stringBuffer!.append(" BasicArrayList: ");
    
stringBuffer!.appendint(size);
    

    var portion: number = size /total +1;;
    

    var start: number = portion *current;;
    

    var end: number = start +portion;;
    

                        if(end > size)
                        
                                    {
                                    end= size;
    

                                    }
                                
stringBuffer!.append(" Section: ");
    
stringBuffer!.appendint(start);
    
stringBuffer!.append(" - ");
    
stringBuffer!.appendint(end);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "initialize()");
    

    var nextFile: AbFile;;
    




                        for (
    var index: number = start;index < end; index++)
        {
nextFile= fileBasicArrayList!.get(index) as AbFile;
    

                        if(nextFile!.isDirectory())
                        
                                    {
                                    
                                    }
                                
                        else {
                            FileUtil.getInstance()!.copyToCloud(nextFile, path, realPath, cloud, overwriteNewer, overwriteAll);
    

                        }
                            
}

this.logUtil!.putF("Copied Files To Cloud", this, "initialize()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Unable to copy installer files into cloud", this, "initialize()", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


}



