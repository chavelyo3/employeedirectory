(this.webpackJsonpnewapp=this.webpackJsonpnewapp||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),r=n(16),i=n.n(r),c=(n(22),n(3)),o=n(4),l=n(6),p=n(5),d=(n(23),n(17)),h=n.n(d),m=(n(42),n(0));var u=function(){return Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("div",{className:"title",children:"Employee Directory"}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"tagline"})]})};n(44),n(45),n(46);var j=function(e){return Object(m.jsxs)("div",{className:"Card",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{alt:e.last,src:e.image})}),Object(m.jsxs)("div",{children:[e.title," ",e.first," ",e.last," "]}),Object(m.jsx)("div",{children:e.gender}),Object(m.jsx)("div",{children:e.age}),Object(m.jsx)("div",{children:e.phone}),Object(m.jsx)("div",{children:e.email})]})},b=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={alphabetical:!0,ascending:!0,sortedEmployees:[],employees:[]},e.sortName=function(){var t=[];t=e.state.alphabetical?e.props.empList.sort((function(e,t){var n=e.name.last.toLowerCase(),s=t.name.last.toLowerCase();return n<s?-1:n>s?1:0})):e.props.empList.sort((function(e,t){var n=e.name.last.toLowerCase(),s=t.name.last.toLowerCase();return n>s?-1:n<s?1:0})),e.setState({alphabetical:!e.state.alphabetical,sortedEmployees:t})},e.sortAge=function(){var t=[];t=e.state.ascending?e.props.empList.sort((function(e,t){var n=e.dob.age,s=t.dob.age;return n<s?-1:n>s?1:0})):e.props.empList.sort((function(e,t){var n=e.dob.age,s=t.dob.age;return n>s?-1:n<s?1:0})),e.setState({ascending:!e.state.ascending,sortedEmployees:t})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.state.sortedEmployees.length<1&&this.setState({sortedEmployees:this.props.empList})}},{key:"componentDidUpdate",value:function(e){this.props.empList!==e.empList&&this.setState({sortedEmployees:this.props.empList})}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("div",{children:"Photo"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{onClick:this.sortName,className:"name",children:"Name"})," "]}),Object(m.jsx)("div",{children:"Gender"}),Object(m.jsx)("div",{children:Object(m.jsx)("p",{onClick:this.sortAge,className:"age",children:"Age"})}),Object(m.jsx)("div",{children:"Phone"}),Object(m.jsx)("div",{children:"E-mail"})]}),this.state.sortedEmployees.length>0&&this.state.sortedEmployees.map((function(e,t){return Object(m.jsx)(j,{image:e.picture.large,first:e.name.first,last:e.name.last,title:e.name.title,gender:e.gender,age:e.dob.age,phone:e.cell,email:e.email})}))]})}}]),n}(a.a.Component),f=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={searchTerm:"",filteredEmployees:[]},e.handleInputChange=function(t){e.setState({searchTerm:t.target.value});var n=t.target.value,s=e.props.employees.filter((function(e){return-1!==(e.name.title+e.name.first+e.name.last+e.gender+e.dob.age+e.email+e.cell).indexOf(n)}));e.setState({filteredEmployees:s})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.state.filteredEmployees.length<1&&this.setState({filteredEmployees:this.props.employees})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("form",{className:"form",children:Object(m.jsx)("input",{value:this.state.searchTerm,name:"searchTerm",onChange:function(t){return e.handleInputChange(t)},type:"text",placeholder:"Search"})}),this.state.filteredEmployees.length>0&&Object(m.jsx)(b,{empList:this.state.filteredEmployees})]})}}]),n}(a.a.Component),v=(n(47),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={employees:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://randomuser.me/api/?results=20&nat=Aus").then((function(t){e.setState({employees:t.data.results})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(u,{}),this.state.employees.length>0&&Object(m.jsx)(f,{employees:this.state.employees})]})}}]),n}(a.a.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),g()}},[[48,1,2]]]);
//# sourceMappingURL=main.e6f599c8.chunk.js.map