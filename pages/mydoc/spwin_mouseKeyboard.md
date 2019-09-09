---
title: Spread.NET 마우스 키보드 제어
tags: [mouse, keyboard, 마우스, 키보드, 제어, 엔터키, change 이벤트, 넓이, 높이, tab키, 리스트]
keywords: spread.net 마우스 키보드 제어, 스프레드 닷넷
last_updated: Aug 08, 2019
summary: "Spread.NET 마우스 키보드 제어"
sidebar: mydoc_sidebar
permalink: spwin_mouseKeyboard.html
folder: mydoc
---

## 엔터키를 사용하여 버튼셀을 클릭하는 방법

[엔터키를 사용하여 버튼셀을 클릭하는 방법 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/SpreadButClickAction.zip)
<br /><br />

Spread WinForms컨트롤은 CheckBoxCellType, ButtonCellType 등과 같은 그래픽 셀 셀 형식을 포함하는 다양한 셀 유형을 제공합니다. 그리고 해당 이벤트를 캡처 해서 셀 변경 기능을 제공합니다.

일반적으로 다음과 같이 사용합니다. 우리는 일반적으로 Enter 키를 사용하여 버튼 클릭 이벤트를 실행 하기도 합니다. 이 블로그에서는 Enter 이벤트를 사용하여 ButtonCellType 클릭 이벤트를 실행하는 방법을 설명합니다.

<br />
이를 위해 스프레드 바로 가기키 매핑이 필요합니다. 예를 들면 아래와 같습니다.

```csharp
InputMap im = fpSpread1.GetInputMap(InputMapMode.WhenFocused);
ActionMap am = fpSpread1.GetActionMap();
im.Put(new Keystroke(Keys.Enter, Keys.None), "ClickButtonAction");
im.Put("ClickButtonAction", new ClickButtonAction());
```

SpreadAction을 클릭 이벤트에서 사용하는 것은 아래와 같이 하면 됩니다.

```csharp
private class ClickButtonAction : FarPoint.Win.Spread.Action
{
    public override void PerformAction(object source)
    {
        if (source is SpreadView)
        {
            SpreadView spreadView = (SpreadView)source;
            Form1.fpSpread1_ButtonClicked(spreadView, null);
        }
    }
}
```

마지막으로 Spread 버튼 클릭 이벤트를 추가해 줍니다.

```csharp
public static void fpSpread1_ButtonClicked(object sender, EditorNotifyEventArgs e)
{
      MessageBox.Show("Button Click test!");
}
```

간단한 데모를 참고해 주시기 바랍니다.

[엔터키를 사용하여 버튼셀을 클릭하는 방법 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/SpreadButClickAction.zip)

## Change 이벤트 감지 바로 가기 키

[Change 이벤트 감지 바로 가기 키 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/10207.zip)
<br /><br />

Spread 컨트롤은 데이터 표시, 입력 및 확인에 많이 쓰입니다.

데이터 입력 시 바로 가기 키를 사용하면 작업 효율을 크게 높일 수 있습니다. Spread는 셀의 조작을 캡처할 수 있는 풍부한 이벤트 기능을 제공하며 그 중에 Change는 셀 데이터의 변화를 감지할 수 있습니다.

하지만 해당 이벤트는 Ctrl+V를 감지 할 수 없어 Change이벤트에 이를 확인하는 코드를 추가해야 합니다. 본문에서는 Change 이벤트 캡처를 키보드로 조작하는 법을 소개하겠습니다.

**1. Spread PreviewKeyDown과 Change 이벤트 추가:**

```csharp
    private void Form1_Load(object sender, EventArgs e)
    {
          this.fpSpread1.Change += new int.Win.Spread.ChangeEventHandler(fpSpread1_Change);
          this.fpSpread1.PreviewKeyDown += new ewKeyDownEventHandler(fpSpread1_PreviewKeyDown);
```

**2. PreviewKeyDown 이벤트에서 Ctrl+V키 감지**

```csharp
    if (e.Control&&e.KeyCode== Keys.V)
    {

    }
```

**3. Change 이벤트 호출:**

```csharp
    int row=this.fpSpread1.ActiveSheet.ActiveRowIndex;
    int col = this.fpSpread1.ActiveSheet.ActiveColumnIndex; FarPoint.Win.Spread.ChangeEventArgs param=new ChangeEventArgs(null,row,col);
    fpSpread1_Change(null, param);
```

아래의 샘플을 참고해 주시기 바랍니다.

[Change 이벤트 감지 바로 가기 키 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/10207.zip)

## 일반셀에서 마우스를 이용하여 넓이나 높이 조절하기

[일반셀에서 마우스를 이용하여 넓이나 높이 조절 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/7664_Width.zip)

기본적으로 Spread는 열과 행 헤더에서 마우스를 사용하면 행의 넓이와 열의 높이를 조절할 수 있습니다.

그러나 데이터 영역에서 선을 마우스로 끌면 열 너비와 행 높이가 변경되지 않습니다. 이 기능을 추가하는 방법을 설명 드리겠습니다.

Spread MouseDown, MouseMove 및 MouseUp 이벤트를 사용하며 코드는 다음과 같습니다.

