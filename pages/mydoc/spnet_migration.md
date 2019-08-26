---
title: Spread.NET 마이그레이션 | Migration
keywords: Spread 마이그레이션, Spread migration
last_updated: Aug 26, 2019
summary: "Spread.NET의 DLL을 평가판에서 정식버전으로, 또는 구버전에서 최신버전으로 마이그리이션 하는 방법을 설명합니다."
sidebar: mydoc_sidebar
permalink: spnet_migration.html
folder: mydoc
---

## 마이그레이션

체험판(trial version)을 이용한 개발, License 구입, 개발환경에서의 Spread제품 활성화 등의 과정에서나 배포된 클라이언트 혹은 호스트에서 여전히 체험판 알림창이 나타나는 문제를 해결하기 위한 단계별 솔루션을 제공합니다.

제품을 활성화(실행)시킨 후 기존 프로젝트를 업그레이드해야 합니다. 업그레이드 단계는 다음과 같습니다.

Spread 프로젝트에서 사용된 Spread 관련 DLL 참조를 삭제합니다.

![](https://www.grapecity.co.kr/images/metalsmith/training/spread/winform/migration/tc_winforms1-5-1.png)

Spread 프로젝트에서 사용된 licenses.licx 파일을 삭제합니다.

![](https://www.grapecity.co.kr/images/metalsmith/training/spread/winform/migration/tc_winforms1-5-2.png)

프로젝트에서 새로운 창을 추가합니다(Licenses.licx를 자동생성하고 Spread 관련 DLL 참조를 자동 추가하기 위함)

![](https://www.grapecity.co.kr/images/metalsmith/training/spread/winform/migration/tc_winforms1-5-3.png)

VS 툴박스에서 Spread 컨트롤을 창에 추가합니다. 이 때, Spread 관련 DLL 참조가 자동으로 추가되며 licenses.licx 파일이 자동생성됩니다(DLL과 License의 Spread 버전번호가 정확한지 확인하십시오).

![](https://www.grapecity.co.kr/images/metalsmith/training/spread/winform/migration/tc_winforms1-5-4.png)

솔루션 내 모든 프로젝트에 대해 위의 1-4 단계를 진행하십시오.  
전체 솔루션을 Rebuild하십시오.  
재배포
