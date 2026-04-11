
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

    

export class BasicStoreFront
            extends Object
        
                , BasicStoreFrontInterface {
        

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

public constructor (storeHashMap: HashMap<any, any>){

            super();
            var storeHashMap = storeHashMap

    var storeFrontData: StoreFrontData = StoreFrontData.getInstance()!;
        
        
;
    
this.name= storeHashMap!.get(storeFrontData!.NAME);

                         as String;
    
this.userName= storeHashMap!.get(UserData.USERNAME);

                         as String;
    
this.basketName= storeHashMap!.get(storeFrontData!.NAME);

                         as String;
    
this.homeHostName= storeHashMap!.get(storeFrontData!.HOMEHOSTNAME);

                         as String;
    
this.homeHostNamePath= storeHashMap!.get(storeFrontData!.HOMEHOSTNAMEPATH);

                         as String;
    
this.hostName= storeHashMap!.get(storeFrontData!.HOSTNAME);

                         as String;
    
this.hostNamePath= storeHashMap!.get(storeFrontData!.HOSTNAMEPATH);

                         as String;
    
this.testHomeHostName= storeHashMap!.get(storeFrontData!.TESTHOMEHOSTNAME);

                         as String;
    
this.testHomeHostNamePath= storeHashMap!.get(storeFrontData!.TESTHOMEHOSTNAMEPATH);

                         as String;
    
this.testHostName= storeHashMap!.get(storeFrontData!.TESTHOSTNAME);

                         as String;
    
this.testHostNamePath= storeHashMap!.get(storeFrontData!.TESTHOSTNAMEPATH);

                         as String;
    
this.imagePath= storeHashMap!.get(storeFrontData!.IMAGEPATH);

                         as String;
    
this.staticPath= storeHashMap!.get(storeFrontData!.STATICPATH);

                         as String;
    
this.categoryPath= storeHashMap!.get(storeFrontData!.CATEGORYPATH);

                         as String;
    
this.inventoryControl= storeHashMap!.get(storeFrontData!.INVENTORYCONTROL);

                         as String;
    
this.subStores= storeHashMap!.get(storeFrontData!.SUBSTORES);

                         as String;
    
this.tagLocation= storeHashMap!.get(storeFrontData!.TAGLOCATION);

                         as String;
    
this.packageLocation= storeHashMap!.get(storeFrontData!.PACKAGELOCATION);

                         as String;
    
this.ftp= storeHashMap!.get(storeFrontData!.FTP);

                         as String;
    
this.ftpPath= storeHashMap!.get(storeFrontData!.FTPPATH);

                         as String;
    
this.ftpUserName= storeHashMap!.get(storeFrontData!.FTPUSERNAME);

                         as String;
    
this.ftpPassword= storeHashMap!.get(storeFrontData!.FTPPASSWORD);

                         as String;
    
this.testFtp= storeHashMap!.get(storeFrontData!.TESTFTP);

                         as String;
    
this.testFtpPath= storeHashMap!.get(storeFrontData!.TESTFTPPATH);

                         as String;
    
this.testFtpUserName= storeHashMap!.get(storeFrontData!.TESTFTPUSERNAME);

                         as String;
    
this.testFtpPassword= storeHashMap!.get(storeFrontData!.TESTFTPPASSWORD);

                         as String;
    
this.timeCreated= storeHashMap!.get(EntryData.getInstance()!.TIMECREATED);

                         as String;
    
this.lastModified= storeHashMap!.get(EntryData.getInstance()!.LASTMODIFIED);

                         as String;
    
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
    

    var subStoreVector: BasicArrayList = tokenizer.getTokens(this.subStores, BasicArrayList())!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return subStoreVector;
    

                //: 
} catch(e) 
            {



                            throw e
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
                
            

