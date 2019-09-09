---
title: Spread.NET 마이그레이션 | Migration
keywords: Spread 마이그레이션, Spread migration
last_updated: Aug 26, 2019
summary: "Spread.NET의 DLL을 평가판에서 정식버전으로, 또는 구버전에서 최신버전으로 마이그레이션 하는 방법을 설명합니다."
sidebar: mydoc_sidebar
permalink: spnet_migration.html
folder: mydoc
---

## 마이그레이션

이전 버전에서 개발된 프로젝트를 최신 버전으로 마이그레이션하는 방법  
** 마이그레이션 전에 반드시 백업을 해주시기 바랍니다.

프로젝트에 참조되어 있는 Spread.NET 관련 dll들을 삭제합니다.
  (FarPoint 혹은 GrapeCity로 시작)

![](https://www.grapecity.co.kr/images/training/spread/tc-migration-1.png)

라이선스 파일도 삭제합니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-migration-2.png)

프로젝트에 새 폼을 추가합니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-migration-3.png)

새 폼에 최신 버전의 Spread.NET을 올리시면 자동으로 라이선스 파일과 dll들이 추가됩니다.

![](https://www.grapecity.co.kr/images/training/spread/tc-migration-4.png)

솔루션 내의 모든 프로젝트를 이와 같이 진행해주세요.