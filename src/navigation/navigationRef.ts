import {createNavigationContainerRef} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

const navigate = (name: string, params?: any) => {
  navigationRef.current?.navigate(name, params);
};

export {navigationRef, navigate};
