<div id="top"></div>

<!-- PROJECT SHIELDS -->
<div align='center'>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=blue"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">원티드 집꾸미기 과제</h3>

  <p align="center">
    집꾸미기 집소개 기능에 포함되어 있는 사진과 가구 정보를 표현하는 프로젝트
    <br />
    <br />
    <a href="https://zipccumigi.netlify.app/"><strong>배포 링크</strong></a>
  </p>
</div>

<p align="right">(<a href="#top">back to top</a>)</p>

<hr>
<br>

<!-- 구현한 기능 -->

## 🎯 구현한 기능

- [x] Tool tip 기능
  - [x] 해당 가구 위치에 따른 돋보기 아이콘 표시
  - [x] 돋보기 클릭시 가구 정보 표시, 닫기 아이콘으로 변경
  - [x] 닫기 버튼을 클릭시 가구 정보 표시, 닫기 아이콘 사라짐.
  - [x] 가구 정보와 닫기 아이콘은 하나만 표시(새로운 돋보기 아이콘을 누르면 기존의 돋보기, 가구 정보 사라짐 )
  - [x] 입점 여부에 따라 가구 정보 다르게 표시
- [x] 하단 상품목록 구현
  - [x] 선택된 가구 표시 기능 (가구는 하나만 선택 가능, 새로운 가구 선택시 기존의 가구 사라짐)
  - [x] 할인율 뱃지 표시

<p align="right">(<a href="#top">back to top</a>)</p>

<hr>
<br>

<!-- 설치 및 실행 -->

## 📦 설치 및 실행

#### Build

```
npm run build
```

#### 실행

```
npm run start
```

<p align="right">(<a href="#top">back to top</a>)</p>

<hr>
<br>

<!-- 프로젝트 구조 -->

## 🗂 디렉토리 구조

```bash
.
├── App.js
├── components
│   ├── ProductImageCard
│   ├── ProductInfoCard
│   ├── RoomImage
│   └── ToolTip
├── styles	# 초기 css 설정
└── utils	# 상수, 함수
    ├── constants.js
    └── getPosition.js
```

<p align="right">(<a href="#top">back to top</a>)</p>
