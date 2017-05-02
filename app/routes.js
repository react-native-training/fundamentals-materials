import {
  StackNavigator,
} from 'react-navigation';

import Subjects from './Subjects';
import ES2015 from './containers/Es2015/Es2015';
import CoreComponents from './containers/CoreComponents/CoreComponents';
import ButtonComponent from './containers/CoreComponents/ButtonComponent';
// Fundmentals
import Fundamentals from './containers/Fundamentals/Fundamentals';
import PropsExample from './containers/Fundamentals/PropsExample';

const RouteConfigs = {
  // Home list
  Subjects: { screen: Subjects },

  // ES2015
  ES2015: { screen: ES2015 },

  // Core Components
  CoreComponents: { screen: CoreComponents },
  ButtonComponent: { screen: ButtonComponent },

  // Fundamentals
  Fundamentals: { screen: Fundamentals },
  PropsExample: { screen: PropsExample },
};

const StackNavigatorConfig = {
};

const Routes = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default Routes;
