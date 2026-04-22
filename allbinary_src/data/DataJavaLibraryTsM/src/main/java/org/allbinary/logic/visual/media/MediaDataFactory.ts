
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
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MediaDataFactory
            extends Object
         {
        

    private static readonly instance: MediaDataFactory = new MediaDataFactory();
        
        

    public static getInstance(): MediaDataFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly AVI: MediaData = new MediaData("avi");
        
        

    public readonly BMP: MediaData = new MediaData("bmp");
        
        

    public readonly CEL: MediaData = new MediaData("cel");
        
        

    public readonly FITS: MediaData = new MediaData("fits");
        
        

    public readonly FLI: MediaData = new MediaData("fli");
        
        

    public readonly GBR: MediaData = new MediaData("gbr");
        
        

    public readonly GIF: MediaData = new MediaData("gif");
        
        

    public readonly GIH: MediaData = new MediaData("gih");
        
        

    public readonly JPG: MediaData = new MediaData("jpg");
        
        

    public readonly PIX: MediaData = new MediaData("pix");
        
        

    public readonly PNG: MediaData = new MediaData("png");
        
        

    public readonly PNM: MediaData = new MediaData("pnm");
        
        

    public readonly PSD: MediaData = new MediaData("psd");
        
        

    public readonly PSP: MediaData = new MediaData("psp");
        
        

    public readonly PS: MediaData = new MediaData("ps");
        
        

    public readonly SGI: MediaData = new MediaData("SGI");
        
        

    public readonly SWF: MediaData = new MediaData("swf");
        
        

    public readonly TGA: MediaData = new MediaData("tga");
        
        

    public readonly TIFF: MediaData = new MediaData("tiff");
        
        

    public readonly WMF: MediaData = new MediaData("wmf");
        
        

}
                
            

