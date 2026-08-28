
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
        
//not game specific package import { File } from '../../../../../../java/io/File.js';
      const File = globalThis.java.io.File;

      
//not game specific package import { FileReader } from '../../../../../../java/io/FileReader.js';
      const FileReader = globalThis.java.io.FileReader;

      
//not game specific package import { LineNumberReader } from '../../../../../../java/io/LineNumberReader.js';
      const LineNumberReader = globalThis.java.io.LineNumberReader;

      
//not game specific package import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { LicenseInitInfo } from '../../../../../../org/allbinary/business/init/LicenseInitInfo.js';
      const LicenseInitInfo = globalThis.org.allbinary.business.init.LicenseInitInfo;

      
//not game specific package import { LicenseInitInfoUtil } from '../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js';
      const LicenseInitInfoUtil = globalThis.org.allbinary.business.init.LicenseInitInfoUtil;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { XmlRpcAbeLicenseRetrievalClient } from '../../../../../../org/allbinary/logic/system/security/licensing/client/XmlRpcAbeLicenseRetrievalClient.js';
      const XmlRpcAbeLicenseRetrievalClient = globalThis.org.allbinary.logic.system.security.licensing.client.XmlRpcAbeLicenseRetrievalClient;

      
//not game specific package import { PATH_GLOBALS } from '../../../../../../org/allbinary/globals/PATH_GLOBALS.js';
      const PATH_GLOBALS = globalThis.org.allbinary.globals.PATH_GLOBALS;

      
//not game specific package import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicArrayListD } from './BasicArrayListD.js';
import { PrintLicenseInitInfo } from './PrintLicenseInitInfo.js';
import { AbeClientInformationInterfaceFactory } from './AbeClientInformationInterfaceFactory.js';
import { AbeClientInformationInterface } from './AbeClientInformationInterface.js';
import { AbeLicenseInterface } from './AbeLicenseInterface.js';

export class LicenseClientAndServerTest
            extends Object
         {
        

    public static main(args: string[]){

        try {
            
    var licensingTest: LicenseClientAndServerTest = new LicenseClientAndServerTest(args);;
    
licensingTest!.test();
    

                //: 
} catch(e) 
            {

    var logUtil: LogUtil = LogUtil.getInstance()!;;
    
this.logUtil!.put(this.commonStrings!.EXCEPTION, "main()", "main()", e);
    
}

}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private vector: BasicArrayList = new BasicArrayListD();

public constructor (options: string[]){

            super();
        LicenseInitInfoUtil.getInstance()!.setFilePath(PrintLicenseInitInfo.PATH +PATH_GLOBALS.getInstance()!.INIT_PATH);
    




                        for (
    var index: number = 1;index < options.length; index++)
        {
this.vector.add(options[index]!);
    
}


                        if(options.length < 2)
                        
                                    {
                                    
    var file: File = new File(PrintLicenseInitInfo.PATH +"testlicenseservers.txt");;
    

    var reader: FileReader = new FileReader(file);;
    

    var lineNumberReader: LineNumberReader = new LineNumberReader(reader);;
    

        while(true)
        {

    var line: string = lineNumberReader!.readLine()!;;
    

                        if(line != 
                                    null
                                )
                        
                                    {
                                    this.vector.add(line);
    

                                    }
                                
                        else {
                            break;

                    

                        }
                            
}


                                    }
                                
}

//@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.

    public test(){

    var stringBuffer: StringMaker = new StringMaker();;
    

        try {
            
    var list: BasicArrayList = new BasicArrayListD();;
    

    var TESTING: string = "Testing with new licence:<br/>";;
    

    var PROCESSING: string = "Processing: <br/>";;
    

    var END: string = "<br/>End<br/>";;
    

    var RESULT: string = "Test Result: ";;
    

    var size: number = this.vector.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
stringBuffer!.append(TESTING);
    

    var serverName: string = this.vector.get(index) as string;;
    

        try {
            
    var licenseInitInfo: LicenseInitInfo = new LicenseInitInfo();;
    
licenseInitInfo!.addServer(serverName);
    
LicenseInitInfoUtil.getInstance()!.write(licenseInitInfo);
    

    var abeClientInformation: AbeClientInformationInterface = AbeClientInformationInterfaceFactory.getInstance()!;;
    

    var xmlRpcAbeLicenseClient: XmlRpcAbeLicenseRetrievalClient = new XmlRpcAbeLicenseRetrievalClient(abeClientInformation);;
    

    var abeLicenseInterface: AbeLicenseInterface = xmlRpcAbeLicenseClient!.get(
                            null) as AbeLicenseInterface;;
    

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



