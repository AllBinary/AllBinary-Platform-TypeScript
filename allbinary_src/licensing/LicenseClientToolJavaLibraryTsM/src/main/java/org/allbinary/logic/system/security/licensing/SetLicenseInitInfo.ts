
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
        



import { BufferedReader } from "../../../../../../java/io/BufferedReader.js";

    
import { InputStreamReader } from "../../../../../../java/io/InputStreamReader.js";

    
import { LicenseInitInfo } from "../../../../../../org/allbinary/business/init/LicenseInitInfo.js";

    
import { LicenseInitInfoUtil } from "../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js";

    
import { FileFactory } from "../../../../../../org/allbinary/logic/io/file/FileFactory.js";

    
import { PATH_GLOBALS } from "../../../../../../org/allbinary/globals/PATH_GLOBALS.js";

    
import { File } from "../../../../../../java/io/File.js";

    
import { FileReader } from "../../../../../../java/io/FileReader.js";

    
import { LineNumberReader } from "../../../../../../java/io/LineNumberReader.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class SetLicenseInitInfo
            extends Object
         {
        

    private stdinput: BufferedReader = new BufferedReader(new InputStreamReader(System.in));
        
        

                //@Throws(Error::class)
            
    public static main(args: string[]){
var args = args

    var initInfo: SetLicenseInitInfo = new SetLicenseInitInfo(args);
        
        
;
    
initInfo!.createNewLicenseInitInfo(new BasicArrayList());
    
}


    private vector: BasicArrayList = new BasicArrayList();
        
        
public constructor (options: string[]){

            super();
            var options = options
LicenseInitInfoUtil.getInstance()!.setFilePath(PrintLicenseInitInfo.PATH +PATH_GLOBALS.getInstance()!.INIT_PATH);
    




                        for (
    var index: number = 1;
        
        
index < options.length; index++)
        {
vector.add(options[index]!);
    
}

}


                //@Throws(Error::class)
            
    public getLicenseInitInfo(): LicenseInitInfo{

    var licenseInitInfoUtil: LicenseInitInfoUtil = LicenseInitInfoUtil.getInstance()!;
        
        
;
    

                        if(FileFactory.getInstance()!.isFile(licenseInitInfoUtil!.INITFILENAME))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return licenseInitInfoUtil!.read();

                        ;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new LicenseInitInfo();
    

                        }
                            
}


    public createNewLicenseInitInfo(licenceServerVector: BasicArrayList){
var licenceServerVector = licenceServerVector

        try {
            
                        if(licenceServerVector == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Error("null Vector Passed - Just Make Empty if you want")

                                    }
                                

    var licenseInitInfo: LicenseInitInfo = this.getLicenseInitInfo()!;
        
        
;
    
console.log("License Serv Example: http://www.dartstatistics.com/LicServ/serverssl.php");
    
licenseInitInfo!.clearServers();
    

    var file: File = new File(PrintLicenseInitInfo.PATH +"licenseservers.txt");
        
        
;
    

    var reader: FileReader = new FileReader(file);
        
        
;
    

    var lineNumberReader: LineNumberReader = new LineNumberReader(reader);
        
        
;
    

        while(true)
        {

    var line: string = lineNumberReader!.readLine()!;
        
        
;
    

                        if(line != 
                                    null
                                )
                        
                                    {
                                    licenseInitInfo!.addServer(line);
    

                                    }
                                
                        else {
                            break;

                    

                        }
                            
}

LicenseInitInfoUtil.getInstance()!.write(licenseInitInfo);
    
LicenseInitInfoUtil.getInstance()!.read();
    

                //: 
} catch(e) 
            {
console.log("Error: " +e);
    
e.printStackTrace();
    
}

}


}
                
            

