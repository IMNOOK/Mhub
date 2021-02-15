express = nodejs의 미들웨어로써 중간에 껴서 어떠한 동작을 해주는 프로그램
즉 밑의 수많은 미들웨어들을 사용할 수 있게 만들어 주는 것이 바로 이 익스프레스이다.

body parser
requst data의 body로 부터 파라미터를 편리하게 추출할 수 있게 해주는 미들웨어

ejs

기본 문법
주석 : <%# ... %>
JS 코드 : <% ... %>
변수 출력(html escape 처리: >를 $gt로 변환) : <%= ... %>
태그내부 공백 제거 : <%_ ... _%>
html escape안하고 변수 출력 : <%- ... %>

ejs 분할
<% include 파일명(ex. ./nav.ejs) %>

연동방법
const data = { title: 'ejs init', message: 'Hello World' }; 
res.render('index.ejs', data);
