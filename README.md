# 🎪🎫 똑똑한 티켓팅, 똑켓(Ttocket)🎫🎪
### [링크 바로가기](https://j8b210.p.ssafy.io)

---
## :clapper: 소개 영상
### 미완: [UCC 링크]()
<br>

## :date: 프로젝트 진행 기간
- *2023/2/20 ~ 2023/4/7 (6주)*
- SSAFY 8기 특화 프로젝트 [블록체인] 
<br>

## :pushpin: 주요 기능 : NFT를 활용한 티켓 서비스
- **Metamask 계정을 이용한 로그인**
- **내가 소유한 티켓 확인**
  - *QR 코드를 통해 입장*
  - *티켓 목록 제공*
- **티켓 보관함**
  - *공연 후에도 티켓 기록을 영구적으로 소장*
  - *공연에 대한 기록 작성*
  - *티켓 구매자에게 주최자 측에서 특별 컨텐츠 추가 제공*
- **공연 정보 조회**
- **공연 좌석 예매, 취소**
- **공연 등록**
<br>


## :art: 주요 기술
- **BlockChain**
  - Solidity
  - Truffle
  - Ganache
<br>
- **FrontEnd**
  - React
  - TypeScript
  - Web3.js
  - HTML
  - CSS
  - JavaScript
  - Figma
<br>

- **BackEnd**
  - IPFS
  - Java 11
  - Spring Data JPA
  - Spring Boot
  - MySQL 8.0.0
  - Redis
<br>

- **Deployment**
  - NginX
  - Docker
  - Jenkins
  - AWS EC2
  - AWS S3
  - Gitlab
<br>


## 버전 정보
- ### Ver 1 (~ 3/23)
  - Client 
    - 페이지 구성: `#001`, `#002`, `#011`, `#012`, `#021`, `#022`, `#023`, `#024`, `#026`, `#027`, `#028`, `#029` 
    - 로그인, 티켓 목록, 예매(결제 제외)
  - Server 
    - API 설계
    - Spring Scheduler
    - S3 설정
  #### 1.1
  - Server 
    - 좌석 배열 정보 변경: List -> ArrayList
  #### 1.2
    - Server  
      - 스크롤 페이징 처리
      - 좋아요 로직 변경

- ### Ver 2 (~ 3/28)
  - Client
    - `#003`, `#032`, `#033`, `#034`, `#041`, `#042`, `#043`, `#044`, `#045`
    - 공연 생성, 공연 비하인드 페이지 구현
    - 화면 버그 픽스 (Header, Bottom Navbar)
  - Server
    - Swagger
    - Spring Scheduler 적용
    - 공연 예매 취소  
    - Dto 유효성 검증
    - Reddis 추가 
  - Deploy
    - IPFS Cluster 배포
    - Dockerfile -> Docker compose 전환
  
- ### Ver 3 (~ 4/4)
  - Client
  - Server
    - 좌석 예약 페이지 대기열



## :heavy_check_mark: 기획 배경
- **암표 거래 예방** : 각 티켓에 고유 인식 값이 부여돼 티켓의 출처를 추적 가능
- **허위매물, 위조 방지** : 최초 발행자를 언제든 확인 가능
<br>

## :open_file_folder: 프로젝트 파일 구조

### Solidity
```
└─blockchain
    ├─contracts
    │   ├─SangToken.sol  
    │   ├─Ticket.sol
    │   └─TicketDTO.sol
    ├─migrations
    │   └─1_initial_migration
    └─test
        └─Ticket_Test
```

### FrontEnd
```
└frontend
    ├─nginx
    ├─public
    └─src
        ├─app
        │  └─redux-modules
        ├─assets
        │  └─fonts
        ├─components
        │  ├─date
        │  └─modal
        ├─css
        ├─pages
        │  ├─box
        │  ├─error
        │  ├─login
        │  ├─perform
        │  ├─qr
        │  ├─reserve
        │  │  └─seat
        │  ├─sponsor
        │  └─ticket
        └─services
            └─web3

```
### BackEnd
```
└backend
    └─src
        ├─main
        │  ├─java
        │  │  └─com
        │  │      └─ssafy
        │  │          └─ttocket
        │  │              ├─config
        │  │              ├─controller
        │  │              ├─domain
        │  │              ├─dto
        │  │              ├─exception
        │  │              ├─filter
        │  │              ├─interceptor
        │  │              ├─repository
        │  │              │  └─querydsl
        │  │              └─service
        │  └─resources
        └─test
            └─java
                └─com
                    └─ssafy
                        └─ttocket
```
<br>

## 🤝 협업 툴
- Git
- Notion
- JIRA
- MatterMost
- Webex
- Discord
- Kakaotalk
<br>

## :clipboard: 프로젝트 산출물
- [기능명세서](./docs/API%20%EB%AA%85%EC%84%B8%EC%84%9C.md)
- [Jira](https://ssafy.atlassian.net/jira/software/c/projects/S08P22B210/boards/1754)
- 미완 : [요구사항 명세서]()
- 미완 : [아키텍처]()
- [와이어프레임](https://www.figma.com/file/scgH6g471y2hUKrv7KoVeO/%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=0%3A1&t=zkg9ESqNb1mEXyr3-1)
- [컨벤션](./docs/%EC%BB%A8%EB%B2%A4%EC%85%98.md)
- 미완 : [API 명세서]()
- [ERD](https://www.erdcloud.com/d/nWMfZTjtggAzFnETa)
- 미완 : [개발설계서]()
<br>

## :bar_chart: 프로젝트 결과물
- 미완 : [최종발표 PPT]()
- [중간발표 PPT](https://www.canva.com/design/DAFcwQ7m_VM/vEkYiSUZlPwjDSJ-f5T0ow/view?utm_content=DAFcwQ7m_VM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) 
- 미완 : [포팅메뉴얼]()
<br>  

## :sparkles: 서비스 화면 GIF

<br>
