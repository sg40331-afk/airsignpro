# 에어사인 프로 — 에어간판 장비·부자재 전문몰 랜딩페이지

20년 현장 경험을 바탕으로 한 **에어간판 장비·부자재 전문몰**의 랜딩페이지입니다.
출력·발색·봉제·조립·설치·A/S 전 공정 노하우를 바탕으로 장비·원단·부자재·창업/투자 솔루션을 소개합니다.

순수 정적 HTML/CSS/JS로 제작되어 별도 빌드 과정 없이 그대로 배포할 수 있습니다.

---

## 📂 파일 구조

```
.
├─ index.html        # 메인 페이지 (최상위)
├─ style.css         # 전역 스타일 (폰트·리셋·반응형)
├─ script.js         # 인터랙션 (FAQ 아코디언)
├─ images/           # 이미지·아이콘
│  └─ hero-workshop.png
├─ README.md         # 이 문서
└─ .gitignore        # Git 제외 목록
```

---

## 🖥 로컬에서 확인

`index.html` 을 더블클릭하면 브라우저에서 바로 열립니다.
(또는 VS Code의 Live Server 등 정적 서버로 실행)

---

## 🚀 GitHub & Vercel 배포

### 1) GitHub에 업로드
```bash
git init
git add .
git commit -m "에어간판 전문몰 랜딩페이지"
git branch -M main
git remote add origin https://github.com/<사용자명>/<저장소명>.git
git push -u origin main
```

### 2) Vercel에서 배포
1. [vercel.com](https://vercel.com) 로그인 → **Add New… → Project**
2. 방금 올린 GitHub 저장소를 **Import**
3. 설정은 그대로 두고 **Deploy** 클릭
   - Framework Preset: **Other**
   - Build Command: **(비움)**
   - Output Directory: **(비움 — 루트의 index.html 자동 인식)**
4. 배포 완료 후 발급되는 `https://<프로젝트>.vercel.app` 주소로 접속

> `index.html`이 루트에 있는 순수 정적 사이트이므로 빌드 설정 없이 즉시 배포됩니다.
> 이후 GitHub `main` 브랜치에 push할 때마다 Vercel이 자동으로 재배포합니다.

---

## ✏️ 수정 안내

- **글자 내용** : `index.html`에서 해당 텍스트를 찾아 수정
- **색상 / 크기** : 각 요소의 `style="..."` 속성에서 수정
  - 포인트 네이비 `rgb(14, 42, 71)` · 주황 CTA `rgb(241, 90, 34)`
- **전역 스타일 · 반응형** : `style.css`
- **FAQ 동작** : `script.js`
- **사진 교체** : `images/` 폴더의 이미지를 같은 이름으로 교체
  - 장비·부자재 카드 등은 회색 사진 자리(placeholder)이니 실제 사진으로 교체하세요.

---

## ⚠️ 참고

- 전화번호(1600-0000)와 상호명("에어사인 프로")은 **가칭/예시**입니다.
- 투자금·마진·회수 기간 등 수치는 이해를 돕기 위한 **예시**이며 실제와 다를 수 있습니다.

© 2026 에어사인 프로
