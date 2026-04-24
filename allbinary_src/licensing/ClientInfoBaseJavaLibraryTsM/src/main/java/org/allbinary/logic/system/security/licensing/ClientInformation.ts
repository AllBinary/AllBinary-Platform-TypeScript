
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
        



import { Hashtable } from "../../../../../../java/util/Hashtable.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { HardwareInterface } from "../../../../../../org/allbinary/logic/system/hardware/HardwareInterface.js";

    
import { SystemHardwareFactory } from "../../../../../../org/allbinary/logic/system/hardware/SystemHardwareFactory.js";

    
import { GenericOperatingSystem } from "../../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js";

    
import { NoOperatingSystem } from "../../../../../../org/allbinary/logic/system/os/NoOperatingSystem.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../../org/allbinary/util/BasicArrayListUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AbeClientInformationInterface } from "./AbeClientInformationInterface.js";

import { AbeClientInformationData } from "./AbeClientInformationData.js";

export class ClientInformation
            extends Object
         implements AbeClientInformationInterface {
        

    private operatingSystemInterface: GenericOperatingSystem = NoOperatingSystem.NO_OPERATING_SYSTEM;
        
        

    private readonly name: string

    private readonly shortName: string

    private readonly version: string

    private readonly specialName: string

    private hardSale: boolean = true;
        
        

    private licenseId: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private licenseServers: BasicArrayList = BasicArrayListUtil.getInstance()!.getImmutableInstance()!;
        
        
public constructor (name: string, version: string, specialName: string, shortName: string){

            super();
            //var name = name
    //var version = version
    //var specialName = specialName
    //var shortName = shortName
this.name= name;
    
this.version= version;
    
this.specialName= specialName;
    
this.shortName= new StringMaker().
                            append(shortName)!.append(CommonSeps.getInstance()!.UNDERSCORE)!.append(version)!.toString();
    
this.init();
    
}


    public init(){
}


    public getOperatingSystemInterface(): GenericOperatingSystem{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return operatingSystemInterface;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getSpecialName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.specialName;
    
}


    public getVersion(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.version;
    
}


    public getLicenseId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.licenseId;
    
}


    public getLicenseServers(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.licenseServers;
    
}


    public getLicenseServer(index: number): string{
var index = index



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.licenseServers!.objectArray[index]! as String;
    
}


    public getNumberOfLicenseServers(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.licenseServers!.size();;
    
}


    public toHashtable(): Hashtable<any, any>{

    var abeClientInformationData: AbeClientInformationData = AbeClientInformationData.getInstance()!;
        
        
;
    

    var clientInfoHashtable: Hashtable<any, any> = new Hashtable<any, any>();
        
        
;
    
clientInfoHashtable!.put(abeClientInformationData!.NAME, this.name);
    
clientInfoHashtable!.put(abeClientInformationData!.VERSION, this.version);
    
clientInfoHashtable!.put(abeClientInformationData!.SPECIALNAME, this.specialName);
    
clientInfoHashtable!.put(abeClientInformationData!.LICENSEID, this.getLicenseId());
    
clientInfoHashtable!.put(abeClientInformationData!.OSNAME, this.getOperatingSystemInterface()!.getName());
    
clientInfoHashtable!.put(abeClientInformationData!.OSARCH, this.getOperatingSystemInterface()!.getArch());
    
clientInfoHashtable!.put(abeClientInformationData!.OSVERSION, this.getOperatingSystemInterface()!.getVersion());
    
clientInfoHashtable!.put(abeClientInformationData!.OS, this.getOperatingSystemInterface()!.toString());
    

    var hardwareInterface: HardwareInterface = SystemHardwareFactory.getInstance()!.getInstance(getOperatingSystemInterface())!;
        
        
;
    

    var hardwareString: string = hardwareInterface!.toString()!;
        
        
;
    
clientInfoHashtable!.put(abeClientInformationData!.HARDWARE, hardwareString);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return clientInfoHashtable;
    
}


    public isSameId(alicenseId: string): boolean{
var alicenseId = alicenseId

                        if(this.getLicenseId()!.compareTo(alicenseId) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public isLargerOrDifferentServerList(list: BasicArrayList): boolean{
var list = list

    var size: number = list.size() -1;
        
        
;
    

    var currentSize: number = this.licenseServers!.size() -1;
        
        
;
    

                        if(size > currentSize)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                




                        for (
    var index: number = size;
        
        
index >= 0; index--)
        {

    var newServerName: string = list.objectArray[index]! as String;
        
        
;
    




                        for (
    var index2: number = currentSize;
        
        
index2 >= 0; index2--)
        {

    var nextOldServerName: string = this.licenseServers!.objectArray[index]! as String;
        
        
;
    

                        if(newServerName!.compareTo(nextOldServerName) != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    setHardSale(hardSale: boolean){
var hardSale = hardSale
this.hardSale= hardSale;
    
}


    public isHardSale(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hardSale;
    
}


    setOperatingSystemInterface(operatingSystemInterface: GenericOperatingSystem){
var operatingSystemInterface = operatingSystemInterface
this.operatingSystemInterface= operatingSystemInterface;
    
}


    setLicenseId(licenseId: string){
var licenseId = licenseId
this.licenseId= licenseId;
    
}


    setLicenseServers(licenseServers: BasicArrayList){
var licenseServers = licenseServers
this.licenseServers= licenseServers;
    
}


    public toShortString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.shortName;
    
}


}
                
            

