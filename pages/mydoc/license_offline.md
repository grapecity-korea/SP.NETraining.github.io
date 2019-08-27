---
title: 오프라인 라이선스 인증 및 해제
tags: [라이선스, license, activation]
keywords: online active, spread.net license, spread.net 라이선스, 라이선스 인증
last_updated: Aug 08, 2019
summary: "Spread.NET의 라이선스를 인터넷이 연결되어 있는 환경에서 활성화 하는 방법입니다."
sidebar: mydoc_sidebar
permalink: license_offline.html
folder: mydoc
---

## 오프라인 상태 인증 방법

오프라인 인증의 경우 인터넷이 연결된 다른 기기가 필요합니다.

C:\Program Files (x86)\Common Files\GrapeCity\Components로 들어가서 GrapeCity.LicenseManager.exe를 실행을 하면 아래와 같은 화면이 나옵니다. “Activate”를 클릭합니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-offline-1.png)

“Next” 버튼을 클릭합니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-offline-2.png)

구매 시 받은 Product Key를 정확히 입력한 후 “Next” 버튼을 클릭합니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-offline-3.png)

“Use a browser on another machine with internet connectivity”를 선택하고 “Next” 버튼을 누릅니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-offline-4.png)

화면에 나온 Product Key와 Authentication Number를 기록합니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-offline-5.png)

인터넷이 연결된 다른 기기에서 [http://sas.grapecity.com/activation](http://sas.grapecity.com/activation) 사이트에 접속하여 기록해 두었던 Product Key와 Authentication Number를 입력한 후 “Send Request” 버튼을 클릭합니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-offline-6.png)

아래와 같이 새로 발급된 오프라인용 License Key를 기록합니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-offline-7.png)

License Manager 인증 창으로 돌아와 License Key를 입력해줍니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-offline-8.png)

정상적으로 인증이 되었다면 아래와 같은 화면이 나타납니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-offline-9.png)

## 오프라인 상태 인증 해제 방법

유무선 인터넷 연결을 해제하시고 아래 방법대로 오프라인 인증을 하셔야 합니다.

C:\Program Files (x86)\Common Files\GrapeCity\Components로 들어가서 GrapeCity.LicenseManager.exe를 실행하면 아래와 같은 화면이 나옵니다. “Deactivate”를 클릭합니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-offlineDeact-1.png)

“Next” 버튼을 클릭합니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-offlineDeact-2.png)

“Next” 버튼을 클릭합니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-offlineDeact-3.png)

“Use a browser on another machine with Internet connectivity”를 선택하고 “Next” 버튼을 클릭합니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-offlineDeact-4.png)

화면에 나온 Product Key와 Deactivation Key를 입력합니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-offlineDeact-5.png)

인터넷이 연결된 다른 기기에서 [http://sas.grapecity.com/deactivation](http://sas.grapecity.com/deactivation) 사이트에 접속하여 기록해 두었던 Product Key와 Deactivation Key를 입력한 후 “Send Request” 버튼을 클릭합니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-offlineDeact-6.png)

정상적으로 인증이 해제되었다면 아래와 같은 화면이 나타납니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-offlineDeact-7.png)