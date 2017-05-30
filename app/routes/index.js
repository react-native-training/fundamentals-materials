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
  ObjectSpread,
  ObjectShorthand,
  ArraySpreadRest,
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
  TextExample,
  TextInputExample,
  ViewExample,
  ScrollViewExample,
  MapListExample,
  FlatListExample,
  SectionListExample,
  CCChallengeOne,
  CCChallengeTwo,
} from './CoreComponents';

// Cross Platform Components
import {
  CrossPlatformComponents,
  ActivityIndicatorExample,
  ButtonExample,
  ImageExample,
  ModalExample,
  PickerExample,
  RefreshControlExample,
  SliderExample,
  StatusBarExample,
  SwitchExample,
  TouchableHighlightExample,

  // Challenges
  CPChallengeOne,
  CPChallengeTwo,
  CPChallengeThree,
} from './CrossPlatformComponents';

// Android Only Components and APIs
import {
  AndroidOnlyComponents,
  TouchableNativeFeedbackExample,
  DatePickerAndroidExample,
  ProgressBarAndroidExample,
  TimePickerAndroidExample,
  ToastAndroidExample,
  ViewPagerAndroidExample,
} from './AndroidOnlyComponents';

// iOS Only Components and APIs
import {
  IOSOnlyComponents,
  DatePickerIOSExample,
  ProgressViewIOSExample,
  SegmentedControlIOSExample,
  TabBarIOSExample,
  IOSChallengeOne,
  ActionSheetIOSExample,
} from './IOSOnlyComponents';

// Cross Platform APIs
import {
  CrossPlatformAPIs,
  AlertExample,
  AppStateExample,
  AsyncStorageExample,
  CameraRollExample,
  DimensionsExample,
  GeolocationExample,
  LinkingExample,
  NetInfoExample,
  PanResponderExample,
  ShareExample,
  CPAPISChallengeOne,
  CPAPISChallengeTwo,
} from './CrossPlatformAPIs';

// Animations
import {
  Animations,
  Timing,
  AnimatedXY,
  Easing,
  Interpolation,
  Parallel,
  Loop,
  CreateAnimatedComponent,
  Transforms,
  Sequence,
  AnimationChallengeOne,
  AnimationChallengeTwo,
  Spring,
  Stagger,
  BlankSlateAnimations,
} from './Animations';

// Styling
import {
  Styling,
  TextStyling,
  ViewStyling,
  ColorsExample,
  MarginVSPadding,
  Position,
  ZIndex,
} from './Styling';

// Flexbox
import {
  Flexbox,
} from './Flexbox';

// Playground
import Playground from '../containers/Playground';

