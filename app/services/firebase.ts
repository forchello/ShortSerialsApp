import remoteConfig from '@react-native-firebase/remote-config';

export function setRemoteConfigDefaults() {
  if (__DEV__) {
    remoteConfig().setConfigSettings({
      minimumFetchIntervalMillis: 0,
    });
  }
  return remoteConfig().setDefaults({});
}

export function getRemoteConfig(valueToFetch: Array<string>) {
  return new Promise((resolve, reject) => {
    setRemoteConfigDefaults().finally(() => {
      try {
        remoteConfig()
          .fetch(0)
          .then(() => {
            remoteConfig()
              .fetchAndActivate()
              .then(() => {
                let values: Record<string, string | boolean | number> = {};

                valueToFetch.forEach(key => {
                  const value = remoteConfig().getValue(key).asString();
                  try {
                    values[key] = JSON.parse(value);
                  } catch {
                    values[key] = value;
                  }
                });

                resolve(values);
              })
              .catch(error => reject(error));
          })
          .catch(() => reject());
      } catch (error) {
        reject();
      }
    });
  });
}
