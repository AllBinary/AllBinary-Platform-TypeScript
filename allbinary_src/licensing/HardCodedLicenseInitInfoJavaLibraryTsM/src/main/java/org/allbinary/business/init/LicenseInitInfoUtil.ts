
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
        




export class LicenseInitInfoUtil
            extends Object
         {
        

    private static readonly instance: LicenseInitInfoUtil = new LicenseInitInfoUtil();
        
        

    public static getInstance(): LicenseInitInfoUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly INITFILENAME: string = "licenseinitdata.dat";
        
        

    public readonly ABOUT: string = "about";
        
        

    public readonly PRIVACY_POLICY: string = "privacy_policy";
        
        

    private readonly OFFICIAL_ALLBINARY_SERVICES_SERVER: string = "https://services.allbinary.com/LicServ/serverssl.php";
        
        
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setFilePath(filePath: string){
var filePath = filePath
}

private constructor (){

            super();
            }


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public write(initData: LicenseInitInfo){
var initData = initData
}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public read(): LicenseInitInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return readAgain(0);
    
}


                @Throws(Exception::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public readAgain(initializeCounter: number): LicenseInitInfo{
var initializeCounter = initializeCounter

    var licenseInitInfo: LicenseInitInfo = new LicenseInitInfo();
        
        

clearServers()
addServer(OFFICIAL_ALLBINARY_SERVICES_SERVER)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return licenseInitInfo;
    
}


}
                
            

