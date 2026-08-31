
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
        



            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { System } from '../../../../../../java/lang/System.js';
        
import { BufferedReader } from '../../../../../../java/io/BufferedReader.js';
      //not GWT import const BufferedReader = globalThis.java.io.BufferedReader;

      
import { InputStreamReader } from '../../../../../../java/io/InputStreamReader.js';
      //not GWT import const InputStreamReader = globalThis.java.io.InputStreamReader;

      
import { LicenseInitInfo } from '../../../../../../org/allbinary/business/init/LicenseInitInfo.js';
      //not GWT import const LicenseInitInfo = globalThis.org.allbinary.business.init.LicenseInitInfo;

      
import { LicenseInitInfoUtil } from '../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js';
      //not GWT import const LicenseInitInfoUtil = globalThis.org.allbinary.business.init.LicenseInitInfoUtil;

      
import { FileFactory } from '../../../../../../org/allbinary/logic/io/file/FileFactory.js';
      //not GWT import const FileFactory = globalThis.org.allbinary.logic.io.file.FileFactory;

      
import { PATH_GLOBALS } from '../../../../../../org/allbinary/globals/PATH_GLOBALS.js';
      //not GWT import const PATH_GLOBALS = globalThis.org.allbinary.globals.PATH_GLOBALS;

      
import { File } from '../../../../../../java/io/File.js';
      //not GWT import const File = globalThis.java.io.File;

      
import { FileReader } from '../../../../../../java/io/FileReader.js';
      //not GWT import const FileReader = globalThis.java.io.FileReader;

      
import { LineNumberReader } from '../../../../../../java/io/LineNumberReader.js';
      //not GWT import const LineNumberReader = globalThis.java.io.LineNumberReader;

      
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicArrayListD } from './BasicArrayListD.js';
import { PrintLicenseInitInfo } from './PrintLicenseInitInfo.js';

export class SetLicenseInitInfo
            extends Object
         {
        

    private static stdinput: BufferedReader = new BufferedReader(new InputStreamReader(System.in));

                //@Throws(Exception.constructor)
            
    public static main(args: string[]){

    var initInfo: SetLicenseInitInfo = new SetLicenseInitInfo(args);;
    
initInfo!.createNewLicenseInitInfo(new BasicArrayListD());
    
}


    private vector: BasicArrayList = new BasicArrayListD();

public constructor (options: string[]){

            super();
        LicenseInitInfoUtil.getInstance()!.setFilePath(PrintLicenseInitInfo.PATH +PATH_GLOBALS.getInstance()!.INIT_PATH);
    




                        for (
    var index: number = 1;index < options.length; index++)
        {
this.vector.add(options[index]!);
    
}

}


                //@Throws(Exception.constructor)
            
    public getLicenseInitInfo(): LicenseInitInfo{

    var licenseInitInfoUtil: LicenseInitInfoUtil = LicenseInitInfoUtil.getInstance()!;;
    

                        if(FileFactory.getInstance()!.isFile(licenseInitInfoUtil!.INITFILENAME))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return licenseInitInfoUtil!.read();;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new LicenseInitInfo();
    

                        }
                            
}


    public createNewLicenseInitInfo(licenceServerVector: BasicArrayList){

        try {
            
                        if(licenceServerVector == 
                                    null
                                )
                        
                                    {
                                    


                            throw new Exception("null Vector Passed - Just Make Empty if you want");
                    

                                    }
                                

    var licenseInitInfo: LicenseInitInfo = this.getLicenseInitInfo()!;;
    
console.log("License Serv Example: http://www.dartstatistics.com/LicServ/serverssl.php");
    
licenseInitInfo!.clearServers();
    

    var file: File = new File(PrintLicenseInitInfo.PATH +"licenseservers.txt");;
    

    var reader: FileReader = new FileReader(file);;
    

    var lineNumberReader: LineNumberReader = new LineNumberReader(reader);;
    

        while(true)
        {

    var line: string = lineNumberReader!.readLine()!;;
    

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



