
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
        



import { LicenseInitInfo } from "../../../../../../org/allbinary/business/init/LicenseInitInfo.js";

    
import { LicenseInitInfoUtil } from "../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js";

    
import { FileFactory } from "../../../../../../org/allbinary/logic/io/file/FileFactory.js";

    
import { PATH_GLOBALS } from "../../../../../../org/allbinary/globals/PATH_GLOBALS.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class PrintLicenseInitInfo
            extends Object
         {
        

    public static readonly PATH: string = "G:\\mnt\\bc\\mydev\\work\\allbinary_src\\licensing\\data\\";
        
        

                //@Throws(Error::class)
            
    public static main(args: string[]){
var args = args

    var initInfo: PrintLicenseInitInfo = new PrintLicenseInitInfo(args);
        
        
;
    
initInfo!.printInitInfo();
    
}

public constructor (options: string[]){

            super();
            var options = options
LicenseInitInfoUtil.getInstance()!.setFilePath(PATH +PATH_GLOBALS.getInstance()!.INIT_PATH);
    
}


                //@Throws(Error::class)
            
    public getLicenseInitInfo(): LicenseInitInfo{

    var licenseInitInfoUtil: LicenseInitInfoUtil = LicenseInitInfoUtil.getInstance()!;
        
        
;
    

                        if(FileFactory.getInstance()!.isFile(licenseInitInfoUtil!.getFilePath()))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return licenseInitInfoUtil!.read();

                        ;
    

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
                
            

