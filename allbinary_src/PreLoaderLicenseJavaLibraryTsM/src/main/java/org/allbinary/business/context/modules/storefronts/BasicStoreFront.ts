
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { StoreFrontData } from "../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { EntryData } from "../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserData } from "../../../../../../org/allbinary/business/user/UserData.js";

    
import { Tokenizer } from "../../../../../../org/allbinary/logic/string/tokens/Tokenizer.js";

    
import { CommonSeps } from "../../../../../../org/allbinary/string/CommonSeps.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../../../org/allbinary/util/BasicArrayListD.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicStoreFrontInterface } from "./BasicStoreFrontInterface.js";

export class BasicStoreFront
            extends Object
         implements BasicStoreFrontInterface {
        

    private name: string

    private userName: string

    private basketName: string

    private homeHostName: string

    private homeHostNamePath: string

    private hostName: string

    private hostNamePath: string

    private testHomeHostName: string

    private testHomeHostNamePath: string

    private testHostName: string

    private testHostNamePath: string

    private imagePath: string

    private staticPath: string

    private categoryPath: string

    private inventoryControl: string

    private subStores: string

    private tagLocation: string

    private packageLocation: string

    private ftp: string

    private ftpPath: string

    private ftpUserName: string

    private ftpPassword: string

    private testFtp: string

    private testFtpPath: string

    private testFtpUserName: string

    private testFtpPassword: string

    private timeCreated: string

    private lastModified: string
public constructor (){

            super();
        }

public constructor (storeHashMap: HashMap){

            super();
        var storeHashMap = storeHashMap

    var storeFrontData: StoreFrontData = StoreFrontData.getInstance()!;
;
    
this.name=  as StringstoreHashMap!.get(storeFrontData!.NAME);;
    
this.userName=  as StringstoreHashMap!.get(UserData.USERNAME);;
    
this.basketName=  as StringstoreHashMap!.get(storeFrontData!.NAME);;
    
this.homeHostName=  as StringstoreHashMap!.get(storeFrontData!.HOMEHOSTNAME);;
    
this.homeHostNamePath=  as StringstoreHashMap!.get(storeFrontData!.HOMEHOSTNAMEPATH);;
    
this.hostName=  as StringstoreHashMap!.get(storeFrontData!.HOSTNAME);;
    
this.hostNamePath=  as StringstoreHashMap!.get(storeFrontData!.HOSTNAMEPATH);;
    
this.testHomeHostName=  as StringstoreHashMap!.get(storeFrontData!.TESTHOMEHOSTNAME);;
    
this.testHomeHostNamePath=  as StringstoreHashMap!.get(storeFrontData!.TESTHOMEHOSTNAMEPATH);;
    
this.testHostName=  as StringstoreHashMap!.get(storeFrontData!.TESTHOSTNAME);;
    
this.testHostNamePath=  as StringstoreHashMap!.get(storeFrontData!.TESTHOSTNAMEPATH);;
    
this.imagePath=  as StringstoreHashMap!.get(storeFrontData!.IMAGEPATH);;
    
this.staticPath=  as StringstoreHashMap!.get(storeFrontData!.STATICPATH);;
    
this.categoryPath=  as StringstoreHashMap!.get(storeFrontData!.CATEGORYPATH);;
    
this.inventoryControl=  as StringstoreHashMap!.get(storeFrontData!.INVENTORYCONTROL);;
    
this.subStores=  as StringstoreHashMap!.get(storeFrontData!.SUBSTORES);;
    
this.tagLocation=  as StringstoreHashMap!.get(storeFrontData!.TAGLOCATION);;
    
this.packageLocation=  as StringstoreHashMap!.get(storeFrontData!.PACKAGELOCATION);;
    
this.ftp=  as StringstoreHashMap!.get(storeFrontData!.FTP);;
    
this.ftpPath=  as StringstoreHashMap!.get(storeFrontData!.FTPPATH);;
    
this.ftpUserName=  as StringstoreHashMap!.get(storeFrontData!.FTPUSERNAME);;
    
this.ftpPassword=  as StringstoreHashMap!.get(storeFrontData!.FTPPASSWORD);;
    
this.testFtp=  as StringstoreHashMap!.get(storeFrontData!.TESTFTP);;
    
this.testFtpPath=  as StringstoreHashMap!.get(storeFrontData!.TESTFTPPATH);;
    
this.testFtpUserName=  as StringstoreHashMap!.get(storeFrontData!.TESTFTPUSERNAME);;
    
this.testFtpPassword=  as StringstoreHashMap!.get(storeFrontData!.TESTFTPPASSWORD);;
    
this.timeCreated=  as StringstoreHashMap!.get(EntryData.getInstance()!.TIMECREATED);;
    
this.lastModified=  as StringstoreHashMap!.get(EntryData.getInstance()!.LASTMODIFIED);;
    
}


    public getTestHtmlPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return org.allbinary.globals.URLGLOBALS.getTestHtmlPath() +this.getCurrentHostNamePath();
    
}


    public getCurrentHostName(): string{

    var location: string = 
                null
            ;
;
    

                        if(org.allbinary.globals.URLGLOBALS.isTestingMode())
                        
                                    {
                                    location= this.getTestHostName();
    

                                    }
                                
                        else {
                            location= this.getHostName();
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return location;
    
}


    public getCurrentHostNamePath(): string{

    var location: string = 
                null
            ;
;
    

                        if(org.allbinary.globals.URLGLOBALS.isTestingMode())
                        
                                    {
                                    location= this.getTestHostNamePath();
    

                                    }
                                
                        else {
                            location= this.getHostNamePath();
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return location;
    
}


    public getCurrentHomeHostName(): string{

    var location: string = 
                null
            ;
;
    

                        if(org.allbinary.globals.URLGLOBALS.isTestingMode())
                        
                                    {
                                    location= this.getTestHomeHostName();
    

                                    }
                                
                        else {
                            location= this.getHomeHostName();
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return location;
    
}


    public getCurrentHomeHostNamePath(): string{

    var location: string = 
                null
            ;
;
    

                        if(org.allbinary.globals.URLGLOBALS.isTestingMode())
                        
                                    {
                                    location= this.getTestHomeHostNamePath();
    

                                    }
                                
                        else {
                            location= this.getHomeHostNamePath();
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return location;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userName;
    
}


    public getBasketName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basketName;
    
}


    public getHomeHostName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.homeHostName;
    
}


    public getHomeHostNamePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.homeHostNamePath;
    
}


    public getHostName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hostName;
    
}


    public getHostNamePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hostNamePath;
    
}


    public getTestHomeHostName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testHomeHostName;
    
}


    public getTestHomeHostNamePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testHomeHostNamePath;
    
}


    public getTestHostName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testHostName;
    
}


    public getTestHostNamePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testHostNamePath;
    
}


    public getStaticPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.staticPath;
    
}


    public getCategoryPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryPath;
    
}


    public getInventoryControl(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.inventoryControl;
    
}


                //@Throws(Error::class)
            
    public getSubStores(): BasicArrayList{

        try {
            
    var tokenizer: Tokenizer = new Tokenizer(CommonSeps.getInstance()!.SEMICOLON);
;
    

    var subStoreVector: BasicArrayList = tokenizer.getTokens(this.subStores, new BasicArrayListD())!;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return subStoreVector;
    

                //: 
} catch(e) 
            {



                            throw e;
                    
}

}


    public getTagLocation(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tagLocation;
    
}


    public getPackageLocation(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.packageLocation;
    
}


    public getFtp(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ftp;
    
}


    public getFtpUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ftpUserName;
    
}


    public getFtpPassword(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ftpPassword;
    
}


    public getTestFtp(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testFtp;
    
}


    public getTestFtpUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testFtpUserName;
    
}


    public getTestFtpPassword(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testFtpPassword;
    
}


    public getFtpPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ftpPath;
    
}


    public getTestFtpPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.testFtpPath;
    
}


    public getTimeCreated(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.timeCreated;
    
}


    public getLastModified(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.lastModified;
    
}


}
                
            

