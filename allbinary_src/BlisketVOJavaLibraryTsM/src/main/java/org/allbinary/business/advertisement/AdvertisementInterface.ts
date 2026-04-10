
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
        



import { AdvertisementImageInterface } from "../../../../org/allbinary/business/advertisement/image/AdvertisementImageInterface.js";

    
import { AdvertisementProductInterface } from "../../../../org/allbinary/business/advertisement/product/AdvertisementProductInterface.js";

    
import { AdvertisementThumbnailInterface } from "../../../../org/allbinary/business/advertisement/thumbnail/AdvertisementThumbnailInterface.js";

    
import { Money } from "../../../../org/allbinary/business/user/commerce/money/Money.js";

    
import { DisplayInBrowserContraintsInterface } from "../../../../org/allbinary/logic/control/contraints/display/browser/DisplayInBrowserContraintsInterface.js";

    

interface AdvertisementInterface {
        

    getArtist(): string

    getArtistLink(): string

    getTitle(): string

    getDateAdded(): string

    getDirectory(): string

    getFramedLink(): string

    getListPrice(): Money

    getOurPrice(): Money

    getRank(): number

    getImage(): AdvertisementImageInterface

    getProduct(): AdvertisementProductInterface

    getThumbnail(): AdvertisementThumbnailInterface

    getDisplayInBrowserContraintsInterface(): DisplayInBrowserContraintsInterface

    setArtist(artist: string)

    setArtistLink(artistLink: string)

    setTitle(title: string)

    setDateAdded(dateAdded: string)

    setDirectory(directory: string)

    setFramedLink(framedLink: string)

    setRank(rank: number)

    setImage(AdvertisementImageInterface: AdvertisementImageInterface)

    setProduct(AdvertisementProductInterface: AdvertisementProductInterface)

    setThumbnail(AdvertisementThumbnailInterface: AdvertisementThumbnailInterface)

}
                
            

