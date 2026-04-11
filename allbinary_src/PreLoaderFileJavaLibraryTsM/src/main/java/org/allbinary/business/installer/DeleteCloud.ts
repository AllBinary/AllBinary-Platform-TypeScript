
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
        



import { URLGLOBALS } from "../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { FileUploadData } from "../../../../org/allbinary/logic/communication/http/file/upload/FileUploadData.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AbFileSystem } from "../../../../org/allbinary/logic/io/AbFileSystem.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { Directory } from "../../../../org/allbinary/logic/io/file/directory/Directory.js";

    
import { AbPath } from "../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class DeleteCloud
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        
public constructor (){

            super();
            }


    public delete(prePath: string, current: number, total: number): boolean{
var prePath = prePath
var current = current
var total = total

        try {
            
                        if(AbFileSystem.getInstance()!.isType("com.vobject.appengine.java.io"))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(URLGLOBALS.getWebappPath());
    
stringBuffer!.append(prePath);
    

    var path: AbPath = new AbPath(stringBuffer!.toString());
        
        
;
    

    var file: AbFile = new AbFile(path);
        
        
;
    

    var fileBasicArrayList: BasicArrayList = Directory.getInstance()!.search(file, true)!;
        
        
;
    

    var size: number = fileBasicArrayList!.size()!;
        
        
;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Searched: ");
    
stringBuffer!.append(path.toFileSystemString());
    
stringBuffer!.append(" BasicArrayList: ");
    
stringBuffer!.appendint(size);
    

    var portion: number = size /total +1;
        
        
;
    

    var start: number = portion *current;
        
        
;
    

    var end: number = start +portion;
        
        
;
    

                        if(end > size)
                        
                                    {
                                    end= size;
    

                                    }
                                
stringBuffer!.append(" Section: ");
    
stringBuffer!.appendint(start);
    
stringBuffer!.append(" - ");
    
stringBuffer!.appendint(end);
    
logUtil!.put(stringBuffer!.toString(), this, "initialize()");
    




                        for (
    var index: number = start;
        
        
index < end; index++)
        {

    var nextFile: AbFile = fileBasicArrayList!.get(index);

                         as AbFile;
        
        
;
    

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

logUtil!.put("Deleted Files From Cloud", this, "initialize()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                //: 
} catch(e) 
            {
logUtil!.put("Unable to copy installer files into cloud", this, "initialize()", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


}
                
            

