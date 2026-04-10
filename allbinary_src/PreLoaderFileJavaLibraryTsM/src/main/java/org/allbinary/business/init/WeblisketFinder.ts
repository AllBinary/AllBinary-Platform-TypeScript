
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
        



import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { LogConfigTypeFactory } from "../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js";

    
import { LogConfigTypes } from "../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js";

    
import { AbFile } from "../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { SubDirectory } from "../../../../org/allbinary/logic/io/file/directory/SubDirectory.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class WeblisketFinder
            extends Object
         {
        

    private static readonly instance: WeblisketFinder = new WeblisketFinder();
        
        

    public static getInstance(): WeblisketFinder{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private static readonly KEY: string = "installerdata.dat";
        
        

                @Throws(Exception::class)
            
    public static main(args: string[]){
var args = args

    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        


    var vector: BasicArrayList = WeblisketFinder.getInstance()!.findAll(stringUtil!.EMPTY_STRING)!;
        
        

println(vector.size())
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly subDirectory: SubDirectory = SubDirectory.getInstance()!;
        
        
private constructor (){

            super();
            }


    public findAll(path: string): BasicArrayList{
var path = path

        try {
            put(this.commonStrings!.START, this, "findAll")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return subDirectory!.search(KEY, AbFile(path));
    
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, "findAll", e)

    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "findAll", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


    public getInstallationPath(file: AbFile): string{
var file = file

        try {
            
    var filePath: string = file.getPath()!;
        
        


    var end: number = filePath!.indexOf(KEY)!;
        
        


    
                        if(end < 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return filePath!.substring(0, end);
    
} catch(e: Exception)
            {

    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "getInstallationPath", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


}
                
            

