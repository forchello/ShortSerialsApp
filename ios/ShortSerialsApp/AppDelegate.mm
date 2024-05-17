#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import "RNBootSplash.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"ShortSerialsApp";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  
  BOOL success = [super application:application didFinishLaunchingWithOptions:launchOptions];
  if (success) {
    // Modify as needed to match the main color of your splash.

    self.window.rootViewController.view.backgroundColor = [UIColor colorWithRed:15.0/255.0 green:15.0/255.0 blue:15.0/255.0 alpha:1.0];
  }
  return success;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

- (UIView *)createRootViewWithBridge:(RCTBridge *)bridge
                          moduleName:(NSString *)moduleName
                           initProps:(NSDictionary *)initProps {
  UIView *rootView = [super createRootViewWithBridge:bridge moduleName:moduleName initProps:initProps];
  [RNBootSplash initWithStoryboard:@"BootSplash" rootView:rootView]; // splashscreen init
  return rootView;
}

@end