```csharp
public partial class Form1 : Form
{
    public Form1()
    {
        InitializeComponent();
    }


    int start = 0;
    float width = 0;
    bool mousedown = false;


    private void Form1_Load(object sender, EventArgs e)
    {
        fpSpread1.ActiveSheet.ColumnHeader.Visible = false;
        fpSpread1.MouseDown += new MouseEventHandler(fpSpread1_MouseDown);
        fpSpread1.MouseUp += new MouseEventHandler(fpSpread1_MouseUp);
        fpSpread1.MouseMove += new MouseEventHandler(fpSpread1_MouseMove);
    }

    private void fpSpread1_MouseMove(object sender, MouseEventArgs e)
    {
        if (mousedown && e.Button == System.Windows.Forms.MouseButtons.Left)
        {
            fpSpread1.ActiveSheet.ActiveColumn.Width = width + (e.X - start);
        }
    }

    void fpSpread1_MouseDown(object sender, MouseEventArgs e)
    {
        if (e.Button == System.Windows.Forms.MouseButtons.Left)
        {
            fpSpread1.Cursor = Cursors.VSplit;
            start = e.X;
            mousedown = true;
            width = fpSpread1.ActiveSheet.ActiveColumn.Width;
        }
    }

    void fpSpread1_MouseUp(object sender, MouseEventArgs e)
    {
        if (mousedown && e.Button == System.Windows.Forms.MouseButtons.Left)
        {
            start = 0;
            width = 0;
            mousedown = false;
        }
    }
}
```

아래의 샘플을 참고해 주시기 바랍니다.

[일반셀에서 마우스를 이용하여 넓이나 높이 조절 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/7664_Width.zip)

## Tab키로 컨트롤 이동하기

[Tab키로 컨트롤 이동하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Tab키로 컨트롤 이동하기.zip)
<br /><br />

Spread에 포커스가 가게 되면 Tab를 눌렀을 때 현재 포커스가 있는 셀의 바로 오른쪽 셀로 포커스가 이동하게 됩니다.

이런 경우 일반 컨트롤로 포커스를 이동하게 하려면 마우스로 다른 컨트롤을 클릭하는 방법밖에는 없습니다.

<br />
다음의 예제는 Tab를 눌렀을 때 오른쪽 셀이 아닌 다른 컨트롤로 포커스를 옮기게 하는 방법입니다.

```csharp
FarPoint.Win.Spread.SheetView shv = fpSpread1.ActiveSheet;
FarPoint.Win.Spread.InputMap im = new FarPoint.Win.Spread.InputMap();
FarPoint.Win.Spread.Keystroke k = new FarPoint.Win.Spread.Keystroke(Keys.Tab, Keys.None);
im = fpSpread1.GetInputMap(FarPoint.Win.Spread.InputMapMode.WhenAncestorOfFocused);
im.Put(k, FarPoint.Win.Spread.SpreadActions.None);
im = fpSpread1.GetInputMap(FarPoint.Win.Spread.InputMapMode.WhenFocused);
im.Put(k, FarPoint.Win.Spread.SpreadActions.None);
```

이렇게 하면 Tab키 클릭시 스프레드의 현재 포커스 되어 있는 셀로 포커스가 갔다가 다른 일반 컨트롤로 포커스가 옮겨가고 미리 정해진 순서에 따라서 포커스를 쭉 이동한 뒤에 다시 스프레드 셀로 포커스가 옮겨 갑니다.

간단한 데모를 참고해 주시기 바랍니다.

[Tab키로 컨트롤 이동하기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/Tab키로 컨트롤 이동하기.zip)

## 셀안에 리스트 만들기

[셀안에 리스트 만들기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/셀안에 리스트 만들기.zip)

<br /><br />

셀 안에 글머리 기반의 리스트를 만들고 싶은 경우 아래와 같은 방법으로 구현 할 수 있습니다.

**1. 사용자 지정 액션 만들기**

먼저 Spread Action 부분을 가져와서 현재 포커스가 되는 셀에 •을 추가하고 사이 공간을 주는 것으로 오버라이드 한다.

```csharp
    public class myAction : FarPoint.Win.Spread.Action
    {
      public override void PerformAction(object sender)
      {
         FarPoint.Win.Spread.SpreadView ss = (FarPoint.Win.Spread.SpreadView)sender;
         FarPoint.Win.Spread.CellType.GeneralEditor editor =
    rPoint.Win.Spread.CellType.GeneralEditor)ss.EditingControl;
         string text = editor.Text;
         text += "\r\n \u2022 ";
         ss.Sheets[0].SetValue(ss.Sheets[0].ActiveRowIndex,
    Sheets[0].ActiveColumnIndex, text);
          ss.EditMode = true;
          editor = (FarPoint.Win.Spread.CellType.GeneralEditor)ss.EditingControl;
          editor.SelectionStart = editor.Text.Length;
          editor.Text = text;
       }
     }
```

**2. 사용자 지정 액션을 스프레드에 적용하기**

사용자 지정액션을 스프레드의 Alt+Enter 키코드가 발생했을 때에 발생하도록 적용합니다.

```csharp
    FarPoint.Win.Spread.InputMap ancestorOfFocusedMap =
    Spread1.GetInputMap(FarPoint.Win.Spread.InputMapMode.WhenAncestorOfFocused);
    FarPoint.Win.Spread.ActionMap am = fpSpread1.GetActionMap();
    am.Put("AltEnter", new myAction());
    ancestorOfFocusedMap.Put(new FarPoint.Win.Spread.Keystroke(Keys.Enter, Keys.None),
    rPoint.Win.Spread.SpreadActions.MoveToNextRow );
    ancestorOfFocusedMap.Put(new FarPoint.Win.Spread.Keystroke(Keys.Enter, Keys.Alt)
    AltEnter");
    fpSpread1.SetInputMap(FarPoint.Win.Spread.InputMapMode.WhenAncestorOfFocused,
     ancestorOfFocusedMap);
```

![](https://www.grapecity.co.kr/images/training/spread/tc_winforms11-5-1.png)

간단한 샘플 프로젝트를 참고하여 주시기 바랍니다.

[셀안에 리스트 만들기 - 샘플 다운로드](https://www.grapecity.co.kr/files/SpreadNET/Samples/WinformsSample/셀안에 리스트 만들기.zip)
