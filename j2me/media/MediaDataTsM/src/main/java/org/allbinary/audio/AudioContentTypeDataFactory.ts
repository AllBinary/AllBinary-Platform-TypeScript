
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
        
export class AudioContentTypeDataFactory
            extends Object
         {
        

    private static readonly instance: AudioContentTypeDataFactory = new AudioContentTypeDataFactory();
        
        

    public static getInstance(): AudioContentTypeDataFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly MIME_AUDIO_TONE: AudioContentTypeData = new AudioContentTypeData("audio/x-tone-seq");
        
        

    public readonly MIME_AUDIO_AMR: AudioContentTypeData = new AudioContentTypeData("audio/amr");
        
        

    public readonly MIME_AUDIO_AMR_WB: AudioContentTypeData = new AudioContentTypeData("audio/amr-wb");
        
        

    public readonly MIME_AUDIO_WAV: AudioContentTypeData = new AudioContentTypeData("audio/x-wav");
        
        

    public readonly MIME_AUDIO_MIDI: AudioContentTypeData = new AudioContentTypeData("audio/midi");
        
        

    public readonly MIME_AUDIO_SP_MIDI: AudioContentTypeData = new AudioContentTypeData("audio/sp-midi");
        
        
private constructor (){

            super();
            }


}
                
            

