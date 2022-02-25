$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/case4.feature");
formatter.feature({
  "name": "Registration page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Case4"
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
  "name": "the user clicks on Cerez button",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trendyol.step_definitions.RegistrationField.theUserClicksOnCerezButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Giris Yap button",
  "keyword": "When "
});
formatter.match({
  "location": "com.trendyol.step_definitions.RegistrationField.the_user_clicks_on_Giris_Yap_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add to cart one or more products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Case4"
    }
  ]
});
formatter.step({
  "name": "the user enter valid email",
  "keyword": "And "
});
formatter.match({
  "location": "com.trendyol.step_definitions.AddToChart.theUserEnterValidEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter valid sifre",
  "keyword": "And "
});
formatter.match({
  "location": "com.trendyol.step_definitions.AddToChart.theUserEnterValidSifre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user cliks on girisyapgirisyap button",
  "keyword": "And "
});
formatter.match({
  "location": "com.trendyol.step_definitions.AddToChart.theUserCliksOnGirisyapgirisyapButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Nike button",
  "keyword": "And "
});
formatter.match({
  "location": "com.trendyol.step_definitions.AddToChart.theUserClicksOnNikeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Corap button",
  "keyword": "And "
});
formatter.match({
  "location": "com.trendyol.step_definitions.AddToChart.theUserClicksOnCorapButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cdiv class\u003d\"image-overlay-body\"\u003e\u003c/div\u003e is not clickable at point (992, 472). Other element would receive the click: \u003cdiv class\u003d\"overlay\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d98.0.4758.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-OA3JOIP\u0027, ip: \u0027192.168.1.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\SEMA\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59871}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4cbf39c3ec6c79b8519535fe9dabf9ff\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.trendyol.step_definitions.AddToChart.theUserClicksOnCorapButton(AddToChart.java:38)\r\n\tat ✽.the user clicks on Corap button(file:///C:/Users/SEMA/IdeaProjects/TrendyolTask/src/test/resources/features/case4.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user clicks on SepeteEkle button",
  "keyword": "And "
});
formatter.match({
  "location": "com.trendyol.step_definitions.AddToChart.theUserClicksOnSepeteEkleButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks on Corapiki button",
  "keyword": "And "
});
formatter.match({
  "location": "com.trendyol.step_definitions.AddToChart.theUserClicksOnCorapikiButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks on SepeteEkleiki button",
  "keyword": "And "
});
formatter.match({
  "location": "com.trendyol.step_definitions.AddToChart.theUserClicksOnSepeteEkleikiButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks on Sepetim button",
  "keyword": "And "
});
formatter.match({
  "location": "com.trendyol.step_definitions.AddToChart.theUserClicksOnSepetimButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should be able to display SepetimCorap Button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trendyol.step_definitions.AddToChart.theUserShouldBeAbleToDisplaySepetimCorapButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should be able to display SepetimCorapiki Button",
  "keyword": "And "
});
formatter.match({
  "location": "com.trendyol.step_definitions.AddToChart.theUserShouldBeAbleToDisplaySepetimCorapikiButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});