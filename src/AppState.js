import React, { useEffect, useState, useContext } from "react";
import {observable, configure, action} from "mobx"
import { ApiCall } from "./SharedFunctions/ApiCall";



//central store for app state
export default class AppState {
  @observable Images =  [{ original: "" }];
  @observable  test = "test123";
  @observable FeaturedProjects = [
    {
      CompDirection: "left",
      ProjectName: "Social Media",
      ProjectShortDesc:
        "React js web app that allows users to add posts, follow people and chat with them",
      ProjectInfoUrl: "SocialMedia",
      ProjectImageURL:
        "https://shellstorage123.blob.core.windows.net/portfoliopics/socialmedia/SM (4).JPEG",
      ProjectGithubLink: "https://github.com/dim505/SocialMedia",
      ProjectLiveLink: "https://socialmediafrontend.azurewebsites.net/"
    },

    {
      CompDirection: "Right",
      ProjectName: "AMS (Landlord Side)",
      ProjectShortDesc:
        "React js web app that allows a landlord to manage his apartments and keep track of his tenants",
      ProjectInfoUrl: "AMS_LL",
      ProjectImageURL:
        "https://shellstorage123.blob.core.windows.net/reactams/LL (3).JPEG",
      ProjectGithubLink: "https://github.com/dim505/ApartmentMangementSystem",
      ProjectLiveLink: "https://amsfrontend.azurewebsites.net/"
    },

    {
      CompDirection: "left",
      ProjectName: "AMS (Tenant Side)",
      ProjectShortDesc:
        "React js web app that allows a tenant to pay rent and see news related to his apartment",
      ProjectInfoUrl: `AMS_TS`,
      ProjectImageURL:
        "https://shellstorage123.blob.core.windows.net/reactams/TS (3).JPEG",
      ProjectGithubLink: "https://github.com/dim505/ApartmentMangementSystem",
      ProjectLiveLink: "https://amstenantfrontend.azurewebsites.net/"
    }
  ]
  ModTest =  (Page) => { this.test = Page }
  GetImages = (Page) => {
       ApiCall(
      "Get",
      `${process.env.REACT_APP_BackEndUrl}/api/PortfolioV2/GetPageInfo/${Page}`
    ).then((results) => {
      this.Images = results
    })
  }  
}


 