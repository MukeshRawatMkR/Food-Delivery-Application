import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const resList = [
  {
    id: "273752",
    name: "Brahmins Tiffin Centre",
    cloudinaryImageId: "qmwj1vbbjljfp2saegsk",
    locality: "New Thipasandra",
    areaName: "Indiranagar",
    costForTwo: "₹150 for two",
    cuisines: ["South Indian", "Chinese"],
    avgRating: 4.5,
    veg: true,
    parentId: "20078",
    avgRatingString: "4.5",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 19,
      lastMileTravel: 2.1,
      serviceability: "SERVICEABLE",
      slaString: "15-20 mins",
      lastMileTravelString: "2.1 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-13 11:59:00", opened: true },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: { header: "30% OFF", subHeader: "UPTO ₹75" },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "682268",
    name: "The Filter Coffee",
    cloudinaryImageId: "e707e3eb3c241c42d7bce2b6314a8ddf",
    locality: "Indiranagar",
    areaName: "Indiranagar",
    costForTwo: "₹250 for two",
    cuisines: ["South Indian", "Beverages", "Desserts"],
    avgRating: 4.7,
    parentId: "21001",
    avgRatingString: "4.7",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 29,
      lastMileTravel: 1.6,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "1.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-13 22:00:00", opened: true },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: { rating: "4.2", ratingCount: "1K+" },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "34301",
    name: "Sri Udupi Park (100ft Road)",
    cloudinaryImageId: "jxp8y1chnqljwqylpkov",
    locality: "Indiranagar",
    areaName: "Indiranagar",
    costForTwo: "₹100 for two",
    cuisines: ["South Indian", "North Indian", "Chaat", "Beverages", "Chinese"],
    avgRating: 4.5,
    parentId: "194697",
    avgRatingString: "4.5",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 21,
      lastMileTravel: 0.7,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "0.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-13 23:00:00", opened: true },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: { rating: "4.1", ratingCount: "10K+" },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "709119",
    name: "Irani Std. Tea",
    cloudinaryImageId: "1e756ee8d230b65d570f7e8e70f7062c",
    locality: "6th Main Rd",
    areaName: "Indiranagar",
    costForTwo: "₹200 for two",
    cuisines: ["Beverages", "Snacks", "Fast Food"],
    avgRating: 4.1,
    parentId: "374583",
    avgRatingString: "4.1",
    totalRatingsString: "500+",
    sla: {
      deliveryTime: 24,
      lastMileTravel: 0.9,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "0.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-20 00:00:00", opened: true },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
    },
    aggregatedDiscountInfoV3: {
      header: "₹70 OFF",
      subHeader: "ABOVE ₹179",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "879612",
    name: "The Breakfast Nook",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/25/7446c4c6-d0e4-4436-a757-3cb700b81c24_879612.jpg",
    locality: "New Akash Nagar",
    areaName: "Indiranagar",
    costForTwo: "₹300 for two",
    cuisines: ["American", "Beverages", "Salads"],
    avgRating: 4.5,
    parentId: "257216",
    avgRatingString: "4.5",
    totalRatingsString: "10+",
    sla: {
      deliveryTime: 23,
      lastMileTravel: 0.6,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "0.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-13 23:00:00", opened: true },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
    },
    aggregatedDiscountInfoV3: { header: "60% OFF", subHeader: "UPTO ₹120" },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "58197",
    name: "Shanti Sagar",
    cloudinaryImageId: "ddlewhiegjaigcxnp5tr",
    locality: "Ulsoor",
    areaName: "Central Bangalore",
    costForTwo: "₹300 for two",
    cuisines: ["South Indian", "North Indian", "Chinese"],
    avgRating: 4.5,
    parentId: "20012",
    avgRatingString: "4.5",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 36,
      lastMileTravel: 3.8,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "3.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-13 22:00:00", opened: true },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: { rating: "3.9", ratingCount: "10K+" },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "902048",
    name: "The Veg & Veg",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/25/3c99f9ea-7208-4f7f-9c7f-aff51ec8e4d2_902048.jpg",
    locality: "Hal 2nd stage",
    areaName: "Indiranagar",
    costForTwo: "₹300 for two",
    cuisines: ["South Indian", "North Indian"],
    avgRating: 4.7,
    veg: true,
    parentId: "524398",
    avgRatingString: "4.7",
    totalRatingsString: "100+",
    sla: {
      deliveryTime: 22,
      lastMileTravel: 1.6,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "1.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-13 23:59:00", opened: true },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "562630",
    name: "Temperature",
    cloudinaryImageId: "yz7ffjxfwmgwgukp4w9w",
    locality: "HAL 3rd Stage",
    areaName: "Indiranagar",
    costForTwo: "₹400 for two",
    cuisines: ["Beverages", "American", "Snacks", "Ice Cream"],
    avgRating: 4.2,
    parentId: "203067",
    avgRatingString: "4.2",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 1.8,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "1.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-08-20 00:00:00", opened: true },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
    },
    aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹99" },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
];
 

const AppLayout = () => {
  return (
    <div id="app">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //to render
/*
const jsxHeading=<h1>Hello this is heading using JSX</h1>;
console.log(jsxHeading);//object

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);//to render
*/
