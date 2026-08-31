
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
        



import { AdvertisementImageInterface } from '../../../../org/allbinary/business/advertisement/image/AdvertisementImageInterface.js';
      //not GWT import const AdvertisementImageInterface = globalThis.org.allbinary.business.advertisement.image.AdvertisementImageInterface;

      
import { AdvertisementProductInterface } from '../../../../org/allbinary/business/advertisement/product/AdvertisementProductInterface.js';
      //not GWT import const AdvertisementProductInterface = globalThis.org.allbinary.business.advertisement.product.AdvertisementProductInterface;

      
import { AdvertisementThumbnailInterface } from '../../../../org/allbinary/business/advertisement/thumbnail/AdvertisementThumbnailInterface.js';
      //not GWT import const AdvertisementThumbnailInterface = globalThis.org.allbinary.business.advertisement.thumbnail.AdvertisementThumbnailInterface;

      
import { Money } from '../../../../org/allbinary/business/user/commerce/money/Money.js';
      //not GWT import const Money = globalThis.org.allbinary.business.user.commerce.money.Money;

      
import { DisplayInBrowserContraintsInterface } from '../../../../org/allbinary/logic/control/contraints/display/browser/DisplayInBrowserContraintsInterface.js';
      //not GWT import const DisplayInBrowserContraintsInterface = globalThis.org.allbinary.logic.control.contraints.display.browser.DisplayInBrowserContraintsInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface AdvertisementInterface {
        

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



