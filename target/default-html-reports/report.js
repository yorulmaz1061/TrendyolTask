$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/registration.feature");
formatter.feature({
  "name": "Registration page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Task"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Giris Yap button",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trendyol.step_definitions.RegistrationField.the_user_clicks_on_Giris_Yap_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[.\u003d\u0027Giriş Yap\u0027]\"}\n  (Session info: chrome\u003d98.0.4758.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-OA3JOIP\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\SEMA\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:54179}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f9eabc16d7eb7aa2cba05e24d882e448\n*** Element info: {Using\u003dxpath, value\u003d//p[.\u003d\u0027Giriş Yap\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.trendyol.step_definitions.RegistrationField.the_user_clicks_on_Giris_Yap_button(RegistrationField.java:14)\r\n\tat ✽.the user clicks on Giris Yap button(file:///C:/Users/SEMA/IdeaProjects/TrendyolTask/src/test/resources/features/registration.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user clicks on Uye Ol button",
  "keyword": "When "
});
formatter.match({
  "location": "com.trendyol.step_definitions.RegistrationField.the_user_clicks_on_Uye_Ol_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verification of Eposta input box",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Task"
    }
  ]
});
formatter.step({
  "name": "the user should be able to display Eposta input box",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trendyol.step_definitions.RegistrationField.the_user_should_be_able_to_display_Eposta_input_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Giris Yap button",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trendyol.step_definitions.RegistrationField.the_user_clicks_on_Giris_Yap_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[.\u003d\u0027Giriş Yap\u0027]\"}\n  (Session info: chrome\u003d98.0.4758.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-OA3JOIP\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\SEMA\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:54205}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f1581e2e1b42945bd2aec444b89c7208\n*** Element info: {Using\u003dxpath, value\u003d//p[.\u003d\u0027Giriş Yap\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.trendyol.step_definitions.RegistrationField.the_user_clicks_on_Giris_Yap_button(RegistrationField.java:14)\r\n\tat ✽.the user clicks on Giris Yap button(file:///C:/Users/SEMA/IdeaProjects/TrendyolTask/src/test/resources/features/registration.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user clicks on Uye Ol button",
  "keyword": "When "
});
formatter.match({
  "location": "com.trendyol.step_definitions.RegistrationField.the_user_clicks_on_Uye_Ol_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verification of Sifre input box",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Task"
    }
  ]
});
formatter.step({
  "name": "the user should be able to display Sifre input box",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trendyol.step_definitions.RegistrationField.the_user_should_be_able_to_display_Sifre_input_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Giris Yap button",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trendyol.step_definitions.RegistrationField.the_user_clicks_on_Giris_Yap_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//p[.\u003d\u0027Giriş Yap\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-OA3JOIP\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.trendyol.step_definitions.RegistrationField.the_user_clicks_on_Giris_Yap_button(RegistrationField.java:14)\r\n\tat ✽.the user clicks on Giris Yap button(file:///C:/Users/SEMA/IdeaProjects/TrendyolTask/src/test/resources/features/registration.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user clicks on Uye Ol button",
  "keyword": "When "
});
formatter.match({
  "location": "com.trendyol.step_definitions.RegistrationField.the_user_clicks_on_Uye_Ol_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verification of Giris Yap button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Task"
    }
  ]
});
formatter.step({
  "name": "the user should be able to display Giris Yap button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trendyol.step_definitions.RegistrationField.the_user_should_be_able_to_display_Giris_Yap_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d98.0.4758.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-OA3JOIP\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\SEMA\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:54243}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 49e0471b9bdf34f8f0c4aea0c402c9a4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.trendyol.step_definitions.Hooks.tearDown(Hooks.java:24)\r\n",
  "status": "failed"
});
});