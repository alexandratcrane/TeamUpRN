import Realm from "realm";

let app;

// Returns the shared instance of the Realm app.
export function getRealmApp() {
  if (app === undefined) {
    const appID = "teamupreact-native-hnchc";
    const appConfig = {
      id: appID,
      timeout: 100000,
      app: {
        name: "default",
        version: '0'
      }
    };
    app = new Realm.App(appConfig);
  }
  return app;
}
