
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
        
import { File } from '../../../../../../java/io/File.js';
//not GWT import const File

import { FileReader } from '../../../../../../java/io/FileReader.js';
//not GWT import const FileReader

import { LineNumberReader } from '../../../../../../java/io/LineNumberReader.js';
//not GWT import const LineNumberReader

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { LicenseInitInfo } from '../../../../../../org/allbinary/business/init/LicenseInitInfo.js';
//not GWT import const LicenseInitInfo

import { LicenseInitInfoUtil } from '../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js';
//not GWT import const LicenseInitInfoUtil

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { XmlRpcAbeLicenseRetrievalClient } from '../../../../../../org/allbinary/logic/system/security/licensing/client/XmlRpcAbeLicenseRetrievalClient.js';
//not GWT import const XmlRpcAbeLicenseRetrievalClient

import { PATH_GLOBALS } from '../../../../../../org/allbinary/globals/PATH_GLOBALS.js';
//not GWT import const PATH_GLOBALS

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicArrayListD } from './BasicArrayListD.js';
//not GWT import - same folder const BasicArrayListD
import { PrintLicenseInitInfo } from './PrintLicenseInitInfo.js';
//not GWT import - same folder const PrintLicenseInitInfo
import { AbeClientInformationInterfaceFactory } from './AbeClientInformationInterfaceFactory.js';
//not GWT import - same folder const AbeClientInformationInterfaceFactory
import { AbeClientInformationInterface } from './AbeClientInformationInterface.js';
//not GWT import - same folder const AbeClientInformationInterface
import { AbeLicenseInterface } from './AbeLicenseInterface.js';
//not GWT import - same folder const AbeLicenseInterface

export class LicenseClientAndServerTest
            extends Object
         {
        

    public static main(args: string[]){

 try { 
    let licensingTest: LicenseClientAndServerTest = new LicenseClientAndServerTest(args);;
    
licensingTest!.test();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    
this.logUtil!.put(this.commonStrings!.EXCEPTION, "main()", "main()", e);
    

 }
   }
 
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private vector: BasicArrayList = new BasicArrayListD();

public constructor (options: string[]){

            super();
        LicenseInitInfoUtil.getInstance()!.setFilePath(PrintLicenseInitInfo.PATH +PATH_GLOBALS.getInstance()!.INIT_PATH);
    




                        for (
    let index: number = 1;index < options.length; index++)
        {
this.vector.add(options[index]!);
    
}


                        if(options.length < 2)
                        
                                    {
                                    
    let file: File = new File(PrintLicenseInitInfo.PATH +"testlicenseservers.txt");;
    

    let reader: FileReader = new FileReader(file);;
    

    let lineNumberReader: LineNumberReader = new LineNumberReader(reader);;
    

        while(true)
        {

    let line: string = lineNumberReader!.readLine()!;;
    

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

    let stringBuffer: StringMaker = new StringMaker();;
    

 try { 
    let list: BasicArrayList = new BasicArrayListD();;
    

    let TESTING: string = "Testing with new licence:<br/>";;
    

    let PROCESSING: string = "Processing: <br/>";;
    

    let END: string = "<br/>End<br/>";;
    

    let RESULT: string = "Test Result: ";;
    

    let size: number = this.vector.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
stringBuffer!.append(TESTING);
    

    let serverName: string = this.vector.get(index) as string;;
    

 try { 
    let licenseInitInfo: LicenseInitInfo = new LicenseInitInfo();;
    
licenseInitInfo!.addServer(serverName);
    
LicenseInitInfoUtil.getInstance()!.write(licenseInitInfo);
    

    let abeClientInformation: AbeClientInformationInterface = AbeClientInformationInterfaceFactory.getInstance()!;;
    

    let xmlRpcAbeLicenseClient: XmlRpcAbeLicenseRetrievalClient = new XmlRpcAbeLicenseRetrievalClient(abeClientInformation);;
    

    let abeLicenseInterface: AbeLicenseInterface = xmlRpcAbeLicenseClient!.get(
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
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
list.add(serverName);
    
this.logUtil!.put("Test Error: " +stringBuffer!.toString(), this, "test", e);
    

 }
   }
 
}

this.logUtil!.putF("Total Servers Failed: " +list.size() +" Failed Servers: " +list.toString(), this, "test");
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put("Test Error: " +stringBuffer!.toString(), this, "test", e);
    

 }
   }
 
}


}

