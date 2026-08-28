
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
        
//not game specific package import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
      const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not game specific package import { FileUploadData } from '../../../../org/allbinary/logic/communication/http/file/upload/FileUploadData.js';
      const FileUploadData = globalThis.org.allbinary.logic.communication.http.file.upload.FileUploadData;

      
//not game specific package import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AbIOSystem } from '../../../../org/allbinary/logic/io/AbIOSystem.js';
      const AbIOSystem = globalThis.org.allbinary.logic.io.AbIOSystem;

      
//not game specific package import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
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
        
export class DeleteCloud
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

public constructor (){

            super();
        }


    public delete(prePath: string, current: number, total: number): boolean{

        try {
            
                        if(AbIOSystem.getInstance()!.isType("com.vobject.appengine.java.io"))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(prePath);
    

    var path: AbPath = new AbPath(stringBuffer!.toString(), StringUtil.getInstance()!.EMPTY_STRING);;
    

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
    

        try {
            
                        if(nextFile!.getPath()!.indexOf(FileUploadData.getInstance()!.FILE) < 0)
                        
                                    {
                                    nextFile!.delete();
    

                                    }
                                

                //: 
} catch(e) 
            {
}

}

this.logUtil!.putF("Deleted Files From Cloud", this, "initialize()");
    

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



