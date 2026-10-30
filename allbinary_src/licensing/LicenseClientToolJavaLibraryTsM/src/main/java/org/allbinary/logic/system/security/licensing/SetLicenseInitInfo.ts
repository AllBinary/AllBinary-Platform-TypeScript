
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
//not GWT import const BufferedReader

import { InputStreamReader } from '../../../../../../java/io/InputStreamReader.js';
//not GWT import const InputStreamReader

import { LicenseInitInfo } from '../../../../../../org/allbinary/business/init/LicenseInitInfo.js';
//not GWT import const LicenseInitInfo

import { LicenseInitInfoUtil } from '../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js';
//not GWT import const LicenseInitInfoUtil

import { FileFactory } from '../../../../../../org/allbinary/logic/io/file/FileFactory.js';
//not GWT import const FileFactory

import { PATH_GLOBALS } from '../../../../../../org/allbinary/globals/PATH_GLOBALS.js';
//not GWT import const PATH_GLOBALS

import { File } from '../../../../../../java/io/File.js';
//not GWT import const File

import { FileReader } from '../../../../../../java/io/FileReader.js';
//not GWT import const FileReader

import { LineNumberReader } from '../../../../../../java/io/LineNumberReader.js';
//not GWT import const LineNumberReader

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicArrayListD } from './BasicArrayListD.js';
//not GWT import - same folder const BasicArrayListD
import { PrintLicenseInitInfo } from './PrintLicenseInitInfo.js';
//not GWT import - same folder const PrintLicenseInitInfo

export class SetLicenseInitInfo
            extends Object
         {
        

    private static stdinput: BufferedReader = new BufferedReader(new InputStreamReader(System.in));

                //@Throws(Exception.constructor)
            
    public static main(args: string[]){

    let initInfo: SetLicenseInitInfo = new SetLicenseInitInfo(args);;
    
initInfo!.createNewLicenseInitInfo(new BasicArrayListD());
    
}


    private vector: BasicArrayList = new BasicArrayListD();

public constructor (options: string[]){

            super();
        LicenseInitInfoUtil.getInstance()!.setFilePath(PrintLicenseInitInfo.PATH +PATH_GLOBALS.getInstance()!.INIT_PATH);
    




                        for (
    let index: number = 1;index < options.length; index++)
        {
this.vector.add(options[index]!);
    
}

}


                //@Throws(Exception.constructor)
            
    public getLicenseInitInfo(): LicenseInitInfo{

    let licenseInitInfoUtil: LicenseInitInfoUtil = LicenseInitInfoUtil.getInstance()!;;
    

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
                                    


                            throw new Exception("null BasicArrayList Passed - Just Make Empty if you want");
                    

                                    }
                                

    let licenseInitInfo: LicenseInitInfo = this.getLicenseInitInfo()!;;
    
console.log("License Serv Example: http://www.dartstatistics.com/LicServ/serverssl.php");
    
licenseInitInfo!.clearServers();
    

    let file: File = new File(PrintLicenseInitInfo.PATH +"licenseservers.txt");;
    

    let reader: FileReader = new FileReader(file);;
    

    let lineNumberReader: LineNumberReader = new LineNumberReader(reader);;
    

        while(true)
        {

    let line: string = lineNumberReader!.readLine()!;;
    

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
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
console.log("Error: " +e);
    
e.printStackTrace();
    

 }
   }
 
}


}

