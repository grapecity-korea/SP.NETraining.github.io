---
title: Spread.Net 배포 | Deploy
keywords: Spread 배포, Spread deploy, Spread distribution
last_updated: Aug 26, 2019
summary: "Spread.NET을 배포하는 방법에 대한 설명입니다."
sidebar: mydoc_sidebar
permalink: spnet_deploy.html
folder: mydoc
---

## 서버 요구 사항

Microsoft 인터넷 정보 서버(IIS)에 배포해야 합니다.

## 시스템 요구 사항

사용자의 시스템은 아래 요구사항을 충족해야 합니다.  
운영 시스템  
아래 항목 중 한 개의 항목에 해당되어야 합니다.

- Microsoft Windows 98
- Microsoft Windows 98 SE
- Microsoft Windows ME
- Microsoft Windows 2000 (SP3)
- Microsoft Windows Server 2003
- Microsoft Windows Server 2008
- Microsoft Windows Server 2012 R2
- Microsoft Windows XP (SP2)
- Microsoft Windows Vista
- Microsoft Windows 7
- Microsoft Windows 8
- Microsoft Windows 8.1
- Microsoft Windows 10

**소프트웨어**
마이크로소프트 .NET Framework가 설치되어야 합니다.

## 배포되어야 하는 파일

사용자의 시스템에 아래와 같은 파일들이 함께 배포되어야 합니다.  
아래 dll 파일들이 Spread Window Forms와 함께 구성이 되어야 합니다.

- FarPoint.CalcEngine.dll
- FarPoint.Excel.dll
- FarPoint.PluginCalendar.WinForms.dll
- FarPoint.Win.dll
- FarPoint.Win.Spread.dll
- FarPoint.Localization.dll

응용 프로그램에 대한 설치는 Spread Windows Forms 디렉터리에서 응용프로그램의 실행파일 디렉토리로 dll파일을 복사해야 합니다. 또는 글로벌 어셈블리 캐시(GAC)안에 dll파일을 설치해야 합니다.

만약 사용자가 시스템에 .NET Framework를 설치하지 않았다면, .NET Framework 배포 패키지가 있어야 합니다. 이 패키지에 관한 자세한 정보는 .NET Framework 파일에 있습니다.

만약 프로젝트에 ink notation 기능을 사용한다면 FarPoint.Win.Ink.dll을 함께 배포해야 합니다. 이 DLL은 어플리케이션의 실행파일에 설치되어야 합니다. 또는 글로벌 어셈블리 캐시(GAC)에 설치되어야 합니다. 마이크로소프트 테블릿 PC SDK의 런타임 컴포넌트가 요구됩니다. FarPoint.Win.Ink 어셈블리는 현재 마이크로소프트 테블릿 PC SDK의 버전 1.7과 함께 빌드가 됩니다.

만약 프로젝트에 텍스트 렌더러 기능을 사용했다면 FarPoint.Win.TextRenderer.dll도 함께 배포를 해야 합니다. 이 DLL은 어플리케이션의 실행파일에 설치 되어 져야 합니다. 이 기능은 오직 .NET 2.0 Framework에서 가능합니다.

만약 프로젝트에 PDF로 내보내는 기능을 사용한다면 FarPoint.PDF.dll도 함께 배포를 하여야 합니다.

만약 프로젝트에 HTML으로 내보내는 기능을 사용한다면 FarPoint.Win.Spread.Html.dll과 System.Web.dll도 배포를 하여야 합니다.

만약 런타임에 스프레드 디자이너 다이아로그를 사용한다면 FarPoint.Win.Spread.Design.dll도 배포를 하여야 합니다.

만약 Chart컨트롤을 프로젝트에 사용을 하였다면 FarPoint.Win.Chart.dll.도 함께 배포하여야 합니다.

## 웹 페이지에 컨트롤을 호스팅

만약 마이크로소프트 인터넷 익스플로러에 Spread Windows Forms 컨트롤을 호스팅 한다면, 보안 권한 조정을 만드세요.  
IE에서 도구->인터넷 옵션->보안->신뢰할 수 있는 사이트를 선택합니다. 사이트 버튼을 클릭하고 사용자 컨트롤 상주할 웹 사이트 (예, http://localhost) 를 추가합니다.

윈도우에서 시작->설정->제어판을 선택하고 관리 도구를 선택합니다. Microsoft .NET Framework 구성을 선택합니다. .NET Framework 구성 window에서 런타임 보안 정책를 선택하고 영역 보안을 조정을 선택합니다. 영역 조정 보안 마법사에서 첫 번째 스크린, 그 다음 스크린에 응답을 하고 신뢰할 수 있는 사이트를 클릭을 합니다. 해당영역 신뢰할 수 있는 사이트에 표시기를 밀어 넣는다. 다음을 클릭하여 마법사를 완료합니다.

아래 링크를 통해 좀 더 자세한 사항을 확인해보실 수 있습니다.  
[http://sphelp.grapecity.com/WebHelp/SpreadNet9/WF/webframe.html#spwin-redistprod.html](http://sphelp.grapecity.com/WebHelp/SpreadNet9/WF/webframe.html#spwin-redistprod.html)
