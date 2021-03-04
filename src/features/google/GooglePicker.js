import { useEffect } from "react";
import loadScript from "load-script";

const GOOGLE_SDK_URL = "https://apis.google.com/js/api.js";
let scriptLoadingStarted = false;

const GooglePicker = ({
  clientId,
  children,
  developerKey,
  scope = ["https://www.googleapis.com/auth/drive.readonly"],
  viewId = "DOCS",
  origin,
  onChange = () => {},
  onAuthenticate = () => {},
  onAuthFailed = () => {},
  createPicker,
  multiselect = false,
  navHidden = false,
  disabled = false,
  authImmediate = false,
  mimeTypes,
  query,
}) => {
  const isGoogleReady = () => {
    return !!window.gapi;
  };

  const isGoogleAuthReady = () => {
    return !!window.gapi.auth;
  };

  const isGooglePickerReady = () => {
    return !!window.google.picker;
  };

  const onApiLoad = () => {
    window.gapi.load("auth");
    window.gapi.load("picker");
  };

  const doAuth = (callback) => {
    window.gapi.auth.authorize(
      {
        client_id: clientId,
        scope: scope,
        immediate: authImmediate,
      },
      callback
    );
  };

  const onChoose = () => {
    if (
      !isGoogleReady() ||
      !isGoogleAuthReady() ||
      !isGooglePickerReady() ||
      disabled
    ) {
      return null;
    }

    const token = window.gapi.auth.getToken();
    const oauthToken = token && token.access_token;

    if (oauthToken) {
      createGooglePicker(oauthToken);
    } else {
      doAuth((response) => {
        if (response.access_token) {
          createGooglePicker(response.access_token);
        } else {
          onAuthFailed(response);
        }
      });
    }
  };

  useEffect(() => {
    if (isGoogleReady()) {
      // google api is already exists, init immediately
      onApiLoad();
    } else if (!scriptLoadingStarted) {
      // load google api and the init
      scriptLoadingStarted = true;
      loadScript(GOOGLE_SDK_URL, onApiLoad);
    } else {
      // is loading
    }
  }, []);

  const createGooglePicker = (oauthToken) => {
    onAuthenticate(oauthToken);

    if (createPicker) {
      return createPicker(window.google, oauthToken);
    }

    const googleViewId = window.google.picker.ViewId[viewId];
    const view = new window.google.picker.View(googleViewId);

    if (mimeTypes) {
      view.setMimeTypes(mimeTypes.join(","));
    }
    if (query) {
      view.setQuery(query);
    }

    if (!view) {
      throw new Error("Can't find view by viewId");
    }

    const picker = new window.google.picker.PickerBuilder()
      .addView(view)
      .setOAuthToken(oauthToken)
      .setDeveloperKey(developerKey)
      .setCallback(onChange);

    if (origin) {
      picker.setOrigin(origin);
    }

    if (navHidden) {
      picker.enableFeature(window.google.picker.Feature.NAV_HIDDEN);
    }

    if (multiselect) {
      picker.enableFeature(window.google.picker.Feature.MULTISELECT_ENABLED);
    }

    picker.build().setVisible(true);
  };

  return (
    <div onClick={onChoose}>
      {children ? children : <button>Open google chooser</button>}
    </div>
  );
};

export default GooglePicker;
