
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
        
import { LicenseInitInfo } from '../../../../../../org/allbinary/business/init/LicenseInitInfo.js';
      
import { LicenseInitInfoUtil } from '../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js';
      
import { FileFactory } from '../../../../../../org/allbinary/logic/io/file/FileFactory.js';
      
import { PATH_GLOBALS } from '../../../../../../org/allbinary/globals/PATH_GLOBALS.js';
      
import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PrintLicenseInitInfo
            extends Object
         {
        

    public static readonly PATH: string = "G:\\mnt\\bc\\mydev\\work\\allbinary_src\\licensing\\data\\";

                //@Throws(Exception.constructor)
            
    public static main(args: string[]){

    var initInfo: PrintLicenseInitInfo = new PrintLicenseInitInfo(args);
;
    
initInfo!.printInitInfo();
    
}

public constructor (options: string[]){

            super();
        LicenseInitInfoUtil.getInstance()!.setFilePath(PrintLicenseInitInfo.PATH +PATH_GLOBALS.getInstance()!.INIT_PATH);
    
}


                //@Throws(Exception.constructor)
            
    public getLicenseInitInfo(): LicenseInitInfo{

    var licenseInitInfoUtil: LicenseInitInfoUtil = LicenseInitInfoUtil.getInstance()!;
;
    

                        if(FileFactory.getInstance()!.isFile(licenseInitInfoUtil!.getFilePath()))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return licenseInitInfoUtil!.read();;
    

                                    }
                                
                        else {
                            console.log("No Licence File at: " +licenseInitInfoUtil!.getFilePath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new LicenseInitInfo();
    

                        }
                            
}


    public printInitInfo(){

        try {
            
    var licenseInitInfo: LicenseInitInfo = this.getLicenseInitInfo()!;
;
    
console.log("License ID: " +licenseInitInfo!.getLicenseId());
    

    var list: BasicArrayList = licenseInitInfo!.getServerList()!;
;
    

    var size: number = list.size()!;
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {
console.log("Lic Serv: " +list.get(index));
    
}


                //: 
} catch(e) 
            {
console.log("Error: " +e);
    
e.printStackTrace();
    
}

}


}
                
            

