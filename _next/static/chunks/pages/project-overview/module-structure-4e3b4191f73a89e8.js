(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[580],{5236:function(e,n,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project-overview/module-structure",function(){return c(7603)}])},7603:function(e,n,c){"use strict";c.r(n),c.d(n,{__toc:function(){return d}});var o=c(5893),t=c(2673),r=c(373),s=c(8426);c(9128);var i=c(2643);let d=[{depth:2,value:"coupon-core",id:"coupon-core"},{depth:2,value:"coupon-dataaccess",id:"coupon-dataaccess"},{depth:2,value:"coupon-api",id:"coupon-api"},{depth:2,value:"coupon-issuer",id:"coupon-issuer"},{depth:2,value:"추가 개발이 필요한 부분들",id:"추가-개발이-필요한-부분들"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",blockquote:"blockquote",p:"p",code:"code"},(0,i.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{children:"멀티 모듈 구조"}),"\n",(0,o.jsx)(n.h2,{id:"coupon-core",children:"coupon-core"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"DomainEvent"}),"\n",(0,o.jsx)(n.li,{children:"각종 ErrorCode, Exception"}),"\n",(0,o.jsx)(n.li,{children:"JPA Entity, Cache Value Object"}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["JPA Entity, Cache Value Object 는 현재 ",(0,o.jsx)(n.code,{children:"coupon-dataaccess"})," 모듈로 이관 예정입니다.",(0,o.jsx)("br",{}),"\r\n구현 도중에 설계가 바뀌어서 잠시 ",(0,o.jsx)(n.code,{children:"coupon-core"})," 에 그대로 두고 있습니다. 가능한 빠르게 고칠 예정입니다 ㅠㅠ",(0,o.jsx)("br",{})]}),"\n"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"coupon-dataaccess",children:"coupon-dataaccess"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["JPA, Querydsl, Redis, RedisScript, Caffeine 에 대한 처리 코드들을 모아두고 JPA 설정 코드들이 모여 있는 모듈입니다.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsxs)(n.li,{children:["초기 설계 단계에서 Query, SQL 들을 ",(0,o.jsx)(n.code,{children:"coupon-dataaccess"})," 로 몰아두는 것이 뭔가를 일괄처리가 되도록 관리하려는 귀차니즘과 같은 생각 중 하나 처럼 생각이 되는 순간이 있었는데요. 구현을 거듭하면서 ",(0,o.jsx)(n.code,{children:"coupon"})," 서비스 측면에서 data 조회의 버전을 따로 관리하는 모듈을 따로 분리해둔다면 더 나을 것이라는 판단이 들어서 ",(0,o.jsx)(n.code,{children:"coupon-dataaccess"})," 모듈을 따로 구현하게 되었습니다.",(0,o.jsx)("br",{})]}),"\n"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["이런 이유로 ",(0,o.jsx)(n.code,{children:"coupon-core"})," 내에 정의해둔 엔티티 매핑, 캐시 VO 등과 같은 코드들을 ",(0,o.jsx)(n.code,{children:"coupon-dataaccess"})," 로 다시 이관해야 하는데 아직 이 부분은 정리하지 못했습니다. 최대한 빠르게 정리 예정입니다.",(0,o.jsx)("br",{})]}),"\n"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"coupon-api",children:"coupon-api"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"사용자의 접근 포인트"}),"\n",(0,o.jsx)(n.li,{children:"사용자의 요청이 잘못 되었는지 유효성 검증 수행"}),"\n",(0,o.jsx)(n.li,{children:"Write Back 기반으로 요청들을 쌓아두는 역할을 수행"}),"\n",(0,o.jsxs)(n.li,{children:["e.g.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"쿠폰 1개에 대해 10000 명의 사용자가 접속해서 발급하려 하는 경우"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["주요 코드","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"controller, advice"}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"coupon-dataaccess"})," 를 이용해서 Redis Queue 처리 작업을 하고, ErrorCode, Exception 등은 ",(0,o.jsx)(n.code,{children:"coupon-core"})," 모듈을 이용"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"coupon-issuer",children:"coupon-issuer"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"쿠폰 발급기 (실제 DB에 저장하는 작업을 수행)"}),"\n",(0,o.jsx)(n.li,{children:"Redis 에 저장된 쿠폰 발급 요청을 꺼내어서 MySQL에 쿠폰 발급 요청 데이터를 실제로 저장하는 작업 수행"}),"\n",(0,o.jsx)(n.li,{children:"스케쥴링(@Scheduled) 기반의 데이터 저장 처리"}),"\n",(0,o.jsxs)(n.li,{children:["MySQL에 데이터 저장 작업 완료시 ",(0,o.jsx)(n.code,{children:"CouponIssueCreatedEvent"})," 라는 도메인 이벤트 발급(publish)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"CouponIssueCreatedEvent"})," 리스너는 @TransactionalEventListener 를 통해 트랜잭션 커밋이 완료된 couponId 를 Redis 내에 저장"]}),"\n"]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"추가-개발이-필요한-부분들",children:"추가 개발이 필요한 부분들"}),"\n",(0,o.jsxs)(n.p,{children:["이번 프로젝트는 Redis Script 를 통해 단건 INSERT 트래픽 (쿠폰 발급)을 어떻게 부하를 줄여서 처리하는 지에 대한 예제를 남기는 것이 목적입니다. 제대로 한다면 예외 발생 시에 Kafka 토픽에 에러내용을 기록하거나 카프카 마저도 저장이 안될 경우 File 기반의 IO 작업을 수행하는 부분, 우아한 종료 로직 내에 장애 내용, 처리 시도 중인 ID 등을 기록하는 로직 등이 필요한데, 이런 내용은 주제에서 벗어나기에 생략했습니다.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(n.p,{children:["예외 케이스를 떠올리면서 ",(0,o.jsx)(n.code,{children:"이 정도로 변태 처럼 예외케이스를 생각할 필요는 없다구"})," 하고 생각이 들어서 가급적 이번 예제는 트래픽을 단순하게 Redis 작업 큐 (LIST, SET) 기반으로 처리하는 예제를 남기는 데에 중점을 두었습니다.",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)("br",{})]})}let a={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.a)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/project-overview/module-structure.mdx",route:"/project-overview/module-structure",timestamp:1707808386e3,pageMap:[{kind:"MdxPage",name:"about",route:"/about"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"project-overview",route:"/project-overview",children:[{kind:"MdxPage",name:"locust-setting",route:"/project-overview/locust-setting"},{kind:"MdxPage",name:"module-structure",route:"/project-overview/module-structure"},{kind:"MdxPage",name:"prometheus-grafana-setting",route:"/project-overview/prometheus-grafana-setting"},{kind:"MdxPage",name:"tech-stack",route:"/project-overview/tech-stack"},{kind:"Meta",data:{"tech-stack":"Tech Stack","module-structure":"멀티 모듈 구조","locust-setting":"locust 세팅","prometheus-grafana-setting":"prometheus, grafana 세팅"}}]},{kind:"Meta",data:{"project-overview":"Project Overview",index:"Introduction",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"멀티 모듈 구조",headings:d},pageNextRoute:"/project-overview/module-structure",nextraLayout:r.ZP,themeConfig:s.Z};n.default=(0,t.j)(a)},8426:function(e,n,c){"use strict";var o=c(5893);c(7294);let t={logo:(0,o.jsx)("span",{children:"My Project"}),project:{link:"https://github.com/chagchagchag/docs-coupon-service"},docsRepositoryBase:"https://github.com/chagchagchag/docs-coupon-service",footer:{text:"Nextra Docs Template"}};n.Z=t},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=5236)}),_N_E=e.O()}]);