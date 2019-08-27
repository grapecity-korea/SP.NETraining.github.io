---
title: Spread.Net Winforms(윈폼) 시작하기
keywords: Spread 배포, Spread deply, Spread distribution
last_updated: Aug 26, 2019
summary: "Winforms 플랫폼에서 Spread.NET을 시작하는 방법을 설명합니다."
sidebar: mydoc_sidebar
permalink: spwin_start.html
folder: mydoc
---

<!-- ## 준비중

해당 페이지는 준비중에 있습니다. -->

## 설치 / 업그레이드 / 라이선스 / 배포

### Spread 제품 설치 방법

1.  아래의 링크를 통해 제품을 다운로드 받거나 또는 구매 시 메일로 전달 받은 링크를 통해 제품을 다운 받습니다.  
    
    다운로드 :[http://www.componentone.co.kr/downloads/default.htm](http://www.componentone.co.kr/downloads/default.htm)
    
    ![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-1.png)
    
2.  제품을 다운 받게 되면 아래와 같은 모양의 설치 파일을 볼 수 있습니다.  
    
    ![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-2.png)
    
3.  해당 설치 파일을 더블 클릭하면 다음과 같이 설치 프로그램이 시작됩니다. 설치를 원하는 제품을 선택한 후 Accept EUAL(사용자 동의)를 클릭하여 체크한 다음 Install을 클릭하여 설치를 시작합니다. 제품만을 설치하고 싶으시다면 Assemblies로 이름이 끝나는 부분에 체크하시면 되고 오프라인 도움말을 설치하고 싶다면 짝을 이루고 있는 Documentation을 클릭하면 됩니다. Documentation을 설치하시게 되면 설치 시간이 다소 늘어 날 수 있으며 오프라인 도움말은 다음의 온라인 링크를 통해서도 보실 수 있기 때문에 필요하지 않으시면 굳이 설치 하지 않으셔도 됩니다.  
    
    도움말 :[http://www.componentone.co.kr/support/default.htm](http://www.componentone.co.kr/support/default.htm)
    
    ![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-3.png)
    
4.  제품이 진한 회색 표시 되어 있는 제품은 심볼은 현재 PC환경 때문에 설치하지 못할경우 생겨나게 됩니다. 예를 들어 VisualStudio의 버전이 해당 제품을 설치하기에 너무 낮거나 또는 Windows의 버전이 해당 제품을 지원하지 않을 경우 발생하게 됩니다. 이에 대한 좀더 자세한 내용은 아래의 링크의 도움말에서 각 제품의 도움말로 들어간 후 Product Requirements를 참고하여 주시기 바랍니다.  
    
    도움말 :[http://www.componentone.co.kr/support/default.htm](http://www.componentone.co.kr/support/default.htm)
    
    ![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-4.png)
    
    ![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-5.png)
    
5.  다음과 같이 설치가 진행 됩니다.  
    
    ![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-6.png)
    
6.  만일 Documentation 설치도 선택 하셨다면 아래와 같이 Documentation 설치 화면이 나오게 됩니다. 먼저 설치 위치를 결정 합니다. 기본 위치에 설치하거나 또는 Browse버튼을 클릭하여 위치를 결정 후 OK를 클릭합니다.  
    
    ![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-7.png)
    
7.  Add 버튼을 누른 후 Update 버튼을 클릭 합니다.  
    
    ![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-8.png)
    
    ![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-9.png)
    
8.  YES를 눌러 설치를 진행 합니다.  
    
    ![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-10.png)
    
9.  설치가 진행 됩니다.
![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-11.png)

10.  아래와 같이 설치 완료후 Exit를 눌러 빠져 나옵니다.
![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-12.png)
    
11.  이렇게 선택한 만큼 도움말 설치를 몇번 반복하면 최종적으로 오프라인 도움말 설치가 완료 됩니다.  
    
    ![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-13.png)
    
12.  도움말 설치 완료 후 이어서 설치가 진행 되면서 아래와 같이 최종적으로 Spread Studio 설치가 완료 됩니다.  
    
    ![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-14.png)
    
13.  설치가 완료 되게 되면 미국 Spread 웹 사이트로 자동으로 이동하게 되는데 여기에서는 회원가입 후 뉴스레터를 받아 보거나 자신의 구매 정보를 관리 할 수 있게 됩니다. 또 영문으로 되어 있지만 유용한 정보도 많이 찾아 볼 수 있으니 한번 둘러 보시면 좋을 것 같습니다.

14.  또한 아래와 같이 GrapeCity License Manager가 자동으로 실행 됩니다. 여기에서 정품 라이선스 인증을 할 수 있습니다. 먼저 Activtaion을 클릭합니다.  
    
    ![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-15.png)
    
15.  Next를 클릭하여 Activation과정을 진행 합니다.  
    
    ![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-16.png)
    
16.  성함 회사명 Email Product Key를 넣고 Next를 눌러 인증을 진행합니다.  
    
    ![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-17.png)
    
17.  다음과 같이 정상적으로 완료가 됩니다.  
    
    ![](https://www.grapecity.co.kr/images/training/spread/tc_winforms1-1-18.png)
    
18.  오프라인 인증이나 좀더 자세한 Activation 방법은 같은 페이지의 Activation/Deactivation 링크를 확인하여 주시기 바랍니다.
