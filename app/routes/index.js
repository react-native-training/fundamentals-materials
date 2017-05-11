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
  ObjectShorthand,
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
  ButtonExample,
  TextExample,
  TextInputExample,
  ViewExample,
  ScrollViewExample,
  MapListExample,
  FlatListExample,
  SectionListExample,
  ChallengeOne,
  ChallengeTwo,
} from './CoreComponents';

// Cross Platform Components
import {
  CrossPlatformComponents,
  ActivityIndicatorExample,
} from './CrossPlatformComponents';

const RouteConfigs = {
  // Home list
  Subjects: { screen: Subjects },

  // ES2015
  ES2015: { screen: ES2015 },
  ArrowFunctions: { screen: ArrowFunctions },
  DefaultArguments: { screen: DefaultArguments },
  ArrayDestructuring: { screen: ArrayDestructuring },
  ObjectDestructuring: { screen: ObjectDestructuring },
  ObjectShorthand: { screen: ObjectShorthand },
  ArraySpreadRest: { screen: ArraySpreadRest },
  ObjectSpreadRest: { screen: ObjectSpreadRest },
  LetConst: { screen: LetConst },
  MultiLineStrings: { screen: MultiLineStrings },
  Promises: { screen: Promises },
  TemplateLiterals: { screen: TemplateLiterals },
  Modules: { screen: Modules },

  // Core Components
  CoreComponents: { screen: CoreComponents },
  ButtonExample: { screen: ButtonExample },
  TextExample: { screen: TextExample },
  TextInputExample: { screen: TextInputExample },
  ViewExample: { screen: ViewExample },
  ScrollViewExample: { screen: ScrollViewExample },
  MapListExample: { screen: MapListExample },
  FlatListExample: { screen: FlatListExample },
  SectionListExample: { screen: SectionListExample },
  ChallengeOne: { screen: ChallengeOne },
  ChallengeTwo: { screen: ChallengeTwo },

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

  // Cross Platform Components
  CrossPlatformComponents: { screen: CrossPlatformComponents },
  ActivityIndicatorExample: { screen: ActivityIndicatorExample },
};

const StackNavigatorConfig = {
};

const Routes = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default Routes;
