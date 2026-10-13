"use strict";var m=function(v,u){return function(){try{return u||v((u={exports:{}}).exports,u),u.exports}catch(n){throw (u=0, n)}};};var k=m(function(K,j){
function A(v,u,n,i,c,r,s,q){var e,a,t,g,p,o,l,x;for(e=u.data,a=r.data,t=u.accessors[0],p=r.accessors[0],g=r.accessors[1],o=i,l=q,x=0;x<v;x++)g(a,l,t(e,o)+c*p(a,l)),o+=n,l+=s;return r}j.exports=A
});var P=m(function(L,O){
var M=require('@stdlib/array-base-arraylike2object/dist'),B=require('@stdlib/blas-base-gcopy/dist').ndarray,C=require('@stdlib/blas-ext-base-gxpy/dist').ndarray,D=k(),f=5;function E(v,u,n,i,c,r,s,q){var e,a,t,g,p,o;if(v<=0)return r;if(c===0)return B(v,u,n,i,r,s,q);if(c===1)return C(v,u,n,i,r,s,q);if(t=M(u),g=M(r),t.accessorProtocol||g.accessorProtocol)return D(v,t,n,i,c,g,s,q),r;if(e=i,a=q,n===1&&s===1){if(p=v%f,p>0)for(o=0;o<p;o++)r[a]=u[e]+c*r[a],e+=n,a+=s;if(v<f)return r;for(o=p;o<v;o+=f)r[a]=u[e]+c*r[a],r[a+1]=u[e+1]+c*r[a+1],r[a+2]=u[e+2]+c*r[a+2],r[a+3]=u[e+3]+c*r[a+3],r[a+4]=u[e+4]+c*r[a+4],e+=f,a+=f;return r}for(o=0;o<v;o++)r[a]=u[e]+c*r[a],e+=n,a+=s;return r}O.exports=E
});var w=m(function(Q,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),F=P();function G(v,u,n,i,c,r){return F(v,u,n,R(v,n),i,c,r,R(v,r))}h.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=w(),I=P();H(z,"ndarray",I);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