const RouteConfigs = {
  // Home list
  Subjects: { screen: Subjects },

  // ES2015
  ES2015: { screen: ES2015 },
  ArrowFunctions: { screen: ArrowFunctions },
  DefaultArguments: { screen: DefaultArguments },
  ArrayDestructuring: { screen: ArrayDestructuring },
  ObjectDestructuring: { screen: ObjectDestructuring },
  ObjectSpread: { screen: ObjectSpread },
  ObjectShorthand: { screen: ObjectShorthand },
  ArraySpreadRest: { screen: ArraySpreadRest },
  LetConst: { screen: LetConst },
  MultiLineStrings: { screen: MultiLineStrings },
  Promises: { screen: Promises },
  TemplateLiterals: { screen: TemplateLiterals },
  Modules: { screen: Modules },

  // Core Components
  CoreComponents: { screen: CoreComponents },
  TextExample: { screen: TextExample },
  TextInputExample: { screen: TextInputExample },
  ViewExample: { screen: ViewExample },
  ScrollViewExample: { screen: ScrollViewExample },
  MapListExample: { screen: MapListExample },
  FlatListExample: { screen: FlatListExample },
  SectionListExample: { screen: SectionListExample },
  CCChallengeOne: { screen: CCChallengeOne },
  CCChallengeTwo: { screen: CCChallengeTwo },

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
  ButtonExample: { screen: ButtonExample },
  ImageExample: { screen: ImageExample },
  ModalExample: { screen: ModalExample },
  PickerExample: { screen: PickerExample },
  RefreshControlExample: { screen: RefreshControlExample },
  SliderExample: { screen: SliderExample },
  StatusBarExample: { screen: StatusBarExample },
  SwitchExample: { screen: SwitchExample },
  TouchableHighlightExample: { screen: TouchableHighlightExample },
  CPChallengeOne: { screen: CPChallengeOne },
  CPChallengeTwo: { screen: CPChallengeTwo },
  CPChallengeThree: { screen: CPChallengeThree },

  // Android Only Components and APIs
  AndroidOnlyComponents: { screen: AndroidOnlyComponents },
  TouchableNativeFeedbackExample: { screen: TouchableNativeFeedbackExample },
  DatePickerAndroidExample: { screen: DatePickerAndroidExample },
  ProgressBarAndroidExample: { screen: ProgressBarAndroidExample },
  TimePickerAndroidExample: { screen: TimePickerAndroidExample },
  ToastAndroidExample: { screen: ToastAndroidExample },
  ViewPagerAndroidExample: { screen: ViewPagerAndroidExample },

  // iOS Only Components and APIs
  IOSOnlyComponents: { screen: IOSOnlyComponents },
  DatePickerIOSExample: { screen: DatePickerIOSExample },
  ProgressViewIOSExample: { screen: ProgressViewIOSExample },
  SegmentedControlIOSExample: { screen: SegmentedControlIOSExample },
  TabBarIOSExample: { screen: TabBarIOSExample },
  IOSChallengeOne: { screen: IOSChallengeOne },
  ActionSheetIOSExample: { screen: ActionSheetIOSExample },

  // Cross platform APIs
  CrossPlatformAPIs: { screen: CrossPlatformAPIs },
  AlertExample: { screen: AlertExample },
  AppStateExample: { screen: AppStateExample },
  AsyncStorageExample: { screen: AsyncStorageExample },
  CameraRollExample: { screen: CameraRollExample },
  DimensionsExample: { screen: DimensionsExample },
  GeolocationExample: { screen: GeolocationExample },
  LinkingExample: { screen: LinkingExample },
  NetInfoExample: { screen: NetInfoExample },
  PanResponderExample: { screen: PanResponderExample },
  ShareExample: { screen: ShareExample },
  CPAPISChallengeOne: { screen: CPAPISChallengeOne },
  CPAPISChallengeTwo: { screen: CPAPISChallengeTwo },

  // Animations
  Animations: { screen: Animations },
  Timing: { screen: Timing },
  AnimatedXY: { screen: AnimatedXY },
  Easing: { screen: Easing },
  Transforms: { screen: Transforms },
  Interpolation: { screen: Interpolation },
  Parallel: { screen: Parallel },
  Loop: { screen: Loop },
  CreateAnimatedComponent: { screen: CreateAnimatedComponent },
  Sequence: { screen: Sequence },
  AnimationChallengeOne: { screen: AnimationChallengeOne },
  AnimationChallengeTwo: { screen: AnimationChallengeTwo },
  Spring: { screen: Spring },
  Stagger: { screen: Stagger },
  BlankSlateAnimations: { screen: BlankSlateAnimations },

  // Styling
  Styling: { screen: Styling },
  TextStyling: { screen: TextStyling },
  ViewStyling: { screen: ViewStyling },
  ColorsExample: { screen: ColorsExample },
  MarginVSPadding: { screen: MarginVSPadding },
  Position: { screen: Position },
  ZIndex: { screen: ZIndex },

  // Flexbox
  Flexbox: { screen: Flexbox },

  // Playground
  Playground: { screen: Playground },
};

const StackNavigatorConfig = {
};

const Routes = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default Routes;
