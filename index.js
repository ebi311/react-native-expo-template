import { KeepAwake, registerRootComponent } from 'expo';
import container from './src/components/NavContainer';

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(container);
