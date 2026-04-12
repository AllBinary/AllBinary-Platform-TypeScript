
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
        



import { File } from "../../../../../../java/io/File.js";

    
import { FileReader } from "../../../../../../java/io/FileReader.js";

    
import { LineNumberReader } from "../../../../../../java/io/LineNumberReader.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { LicenseInitInfo } from "../../../../../../org/allbinary/business/init/LicenseInitInfo.js";

    
import { LicenseInitInfoUtil } from "../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { XmlRpcAbeLicenseRetrievalClient } from "../../../../../../org/allbinary/logic/system/security/licensing/client/XmlRpcAbeLicenseRetrievalClient.js";

    
import { PATH_GLOBALS } from "../../../../../../org/allbinary/globals/PATH_GLOBALS.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class LicenseClientAndServerTest
            extends Object
         {
        

    public static main(args: string[]){
var args = args

        try {
            
    var licensingTest: LicenseClientAndServerTest = new LicenseClientAndServerTest(args);
        
        
;
    
licensingTest!.test();
    

                //: 
} catch(e) 
            {

    var logUtil: LogUtil = LogUtil.getInstance()!;
        
        
;
    
this.logUtil!.put(this.commonStrings!.EXCEPTION, "main()", "main()", e);
    
}

}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

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


                        if(options.length < 2)
                        
                                    {
                                    
    var file: File = new File(PrintLicenseInitInfo.PATH +"testlicenseservers.txt");
        
        
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
                                    vector.add(line);
    

                                    }
                                
                        else {
                            break;

                    

                        }
                            
}


                                    }
                                
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public test(){

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

        try {
            
    var list: BasicArrayList = new BasicArrayList();
        
        
;
    

    var TESTING: string = "Testing with new licence:<br/>";
        
        
;
    

    var PROCESSING: string = "Processing: <br/>";
        
        
;
    

    var END: string = "<br/>End<br/>";
        
        
;
    

    var RESULT: string = "Test Result: ";
        
        
;
    

    var size: number = vector.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
stringBuffer!.append(TESTING);
    

    var serverName: string = vector.get(index);

                         as String;
        
        
;
    

        try {
            
    var licenseInitInfo: LicenseInitInfo = new LicenseInitInfo();
        
        
;
    
licenseInitInfo!.addServer(serverName);
    
LicenseInitInfoUtil.getInstance()!.write(licenseInitInfo);
    

    var abeClientInformation: AbeClientInformationInterface = AbeClientInformationInterfaceFactory.getInstance()!;
        
        
;
    

    var xmlRpcAbeLicenseClient: XmlRpcAbeLicenseRetrievalClient = new XmlRpcAbeLicenseRetrievalClient(abeClientInformation);
        
        
;
    

    var abeLicenseInterface: AbeLicenseInterface = xmlRpcAbeLicenseClient!.get(
                            null);

                         as AbeLicenseInterface;
        
        
;
    

                        if(abeLicenseInterface != 
                                    null
                                )
                        
                                    {
                                    stringBuffer!.append(PROCESSING);
    
stringBuffer!.append(abeLicenseInterface!.toString());
    

                                    }
                                
stringBuffer!.append(END);
    
this.logUtil!.putF(RESULT +stringBuffer!.toString(), this, "test");
    
stringBuffer!.delete(0, stringBuffer!.length());
    

                //: 
} catch(e) 
            {
list.add(serverName);
    
this.logUtil!.put("Test Error: " +stringBuffer!.toString(), this, "test", e);
    
}

}

this.logUtil!.putF("Total Servers Failed: " +list.size() +" Failed Servers: " +list.toString(), this, "test");
    

                //: 
} catch(e) 
            {
this.logUtil!.put("Test Error: " +stringBuffer!.toString(), this, "test", e);
    
}

}


}
                
            

