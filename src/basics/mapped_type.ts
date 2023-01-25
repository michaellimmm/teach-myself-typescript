type OnlyBoolsAndString = {
  [key: string]: boolean | string;
};

const conforms: OnlyBoolsAndString = {
  del: true,
  rodney: false,
};

type OptionsFlags<T> = {
  [Property in keyof T]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
/**
 * Type FeatureOptions = {
 *    darkMode: boolean;
 *    newUserProfile: boolean;
 * }
 */

function activeFeature(): FeatureOptions {
  return {
    darkMode: false,
    newUserProfile: false,
  };
}
