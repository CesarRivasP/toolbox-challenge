# Toolbox Challenge App

[![Test App](https://github.com/CesarRivasP/toolbox-challenge/actions/workflows/test-app.yml/badge.svg?branch=main)](https://github.com/CesarRivasP/toolbox-challenge/actions/workflows/test-app.yml)

## Commands to run the app with Expo
### Install Modules

    npm install
    
   * If you are going to run the app on IOS, you must execute:

    npx pod-install

### Run the Bare app

    npx react-native run-ios
  or

    npx react-native run-android

### Requirements and flow developed
In summary, the requirements for this challenge consist of the development of an app that can consume two End-points, where the first one is in charge of emulating the behavior of the Login when returning the access token, and a dynamic header so that the second endpoint based on these data can obtain the list of carrousels. And with that data from that list, render two carousels with different visual characteristics, and that these can be built dynamically based on N number of elements. And finally, in the elements that contain a URL for video, to be able to navigate to another screen to view said video.
Here are screenshots of the app:

| <img src="https://user-images.githubusercontent.com/31055680/156285583-e71979b3-1259-41c3-ab8e-4668ceb669dc.png" width="300"/>     | <img src="https://user-images.githubusercontent.com/31055680/156285737-8af963f7-f47b-4d1c-a59e-da9388b654c1.png" width="300"/>     |  <img src="https://user-images.githubusercontent.com/31055680/156285822-747cd8ed-9dc6-481f-a7bf-7d2417adec48.png" width="300"/>     |

### Additional details
* The architecture patterns used for the development of the app were based on an organization based on feats, where the main ones are the screens, and the components that are only used in them. The pattern based on components was used for the organization of the same that are re-used throughout the app and are not linked to a single section.
* The [Context Api](https://es.reactjs.org/docs/context.html) was used to access elements that do not usually change much, but need to be accessed from other components of the app tree.
* Validations were added that allow showing modals in cases of error responses from the api.
* An error handler was implemented when the response from the api is a status E403/ UnAuthorized, which allows the user to be removed from the app to login to enter again.
* Custom hooks were implemented to save/reuse code when calling an api, handling forms, screen modal states, among others.
* Automated CI/CD actions were implemented through  [Github Actions](https://github.com/features/actions) to test, and validate the code with [Eslint](https://eslint.org/) when merging to the Main branch. Updates to the current [Expo testing channel](https://expo.dev/@cesarrivas10/ToolboxChallenge?release-channel=toolbox-challenge) were also automated.
* Unit Tests were implemented to validate that the behavior of the components is as expected.

| <img src="https://user-images.githubusercontent.com/31055680/156288264-82907683-c840-41c2-8d3f-9a4eaa08ae1e.png" width="500"/>     |

**Note:**
The implementation of the methods was missing so that when the session is closed by an UnAuthorized, the user's email is autocompleted in the email field. The method exists, but was not implemented for reasons of time.
