(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[580],{5236:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project-overview/module-structure",function(){return t(7603)}])},7603:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return i}});var c=t(5893),s=t(2673),o=t(373),r=t(8426);t(9128);var a=t(2643);let i=[{depth:2,value:"coupon-core",id:"coupon-core"},{depth:2,value:"coupon-dataaccess",id:"coupon-dataaccess"},{depth:2,value:"coupon-api",id:"coupon-api"},{depth:2,value:"coupon-issuer",id:"coupon-issuer"},{depth:2,value:"추가 개발이 필요한 부분들",id:"추가-개발이-필요한-부분들"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",code:"code",p:"p",pre:"pre",span:"span"},(0,a.a)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{children:"멀티 모듈 구조"}),"\n",(0,c.jsx)(n.h2,{id:"coupon-core",children:"coupon-core"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"DomainEvent"}),"\n",(0,c.jsx)(n.li,{children:"각종 ErrorCode, Exception"}),"\n",(0,c.jsx)(n.li,{children:"JPA Entity, Cache Value Object"}),"\n"]}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.h2,{id:"coupon-dataaccess",children:"coupon-dataaccess"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["JPA, Querydsl, Redis, RedisScript, Caffeine 에 대한 처리 코드들을 모아두고 JPA 설정 코드들이 모여 있는 모듈입니다.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsxs)(n.li,{children:["처음에는 ",(0,c.jsx)(n.code,{children:"coupon-dataaccess"})," 에 데이터 코드를 모아둘까 하다가 ",(0,c.jsx)(n.code,{children:"귀차니즘"})," 으로 이렇게 하는 것 같다는 생각이 들어서 프로젝트 중반에 ",(0,c.jsx)(n.code,{children:"coupon-api"}),", ",(0,c.jsx)(n.code,{children:"coupon-issuer"})," 마다 각각의 데이터 접근코드를 두기로 결정했었습니다.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsxs)(n.li,{children:["막상 개발과 설계를 수정하는 과정을 거치면서 ",(0,c.jsx)(n.code,{children:"coupon"})," 이라는 서비스 측면에서 data 조회의 버전을 따로 관리하는 모듈을 따로 분리해둔다면 더 나을 것이라는 판단이 들어서 ",(0,c.jsx)(n.code,{children:"coupon-dataaccess"})," 모듈을 따로 구현하게 되었습니다.",(0,c.jsx)("br",{})]}),"\n"]}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.h2,{id:"coupon-api",children:"coupon-api"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"사용자의 접근 포인트"}),"\n",(0,c.jsx)(n.li,{children:"사용자의 요청이 잘못 되었는지 유효성 검증 수행"}),"\n",(0,c.jsx)(n.li,{children:"Write Back 기반으로 요청들을 쌓아두는 역할을 수행"}),"\n",(0,c.jsxs)(n.li,{children:["e.g.","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"쿠폰 1개에 대해 10000 명의 사용자가 접속해서 발급하려 하는 경우"}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["주요 코드","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"controller, advice"}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"coupon-dataaccess"})," 를 이용해서 Redis Queue 처리 작업을 하고, ErrorCode, Exception 등은 ",(0,c.jsx)(n.code,{children:"coupon-core"})," 모듈을 이용"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.h2,{id:"coupon-issuer",children:"coupon-issuer"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"쿠폰 발급기 (실제 DB에 저장하는 작업을 수행)"}),"\n",(0,c.jsx)(n.li,{children:"Redis 에 저장된 쿠폰 발급 요청을 꺼내어서 MySQL에 쿠폰 발급 요청 데이터를 실제로 저장하는 작업 수행"}),"\n",(0,c.jsx)(n.li,{children:"스케쥴링(@Scheduled) 기반의 데이터 저장 처리"}),"\n",(0,c.jsxs)(n.li,{children:["MySQL에 데이터 저장 작업 완료시 ",(0,c.jsx)(n.code,{children:"CouponIssueCreatedEvent"})," 라는 도메인 이벤트 발급(publish)"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"CouponIssueCreatedEvent"})," 리스너는 @TransactionalEventListener 를 통해 트랜잭션 커밋이 완료된 couponId 를 Redis 내에 Cache Aside 기반의 캐싱 처리"]}),"\n"]}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.p,{children:"저장된 데이터의 모습"}),"\n",(0,c.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,c.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,c.jsx)(n.span,{className:"line",children:(0,c.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'{"@class":"io.chagchagchag.project.coupon.dataaccess.cache.redis.valueobject.CouponRedisEntity","id":1,"couponAssignType":"FIFO","totalQuantity":["java.math.BigDecimal",1000],"isQuantityAvailable":false,"issueStartDate":[2024,1,1,0,0,1],"issueEndDate":[2024,11,11,23,59,59]}'})})})}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.h2,{id:"추가-개발이-필요한-부분들",children:"추가 개발이 필요한 부분들"}),"\n",(0,c.jsxs)(n.p,{children:["이번 프로젝트는 Redis Script 를 통해 단건 INSERT 트래픽 (쿠폰 발급)을 어떻게 부하를 줄여서 처리하는 지에 대한 예제를 남기는 것이 목적입니다. 제대로 한다면 예외 발생 시에 Kafka 토픽에 에러내용을 기록하거나 카프카 마저도 저장이 안될 경우 File 기반의 IO 작업을 수행하는 부분, 우아한 종료 로직 내에 장애 내용, 처리 시도 중인 ID 등을 기록하는 로직 등이 필요한데, 이런 내용은 주제에서 벗어나기에 생략했습니다.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsxs)(n.p,{children:["예외 케이스를 떠올리면서 ",(0,c.jsx)(n.code,{children:"이 정도로 변태 처럼 예외케이스를 생각할 필요는 없다구"})," 하고 생각이 들어서 가급적 이번 예제는 트래픽을 단순하게 Redis 작업 큐 (LIST, SET) 기반으로 처리하는 예제를 남기는 데에 중점을 두었습니다.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsx)("br",{})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.a)(),e.components);return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/project-overview/module-structure.mdx",route:"/project-overview/module-structure",timestamp:1707829727e3,pageMap:[{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"coding-style",route:"/coding-style",children:[{kind:"MdxPage",name:"factory-mapper-usage",route:"/coding-style/factory-mapper-usage"},{kind:"MdxPage",name:"multi-module-usage",route:"/coding-style/multi-module-usage"},{kind:"MdxPage",name:"service-object-usage",route:"/coding-style/service-object-usage"},{kind:"Meta",data:{"service-object-usage":"@Service 를 프록시 객체로만 사용","factory-mapper-usage":"객체생성은 factory, mapper 컴포넌트를 사용","multi-module-usage":"멀티모듈 구성 원칙"}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"performance-test",route:"/performance-test",children:[{kind:"MdxPage",name:"grafana-dashboard-setting",route:"/performance-test/grafana-dashboard-setting"},{kind:"MdxPage",name:"locust-setting",route:"/performance-test/locust-setting"},{kind:"MdxPage",name:"testing-note",route:"/performance-test/testing-note"},{kind:"Meta",data:{"grafana-dashboard-setting":"Grafana Dashboard 세팅","locust-setting":"locust 세팅","testing-note":"테스팅 노트"}}]},{kind:"Folder",name:"project-overview",route:"/project-overview",children:[{kind:"MdxPage",name:"locust-setting",route:"/project-overview/locust-setting"},{kind:"MdxPage",name:"module-structure",route:"/project-overview/module-structure"},{kind:"MdxPage",name:"prometheus-grafana-setting",route:"/project-overview/prometheus-grafana-setting"},{kind:"MdxPage",name:"tech-stack",route:"/project-overview/tech-stack"},{kind:"Meta",data:{"tech-stack":"Tech Stack","module-structure":"멀티 모듈 구조","locust-setting":"locust 세팅","prometheus-grafana-setting":"prometheus, grafana 세팅"}}]},{kind:"Meta",data:{"project-overview":"Project Overview","coding-style":"코딩스타일","performance-test":"성능테스트",index:"Introduction",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"멀티 모듈 구조",headings:i},pageNextRoute:"/project-overview/module-structure",nextraLayout:o.ZP,themeConfig:r.Z};n.default=(0,s.j)(d)},8426:function(e,n,t){"use strict";var c=t(5893);t(7294);let s={logo:(0,c.jsx)("span",{children:"My Project"}),project:{link:"https://github.com/chagchagchag/docs-coupon-service"},docsRepositoryBase:"https://github.com/chagchagchag/docs-coupon-service",footer:{text:"Nextra Docs Template"}};n.Z=s},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=5236)}),_N_E=e.O()}]);