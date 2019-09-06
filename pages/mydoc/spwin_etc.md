---
title: Spread.NET 기타 기능
tags: [툴팁, tooltip, memorystream, 저장]
keywords: spread.net tooltip, 스프레드 닷넷 툴팁, spread.net 저장
last_updated: Aug 08, 2019
summary: "Spread.NET 기타 기능"
sidebar: mydoc_sidebar
permalink: spwin_etc.html
folder: mydoc
---

## Spread 저장을 위한 MemoryStream 사용하기

[Spread 저장을 위한 MemoryStream 사용하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_SaveStream.zip)

스프레드는 파일로 저장을 위해 스트림으로 직렬화와 및 비 직렬화 할 수 있습니다.

여기에서는 그 방법을 소개 합니다.

```csharp
MemoryStream stream = new MemoryStream();
public Form1()
{
    InitializeComponent();
}
private void loadToolStripMenuItem_Click(object sender, EventArgs e)
{

    //if there is no line this code will throw an exception: Root element is missing.
    stream.Seek(0, SeekOrigin.Begin);
    fpSpread1.Open(stream);
}

private void saveToolStripMenuItem_Click(object sender, EventArgs e)
{
    fpSpread1.Save(stream, false);
}
```

그냥 fpSpread1.Open(stream); 을 써서 열면 “Root element is missing.”에러가 발생하게 됩니다.  
꼭 stream.Seek(0, SeekOrigin.Begin);을 추가해 주셔야 합니다.

간단한 샘플을 참고해 주시기 바랍니다.

[Spread 저장을 위한 MemoryStream 사용하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Spread_SaveStream.zip)

## 스프레드 툴팁 기능

[스프레드 툴팁 기능 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/스프레드 툴팁 기능.zip)
<br /><br />
여기서는 스프레드에 어떻게 툴팁을 추가하는지에 대하여 설명 합니다. 아래의 3개 속성에 대하여 세팅을 해야 합니다.

<br />
**TextTipAppearance:** 툴팁에 외형적인 부분에 대하여 세팅합니다.  
**TextTipDelay:** 툴팁이 발생한 후 얼마뒤에 사라질지 밀리초 단위로 세팅합니다.  
**TextTipPolicy:** 툴팁을 보여줄 때 줄 수 있는 효과에 대하여 세팅합니다.

<br />
예를 들면 아래와 같이 세팅 합니다.

```csharp
private void Form1_Load(object sender, EventArgs e)
{
    DataTable dt = new DataTable();
    dt.Columns.Add("품목");
    dt.Columns.Add("이름");
    dt.Columns.Add("가격");


    dt.Rows.Add("AC23658901", "과일 샐러드", "98");
    dt.Rows.Add("AC23658902", "인도 치킨 카레", "26");
    dt.Rows.Add("AC23658903", "까망베르 치즈피자", "158");

    FarPoint.Win.Spread.TipAppearance app = new FarPoint.Win.Spread.TipAppearance();
    app.BackColor = Color.Yellow;
    app.Font = new Font("맑은 고딕", 12);
    app.ForeColor = Color.Red;

    fpSpread1.DataSource = dt;
    fpSpread1.TextTipPolicy = FarPoint.Win.Spread.TextTipPolicy.Floating;
    fpSpread1.TextTipAppearance = app;

    fpSpread1.TextTipDelay = 1000;
    fpSpread1.TextTipPolicy = FarPoint.Win.Spread.TextTipPolicy.Floating;
}
```

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms12-2-1.png)

간단한 샘플을 참고해 주시기 바랍니다.

[스프레드 툴팁 기능 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/스프레드 툴팁 기능.zip)
