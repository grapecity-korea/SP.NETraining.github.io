---
title: Spread.NET 스타일
tags: [spread.net,스프레드 닷넷, 스타일, 배경색]
keywords: spread.net 스타일, 스프레드 닷넷
last_updated: Aug 08, 2019
summary: "Spread.NET 스타일"
sidebar: mydoc_sidebar
permalink: spwin_style.html
folder: mydoc
---


## 스타일

### 좌측 상단 모서리 셀의 배경색 설정하기

하단의 코드로 좌측 상단 모서리 셀의 배경색을 설정할 수 있습니다. 해당 셀을 클릭하면 전체 폼이 선택됩니다.

  

[Visual Basic .NET Code]

```
FpSpread1.ActiveSheet.SheetCornerStyle.BackColor = Color.Blue
```

  

[C# Code]

```
fpSpread1.ActiveSheet.SheetCornerStyle.BackColor = Color.Blue;
```

결과:

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms2-1-1.png)