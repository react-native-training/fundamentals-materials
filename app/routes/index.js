import {
  StackNavigator,
} from 'react-navigation';

// Main list of subjects
import Subjects from '../Subjects';

// JavaScript / ES2015 Overview
import {
  ES2015,
  ArrowFunctions,
  DefaultArguments,
  ArrayDestructuring,
  ObjectDestructuring,
  ArraySpreadRest,
  ObjectSpreadRest,
  LetConst,
  MultiLineStrings,
  Promises,
  TemplateLiterals,
  Modules,
} from './ES2015';

// Fundamentals
import {
  Fundamentals,
  PropsExample,
  StateExample,
  ConditionalRenderExample,
  ForceUpdateExample,
  ComponentWillMountExample,
  ComponentDidMountExample,
  ComponentWillReceivePropsExample,
  ShouldComponentUpdateExample,
  ComponentWillUpdateExample,
  ComponentDidUpdateExample,
} from './Fundamentals';

// Core Components
import {
  CoreComponents,
  ButtonComponentExample,
  TextComponentExample,
  TextInputComponentExample,
} from './CoreComponents';


const RouteConfigs = {
  // Home list
  Subjects: { screen: Subjects },

  // ES2015
  ES2015: { screen: ES2015 },
  ArrowFunctions: { screen: ArrowFunctions },
  DefaultArguments: { screen: DefaultArguments },
  ArrayDestructuring: { screen: ArrayDestructuring },
  ObjectDestructuring: { screen: ObjectDestructuring },
  ArraySpreadRest: { screen: ArraySpreadRest },
  ObjectSpreadRest: { screen: ObjectSpreadRest },
  LetConst: { screen: LetConst },
  MultiLineStrings: { screen: MultiLineStrings },
  Promises: { screen: Promises },
  TemplateLiterals: { screen: TemplateLiterals },
  Modules: { screen: Modules },

  // Core Components
  CoreComponents: { screen: CoreComponents },
  ButtonComponentExample: { screen: ButtonComponentExample },
  TextComponentExample: { screen: TextComponentExample },
  TextInputComponentExample: { screen: TextInputComponentExample },

  // Fundamentals
  Fundamentals: { screen: Fundamentals },
  PropsExample: { screen: PropsExample },
  StateExample: { screen: StateExample },
  ConditionalRenderExample: { screen: ConditionalRenderExample },
  ForceUpdateExample: { screen: ForceUpdateExample },
  ComponentWillMountExample: { screen: ComponentWillMountExample },
  ComponentDidMountExample: { screen: ComponentDidMountExample },
  ComponentWillReceivePropsExample: { screen: ComponentWillReceivePropsExample },
  ShouldComponentUpdateExample: { screen: ShouldComponentUpdateExample },
  ComponentWillUpdateExample: { screen: ComponentWillUpdateExample },
  ComponentDidUpdateExample: { screen: ComponentDidUpdateExample },
};

const StackNavigatorConfig = {
};

const Routes = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default Routes;
