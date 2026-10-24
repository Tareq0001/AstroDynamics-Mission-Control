var ud=Object.defineProperty;var dd=(i,e,t)=>e in i?ud(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Se=(i,e,t)=>dd(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const W0="170",Rr={ROTATE:0,DOLLY:1,PAN:2},wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fd=0,Rl=1,pd=2,Eh=1,md=2,ii=3,Ni=0,Jt=1,En=2,Di=0,Cr=1,tr=2,Cl=3,Pl=4,gd=5,Zi=100,vd=101,xd=102,_d=103,yd=104,Md=200,bd=201,Sd=202,wd=203,Bo=204,zo=205,Ed=206,Td=207,Ad=208,Rd=209,Cd=210,Pd=211,Dd=212,Ld=213,Id=214,ko=0,Ho=1,Go=2,Ir=3,Vo=4,Wo=5,qo=6,Xo=7,Th=0,Nd=1,Ud=2,Li=0,Fd=1,Od=2,Bd=3,Ah=4,zd=5,kd=6,Hd=7,Rh=300,Nr=301,Ur=302,Yo=303,jo=304,ys=306,Ai=1e3,Ci=1001,$o=1002,zn=1003,Gd=1004,_a=1005,Vn=1006,ks=1007,Qi=1008,hi=1009,Ch=1010,Ph=1011,la=1012,q0=1013,nr=1014,ai=1015,ua=1016,X0=1017,Y0=1018,Fr=1020,Dh=35902,Lh=1021,Ih=1022,Bn=1023,Nh=1024,Uh=1025,Pr=1026,Or=1027,Fh=1028,j0=1029,Oh=1030,$0=1031,Z0=1033,ts=33776,ns=33777,is=33778,rs=33779,Zo=35840,Ko=35841,Jo=35842,Qo=35843,e0=36196,t0=37492,n0=37496,i0=37808,r0=37809,a0=37810,s0=37811,o0=37812,l0=37813,c0=37814,h0=37815,u0=37816,d0=37817,f0=37818,p0=37819,m0=37820,g0=37821,as=36492,v0=36494,x0=36495,Bh=36283,_0=36284,y0=36285,M0=36286,Vd=3200,Wd=3201,zh=0,qd=1,Ri="",Sn="srgb",Gr="srgb-linear",Ms="linear",vt="srgb",lr=7680,Dl=519,Xd=512,Yd=513,jd=514,kh=515,$d=516,Zd=517,Kd=518,Jd=519,Ll=35044,Il="300 es",si=2e3,us=2001;class rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ss=Math.PI/180,b0=180/Math.PI;function da(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function rn(i,e,t){return Math.max(e,Math.min(t,i))}function Qd(i,e){return(i%e+e)%e}function Hs(i,e,t){return(1-t)*i+t*e}function Zr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ef={DEG2RAD:ss};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,r,a,s,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c)}set(e,t,n,r,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],x=n[8],_=r[0],g=r[3],p=r[6],b=r[1],w=r[4],M=r[7],F=r[2],P=r[5],C=r[8];return a[0]=s*_+o*b+l*F,a[3]=s*g+o*w+l*P,a[6]=s*p+o*M+l*C,a[1]=c*_+h*b+u*F,a[4]=c*g+h*w+u*P,a[7]=c*p+h*M+u*C,a[2]=d*_+m*b+x*F,a[5]=d*g+m*w+x*P,a[8]=d*p+m*M+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-n*a*h+n*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*s-o*c,d=o*l-h*a,m=c*a-s*l,x=t*u+n*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=u*_,e[1]=(r*c-h*n)*_,e[2]=(o*n-r*s)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*a-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gs.makeScale(e,t)),this}rotate(e){return this.premultiply(Gs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new Je;function Hh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tf(){const i=ds("canvas");return i.style.display="block",i}const Nl={};function ra(i){i in Nl||(Nl[i]=!0,console.warn(i))}function nf(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function rf(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function af(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ct={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===vt&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===vt&&(i.r=Dr(i.r),i.g=Dr(i.g),i.b=Dr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ri?Ms:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ul=[.64,.33,.3,.6,.15,.06],Fl=[.2126,.7152,.0722],Ol=[.3127,.329],Bl=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zl=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ct.define({[Gr]:{primaries:Ul,whitePoint:Ol,transfer:Ms,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:Fl,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:Ul,whitePoint:Ol,transfer:vt,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:Fl,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}});let cr;class sf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cr===void 0&&(cr=ds("canvas")),cr.width=e.width,cr.height=e.height;const n=cr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=oi(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let of=0;class Gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=da(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Vs(r[s].image)):a.push(Vs(r[s]))}else a=Vs(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Vs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lf=0;class sn extends rr{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,n=Ci,r=Ci,a=Vn,s=Qi,o=Bn,l=hi,c=sn.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=da(),this.name="",this.source=new Gh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case $o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case $o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Rh;sn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],x=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,M=(m+1)/2,F=(p+1)/2,P=(h+d)/4,C=(u+_)/4,I=(x+g)/4;return w>M&&w>F?w<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(w),r=P/n,a=C/n):M>F?M<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),n=P/r,a=I/r):F<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(F),n=C/a,r=I/a),this.set(n,r,a,t),this}let b=Math.sqrt((g-x)*(g-x)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-x)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cf extends rr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new sn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends cf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vh extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hf extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ui{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=a[s+0],m=a[s+1],x=a[s+2],_=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=x,e[t+3]=_;return}if(u!==_||l!==d||c!==m||h!==x){let g=1-o;const p=l*d+c*m+h*x+u*_,b=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const F=Math.sqrt(w),P=Math.atan2(F,p*b);g=Math.sin(g*P)/F,o=Math.sin(o*P)/F}const M=o*b;if(l=l*g+d*M,c=c*g+m*M,h=h*g+x*M,u=u*g+_*M,g===1-o){const F=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=F,c*=F,h*=F,u*=F}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=a[s],d=a[s+1],m=a[s+2],x=a[s+3];return e[t]=o*x+h*u+l*m-c*d,e[t+1]=l*x+h*d+c*u-o*m,e[t+2]=c*x+h*m+o*d-l*u,e[t+3]=h*x-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(a/2),d=l(n/2),m=l(r/2),x=l(a/2);switch(s){case"XYZ":this._x=d*h*u+c*m*x,this._y=c*m*u-d*h*x,this._z=c*h*x+d*m*u,this._w=c*h*u-d*m*x;break;case"YXZ":this._x=d*h*u+c*m*x,this._y=c*m*u-d*h*x,this._z=c*h*x-d*m*u,this._w=c*h*u+d*m*x;break;case"ZXY":this._x=d*h*u-c*m*x,this._y=c*m*u+d*h*x,this._z=c*h*x+d*m*u,this._w=c*h*u-d*m*x;break;case"ZYX":this._x=d*h*u-c*m*x,this._y=c*m*u+d*h*x,this._z=c*h*x-d*m*u,this._w=c*h*u+d*m*x;break;case"YZX":this._x=d*h*u+c*m*x,this._y=c*m*u+d*h*x,this._z=c*h*x-d*m*u,this._w=c*h*u-d*m*x;break;case"XZY":this._x=d*h*u-c*m*x,this._y=c*m*u-d*h*x,this._z=c*h*x+d*m*u,this._w=c*h*u+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+s*o+r*c-a*l,this._y=r*h+s*l+a*o-n*c,this._z=a*h+s*c+n*l-r*o,this._w=s*h-n*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=s*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*n),h=2*(o*t-a*r),u=2*(a*n-s*t);return this.x=t+l*c+s*u-o*h,this.y=n+l*h+o*c-a*u,this.z=r+l*u+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ws.copy(this).projectOnVector(e),this.sub(Ws)}reflect(e){return this.sub(Ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new O,kl=new ui;class fa{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,In):In.fromBufferAttribute(a,s),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ya.copy(n.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),Ma.subVectors(this.max,Kr),hr.subVectors(e.a,Kr),ur.subVectors(e.b,Kr),dr.subVectors(e.c,Kr),xi.subVectors(ur,hr),_i.subVectors(dr,ur),Hi.subVectors(hr,dr);let t=[0,-xi.z,xi.y,0,-_i.z,_i.y,0,-Hi.z,Hi.y,xi.z,0,-xi.x,_i.z,0,-_i.x,Hi.z,0,-Hi.x,-xi.y,xi.x,0,-_i.y,_i.x,0,-Hi.y,Hi.x,0];return!qs(t,hr,ur,dr,Ma)||(t=[1,0,0,0,1,0,0,0,1],!qs(t,hr,ur,dr,Ma))?!1:(ba.crossVectors(xi,_i),t=[ba.x,ba.y,ba.z],qs(t,hr,ur,dr,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new O,new O,new O,new O,new O,new O,new O,new O],In=new O,ya=new fa,hr=new O,ur=new O,dr=new O,xi=new O,_i=new O,Hi=new O,Kr=new O,Ma=new O,ba=new O,Gi=new O;function qs(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Gi.fromArray(i,a);const o=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const uf=new fa,Jr=new O,Xs=new O;class pa{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uf.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);const t=Jr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Jr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(Xs)),this.expandByPoint(Jr.copy(e.center).sub(Xs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new O,Ys=new O,Sa=new O,yi=new O,js=new O,wa=new O,$s=new O;class bs{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ys.copy(e).add(t).multiplyScalar(.5),Sa.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(Ys);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Sa),o=yi.dot(this.direction),l=-yi.dot(Sa),c=yi.lengthSq(),h=Math.abs(1-s*s);let u,d,m,x;if(h>0)if(u=s*l-o,d=s*o-l,x=a*h,u>=0)if(d>=-x)if(d<=x){const _=1/h;u*=_,d*=_,m=u*(u+s*d+2*o)+d*(s*u+d+2*l)+c}else d=a,u=Math.max(0,-(s*d+o)),m=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(s*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-s*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),m=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-a,-l),a),m=d*(d+2*l)+c):(u=Math.max(0,-(s*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),m=-u*u+d*(d+2*l)+c);else d=s>0?-a:a,u=Math.max(0,-(s*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ys).addScaledVector(Sa,d),m}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),r=Jn.dot(Jn)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(a=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,r,a){js.subVectors(t,e),wa.subVectors(n,e),$s.crossVectors(js,wa);let s=this.direction.dot($s),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;yi.subVectors(this.origin,e);const l=o*this.direction.dot(wa.crossVectors(yi,wa));if(l<0)return null;const c=o*this.direction.dot(js.cross(yi));if(c<0||l+c>s)return null;const h=-o*yi.dot($s);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,n,r,a,s,o,l,c,h,u,d,m,x,_,g){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c,h,u,d,m,x,_,g)}set(e,t,n,r,a,s,o,l,c,h,u,d,m,x,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=a,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=x,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/fr.setFromMatrixColumn(e,0).length(),a=1/fr.setFromMatrixColumn(e,1).length(),s=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const d=s*h,m=s*u,x=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+x*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=x+m*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,x=c*h,_=c*u;t[0]=d+_*o,t[4]=x*o-m,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=m*o-x,t[6]=_+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,x=c*h,_=c*u;t[0]=d-_*o,t[4]=-s*u,t[8]=x+m*o,t[1]=m+x*o,t[5]=s*h,t[9]=_-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*h,m=s*u,x=o*h,_=o*u;t[0]=l*h,t[4]=x*c-m,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,m=s*c,x=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=x*u+m,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+x,t[10]=d-_*u}else if(e.order==="XZY"){const d=s*l,m=s*c,x=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=s*h,t[9]=m*u-x,t[2]=x*u-m,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(df,e,ff)}lookAt(e,t,n){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Mi.crossVectors(n,pn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Mi.crossVectors(n,pn)),Mi.normalize(),Ea.crossVectors(pn,Mi),r[0]=Mi.x,r[4]=Ea.x,r[8]=pn.x,r[1]=Mi.y,r[5]=Ea.y,r[9]=pn.y,r[2]=Mi.z,r[6]=Ea.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],x=n[2],_=n[6],g=n[10],p=n[14],b=n[3],w=n[7],M=n[11],F=n[15],P=r[0],C=r[4],I=r[8],T=r[12],S=r[1],U=r[5],V=r[9],W=r[13],X=r[2],Z=r[6],K=r[10],te=r[14],Y=r[3],pe=r[7],se=r[11],xe=r[15];return a[0]=s*P+o*S+l*X+c*Y,a[4]=s*C+o*U+l*Z+c*pe,a[8]=s*I+o*V+l*K+c*se,a[12]=s*T+o*W+l*te+c*xe,a[1]=h*P+u*S+d*X+m*Y,a[5]=h*C+u*U+d*Z+m*pe,a[9]=h*I+u*V+d*K+m*se,a[13]=h*T+u*W+d*te+m*xe,a[2]=x*P+_*S+g*X+p*Y,a[6]=x*C+_*U+g*Z+p*pe,a[10]=x*I+_*V+g*K+p*se,a[14]=x*T+_*W+g*te+p*xe,a[3]=b*P+w*S+M*X+F*Y,a[7]=b*C+w*U+M*Z+F*pe,a[11]=b*I+w*V+M*K+F*se,a[15]=b*T+w*W+M*te+F*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],x=e[3],_=e[7],g=e[11],p=e[15];return x*(+a*l*u-r*c*u-a*o*d+n*c*d+r*o*m-n*l*m)+_*(+t*l*m-t*c*d+a*s*d-r*s*m+r*c*h-a*l*h)+g*(+t*c*u-t*o*m-a*s*u+n*s*m+a*o*h-n*c*h)+p*(-r*o*h-t*l*u+t*o*d+r*s*u-n*s*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],x=e[12],_=e[13],g=e[14],p=e[15],b=u*g*c-_*d*c+_*l*m-o*g*m-u*l*p+o*d*p,w=x*d*c-h*g*c-x*l*m+s*g*m+h*l*p-s*d*p,M=h*_*c-x*u*c+x*o*m-s*_*m-h*o*p+s*u*p,F=x*u*l-h*_*l-x*o*d+s*_*d+h*o*g-s*u*g,P=t*b+n*w+r*M+a*F;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=b*C,e[1]=(_*d*a-u*g*a-_*r*m+n*g*m+u*r*p-n*d*p)*C,e[2]=(o*g*a-_*l*a+_*r*c-n*g*c-o*r*p+n*l*p)*C,e[3]=(u*l*a-o*d*a-u*r*c+n*d*c+o*r*m-n*l*m)*C,e[4]=w*C,e[5]=(h*g*a-x*d*a+x*r*m-t*g*m-h*r*p+t*d*p)*C,e[6]=(x*l*a-s*g*a-x*r*c+t*g*c+s*r*p-t*l*p)*C,e[7]=(s*d*a-h*l*a+h*r*c-t*d*c-s*r*m+t*l*m)*C,e[8]=M*C,e[9]=(x*u*a-h*_*a-x*n*m+t*_*m+h*n*p-t*u*p)*C,e[10]=(s*_*a-x*o*a+x*n*c-t*_*c-s*n*p+t*o*p)*C,e[11]=(h*o*a-s*u*a-h*n*c+t*u*c+s*n*m-t*o*m)*C,e[12]=F*C,e[13]=(h*_*r-x*u*r+x*n*d-t*_*d-h*n*g+t*u*g)*C,e[14]=(x*o*r-s*_*r-x*n*l+t*_*l+s*n*g-t*o*g)*C,e[15]=(s*u*r-h*o*r+h*n*l-t*u*l-s*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*s,0,c*l-r*o,h*l+r*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,u=o+o,d=a*c,m=a*h,x=a*u,_=s*h,g=s*u,p=o*u,b=l*c,w=l*h,M=l*u,F=n.x,P=n.y,C=n.z;return r[0]=(1-(_+p))*F,r[1]=(m+M)*F,r[2]=(x-w)*F,r[3]=0,r[4]=(m-M)*P,r[5]=(1-(d+p))*P,r[6]=(g+b)*P,r[7]=0,r[8]=(x+w)*C,r[9]=(g-b)*C,r[10]=(1-(d+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=fr.set(r[0],r[1],r[2]).length();const s=fr.set(r[4],r[5],r[6]).length(),o=fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/a,h=1/s,u=1/o;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,t.setFromRotationMatrix(Nn),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=si){const l=this.elements,c=2*a/(t-e),h=2*a/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r);let m,x;if(o===si)m=-(s+a)/(s-a),x=-2*s*a/(s-a);else if(o===us)m=-s/(s-a),x=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=si){const l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(s-a),d=(t+e)*c,m=(n+r)*h;let x,_;if(o===si)x=(s+a)*u,_=-2*u;else if(o===us)x=a*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fr=new O,Nn=new At,df=new O(0,0,0),ff=new O(1,1,1),Mi=new O,Ea=new O,pn=new O,Hl=new At,Gl=new ui;class Cn{constructor(e=0,t=0,n=0,r=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-rn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pf=0;const Vl=new O,pr=new ui,Qn=new At,Ta=new O,Qr=new O,mf=new O,gf=new ui,Wl=new O(1,0,0),ql=new O(0,1,0),Xl=new O(0,0,1),Yl={type:"added"},vf={type:"removed"},mr={type:"childadded",child:null},Zs={type:"childremoved",child:null};class Vt extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new O,t=new Cn,n=new ui,r=new O(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Je}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.multiply(pr),this}rotateOnWorldAxis(e,t){return pr.setFromAxisAngle(e,t),this.quaternion.premultiply(pr),this}rotateX(e){return this.rotateOnAxis(Wl,e)}rotateY(e){return this.rotateOnAxis(ql,e)}rotateZ(e){return this.rotateOnAxis(Xl,e)}translateOnAxis(e,t){return Vl.copy(e).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wl,e)}translateY(e){return this.translateOnAxis(ql,e)}translateZ(e){return this.translateOnAxis(Xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ta.copy(e):Ta.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Qr,Ta,this.up):Qn.lookAt(Ta,Qr,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),pr.setFromRotationMatrix(Qn),this.quaternion.premultiply(pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yl),mr.child=e,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vf),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yl),mr.child=e,this.dispatchEvent(mr),mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),m=s(e.animations),x=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new O(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new O,ei=new O,Ks=new O,ti=new O,gr=new O,vr=new O,jl=new O,Js=new O,Qs=new O,eo=new O,to=new Ut,no=new Ut,io=new Ut;class On{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Un.subVectors(e,t),r.cross(Un);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Un.subVectors(r,t),ei.subVectors(n,t),Ks.subVectors(e,t);const s=Un.dot(Un),o=Un.dot(ei),l=Un.dot(Ks),c=ei.dot(ei),h=ei.dot(Ks),u=s*c-o*o;if(u===0)return a.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,x=(s*h-o*l)*d;return a.set(1-m-x,x,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,r,a,s,o,l){return this.getBarycoord(e,t,n,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ti.x),l.addScaledVector(s,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(e,t,n,r,a,s){return to.setScalar(0),no.setScalar(0),io.setScalar(0),to.fromBufferAttribute(e,t),no.fromBufferAttribute(e,n),io.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(to,a.x),s.addScaledVector(no,a.y),s.addScaledVector(io,a.z),s}static isFrontFacing(e,t,n,r){return Un.subVectors(n,t),ei.subVectors(e,t),Un.cross(ei).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Un.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return On.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;gr.subVectors(r,n),vr.subVectors(a,n),Js.subVectors(e,n);const l=gr.dot(Js),c=vr.dot(Js);if(l<=0&&c<=0)return t.copy(n);Qs.subVectors(e,r);const h=gr.dot(Qs),u=vr.dot(Qs);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(n).addScaledVector(gr,s);eo.subVectors(e,a);const m=gr.dot(eo),x=vr.dot(eo);if(x>=0&&m<=x)return t.copy(a);const _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(vr,o);const g=h*x-m*u;if(g<=0&&u-h>=0&&m-x>=0)return jl.subVectors(a,r),o=(u-h)/(u-h+(m-x)),t.copy(r).addScaledVector(jl,o);const p=1/(g+_+d);return s=_*p,o=d*p,t.copy(n).addScaledVector(gr,s).addScaledVector(vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function ro(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ct.workingColorSpace){if(e=Qd(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=ro(s,a,e+1/3),this.g=ro(s,a,e),this.b=ro(s,a,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,t=Sn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const n=qh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return ct.fromWorkingColorSpace(Zt.copy(this),e),Math.round(rn(Zt.r*255,0,255))*65536+Math.round(rn(Zt.g*255,0,255))*256+Math.round(rn(Zt.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,r=Zt.g,a=Zt.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const u=s-o;switch(c=h<=.5?u/(s+o):u/(2-s-o),s){case n:l=(r-a)/u+(r<a?6:0);break;case r:l=(a-n)/u+2;break;case a:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Sn){ct.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,r=Zt.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Aa);const n=Hs(bi.h,Aa.h,t),r=Hs(bi.s,Aa.s,t),a=Hs(bi.l,Aa.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new it;it.NAMES=qh;let xf=0;class ar extends rr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=da(),this.name="",this.blending=Cr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bo,this.blendDst=zo,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==Ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bo&&(n.blendSrc=this.blendSrc),this.blendDst!==zo&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class li extends ar{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new O,Ra=new We;class Rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ll,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),r=hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),r=hn(r,this.array),a=hn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ll&&(e.usage=this.usage),e}}class Xh extends Rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yh extends Rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends Rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _f=0;const bn=new At,ao=new Vt,xr=new O,mn=new fa,ea=new fa,Yt=new O;class wt extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=da(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hh(e)?Yh:Xh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Je().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return ao.lookAt(e),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Rt(n,3))}else{for(let n=0,r=t.count;n<r;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];mn.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];ea.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(mn.min,ea.min),mn.expandByPoint(Yt),Yt.addVectors(mn.max,ea.max),mn.expandByPoint(Yt)):(mn.expandByPoint(ea.min),mn.expandByPoint(ea.max))}mn.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)Yt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Yt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Yt.fromBufferAttribute(o,c),l&&(xr.fromBufferAttribute(e,c),Yt.add(xr)),r=Math.max(r,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new O,l[I]=new O;const c=new O,h=new O,u=new O,d=new We,m=new We,x=new We,_=new O,g=new O;function p(I,T,S){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),d.fromBufferAttribute(a,I),m.fromBufferAttribute(a,T),x.fromBufferAttribute(a,S),h.sub(c),u.sub(c),m.sub(d),x.sub(d);const U=1/(m.x*x.y-x.x*m.y);isFinite(U)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(U),g.copy(u).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(U),o[I].add(_),o[T].add(_),o[S].add(_),l[I].add(g),l[T].add(g),l[S].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,T=b.length;I<T;++I){const S=b[I],U=S.start,V=S.count;for(let W=U,X=U+V;W<X;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const w=new O,M=new O,F=new O,P=new O;function C(I){F.fromBufferAttribute(r,I),P.copy(F);const T=o[I];w.copy(T),w.sub(F.multiplyScalar(F.dot(T))).normalize(),M.crossVectors(P,T);const U=M.dot(l[I])<0?-1:1;s.setXYZW(I,w.x,w.y,w.z,U)}for(let I=0,T=b.length;I<T;++I){const S=b[I],U=S.start,V=S.count;for(let W=U,X=U+V;W<X;W+=3)C(e.getX(W+0)),C(e.getX(W+1)),C(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new O,a=new O,s=new O,o=new O,l=new O,c=new O,h=new O,u=new O;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,a),u.subVectors(r,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,x=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let p=0;p<h;p++)d[x++]=c[m++]}return new Rn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $l=new At,Vi=new bs,Ca=new pa,Zl=new O,Pa=new O,Da=new O,La=new O,so=new O,Ia=new O,Kl=new O,Na=new O;class Ke extends Vt{constructor(e=new wt,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Ia.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(so.fromBufferAttribute(u,e),s?Ia.addScaledVector(so,h):Ia.addScaledVector(so.sub(t),h))}t.add(Ia)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(a),Vi.copy(e.ray).recast(e.near),!(Ca.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Ca,Zl)===null||Vi.origin.distanceToSquared(Zl)>(e.far-e.near)**2))&&($l.copy(a).invert(),Vi.copy(e.ray).applyMatrix4($l),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,_=d.length;x<_;x++){const g=d[x],p=s[g.materialIndex],b=Math.max(g.start,m.start),w=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let M=b,F=w;M<F;M+=3){const P=o.getX(M),C=o.getX(M+1),I=o.getX(M+2);r=Ua(this,p,e,n,c,h,u,P,C,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let g=x,p=_;g<p;g+=3){const b=o.getX(g),w=o.getX(g+1),M=o.getX(g+2);r=Ua(this,s,e,n,c,h,u,b,w,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,_=d.length;x<_;x++){const g=d[x],p=s[g.materialIndex],b=Math.max(g.start,m.start),w=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=b,F=w;M<F;M+=3){const P=M,C=M+1,I=M+2;r=Ua(this,p,e,n,c,h,u,P,C,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=x,p=_;g<p;g+=3){const b=g,w=g+1,M=g+2;r=Ua(this,s,e,n,c,h,u,b,w,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function yf(i,e,t,n,r,a,s,o){let l;if(e.side===Jt?l=n.intersectTriangle(s,a,r,!0,o):l=n.intersectTriangle(r,a,s,e.side===Ni,o),l===null)return null;Na.copy(o),Na.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Na);return c<t.near||c>t.far?null:{distance:c,point:Na.clone(),object:i}}function Ua(i,e,t,n,r,a,s,o,l,c){i.getVertexPosition(o,Pa),i.getVertexPosition(l,Da),i.getVertexPosition(c,La);const h=yf(i,e,t,n,Pa,Da,La,Kl);if(h){const u=new O;On.getBarycoord(Kl,Pa,Da,La,u),r&&(h.uv=On.getInterpolatedAttribute(r,o,l,c,u,new We)),a&&(h.uv1=On.getInterpolatedAttribute(a,o,l,c,u,new We)),s&&(h.normal=On.getInterpolatedAttribute(s,o,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new O,materialIndex:0};On.getNormal(Pa,Da,La,d.normal),h.face=d,h.barycoord=u}return h}class Ii extends wt{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],u=[];let d=0,m=0;x("z","y","x",-1,-1,n,t,e,s,a,0),x("z","y","x",1,-1,n,t,-e,s,a,1),x("x","z","y",1,1,e,n,t,r,s,2),x("x","z","y",1,-1,e,n,-t,r,s,3),x("x","y","z",1,-1,e,t,n,r,a,4),x("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(u,2));function x(_,g,p,b,w,M,F,P,C,I,T){const S=M/C,U=F/I,V=M/2,W=F/2,X=P/2,Z=C+1,K=I+1;let te=0,Y=0;const pe=new O;for(let se=0;se<K;se++){const xe=se*U-W;for(let Re=0;Re<Z;Re++){const He=Re*S-V;pe[_]=He*b,pe[g]=xe*w,pe[p]=X,c.push(pe.x,pe.y,pe.z),pe[_]=0,pe[g]=0,pe[p]=P>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(Re/C),u.push(1-se/I),te+=1}}for(let se=0;se<I;se++)for(let xe=0;xe<C;xe++){const Re=d+xe+Z*se,He=d+xe+Z*(se+1),Q=d+(xe+1)+Z*(se+1),he=d+(xe+1)+Z*se;l.push(Re,He,he),l.push(He,Q,he),Y+=6}o.addGroup(m,Y,T),m+=Y,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Br(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function tn(i){const e={};for(let t=0;t<i.length;t++){const n=Br(i[t]);for(const r in n)e[r]=n[r]}return e}function Mf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const bf={clone:Br,merge:tn};var Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends ar{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=Mf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $h extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new O,Jl=new We,Ql=new We;class wn extends $h{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=b0*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return b0*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,Jl,Ql),t.subVectors(Ql,Jl)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ss*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _r=-90,yr=1;class Ef extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(_r,yr,e,t);r.layers=this.layers,this.add(r);const a=new wn(_r,yr,e,t);a.layers=this.layers,this.add(a);const s=new wn(_r,yr,e,t);s.layers=this.layers,this.add(s);const o=new wn(_r,yr,e,t);o.layers=this.layers,this.add(o);const l=new wn(_r,yr,e,t);l.layers=this.layers,this.add(l);const c=new wn(_r,yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Zh extends sn{constructor(e,t,n,r,a,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Nr,super(e,t,n,r,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tf extends ir{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Zh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ii(5,5,5),a=new qn({name:"CubemapFromEquirect",uniforms:Br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:Di});a.uniforms.tEquirect.value=t;const s=new Ke(r,a),o=t.minFilter;return t.minFilter===Qi&&(t.minFilter=Vn),new Ef(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}const oo=new O,Af=new O,Rf=new Je;class Ti{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=oo.subVectors(n,t).cross(Af.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(oo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rf.getNormalMatrix(e),r=this.coplanarPoint(oo).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new pa,Fa=new O;class K0{constructor(e=new Ti,t=new Ti,n=new Ti,r=new Ti,a=new Ti,s=new Ti){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si){const n=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],m=r[8],x=r[9],_=r[10],g=r[11],p=r[12],b=r[13],w=r[14],M=r[15];if(n[0].setComponents(l-a,d-c,g-m,M-p).normalize(),n[1].setComponents(l+a,d+c,g+m,M+p).normalize(),n[2].setComponents(l+s,d+h,g+x,M+b).normalize(),n[3].setComponents(l-s,d-h,g-x,M-b).normalize(),n[4].setComponents(l-o,d-u,g-_,M-w).normalize(),t===si)n[5].setComponents(l+o,d+u,g+_,M+w).normalize();else if(t===us)n[5].setComponents(o,u,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Fa.x=r.normal.x>0?e.max.x:e.min.x,Fa.y=r.normal.y>0?e.max.y:e.min.y,Fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kh(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Cf(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<u.length;m++){const x=u[d],_=u[m];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++d,u[d]=_)}u.length=d+1;for(let m=0,x=u.length;m<x;m++){const _=u[m];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}class Ss extends wt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,m=[],x=[],_=[],g=[];for(let p=0;p<h;p++){const b=p*d-s;for(let w=0;w<c;w++){const M=w*u-a;x.push(M,-b,0),_.push(0,0,1),g.push(w/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const w=b+c*p,M=b+c*(p+1),F=b+1+c*(p+1),P=b+1+c*p;m.push(w,M,P),m.push(M,F,P)}this.setIndex(m),this.setAttribute("position",new Rt(x,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.widthSegments,e.heightSegments)}}var Pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Df=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,If=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ep=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Om=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Km=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,o1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Pf,alphahash_pars_fragment:Df,alphamap_fragment:Lf,alphamap_pars_fragment:If,alphatest_fragment:Nf,alphatest_pars_fragment:Uf,aomap_fragment:Ff,aomap_pars_fragment:Of,batching_pars_vertex:Bf,batching_vertex:zf,begin_vertex:kf,beginnormal_vertex:Hf,bsdfs:Gf,iridescence_fragment:Vf,bumpmap_pars_fragment:Wf,clipping_planes_fragment:qf,clipping_planes_pars_fragment:Xf,clipping_planes_pars_vertex:Yf,clipping_planes_vertex:jf,color_fragment:$f,color_pars_fragment:Zf,color_pars_vertex:Kf,color_vertex:Jf,common:Qf,cube_uv_reflection_fragment:ep,defaultnormal_vertex:tp,displacementmap_pars_vertex:np,displacementmap_vertex:ip,emissivemap_fragment:rp,emissivemap_pars_fragment:ap,colorspace_fragment:sp,colorspace_pars_fragment:op,envmap_fragment:lp,envmap_common_pars_fragment:cp,envmap_pars_fragment:hp,envmap_pars_vertex:up,envmap_physical_pars_fragment:bp,envmap_vertex:dp,fog_vertex:fp,fog_pars_vertex:pp,fog_fragment:mp,fog_pars_fragment:gp,gradientmap_pars_fragment:vp,lightmap_pars_fragment:xp,lights_lambert_fragment:_p,lights_lambert_pars_fragment:yp,lights_pars_begin:Mp,lights_toon_fragment:Sp,lights_toon_pars_fragment:wp,lights_phong_fragment:Ep,lights_phong_pars_fragment:Tp,lights_physical_fragment:Ap,lights_physical_pars_fragment:Rp,lights_fragment_begin:Cp,lights_fragment_maps:Pp,lights_fragment_end:Dp,logdepthbuf_fragment:Lp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Np,logdepthbuf_vertex:Up,map_fragment:Fp,map_pars_fragment:Op,map_particle_fragment:Bp,map_particle_pars_fragment:zp,metalnessmap_fragment:kp,metalnessmap_pars_fragment:Hp,morphinstance_vertex:Gp,morphcolor_vertex:Vp,morphnormal_vertex:Wp,morphtarget_pars_vertex:qp,morphtarget_vertex:Xp,normal_fragment_begin:Yp,normal_fragment_maps:jp,normal_pars_fragment:$p,normal_pars_vertex:Zp,normal_vertex:Kp,normalmap_pars_fragment:Jp,clearcoat_normal_fragment_begin:Qp,clearcoat_normal_fragment_maps:em,clearcoat_pars_fragment:tm,iridescence_pars_fragment:nm,opaque_fragment:im,packing:rm,premultiplied_alpha_fragment:am,project_vertex:sm,dithering_fragment:om,dithering_pars_fragment:lm,roughnessmap_fragment:cm,roughnessmap_pars_fragment:hm,shadowmap_pars_fragment:um,shadowmap_pars_vertex:dm,shadowmap_vertex:fm,shadowmask_pars_fragment:pm,skinbase_vertex:mm,skinning_pars_vertex:gm,skinning_vertex:vm,skinnormal_vertex:xm,specularmap_fragment:_m,specularmap_pars_fragment:ym,tonemapping_fragment:Mm,tonemapping_pars_fragment:bm,transmission_fragment:Sm,transmission_pars_fragment:wm,uv_pars_fragment:Em,uv_pars_vertex:Tm,uv_vertex:Am,worldpos_vertex:Rm,background_vert:Cm,background_frag:Pm,backgroundCube_vert:Dm,backgroundCube_frag:Lm,cube_vert:Im,cube_frag:Nm,depth_vert:Um,depth_frag:Fm,distanceRGBA_vert:Om,distanceRGBA_frag:Bm,equirect_vert:zm,equirect_frag:km,linedashed_vert:Hm,linedashed_frag:Gm,meshbasic_vert:Vm,meshbasic_frag:Wm,meshlambert_vert:qm,meshlambert_frag:Xm,meshmatcap_vert:Ym,meshmatcap_frag:jm,meshnormal_vert:$m,meshnormal_frag:Zm,meshphong_vert:Km,meshphong_frag:Jm,meshphysical_vert:Qm,meshphysical_frag:e1,meshtoon_vert:t1,meshtoon_frag:n1,points_vert:i1,points_frag:r1,shadow_vert:a1,shadow_frag:s1,sprite_vert:o1,sprite_frag:l1},ve={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Hn={basic:{uniforms:tn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:tn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new it(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:tn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:tn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:tn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new it(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:tn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:tn([ve.points,ve.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:tn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:tn([ve.common,ve.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:tn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:tn([ve.sprite,ve.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:tn([ve.common,ve.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:tn([ve.lights,ve.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Hn.physical={uniforms:tn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Oa={r:0,b:0,g:0},qi=new Cn,c1=new At;function h1(i,e,t,n,r,a,s){const o=new it(0);let l=a===!0?0:1,c,h,u=null,d=0,m=null;function x(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?t:e).get(w)),w}function _(b){let w=!1;const M=x(b);M===null?p(o,l):M&&M.isColor&&(p(M,1),w=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,s):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,w){const M=x(w);M&&(M.isCubeTexture||M.mapping===ys)?(h===void 0&&(h=new Ke(new Ii(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Br(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),qi.copy(w.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(c1.makeRotationFromEuler(qi)),h.material.toneMapped=ct.getTransfer(M.colorSpace)!==vt,(u!==M||d!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,m=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ke(new Ss(2,2),new qn({name:"BackgroundMaterial",uniforms:Br(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ct.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,w){b.getRGB(Oa,jh(i)),n.buffers.color.setClear(Oa.r,Oa.g,Oa.b,w,s)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),l=w,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:g}}function u1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let a=r,s=!1;function o(S,U,V,W,X){let Z=!1;const K=u(W,V,U);a!==K&&(a=K,c(a.object)),Z=m(S,W,V,X),Z&&x(S,W,V,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(Z||s)&&(s=!1,M(S,U,V,W),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,U,V){const W=V.wireframe===!0;let X=n[S.id];X===void 0&&(X={},n[S.id]=X);let Z=X[U.id];Z===void 0&&(Z={},X[U.id]=Z);let K=Z[W];return K===void 0&&(K=d(l()),Z[W]=K),K}function d(S){const U=[],V=[],W=[];for(let X=0;X<t;X++)U[X]=0,V[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:W,object:S,attributes:{},index:null}}function m(S,U,V,W){const X=a.attributes,Z=U.attributes;let K=0;const te=V.getAttributes();for(const Y in te)if(te[Y].location>=0){const se=X[Y];let xe=Z[Y];if(xe===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor)),se===void 0||se.attribute!==xe||xe&&se.data!==xe.data)return!0;K++}return a.attributesNum!==K||a.index!==W}function x(S,U,V,W){const X={},Z=U.attributes;let K=0;const te=V.getAttributes();for(const Y in te)if(te[Y].location>=0){let se=Z[Y];se===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(se=S.instanceColor));const xe={};xe.attribute=se,se&&se.data&&(xe.data=se.data),X[Y]=xe,K++}a.attributes=X,a.attributesNum=K,a.index=W}function _(){const S=a.newAttributes;for(let U=0,V=S.length;U<V;U++)S[U]=0}function g(S){p(S,0)}function p(S,U){const V=a.newAttributes,W=a.enabledAttributes,X=a.attributeDivisors;V[S]=1,W[S]===0&&(i.enableVertexAttribArray(S),W[S]=1),X[S]!==U&&(i.vertexAttribDivisor(S,U),X[S]=U)}function b(){const S=a.newAttributes,U=a.enabledAttributes;for(let V=0,W=U.length;V<W;V++)U[V]!==S[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function w(S,U,V,W,X,Z,K){K===!0?i.vertexAttribIPointer(S,U,V,X,Z):i.vertexAttribPointer(S,U,V,W,X,Z)}function M(S,U,V,W){_();const X=W.attributes,Z=V.getAttributes(),K=U.defaultAttributeValues;for(const te in Z){const Y=Z[te];if(Y.location>=0){let pe=X[te];if(pe===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),pe!==void 0){const se=pe.normalized,xe=pe.itemSize,Re=e.get(pe);if(Re===void 0)continue;const He=Re.buffer,Q=Re.type,he=Re.bytesPerElement,Ae=Q===i.INT||Q===i.UNSIGNED_INT||pe.gpuType===q0;if(pe.isInterleavedBufferAttribute){const me=pe.data,Oe=me.stride,Be=pe.offset;if(me.isInstancedInterleavedBuffer){for(let et=0;et<Y.locationSize;et++)p(Y.location+et,me.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let et=0;et<Y.locationSize;et++)g(Y.location+et);i.bindBuffer(i.ARRAY_BUFFER,He);for(let et=0;et<Y.locationSize;et++)w(Y.location+et,xe/Y.locationSize,Q,se,Oe*he,(Be+xe/Y.locationSize*et)*he,Ae)}else{if(pe.isInstancedBufferAttribute){for(let me=0;me<Y.locationSize;me++)p(Y.location+me,pe.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let me=0;me<Y.locationSize;me++)g(Y.location+me);i.bindBuffer(i.ARRAY_BUFFER,He);for(let me=0;me<Y.locationSize;me++)w(Y.location+me,xe/Y.locationSize,Q,se,xe*he,xe/Y.locationSize*me*he,Ae)}}else if(K!==void 0){const se=K[te];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(Y.location,se);break;case 3:i.vertexAttrib3fv(Y.location,se);break;case 4:i.vertexAttrib4fv(Y.location,se);break;default:i.vertexAttrib1fv(Y.location,se)}}}}b()}function F(){I();for(const S in n){const U=n[S];for(const V in U){const W=U[V];for(const X in W)h(W[X].object),delete W[X];delete U[V]}delete n[S]}}function P(S){if(n[S.id]===void 0)return;const U=n[S.id];for(const V in U){const W=U[V];for(const X in W)h(W[X].object),delete W[X];delete U[V]}delete n[S.id]}function C(S){for(const U in n){const V=n[U];if(V[S.id]===void 0)continue;const W=V[S.id];for(const X in W)h(W[X].object),delete W[X];delete V[S.id]}}function I(){T(),s=!0,a!==r&&(a=r,c(a.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:T,dispose:F,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function d1(i,e,t){let n;function r(c){n=c}function a(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function s(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x];t.update(m,n,1)}function l(c,h,u,d){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)s(c[x],h[x],d[x]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*d[_];t.update(x,n,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function f1(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==Bn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==hi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ai&&!I)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=x>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:F,maxSamples:P}}function p1(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new Ti,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||r;return r=d,n=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const x=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!r||x===null||x.length===0||a&&!g)a?h(null):c();else{const b=a?0:n,w=b*4;let M=p.clippingState||null;l.value=M,M=h(x,d,w,m);for(let F=0;F!==w;++F)M[F]=t[F];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,x){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,x!==!0||g===null){const p=m+_*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,M=m;w!==_;++w,M+=4)s.copy(u[w]).applyMatrix4(b,o),s.normal.toArray(g,M),g[M+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function m1(i){let e=new WeakMap;function t(s,o){return o===Yo?s.mapping=Nr:o===jo&&(s.mapping=Ur),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Yo||o===jo)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Tf(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Jh extends $h{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Er=4,ec=[.125,.215,.35,.446,.526,.582],Ki=20,lo=new Jh,tc=new it;let co=null,ho=0,uo=0,fo=!1;const $i=(1+Math.sqrt(5))/2,Mr=1/$i,nc=[new O(-$i,Mr,0),new O($i,Mr,0),new O(-Mr,0,$i),new O(Mr,0,$i),new O(0,$i,-Mr),new O(0,$i,Mr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class ic{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){co=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(co,ho,uo),this._renderer.xr.enabled=fo,e.scissorTest=!1,Ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nr||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),co=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:ua,format:Bn,colorSpace:Gr,depthBuffer:!1},r=rc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g1(a)),this._blurMaterial=v1(a,e,t)}return r}_compileMaterial(e){const t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,lo)}_sceneToCubeUV(e,t,n,r){const o=new wn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(tc),h.toneMapping=Li,h.autoClear=!1;const m=new li({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),x=new Ke(new Ii,m);let _=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,_=!0):(m.color.copy(tc),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const w=this._cubeSize;Ba(r,b*w,p>2?w:0,w,w),h.setRenderTarget(r),_&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Nr||e.mapping===Ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ac());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Ke(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Ba(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,lo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=nc[(r-a-1)%nc.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ke(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Ki-1),_=a/x,g=isFinite(a)?1+Math.floor(h*_):Ki;g>Ki&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ki}`);const p=[];let b=0;for(let C=0;C<Ki;++C){const I=C/_,T=Math.exp(-I*I/2);p.push(T),C===0?b+=T:C<g&&(b+=2*T)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=x,d.mipInt.value=w-n;const M=this._sizeLods[r],F=3*M*(r>w-Er?r-w+Er:0),P=4*(this._cubeSize-M);Ba(t,F,P,3*M,2*M),l.setRenderTarget(t),l.render(u,lo)}}function g1(i){const e=[],t=[],n=[];let r=i;const a=i-Er+1+ec.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>i-Er?l=ec[s-i+Er-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,x=6,_=3,g=2,p=1,b=new Float32Array(_*x*m),w=new Float32Array(g*x*m),M=new Float32Array(p*x*m);for(let P=0;P<m;P++){const C=P%3*2/3-1,I=P>2?0:-1,T=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];b.set(T,_*x*P),w.set(d,g*x*P);const S=[P,P,P,P,P,P];M.set(S,p*x*P)}const F=new wt;F.setAttribute("position",new Rn(b,_)),F.setAttribute("uv",new Rn(w,g)),F.setAttribute("faceIndex",new Rn(M,p)),e.push(F),r>Er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rc(i,e,t){const n=new ir(i,e,t);return n.texture.mapping=ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ba(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function v1(i,e,t){const n=new Float32Array(Ki),r=new O(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:J0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function ac(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:J0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function sc(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:J0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function J0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function x1(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Yo||l===jo,h=l===Nr||l===Ur;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ic(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new ic(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function _1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ra("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function y1(i,e,t,n){const r={},a=new WeakMap;function s(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const _=d.morphAttributes[x];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}d.removeEventListener("dispose",s),delete r[d.id];const m=a.get(d);m&&(e.remove(m),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const x in d)e.update(d[x],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const x in m){const _=m[x];for(let g=0,p=_.length;g<p;g++)e.update(_[g],i.ARRAY_BUFFER)}}function c(u){const d=[],m=u.index,x=u.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let w=0,M=b.length;w<M;w+=3){const F=b[w+0],P=b[w+1],C=b[w+2];d.push(F,P,P,C,C,F)}}else if(x!==void 0){const b=x.array;_=x.version;for(let w=0,M=b.length/3-1;w<M;w+=3){const F=w+0,P=w+1,C=w+2;d.push(F,P,P,C,C,F)}}else return;const g=new(Hh(d)?Yh:Xh)(d,1);g.version=_;const p=a.get(u);p&&e.remove(p),a.set(u,g)}function h(u){const d=a.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function M1(i,e,t){let n;function r(d){n=d}let a,s;function o(d){a=d.type,s=d.bytesPerElement}function l(d,m){i.drawElements(n,m,a,d*s),t.update(m,n,1)}function c(d,m,x){x!==0&&(i.drawElementsInstanced(n,m,a,d*s,x),t.update(m,n,x))}function h(d,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,d,0,x);let g=0;for(let p=0;p<x;p++)g+=m[p];t.update(g,n,1)}function u(d,m,x,_){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/s,m[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,a,d,0,_,0,x);let p=0;for(let b=0;b<x;b++)p+=m[b]*_[b];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function b1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function S1(i,e,t){const n=new WeakMap,r=new Ut;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let M=0;x===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let F=o.attributes.position.count*M,P=1;F>e.maxTextureSize&&(P=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const C=new Float32Array(F*P*4*u),I=new Vh(C,F,P,u);I.type=ai,I.needsUpdate=!0;const T=M*4;for(let U=0;U<u;U++){const V=p[U],W=b[U],X=w[U],Z=F*P*4*U;for(let K=0;K<V.count;K++){const te=K*T;x===!0&&(r.fromBufferAttribute(V,K),C[Z+te+0]=r.x,C[Z+te+1]=r.y,C[Z+te+2]=r.z,C[Z+te+3]=0),_===!0&&(r.fromBufferAttribute(W,K),C[Z+te+4]=r.x,C[Z+te+5]=r.y,C[Z+te+6]=r.z,C[Z+te+7]=0),g===!0&&(r.fromBufferAttribute(X,K),C[Z+te+8]=r.x,C[Z+te+9]=r.y,C[Z+te+10]=r.z,C[Z+te+11]=X.itemSize===4?r.w:1)}}d={count:u,texture:I,size:new We(F,P)},n.set(o,d),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const _=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function w1(i,e,t,n){let r=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class Qh extends sn{constructor(e,t,n,r,a,s,o,l,c,h=Pr){if(h!==Pr&&h!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pr&&(n=nr),n===void 0&&h===Or&&(n=Fr),super(null,r,a,s,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const eu=new sn,oc=new Qh(1,1),tu=new Vh,nu=new hf,iu=new Zh,lc=[],cc=[],hc=new Float32Array(16),uc=new Float32Array(9),dc=new Float32Array(4);function Vr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=lc[r];if(a===void 0&&(a=new Float32Array(r),lc[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ws(i,e){let t=cc[e];t===void 0&&(t=new Int32Array(e),cc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function E1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function T1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function A1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function R1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function C1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Wt(t,n))return;dc.set(n),i.uniformMatrix2fv(this.addr,!1,dc),qt(t,n)}}function P1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Wt(t,n))return;uc.set(n),i.uniformMatrix3fv(this.addr,!1,uc),qt(t,n)}}function D1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Wt(t,n))return;hc.set(n),i.uniformMatrix4fv(this.addr,!1,hc),qt(t,n)}}function L1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function I1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function N1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function U1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function F1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function O1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function B1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function z1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function k1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(oc.compareFunction=kh,a=oc):a=eu,t.setTexture2D(e||a,r)}function H1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||nu,r)}function G1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||iu,r)}function V1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||tu,r)}function W1(i){switch(i){case 5126:return E1;case 35664:return T1;case 35665:return A1;case 35666:return R1;case 35674:return C1;case 35675:return P1;case 35676:return D1;case 5124:case 35670:return L1;case 35667:case 35671:return I1;case 35668:case 35672:return N1;case 35669:case 35673:return U1;case 5125:return F1;case 36294:return O1;case 36295:return B1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return k1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return G1;case 36289:case 36303:case 36311:case 36292:return V1}}function q1(i,e){i.uniform1fv(this.addr,e)}function X1(i,e){const t=Vr(e,this.size,2);i.uniform2fv(this.addr,t)}function Y1(i,e){const t=Vr(e,this.size,3);i.uniform3fv(this.addr,t)}function j1(i,e){const t=Vr(e,this.size,4);i.uniform4fv(this.addr,t)}function $1(i,e){const t=Vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Z1(i,e){const t=Vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function K1(i,e){const t=Vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function J1(i,e){i.uniform1iv(this.addr,e)}function Q1(i,e){i.uniform2iv(this.addr,e)}function e2(i,e){i.uniform3iv(this.addr,e)}function t2(i,e){i.uniform4iv(this.addr,e)}function n2(i,e){i.uniform1uiv(this.addr,e)}function i2(i,e){i.uniform2uiv(this.addr,e)}function r2(i,e){i.uniform3uiv(this.addr,e)}function a2(i,e){i.uniform4uiv(this.addr,e)}function s2(i,e,t){const n=this.cache,r=e.length,a=ws(t,r);Wt(n,a)||(i.uniform1iv(this.addr,a),qt(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||eu,a[s])}function o2(i,e,t){const n=this.cache,r=e.length,a=ws(t,r);Wt(n,a)||(i.uniform1iv(this.addr,a),qt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||nu,a[s])}function l2(i,e,t){const n=this.cache,r=e.length,a=ws(t,r);Wt(n,a)||(i.uniform1iv(this.addr,a),qt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||iu,a[s])}function c2(i,e,t){const n=this.cache,r=e.length,a=ws(t,r);Wt(n,a)||(i.uniform1iv(this.addr,a),qt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||tu,a[s])}function h2(i){switch(i){case 5126:return q1;case 35664:return X1;case 35665:return Y1;case 35666:return j1;case 35674:return $1;case 35675:return Z1;case 35676:return K1;case 5124:case 35670:return J1;case 35667:case 35671:return Q1;case 35668:case 35672:return e2;case 35669:case 35673:return t2;case 5125:return n2;case 36294:return i2;case 36295:return r2;case 36296:return a2;case 35678:case 36198:case 36298:case 36306:case 35682:return s2;case 35679:case 36299:case 36307:return o2;case 35680:case 36300:case 36308:case 36293:return l2;case 36289:case 36303:case 36311:case 36292:return c2}}class u2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=W1(t.type)}}class d2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=h2(t.type)}}class f2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const po=/(\w+)(\])?(\[|\.)?/g;function fc(i,e){i.seq.push(e),i.map[e.id]=e}function p2(i,e,t){const n=i.name,r=n.length;for(po.lastIndex=0;;){const a=po.exec(n),s=po.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){fc(t,c===void 0?new u2(o,i,e):new d2(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new f2(o),fc(t,u)),t=u}}}class os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);p2(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function pc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const m2=37297;let g2=0;function v2(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const mc=new Je;function x2(i){ct._getMatrix(mc,ct.workingColorSpace,i);const e=`mat3( ${mc.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Ms:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+v2(i.getShaderSource(e),s)}else return r}function _2(i,e){const t=x2(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function y2(i,e){let t;switch(e){case Fd:t="Linear";break;case Od:t="Reinhard";break;case Bd:t="Cineon";break;case Ah:t="ACESFilmic";break;case kd:t="AgX";break;case Hd:t="Neutral";break;case zd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const za=new O;function M2(){ct.getLuminanceCoefficients(za);const i=za.x.toFixed(4),e=za.y.toFixed(4),t=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function S2(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function w2(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function aa(i){return i!==""}function vc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E2=/^[ \t]*#include +<([\w\d./]+)>/gm;function S0(i){return i.replace(E2,A2)}const T2=new Map;function A2(i,e){let t=nt[e];if(t===void 0){const n=T2.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return S0(t)}const R2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(i){return i.replace(R2,C2)}function C2(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function yc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function P2(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Eh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===md?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function D2(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Nr:case Ur:e="ENVMAP_TYPE_CUBE";break;case ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function L2(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ur:e="ENVMAP_MODE_REFRACTION";break}return e}function I2(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Th:e="ENVMAP_BLENDING_MULTIPLY";break;case Nd:e="ENVMAP_BLENDING_MIX";break;case Ud:e="ENVMAP_BLENDING_ADD";break}return e}function N2(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function U2(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=P2(t),c=D2(t),h=L2(t),u=I2(t),d=N2(t),m=b2(t),x=S2(a),_=r.createProgram();let g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(aa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(aa).join(`
`),p.length>0&&(p+=`
`)):(g=[yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),p=[yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?nt.tonemapping_pars_fragment:"",t.toneMapping!==Li?y2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,_2("linearToOutputTexel",t.outputColorSpace),M2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),s=S0(s),s=vc(s,t),s=xc(s,t),o=S0(o),o=vc(o,t),o=xc(o,t),s=_c(s),o=_c(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=b+g+s,M=b+p+o,F=pc(r,r.VERTEX_SHADER,w),P=pc(r,r.FRAGMENT_SHADER,M);r.attachShader(_,F),r.attachShader(_,P),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(U){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(_).trim(),W=r.getShaderInfoLog(F).trim(),X=r.getShaderInfoLog(P).trim();let Z=!0,K=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,F,P);else{const te=gc(r,F,"vertex"),Y=gc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+te+`
`+Y)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(W===""||X==="")&&(K=!1);K&&(U.diagnostics={runnable:Z,programLog:V,vertexShader:{log:W,prefix:g},fragmentShader:{log:X,prefix:p}})}r.deleteShader(F),r.deleteShader(P),I=new os(r,_),T=w2(r,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,m2)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=P,this}let F2=0;class O2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new B2(e),t.set(e,n)),n}}class B2{constructor(e){this.id=F2++,this.code=e,this.usedTimes=0}}function z2(i,e,t,n,r,a,s){const o=new Wh,l=new O2,c=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,S,U,V,W){const X=V.fog,Z=W.geometry,K=T.isMeshStandardMaterial?V.environment:null,te=(T.isMeshStandardMaterial?t:e).get(T.envMap||K),Y=te&&te.mapping===ys?te.image.height:null,pe=x[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const se=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xe=se!==void 0?se.length:0;let Re=0;Z.morphAttributes.position!==void 0&&(Re=1),Z.morphAttributes.normal!==void 0&&(Re=2),Z.morphAttributes.color!==void 0&&(Re=3);let He,Q,he,Ae;if(pe){const mt=Hn[pe];He=mt.vertexShader,Q=mt.fragmentShader}else He=T.vertexShader,Q=T.fragmentShader,l.update(T),he=l.getVertexShaderID(T),Ae=l.getFragmentShaderID(T);const me=i.getRenderTarget(),Oe=i.state.buffers.depth.getReversed(),Be=W.isInstancedMesh===!0,et=W.isBatchedMesh===!0,yt=!!T.map,rt=!!T.matcap,Mt=!!te,k=!!T.aoMap,ln=!!T.lightMap,at=!!T.bumpMap,st=!!T.normalMap,ze=!!T.displacementMap,gt=!!T.emissiveMap,Fe=!!T.metalnessMap,D=!!T.roughnessMap,E=T.anisotropy>0,q=T.clearcoat>0,ne=T.dispersion>0,ae=T.iridescence>0,ee=T.sheen>0,De=T.transmission>0,ge=E&&!!T.anisotropyMap,we=q&&!!T.clearcoatMap,lt=q&&!!T.clearcoatNormalMap,de=q&&!!T.clearcoatRoughnessMap,Ce=ae&&!!T.iridescenceMap,Ge=ae&&!!T.iridescenceThicknessMap,qe=ee&&!!T.sheenColorMap,Pe=ee&&!!T.sheenRoughnessMap,ot=!!T.specularMap,tt=!!T.specularColorMap,bt=!!T.specularIntensityMap,z=De&&!!T.transmissionMap,_e=De&&!!T.thicknessMap,J=!!T.gradientMap,ie=!!T.alphaMap,Ee=T.alphaTest>0,Me=!!T.alphaHash,$e=!!T.extensions;let It=Li;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(It=i.toneMapping);const jt={shaderID:pe,shaderType:T.type,shaderName:T.name,vertexShader:He,fragmentShader:Q,defines:T.defines,customVertexShaderID:he,customFragmentShaderID:Ae,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:et,batchingColor:et&&W._colorsTexture!==null,instancing:Be,instancingColor:Be&&W.instanceColor!==null,instancingMorph:Be&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Gr,alphaToCoverage:!!T.alphaToCoverage,map:yt,matcap:rt,envMap:Mt,envMapMode:Mt&&te.mapping,envMapCubeUVHeight:Y,aoMap:k,lightMap:ln,bumpMap:at,normalMap:st,displacementMap:d&&ze,emissiveMap:gt,normalMapObjectSpace:st&&T.normalMapType===qd,normalMapTangentSpace:st&&T.normalMapType===zh,metalnessMap:Fe,roughnessMap:D,anisotropy:E,anisotropyMap:ge,clearcoat:q,clearcoatMap:we,clearcoatNormalMap:lt,clearcoatRoughnessMap:de,dispersion:ne,iridescence:ae,iridescenceMap:Ce,iridescenceThicknessMap:Ge,sheen:ee,sheenColorMap:qe,sheenRoughnessMap:Pe,specularMap:ot,specularColorMap:tt,specularIntensityMap:bt,transmission:De,transmissionMap:z,thicknessMap:_e,gradientMap:J,opaque:T.transparent===!1&&T.blending===Cr&&T.alphaToCoverage===!1,alphaMap:ie,alphaTest:Ee,alphaHash:Me,combine:T.combine,mapUv:yt&&_(T.map.channel),aoMapUv:k&&_(T.aoMap.channel),lightMapUv:ln&&_(T.lightMap.channel),bumpMapUv:at&&_(T.bumpMap.channel),normalMapUv:st&&_(T.normalMap.channel),displacementMapUv:ze&&_(T.displacementMap.channel),emissiveMapUv:gt&&_(T.emissiveMap.channel),metalnessMapUv:Fe&&_(T.metalnessMap.channel),roughnessMapUv:D&&_(T.roughnessMap.channel),anisotropyMapUv:ge&&_(T.anisotropyMap.channel),clearcoatMapUv:we&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:lt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(T.sheenRoughnessMap.channel),specularMapUv:ot&&_(T.specularMap.channel),specularColorMapUv:tt&&_(T.specularColorMap.channel),specularIntensityMapUv:bt&&_(T.specularIntensityMap.channel),transmissionMapUv:z&&_(T.transmissionMap.channel),thicknessMapUv:_e&&_(T.thicknessMap.channel),alphaMapUv:ie&&_(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(st||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Z.attributes.uv&&(yt||ie),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Oe,skinning:W.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Re,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:yt&&T.map.isVideoTexture===!0&&ct.getTransfer(T.map.colorSpace)===vt,decodeVideoTextureEmissive:gt&&T.emissiveMap.isVideoTexture===!0&&ct.getTransfer(T.emissiveMap.colorSpace)===vt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===En,flipSided:T.side===Jt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:$e&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&T.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function p(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)S.push(U),S.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(b(S,T),w(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function b(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function w(T,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),T.push(o.mask)}function M(T){const S=x[T.type];let U;if(S){const V=Hn[S];U=bf.clone(V.uniforms)}else U=T.uniforms;return U}function F(T,S){let U;for(let V=0,W=h.length;V<W;V++){const X=h[V];if(X.cacheKey===S){U=X,++U.usedTimes;break}}return U===void 0&&(U=new U2(i,S,T,a),h.push(U)),U}function P(T){if(--T.usedTimes===0){const S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function C(T){l.remove(T)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:F,releaseProgram:P,releaseShaderCache:C,programs:h,dispose:I}}function k2(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,l){i.get(s)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function H2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bc(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(u,d,m,x,_,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:x,renderOrder:u.renderOrder,z:_,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function o(u,d,m,x,_,g){const p=s(u,d,m,x,_,g);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(u,d,m,x,_,g){const p=s(u,d,m,x,_,g);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||H2),n.length>1&&n.sort(d||Mc),r.length>1&&r.sort(d||Mc)}function h(){for(let u=e,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:l,finish:h,sort:c}}function G2(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new bc,i.set(n,[s])):r>=a.length?(s=new bc,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function V2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new it};break;case"SpotLight":t={position:new O,direction:new O,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function W2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let q2=0;function X2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Y2(i){const e=new V2,t=W2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const r=new O,a=new At,s=new At;function o(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,x=0,_=0,g=0,p=0,b=0,w=0,M=0,F=0,P=0,C=0;c.sort(X2);for(let T=0,S=c.length;T<S;T++){const U=c[T],V=U.color,W=U.intensity,X=U.distance,Z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=V.r*W,u+=V.g*W,d+=V.b*W;else if(U.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(U.sh.coefficients[K],W);C++}else if(U.isDirectionalLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const te=U.shadow,Y=t.get(U);Y.shadowIntensity=te.intensity,Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=U.shadow.matrix,b++}n.directional[m]=K,m++}else if(U.isSpotLight){const K=e.get(U);K.position.setFromMatrixPosition(U.matrixWorld),K.color.copy(V).multiplyScalar(W),K.distance=X,K.coneCos=Math.cos(U.angle),K.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),K.decay=U.decay,n.spot[_]=K;const te=U.shadow;if(U.map&&(n.spotLightMap[F]=U.map,F++,te.updateMatrices(U),U.castShadow&&P++),n.spotLightMatrix[_]=te.matrix,U.castShadow){const Y=t.get(U);Y.shadowIntensity=te.intensity,Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=Z,M++}_++}else if(U.isRectAreaLight){const K=e.get(U);K.color.copy(V).multiplyScalar(W),K.halfWidth.set(U.width*.5,0,0),K.halfHeight.set(0,U.height*.5,0),n.rectArea[g]=K,g++}else if(U.isPointLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),K.distance=U.distance,K.decay=U.decay,U.castShadow){const te=U.shadow,Y=t.get(U);Y.shadowIntensity=te.intensity,Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,Y.shadowCameraNear=te.camera.near,Y.shadowCameraFar=te.camera.far,n.pointShadow[x]=Y,n.pointShadowMap[x]=Z,n.pointShadowMatrix[x]=U.shadow.matrix,w++}n.point[x]=K,x++}else if(U.isHemisphereLight){const K=e.get(U);K.skyColor.copy(U.color).multiplyScalar(W),K.groundColor.copy(U.groundColor).multiplyScalar(W),n.hemi[p]=K,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==m||I.pointLength!==x||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==w||I.numSpotShadows!==M||I.numSpotMaps!==F||I.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=g,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+F-P,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,I.directionalLength=m,I.pointLength=x,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=w,I.numSpotShadows=M,I.numSpotMaps=F,I.numLightProbes=C,n.version=q2++)}function l(c,h){let u=0,d=0,m=0,x=0,_=0;const g=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const w=c[p];if(w.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),u++}else if(w.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),m++}else if(w.isRectAreaLight){const M=n.rectArea[x];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),s.identity(),a.copy(w.matrixWorld),a.premultiply(g),s.extractRotation(a),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),x++}else if(w.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(g),d++}else if(w.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function Sc(i){const e=new Y2(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function s(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function j2(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Sc(i),e.set(r,[o])):a>=s.length?(o=new Sc(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class $2 extends ar{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Z2 extends ar{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const K2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Q2(i,e,t){let n=new K0;const r=new We,a=new We,s=new Ut,o=new $2({depthPacking:Wd}),l=new Z2,c={},h=t.maxTextureSize,u={[Ni]:Jt,[Jt]:Ni,[En]:En},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:K2,fragmentShader:J2}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new wt;x.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ke(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let p=this.type;this.render=function(P,C,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const T=i.getRenderTarget(),S=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Di),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=p!==ii&&this.type===ii,X=p===ii&&this.type!==ii;for(let Z=0,K=P.length;Z<K;Z++){const te=P[Z],Y=te.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const pe=Y.getFrameExtents();if(r.multiply(pe),a.copy(Y.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/pe.x),r.x=a.x*pe.x,Y.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/pe.y),r.y=a.y*pe.y,Y.mapSize.y=a.y)),Y.map===null||W===!0||X===!0){const xe=this.type!==ii?{minFilter:zn,magFilter:zn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ir(r.x,r.y,xe),Y.map.texture.name=te.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const se=Y.getViewportCount();for(let xe=0;xe<se;xe++){const Re=Y.getViewport(xe);s.set(a.x*Re.x,a.y*Re.y,a.x*Re.z,a.y*Re.w),V.viewport(s),Y.updateMatrices(te,xe),n=Y.getFrustum(),M(C,I,Y.camera,te,this.type)}Y.isPointLightShadow!==!0&&this.type===ii&&b(Y,I),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,S,U)};function b(P,C){const I=e.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ir(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(C,null,I,d,_,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(C,null,I,m,_,null)}function w(P,C,I,T){let S=null;const U=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)S=U;else if(S=I.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=S.uuid,W=C.uuid;let X=c[V];X===void 0&&(X={},c[V]=X);let Z=X[W];Z===void 0&&(Z=S.clone(),X[W]=Z,C.addEventListener("dispose",F)),S=Z}if(S.visible=C.visible,S.wireframe=C.wireframe,T===ii?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=i.properties.get(S);V.light=I}return S}function M(P,C,I,T,S){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===ii)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const W=e.update(P),X=P.material;if(Array.isArray(X)){const Z=W.groups;for(let K=0,te=Z.length;K<te;K++){const Y=Z[K],pe=X[Y.materialIndex];if(pe&&pe.visible){const se=w(P,pe,T,S);P.onBeforeShadow(i,P,C,I,W,se,Y),i.renderBufferDirect(I,null,W,se,P,Y),P.onAfterShadow(i,P,C,I,W,se,Y)}}}else if(X.visible){const Z=w(P,X,T,S);P.onBeforeShadow(i,P,C,I,W,Z,null),i.renderBufferDirect(I,null,W,Z,P,null),P.onAfterShadow(i,P,C,I,W,Z,null)}}const V=P.children;for(let W=0,X=V.length;W<X;W++)M(V[W],C,I,T,S)}function F(P){P.target.removeEventListener("dispose",F);for(const I in c){const T=c[I],S=P.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const eg={[ko]:Ho,[Go]:qo,[Vo]:Xo,[Ir]:Wo,[Ho]:ko,[qo]:Go,[Xo]:Vo,[Wo]:Ir};function tg(i,e){function t(){let z=!1;const _e=new Ut;let J=null;const ie=new Ut(0,0,0,0);return{setMask:function(Ee){J!==Ee&&!z&&(i.colorMask(Ee,Ee,Ee,Ee),J=Ee)},setLocked:function(Ee){z=Ee},setClear:function(Ee,Me,$e,It,jt){jt===!0&&(Ee*=It,Me*=It,$e*=It),_e.set(Ee,Me,$e,It),ie.equals(_e)===!1&&(i.clearColor(Ee,Me,$e,It),ie.copy(_e))},reset:function(){z=!1,J=null,ie.set(-1,0,0,0)}}}function n(){let z=!1,_e=!1,J=null,ie=null,Ee=null;return{setReversed:function(Me){if(_e!==Me){const $e=e.get("EXT_clip_control");_e?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const It=Ee;Ee=null,this.setClear(It)}_e=Me},getReversed:function(){return _e},setTest:function(Me){Me?me(i.DEPTH_TEST):Oe(i.DEPTH_TEST)},setMask:function(Me){J!==Me&&!z&&(i.depthMask(Me),J=Me)},setFunc:function(Me){if(_e&&(Me=eg[Me]),ie!==Me){switch(Me){case ko:i.depthFunc(i.NEVER);break;case Ho:i.depthFunc(i.ALWAYS);break;case Go:i.depthFunc(i.LESS);break;case Ir:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case Wo:i.depthFunc(i.GEQUAL);break;case qo:i.depthFunc(i.GREATER);break;case Xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=Me}},setLocked:function(Me){z=Me},setClear:function(Me){Ee!==Me&&(_e&&(Me=1-Me),i.clearDepth(Me),Ee=Me)},reset:function(){z=!1,J=null,ie=null,Ee=null,_e=!1}}}function r(){let z=!1,_e=null,J=null,ie=null,Ee=null,Me=null,$e=null,It=null,jt=null;return{setTest:function(mt){z||(mt?me(i.STENCIL_TEST):Oe(i.STENCIL_TEST))},setMask:function(mt){_e!==mt&&!z&&(i.stencilMask(mt),_e=mt)},setFunc:function(mt,Dn,$n){(J!==mt||ie!==Dn||Ee!==$n)&&(i.stencilFunc(mt,Dn,$n),J=mt,ie=Dn,Ee=$n)},setOp:function(mt,Dn,$n){(Me!==mt||$e!==Dn||It!==$n)&&(i.stencilOp(mt,Dn,$n),Me=mt,$e=Dn,It=$n)},setLocked:function(mt){z=mt},setClear:function(mt){jt!==mt&&(i.clearStencil(mt),jt=mt)},reset:function(){z=!1,_e=null,J=null,ie=null,Ee=null,Me=null,$e=null,It=null,jt=null}}}const a=new t,s=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,m=[],x=null,_=!1,g=null,p=null,b=null,w=null,M=null,F=null,P=null,C=new it(0,0,0),I=0,T=!1,S=null,U=null,V=null,W=null,X=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,te=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=te>=1):Y.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=te>=2);let pe=null,se={};const xe=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),He=new Ut().fromArray(xe),Q=new Ut().fromArray(Re);function he(z,_e,J,ie){const Ee=new Uint8Array(4),Me=i.createTexture();i.bindTexture(z,Me),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<J;$e++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(_e+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return Me}const Ae={};Ae[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(i.DEPTH_TEST),s.setFunc(Ir),at(!1),st(Rl),me(i.CULL_FACE),k(Di);function me(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Oe(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Be(z,_e){return u[z]!==_e?(i.bindFramebuffer(z,_e),u[z]=_e,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_e),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function et(z,_e){let J=m,ie=!1;if(z){J=d.get(_e),J===void 0&&(J=[],d.set(_e,J));const Ee=z.textures;if(J.length!==Ee.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,$e=Ee.length;Me<$e;Me++)J[Me]=i.COLOR_ATTACHMENT0+Me;J.length=Ee.length,ie=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ie=!0);ie&&i.drawBuffers(J)}function yt(z){return x!==z?(i.useProgram(z),x=z,!0):!1}const rt={[Zi]:i.FUNC_ADD,[vd]:i.FUNC_SUBTRACT,[xd]:i.FUNC_REVERSE_SUBTRACT};rt[_d]=i.MIN,rt[yd]=i.MAX;const Mt={[Md]:i.ZERO,[bd]:i.ONE,[Sd]:i.SRC_COLOR,[Bo]:i.SRC_ALPHA,[Cd]:i.SRC_ALPHA_SATURATE,[Ad]:i.DST_COLOR,[Ed]:i.DST_ALPHA,[wd]:i.ONE_MINUS_SRC_COLOR,[zo]:i.ONE_MINUS_SRC_ALPHA,[Rd]:i.ONE_MINUS_DST_COLOR,[Td]:i.ONE_MINUS_DST_ALPHA,[Pd]:i.CONSTANT_COLOR,[Dd]:i.ONE_MINUS_CONSTANT_COLOR,[Ld]:i.CONSTANT_ALPHA,[Id]:i.ONE_MINUS_CONSTANT_ALPHA};function k(z,_e,J,ie,Ee,Me,$e,It,jt,mt){if(z===Di){_===!0&&(Oe(i.BLEND),_=!1);return}if(_===!1&&(me(i.BLEND),_=!0),z!==gd){if(z!==g||mt!==T){if((p!==Zi||M!==Zi)&&(i.blendEquation(i.FUNC_ADD),p=Zi,M=Zi),mt)switch(z){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tr:i.blendFunc(i.ONE,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,w=null,F=null,P=null,C.set(0,0,0),I=0,g=z,T=mt}return}Ee=Ee||_e,Me=Me||J,$e=$e||ie,(_e!==p||Ee!==M)&&(i.blendEquationSeparate(rt[_e],rt[Ee]),p=_e,M=Ee),(J!==b||ie!==w||Me!==F||$e!==P)&&(i.blendFuncSeparate(Mt[J],Mt[ie],Mt[Me],Mt[$e]),b=J,w=ie,F=Me,P=$e),(It.equals(C)===!1||jt!==I)&&(i.blendColor(It.r,It.g,It.b,jt),C.copy(It),I=jt),g=z,T=!1}function ln(z,_e){z.side===En?Oe(i.CULL_FACE):me(i.CULL_FACE);let J=z.side===Jt;_e&&(J=!J),at(J),z.blending===Cr&&z.transparent===!1?k(Di):k(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),a.setMask(z.colorWrite);const ie=z.stencilWrite;o.setTest(ie),ie&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),gt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(z){S!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),S=z)}function st(z){z!==fd?(me(i.CULL_FACE),z!==U&&(z===Rl?i.cullFace(i.BACK):z===pd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Oe(i.CULL_FACE),U=z}function ze(z){z!==V&&(K&&i.lineWidth(z),V=z)}function gt(z,_e,J){z?(me(i.POLYGON_OFFSET_FILL),(W!==_e||X!==J)&&(i.polygonOffset(_e,J),W=_e,X=J)):Oe(i.POLYGON_OFFSET_FILL)}function Fe(z){z?me(i.SCISSOR_TEST):Oe(i.SCISSOR_TEST)}function D(z){z===void 0&&(z=i.TEXTURE0+Z-1),pe!==z&&(i.activeTexture(z),pe=z)}function E(z,_e,J){J===void 0&&(pe===null?J=i.TEXTURE0+Z-1:J=pe);let ie=se[J];ie===void 0&&(ie={type:void 0,texture:void 0},se[J]=ie),(ie.type!==z||ie.texture!==_e)&&(pe!==J&&(i.activeTexture(J),pe=J),i.bindTexture(z,_e||Ae[z]),ie.type=z,ie.texture=_e)}function q(){const z=se[pe];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ge(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qe(z){He.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),He.copy(z))}function Pe(z){Q.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Q.copy(z))}function ot(z,_e){let J=c.get(_e);J===void 0&&(J=new WeakMap,c.set(_e,J));let ie=J.get(z);ie===void 0&&(ie=i.getUniformBlockIndex(_e,z.name),J.set(z,ie))}function tt(z,_e){const ie=c.get(_e).get(z);l.get(_e)!==ie&&(i.uniformBlockBinding(_e,ie,z.__bindingPointIndex),l.set(_e,ie))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pe=null,se={},u={},d=new WeakMap,m=[],x=null,_=!1,g=null,p=null,b=null,w=null,M=null,F=null,P=null,C=new it(0,0,0),I=0,T=!1,S=null,U=null,V=null,W=null,X=null,He.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:me,disable:Oe,bindFramebuffer:Be,drawBuffers:et,useProgram:yt,setBlending:k,setMaterial:ln,setFlipSided:at,setCullFace:st,setLineWidth:ze,setPolygonOffset:gt,setScissorTest:Fe,activeTexture:D,bindTexture:E,unbindTexture:q,compressedTexImage2D:ne,compressedTexImage3D:ae,texImage2D:Ce,texImage3D:Ge,updateUBOMapping:ot,uniformBlockBinding:tt,texStorage2D:lt,texStorage3D:de,texSubImage2D:ee,texSubImage3D:De,compressedTexSubImage2D:ge,compressedTexSubImage3D:we,scissor:qe,viewport:Pe,reset:bt}}function wc(i,e,t,n){const r=ng(n);switch(t){case Lh:return i*e;case Nh:return i*e;case Uh:return i*e*2;case Fh:return i*e/r.components*r.byteLength;case j0:return i*e/r.components*r.byteLength;case Oh:return i*e*2/r.components*r.byteLength;case $0:return i*e*2/r.components*r.byteLength;case Ih:return i*e*3/r.components*r.byteLength;case Bn:return i*e*4/r.components*r.byteLength;case Z0:return i*e*4/r.components*r.byteLength;case ts:case ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case is:case rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:case Qo:return Math.max(i,16)*Math.max(e,8)/4;case Zo:case Jo:return Math.max(i,8)*Math.max(e,8)/2;case e0:case t0:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case n0:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case i0:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case r0:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case a0:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case s0:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case o0:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case l0:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case c0:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case h0:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case u0:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case d0:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case f0:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case p0:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case m0:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case g0:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case as:case v0:case x0:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bh:case _0:return Math.ceil(i/4)*Math.ceil(e/4)*8;case y0:case M0:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ng(i){switch(i){case hi:case Ch:return{byteLength:1,components:1};case la:case Ph:case ua:return{byteLength:2,components:1};case X0:case Y0:return{byteLength:2,components:4};case nr:case q0:case ai:return{byteLength:4,components:1};case Dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ig(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,E){return m?new OffscreenCanvas(D,E):ds("canvas")}function _(D,E,q){let ne=1;const ae=Fe(D);if((ae.width>q||ae.height>q)&&(ne=q/Math.max(ae.width,ae.height)),ne<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ee=Math.floor(ne*ae.width),De=Math.floor(ne*ae.height);u===void 0&&(u=x(ee,De));const ge=E?x(ee,De):u;return ge.width=ee,ge.height=De,ge.getContext("2d").drawImage(D,0,0,ee,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ee+"x"+De+")."),ge}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),D;return D}function g(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(D,E,q,ne,ae=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ee=E;if(E===i.RED&&(q===i.FLOAT&&(ee=i.R32F),q===i.HALF_FLOAT&&(ee=i.R16F),q===i.UNSIGNED_BYTE&&(ee=i.R8)),E===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.R8UI),q===i.UNSIGNED_SHORT&&(ee=i.R16UI),q===i.UNSIGNED_INT&&(ee=i.R32UI),q===i.BYTE&&(ee=i.R8I),q===i.SHORT&&(ee=i.R16I),q===i.INT&&(ee=i.R32I)),E===i.RG&&(q===i.FLOAT&&(ee=i.RG32F),q===i.HALF_FLOAT&&(ee=i.RG16F),q===i.UNSIGNED_BYTE&&(ee=i.RG8)),E===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RG8UI),q===i.UNSIGNED_SHORT&&(ee=i.RG16UI),q===i.UNSIGNED_INT&&(ee=i.RG32UI),q===i.BYTE&&(ee=i.RG8I),q===i.SHORT&&(ee=i.RG16I),q===i.INT&&(ee=i.RG32I)),E===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),q===i.UNSIGNED_INT&&(ee=i.RGB32UI),q===i.BYTE&&(ee=i.RGB8I),q===i.SHORT&&(ee=i.RGB16I),q===i.INT&&(ee=i.RGB32I)),E===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),q===i.UNSIGNED_INT&&(ee=i.RGBA32UI),q===i.BYTE&&(ee=i.RGBA8I),q===i.SHORT&&(ee=i.RGBA16I),q===i.INT&&(ee=i.RGBA32I)),E===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),E===i.RGBA){const De=ae?Ms:ct.getTransfer(ne);q===i.FLOAT&&(ee=i.RGBA32F),q===i.HALF_FLOAT&&(ee=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ee=De===vt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function M(D,E){let q;return D?E===null||E===nr||E===Fr?q=i.DEPTH24_STENCIL8:E===ai?q=i.DEPTH32F_STENCIL8:E===la&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===nr||E===Fr?q=i.DEPTH_COMPONENT24:E===ai?q=i.DEPTH_COMPONENT32F:E===la&&(q=i.DEPTH_COMPONENT16),q}function F(D,E){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==zn&&D.minFilter!==Vn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function P(D){const E=D.target;E.removeEventListener("dispose",P),I(E),E.isVideoTexture&&h.delete(E)}function C(D){const E=D.target;E.removeEventListener("dispose",C),S(E)}function I(D){const E=n.get(D);if(E.__webglInit===void 0)return;const q=D.source,ne=d.get(q);if(ne){const ae=ne[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&T(D),Object.keys(ne).length===0&&d.delete(q)}n.remove(D)}function T(D){const E=n.get(D);i.deleteTexture(E.__webglTexture);const q=D.source,ne=d.get(q);delete ne[E.__cacheKey],s.memory.textures--}function S(D){const E=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let ae=0;ae<E.__webglFramebuffer[ne].length;ae++)i.deleteFramebuffer(E.__webglFramebuffer[ne][ae]);else i.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)i.deleteFramebuffer(E.__webglFramebuffer[ne]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=D.textures;for(let ne=0,ae=q.length;ne<ae;ne++){const ee=n.get(q[ne]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),s.memory.textures--),n.remove(q[ne])}n.remove(D)}let U=0;function V(){U=0}function W(){const D=U;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),U+=1,D}function X(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function Z(D,E){const q=n.get(D);if(D.isVideoTexture&&ze(D),D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){const ne=D.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(q,D,E);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+E)}function K(D,E){const q=n.get(D);if(D.version>0&&q.__version!==D.version){Q(q,D,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+E)}function te(D,E){const q=n.get(D);if(D.version>0&&q.__version!==D.version){Q(q,D,E);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+E)}function Y(D,E){const q=n.get(D);if(D.version>0&&q.__version!==D.version){he(q,D,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+E)}const pe={[Ai]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[$o]:i.MIRRORED_REPEAT},se={[zn]:i.NEAREST,[Gd]:i.NEAREST_MIPMAP_NEAREST,[_a]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[ks]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},xe={[Xd]:i.NEVER,[Jd]:i.ALWAYS,[Yd]:i.LESS,[kh]:i.LEQUAL,[jd]:i.EQUAL,[Kd]:i.GEQUAL,[$d]:i.GREATER,[Zd]:i.NOTEQUAL};function Re(D,E){if(E.type===ai&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Vn||E.magFilter===ks||E.magFilter===_a||E.magFilter===Qi||E.minFilter===Vn||E.minFilter===ks||E.minFilter===_a||E.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,pe[E.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,pe[E.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,pe[E.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,se[E.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,xe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===zn||E.minFilter!==_a&&E.minFilter!==Qi||E.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function He(D,E){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",P));const ne=E.source;let ae=d.get(ne);ae===void 0&&(ae={},d.set(ne,ae));const ee=X(E);if(ee!==D.__cacheKey){ae[ee]===void 0&&(ae[ee]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,q=!0),ae[ee].usedTimes++;const De=ae[D.__cacheKey];De!==void 0&&(ae[D.__cacheKey].usedTimes--,De.usedTimes===0&&T(E)),D.__cacheKey=ee,D.__webglTexture=ae[ee].texture}return q}function Q(D,E,q){let ne=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=i.TEXTURE_3D);const ae=He(D,E),ee=E.source;t.bindTexture(ne,D.__webglTexture,i.TEXTURE0+q);const De=n.get(ee);if(ee.version!==De.__version||ae===!0){t.activeTexture(i.TEXTURE0+q);const ge=ct.getPrimaries(ct.workingColorSpace),we=E.colorSpace===Ri?null:ct.getPrimaries(E.colorSpace),lt=E.colorSpace===Ri||ge===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let de=_(E.image,!1,r.maxTextureSize);de=gt(E,de);const Ce=a.convert(E.format,E.colorSpace),Ge=a.convert(E.type);let qe=w(E.internalFormat,Ce,Ge,E.colorSpace,E.isVideoTexture);Re(ne,E);let Pe;const ot=E.mipmaps,tt=E.isVideoTexture!==!0,bt=De.__version===void 0||ae===!0,z=ee.dataReady,_e=F(E,de);if(E.isDepthTexture)qe=M(E.format===Or,E.type),bt&&(tt?t.texStorage2D(i.TEXTURE_2D,1,qe,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,qe,de.width,de.height,0,Ce,Ge,null));else if(E.isDataTexture)if(ot.length>0){tt&&bt&&t.texStorage2D(i.TEXTURE_2D,_e,qe,ot[0].width,ot[0].height);for(let J=0,ie=ot.length;J<ie;J++)Pe=ot[J],tt?z&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Pe.width,Pe.height,Ce,Ge,Pe.data):t.texImage2D(i.TEXTURE_2D,J,qe,Pe.width,Pe.height,0,Ce,Ge,Pe.data);E.generateMipmaps=!1}else tt?(bt&&t.texStorage2D(i.TEXTURE_2D,_e,qe,de.width,de.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,Ce,Ge,de.data)):t.texImage2D(i.TEXTURE_2D,0,qe,de.width,de.height,0,Ce,Ge,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){tt&&bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,qe,ot[0].width,ot[0].height,de.depth);for(let J=0,ie=ot.length;J<ie;J++)if(Pe=ot[J],E.format!==Bn)if(Ce!==null)if(tt){if(z)if(E.layerUpdates.size>0){const Ee=wc(Pe.width,Pe.height,E.format,E.type);for(const Me of E.layerUpdates){const $e=Pe.data.subarray(Me*Ee/Pe.data.BYTES_PER_ELEMENT,(Me+1)*Ee/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Me,Pe.width,Pe.height,1,Ce,$e)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Pe.width,Pe.height,de.depth,Ce,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,qe,Pe.width,Pe.height,de.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Pe.width,Pe.height,de.depth,Ce,Ge,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,qe,Pe.width,Pe.height,de.depth,0,Ce,Ge,Pe.data)}else{tt&&bt&&t.texStorage2D(i.TEXTURE_2D,_e,qe,ot[0].width,ot[0].height);for(let J=0,ie=ot.length;J<ie;J++)Pe=ot[J],E.format!==Bn?Ce!==null?tt?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Pe.width,Pe.height,Ce,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,J,qe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?z&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Pe.width,Pe.height,Ce,Ge,Pe.data):t.texImage2D(i.TEXTURE_2D,J,qe,Pe.width,Pe.height,0,Ce,Ge,Pe.data)}else if(E.isDataArrayTexture)if(tt){if(bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,qe,de.width,de.height,de.depth),z)if(E.layerUpdates.size>0){const J=wc(de.width,de.height,E.format,E.type);for(const ie of E.layerUpdates){const Ee=de.data.subarray(ie*J/de.data.BYTES_PER_ELEMENT,(ie+1)*J/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,de.width,de.height,1,Ce,Ge,Ee)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ce,Ge,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,qe,de.width,de.height,de.depth,0,Ce,Ge,de.data);else if(E.isData3DTexture)tt?(bt&&t.texStorage3D(i.TEXTURE_3D,_e,qe,de.width,de.height,de.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ce,Ge,de.data)):t.texImage3D(i.TEXTURE_3D,0,qe,de.width,de.height,de.depth,0,Ce,Ge,de.data);else if(E.isFramebufferTexture){if(bt)if(tt)t.texStorage2D(i.TEXTURE_2D,_e,qe,de.width,de.height);else{let J=de.width,ie=de.height;for(let Ee=0;Ee<_e;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,qe,J,ie,0,Ce,Ge,null),J>>=1,ie>>=1}}else if(ot.length>0){if(tt&&bt){const J=Fe(ot[0]);t.texStorage2D(i.TEXTURE_2D,_e,qe,J.width,J.height)}for(let J=0,ie=ot.length;J<ie;J++)Pe=ot[J],tt?z&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ce,Ge,Pe):t.texImage2D(i.TEXTURE_2D,J,qe,Ce,Ge,Pe);E.generateMipmaps=!1}else if(tt){if(bt){const J=Fe(de);t.texStorage2D(i.TEXTURE_2D,_e,qe,J.width,J.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,Ge,de)}else t.texImage2D(i.TEXTURE_2D,0,qe,Ce,Ge,de);g(E)&&p(ne),De.__version=ee.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function he(D,E,q){if(E.image.length!==6)return;const ne=He(D,E),ae=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+q);const ee=n.get(ae);if(ae.version!==ee.__version||ne===!0){t.activeTexture(i.TEXTURE0+q);const De=ct.getPrimaries(ct.workingColorSpace),ge=E.colorSpace===Ri?null:ct.getPrimaries(E.colorSpace),we=E.colorSpace===Ri||De===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,de=E.image[0]&&E.image[0].isDataTexture,Ce=[];for(let ie=0;ie<6;ie++)!lt&&!de?Ce[ie]=_(E.image[ie],!0,r.maxCubemapSize):Ce[ie]=de?E.image[ie].image:E.image[ie],Ce[ie]=gt(E,Ce[ie]);const Ge=Ce[0],qe=a.convert(E.format,E.colorSpace),Pe=a.convert(E.type),ot=w(E.internalFormat,qe,Pe,E.colorSpace),tt=E.isVideoTexture!==!0,bt=ee.__version===void 0||ne===!0,z=ae.dataReady;let _e=F(E,Ge);Re(i.TEXTURE_CUBE_MAP,E);let J;if(lt){tt&&bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,ot,Ge.width,Ge.height);for(let ie=0;ie<6;ie++){J=Ce[ie].mipmaps;for(let Ee=0;Ee<J.length;Ee++){const Me=J[Ee];E.format!==Bn?qe!==null?tt?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,Me.width,Me.height,qe,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,ot,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,Me.width,Me.height,qe,Pe,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,ot,Me.width,Me.height,0,qe,Pe,Me.data)}}}else{if(J=E.mipmaps,tt&&bt){J.length>0&&_e++;const ie=Fe(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,ot,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(de){tt?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ce[ie].width,Ce[ie].height,qe,Pe,Ce[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ot,Ce[ie].width,Ce[ie].height,0,qe,Pe,Ce[ie].data);for(let Ee=0;Ee<J.length;Ee++){const $e=J[Ee].image[ie].image;tt?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,$e.width,$e.height,qe,Pe,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,ot,$e.width,$e.height,0,qe,Pe,$e.data)}}else{tt?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,qe,Pe,Ce[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ot,qe,Pe,Ce[ie]);for(let Ee=0;Ee<J.length;Ee++){const Me=J[Ee];tt?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,qe,Pe,Me.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,ot,qe,Pe,Me.image[ie])}}}g(E)&&p(i.TEXTURE_CUBE_MAP),ee.__version=ae.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Ae(D,E,q,ne,ae,ee){const De=a.convert(q.format,q.colorSpace),ge=a.convert(q.type),we=w(q.internalFormat,De,ge,q.colorSpace),lt=n.get(E),de=n.get(q);if(de.__renderTarget=E,!lt.__hasExternalTextures){const Ce=Math.max(1,E.width>>ee),Ge=Math.max(1,E.height>>ee);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ee,we,Ce,Ge,E.depth,0,De,ge,null):t.texImage2D(ae,ee,we,Ce,Ge,0,De,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),st(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ae,de.__webglTexture,0,at(E)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ae,de.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(D,E,q){if(i.bindRenderbuffer(i.RENDERBUFFER,D),E.depthBuffer){const ne=E.depthTexture,ae=ne&&ne.isDepthTexture?ne.type:null,ee=M(E.stencilBuffer,ae),De=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=at(E);st(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ee,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ee,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ee,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,D)}else{const ne=E.textures;for(let ae=0;ae<ne.length;ae++){const ee=ne[ae],De=a.convert(ee.format,ee.colorSpace),ge=a.convert(ee.type),we=w(ee.internalFormat,De,ge,ee.colorSpace),lt=at(E);q&&st(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,we,E.width,E.height):st(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,we,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,we,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(E.depthTexture);ne.__renderTarget=E,(!ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);const ae=ne.__webglTexture,ee=at(E);if(E.depthTexture.format===Pr)st(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(E.depthTexture.format===Or)st(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Be(D){const E=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ne=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ne){const ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ne.removeEventListener("dispose",ae)};ne.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=ne}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Oe(E.__webglFramebuffer,D)}else if(q){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]===void 0)E.__webglDepthbuffer[ne]=i.createRenderbuffer(),me(E.__webglDepthbuffer[ne],D,!1);else{const ae=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=E.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),me(E.__webglDepthbuffer,D,!1);else{const ne=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(D,E,q){const ne=n.get(D);E!==void 0&&Ae(ne.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Be(D)}function yt(D){const E=D.texture,q=n.get(D),ne=n.get(E);D.addEventListener("dispose",C);const ae=D.textures,ee=D.isWebGLCubeRenderTarget===!0,De=ae.length>1;if(De||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=E.version,s.memory.textures++),ee){q.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[ge]=[];for(let we=0;we<E.mipmaps.length;we++)q.__webglFramebuffer[ge][we]=i.createFramebuffer()}else q.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)q.__webglFramebuffer[ge]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(De)for(let ge=0,we=ae.length;ge<we;ge++){const lt=n.get(ae[ge]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),s.memory.textures++)}if(D.samples>0&&st(D)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ge=0;ge<ae.length;ge++){const we=ae[ge];q.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ge]);const lt=a.convert(we.format,we.colorSpace),de=a.convert(we.type),Ce=w(we.internalFormat,lt,de,we.colorSpace,D.isXRRenderTarget===!0),Ge=at(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Ce,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,q.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),me(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Re(i.TEXTURE_CUBE_MAP,E);for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)Ae(q.__webglFramebuffer[ge][we],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we);else Ae(q.__webglFramebuffer[ge],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ge=0,we=ae.length;ge<we;ge++){const lt=ae[ge],de=n.get(lt);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),Re(i.TEXTURE_2D,lt),Ae(q.__webglFramebuffer,D,lt,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),g(lt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ge=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,ne.__webglTexture),Re(ge,E),E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)Ae(q.__webglFramebuffer[we],D,E,i.COLOR_ATTACHMENT0,ge,we);else Ae(q.__webglFramebuffer,D,E,i.COLOR_ATTACHMENT0,ge,0);g(E)&&p(ge),t.unbindTexture()}D.depthBuffer&&Be(D)}function rt(D){const E=D.textures;for(let q=0,ne=E.length;q<ne;q++){const ae=E[q];if(g(ae)){const ee=b(D),De=n.get(ae).__webglTexture;t.bindTexture(ee,De),p(ee),t.unbindTexture()}}}const Mt=[],k=[];function ln(D){if(D.samples>0){if(st(D)===!1){const E=D.textures,q=D.width,ne=D.height;let ae=i.COLOR_BUFFER_BIT;const ee=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(D),ge=E.length>1;if(ge)for(let we=0;we<E.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let we=0;we<E.length;we++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[we]);const lt=n.get(E[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,q,ne,0,0,q,ne,ae,i.NEAREST),l===!0&&(Mt.length=0,k.length=0,Mt.push(i.COLOR_ATTACHMENT0+we),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Mt.push(ee),k.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let we=0;we<E.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,De.__webglColorRenderbuffer[we]);const lt=n.get(E[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,lt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const E=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function at(D){return Math.min(r.maxSamples,D.samples)}function st(D){const E=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ze(D){const E=s.render.frame;h.get(D)!==E&&(h.set(D,E),D.update())}function gt(D,E){const q=D.colorSpace,ne=D.format,ae=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Gr&&q!==Ri&&(ct.getTransfer(q)===vt?(ne!==Bn||ae!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function Fe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=Z,this.setTexture2DArray=K,this.setTexture3D=te,this.setTextureCube=Y,this.rebindTextures=et,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=st}function rg(i,e){function t(n,r=Ri){let a;const s=ct.getTransfer(r);if(n===hi)return i.UNSIGNED_BYTE;if(n===X0)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Y0)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return i.BYTE;if(n===Ph)return i.SHORT;if(n===la)return i.UNSIGNED_SHORT;if(n===q0)return i.INT;if(n===nr)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===ua)return i.HALF_FLOAT;if(n===Lh)return i.ALPHA;if(n===Ih)return i.RGB;if(n===Bn)return i.RGBA;if(n===Nh)return i.LUMINANCE;if(n===Uh)return i.LUMINANCE_ALPHA;if(n===Pr)return i.DEPTH_COMPONENT;if(n===Or)return i.DEPTH_STENCIL;if(n===Fh)return i.RED;if(n===j0)return i.RED_INTEGER;if(n===Oh)return i.RG;if(n===$0)return i.RG_INTEGER;if(n===Z0)return i.RGBA_INTEGER;if(n===ts||n===ns||n===is||n===rs)if(s===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ts)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ts)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ns)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===is)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===Ko||n===Jo||n===Qo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Zo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ko)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===e0||n===t0||n===n0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===e0||n===t0)return s===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===n0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===i0||n===r0||n===a0||n===s0||n===o0||n===l0||n===c0||n===h0||n===u0||n===d0||n===f0||n===p0||n===m0||n===g0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===i0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===r0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===a0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===s0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===o0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===l0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===c0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===h0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===u0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===d0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===f0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===p0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===m0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===g0)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===as||n===v0||n===x0)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===as)return s===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===v0)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===x0)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bh||n===_0||n===y0||n===M0)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===as)return a.COMPRESSED_RED_RGTC1_EXT;if(n===_0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===y0)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===M0)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class ag extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gt extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sg={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new sn,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qn({vertexShader:og,fragmentShader:lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new Ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hg extends rr{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,x=null;const _=new cg,g=t.getContextAttributes();let p=null,b=null;const w=[],M=[],F=new We;let P=null;const C=new wn;C.viewport=new Ut;const I=new wn;I.viewport=new Ut;const T=[C,I],S=new ag;let U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=w[Q];return he===void 0&&(he=new mo,w[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=w[Q];return he===void 0&&(he=new mo,w[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=w[Q];return he===void 0&&(he=new mo,w[Q]=he),he.getHandSpace()};function W(Q){const he=M.indexOf(Q.inputSource);if(he===-1)return;const Ae=w[he];Ae!==void 0&&(Ae.update(Q.inputSource,Q.frame,c||s),Ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Z);for(let Q=0;Q<w.length;Q++){const he=M[Q];he!==null&&(M[Q]=null,w[Q].disconnect(he))}U=null,V=null,_.reset(),e.setRenderTarget(p),m=null,d=null,u=null,r=null,b=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){const he={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new ir(m.framebufferWidth,m.framebufferHeight,{format:Bn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let he=null,Ae=null,me=null;g.depth&&(me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=g.stencil?Or:Pr,Ae=g.stencil?Fr:nr);const Oe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:a};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(Oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new ir(d.textureWidth,d.textureHeight,{format:Bn,type:hi,depthTexture:new Qh(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),He.setContext(r),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(Q){for(let he=0;he<Q.removed.length;he++){const Ae=Q.removed[he],me=M.indexOf(Ae);me>=0&&(M[me]=null,w[me].disconnect(Ae))}for(let he=0;he<Q.added.length;he++){const Ae=Q.added[he];let me=M.indexOf(Ae);if(me===-1){for(let Be=0;Be<w.length;Be++)if(Be>=M.length){M.push(Ae),me=Be;break}else if(M[Be]===null){M[Be]=Ae,me=Be;break}if(me===-1)break}const Oe=w[me];Oe&&Oe.connect(Ae)}}const K=new O,te=new O;function Y(Q,he,Ae){K.setFromMatrixPosition(he.matrixWorld),te.setFromMatrixPosition(Ae.matrixWorld);const me=K.distanceTo(te),Oe=he.projectionMatrix.elements,Be=Ae.projectionMatrix.elements,et=Oe[14]/(Oe[10]-1),yt=Oe[14]/(Oe[10]+1),rt=(Oe[9]+1)/Oe[5],Mt=(Oe[9]-1)/Oe[5],k=(Oe[8]-1)/Oe[0],ln=(Be[8]+1)/Be[0],at=et*k,st=et*ln,ze=me/(-k+ln),gt=ze*-k;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(gt),Q.translateZ(ze),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Oe[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Fe=et+ze,D=yt+ze,E=at-gt,q=st+(me-gt),ne=rt*yt/D*Fe,ae=Mt*yt/D*Fe;Q.projectionMatrix.makePerspective(E,q,ne,ae,Fe,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function pe(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let he=Q.near,Ae=Q.far;_.texture!==null&&(_.depthNear>0&&(he=_.depthNear),_.depthFar>0&&(Ae=_.depthFar)),S.near=I.near=C.near=he,S.far=I.far=C.far=Ae,(U!==S.near||V!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),U=S.near,V=S.far),C.layers.mask=Q.layers.mask|2,I.layers.mask=Q.layers.mask|4,S.layers.mask=C.layers.mask|I.layers.mask;const me=Q.parent,Oe=S.cameras;pe(S,me);for(let Be=0;Be<Oe.length;Be++)pe(Oe[Be],me);Oe.length===2?Y(S,C,I):S.projectionMatrix.copy(C.projectionMatrix),se(Q,S,me)};function se(Q,he,Ae){Ae===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(Ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=b0*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let xe=null;function Re(Q,he){if(h=he.getViewerPose(c||s),x=he,h!==null){const Ae=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let me=!1;Ae.length!==S.cameras.length&&(S.cameras.length=0,me=!0);for(let Be=0;Be<Ae.length;Be++){const et=Ae[Be];let yt=null;if(m!==null)yt=m.getViewport(et);else{const Mt=u.getViewSubImage(d,et);yt=Mt.viewport,Be===0&&(e.setRenderTargetTextures(b,Mt.colorTexture,d.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(b))}let rt=T[Be];rt===void 0&&(rt=new wn,rt.layers.enable(Be),rt.viewport=new Ut,T[Be]=rt),rt.matrix.fromArray(et.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(et.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(yt.x,yt.y,yt.width,yt.height),Be===0&&(S.matrix.copy(rt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),me===!0&&S.cameras.push(rt)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Be=u.getDepthInformation(Ae[0]);Be&&Be.isValid&&Be.texture&&_.init(e,Be,r.renderState)}}for(let Ae=0;Ae<w.length;Ae++){const me=M[Ae],Oe=w[Ae];me!==null&&Oe!==void 0&&Oe.update(me,he,c||s)}xe&&xe(Q,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),x=null}const He=new Kh;He.setAnimationLoop(Re),this.setAnimationLoop=function(Q){xe=Q},this.dispose=function(){}}}const Xi=new Cn,ug=new At;function dg(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,jh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,b,w,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(g,p):p.isMeshToonMaterial?(a(g,p),u(g,p)):p.isMeshPhongMaterial?(a(g,p),h(g,p)):p.isMeshStandardMaterial?(a(g,p),d(g,p),p.isMeshPhysicalMaterial&&m(g,p,M)):p.isMeshMatcapMaterial?(a(g,p),x(g,p)):p.isMeshDepthMaterial?a(g,p):p.isMeshDistanceMaterial?(a(g,p),_(g,p)):p.isMeshNormalMaterial?a(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,b,w):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Jt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Jt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=e.get(p),w=b.envMap,M=b.envMapRotation;w&&(g.envMap.value=w,Xi.copy(M),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),g.envMapRotation.value.setFromMatrix4(ug.makeRotationFromEuler(Xi)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=w*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function fg(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const M=w.program;n.uniformBlockBinding(b,M)}function c(b,w){let M=r[b.id];M===void 0&&(x(b),M=h(b),r[b.id]=M,b.addEventListener("dispose",g));const F=w.program;n.updateUBOMapping(b,F);const P=e.render.frame;a[b.id]!==P&&(d(b),a[b.id]=P)}function h(b){const w=u();b.__bindingPointIndex=w;const M=i.createBuffer(),F=b.__size,P=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,F,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,M),M}function u(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const w=r[b.id],M=b.uniforms,F=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let P=0,C=M.length;P<C;P++){const I=Array.isArray(M[P])?M[P]:[M[P]];for(let T=0,S=I.length;T<S;T++){const U=I[T];if(m(U,P,T,F)===!0){const V=U.__offset,W=Array.isArray(U.value)?U.value:[U.value];let X=0;for(let Z=0;Z<W.length;Z++){const K=W[Z],te=_(K);typeof K=="number"||typeof K=="boolean"?(U.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,V+X,U.__data)):K.isMatrix3?(U.__data[0]=K.elements[0],U.__data[1]=K.elements[1],U.__data[2]=K.elements[2],U.__data[3]=0,U.__data[4]=K.elements[3],U.__data[5]=K.elements[4],U.__data[6]=K.elements[5],U.__data[7]=0,U.__data[8]=K.elements[6],U.__data[9]=K.elements[7],U.__data[10]=K.elements[8],U.__data[11]=0):(K.toArray(U.__data,X),X+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,w,M,F){const P=b.value,C=w+"_"+M;if(F[C]===void 0)return typeof P=="number"||typeof P=="boolean"?F[C]=P:F[C]=P.clone(),!0;{const I=F[C];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return F[C]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function x(b){const w=b.uniforms;let M=0;const F=16;for(let C=0,I=w.length;C<I;C++){const T=Array.isArray(w[C])?w[C]:[w[C]];for(let S=0,U=T.length;S<U;S++){const V=T[S],W=Array.isArray(V.value)?V.value:[V.value];for(let X=0,Z=W.length;X<Z;X++){const K=W[X],te=_(K),Y=M%F,pe=Y%te.boundary,se=Y+pe;M+=pe,se!==0&&F-se<te.storage&&(M+=F-se),V.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=te.storage}}}const P=M%F;return P>0&&(M+=F-P),b.__size=M,b.__cache={},this}function _(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function g(b){const w=b.target;w.removeEventListener("dispose",g);const M=s.indexOf(w.__bindingPointIndex);s.splice(M,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete a[w.id]}function p(){for(const b in r)i.deleteBuffer(r[b]);s=[],r={},a={}}return{bind:l,update:c,dispose:p}}class pg{constructor(e={}){const{canvas:t=tf(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const x=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=Li,this.toneMappingExposure=1;const M=this;let F=!1,P=0,C=0,I=null,T=-1,S=null;const U=new Ut,V=new Ut;let W=null;const X=new it(0);let Z=0,K=t.width,te=t.height,Y=1,pe=null,se=null;const xe=new Ut(0,0,K,te),Re=new Ut(0,0,K,te);let He=!1;const Q=new K0;let he=!1,Ae=!1;const me=new At,Oe=new At,Be=new O,et=new Ut,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Mt(){return I===null?Y:1}let k=n;function ln(R,H){return t.getContext(R,H)}try{const R={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${W0}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Me,!1),k===null){const H="webgl2";if(k=ln(H,R),k===null)throw ln(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let at,st,ze,gt,Fe,D,E,q,ne,ae,ee,De,ge,we,lt,de,Ce,Ge,qe,Pe,ot,tt,bt,z;function _e(){at=new _1(k),at.init(),tt=new rg(k,at),st=new f1(k,at,e,tt),ze=new tg(k,at),st.reverseDepthBuffer&&d&&ze.buffers.depth.setReversed(!0),gt=new b1(k),Fe=new k2,D=new ig(k,at,ze,Fe,st,tt,gt),E=new m1(M),q=new x1(M),ne=new Cf(k),bt=new u1(k,ne),ae=new y1(k,ne,gt,bt),ee=new w1(k,ae,ne,gt),qe=new S1(k,st,D),de=new p1(Fe),De=new z2(M,E,q,at,st,bt,de),ge=new dg(M,Fe),we=new G2,lt=new j2(at),Ge=new h1(M,E,q,ze,ee,m,l),Ce=new Q2(M,ee,st),z=new fg(k,gt,st,ze),Pe=new d1(k,at,gt),ot=new M1(k,at,gt),gt.programs=De.programs,M.capabilities=st,M.extensions=at,M.properties=Fe,M.renderLists=we,M.shadowMap=Ce,M.state=ze,M.info=gt}_e();const J=new hg(M,k);this.xr=J,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=at.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=at.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(K,te,!1))},this.getSize=function(R){return R.set(K,te)},this.setSize=function(R,H,j=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,te=H,t.width=Math.floor(R*Y),t.height=Math.floor(H*Y),j===!0&&(t.style.width=R+"px",t.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(K*Y,te*Y).floor()},this.setDrawingBufferSize=function(R,H,j){K=R,te=H,Y=j,t.width=Math.floor(R*j),t.height=Math.floor(H*j),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(xe)},this.setViewport=function(R,H,j,$){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,H,j,$),ze.viewport(U.copy(xe).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(Re)},this.setScissor=function(R,H,j,$){R.isVector4?Re.set(R.x,R.y,R.z,R.w):Re.set(R,H,j,$),ze.scissor(V.copy(Re).multiplyScalar(Y).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(R){ze.setScissorTest(He=R)},this.setOpaqueSort=function(R){pe=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(R=!0,H=!0,j=!0){let $=0;if(R){let G=!1;if(I!==null){const fe=I.texture.format;G=fe===Z0||fe===$0||fe===j0}if(G){const fe=I.texture.type,be=fe===hi||fe===nr||fe===la||fe===Fr||fe===X0||fe===Y0,Le=Ge.getClearColor(),Ie=Ge.getClearAlpha(),Ye=Le.r,Ze=Le.g,Ne=Le.b;be?(x[0]=Ye,x[1]=Ze,x[2]=Ne,x[3]=Ie,k.clearBufferuiv(k.COLOR,0,x)):(_[0]=Ye,_[1]=Ze,_[2]=Ne,_[3]=Ie,k.clearBufferiv(k.COLOR,0,_))}else $|=k.COLOR_BUFFER_BIT}H&&($|=k.DEPTH_BUFFER_BIT),j&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),we.dispose(),lt.dispose(),Fe.dispose(),E.dispose(),q.dispose(),ee.dispose(),bt.dispose(),z.dispose(),De.dispose(),J.dispose(),J.removeEventListener("sessionstart",yl),J.removeEventListener("sessionend",Ml),ki.stop()};function ie(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=gt.autoReset,H=Ce.enabled,j=Ce.autoUpdate,$=Ce.needsUpdate,G=Ce.type;_e(),gt.autoReset=R,Ce.enabled=H,Ce.autoUpdate=j,Ce.needsUpdate=$,Ce.type=G}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $e(R){const H=R.target;H.removeEventListener("dispose",$e),It(H)}function It(R){jt(R),Fe.remove(R)}function jt(R){const H=Fe.get(R).programs;H!==void 0&&(H.forEach(function(j){De.releaseProgram(j)}),R.isShaderMaterial&&De.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,j,$,G,fe){H===null&&(H=yt);const be=G.isMesh&&G.matrixWorld.determinant()<0,Le=ld(R,H,j,$,G);ze.setMaterial($,be);let Ie=j.index,Ye=1;if($.wireframe===!0){if(Ie=ae.getWireframeAttribute(j),Ie===void 0)return;Ye=2}const Ze=j.drawRange,Ne=j.attributes.position;let ht=Ze.start*Ye,St=(Ze.start+Ze.count)*Ye;fe!==null&&(ht=Math.max(ht,fe.start*Ye),St=Math.min(St,(fe.start+fe.count)*Ye)),Ie!==null?(ht=Math.max(ht,0),St=Math.min(St,Ie.count)):Ne!=null&&(ht=Math.max(ht,0),St=Math.min(St,Ne.count));const Et=St-ht;if(Et<0||Et===1/0)return;bt.setup(G,$,Le,j,Ie);let cn,ft=Pe;if(Ie!==null&&(cn=ne.get(Ie),ft=ot,ft.setIndex(cn)),G.isMesh)$.wireframe===!0?(ze.setLineWidth($.wireframeLinewidth*Mt()),ft.setMode(k.LINES)):ft.setMode(k.TRIANGLES);else if(G.isLine){let Ue=$.linewidth;Ue===void 0&&(Ue=1),ze.setLineWidth(Ue*Mt()),G.isLineSegments?ft.setMode(k.LINES):G.isLineLoop?ft.setMode(k.LINE_LOOP):ft.setMode(k.LINE_STRIP)}else G.isPoints?ft.setMode(k.POINTS):G.isSprite&&ft.setMode(k.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ft.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))ft.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ue=G._multiDrawStarts,Zn=G._multiDrawCounts,pt=G._multiDrawCount,Ln=Ie?ne.get(Ie).bytesPerElement:1,or=Fe.get($).currentProgram.getUniforms();for(let fn=0;fn<pt;fn++)or.setValue(k,"_gl_DrawID",fn),ft.render(Ue[fn]/Ln,Zn[fn])}else if(G.isInstancedMesh)ft.renderInstances(ht,Et,G.count);else if(j.isInstancedBufferGeometry){const Ue=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Zn=Math.min(j.instanceCount,Ue);ft.renderInstances(ht,Et,Zn)}else ft.render(ht,Et)};function mt(R,H,j){R.transparent===!0&&R.side===En&&R.forceSinglePass===!1?(R.side=Jt,R.needsUpdate=!0,xa(R,H,j),R.side=Ni,R.needsUpdate=!0,xa(R,H,j),R.side=En):xa(R,H,j)}this.compile=function(R,H,j=null){j===null&&(j=R),p=lt.get(j),p.init(H),w.push(p),j.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),R!==j&&R.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const $=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const fe=G.material;if(fe)if(Array.isArray(fe))for(let be=0;be<fe.length;be++){const Le=fe[be];mt(Le,j,G),$.add(Le)}else mt(fe,j,G),$.add(fe)}),w.pop(),p=null,$},this.compileAsync=function(R,H,j=null){const $=this.compile(R,H,j);return new Promise(G=>{function fe(){if($.forEach(function(be){Fe.get(be).currentProgram.isReady()&&$.delete(be)}),$.size===0){G(R);return}setTimeout(fe,10)}at.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Dn=null;function $n(R){Dn&&Dn(R)}function yl(){ki.stop()}function Ml(){ki.start()}const ki=new Kh;ki.setAnimationLoop($n),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(R){Dn=R,J.setAnimationLoop(R),R===null?ki.stop():ki.start()},J.addEventListener("sessionstart",yl),J.addEventListener("sessionend",Ml),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(H),H=J.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,H,I),p=lt.get(R,w.length),p.init(H),w.push(p),Oe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Q.setFromProjectionMatrix(Oe),Ae=this.localClippingEnabled,he=de.init(this.clippingPlanes,Ae),g=we.get(R,b.length),g.init(),b.push(g),J.enabled===!0&&J.isPresenting===!0){const fe=M.xr.getDepthSensingMesh();fe!==null&&zs(fe,H,-1/0,M.sortObjects)}zs(R,H,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(pe,se),rt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,rt&&Ge.addToRenderList(g,R),this.info.render.frame++,he===!0&&de.beginShadows();const j=p.state.shadowsArray;Ce.render(j,R,H),he===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,G=g.transmissive;if(p.setupLights(),H.isArrayCamera){const fe=H.cameras;if(G.length>0)for(let be=0,Le=fe.length;be<Le;be++){const Ie=fe[be];Sl($,G,R,Ie)}rt&&Ge.render(R);for(let be=0,Le=fe.length;be<Le;be++){const Ie=fe[be];bl(g,R,Ie,Ie.viewport)}}else G.length>0&&Sl($,G,R,H),rt&&Ge.render(R),bl(g,R,H);I!==null&&(D.updateMultisampleRenderTarget(I),D.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(M,R,H),bt.resetDefaultState(),T=-1,S=null,w.pop(),w.length>0?(p=w[w.length-1],he===!0&&de.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function zs(R,H,j,$){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){$&&et.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Oe);const be=ee.update(R),Le=R.material;Le.visible&&g.push(R,be,Le,j,et.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const be=ee.update(R),Le=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),et.copy(R.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),et.copy(be.boundingSphere.center)),et.applyMatrix4(R.matrixWorld).applyMatrix4(Oe)),Array.isArray(Le)){const Ie=be.groups;for(let Ye=0,Ze=Ie.length;Ye<Ze;Ye++){const Ne=Ie[Ye],ht=Le[Ne.materialIndex];ht&&ht.visible&&g.push(R,be,ht,j,et.z,Ne)}}else Le.visible&&g.push(R,be,Le,j,et.z,null)}}const fe=R.children;for(let be=0,Le=fe.length;be<Le;be++)zs(fe[be],H,j,$)}function bl(R,H,j,$){const G=R.opaque,fe=R.transmissive,be=R.transparent;p.setupLightsView(j),he===!0&&de.setGlobalState(M.clippingPlanes,j),$&&ze.viewport(U.copy($)),G.length>0&&va(G,H,j),fe.length>0&&va(fe,H,j),be.length>0&&va(be,H,j),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Sl(R,H,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new ir(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?ua:hi,minFilter:Qi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const fe=p.state.transmissionRenderTarget[$.id],be=$.viewport||U;fe.setSize(be.z,be.w);const Le=M.getRenderTarget();M.setRenderTarget(fe),M.getClearColor(X),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),rt&&Ge.render(j);const Ie=M.toneMapping;M.toneMapping=Li;const Ye=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),he===!0&&de.setGlobalState(M.clippingPlanes,$),va(R,j,$),D.updateMultisampleRenderTarget(fe),D.updateRenderTargetMipmap(fe),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Ne=0,ht=H.length;Ne<ht;Ne++){const St=H[Ne],Et=St.object,cn=St.geometry,ft=St.material,Ue=St.group;if(ft.side===En&&Et.layers.test($.layers)){const Zn=ft.side;ft.side=Jt,ft.needsUpdate=!0,wl(Et,j,$,cn,ft,Ue),ft.side=Zn,ft.needsUpdate=!0,Ze=!0}}Ze===!0&&(D.updateMultisampleRenderTarget(fe),D.updateRenderTargetMipmap(fe))}M.setRenderTarget(Le),M.setClearColor(X,Z),Ye!==void 0&&($.viewport=Ye),M.toneMapping=Ie}function va(R,H,j){const $=H.isScene===!0?H.overrideMaterial:null;for(let G=0,fe=R.length;G<fe;G++){const be=R[G],Le=be.object,Ie=be.geometry,Ye=$===null?be.material:$,Ze=be.group;Le.layers.test(j.layers)&&wl(Le,H,j,Ie,Ye,Ze)}}function wl(R,H,j,$,G,fe){R.onBeforeRender(M,H,j,$,G,fe),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(M,H,j,$,R,fe),G.transparent===!0&&G.side===En&&G.forceSinglePass===!1?(G.side=Jt,G.needsUpdate=!0,M.renderBufferDirect(j,H,$,G,R,fe),G.side=Ni,G.needsUpdate=!0,M.renderBufferDirect(j,H,$,G,R,fe),G.side=En):M.renderBufferDirect(j,H,$,G,R,fe),R.onAfterRender(M,H,j,$,G,fe)}function xa(R,H,j){H.isScene!==!0&&(H=yt);const $=Fe.get(R),G=p.state.lights,fe=p.state.shadowsArray,be=G.state.version,Le=De.getParameters(R,G.state,fe,H,j),Ie=De.getProgramCacheKey(Le);let Ye=$.programs;$.environment=R.isMeshStandardMaterial?H.environment:null,$.fog=H.fog,$.envMap=(R.isMeshStandardMaterial?q:E).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Ye===void 0&&(R.addEventListener("dispose",$e),Ye=new Map,$.programs=Ye);let Ze=Ye.get(Ie);if(Ze!==void 0){if($.currentProgram===Ze&&$.lightsStateVersion===be)return Tl(R,Le),Ze}else Le.uniforms=De.getUniforms(R),R.onBeforeCompile(Le,M),Ze=De.acquireProgram(Le,Ie),Ye.set(Ie,Ze),$.uniforms=Le.uniforms;const Ne=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ne.clippingPlanes=de.uniform),Tl(R,Le),$.needsLights=hd(R),$.lightsStateVersion=be,$.needsLights&&(Ne.ambientLightColor.value=G.state.ambient,Ne.lightProbe.value=G.state.probe,Ne.directionalLights.value=G.state.directional,Ne.directionalLightShadows.value=G.state.directionalShadow,Ne.spotLights.value=G.state.spot,Ne.spotLightShadows.value=G.state.spotShadow,Ne.rectAreaLights.value=G.state.rectArea,Ne.ltc_1.value=G.state.rectAreaLTC1,Ne.ltc_2.value=G.state.rectAreaLTC2,Ne.pointLights.value=G.state.point,Ne.pointLightShadows.value=G.state.pointShadow,Ne.hemisphereLights.value=G.state.hemi,Ne.directionalShadowMap.value=G.state.directionalShadowMap,Ne.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ne.spotShadowMap.value=G.state.spotShadowMap,Ne.spotLightMatrix.value=G.state.spotLightMatrix,Ne.spotLightMap.value=G.state.spotLightMap,Ne.pointShadowMap.value=G.state.pointShadowMap,Ne.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=Ze,$.uniformsList=null,Ze}function El(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=os.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Tl(R,H){const j=Fe.get(R);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function ld(R,H,j,$,G){H.isScene!==!0&&(H=yt),D.resetTextureUnits();const fe=H.fog,be=$.isMeshStandardMaterial?H.environment:null,Le=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Gr,Ie=($.isMeshStandardMaterial?q:E).get($.envMap||be),Ye=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ze=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ne=!!j.morphAttributes.position,ht=!!j.morphAttributes.normal,St=!!j.morphAttributes.color;let Et=Li;$.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Et=M.toneMapping);const cn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ft=cn!==void 0?cn.length:0,Ue=Fe.get($),Zn=p.state.lights;if(he===!0&&(Ae===!0||R!==S)){const Mn=R===S&&$.id===T;de.setState($,R,Mn)}let pt=!1;$.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Zn.state.version||Ue.outputColorSpace!==Le||G.isBatchedMesh&&Ue.batching===!1||!G.isBatchedMesh&&Ue.batching===!0||G.isBatchedMesh&&Ue.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ue.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ue.instancing===!1||!G.isInstancedMesh&&Ue.instancing===!0||G.isSkinnedMesh&&Ue.skinning===!1||!G.isSkinnedMesh&&Ue.skinning===!0||G.isInstancedMesh&&Ue.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ue.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ue.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ue.instancingMorph===!1&&G.morphTexture!==null||Ue.envMap!==Ie||$.fog===!0&&Ue.fog!==fe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==de.numPlanes||Ue.numIntersection!==de.numIntersection)||Ue.vertexAlphas!==Ye||Ue.vertexTangents!==Ze||Ue.morphTargets!==Ne||Ue.morphNormals!==ht||Ue.morphColors!==St||Ue.toneMapping!==Et||Ue.morphTargetsCount!==ft)&&(pt=!0):(pt=!0,Ue.__version=$.version);let Ln=Ue.currentProgram;pt===!0&&(Ln=xa($,H,G));let or=!1,fn=!1,jr=!1;const Tt=Ln.getUniforms(),kn=Ue.uniforms;if(ze.useProgram(Ln.program)&&(or=!0,fn=!0,jr=!0),$.id!==T&&(T=$.id,fn=!0),or||S!==R){ze.buffers.depth.getReversed()?(me.copy(R.projectionMatrix),rf(me),af(me),Tt.setValue(k,"projectionMatrix",me)):Tt.setValue(k,"projectionMatrix",R.projectionMatrix),Tt.setValue(k,"viewMatrix",R.matrixWorldInverse);const gi=Tt.map.cameraPosition;gi!==void 0&&gi.setValue(k,Be.setFromMatrixPosition(R.matrixWorld)),st.logarithmicDepthBuffer&&Tt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Tt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,fn=!0,jr=!0)}if(G.isSkinnedMesh){Tt.setOptional(k,G,"bindMatrix"),Tt.setOptional(k,G,"bindMatrixInverse");const Mn=G.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Tt.setValue(k,"boneTexture",Mn.boneTexture,D))}G.isBatchedMesh&&(Tt.setOptional(k,G,"batchingTexture"),Tt.setValue(k,"batchingTexture",G._matricesTexture,D),Tt.setOptional(k,G,"batchingIdTexture"),Tt.setValue(k,"batchingIdTexture",G._indirectTexture,D),Tt.setOptional(k,G,"batchingColorTexture"),G._colorsTexture!==null&&Tt.setValue(k,"batchingColorTexture",G._colorsTexture,D));const $r=j.morphAttributes;if(($r.position!==void 0||$r.normal!==void 0||$r.color!==void 0)&&qe.update(G,j,Ln),(fn||Ue.receiveShadow!==G.receiveShadow)&&(Ue.receiveShadow=G.receiveShadow,Tt.setValue(k,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(kn.envMap.value=Ie,kn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&H.environment!==null&&(kn.envMapIntensity.value=H.environmentIntensity),fn&&(Tt.setValue(k,"toneMappingExposure",M.toneMappingExposure),Ue.needsLights&&cd(kn,jr),fe&&$.fog===!0&&ge.refreshFogUniforms(kn,fe),ge.refreshMaterialUniforms(kn,$,Y,te,p.state.transmissionRenderTarget[R.id]),os.upload(k,El(Ue),kn,D)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(os.upload(k,El(Ue),kn,D),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Tt.setValue(k,"center",G.center),Tt.setValue(k,"modelViewMatrix",G.modelViewMatrix),Tt.setValue(k,"normalMatrix",G.normalMatrix),Tt.setValue(k,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Mn=$.uniformsGroups;for(let gi=0,vi=Mn.length;gi<vi;gi++){const Al=Mn[gi];z.update(Al,Ln),z.bind(Al,Ln)}}return Ln}function cd(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function hd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,H,j){Fe.get(R.texture).__webglTexture=H,Fe.get(R.depthTexture).__webglTexture=j;const $=Fe.get(R);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=j===void 0,$.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,H){const j=Fe.get(R);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,j=0){I=R,P=H,C=j;let $=!0,G=null,fe=!1,be=!1;if(R){const Ie=Fe.get(R);if(Ie.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(k.FRAMEBUFFER,null),$=!1;else if(Ie.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Ie.__hasExternalTextures)D.rebindTextures(R,Fe.get(R.texture).__webglTexture,Fe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ne=R.depthTexture;if(Ie.__boundDepthTexture!==Ne){if(Ne!==null&&Fe.has(Ne)&&(R.width!==Ne.image.width||R.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const Ye=R.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(be=!0);const Ze=Fe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[H])?G=Ze[H][j]:G=Ze[H],fe=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?G=Fe.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?G=Ze[j]:G=Ze,U.copy(R.viewport),V.copy(R.scissor),W=R.scissorTest}else U.copy(xe).multiplyScalar(Y).floor(),V.copy(Re).multiplyScalar(Y).floor(),W=He;if(ze.bindFramebuffer(k.FRAMEBUFFER,G)&&$&&ze.drawBuffers(R,G),ze.viewport(U),ze.scissor(V),ze.setScissorTest(W),fe){const Ie=Fe.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ie.__webglTexture,j)}else if(be){const Ie=Fe.get(R.texture),Ye=H||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ie.__webglTexture,j||0,Ye)}T=-1},this.readRenderTargetPixels=function(R,H,j,$,G,fe,be){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&be!==void 0&&(Le=Le[be]),Le){ze.bindFramebuffer(k.FRAMEBUFFER,Le);try{const Ie=R.texture,Ye=Ie.format,Ze=Ie.type;if(!st.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-$&&j>=0&&j<=R.height-G&&k.readPixels(H,j,$,G,tt.convert(Ye),tt.convert(Ze),fe)}finally{const Ie=I!==null?Fe.get(I).__webglFramebuffer:null;ze.bindFramebuffer(k.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(R,H,j,$,G,fe,be){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&be!==void 0&&(Le=Le[be]),Le){const Ie=R.texture,Ye=Ie.format,Ze=Ie.type;if(!st.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=R.width-$&&j>=0&&j<=R.height-G){ze.bindFramebuffer(k.FRAMEBUFFER,Le);const Ne=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ne),k.bufferData(k.PIXEL_PACK_BUFFER,fe.byteLength,k.STREAM_READ),k.readPixels(H,j,$,G,tt.convert(Ye),tt.convert(Ze),0);const ht=I!==null?Fe.get(I).__webglFramebuffer:null;ze.bindFramebuffer(k.FRAMEBUFFER,ht);const St=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await nf(k,St,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ne),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,fe),k.deleteBuffer(Ne),k.deleteSync(St),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,H=null,j=0){R.isTexture!==!0&&(ra("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,R=arguments[1]);const $=Math.pow(2,-j),G=Math.floor(R.image.width*$),fe=Math.floor(R.image.height*$),be=H!==null?H.x:0,Le=H!==null?H.y:0;D.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,j,0,0,be,Le,G,fe),ze.unbindTexture()},this.copyTextureToTexture=function(R,H,j=null,$=null,G=0){R.isTexture!==!0&&(ra("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1],H=arguments[2],G=arguments[3]||0,j=null);let fe,be,Le,Ie,Ye,Ze,Ne,ht,St;const Et=R.isCompressedTexture?R.mipmaps[G]:R.image;j!==null?(fe=j.max.x-j.min.x,be=j.max.y-j.min.y,Le=j.isBox3?j.max.z-j.min.z:1,Ie=j.min.x,Ye=j.min.y,Ze=j.isBox3?j.min.z:0):(fe=Et.width,be=Et.height,Le=Et.depth||1,Ie=0,Ye=0,Ze=0),$!==null?(Ne=$.x,ht=$.y,St=$.z):(Ne=0,ht=0,St=0);const cn=tt.convert(H.format),ft=tt.convert(H.type);let Ue;H.isData3DTexture?(D.setTexture3D(H,0),Ue=k.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(D.setTexture2DArray(H,0),Ue=k.TEXTURE_2D_ARRAY):(D.setTexture2D(H,0),Ue=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment);const Zn=k.getParameter(k.UNPACK_ROW_LENGTH),pt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ln=k.getParameter(k.UNPACK_SKIP_PIXELS),or=k.getParameter(k.UNPACK_SKIP_ROWS),fn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Et.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Et.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ie),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ye),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze);const jr=R.isDataArrayTexture||R.isData3DTexture,Tt=H.isDataArrayTexture||H.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const kn=Fe.get(R),$r=Fe.get(H),Mn=Fe.get(kn.__renderTarget),gi=Fe.get($r.__renderTarget);ze.bindFramebuffer(k.READ_FRAMEBUFFER,Mn.__webglFramebuffer),ze.bindFramebuffer(k.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let vi=0;vi<Le;vi++)jr&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.get(R).__webglTexture,G,Ze+vi),R.isDepthTexture?(Tt&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.get(H).__webglTexture,G,St+vi),k.blitFramebuffer(Ie,Ye,fe,be,Ne,ht,fe,be,k.DEPTH_BUFFER_BIT,k.NEAREST)):Tt?k.copyTexSubImage3D(Ue,G,Ne,ht,St+vi,Ie,Ye,fe,be):k.copyTexSubImage2D(Ue,G,Ne,ht,St+vi,Ie,Ye,fe,be);ze.bindFramebuffer(k.READ_FRAMEBUFFER,null),ze.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Tt?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Ue,G,Ne,ht,St,fe,be,Le,cn,ft,Et.data):H.isCompressedArrayTexture?k.compressedTexSubImage3D(Ue,G,Ne,ht,St,fe,be,Le,cn,Et.data):k.texSubImage3D(Ue,G,Ne,ht,St,fe,be,Le,cn,ft,Et):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,G,Ne,ht,fe,be,cn,ft,Et.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,G,Ne,ht,Et.width,Et.height,cn,Et.data):k.texSubImage2D(k.TEXTURE_2D,G,Ne,ht,fe,be,cn,ft,Et);k.pixelStorei(k.UNPACK_ROW_LENGTH,Zn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ln),k.pixelStorei(k.UNPACK_SKIP_ROWS,or),k.pixelStorei(k.UNPACK_SKIP_IMAGES,fn),G===0&&H.generateMipmaps&&k.generateMipmap(Ue),ze.unbindTexture()},this.copyTextureToTexture3D=function(R,H,j=null,$=null,G=0){return R.isTexture!==!0&&(ra("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,$=arguments[1]||null,R=arguments[2],H=arguments[3],G=arguments[4]||0),ra('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,H,j,$,G)},this.initRenderTarget=function(R){Fe.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),ze.unbindTexture()},this.resetState=function(){P=0,C=0,I=null,ze.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}class mg extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class er extends ar{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fs=new O,ps=new O,Ec=new At,ta=new bs,ka=new pa,go=new O,Tc=new O;class Sr extends Vt{constructor(e=new wt,t=new er){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)fs.fromBufferAttribute(t,r-1),ps.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=fs.distanceTo(ps);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(r),ka.radius+=a,e.ray.intersectsSphere(ka)===!1)return;Ec.copy(r).invert(),ta.copy(e.ray).applyMatrix4(Ec);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const m=Math.max(0,s.start),x=Math.min(h.count,s.start+s.count);for(let _=m,g=x-1;_<g;_+=c){const p=h.getX(_),b=h.getX(_+1),w=Ha(this,e,ta,l,p,b);w&&t.push(w)}if(this.isLineLoop){const _=h.getX(x-1),g=h.getX(m),p=Ha(this,e,ta,l,_,g);p&&t.push(p)}}else{const m=Math.max(0,s.start),x=Math.min(d.count,s.start+s.count);for(let _=m,g=x-1;_<g;_+=c){const p=Ha(this,e,ta,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Ha(this,e,ta,l,x-1,m);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ha(i,e,t,n,r,a){const s=i.geometry.attributes.position;if(fs.fromBufferAttribute(s,r),ps.fromBufferAttribute(s,a),t.distanceSqToSegment(fs,ps,go,Tc)>n)return;go.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(go);if(!(l<e.near||l>e.far))return{distance:l,point:Tc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}class ru extends ar{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ac=new At,w0=new bs,Ga=new pa,Va=new O;class gg extends Vt{constructor(e=new wt,t=new ru){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(r),Ga.radius+=a,e.ray.intersectsSphere(Ga)===!1)return;Ac.copy(r).invert(),w0.copy(e.ray).applyMatrix4(Ac);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let x=d,_=m;x<_;x++){const g=c.getX(x);Va.fromBufferAttribute(u,g),Rc(Va,g,l,r,e,t,this)}}else{const d=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let x=d,_=m;x<_;x++)Va.fromBufferAttribute(u,x),Rc(Va,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Rc(i,e,t,n,r,a,s){const o=w0.distanceSqToPoint(i);if(o<t){const l=new O;w0.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class na extends sn{constructor(e,t,n,r,a,s,o,l,c){super(e,t,n,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fn extends wt{constructor(e=1,t=1,n=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const h=[],u=[],d=[],m=[];let x=0;const _=[],g=n/2;let p=0;b(),s===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(m,2));function b(){const M=new O,F=new O;let P=0;const C=(t-e)/n;for(let I=0;I<=a;I++){const T=[],S=I/a,U=S*(t-e)+e;for(let V=0;V<=r;V++){const W=V/r,X=W*l+o,Z=Math.sin(X),K=Math.cos(X);F.x=U*Z,F.y=-S*n+g,F.z=U*K,u.push(F.x,F.y,F.z),M.set(Z,C,K).normalize(),d.push(M.x,M.y,M.z),m.push(W,1-S),T.push(x++)}_.push(T)}for(let I=0;I<r;I++)for(let T=0;T<a;T++){const S=_[T][I],U=_[T+1][I],V=_[T+1][I+1],W=_[T][I+1];(e>0||T!==0)&&(h.push(S,U,W),P+=3),(t>0||T!==a-1)&&(h.push(U,V,W),P+=3)}c.addGroup(p,P,0),p+=P}function w(M){const F=x,P=new We,C=new O;let I=0;const T=M===!0?e:t,S=M===!0?1:-1;for(let V=1;V<=r;V++)u.push(0,g*S,0),d.push(0,S,0),m.push(.5,.5),x++;const U=x;for(let V=0;V<=r;V++){const X=V/r*l+o,Z=Math.cos(X),K=Math.sin(X);C.x=T*K,C.y=g*S,C.z=T*Z,u.push(C.x,C.y,C.z),d.push(0,S,0),P.x=Z*.5+.5,P.y=K*.5*S+.5,m.push(P.x,P.y),x++}for(let V=0;V<r;V++){const W=F+V,X=U+V;M===!0?h.push(X,X+1,W):h.push(X+1,X,W),I+=3}c.addGroup(p,I,M===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tr extends Fn{constructor(e=1,t=1,n=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,n,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Tr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Es extends wt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const a=[],s=[];o(r),c(n),h(),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(a.slice(),3)),this.setAttribute("uv",new Rt(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const w=new O,M=new O,F=new O;for(let P=0;P<t.length;P+=3)m(t[P+0],w),m(t[P+1],M),m(t[P+2],F),l(w,M,F,b)}function l(b,w,M,F){const P=F+1,C=[];for(let I=0;I<=P;I++){C[I]=[];const T=b.clone().lerp(M,I/P),S=w.clone().lerp(M,I/P),U=P-I;for(let V=0;V<=U;V++)V===0&&I===P?C[I][V]=T:C[I][V]=T.clone().lerp(S,V/U)}for(let I=0;I<P;I++)for(let T=0;T<2*(P-I)-1;T++){const S=Math.floor(T/2);T%2===0?(d(C[I][S+1]),d(C[I+1][S]),d(C[I][S])):(d(C[I][S+1]),d(C[I+1][S+1]),d(C[I+1][S]))}}function c(b){const w=new O;for(let M=0;M<a.length;M+=3)w.x=a[M+0],w.y=a[M+1],w.z=a[M+2],w.normalize().multiplyScalar(b),a[M+0]=w.x,a[M+1]=w.y,a[M+2]=w.z}function h(){const b=new O;for(let w=0;w<a.length;w+=3){b.x=a[w+0],b.y=a[w+1],b.z=a[w+2];const M=g(b)/2/Math.PI+.5,F=p(b)/Math.PI+.5;s.push(M,1-F)}x(),u()}function u(){for(let b=0;b<s.length;b+=6){const w=s[b+0],M=s[b+2],F=s[b+4],P=Math.max(w,M,F),C=Math.min(w,M,F);P>.9&&C<.1&&(w<.2&&(s[b+0]+=1),M<.2&&(s[b+2]+=1),F<.2&&(s[b+4]+=1))}}function d(b){a.push(b.x,b.y,b.z)}function m(b,w){const M=b*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function x(){const b=new O,w=new O,M=new O,F=new O,P=new We,C=new We,I=new We;for(let T=0,S=0;T<a.length;T+=9,S+=6){b.set(a[T+0],a[T+1],a[T+2]),w.set(a[T+3],a[T+4],a[T+5]),M.set(a[T+6],a[T+7],a[T+8]),P.set(s[S+0],s[S+1]),C.set(s[S+2],s[S+3]),I.set(s[S+4],s[S+5]),F.copy(b).add(w).add(M).divideScalar(3);const U=g(F);_(P,S+0,b,U),_(C,S+2,w,U),_(I,S+4,M,U)}}function _(b,w,M,F){F<0&&b.x===1&&(s[w]=b.x-1),M.x===0&&M.z===0&&(s[w]=F/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.vertices,e.indices,e.radius,e.details)}}class Q0 extends Es{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Q0(e.radius,e.detail)}}class el extends Es{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new el(e.radius,e.detail)}}class tl extends wt{constructor(e=.5,t=1,n=32,r=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:a,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/r,m=new O,x=new We;for(let _=0;_<=r;_++){for(let g=0;g<=n;g++){const p=a+g/n*s;m.x=u*Math.cos(p),m.y=u*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,h.push(x.x,x.y)}u+=d}for(let _=0;_<r;_++){const g=_*(n+1);for(let p=0;p<n;p++){const b=p+g,w=b,M=b+n+1,F=b+n+2,P=b+1;o.push(w,M,P),o.push(M,F,P)}}this.setIndex(o),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class gn extends wt{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let c=0;const h=[],u=new O,d=new O,m=[],x=[],_=[],g=[];for(let p=0;p<=n;p++){const b=[],w=p/n;let M=0;p===0&&s===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let F=0;F<=t;F++){const P=F/t;u.x=-e*Math.cos(r+P*a)*Math.sin(s+w*o),u.y=e*Math.cos(s+w*o),u.z=e*Math.sin(r+P*a)*Math.sin(s+w*o),x.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(P+M,1-w),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const w=h[p][b+1],M=h[p][b],F=h[p+1][b],P=h[p+1][b+1];(p!==0||s>0)&&m.push(w,M,P),(p!==n-1||l<Math.PI)&&m.push(M,F,P)}this.setIndex(m),this.setAttribute("position",new Rt(x,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nl extends wt{constructor(e=1,t=.4,n=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:a},n=Math.floor(n),r=Math.floor(r);const s=[],o=[],l=[],c=[],h=new O,u=new O,d=new O;for(let m=0;m<=n;m++)for(let x=0;x<=r;x++){const _=x/r*a,g=m/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(x/r),c.push(m/n)}for(let m=1;m<=n;m++)for(let x=1;x<=r;x++){const _=(r+1)*m+x-1,g=(r+1)*(m-1)+x-1,p=(r+1)*(m-1)+x,b=(r+1)*m+x;s.push(_,g,b),s.push(g,p,b)}this.setIndex(s),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Kt extends ar{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zh,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vg extends er{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class au extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const vo=new At,Cc=new O,Pc=new O;class xg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new K0,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Cc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cc),Pc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pc),t.updateMatrixWorld(),vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _g extends xg{constructor(){super(new Jh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yg extends au{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new _g}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Mg extends au{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Dc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(rn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Lc=new O;let Wa,xo;class Ic extends Vt{constructor(e=new O(0,0,1),t=new O(0,0,0),n=1,r=16776960,a=n*.2,s=a*.2){super(),this.type="ArrowHelper",Wa===void 0&&(Wa=new wt,Wa.setAttribute("position",new Rt([0,0,0,0,1,0],3)),xo=new Fn(0,.5,1,5,1),xo.translate(0,-.5,0)),this.position.copy(t),this.line=new Sr(Wa,new er({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ke(xo,new li({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,a,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Lc.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Lc,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class bg extends rr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:W0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=W0);const Nc={type:"change"},il={type:"start"},su={type:"end"},qa=new bs,Uc=new Ti,Sg=Math.cos(70*ef.DEG2RAD),kt=new O,un=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_o=1e-6;class wg extends bg{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rr.ROTATE,MIDDLE:Rr.DOLLY,RIGHT:Rr.PAN},this.touches={ONE:wr.ROTATE,TWO:wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new ui,this._lastTargetPosition=new O,this._quat=new ui().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dc,this._sphericalDelta=new Dc,this._scale=1,this._panOffset=new O,this._rotateStart=new We,this._rotateEnd=new We,this._rotateDelta=new We,this._panStart=new We,this._panEnd=new We,this._panDelta=new We,this._dollyStart=new We,this._dollyEnd=new We,this._dollyDelta=new We,this._dollyDirection=new O,this._mouse=new We,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Tg.bind(this),this._onPointerDown=Eg.bind(this),this._onPointerUp=Ag.bind(this),this._onContextMenu=Ng.bind(this),this._onMouseWheel=Pg.bind(this),this._onKeyDown=Dg.bind(this),this._onTouchStart=Lg.bind(this),this._onTouchMove=Ig.bind(this),this._onMouseDown=Rg.bind(this),this._onMouseMove=Cg.bind(this),this._interceptControlDown=Ug.bind(this),this._interceptControlUp=Fg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nc),this.update(),this.state=xt.NONE}update(e=null){const t=this.object.position;kt.copy(t).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=un:n>Math.PI&&(n-=un),r<-Math.PI?r+=un:r>Math.PI&&(r-=un),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=kt.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(qa.origin.copy(this.object.position),qa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qa.direction))<Sg?this.object.lookAt(this.target):(Uc.setFromNormalAndCoplanarPoint(this.object.up,this.target),qa.intersectPlane(Uc,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>_o||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_o||this._lastTargetPosition.distanceToSquared(this.target)>_o?(this.dispatchEvent(Nc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){kt.setFromMatrixColumn(t,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,t){this.screenSpacePanning===!0?kt.setFromMatrixColumn(t,1):(kt.setFromMatrixColumn(t,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;kt.copy(r).sub(this.target);let a=kt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,s=n.width,o=n.height;this._mouse.x=r/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new We,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Eg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Tg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ag(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(su),this.state=xt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Rg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Rr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xt.DOLLY;break;case Rr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}break;case Rr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(il)}function Cg(i){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Pg(i){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(i.preventDefault(),this.dispatchEvent(il),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(su))}function Dg(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Lg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case wr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xt.TOUCH_ROTATE;break;case wr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case wr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xt.TOUCH_DOLLY_PAN;break;case wr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(il)}function Ig(i){switch(this._trackPointer(i),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xt.NONE}}function Ng(i){this.enabled!==!1&&i.preventDefault()}function Ug(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Fg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ls=299792458,Fc=9.80665,je={mass:59722e20,radius:6371,equatorialRadius:6378.137,mu:398600.4418,J2:.00108263,rotationPeriod:86164.0905,semiMajorAxis:1495978707e-1},Tn={mass:7342e19,radius:1737.4,mu:4902.800066,semiMajorAxis:384400,orbitalPeriod:27.321661*86400},Og={radius:3389.5},Bg={mass:19885e26},yo={radius:69911,mu:126686534},Oc=[{id:"goldstone",name:"Goldstone DSN (DSS-14)",location:"Mojave Desert, California, USA",lat:35.4267,lon:-116.89,antennaDiameter:70,txPowerWatts:2e4,frequencyGHz:8.45},{id:"madrid",name:"Madrid DSN (DSS-63)",location:"Robledo de Chavela, Spain",lat:40.4314,lon:-4.2481,antennaDiameter:70,txPowerWatts:2e4,frequencyGHz:8.45},{id:"canberra",name:"Canberra DSN (DSS-43)",location:"Tidbinbilla, ACT, Australia",lat:-35.4014,lon:148.9817,antennaDiameter:70,txPowerWatts:2e4,frequencyGHz:8.45}];function zg(i,e,t=1e-11,n=100){const r=2*Math.PI;if(i=(i%r+r)%r,e<1){let a=e>.8?Math.PI:i;for(let s=0;s<n;s++){const o=a-e*Math.sin(a)-i,l=1-e*Math.cos(a),c=e*Math.sin(a),h=o/(l-.5*o*c/l);if(a-=h,Math.abs(h)<t)break}return a}else{let a=Math.log(2*Math.abs(i)/e+1.8);for(let s=0;s<n;s++){const o=e*Math.sinh(a)-a-i,l=e*Math.cosh(a)-1,c=o/l;if(a-=c,Math.abs(c)<t)break}return a}}function kg(i,e){if(e<1){const t=e/(1+Math.sqrt(1-e*e));return i+2*Math.atan(t*Math.sin(i)/(1-t*Math.cos(i)))}else return 2*Math.atan(Math.sqrt((e+1)/(e-1))*Math.tanh(i/2))}function Hg(i,e){return e<1?2*Math.atan(Math.sqrt((1-e)/(1+e))*Math.tan(i/2)):2*Math.atanh(Math.sqrt((e-1)/(e+1))*Math.tan(i/2))}function Ar(i,e=je.mu){const{semiMajorAxis:t,eccentricity:n,inclination:r,raan:a,argPeriapsis:s,trueAnomaly:o}=i,l=t*(1-n*n),c=l/(1+n*Math.cos(o)),h=[c*Math.cos(o),c*Math.sin(o),0],u=Math.sqrt(e/Math.max(1e-6,Math.abs(l))),d=[-u*Math.sin(o),u*(n+Math.cos(o)),0],m=Math.cos(a),x=Math.sin(a),_=Math.cos(r),g=Math.sin(r),p=Math.cos(s),b=Math.sin(s),w=m*p-x*b*_,M=x*p+m*b*_,F=b*g,P=-m*b-x*p*_,C=-x*b+m*p*_,I=p*g,T=[h[0]*w+h[1]*P,h[0]*M+h[1]*C,h[0]*F+h[1]*I],S=[d[0]*w+d[1]*P,d[0]*M+d[1]*C,d[0]*F+d[1]*I];return{r:T,v:S}}function Gg(i,e,t=je.mu){const n=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]),r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),a=[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],s=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]),o=[-a[1],a[0],0],l=Math.sqrt(o[0]*o[0]+o[1]*o[1]),c=i[0]*e[0]+i[1]*e[1]+i[2]*e[2],h=r*r-t/n,u=[(h*i[0]-c*e[0])/t,(h*i[1]-c*e[1])/t,(h*i[2]-c*e[2])/t],d=Math.sqrt(u[0]*u[0]+u[1]*u[1]+u[2]*u[2]),m=.5*r*r-t/n,x=Math.abs(m)>1e-8?-t/(2*m):1/0,_=Math.acos(Math.max(-1,Math.min(1,a[2]/(s||1))));let g=0;l>1e-8&&(g=Math.acos(Math.max(-1,Math.min(1,o[0]/l))),o[1]<0&&(g=2*Math.PI-g));let p=0;if(l>1e-8&&d>1e-6){const w=o[0]*u[0]+o[1]*u[1];p=Math.acos(Math.max(-1,Math.min(1,w/(l*d)))),u[2]<0&&(p=2*Math.PI-p)}else d>1e-6&&(p=Math.atan2(u[1],u[0]),p<0&&(p+=2*Math.PI));let b=0;if(d>1e-6){const w=u[0]*i[0]+u[1]*i[1]+u[2]*i[2];b=Math.acos(Math.max(-1,Math.min(1,w/(d*n)))),c<0&&(b=2*Math.PI-b)}else b=Math.atan2(i[1],i[0]),b<0&&(b+=2*Math.PI);return{semiMajorAxis:x,eccentricity:d,inclination:_,raan:g,argPeriapsis:p,trueAnomaly:b}}function Bc(i,e=je.mu,t=je.radius){const{semiMajorAxis:n,eccentricity:r,trueAnomaly:a}=i,s=n*(1-r*r),o=s/(1+r*Math.cos(a)),l=Math.sqrt(Math.max(0,e*(2/o-1/n))),c=n>0?2*Math.PI*Math.sqrt(Math.pow(n,3)/e):1/0,h=n*(1-r),u=r<1?n*(1+r):1/0,d=h-t,m=u!==1/0?u-t:1/0,x=-e/(2*n),_=Math.sqrt(Math.max(0,e*s)),g=Math.atan2(r*Math.sin(a),1+r*Math.cos(a)),p=Hg(a,r),b=r<1?p-r*Math.sin(p):r*Math.sinh(p)-p,w=n>0?Math.sqrt(e/Math.pow(n,3)):0,M=w>0?(2*Math.PI-(b%(2*Math.PI)+2*Math.PI)%(2*Math.PI))/w:0;return{rMag:o,vMag:l,period:c,apoapsis:u,periapsis:h,apoapsisAlt:m,periapsisAlt:d,specificEnergy:x,angularMomentum:_,semiLatusRectum:s,flightPathAngle:g,timeToPeriapsis:M,meanAnomaly:b,eccentricAnomaly:p}}function Vg(i,e=je.mu,t=je.equatorialRadius,n=je.J2){const r=i[0]*i[0]+i[1]*i[1]+i[2]*i[2],a=Math.sqrt(r);if(a<.001)return[0,0,0];const s=i[2],o=s*s/r,l=1.5*n*e*t*t/(r*r),c=-l*(i[0]/a)*(1-5*o),h=-l*(i[1]/a)*(1-5*o),u=-l*(i[2]/a)*(3-5*o);return[c,h,u]}function Xa(i,e,t=je.mu,n=!0,r=je.equatorialRadius,a=je.J2,s=[0,0,0]){const o=i[0]*i[0]+i[1]*i[1]+i[2]*i[2],l=Math.sqrt(o),c=-t/(l*o),h=[c*i[0],c*i[1],c*i[2]],u=[0,0,0];for(const x of e){const _=x.position[0]-i[0],g=x.position[1]-i[1],p=x.position[2]-i[2],b=_*_+g*g+p*p,w=Math.sqrt(b),M=x.position[0]*x.position[0]+x.position[1]*x.position[1]+x.position[2]*x.position[2],F=Math.sqrt(M);if(w>1&&F>1){const P=x.mu/(b*w),C=x.mu/(M*F);u[0]+=P*_-C*x.position[0],u[1]+=P*g-C*x.position[1],u[2]+=P*p-C*x.position[2]}}let d=[0,0,0];n&&t===je.mu&&(d=Vg(i,t,r,a));const m=[h[0]+u[0]+d[0]+s[0],h[1]+u[1]+d[1]+s[1],h[2]+u[2]+d[2]+s[2]];return{centralGravity:h,nBodyGravity:u,j2Oblateness:d,thrust:s,total:m}}function ou(i,e,t=[],n=je.mu,r=!0,a=[0,0,0]){const{r:s,v:o}=i,l=Xa(s,t,n,r,je.equatorialRadius,je.J2,a),c=l.total,h=o,u=[s[0]+.5*e*h[0],s[1]+.5*e*h[1],s[2]+.5*e*h[2]],d=[o[0]+.5*e*c[0],o[1]+.5*e*c[1],o[2]+.5*e*c[2]],x=Xa(u,t,n,r,je.equatorialRadius,je.J2,a).total,_=d,g=[s[0]+.5*e*_[0],s[1]+.5*e*_[1],s[2]+.5*e*_[2]],p=[o[0]+.5*e*x[0],o[1]+.5*e*x[1],o[2]+.5*e*x[2]],w=Xa(g,t,n,r,je.equatorialRadius,je.J2,a).total,M=p,F=[s[0]+e*M[0],s[1]+e*M[1],s[2]+e*M[2]],P=[o[0]+e*w[0],o[1]+e*w[1],o[2]+e*w[2]],I=Xa(F,t,n,r,je.equatorialRadius,je.J2,a).total,T=P,S=[s[0]+e/6*(h[0]+2*_[0]+2*M[0]+T[0]),s[1]+e/6*(h[1]+2*_[1]+2*M[1]+T[1]),s[2]+e/6*(h[2]+2*_[2]+2*M[2]+T[2])],U=[o[0]+e/6*(c[0]+2*x[0]+2*w[0]+I[0]),o[1]+e/6*(c[1]+2*x[1]+2*w[1]+I[1]),o[2]+e/6*(c[2]+2*x[2]+2*w[2]+I[2])];return{nextState:{r:S,v:U},forces:l}}function Wg(i,e,t=200,n=[],r=je.mu){const a=[i.r];let s={...i};const o=e/t;for(let l=0;l<t;l++)s=ou(s,o,n,r,!0,[0,0,0]).nextState,a.push(s.r);return a}function zc(i,e,t=.65){const n=ls/(e*1e9),r=t*Math.pow(Math.PI*i/n,2);return 10*Math.log10(Math.max(1,r))}function lu(i,e,t,n=0){const r=i*Math.PI/180,a=e*Math.PI/180+t,s=je.radius+n;return[s*Math.cos(r)*Math.cos(a),s*Math.cos(r)*Math.sin(a),s*Math.sin(r)]}function qg(i,e,t=25,n=2.4,r=0,a=8.42){let s=Oc[0],o=-90,l=1/0,c=0,h=[0,0,0];for(const W of Oc){const X=lu(W.lat,W.lon,r),Z=[i[0]-X[0],i[1]-X[1],i[2]-X[2]],K=Math.sqrt(Z[0]*Z[0]+Z[1]*Z[1]+Z[2]*Z[2]),te=Math.sqrt(X[0]*X[0]+X[1]*X[1]+X[2]*X[2]),Y=[X[0]/te,X[1]/te,X[2]/te],pe=(Z[0]*Y[0]+Z[1]*Y[1]+Z[2]*Y[2])/K,se=Math.asin(Math.max(-1,Math.min(1,pe)))*180/Math.PI;se>o&&(o=se,s=W,l=K,h=X,c=Math.atan2(Z[1],Z[0])*(180/Math.PI))}const u=Math.max(10,l),d=u*1e3,m=d/ls,x=m*2;let _=`${m.toFixed(2)} s`;if(m>60){const W=Math.floor(m/60),X=(m%60).toFixed(1);_=`${W}m ${X}s`}const g=ls/(a*1e9),p=20*Math.log10(4*Math.PI*d/g),b=10*Math.log10(t*1e3),w=zc(n,a,.6),M=zc(s.antennaDiameter,a,.7),F=b+w+M-p-.5,P=-174+10*Math.log10(20)+10*Math.log10(1e5),C=Math.max(-5,Math.min(65,F-P)),I=[(i[0]-h[0])/u,(i[1]-h[1])/u,(i[2]-h[2])/u],S=(e[0]*I[0]+e[1]*I[1]+e[2]*I[2])*1e3,U=-(a*1e9*(S/ls));let V=1;return C>25?V=2048:C>18?V=512:C>10?V=128:C>5?V=32:V=4,{activeStation:s,distanceKm:u,oneWayLightTimeSeconds:m,oneWayLightTimeString:_,roundTripLightTimeSeconds:x,fsplDb:p,receivedPowerDbm:F,snrDb:C,carrierFrequencyGHz:a,dopplerShiftHz:U,stationElevationDeg:o,isInLineOfSight:o>5,bitrateKbps:V,stationAzimuthDeg:(c%360+360)%360}}const Xg={mu:je.mass/(Bg.mass+je.mass),distance:je.semiMajorAxis},cu={id:"earth-moon",name:"Earth - Moon System",nameAr:"نظام الأرض - القمر",primaryName:"Earth",secondaryName:"Moon",m1:je.mass,m2:Tn.mass,mu:Tn.mass/(je.mass+Tn.mass),distance:Tn.semiMajorAxis,orbitalPeriod:Tn.orbitalPeriod};function Mo(i,e,t){let n=e;for(let r=0;r<50;r++){const a=n+i,s=n-(1-i),o=(1-i)/(a*a*Math.sign(a)),l=i/(s*s)*t,c=n-o-l,h=1+2*(1-i)/(Math.abs(a)*a*a)+2*i/(Math.abs(s)*s*s),u=c/h;if(n-=u,Math.abs(u)<1e-12)break}return n}function Yg(i,e,t,n){const r=Math.sqrt((i+n)*(i+n)+e*e+t*t),a=Math.sqrt((i-1+n)*(i-1+n)+e*e+t*t);return r<1e-6||a<1e-6?0:.5*(i*i+e*e)+(1-n)/r+n/a}function hu(i=cu){const{mu:e,distance:t}=i,n=Math.cbrt(e/3),r=Mo(e,1-e-n,1),a=Mo(e,1-e+n,-1),s=Mo(e,-(1+5/12*e),1),o=.5-e,l=Math.sqrt(3)/2,c=-Math.sqrt(3)/2;return[{id:"L1",name:"Lagrange Point L1",nameAr:"نقطة لاغرانج الأولى (L1)",x:r,y:0,stability:"Unstable (Saddle)",stabilityAr:"غير مستقرة (توازن ديناميكي دقيق)"},{id:"L2",name:"Lagrange Point L2",nameAr:"نقطة لاغرانج الثانية (L2)",x:a,y:0,stability:"Unstable (Saddle)",stabilityAr:"غير مستقرة (موقع تلسكوب ويب)"},{id:"L3",name:"Lagrange Point L3",nameAr:"نقطة لاغرانج الثالثة (L3)",x:s,y:0,stability:"Unstable (Saddle)",stabilityAr:"غير مستقرة (الجانب المقابل)"},{id:"L4",name:"Lagrange Point L4",nameAr:"نقطة لاغرانج الرابعة (L4)",x:o,y:l,stability:"Stable (Dynamical)",stabilityAr:"مستقرة ديناميكياً (طروادة متقدمة)"},{id:"L5",name:"Lagrange Point L5",nameAr:"نقطة لاغرانج الخامسة (L5)",x:o,y:c,stability:"Stable (Dynamical)",stabilityAr:"مستقرة ديناميكياً (طروادة متأخرة)"}].map(u=>{const d=(u.x+e)*t,m=u.y*t;return{id:u.id,name:u.name,nameAr:u.nameAr,normalizedCoords:[u.x,u.y,0],realCoords:[d,m,0],stability:u.stability,stabilityAr:u.stabilityAr,effectivePotential:Yg(u.x,u.y,0,e)}})}function jg(i,e=25e3,t=5e4,n=120){const r=[],[a,s,o]=i.realCoords,l=Math.PI/2;for(let c=0;c<=n;c++){const h=c/n*2*Math.PI,u=-t*.35*Math.cos(h),d=t*Math.sin(h),m=e*Math.sin(h+l);r.push([a+u,s+d,o+m])}return r}class $g{constructor(){Se(this,"group");Se(this,"components");Se(this,"plumeMaterials",[]);Se(this,"solarDeploymentProgress",1);Se(this,"hgaAzimuth",0);Se(this,"hgaElevation",.3);this.group=new Gt,this.components=this.buildModel()}buildModel(){const e=new Gt,t=new Gt,n=new Kt({color:14653972,metalness:.85,roughness:.25,bumpScale:.05}),r=new Kt({color:2040619,metalness:.9,roughness:.4}),a=new Kt({color:14212841,metalness:.7,roughness:.3}),s=new Fn(1.6,1.8,2.6,8),o=new Ke(s,n);o.rotation.y=Math.PI/8,o.castShadow=!0,o.receiveShadow=!0,t.add(o);const l=new nl(1.75,.08,16,32),c=new Ke(l,r);c.rotation.x=Math.PI/2,c.position.y=1.3,t.add(c);const h=new Ke(l,r);h.rotation.x=Math.PI/2,h.position.y=-1.3,t.add(h);const u=new Tr(.7,1.4,32,1,!0),d=new Kt({color:1118999,metalness:.95,roughness:.2,side:En}),m=new Ke(u,d);m.position.y=-1.9,m.rotation.x=Math.PI,t.add(m);const x=new Gt;x.position.set(0,1.4,0);const _=new Fn(.3,.4,.3,16),g=new Ke(_,a);x.add(g);const p=new Gt;p.position.set(0,.35,0);const b=1.5,w=new gn(b,32,16,0,Math.PI*2,0,Math.PI/3.2),M=new Kt({color:16119802,metalness:.4,roughness:.2,side:En}),F=new Ke(w,M);F.rotation.x=-Math.PI/2,F.position.z=.5,p.add(F);const P=new Kt({color:3355443,metalness:.8});for(let se=0;se<3;se++){const xe=se*2*Math.PI/3,Re=new Fn(.02,.02,1.3),He=new Ke(Re,P);He.position.set(Math.cos(xe)*.5,Math.sin(xe)*.5,.9),He.rotation.z=xe+Math.PI/2,He.rotation.x=.4,p.add(He)}const C=new Tr(.12,.3,16),I=new Ke(C,n);I.position.set(0,0,1.35),I.rotation.x=Math.PI/2,p.add(I),x.add(p),t.add(x);const T=this.createSolarWing(1),S=this.createSolarWing(-1);t.add(T),t.add(S);const U=[],V=[{pos:[1.3,.9,1.3],rot:[0,Math.PI/4,0]},{pos:[-1.3,.9,1.3],rot:[0,3*Math.PI/4,0]},{pos:[-1.3,.9,-1.3],rot:[0,5*Math.PI/4,0]},{pos:[1.3,.9,-1.3],rot:[0,7*Math.PI/4,0]},{pos:[1.3,-.9,1.3],rot:[0,Math.PI/4,0]},{pos:[-1.3,-.9,1.3],rot:[0,3*Math.PI/4,0]},{pos:[-1.3,-.9,-1.3],rot:[0,5*Math.PI/4,0]},{pos:[1.3,-.9,-1.3],rot:[0,7*Math.PI/4,0]}],W=new Tr(.2,.9,16);W.translate(0,.45,0),V.forEach(se=>{const xe=new Ii(.25,.25,.25),Re=new Ke(xe,r);Re.position.set(se.pos[0],se.pos[1],se.pos[2]);const He=new Tr(.06,.14,8),Q=new Ke(He,r);Q.rotation.x=Math.PI/2,Q.position.z=.15,Re.add(Q);const he=new li({color:4500223,transparent:!0,opacity:0,blending:tr});this.plumeMaterials.push(he);const Ae=new Ke(W,he);Ae.position.set(0,0,.16),Ae.rotation.x=-Math.PI/2,Re.add(Ae),U.push(Ae),Re.rotation.set(se.rot[0],se.rot[1],se.rot[2]),t.add(Re)});const X=new Fn(.03,.03,3.2),Z=new Ke(X,a);Z.position.set(0,0,-2.2),Z.rotation.x=Math.PI/2,t.add(Z);const K=new gn(.15,12,12),te=new Ke(K,n);te.position.set(0,0,-3.8),t.add(te);for(let se=0;se<2;se++){const xe=new Fn(.08,.12,.35,16),Re=new Ke(xe,r);Re.position.set(se===0?.7:-.7,1.2,.7),Re.rotation.x=.6,Re.rotation.y=se===0?.4:-.4,t.add(Re)}const Y=new Gt,pe=new Kt({color:58879,metalness:.8,roughness:.2});for(let se=0;se<3;se++){const xe=new Fn(.4,.4,.1,24),Re=new Ke(xe,pe);se===0&&(Re.rotation.x=Math.PI/2),se===1&&(Re.rotation.z=Math.PI/2),Y.add(Re)}return Y.position.set(0,0,0),t.add(Y),e.add(t),this.group.add(e),{rootGroup:e,busGroup:t,leftSolarWing:T,rightSolarWing:S,hgaDishGroup:x,hgaGimbalElevation:p,thrusterPlumes:U,reactionWheelsGroup:Y}}createSolarWing(e){const t=new Gt;t.position.set(e*1.8,0,0);const n=new Fn(.08,.08,.8),r=new Kt({color:5592405,metalness:.8}),a=new Ke(n,r);a.rotation.z=Math.PI/2,a.position.x=e*.4,t.add(a);const s=new Gt;s.position.x=e*.8;const o=new Kt({color:662858,metalness:.8,roughness:.1,emissive:198680}),l=new Kt({color:2236966,metalness:.5,roughness:.7}),c=3,h=1.4,u=2.4;for(let d=0;d<c;d++){const m=new Gt;m.position.x=e*(d*(h+.1));const x=new Ii(h,u,.04),_=new Ke(x,o);m.add(_);const g=new Ii(h*.96,u*.96,.042),p=new Ke(g,l);p.position.z=-.01,m.add(p),s.add(m)}return t.add(s),t}fireThrusterBurst(e=1){this.plumeMaterials.forEach(t=>{t.opacity=Math.min(1,e*(.7+Math.random()*.3))})}update(e){this.plumeMaterials.forEach(t=>{t.opacity>0&&(t.opacity=Math.max(0,t.opacity-e*3.5))}),this.components.reactionWheelsGroup.children.forEach((t,n)=>{t.rotation.y+=(n+1)*3*e})}pointHGA(e,t){this.components.hgaDishGroup.rotation.y=e,this.components.hgaGimbalElevation.rotation.x=Math.max(-.2,Math.min(Math.PI/2,t))}setSolarDeployment(e){this.solarDeploymentProgress=Math.max(0,Math.min(1,e)),this.components.leftSolarWing.scale.set(this.solarDeploymentProgress,1,1),this.components.rightSolarWing.scale.set(this.solarDeploymentProgress,1,1)}}class Zg{constructor(){Se(this,"mode","PROGRADE");Se(this,"currentQuat",new ui);Se(this,"targetQuat",new ui);Se(this,"maxSlewRateDegPerSec",2.5);Se(this,"lastFiredThrusters",!1);this.currentQuat.identity(),this.targetQuat.identity()}setMode(e){this.mode=e}setManualEuler(e,t,n){this.mode="MANUAL";const r=new Cn(t*Math.PI/180,n*Math.PI/180,e*Math.PI/180,"YXZ");this.targetQuat.setFromEuler(r)}updateTargetAttitude(e,t,n=[0,0,0],r){if(this.mode==="MANUAL")return;const a=new O(t[0],t[1],t[2]).normalize(),s=new O(e[0],e[1],e[2]).normalize(),o=new O().crossVectors(s,a).normalize(),l=new O,c=new O;switch(this.mode){case"PROGRADE":l.copy(a),c.copy(o);break;case"RETROGRADE":l.copy(a).negate(),c.copy(o);break;case"NORMAL":l.copy(o),c.copy(s);break;case"ANTI_NORMAL":l.copy(o).negate(),c.copy(s);break;case"EARTH_POINTING":l.copy(s).negate(),c.copy(o);break;case"SUN_POINTING":{const h=new O(n[0]-e[0],n[1]-e[1],n[2]-e[2]).normalize();l.copy(h),c.copy(o);break}case"TARGET_POINTING":{if(r){const h=new O(r[0]-e[0],r[1]-e[1],r[2]-e[2]).normalize();l.copy(h),c.copy(o)}else l.copy(a),c.copy(o);break}}if(l.lengthSq()>.01){const h=new O().crossVectors(c,l).normalize(),u=new O().crossVectors(l,h).normalize(),d=new At;d.makeBasis(h,u,l),this.targetQuat.setFromRotationMatrix(d)}}update(e,t){const n=this.currentQuat.angleTo(this.targetQuat),r=n*180/Math.PI;let a=!1;const s=this.maxSlewRateDegPerSec*Math.PI/180*e;if(n>1e-4){const o=Math.min(1,s/n);this.currentQuat.slerp(this.targetQuat,o),r>1&&(a=!0,t.fireThrusterBurst(Math.min(1,r/10)))}return t.group.quaternion.copy(this.currentQuat),t.update(e),this.lastFiredThrusters=a,{firedThrusters:a,pointingErrorDeg:r}}getState(){const e=new Cn().setFromQuaternion(this.currentQuat,"YXZ"),t=this.currentQuat.angleTo(this.targetQuat)*180/Math.PI;return{mode:this.mode,quaternion:[this.currentQuat.x,this.currentQuat.y,this.currentQuat.z,this.currentQuat.w],eulerDeg:{roll:e.z*180/Math.PI,pitch:e.x*180/Math.PI,yaw:e.y*180/Math.PI},angularVelocityDegS:[0,this.lastFiredThrusters?1.2:.05,0],isSlewing:t>.5,pointingErrorDeg:t}}}class Kg{constructor(){Se(this,"group");Se(this,"celestialBodies");Se(this,"scaleRatio",1/1e3);Se(this,"earthRotationAngle",0);this.group=new Gt,this.celestialBodies=this.buildCelestialBodies()}buildCelestialBodies(){const e=this.createStarfield(7e3);this.group.add(e);const t=new Gt;t.rotation.z=23.4*Math.PI/180;const n=je.radius*this.scaleRatio,r=new gn(n,64,64),a=this.generateEarthCanvasTexture(),s=new Kt({map:a,roughness:.6,metalness:.1}),o=new Ke(r,s);o.castShadow=!0,o.receiveShadow=!0,t.add(o);const l=new gn(n*1.015,48,48),c=this.generateCloudsTexture(),h=new Kt({map:c,transparent:!0,opacity:.35,blending:tr}),u=new Ke(l,h);t.add(u);const d=new gn(n*1.05,48,48),m=new qn({vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.8);
          gl_FragColor = vec4(0.2, 0.6, 1.0, 1.0) * intensity * 1.8;
        }
      `,blending:tr,side:Jt,transparent:!0}),x=new Ke(d,m);t.add(x),this.group.add(t);const _=Tn.radius*this.scaleRatio,g=new gn(_,32,32),p=this.generateMoonCanvasTexture(),b=new Kt({map:p,roughness:.9,metalness:.05}),w=new Ke(g,b);w.castShadow=!0,w.receiveShadow=!0,this.group.add(w);const M=Og.radius*this.scaleRatio,F=new gn(M,48,48),P=this.generateMarsCanvasTexture(),C=new Kt({map:P,roughness:.8,metalness:.1}),I=new Ke(F,C);I.castShadow=!0,I.receiveShadow=!0,this.group.add(I);const T=new Gt,S=25,U=new gn(S,48,48),V=this.generateJupiterCanvasTexture(),W=new Kt({map:V,roughness:.7}),X=new Ke(U,W);T.add(X),this.group.add(T);const Z=new Gt,K=20,te=new gn(K,48,48),Y=new Kt({color:14598280,roughness:.7}),pe=new Ke(te,Y);Z.add(pe);const se=new tl(K*1.3,K*2.3,64),xe=new li({color:13350277,side:En,transparent:!0,opacity:.75}),Re=new Ke(se,xe);Re.rotation.x=Math.PI/2.3,Z.add(Re),this.group.add(Z);const He=50,Q=new gn(He,32,32),he=new li({color:16773290}),Ae=new Ke(Q,he),me=new gn(He*1.6,32,32),Oe=new qn({vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.55 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(1.0, 0.75, 0.2, 1.0) * intensity * 2.0;
        }
      `,blending:tr,side:Jt,transparent:!0}),Be=new Ke(me,Oe);return Ae.add(Be),this.group.add(Ae),{earth:t,earthSurface:o,earthClouds:u,earthAtmosphere:x,moon:w,mars:I,jupiter:T,saturn:Z,sun:Ae,sunCorona:Be,starfield:e}}createStarfield(e){const t=new wt,n=new Float32Array(e*3),r=new Float32Array(e*3),a=[new it(11189247),new it(16777215),new it(16773836),new it(16759722)];for(let o=0;o<e;o++){const l=3e4+Math.random()*2e4,c=2*Math.PI*Math.random(),h=Math.acos(2*Math.random()-1);n[o*3]=l*Math.sin(h)*Math.cos(c),n[o*3+1]=l*Math.sin(h)*Math.sin(c),n[o*3+2]=l*Math.cos(h);const u=a[Math.floor(Math.random()*a.length)];r[o*3]=u.r,r[o*3+1]=u.g,r[o*3+2]=u.b}t.setAttribute("position",new Rn(n,3)),t.setAttribute("color",new Rn(r,3));const s=new ru({size:3.5,vertexColors:!0,transparent:!0,opacity:.9});return new gg(t,s)}generateEarthCanvasTexture(){const e=document.createElement("canvas");e.width=1024,e.height=512;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,e.height);n.addColorStop(0,"#0c274c"),n.addColorStop(.5,"#0d3266"),n.addColorStop(1,"#0c274c"),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),t.fillStyle="#2d5e37",t.beginPath(),t.ellipse(520,240,70,110,.2,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(680,180,120,70,-.1,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(250,190,60,90,.3,0,Math.PI*2),t.ellipse(310,320,50,80,.1,0,Math.PI*2),t.fill(),t.fillStyle="#9e6231",t.beginPath(),t.ellipse(820,340,45,30,.1,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.fillRect(0,0,e.width,25),t.fillRect(0,e.height-30,e.width,30);const r=new na(e);return r.wrapS=Ai,r.wrapT=Ci,r}generateCloudsTexture(){const e=document.createElement("canvas");e.width=512,e.height=256;const t=e.getContext("2d");t.fillStyle="rgba(0,0,0,0)",t.fillRect(0,0,e.width,e.height),t.fillStyle="rgba(255, 255, 255, 0.8)";for(let r=0;r<40;r++){const a=Math.random()*e.width,s=40+Math.random()*(e.height-80),o=30+Math.random()*80,l=10+Math.random()*30;t.beginPath(),t.ellipse(a,s,o,l,Math.random()*.4,0,Math.PI*2),t.fill()}const n=new na(e);return n.wrapS=Ai,n}generateMoonCanvasTexture(){const e=document.createElement("canvas");e.width=512,e.height=256;const t=e.getContext("2d");t.fillStyle="#8b8e94",t.fillRect(0,0,e.width,e.height),t.fillStyle="#56585c";for(let r=0;r<15;r++)t.beginPath(),t.arc(Math.random()*e.width,Math.random()*e.height,20+Math.random()*40,0,Math.PI*2),t.fill();t.strokeStyle="#c5c9d1",t.lineWidth=2;for(let r=0;r<30;r++)t.beginPath(),t.arc(Math.random()*e.width,Math.random()*e.height,5+Math.random()*15,0,Math.PI*2),t.stroke();const n=new na(e);return n.wrapS=Ai,n}generateMarsCanvasTexture(){const e=document.createElement("canvas");e.width=512,e.height=256;const t=e.getContext("2d");t.fillStyle="#b84e27",t.fillRect(0,0,e.width,e.height),t.fillStyle="#6e2f18";for(let r=0;r<12;r++)t.beginPath(),t.ellipse(Math.random()*e.width,Math.random()*e.height,40+Math.random()*50,20+Math.random()*30,.3,0,Math.PI*2),t.fill();t.fillStyle="#f0f5ff",t.fillRect(0,0,e.width,16),t.fillRect(0,e.height-20,e.width,20);const n=new na(e);return n.wrapS=Ai,n}generateJupiterCanvasTexture(){const e=document.createElement("canvas");e.width=512,e.height=256;const t=e.getContext("2d"),n=["#d8a873","#ba8151","#f3d6b0","#9d633b","#e7caa1","#bc804c"],r=e.height/n.length;n.forEach((s,o)=>{t.fillStyle=s,t.fillRect(0,o*r,e.width,r)}),t.fillStyle="#c8442a",t.beginPath(),t.ellipse(280,160,45,25,0,0,Math.PI*2),t.fill();const a=new na(e);return a.wrapS=Ai,a}update(e,t){this.earthRotationAngle=t,this.celestialBodies.earthSurface.rotation.y=this.earthRotationAngle,this.celestialBodies.earthClouds.rotation.y=this.earthRotationAngle*1.05}}class Jg{constructor(){Se(this,"group");Se(this,"scaleRatio",1/1e3);Se(this,"keplerOrbitLine");Se(this,"predictedTrajectoryLine");Se(this,"pastTrailLine");Se(this,"periapsisMarker");Se(this,"apoapsisMarker");Se(this,"velocityArrow");Se(this,"accelerationArrow");Se(this,"dsnBeamLine");Se(this,"lagrangeMarkersGroup");Se(this,"haloOrbitLine");Se(this,"pastPositions",[]);Se(this,"maxTrailPoints",300);this.group=new Gt;const e=new wt,t=new er({color:58879,linewidth:2,transparent:!0,opacity:.85});this.keplerOrbitLine=new Sr(e,t),this.group.add(this.keplerOrbitLine);const n=new wt,r=new vg({color:16764928,linewidth:2,scale:1,dashSize:3,gapSize:2,transparent:!0,opacity:.9});this.predictedTrajectoryLine=new Sr(n,r),this.group.add(this.predictedTrajectoryLine);const a=new wt,s=new er({color:4027647,transparent:!0,opacity:.5});this.pastTrailLine=new Sr(a,s),this.group.add(this.pastTrailLine);const o=new el(.35,0),l=new li({color:65416,wireframe:!0});this.periapsisMarker=new Ke(o,l),this.group.add(this.periapsisMarker);const c=new li({color:16729190,wireframe:!0});this.apoapsisMarker=new Ke(o,c),this.group.add(this.apoapsisMarker),this.velocityArrow=new Ic(new O(1,0,0),new O(0,0,0),2.5,65416,.6,.3),this.group.add(this.velocityArrow),this.accelerationArrow=new Ic(new O(0,1,0),new O(0,0,0),2,16754176,.5,.25),this.group.add(this.accelerationArrow);const h=new wt().setFromPoints([new O(0,0,0),new O(0,0,0)]),u=new er({color:65484,transparent:!0,opacity:.75,blending:tr});this.dsnBeamLine=new Sr(h,u),this.group.add(this.dsnBeamLine),this.lagrangeMarkersGroup=new Gt,this.group.add(this.lagrangeMarkersGroup);const d=new wt,m=new er({color:12540658,transparent:!0,opacity:.8});this.haloOrbitLine=new Sr(d,m),this.group.add(this.haloOrbitLine)}updateKeplerOrbit(e,t,n=240){const r=[],a=e.eccentricity>=1,s=a?Math.min(2.2,Math.acos(-1/e.eccentricity)*.92):Math.PI;if(a)for(let l=-n;l<=n;l++){const c=l/n*s,h=Ar({...e,trueAnomaly:c},t);r.push(new O(h.r[0]*this.scaleRatio,h.r[2]*this.scaleRatio,-h.r[1]*this.scaleRatio))}else for(let l=0;l<=n;l++){const c=l/n*2*Math.PI,h=Ar({...e,trueAnomaly:c},t);r.push(new O(h.r[0]*this.scaleRatio,h.r[2]*this.scaleRatio,-h.r[1]*this.scaleRatio))}this.keplerOrbitLine.geometry.dispose(),this.keplerOrbitLine.geometry=new wt().setFromPoints(r);const o=Ar({...e,trueAnomaly:0},t);if(this.periapsisMarker.position.set(o.r[0]*this.scaleRatio,o.r[2]*this.scaleRatio,-o.r[1]*this.scaleRatio),a)this.apoapsisMarker.visible=!1;else{const l=Ar({...e,trueAnomaly:Math.PI},t);this.apoapsisMarker.position.set(l.r[0]*this.scaleRatio,l.r[2]*this.scaleRatio,-l.r[1]*this.scaleRatio),this.apoapsisMarker.visible=!0}}updatePredictedTrajectory(e){const t=e.map(n=>new O(n[0]*this.scaleRatio,n[2]*this.scaleRatio,-n[1]*this.scaleRatio));this.predictedTrajectoryLine.geometry.dispose(),this.predictedTrajectoryLine.geometry=new wt().setFromPoints(t),this.predictedTrajectoryLine.computeLineDistances()}updateSpacecraftVectors(e,t,n){const r=new O(e[0]*this.scaleRatio,e[2]*this.scaleRatio,-e[1]*this.scaleRatio);this.pastPositions.push(r.clone()),this.pastPositions.length>this.maxTrailPoints&&this.pastPositions.shift(),this.pastTrailLine.geometry.dispose(),this.pastTrailLine.geometry=new wt().setFromPoints(this.pastPositions);const a=new O(t[0],t[2],-t[1]),s=a.length();s>1e-4?(a.normalize(),this.velocityArrow.position.copy(r),this.velocityArrow.setDirection(a),this.velocityArrow.setLength(Math.min(12,Math.max(1.8,s*.8)),.6,.25),this.velocityArrow.visible=!0):this.velocityArrow.visible=!1;const o=new O(n[0],n[2],-n[1]),l=o.length();l>1e-6?(o.normalize(),this.accelerationArrow.position.copy(r),this.accelerationArrow.setDirection(o),this.accelerationArrow.setLength(Math.min(10,Math.max(1.5,l*2e3)),.5,.2),this.accelerationArrow.visible=!0):this.accelerationArrow.visible=!1}updateDsnBeam(e,t,n){const r=new O(e[0]*this.scaleRatio,e[2]*this.scaleRatio,-e[1]*this.scaleRatio),a=new O(t[0]*this.scaleRatio,t[2]*this.scaleRatio,-t[1]*this.scaleRatio);this.dsnBeamLine.geometry.dispose(),this.dsnBeamLine.geometry=new wt().setFromPoints([r,a]),this.dsnBeamLine.material.color.setHex(n?65484:16726832),this.dsnBeamLine.visible=!0}updateLagrangePoints(e){for(;this.lagrangeMarkersGroup.children.length>0;){const r=this.lagrangeMarkersGroup.children[0];this.lagrangeMarkersGroup.remove(r)}const t=new Q0(.5,0),n=new li({color:12540658,wireframe:!0});e.forEach(r=>{const a=new Ke(t,n);a.position.set(r.realCoords[0]*this.scaleRatio,r.realCoords[2]*this.scaleRatio,-r.realCoords[1]*this.scaleRatio),this.lagrangeMarkersGroup.add(a)})}updateHaloOrbit(e){const t=e.map(n=>new O(n[0]*this.scaleRatio,n[2]*this.scaleRatio,-n[1]*this.scaleRatio));this.haloOrbitLine.geometry.dispose(),this.haloOrbitLine.geometry=new wt().setFromPoints(t),this.haloOrbitLine.visible=t.length>0}clearTrail(){this.pastPositions=[]}}class Qg{constructor(){Se(this,"ctx",null);Se(this,"isMuted",!1);Se(this,"masterGain",null)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.3,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.3,this.ctx.currentTime),this.isMuted}getMuted(){return this.isMuted}playTelemetryBeep(e=1440,t=.04){if(!this.isMuted)try{if(this.initContext(),!this.ctx||!this.masterGain)return;const n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(e,this.ctx.currentTime),r.gain.setValueAtTime(.08,this.ctx.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+t),n.connect(r),r.connect(this.masterGain),n.start(),n.stop(this.ctx.currentTime+t)}catch{}}playThrusterBurst(e=.15){if(!this.isMuted)try{if(this.initContext(),!this.ctx||!this.masterGain)return;const t=this.ctx.sampleRate*e,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),r=n.getChannelData(0);for(let l=0;l<t;l++)r[l]=Math.random()*2-1;const a=this.ctx.createBufferSource();a.buffer=n;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(800,this.ctx.currentTime),s.Q.setValueAtTime(1.5,this.ctx.currentTime);const o=this.ctx.createGain();o.gain.setValueAtTime(.25,this.ctx.currentTime),o.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+e),a.connect(s),s.connect(o),o.connect(this.masterGain),a.start()}catch{}}playRadarPing(){if(!this.isMuted)try{if(this.initContext(),!this.ctx||!this.masterGain)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(2200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(880,this.ctx.currentTime+.35),t.gain.setValueAtTime(.12,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.5),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.5)}catch{}}playBurnIgnition(){if(!this.isMuted)try{if(this.initContext(),!this.ctx||!this.masterGain)return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(65,this.ctx.currentTime),e.frequency.linearRampToValueAtTime(120,this.ctx.currentTime+.4),t.gain.setValueAtTime(.2,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.8),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.8)}catch{}}playAlert(){if(!this.isMuted)try{if(this.initContext(),!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime;[880,660].forEach((t,n)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(t,e+n*.12),a.gain.setValueAtTime(.15,e+n*.12),a.gain.exponentialRampToValueAtTime(.001,e+n*.12+.18),r.connect(a),a.connect(this.masterGain),r.start(e+n*.12),r.stop(e+n*.12+.18)})}catch{}}}const ia={en:{appTitle:"AstroDynamics Mission Control",appSubtitle:"Orbital Mechanics & Deep Space Flight Director",authorBadge:"Engineered by Tareq Abuashi",tabTelemetry:"Flight Telemetry",tabKepler:"Keplerian Elements",tabManeuvers:"Maneuver Planner",tabMissions:"Mission Profiles",tabDsn:"DSN Link Budget",tabLagrange:"Lagrange Points",missionArtemisTitle:"Artemis Lunar Gateway & NRHO",missionArtemisDesc:"Translunar Injection (TLI), Lunar Orbit Insertion (LOI), and Near-Rectilinear Halo Orbit (NRHO).",missionMarsTitle:"Mars 2026 Transit & Aerocapture",missionMarsDesc:"Heliocentric Hohmann transfer arc with hypervelocity Mars atmospheric entry interface.",missionJwstTitle:"James Webb Space Telescope (JWST)",missionJwstDesc:"Sun-Earth L2 Lagrange Halo Orbit with multi-layer deployable sunshield orientation.",missionVoyagerTitle:"Voyager Grand Tour Slingshot",missionVoyagerDesc:"Barycentric gravity assist flybys past Jupiter and Saturn escaping the solar system.",btnLaunchMission:"Execute Mission Profile",semiMajorAxis:"Semi-Major Axis (a)",eccentricity:"Eccentricity (e)",inclination:"Inclination (i)",raan:"RAAN (Ω)",argPeriapsis:"Arg. of Periapsis (ω)",trueAnomaly:"True Anomaly (ν)",resetOrbit:"Reset Nominal Orbit",flightStatus:"TRAJECTORY STATUS",orbitalVelocity:"Orbital Speed (v)",altitude:"Current Altitude",periapsisAlt:"Periapsis Alt (rp)",apoapsisAlt:"Apoapsis Alt (ra)",orbitalPeriod:"Orbital Period (T)",specificEnergy:"Specific Energy (ε)",timeToPeriapsis:"Time to Periapsis",fuelRemaining:"Propellant Remaining",deltaVRemaining:"Remaining Δv",adcsMode:"ADCS Guidance Mode",adcsPrograde:"Prograde (+v)",adcsRetrograde:"Retrograde (-v)",adcsNormal:"Normal (+h)",adcsAntiNormal:"Anti-Normal (-h)",adcsEarth:"Earth-Point",adcsSun:"Sun-Point",adcsTarget:"Target-Point",adcsManual:"Manual",slewRate:"Attitude Slew Rate",pointingError:"Pointing Error",maneuverHeading:"Delta-V & Transfer Calculator",hohmannTransfer:"Hohmann Transfer",biEllipticTransfer:"Bi-Elliptic Transfer",slingshotAssist:"Gravitational Slingshot",initialRadius:"Initial Orbit Radius (r1)",finalRadius:"Target Orbit Radius (r2)",intermediateRadius:"Intermediate Apoapsis (rb)",burn1DeltaV:"Burn 1 (Δv1)",burn2DeltaV:"Burn 2 (Δv2)",burn3DeltaV:"Burn 3 (Δv3)",totalDeltaV:"Total Delta-V (Δv_tot)",transferTime:"Transfer Duration",executeBurn:"Execute Maneuver Burn",dsnHeading:"Deep Space Network (DSN) Telemetry",activeStation:"Active Ground Station",owlt:"One-Way Light Time (OWLT)",rtlt:"Round-Trip Light Time (RTLT)",fspl:"Free Space Path Loss (FSPL)",signalStrength:"Received Power (Pr)",snr:"Signal-to-Noise Ratio (SNR)",dopplerShift:"Doppler Frequency Shift",lineOfSight:"Line of Sight Status",bitrate:"Downlink Data Rate",camCockpit:"Spacecraft Chase",camEarth:"Earth Centered",camSolar:"Solar System",camTarget:"Target Track",soundMute:"Mute Audio",soundUnmute:"Unmute Audio",chartVelocity:"VELOCITY HISTORY (km/s)",chartDeltaV:"DELTA-V CONSUMPTION (km/s)",chartSnr:"DSN LINK SNR (dB)"},ar:{appTitle:"محاكي ديناميكا المدارات والتحكم في المهام الفضائية",appSubtitle:"غرفة العمليات المركزية لميكانيكا الفضاء ومسارات الملاحة العميقة",authorBadge:"تطوير وهندسة: أ. طارق ابوعشي",tabTelemetry:"القياسات الحيوية للرحلة",tabKepler:"العناصر المدارية لكبلر",tabManeuvers:"مخطط المناورات ودلتا-V",tabMissions:"ملفات المهام الجاهزة",tabDsn:"شبكة الفضاء العميق DSN",tabLagrange:"نقاط لاغرانج وتلسكوب ويب",missionArtemisTitle:"أرتميس: بوابة القمر ومدار الهالة NRHO",missionArtemisDesc:"حقن المدار القمري (TLI)، وأسر المدار القمري (LOI)، والدخول في مدار الهالة شبه المستطيل.",missionMarsTitle:"رحلة المريخ 2026 والكبح الجوي",missionMarsDesc:"قوس هوهمان الانتقالي الشمسي مع نقطة الدخول في الغلاف الجوي للمريخ بسرعة فائقة.",missionJwstTitle:"تلسكوب جيمس ويب (نقطة لاغرانج L2)",missionJwstDesc:"مدار هالة متوازن حول نقطة L2 مع توجيه الدرع الشمسي خماسي الطبقات بعيداً عن الشمس.",missionVoyagerTitle:"رحلة فوياجر والمقلاع الجاذبي لكوكب المشتري",missionVoyagerDesc:"الاستفادة من جاذبية المشتري وزحل لزيادة السرعة والهروب خارج النظام الشمسي.",btnLaunchMission:"تحميل وتنفيذ المهمة",semiMajorAxis:"المحور شبه الرئيسي (a)",eccentricity:"الانحراف المداري (e)",inclination:"ميلان المدار (i)",raan:"صعود العقدة الصاعدة (Ω)",argPeriapsis:"حجة نقطة الحضيض (ω)",trueAnomaly:"الشذوذ الحقيقي (ν)",resetOrbit:"إعادة ضبط المدار الاسمي",flightStatus:"حالة المسار المداري",orbitalVelocity:"السرعة المدارية (v)",altitude:"الارتفاع الفعلي",periapsisAlt:"ارتفاع الحضيض (rp)",apoapsisAlt:"ارتفاع الأوج (ra)",orbitalPeriod:"الزمن الدوري (T)",specificEnergy:"الطاقة المدارية النوعية (ε)",timeToPeriapsis:"الوقت المتبقي للحضيض",fuelRemaining:"الوقود الصاروخي المتبقي",deltaVRemaining:"رصيد سرعة دلتا-V",adcsMode:"نظام التوجيه والتحكم الوضعي ADCS",adcsPrograde:"أمامي تسارعي (+v)",adcsRetrograde:"عكسي كبحي (-v)",adcsNormal:"عمودي مداري (+h)",adcsAntiNormal:"مضاد العمودي (-h)",adcsEarth:"توجيه للأرض",adcsSun:"توجيه للشمس",adcsTarget:"توجيه للهدف",adcsManual:"يدوي",slewRate:"معدل الدوران الوضعي",pointingError:"خطأ زاوية التوجيه",maneuverHeading:"حساب مناورات الانتقال المداري ودلتا-V",hohmannTransfer:"انتقال هوهمان المداري",biEllipticTransfer:"الانتقال ثنائي القطع الناقص",slingshotAssist:"المقلاع الجاذبي (Flyby)",initialRadius:"نصف قطر المدار الابتدائي (r1)",finalRadius:"نصف قطر مدار الهدف (r2)",intermediateRadius:"نقطة الأوج الوسيطة (rb)",burn1DeltaV:"الحرقة الأولى (Δv1)",burn2DeltaV:"الحرقة الثانية (Δv2)",burn3DeltaV:"الحرقة الثالثة (Δv3)",totalDeltaV:"إجمالي دلتا-V المطلوبة (Δv)",transferTime:"زمن الرحلة الانتقالية",executeBurn:"تنفيذ حرقة المحرك الصاروخي",dsnHeading:"اتصالات شبكة الفضاء العميق (DSN)",activeStation:"المحطة الأرضية النشطة",owlt:"زمن انتقال الإشارة بالاتجاه الواحد (OWLT)",rtlt:"زمن الإشارة ذهاباً وإياباً (RTLT)",fspl:"فقدان المسار في الفضاء الحر (FSPL)",signalStrength:"قدرة الإشارة المستقبلة (Pr)",snr:"نسبة الإشارة إلى الضوضاء (SNR)",dopplerShift:"انزياح دوبلر الترددي",lineOfSight:"خط الرؤية المباشر",bitrate:"معدل تدفق البيانات الفعلي",camCockpit:"كاميرا المركبة",camEarth:"منظور الأرض",camSolar:"المجموعة الشمسية",camTarget:"تتبع الهدف",soundMute:"كتم الصوت",soundUnmute:"تشغيل الصوت",chartVelocity:"مخطط تغير السرعة المدارية (km/s)",chartDeltaV:"استهلاك وقود دلتا-V الصاروخي",chartSnr:"جودة إشارة شبكة DSN (dB)"}};class e4{constructor(){Se(this,"currentLang","ar");const e=localStorage.getItem("astrodynamics_lang");(e==="en"||e==="ar")&&(this.currentLang=e)}setLanguage(e){this.currentLang=e,localStorage.setItem("astrodynamics_lang",e),document.documentElement.lang=e,document.documentElement.dir=e==="ar"?"rtl":"ltr",this.updateDomTranslations()}t(e){return ia[this.currentLang][e]||ia.en[e]||e}updateDomTranslations(){document.querySelectorAll("[data-i18n]").forEach(t=>{const n=t.getAttribute("data-i18n");n&&ia[this.currentLang][n]&&(t.tagName==="INPUT"&&t.placeholder?t.placeholder=ia[this.currentLang][n]:t.textContent=ia[this.currentLang][n])}),this.currentLang==="ar"?document.body.classList.add("rtl-mode"):document.body.classList.remove("rtl-mode")}}class le extends Error{constructor(e,t){var n="KaTeX parse error: "+e,r,a,s=t&&t.loc;if(s&&s.start<=s.end){var o=s.lexer.input;r=s.start,a=s.end,r===o.length?n+=" at end of input: ":n+=" at position "+(r+1)+": ";var l=o.slice(r,a).replace(/[^]/g,"$&̲"),c;r>15?c="…"+o.slice(r-15,r):c=o.slice(0,r);var h;a+15<o.length?h=o.slice(a,a+15)+"…":h=o.slice(a),n+=c+l+h}super(n),this.name="ParseError",this.position=void 0,this.length=void 0,this.rawMessage=void 0,Object.setPrototypeOf(this,le.prototype),this.position=r,r!=null&&a!=null&&(this.length=a-r),this.rawMessage=e}}var t4=/([A-Z])/g,n4=i=>i.replace(t4,"-$1").toLowerCase(),i4={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},r4=/[&><"']/g,Qt=i=>String(i).replace(r4,e=>i4[e]),cs=i=>i.type==="ordgroup"||i.type==="color"?i.body.length===1?cs(i.body[0]):i:i.type==="font"?cs(i.body):i,a4=new Set(["mathord","textord","atom"]),fi=i=>a4.has(cs(i).type),s4=i=>{var e=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(i);return e?e[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1])?null:e[1].toLowerCase():"_relative"},E0={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:i=>"#"+i},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(i,e)=>(e.push(i),e)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:i=>Math.max(0,i),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:i=>Math.max(0,i),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:i=>Math.max(0,i),cli:"-e, --max-expand <n>",cliProcessor:i=>i==="Infinity"?1/0:parseInt(i)},globalGroup:{type:"boolean",cli:!1}};function o4(i){if(typeof i!="string")return i.enum[0];switch(i){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{};default:throw new Error("Unexpected schema type; settings must declare an explicit default.")}}function l4(i){if(i.default!==void 0)return i.default;var e=Array.isArray(i.type)?i.type[0]:i.type;return o4(e)}function c4(i,e,t,n){var r=t[e];i[e]=r!==void 0?n.processor?n.processor(r):r:l4(n)}class rl{constructor(e){e===void 0&&(e={}),this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,e=e||{};for(var t of Object.keys(E0)){var n=E0[t];n&&c4(this,t,e,n)}}reportNonstrict(e,t,n){var r=this.strict;if(typeof r=="function"&&(r=r(e,t,n)),!(!r||r==="ignore")){if(r===!0||r==="error")throw new le("LaTeX-incompatible input and strict mode is set to 'error': "+(t+" ["+e+"]"),n);r==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+e+"]"))}}useStrictBehavior(e,t,n){var r=this.strict;if(typeof r=="function")try{r=r(e,t,n)}catch{r="error"}return!r||r==="ignore"?!1:r===!0||r==="error"?!0:r==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+e+"]")),!1)}isTrusted(e){if("url"in e&&e.url&&!e.protocol){var t=s4(e.url);if(t==null)return!1;e.protocol=t}var n=typeof this.trust=="function"?this.trust(e):this.trust;return!!n}}class wi{constructor(e,t,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=e,this.size=t,this.cramped=n}sup(){return Gn[h4[this.id]]}sub(){return Gn[u4[this.id]]}fracNum(){return Gn[d4[this.id]]}fracDen(){return Gn[f4[this.id]]}cramp(){return Gn[p4[this.id]]}text(){return Gn[m4[this.id]]}isTight(){return this.size>=2}}var al=0,ms=1,Lr=2,ci=3,ca=4,An=5,zr=6,an=7,Gn=[new wi(al,0,!1),new wi(ms,0,!0),new wi(Lr,1,!1),new wi(ci,1,!0),new wi(ca,2,!1),new wi(An,2,!0),new wi(zr,3,!1),new wi(an,3,!0)],h4=[ca,An,ca,An,zr,an,zr,an],u4=[An,An,An,An,an,an,an,an],d4=[Lr,ci,ca,An,zr,an,zr,an],f4=[ci,ci,An,An,an,an,an,an],p4=[ms,ms,ci,ci,An,An,an,an],m4=[al,ms,Lr,ci,Lr,ci,Lr,ci],Xe={DISPLAY:Gn[al],TEXT:Gn[Lr],SCRIPT:Gn[ca],SCRIPTSCRIPT:Gn[zr]},T0=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function g4(i){for(var e=0;e<T0.length;e++)for(var t=T0[e],n=0;n<t.blocks.length;n++){var r=t.blocks[n];if(i>=r[0]&&i<=r[1])return t.name}return null}var hs=[];T0.forEach(i=>i.blocks.forEach(e=>hs.push(...e)));function uu(i){for(var e=0;e<hs.length;e+=2)if(i>=hs[e]&&i<=hs[e+1])return!0;return!1}var Ht=i=>i+" "+i,br=80,v4=function(e,t){return"M95,"+(622+e+t)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+e/2.075+" -"+e+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+e)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},x4=function(e,t){return"M263,"+(601+e+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+e/2.084+" -"+e+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+e)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},_4=function(e,t){return"M983 "+(10+e+t)+`
l`+e/3.13+" -"+e+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+e)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},y4=function(e,t){return"M424,"+(2398+e+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+e/4.223+" -"+e+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+e)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+e)+" "+t+`
h400000v`+(40+e)+"h-400000z"},M4=function(e,t){return"M473,"+(2713+e+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+e/5.298+" -"+e+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+e)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+e)+" "+t+"h400000v"+(40+e)+"H1017.7z"},b4=function(e){var t=e/2;return"M400000 "+e+" H0 L"+t+" 0 l65 45 L145 "+(e-80)+" H400000z"},S4=function(e,t,n){var r=n-54-t-e;return"M702 "+(e+t)+"H400000"+(40+e)+`
H742v`+r+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+"H400000v"+(40+e)+"H742z"},w4=function(e,t,n){t=1e3*t;var r="";switch(e){case"sqrtMain":r=v4(t,br);break;case"sqrtSize1":r=x4(t,br);break;case"sqrtSize2":r=_4(t,br);break;case"sqrtSize3":r=y4(t,br);break;case"sqrtSize4":r=M4(t,br);break;case"sqrtTall":r=S4(t,br,n)}return r},E4=function(e,t){switch(e){case"⎜":return Ht("M291 0 H417 V"+t+" H291z");case"∣":return Ht("M145 0 H188 V"+t+" H145z");case"∥":return Ht("M145 0 H188 V"+t+" H145z")+Ht("M367 0 H410 V"+t+" H367z");case"⎟":return Ht("M457 0 H583 V"+t+" H457z");case"⎢":return Ht("M319 0 H403 V"+t+" H319z");case"⎥":return Ht("M263 0 H347 V"+t+" H263z");case"⎪":return Ht("M384 0 H504 V"+t+" H384z");case"⏐":return Ht("M312 0 H355 V"+t+" H312z");case"‖":return Ht("M257 0 H300 V"+t+" H257z")+Ht("M478 0 H521 V"+t+" H478z");default:return""}},kc={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:Ht("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),leftbracketunder:Ht("M0 0 h120 V290 H399995 v120 H0z"),leftbracketover:Ht("M0 440 h120 V150 H399995 v-120 H0z"),leftmapsto:Ht("M40 281 V448H0V74H40V241H400000v40z"),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:Ht("M0 50 h400000 v40H0z m0 194h40000v40H0z"),midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:Ht("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),rightbracketunder:Ht("M399995 0 h-120 V290 H0 v120 H400000z"),rightbracketover:Ht("M399995 440 h-120 V150 H0 v-120 H399995z"),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},T4=function(e,t){switch(e){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+t+" v1759 v84 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+t+" v1759 h84z";case"vert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+" v585 h43z";case"doublevert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z
M367 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+t+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+t+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+t+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v602 h84z
M403 1759 V0 H319 V1759 v`+t+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v602 h84z
M347 1759 V0 h-84 V1759 v`+t+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(t+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(t+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(t+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(t+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};function A4(i){return"toText"in i}class Wr{constructor(e){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(e){return this.classes.includes(e)}toNode(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e}toMarkup(){for(var e="",t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e}toText(){return this.children.map(e=>{if(A4(e))return e.toText();throw new Error("Expected MathDomNode with toText, got "+e.constructor.name)}).join("")}}var A0={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},R4={ex:!0,em:!0,mu:!0},du=function(e){return typeof e!="string"&&(e=e.unit),e in A0||e in R4||e==="ex"},Lt=function(e,t){var n;if(e.unit in A0)n=A0[e.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(e.unit==="mu")n=t.fontMetrics().cssEmPerMu;else{var r;if(t.style.isTight()?r=t.havingStyle(t.style.text()):r=t,e.unit==="ex")n=r.fontMetrics().xHeight;else if(e.unit==="em")n=r.fontMetrics().quad;else throw new le("Invalid unit: '"+e.unit+"'");r!==t&&(n*=r.sizeMultiplier/t.sizeMultiplier)}return Math.min(e.number*n,t.maxSize)},ue=function(e){return+e.toFixed(4)+"em"},Ui=function(e){return e.filter(t=>t).join(" ")},sl=function(e){var t="";for(var n of Object.keys(e)){var r=e[n];r!==void 0&&(t+=n4(n)+":"+r+";")}return t},fu=function(e,t,n){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},t){t.style.isTight()&&this.classes.push("mtight");var r=t.getColor();r&&(this.style.color=r)}},pu=function(e){var t=document.createElement(e);t.className=Ui(this.classes),Object.assign(t.style,this.style);for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t},C4=/[\s"'>/=\x00-\x1f]/,mu=function(e){var t="<"+e;this.classes.length&&(t+=' class="'+Qt(Ui(this.classes))+'"');var n=sl(this.style);n&&(t+=' style="'+Qt(n)+'"');for(var r of Object.keys(this.attributes)){if(C4.test(r))throw new le("Invalid attribute name '"+r+"'");t+=" "+r+'="'+Qt(this.attributes[r])+'"'}t+=">";for(var a=0;a<this.children.length;a++)t+=this.children[a].toMarkup();return t+="</"+e+">",t};class qr{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,this.italic=void 0,fu.call(this,e,n,r),this.children=t||[]}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return pu.call(this,"span")}toMarkup(){return mu.call(this,"span")}}class Ts{constructor(e,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,fu.call(this,t,r),this.children=n||[],this.setAttribute("href",e)}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return pu.call(this,"a")}toMarkup(){return mu.call(this,"a")}}class P4{constructor(e,t,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=t,this.src=e,this.classes=["mord"],this.height=0,this.depth=0,this.maxFontSize=0,this.style=n}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createElement("img");return e.src=this.src,e.alt=this.alt,e.className="mord",Object.assign(e.style,this.style),e}toMarkup(){var e='<img src="'+Qt(this.src)+'"'+(' alt="'+Qt(this.alt)+'"'),t=sl(this.style);return t&&(e+=' style="'+Qt(t)+'"'),e+="'/>",e}}var D4={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class xn{constructor(e,t,n,r,a,s,o,l){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=e,this.height=t||0,this.depth=n||0,this.italic=r||0,this.skew=a||0,this.width=s||0,this.classes=o||[],this.style=l||{},this.maxFontSize=0;var c=g4(this.text.charCodeAt(0));c&&this.classes.push(c+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=D4[this.text])}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createTextNode(this.text),t=null;return this.italic>0&&(t=document.createElement("span"),t.style.marginRight=ue(this.italic)),this.classes.length>0&&(t=t||document.createElement("span"),t.className=Ui(this.classes)),Object.keys(this.style).length>0&&(t=t||document.createElement("span"),Object.assign(t.style,this.style)),t?(t.appendChild(e),t):e}toMarkup(){var e=!1,t="<span";this.classes.length&&(e=!0,t+=' class="',t+=Qt(Ui(this.classes)),t+='"');var n="";this.italic>0&&(n+="margin-right:"+ue(this.italic)+";"),n+=sl(this.style),n&&(e=!0,t+=' style="'+Qt(n)+'"');var r=Qt(this.text);return e?(t+=">",t+=r,t+="</span>",t):r}}class di{constructor(e,t){this.children=void 0,this.attributes=void 0,this.children=e||[],this.attributes=t||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"svg");for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){var e='<svg xmlns="http://www.w3.org/2000/svg"';for(var t of Object.keys(this.attributes))e+=" "+t+'="'+Qt(this.attributes[t])+'"';e+=">";for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+="</svg>",e}}class Fi{constructor(e,t){this.pathName=void 0,this.alternate=void 0,this.pathName=e,this.alternate=t}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"path");return this.alternate?t.setAttribute("d",this.alternate):t.setAttribute("d",kc[this.pathName]),t}toMarkup(){return this.alternate?'<path d="'+Qt(this.alternate)+'"/>':'<path d="'+Qt(kc[this.pathName])+'"/>'}}class R0{constructor(e){this.attributes=void 0,this.attributes=e||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"line");for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);return t}toMarkup(){var e="<line";for(var t of Object.keys(this.attributes))e+=" "+t+'="'+Qt(this.attributes[t])+'"';return e+="/>",e}}function L4(i){if(i instanceof xn)return i;throw new Error("Expected symbolNode but got "+String(i)+".")}function I4(i){if(i instanceof qr)return i;throw new Error("Expected span<HtmlDomNode> but got "+String(i)+".")}var N4=i=>i instanceof qr||i instanceof Ts||i instanceof Wr,Wn={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Ya={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},Hc={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function U4(i,e){Wn[i]=e}function ol(i,e,t){if(!Wn[e])throw new Error("Font metrics not found for font: "+e+".");var n=i.charCodeAt(0),r=Wn[e][n];if(!r&&i[0]in Hc&&(n=Hc[i[0]].charCodeAt(0),r=Wn[e][n]),!r&&t==="text"&&uu(n)&&(r=Wn[e][77]),r)return{depth:r[0],height:r[1],italic:r[2],skew:r[3],width:r[4]}}var bo={};function F4(i){var e;if(i>=5?e=0:i>=3?e=1:e=2,!bo[e]){var t=bo[e]={cssEmPerMu:Ya.quad[e]/18};for(var n in Ya)Ya.hasOwnProperty(n)&&(t[n]=Ya[n][e])}return bo[e]}var Ct={math:{},text:{}};function f(i,e,t,n,r,a){Ct[i][r]={font:e,group:t,replace:n},a&&n&&(Ct[i][n]=Ct[i][r])}var v="math",re="text",y="main",L="ams",Pt="accent-token",Te="bin",on="close",Xr="inner",ke="mathord",zt="op-token",_n="open",ma="punct",N="rel",pi="spacing",B="textord";f(v,y,N,"≡","\\equiv",!0);f(v,y,N,"≺","\\prec",!0);f(v,y,N,"≻","\\succ",!0);f(v,y,N,"∼","\\sim",!0);f(v,y,N,"⊥","\\perp");f(v,y,N,"⪯","\\preceq",!0);f(v,y,N,"⪰","\\succeq",!0);f(v,y,N,"≃","\\simeq",!0);f(v,y,N,"∣","\\mid",!0);f(v,y,N,"≪","\\ll",!0);f(v,y,N,"≫","\\gg",!0);f(v,y,N,"≍","\\asymp",!0);f(v,y,N,"∥","\\parallel");f(v,y,N,"⋈","\\bowtie",!0);f(v,y,N,"⌣","\\smile",!0);f(v,y,N,"⊑","\\sqsubseteq",!0);f(v,y,N,"⊒","\\sqsupseteq",!0);f(v,y,N,"≐","\\doteq",!0);f(v,y,N,"⌢","\\frown",!0);f(v,y,N,"∋","\\ni",!0);f(v,y,N,"∝","\\propto",!0);f(v,y,N,"⊢","\\vdash",!0);f(v,y,N,"⊣","\\dashv",!0);f(v,y,N,"∋","\\owns");f(v,y,ma,".","\\ldotp");f(v,y,ma,"⋅","\\cdotp");f(v,y,ma,"⋅","·");f(re,y,B,"⋅","·");f(v,y,B,"#","\\#");f(re,y,B,"#","\\#");f(v,y,B,"&","\\&");f(re,y,B,"&","\\&");f(v,y,B,"ℵ","\\aleph",!0);f(v,y,B,"∀","\\forall",!0);f(v,y,B,"ℏ","\\hbar",!0);f(v,y,B,"∃","\\exists",!0);f(v,y,B,"∇","\\nabla",!0);f(v,y,B,"♭","\\flat",!0);f(v,y,B,"ℓ","\\ell",!0);f(v,y,B,"♮","\\natural",!0);f(v,y,B,"♣","\\clubsuit",!0);f(v,y,B,"℘","\\wp",!0);f(v,y,B,"♯","\\sharp",!0);f(v,y,B,"♢","\\diamondsuit",!0);f(v,y,B,"ℜ","\\Re",!0);f(v,y,B,"♡","\\heartsuit",!0);f(v,y,B,"ℑ","\\Im",!0);f(v,y,B,"♠","\\spadesuit",!0);f(v,y,B,"§","\\S",!0);f(re,y,B,"§","\\S");f(v,y,B,"¶","\\P",!0);f(re,y,B,"¶","\\P");f(v,y,B,"†","\\dag");f(re,y,B,"†","\\dag");f(re,y,B,"†","\\textdagger");f(v,y,B,"‡","\\ddag");f(re,y,B,"‡","\\ddag");f(re,y,B,"‡","\\textdaggerdbl");f(v,y,on,"⎱","\\rmoustache",!0);f(v,y,_n,"⎰","\\lmoustache",!0);f(v,y,on,"⟯","\\rgroup",!0);f(v,y,_n,"⟮","\\lgroup",!0);f(v,y,Te,"∓","\\mp",!0);f(v,y,Te,"⊖","\\ominus",!0);f(v,y,Te,"⊎","\\uplus",!0);f(v,y,Te,"⊓","\\sqcap",!0);f(v,y,Te,"∗","\\ast");f(v,y,Te,"⊔","\\sqcup",!0);f(v,y,Te,"◯","\\bigcirc",!0);f(v,y,Te,"∙","\\bullet",!0);f(v,y,Te,"‡","\\ddagger");f(v,y,Te,"≀","\\wr",!0);f(v,y,Te,"⨿","\\amalg");f(v,y,Te,"&","\\And");f(v,y,N,"⟵","\\longleftarrow",!0);f(v,y,N,"⇐","\\Leftarrow",!0);f(v,y,N,"⟸","\\Longleftarrow",!0);f(v,y,N,"⟶","\\longrightarrow",!0);f(v,y,N,"⇒","\\Rightarrow",!0);f(v,y,N,"⟹","\\Longrightarrow",!0);f(v,y,N,"↔","\\leftrightarrow",!0);f(v,y,N,"⟷","\\longleftrightarrow",!0);f(v,y,N,"⇔","\\Leftrightarrow",!0);f(v,y,N,"⟺","\\Longleftrightarrow",!0);f(v,y,N,"↦","\\mapsto",!0);f(v,y,N,"⟼","\\longmapsto",!0);f(v,y,N,"↗","\\nearrow",!0);f(v,y,N,"↩","\\hookleftarrow",!0);f(v,y,N,"↪","\\hookrightarrow",!0);f(v,y,N,"↘","\\searrow",!0);f(v,y,N,"↼","\\leftharpoonup",!0);f(v,y,N,"⇀","\\rightharpoonup",!0);f(v,y,N,"↙","\\swarrow",!0);f(v,y,N,"↽","\\leftharpoondown",!0);f(v,y,N,"⇁","\\rightharpoondown",!0);f(v,y,N,"↖","\\nwarrow",!0);f(v,y,N,"⇌","\\rightleftharpoons",!0);f(v,L,N,"≮","\\nless",!0);f(v,L,N,"","\\@nleqslant");f(v,L,N,"","\\@nleqq");f(v,L,N,"⪇","\\lneq",!0);f(v,L,N,"≨","\\lneqq",!0);f(v,L,N,"","\\@lvertneqq");f(v,L,N,"⋦","\\lnsim",!0);f(v,L,N,"⪉","\\lnapprox",!0);f(v,L,N,"⊀","\\nprec",!0);f(v,L,N,"⋠","\\npreceq",!0);f(v,L,N,"⋨","\\precnsim",!0);f(v,L,N,"⪹","\\precnapprox",!0);f(v,L,N,"≁","\\nsim",!0);f(v,L,N,"","\\@nshortmid");f(v,L,N,"∤","\\nmid",!0);f(v,L,N,"⊬","\\nvdash",!0);f(v,L,N,"⊭","\\nvDash",!0);f(v,L,N,"⋪","\\ntriangleleft");f(v,L,N,"⋬","\\ntrianglelefteq",!0);f(v,L,N,"⊊","\\subsetneq",!0);f(v,L,N,"","\\@varsubsetneq");f(v,L,N,"⫋","\\subsetneqq",!0);f(v,L,N,"","\\@varsubsetneqq");f(v,L,N,"≯","\\ngtr",!0);f(v,L,N,"","\\@ngeqslant");f(v,L,N,"","\\@ngeqq");f(v,L,N,"⪈","\\gneq",!0);f(v,L,N,"≩","\\gneqq",!0);f(v,L,N,"","\\@gvertneqq");f(v,L,N,"⋧","\\gnsim",!0);f(v,L,N,"⪊","\\gnapprox",!0);f(v,L,N,"⊁","\\nsucc",!0);f(v,L,N,"⋡","\\nsucceq",!0);f(v,L,N,"⋩","\\succnsim",!0);f(v,L,N,"⪺","\\succnapprox",!0);f(v,L,N,"≆","\\ncong",!0);f(v,L,N,"","\\@nshortparallel");f(v,L,N,"∦","\\nparallel",!0);f(v,L,N,"⊯","\\nVDash",!0);f(v,L,N,"⋫","\\ntriangleright");f(v,L,N,"⋭","\\ntrianglerighteq",!0);f(v,L,N,"","\\@nsupseteqq");f(v,L,N,"⊋","\\supsetneq",!0);f(v,L,N,"","\\@varsupsetneq");f(v,L,N,"⫌","\\supsetneqq",!0);f(v,L,N,"","\\@varsupsetneqq");f(v,L,N,"⊮","\\nVdash",!0);f(v,L,N,"⪵","\\precneqq",!0);f(v,L,N,"⪶","\\succneqq",!0);f(v,L,N,"","\\@nsubseteqq");f(v,L,Te,"⊴","\\unlhd");f(v,L,Te,"⊵","\\unrhd");f(v,L,N,"↚","\\nleftarrow",!0);f(v,L,N,"↛","\\nrightarrow",!0);f(v,L,N,"⇍","\\nLeftarrow",!0);f(v,L,N,"⇏","\\nRightarrow",!0);f(v,L,N,"↮","\\nleftrightarrow",!0);f(v,L,N,"⇎","\\nLeftrightarrow",!0);f(v,L,N,"△","\\vartriangle");f(v,L,B,"ℏ","\\hslash");f(v,L,B,"▽","\\triangledown");f(v,L,B,"◊","\\lozenge");f(v,L,B,"Ⓢ","\\circledS");f(v,L,B,"®","\\circledR");f(re,L,B,"®","\\circledR");f(v,L,B,"∡","\\measuredangle",!0);f(v,L,B,"∄","\\nexists");f(v,L,B,"℧","\\mho");f(v,L,B,"Ⅎ","\\Finv",!0);f(v,L,B,"⅁","\\Game",!0);f(v,L,B,"‵","\\backprime");f(v,L,B,"▲","\\blacktriangle");f(v,L,B,"▼","\\blacktriangledown");f(v,L,B,"■","\\blacksquare");f(v,L,B,"⧫","\\blacklozenge");f(v,L,B,"★","\\bigstar");f(v,L,B,"∢","\\sphericalangle",!0);f(v,L,B,"∁","\\complement",!0);f(v,L,B,"ð","\\eth",!0);f(re,y,B,"ð","ð");f(v,L,B,"╱","\\diagup");f(v,L,B,"╲","\\diagdown");f(v,L,B,"□","\\square");f(v,L,B,"□","\\Box");f(v,L,B,"◊","\\Diamond");f(v,L,B,"¥","\\yen",!0);f(re,L,B,"¥","\\yen",!0);f(v,L,B,"✓","\\checkmark",!0);f(re,L,B,"✓","\\checkmark");f(v,L,B,"ℶ","\\beth",!0);f(v,L,B,"ℸ","\\daleth",!0);f(v,L,B,"ℷ","\\gimel",!0);f(v,L,B,"ϝ","\\digamma",!0);f(v,L,B,"ϰ","\\varkappa");f(v,L,_n,"┌","\\@ulcorner",!0);f(v,L,on,"┐","\\@urcorner",!0);f(v,L,_n,"└","\\@llcorner",!0);f(v,L,on,"┘","\\@lrcorner",!0);f(v,L,N,"≦","\\leqq",!0);f(v,L,N,"⩽","\\leqslant",!0);f(v,L,N,"⪕","\\eqslantless",!0);f(v,L,N,"≲","\\lesssim",!0);f(v,L,N,"⪅","\\lessapprox",!0);f(v,L,N,"≊","\\approxeq",!0);f(v,L,Te,"⋖","\\lessdot");f(v,L,N,"⋘","\\lll",!0);f(v,L,N,"≶","\\lessgtr",!0);f(v,L,N,"⋚","\\lesseqgtr",!0);f(v,L,N,"⪋","\\lesseqqgtr",!0);f(v,L,N,"≑","\\doteqdot");f(v,L,N,"≓","\\risingdotseq",!0);f(v,L,N,"≒","\\fallingdotseq",!0);f(v,L,N,"∽","\\backsim",!0);f(v,L,N,"⋍","\\backsimeq",!0);f(v,L,N,"⫅","\\subseteqq",!0);f(v,L,N,"⋐","\\Subset",!0);f(v,L,N,"⊏","\\sqsubset",!0);f(v,L,N,"≼","\\preccurlyeq",!0);f(v,L,N,"⋞","\\curlyeqprec",!0);f(v,L,N,"≾","\\precsim",!0);f(v,L,N,"⪷","\\precapprox",!0);f(v,L,N,"⊲","\\vartriangleleft");f(v,L,N,"⊴","\\trianglelefteq");f(v,L,N,"⊨","\\vDash",!0);f(v,L,N,"⊪","\\Vvdash",!0);f(v,L,N,"⌣","\\smallsmile");f(v,L,N,"⌢","\\smallfrown");f(v,L,N,"≏","\\bumpeq",!0);f(v,L,N,"≎","\\Bumpeq",!0);f(v,L,N,"≧","\\geqq",!0);f(v,L,N,"⩾","\\geqslant",!0);f(v,L,N,"⪖","\\eqslantgtr",!0);f(v,L,N,"≳","\\gtrsim",!0);f(v,L,N,"⪆","\\gtrapprox",!0);f(v,L,Te,"⋗","\\gtrdot");f(v,L,N,"⋙","\\ggg",!0);f(v,L,N,"≷","\\gtrless",!0);f(v,L,N,"⋛","\\gtreqless",!0);f(v,L,N,"⪌","\\gtreqqless",!0);f(v,L,N,"≖","\\eqcirc",!0);f(v,L,N,"≗","\\circeq",!0);f(v,L,N,"≜","\\triangleq",!0);f(v,L,N,"∼","\\thicksim");f(v,L,N,"≈","\\thickapprox");f(v,L,N,"⫆","\\supseteqq",!0);f(v,L,N,"⋑","\\Supset",!0);f(v,L,N,"⊐","\\sqsupset",!0);f(v,L,N,"≽","\\succcurlyeq",!0);f(v,L,N,"⋟","\\curlyeqsucc",!0);f(v,L,N,"≿","\\succsim",!0);f(v,L,N,"⪸","\\succapprox",!0);f(v,L,N,"⊳","\\vartriangleright");f(v,L,N,"⊵","\\trianglerighteq");f(v,L,N,"⊩","\\Vdash",!0);f(v,L,N,"∣","\\shortmid");f(v,L,N,"∥","\\shortparallel");f(v,L,N,"≬","\\between",!0);f(v,L,N,"⋔","\\pitchfork",!0);f(v,L,N,"∝","\\varpropto");f(v,L,N,"◀","\\blacktriangleleft");f(v,L,N,"∴","\\therefore",!0);f(v,L,N,"∍","\\backepsilon");f(v,L,N,"▶","\\blacktriangleright");f(v,L,N,"∵","\\because",!0);f(v,L,N,"⋘","\\llless");f(v,L,N,"⋙","\\gggtr");f(v,L,Te,"⊲","\\lhd");f(v,L,Te,"⊳","\\rhd");f(v,L,N,"≂","\\eqsim",!0);f(v,y,N,"⋈","\\Join");f(v,L,N,"≑","\\Doteq",!0);f(v,L,Te,"∔","\\dotplus",!0);f(v,L,Te,"∖","\\smallsetminus");f(v,L,Te,"⋒","\\Cap",!0);f(v,L,Te,"⋓","\\Cup",!0);f(v,L,Te,"⩞","\\doublebarwedge",!0);f(v,L,Te,"⊟","\\boxminus",!0);f(v,L,Te,"⊞","\\boxplus",!0);f(v,L,Te,"⋇","\\divideontimes",!0);f(v,L,Te,"⋉","\\ltimes",!0);f(v,L,Te,"⋊","\\rtimes",!0);f(v,L,Te,"⋋","\\leftthreetimes",!0);f(v,L,Te,"⋌","\\rightthreetimes",!0);f(v,L,Te,"⋏","\\curlywedge",!0);f(v,L,Te,"⋎","\\curlyvee",!0);f(v,L,Te,"⊝","\\circleddash",!0);f(v,L,Te,"⊛","\\circledast",!0);f(v,L,Te,"⋅","\\centerdot");f(v,L,Te,"⊺","\\intercal",!0);f(v,L,Te,"⋒","\\doublecap");f(v,L,Te,"⋓","\\doublecup");f(v,L,Te,"⊠","\\boxtimes",!0);f(v,L,N,"⇢","\\dashrightarrow",!0);f(v,L,N,"⇠","\\dashleftarrow",!0);f(v,L,N,"⇇","\\leftleftarrows",!0);f(v,L,N,"⇆","\\leftrightarrows",!0);f(v,L,N,"⇚","\\Lleftarrow",!0);f(v,L,N,"↞","\\twoheadleftarrow",!0);f(v,L,N,"↢","\\leftarrowtail",!0);f(v,L,N,"↫","\\looparrowleft",!0);f(v,L,N,"⇋","\\leftrightharpoons",!0);f(v,L,N,"↶","\\curvearrowleft",!0);f(v,L,N,"↺","\\circlearrowleft",!0);f(v,L,N,"↰","\\Lsh",!0);f(v,L,N,"⇈","\\upuparrows",!0);f(v,L,N,"↿","\\upharpoonleft",!0);f(v,L,N,"⇃","\\downharpoonleft",!0);f(v,y,N,"⊶","\\origof",!0);f(v,y,N,"⊷","\\imageof",!0);f(v,L,N,"⊸","\\multimap",!0);f(v,L,N,"↭","\\leftrightsquigarrow",!0);f(v,L,N,"⇉","\\rightrightarrows",!0);f(v,L,N,"⇄","\\rightleftarrows",!0);f(v,L,N,"↠","\\twoheadrightarrow",!0);f(v,L,N,"↣","\\rightarrowtail",!0);f(v,L,N,"↬","\\looparrowright",!0);f(v,L,N,"↷","\\curvearrowright",!0);f(v,L,N,"↻","\\circlearrowright",!0);f(v,L,N,"↱","\\Rsh",!0);f(v,L,N,"⇊","\\downdownarrows",!0);f(v,L,N,"↾","\\upharpoonright",!0);f(v,L,N,"⇂","\\downharpoonright",!0);f(v,L,N,"⇝","\\rightsquigarrow",!0);f(v,L,N,"⇝","\\leadsto");f(v,L,N,"⇛","\\Rrightarrow",!0);f(v,L,N,"↾","\\restriction");f(v,y,B,"‘","`");f(v,y,B,"$","\\$");f(re,y,B,"$","\\$");f(re,y,B,"$","\\textdollar");f(v,y,B,"%","\\%");f(re,y,B,"%","\\%");f(v,y,B,"_","\\_");f(re,y,B,"_","\\_");f(re,y,B,"_","\\textunderscore");f(v,y,B,"∠","\\angle",!0);f(v,y,B,"∞","\\infty",!0);f(v,y,B,"′","\\prime");f(v,y,B,"△","\\triangle");f(v,y,B,"Γ","\\Gamma",!0);f(v,y,B,"Δ","\\Delta",!0);f(v,y,B,"Θ","\\Theta",!0);f(v,y,B,"Λ","\\Lambda",!0);f(v,y,B,"Ξ","\\Xi",!0);f(v,y,B,"Π","\\Pi",!0);f(v,y,B,"Σ","\\Sigma",!0);f(v,y,B,"Υ","\\Upsilon",!0);f(v,y,B,"Φ","\\Phi",!0);f(v,y,B,"Ψ","\\Psi",!0);f(v,y,B,"Ω","\\Omega",!0);f(v,y,B,"A","Α");f(v,y,B,"B","Β");f(v,y,B,"E","Ε");f(v,y,B,"Z","Ζ");f(v,y,B,"H","Η");f(v,y,B,"I","Ι");f(v,y,B,"K","Κ");f(v,y,B,"M","Μ");f(v,y,B,"N","Ν");f(v,y,B,"O","Ο");f(v,y,B,"P","Ρ");f(v,y,B,"T","Τ");f(v,y,B,"X","Χ");f(v,y,B,"¬","\\neg",!0);f(v,y,B,"¬","\\lnot");f(v,y,B,"⊤","\\top");f(v,y,B,"⊥","\\bot");f(v,y,B,"∅","\\emptyset");f(v,L,B,"∅","\\varnothing");f(v,y,ke,"α","\\alpha",!0);f(v,y,ke,"β","\\beta",!0);f(v,y,ke,"γ","\\gamma",!0);f(v,y,ke,"δ","\\delta",!0);f(v,y,ke,"ϵ","\\epsilon",!0);f(v,y,ke,"ζ","\\zeta",!0);f(v,y,ke,"η","\\eta",!0);f(v,y,ke,"θ","\\theta",!0);f(v,y,ke,"ι","\\iota",!0);f(v,y,ke,"κ","\\kappa",!0);f(v,y,ke,"λ","\\lambda",!0);f(v,y,ke,"μ","\\mu",!0);f(v,y,ke,"ν","\\nu",!0);f(v,y,ke,"ξ","\\xi",!0);f(v,y,ke,"ο","\\omicron",!0);f(v,y,ke,"π","\\pi",!0);f(v,y,ke,"ρ","\\rho",!0);f(v,y,ke,"σ","\\sigma",!0);f(v,y,ke,"τ","\\tau",!0);f(v,y,ke,"υ","\\upsilon",!0);f(v,y,ke,"ϕ","\\phi",!0);f(v,y,ke,"χ","\\chi",!0);f(v,y,ke,"ψ","\\psi",!0);f(v,y,ke,"ω","\\omega",!0);f(v,y,ke,"ε","\\varepsilon",!0);f(v,y,ke,"ϑ","\\vartheta",!0);f(v,y,ke,"ϖ","\\varpi",!0);f(v,y,ke,"ϱ","\\varrho",!0);f(v,y,ke,"ς","\\varsigma",!0);f(v,y,ke,"φ","\\varphi",!0);f(v,y,Te,"∗","*",!0);f(v,y,Te,"+","+");f(v,y,Te,"−","-",!0);f(v,y,Te,"⋅","\\cdot",!0);f(v,y,Te,"∘","\\circ",!0);f(v,y,Te,"÷","\\div",!0);f(v,y,Te,"±","\\pm",!0);f(v,y,Te,"×","\\times",!0);f(v,y,Te,"∩","\\cap",!0);f(v,y,Te,"∪","\\cup",!0);f(v,y,Te,"∖","\\setminus",!0);f(v,y,Te,"∧","\\land");f(v,y,Te,"∨","\\lor");f(v,y,Te,"∧","\\wedge",!0);f(v,y,Te,"∨","\\vee",!0);f(v,y,B,"√","\\surd");f(v,y,_n,"⟨","\\langle",!0);f(v,y,_n,"∣","\\lvert");f(v,y,_n,"∥","\\lVert");f(v,y,on,"?","?");f(v,y,on,"!","!");f(v,y,on,"⟩","\\rangle",!0);f(v,y,on,"∣","\\rvert");f(v,y,on,"∥","\\rVert");f(v,y,N,"=","=");f(v,y,N,":",":");f(v,y,N,"≈","\\approx",!0);f(v,y,N,"≅","\\cong",!0);f(v,y,N,"≥","\\ge");f(v,y,N,"≥","\\geq",!0);f(v,y,N,"←","\\gets");f(v,y,N,">","\\gt",!0);f(v,y,N,"∈","\\in",!0);f(v,y,N,"","\\@not");f(v,y,N,"⊂","\\subset",!0);f(v,y,N,"⊃","\\supset",!0);f(v,y,N,"⊆","\\subseteq",!0);f(v,y,N,"⊇","\\supseteq",!0);f(v,L,N,"⊈","\\nsubseteq",!0);f(v,L,N,"⊉","\\nsupseteq",!0);f(v,y,N,"⊨","\\models");f(v,y,N,"←","\\leftarrow",!0);f(v,y,N,"≤","\\le");f(v,y,N,"≤","\\leq",!0);f(v,y,N,"<","\\lt",!0);f(v,y,N,"→","\\rightarrow",!0);f(v,y,N,"→","\\to");f(v,L,N,"≱","\\ngeq",!0);f(v,L,N,"≰","\\nleq",!0);f(v,y,pi," ","\\ ");f(v,y,pi," ","\\space");f(v,y,pi," ","\\nobreakspace");f(re,y,pi," ","\\ ");f(re,y,pi," "," ");f(re,y,pi," ","\\space");f(re,y,pi," ","\\nobreakspace");f(v,y,pi,"","\\nobreak");f(v,y,pi,"","\\allowbreak");f(v,y,ma,",",",");f(v,y,ma,";",";");f(v,L,Te,"⊼","\\barwedge",!0);f(v,L,Te,"⊻","\\veebar",!0);f(v,y,Te,"⊙","\\odot",!0);f(v,y,Te,"⊕","\\oplus",!0);f(v,y,Te,"⊗","\\otimes",!0);f(v,y,B,"∂","\\partial",!0);f(v,y,Te,"⊘","\\oslash",!0);f(v,L,Te,"⊚","\\circledcirc",!0);f(v,L,Te,"⊡","\\boxdot",!0);f(v,y,Te,"△","\\bigtriangleup");f(v,y,Te,"▽","\\bigtriangledown");f(v,y,Te,"†","\\dagger");f(v,y,Te,"⋄","\\diamond");f(v,y,Te,"⋆","\\star");f(v,y,Te,"◃","\\triangleleft");f(v,y,Te,"▹","\\triangleright");f(v,y,_n,"{","\\{");f(re,y,B,"{","\\{");f(re,y,B,"{","\\textbraceleft");f(v,y,on,"}","\\}");f(re,y,B,"}","\\}");f(re,y,B,"}","\\textbraceright");f(v,y,_n,"{","\\lbrace");f(v,y,on,"}","\\rbrace");f(v,y,_n,"[","\\lbrack",!0);f(re,y,B,"[","\\lbrack",!0);f(v,y,on,"]","\\rbrack",!0);f(re,y,B,"]","\\rbrack",!0);f(v,y,_n,"(","\\lparen",!0);f(v,y,on,")","\\rparen",!0);f(re,y,B,"<","\\textless",!0);f(re,y,B,">","\\textgreater",!0);f(v,y,_n,"⌊","\\lfloor",!0);f(v,y,on,"⌋","\\rfloor",!0);f(v,y,_n,"⌈","\\lceil",!0);f(v,y,on,"⌉","\\rceil",!0);f(v,y,B,"\\","\\backslash");f(v,y,B,"∣","|");f(v,y,B,"∣","\\vert");f(re,y,B,"|","\\textbar",!0);f(v,y,B,"∥","\\|");f(v,y,B,"∥","\\Vert");f(re,y,B,"∥","\\textbardbl");f(re,y,B,"~","\\textasciitilde");f(re,y,B,"\\","\\textbackslash");f(re,y,B,"^","\\textasciicircum");f(v,y,N,"↑","\\uparrow",!0);f(v,y,N,"⇑","\\Uparrow",!0);f(v,y,N,"↓","\\downarrow",!0);f(v,y,N,"⇓","\\Downarrow",!0);f(v,y,N,"↕","\\updownarrow",!0);f(v,y,N,"⇕","\\Updownarrow",!0);f(v,y,zt,"∐","\\coprod");f(v,y,zt,"⋁","\\bigvee");f(v,y,zt,"⋀","\\bigwedge");f(v,y,zt,"⨄","\\biguplus");f(v,y,zt,"⋂","\\bigcap");f(v,y,zt,"⋃","\\bigcup");f(v,y,zt,"∫","\\int");f(v,y,zt,"∫","\\intop");f(v,y,zt,"∬","\\iint");f(v,y,zt,"∭","\\iiint");f(v,y,zt,"∏","\\prod");f(v,y,zt,"∑","\\sum");f(v,y,zt,"⨂","\\bigotimes");f(v,y,zt,"⨁","\\bigoplus");f(v,y,zt,"⨀","\\bigodot");f(v,y,zt,"∮","\\oint");f(v,y,zt,"∯","\\oiint");f(v,y,zt,"∰","\\oiiint");f(v,y,zt,"⨆","\\bigsqcup");f(v,y,zt,"∫","\\smallint");f(re,y,Xr,"…","\\textellipsis");f(v,y,Xr,"…","\\mathellipsis");f(re,y,Xr,"…","\\ldots",!0);f(v,y,Xr,"…","\\ldots",!0);f(v,y,Xr,"⋯","\\@cdots",!0);f(v,y,Xr,"⋱","\\ddots",!0);f(v,y,B,"⋮","\\varvdots");f(re,y,B,"⋮","\\varvdots");f(v,y,Pt,"ˊ","\\acute");f(v,y,Pt,"ˋ","\\grave");f(v,y,Pt,"¨","\\ddot");f(v,y,Pt,"~","\\tilde");f(v,y,Pt,"ˉ","\\bar");f(v,y,Pt,"˘","\\breve");f(v,y,Pt,"ˇ","\\check");f(v,y,Pt,"^","\\hat");f(v,y,Pt,"⃗","\\vec");f(v,y,Pt,"˙","\\dot");f(v,y,Pt,"˚","\\mathring");f(v,y,ke,"","\\@imath");f(v,y,ke,"","\\@jmath");f(v,y,B,"ı","ı");f(v,y,B,"ȷ","ȷ");f(re,y,B,"ı","\\i",!0);f(re,y,B,"ȷ","\\j",!0);f(re,y,B,"ß","\\ss",!0);f(re,y,B,"æ","\\ae",!0);f(re,y,B,"œ","\\oe",!0);f(re,y,B,"ø","\\o",!0);f(re,y,B,"Æ","\\AE",!0);f(re,y,B,"Œ","\\OE",!0);f(re,y,B,"Ø","\\O",!0);f(re,y,Pt,"ˊ","\\'");f(re,y,Pt,"ˋ","\\`");f(re,y,Pt,"ˆ","\\^");f(re,y,Pt,"˜","\\~");f(re,y,Pt,"ˉ","\\=");f(re,y,Pt,"˘","\\u");f(re,y,Pt,"˙","\\.");f(re,y,Pt,"¸","\\c");f(re,y,Pt,"˚","\\r");f(re,y,Pt,"ˇ","\\v");f(re,y,Pt,"¨",'\\"');f(re,y,Pt,"˝","\\H");f(re,y,Pt,"◯","\\textcircled");var gu={"--":!0,"---":!0,"``":!0,"''":!0};f(re,y,B,"–","--",!0);f(re,y,B,"–","\\textendash");f(re,y,B,"—","---",!0);f(re,y,B,"—","\\textemdash");f(re,y,B,"‘","`",!0);f(re,y,B,"‘","\\textquoteleft");f(re,y,B,"’","'",!0);f(re,y,B,"’","\\textquoteright");f(re,y,B,"“","``",!0);f(re,y,B,"“","\\textquotedblleft");f(re,y,B,"”","''",!0);f(re,y,B,"”","\\textquotedblright");f(v,y,B,"°","\\degree",!0);f(re,y,B,"°","\\degree");f(re,y,B,"°","\\textdegree",!0);f(v,y,B,"£","\\pounds");f(v,y,B,"£","\\mathsterling",!0);f(re,y,B,"£","\\pounds");f(re,y,B,"£","\\textsterling",!0);f(v,L,B,"✠","\\maltese");f(re,L,B,"✠","\\maltese");var Gc='0123456789/@."';for(var So=0;So<Gc.length;So++){var Vc=Gc.charAt(So);f(v,y,B,Vc,Vc)}var Wc='0123456789!@*()-=+";:?/.,';for(var wo=0;wo<Wc.length;wo++){var qc=Wc.charAt(wo);f(re,y,B,qc,qc)}var gs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var Eo=0;Eo<gs.length;Eo++){var ja=gs.charAt(Eo);f(v,y,ke,ja,ja),f(re,y,B,ja,ja)}f(v,L,B,"C","ℂ");f(re,L,B,"C","ℂ");f(v,L,B,"H","ℍ");f(re,L,B,"H","ℍ");f(v,L,B,"N","ℕ");f(re,L,B,"N","ℕ");f(v,L,B,"P","ℙ");f(re,L,B,"P","ℙ");f(v,L,B,"Q","ℚ");f(re,L,B,"Q","ℚ");f(v,L,B,"R","ℝ");f(re,L,B,"R","ℝ");f(v,L,B,"Z","ℤ");f(re,L,B,"Z","ℤ");f(v,y,ke,"h","ℎ");f(re,y,ke,"h","ℎ");var Ve;for(var en=0;en<gs.length;en++){var Nt=gs.charAt(en);Ve=String.fromCharCode(55349,56320+en),f(v,y,ke,Nt,Ve),f(re,y,B,Nt,Ve),Ve=String.fromCharCode(55349,56372+en),f(v,y,ke,Nt,Ve),f(re,y,B,Nt,Ve),Ve=String.fromCharCode(55349,56424+en),f(v,y,ke,Nt,Ve),f(re,y,B,Nt,Ve),Ve=String.fromCharCode(55349,56580+en),f(v,y,ke,Nt,Ve),f(re,y,B,Nt,Ve),Ve=String.fromCharCode(55349,56684+en),f(v,y,ke,Nt,Ve),f(re,y,B,Nt,Ve),Ve=String.fromCharCode(55349,56736+en),f(v,y,ke,Nt,Ve),f(re,y,B,Nt,Ve),Ve=String.fromCharCode(55349,56788+en),f(v,y,ke,Nt,Ve),f(re,y,B,Nt,Ve),Ve=String.fromCharCode(55349,56840+en),f(v,y,ke,Nt,Ve),f(re,y,B,Nt,Ve),Ve=String.fromCharCode(55349,56944+en),f(v,y,ke,Nt,Ve),f(re,y,B,Nt,Ve),en<26&&(Ve=String.fromCharCode(55349,56632+en),f(v,y,ke,Nt,Ve),f(re,y,B,Nt,Ve),Ve=String.fromCharCode(55349,56476+en),f(v,y,ke,Nt,Ve),f(re,y,B,Nt,Ve))}Ve="𝕜";f(v,y,ke,"k",Ve);f(re,y,B,"k",Ve);for(var Yi=0;Yi<10;Yi++){var Ei=Yi.toString();Ve=String.fromCharCode(55349,57294+Yi),f(v,y,ke,Ei,Ve),f(re,y,B,Ei,Ve),Ve=String.fromCharCode(55349,57314+Yi),f(v,y,ke,Ei,Ve),f(re,y,B,Ei,Ve),Ve=String.fromCharCode(55349,57324+Yi),f(v,y,ke,Ei,Ve),f(re,y,B,Ei,Ve),Ve=String.fromCharCode(55349,57334+Yi),f(v,y,ke,Ei,Ve),f(re,y,B,Ei,Ve)}var C0="ÐÞþ";for(var To=0;To<C0.length;To++){var $a=C0.charAt(To);f(v,y,ke,$a,$a),f(re,y,B,$a,$a)}var P0={mathClass:"mathbf",textClass:"textbf",font:"Main-Bold"},Xc={mathClass:"mathnormal",textClass:"textit",font:"Math-Italic"},Yc={mathClass:"boldsymbol",textClass:"boldsymbol",font:"Main-BoldItalic"},O4={mathClass:"mathscr",textClass:"textscr",font:"Script-Regular"},Ji={mathClass:"",textClass:"",font:""},jc={mathClass:"mathfrak",textClass:"textfrak",font:"Fraktur-Regular"},$c={mathClass:"mathbb",textClass:"textbb",font:"AMS-Regular"},Zc={mathClass:"mathboldfrak",textClass:"textboldfrak",font:"Fraktur-Regular"},D0={mathClass:"mathsf",textClass:"textsf",font:"SansSerif-Regular"},L0={mathClass:"mathboldsf",textClass:"textboldsf",font:"SansSerif-Bold"},Kc={mathClass:"mathitsf",textClass:"textitsf",font:"SansSerif-Italic"},I0={mathClass:"mathtt",textClass:"texttt",font:"Typewriter-Regular"},Jc=[P0,P0,Xc,Xc,Yc,Yc,O4,Ji,Ji,Ji,jc,jc,$c,$c,Zc,Zc,D0,D0,L0,L0,Kc,Kc,Ji,Ji,I0,I0],B4=[P0,Ji,D0,L0,I0],z4=i=>{var e=i.charCodeAt(0),t=i.charCodeAt(1),n=(e-55296)*1024+(t-56320)+65536;if(119808<=n&&n<120484){var r=Math.floor((n-119808)/26);return Jc[r]}else if(120782<=n&&n<=120831){var a=Math.floor((n-120782)/10);return B4[a]}else{if(n===120485||n===120486)return Jc[0];if(120486<n&&n<120782)return Ji;throw new le("Unsupported character: "+i)}},As=function(e,t,n){if(Ct[n][e]){var r=Ct[n][e].replace;r&&(e=r)}return{value:e,metrics:ol(e,t,n)}},nn=function(e,t,n,r,a){var s=As(e,t,n),o=s.metrics;e=s.value;var l;if(o){var c=o.italic;(n==="text"||r&&r.font==="mathit")&&(c=0),l=new xn(e,o.height,o.depth,c,o.skew,o.width,a)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+e+"' in style '"+t+"' and mode '"+n+"'")),l=new xn(e,0,0,0,0,0,a);if(r){l.maxFontSize=r.sizeMultiplier,r.style.isTight()&&l.classes.push("mtight");var h=r.getColor();h&&(l.style.color=h)}return l},ll=function(e,t,n,r){return r===void 0&&(r=[]),n.font==="boldsymbol"&&As(e,"Main-Bold",t).metrics?nn(e,"Main-Bold",t,n,r.concat(["mathbf"])):e==="\\"||Ct[t][e].font==="main"?nn(e,"Main-Regular",t,n,r):nn(e,"AMS-Regular",t,n,r.concat(["amsrm"]))},k4=function(e,t,n){return n!=="textord"&&As(e,"Math-BoldItalic",t).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},Rs=function(e,t,n){var r=e.mode,a=e.text,s=["mord"],{font:o,fontFamily:l,fontWeight:c,fontShape:h}=t,u=r==="math"||r==="text"&&!!o,d=u?o:l,m="",x="";if(a.charCodeAt(0)===55349){var _=z4(a);m=_.font,x=_[r+"Class"]}if(m)return nn(a,m,r,t,s.concat(x));if(d){var g,p;if(d==="boldsymbol"){var b=k4(a,r,n);g=b.fontName,p=[b.fontClass]}else u?(g=N0[o].fontName,p=[o]):(g=Za(l,c,h),p=[l,c,h]);if(As(a,g,r).metrics)return nn(a,g,r,t,s.concat(p));if(gu.hasOwnProperty(a)&&g.slice(0,10)==="Typewriter"){for(var w=[],M=0;M<a.length;M++)w.push(nn(a[M],g,r,t,s.concat(p)));return mi(w)}}if(n==="mathord")return nn(a,"Math-Italic",r,t,s.concat(["mathnormal"]));if(n==="textord"){var F=Ct[r][a]&&Ct[r][a].font;if(F==="ams"){var P=Za("amsrm",c,h);return nn(a,P,r,t,s.concat("amsrm",c,h))}else if(F==="main"||!F){var C=Za("textrm",c,h);return nn(a,C,r,t,s.concat(c,h))}else{var I=Za(F,c,h);return nn(a,I,r,t,s.concat(I,c,h))}}else throw new Error("unexpected type: "+n+" in makeOrd")},H4=(i,e)=>{if(Ui(i.classes)!==Ui(e.classes)||i.skew!==e.skew||i.maxFontSize!==e.maxFontSize||i.italic!==0&&i.hasClass("mathnormal"))return!1;if(i.classes.length===1){var t=i.classes[0];if(t==="mbin"||t==="mord")return!1}for(var n of Object.keys(i.style))if(i.style[n]!==e.style[n])return!1;for(var r of Object.keys(e.style))if(i.style[r]!==e.style[r])return!1;return!0},vu=i=>{for(var e=0;e<i.length-1;e++){var t=i[e],n=i[e+1];t instanceof xn&&n instanceof xn&&H4(t,n)&&(t.text+=n.text,t.height=Math.max(t.height,n.height),t.depth=Math.max(t.depth,n.depth),t.italic=n.italic,i.splice(e+1,1),e--)}return i},cl=function(e){for(var t=0,n=0,r=0,a=0;a<e.children.length;a++){var s=e.children[a];s.height>t&&(t=s.height),s.depth>n&&(n=s.depth),s.maxFontSize>r&&(r=s.maxFontSize)}e.height=t,e.depth=n,e.maxFontSize=r},oe=function(e,t,n,r){var a=new qr(e,t,n,r);return cl(a),a},Oi=(i,e,t,n)=>new qr(i,e,t,n),kr=function(e,t,n){var r=oe([e],[],t);return r.height=Math.max(n||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),r.style.borderBottomWidth=ue(r.height),r.maxFontSize=1,r},G4=function(e,t,n,r){var a=new Ts(e,t,n,r);return cl(a),a},mi=function(e){var t=new Wr(e);return cl(t),t},Hr=function(e,t){return e instanceof Wr?oe([],[e],t):e},V4=function(e){if(e.positionType==="individualShift"){for(var t=e.children,n=[t[0]],r=-t[0].shift-t[0].elem.depth,a=r,s=1;s<t.length;s++){var o=-t[s].shift-a-t[s].elem.depth,l=o-(t[s-1].elem.height+t[s-1].elem.depth);a=a+o,n.push({type:"kern",size:l}),n.push(t[s])}return{children:n,depth:r}}var c;if(e.positionType==="top"){for(var h=e.positionData,u=0;u<e.children.length;u++){var d=e.children[u];h-=d.type==="kern"?d.size:d.elem.height+d.elem.depth}c=h}else if(e.positionType==="bottom")c=-e.positionData;else{var m=e.children[0];if(m.type!=="elem")throw new Error('First child must have type "elem".');if(e.positionType==="shift")c=-m.elem.depth-e.positionData;else if(e.positionType==="firstBaseline")c=-m.elem.depth;else throw new Error("Invalid positionType "+e.positionType+".")}return{children:e.children,depth:c}},ut=function(e,t){for(var{children:n,depth:r}=V4(e),a=0,s=0;s<n.length;s++){var o=n[s];if(o.type==="elem"){var l=o.elem;a=Math.max(a,l.maxFontSize,l.height)}}a+=2;var c=oe(["pstrut"],[]);c.style.height=ue(a);for(var h=[],u=r,d=r,m=r,x=0;x<n.length;x++){var _=n[x];if(_.type==="kern")m+=_.size;else{var g=_.elem,p=_.wrapperClasses||[],b=_.wrapperStyle||{},w=oe(p,[c,g],void 0,b);w.style.top=ue(-a-m-g.depth),_.marginLeft&&(w.style.marginLeft=_.marginLeft),_.marginRight&&(w.style.marginRight=_.marginRight),h.push(w),m+=g.height+g.depth}u=Math.min(u,m),d=Math.max(d,m)}var M=oe(["vlist"],h);M.style.height=ue(d);var F;if(u<0){var P=oe([],[]),C=oe(["vlist"],[P]);C.style.height=ue(-u);var I=oe(["vlist-s"],[new xn("​")]);F=[oe(["vlist-r"],[M,I]),oe(["vlist-r"],[C])]}else F=[oe(["vlist-r"],[M])];var T=oe(["vlist-t"],F);return F.length===2&&T.classes.push("vlist-t2"),T.height=d,T.depth=-u,T},xu=(i,e)=>{var t=oe(["mspace"],[],e),n=Lt(i,e);return t.style.marginRight=ue(n),t},Za=(i,e,t)=>{var n,r;switch(i){case"amsrm":n="AMS";break;case"textrm":n="Main";break;case"textsf":n="SansSerif";break;case"texttt":n="Typewriter";break;default:n=i}return e==="textbf"&&t==="textit"?r="BoldItalic":e==="textbf"?r="Bold":t==="textit"?r="Italic":r="Regular",n+"-"+r},N0={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},_u={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},yu=function(e,t){var[n,r,a]=_u[e],s=new Fi(n),o=new di([s],{width:ue(r),height:ue(a),style:"width:"+ue(r),viewBox:"0 0 "+1e3*r+" "+1e3*a,preserveAspectRatio:"xMinYMin"}),l=Oi(["overlay"],[o],t);return l.height=a,l.style.height=ue(a),l.style.width=ue(r),l},Dt={number:3,unit:"mu"},ji={number:4,unit:"mu"},ni={number:5,unit:"mu"},W4={mord:{mop:Dt,mbin:ji,mrel:ni,minner:Dt},mop:{mord:Dt,mop:Dt,mrel:ni,minner:Dt},mbin:{mord:ji,mop:ji,mopen:ji,minner:ji},mrel:{mord:ni,mop:ni,mopen:ni,minner:ni},mopen:{},mclose:{mop:Dt,mbin:ji,mrel:ni,minner:Dt},mpunct:{mord:Dt,mop:Dt,mrel:ni,mopen:Dt,mclose:Dt,mpunct:Dt,minner:Dt},minner:{mord:Dt,mop:Dt,mbin:ji,mrel:ni,mopen:Dt,mpunct:Dt,minner:Dt}},q4={mord:{mop:Dt},mop:{mord:Dt,mop:Dt},mbin:{},mrel:{},mopen:{},mclose:{mop:Dt},mpunct:{},minner:{mop:Dt}},Mu={},vs={},xs={};function ye(i){for(var{type:e,names:t,props:n,handler:r,htmlBuilder:a,mathmlBuilder:s}=i,o={type:e,numArgs:n.numArgs,argTypes:n.argTypes,allowedInArgument:!!n.allowedInArgument,allowedInText:!!n.allowedInText,allowedInMath:n.allowedInMath===void 0?!0:n.allowedInMath,numOptionalArgs:n.numOptionalArgs||0,infix:!!n.infix,primitive:!!n.primitive,handler:r},l=0;l<t.length;++l)Mu[t[l]]=o;e&&(a&&(vs[e]=a),s&&(xs[e]=s))}function sr(i){var{type:e,htmlBuilder:t,mathmlBuilder:n}=i;ye({type:e,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:t,mathmlBuilder:n})}var _s=function(e){return e.type==="ordgroup"&&e.body.length===1?e.body[0]:e},Ot=function(e){return e.type==="ordgroup"?e.body:[e]},X4=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),Y4=new Set(["rightmost","mrel","mclose","mpunct"]),j4={display:Xe.DISPLAY,text:Xe.TEXT,script:Xe.SCRIPT,scriptscript:Xe.SCRIPTSCRIPT},$4={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},Xt=function(e,t,n,r){r===void 0&&(r=[null,null]);for(var a=[],s=0;s<e.length;s++){var o=dt(e[s],t);if(o instanceof Wr){var l=o.children;a.push(...l)}else a.push(o)}if(vu(a),!n)return a;var c=t;if(e.length===1){var h=e[0];h.type==="sizing"?c=t.havingSize(h.size):h.type==="styling"&&(c=t.havingStyle(j4[h.style]))}var u=oe([r[0]||"leftmost"],[],t),d=oe([r[1]||"rightmost"],[],t),m=n==="root";return U0(a,(x,_)=>{var g=_.classes[0],p=x.classes[0];g==="mbin"&&Y4.has(p)?_.classes[0]="mord":p==="mbin"&&X4.has(g)&&(x.classes[0]="mord")},{node:u},d,m),U0(a,(x,_)=>{var g,p,b=O0(_),w=O0(x),M=b&&w?x.hasClass("mtight")?(g=q4[b])==null?void 0:g[w]:(p=W4[b])==null?void 0:p[w]:null;if(M)return xu(M,c)},{node:u},d,m),a},U0=function(e,t,n,r,a){r&&e.push(r);for(var s=0;s<e.length;s++){var o=e[s],l=bu(o);if(l){U0(l.children,t,n,null,a);continue}var c=!o.hasClass("mspace");if(c){var h=t(o,n.node);h&&(n.insertAfter?n.insertAfter(h):(e.unshift(h),s++))}c?n.node=o:a&&o.hasClass("newline")&&(n.node=oe(["leftmost"])),n.insertAfter=(u=>d=>{e.splice(u+1,0,d),s++})(s)}r&&e.pop()},bu=function(e){return e instanceof Wr||e instanceof Ts||e instanceof qr&&e.hasClass("enclosing")?e:null},F0=function(e,t){var n=bu(e);if(n){var r=n.children;if(r.length){if(t==="right")return F0(r[r.length-1],"right");if(t==="left")return F0(r[0],"left")}}return e},O0=function(e,t){if(!e)return null;t&&(e=F0(e,t));var n=e.classes[0];return $4[n]||null},ha=function(e,t){var n=["nulldelimiter"].concat(e.baseSizingClasses());return oe(t.concat(n))},dt=function(e,t,n){if(!e)return oe();if(vs[e.type]){var r=vs[e.type](e,t);if(n&&t.size!==n.size){r=oe(t.sizingClasses(n),[r],t);var a=t.sizeMultiplier/n.sizeMultiplier;r.height*=a,r.depth*=a}return r}else throw new le("Got group of unknown type: '"+e.type+"'")};function Ka(i,e){var t=oe(["base"],i,e),n=oe(["strut"]);return n.style.height=ue(t.height+t.depth),t.depth&&(n.style.verticalAlign=ue(-t.depth)),t.children.unshift(n),t}function B0(i,e){var t=null;i.length===1&&i[0].type==="tag"&&(t=i[0].tag,i=i[0].body);var n=Xt(i,e,"root"),r;n.length===2&&n[1].hasClass("tag")&&(r=n.pop());for(var a=[],s=[],o=0;o<n.length;o++)if(s.push(n[o]),n[o].hasClass("mbin")||n[o].hasClass("mrel")||n[o].hasClass("allowbreak")){for(var l=!1;o<n.length-1&&n[o+1].hasClass("mspace")&&!n[o+1].hasClass("newline");)o++,s.push(n[o]),n[o].hasClass("nobreak")&&(l=!0);l||(a.push(Ka(s,e)),s=[])}else n[o].hasClass("newline")&&(s.pop(),s.length>0&&(a.push(Ka(s,e)),s=[]),a.push(n[o]));s.length>0&&a.push(Ka(s,e));var c;t?(c=Ka(Xt(t,e,!0),e),c.classes=["tag"],a.push(c)):r&&a.push(r);var h=oe(["katex-html"],a);if(h.setAttribute("aria-hidden","true"),c){var u=c.children[0];u.style.height=ue(h.height+h.depth),h.depth&&(u.style.verticalAlign=ue(-h.depth))}return h}function Su(i){return new Wr(i)}class ce{constructor(e,t,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=e,this.attributes={},this.children=t||[],this.classes=n||[]}setAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}toNode(){var e=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);this.classes.length>0&&(e.className=Ui(this.classes));for(var n=0;n<this.children.length;n++)if(this.children[n]instanceof Bt&&this.children[n+1]instanceof Bt){for(var r=this.children[n].toText()+this.children[++n].toText();this.children[n+1]instanceof Bt;)r+=this.children[++n].toText();e.appendChild(new Bt(r).toNode())}else e.appendChild(this.children[n].toNode());return e}toMarkup(){var e="<"+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="',e+=Qt(this.attributes[t]),e+='"');this.classes.length>0&&(e+=' class ="'+Qt(Ui(this.classes))+'"'),e+=">";for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+="</"+this.type+">",e}toText(){return this.children.map(e=>e.toText()).join("")}}class Bt{constructor(e){this.text=void 0,this.text=e}toNode(){return document.createTextNode(this.text)}toMarkup(){return Qt(this.toText())}toText(){return this.text}}class wu{constructor(e){this.width=void 0,this.character=void 0,this.width=e,e>=.05555&&e<=.05556?this.character=" ":e>=.1666&&e<=.1667?this.character=" ":e>=.2222&&e<=.2223?this.character=" ":e>=.2777&&e<=.2778?this.character="  ":e>=-.05556&&e<=-.05555?this.character=" ⁣":e>=-.1667&&e<=-.1666?this.character=" ⁣":e>=-.2223&&e<=-.2222?this.character=" ⁣":e>=-.2778&&e<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return e.setAttribute("width",ue(this.width)),e}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+ue(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var Z4=new Set(["\\imath","\\jmath"]),K4=new Set(["mrow","mtable"]),Pn=function(e,t,n){return Ct[t][e]&&Ct[t][e].replace&&e.charCodeAt(0)!==55349&&!(gu.hasOwnProperty(e)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)==="tt"||n.font&&n.font.slice(4,6)==="tt"))&&(e=Ct[t][e].replace),new Bt(e)},hl=function(e){return e.length===1?e[0]:new ce("mrow",e)},J4={mathit:"italic",boldsymbol:i=>i.type==="textord"?"bold":"bold-italic",mathbf:"bold",mathbb:"double-struck",mathsfit:"sans-serif-italic",mathfrak:"fraktur",mathscr:"script",mathcal:"script",mathsf:"sans-serif",mathtt:"monospace"},ul=(i,e)=>{if(i.mode==="text"){if(e.fontFamily==="texttt")return"monospace";if(e.fontFamily==="textsf")return e.fontShape==="textit"&&e.fontWeight==="textbf"?"sans-serif-bold-italic":e.fontShape==="textit"?"sans-serif-italic":e.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(e.fontShape==="textit"&&e.fontWeight==="textbf")return"bold-italic";if(e.fontShape==="textit")return"italic";if(e.fontWeight==="textbf")return"bold"}var t=e.font;if(!t||t==="mathnormal")return null;var n=i.mode,r=J4[t];if(r)return typeof r=="function"?r(i):r;var a=i.text;if(Z4.has(a))return null;if(Ct[n][a]){var s=Ct[n][a].replace;s&&(a=s)}var o=N0[t].fontName;return ol(a,o,n)?N0[t].variant:null};function Ao(i){if(!i)return!1;if(i.type==="mi"&&i.children.length===1){var e=i.children[0];return e instanceof Bt&&e.text==="."}else if(i.type==="mo"&&i.children.length===1&&i.getAttribute("separator")==="true"&&i.getAttribute("lspace")==="0em"&&i.getAttribute("rspace")==="0em"){var t=i.children[0];return t instanceof Bt&&t.text===","}else return!1}var yn=function(e,t,n){if(e.length===1){var r=_t(e[0],t);return n&&r instanceof ce&&r.type==="mo"&&(r.setAttribute("lspace","0em"),r.setAttribute("rspace","0em")),[r]}for(var a=[],s,o=0;o<e.length;o++){var l=_t(e[o],t);if(l instanceof ce&&s instanceof ce){if(l.type==="mtext"&&s.type==="mtext"&&l.getAttribute("mathvariant")===s.getAttribute("mathvariant")){s.children.push(...l.children);continue}else if(l.type==="mn"&&s.type==="mn"){s.children.push(...l.children);continue}else if(Ao(l)&&s.type==="mn"){s.children.push(...l.children);continue}else if(l.type==="mn"&&Ao(s))l.children=[...s.children,...l.children],a.pop();else if((l.type==="msup"||l.type==="msub")&&l.children.length>=1&&(s.type==="mn"||Ao(s))){var c=l.children[0];c instanceof ce&&c.type==="mn"&&(c.children=[...s.children,...c.children],a.pop())}else if(s.type==="mi"&&s.children.length===1){var h=s.children[0];if(h instanceof Bt&&h.text==="̸"&&(l.type==="mo"||l.type==="mi"||l.type==="mn")){var u=l.children[0];u instanceof Bt&&u.text.length>0&&(u.text=u.text.slice(0,1)+"̸"+u.text.slice(1),a.pop())}}}a.push(l),s=l}return a},Bi=function(e,t,n){return hl(yn(e,t,n))},_t=function(e,t){if(!e)return new ce("mrow");if(xs[e.type])return xs[e.type](e,t);throw new le("Got group of unknown type: '"+e.type+"'")};function Qc(i,e,t,n,r){var a=yn(i,t),s;a.length===1&&a[0]instanceof ce&&K4.has(a[0].type)?s=a[0]:s=new ce("mrow",a);var o=new ce("annotation",[new Bt(e)]);o.setAttribute("encoding","application/x-tex");var l=new ce("semantics",[s,o]),c=new ce("math",[l]);c.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),n&&c.setAttribute("display","block");var h=r?"katex":"katex-mathml";return oe([h],[c])}var Q4=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],eh=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],th=function(e,t){return t.size<2?e:Q4[e-1][t.size-1]};class ri{constructor(e){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=e.style,this.color=e.color,this.size=e.size||ri.BASESIZE,this.textSize=e.textSize||this.size,this.phantom=!!e.phantom,this.font=e.font||"",this.fontFamily=e.fontFamily||"",this.fontWeight=e.fontWeight||"",this.fontShape=e.fontShape||"",this.sizeMultiplier=eh[this.size-1],this.maxSize=e.maxSize,this.minRuleThickness=e.minRuleThickness,this._fontMetrics=void 0}extend(e){var t={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(t,e),new ri(t)}havingStyle(e){return this.style===e?this:this.extend({style:e,size:th(this.textSize,e)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:eh[e-1]})}havingBaseStyle(e){e=e||this.style.text();var t=th(ri.BASESIZE,e);return this.size===t&&this.textSize===ri.BASESIZE&&this.style===e?this:this.extend({style:e,size:t})}havingBaseSizing(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})}withColor(e){return this.extend({color:e})}withPhantom(){return this.extend({phantom:!0})}withFont(e){return this.extend({font:e})}withTextFontFamily(e){return this.extend({fontFamily:e,font:""})}withTextFontWeight(e){return this.extend({fontWeight:e,font:""})}withTextFontShape(e){return this.extend({fontShape:e,font:""})}sizingClasses(e){return e.size!==this.size?["sizing","reset-size"+e.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==ri.BASESIZE?["sizing","reset-size"+this.size,"size"+ri.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=F4(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}ri.BASESIZE=6;var Eu=function(e){return new ri({style:e.displayMode?Xe.DISPLAY:Xe.TEXT,maxSize:e.maxSize,minRuleThickness:e.minRuleThickness})},Tu=function(e,t){if(t.displayMode){var n=["katex-display"];t.leqno&&n.push("leqno"),t.fleqn&&n.push("fleqn"),e=oe(n,[e])}return e},ev=function(e,t,n){var r=Eu(n),a;if(n.output==="mathml")return Qc(e,t,r,n.displayMode,!0);if(n.output==="html"){var s=B0(e,r);a=oe(["katex"],[s])}else{var o=Qc(e,t,r,n.displayMode,!1),l=B0(e,r);a=oe(["katex"],[o,l])}return Tu(a,n)},tv=function(e,t,n){var r=Eu(n),a=B0(e,r),s=oe(["katex"],[a]);return Tu(s,n)},nv={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",underbracket:"⎵",overbracket:"⎴",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},Cs=function(e){var t=new ce("mo",[new Bt(nv[e.replace(/^\\/,"")])]);return t.setAttribute("stretchy","true"),t},iv={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overbracket:[["leftbracketover","rightbracketover"],1.6,440],underbracket:[["leftbracketunder","rightbracketunder"],1.6,410],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},rv=new Set(["widehat","widecheck","widetilde","utilde"]),Ps=function(e,t){function n(){var o=4e5,l=e.label.slice(1);if(rv.has(l)&&"base"in e){var c=e.base.type==="ordgroup"?e.base.body.length:1,h,u,d;if(c>5)l==="widehat"||l==="widecheck"?(h=420,o=2364,d=.42,u=l+"4"):(h=312,o=2340,d=.34,u="tilde4");else{var m=[1,1,2,2,3,3][c];l==="widehat"||l==="widecheck"?(o=[0,1062,2364,2364,2364][m],h=[0,239,300,360,420][m],d=[0,.24,.3,.3,.36,.42][m],u=l+m):(o=[0,600,1033,2339,2340][m],h=[0,260,286,306,312][m],d=[0,.26,.286,.3,.306,.34][m],u="tilde"+m)}var x=new Fi(u),_=new di([x],{width:"100%",height:ue(d),viewBox:"0 0 "+o+" "+h,preserveAspectRatio:"none"});return{span:Oi([],[_],t),minWidth:0,height:d}}else{var g=[],p=iv[l];if(!p)throw new Error('No SVG data for "'+l+'".');var[b,w,M]=p,F=M/1e3,P=b.length,C,I;if(P===1){if(p.length!==4)throw new Error('Expected 4-tuple for single-path SVG data "'+l+'".');C=["hide-tail"],I=[p[3]]}else if(P===2)C=["halfarrow-left","halfarrow-right"],I=["xMinYMin","xMaxYMin"];else if(P===3)C=["brace-left","brace-center","brace-right"],I=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+P+" children.");for(var T=0;T<P;T++){var S=new Fi(b[T]),U=new di([S],{width:"400em",height:ue(F),viewBox:"0 0 "+o+" "+M,preserveAspectRatio:I[T]+" slice"}),V=Oi([C[T]],[U],t);if(P===1)return{span:V,minWidth:w,height:F};V.style.height=ue(F),g.push(V)}return{span:oe(["stretchy"],g,t),minWidth:w,height:F}}}var{span:r,minWidth:a,height:s}=n();return r.height=s,r.style.height=ue(s),a>0&&(r.style.minWidth=ue(a)),r},av=function(e,t,n,r,a){var s,o=e.height+e.depth+n+r;if(/fbox|color|angl/.test(t)){if(s=oe(["stretchy",t],[],a),t==="fbox"){var l=a.color&&a.getColor();l&&(s.style.borderColor=l)}}else{var c=[];/^[bx]cancel$/.test(t)&&c.push(new R0({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(t)&&c.push(new R0({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var h=new di(c,{width:"100%",height:ue(o)});s=Oi([],[h],a)}return s.height=o,s.style.height=ue(o),s},sv={bin:1,close:1,inner:1,open:1,punct:1,rel:1},ov={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1};function lv(i){return i in sv}function Qe(i,e){if(!i||i.type!==e)throw new Error("Expected node of type "+e+", but got "+(i?"node of type "+i.type:String(i)));return i}function Ds(i){var e=Ls(i);if(!e)throw new Error("Expected node of symbol group type, but got "+(i?"node of type "+i.type:String(i)));return e}function Ls(i){return i&&(i.type==="atom"||ov.hasOwnProperty(i.type))?i:null}var Au=i=>{if(i instanceof xn)return i;if(N4(i)&&i.children.length===1)return Au(i.children[0])},dl=(i,e)=>{var t,n,r;i&&i.type==="supsub"?(n=Qe(i.base,"accent"),t=n.base,i.base=t,r=I4(dt(i,e)),i.base=n):(n=Qe(i,"accent"),t=n.base);var a=dt(t,e.havingCrampedStyle()),s=n.isShifty&&fi(t),o=0;if(s){var l,c;o=(l=(c=Au(a))==null?void 0:c.skew)!=null?l:0}var h=n.label==="\\c",u=h?a.height+a.depth:Math.min(a.height,e.fontMetrics().xHeight),d;if(n.isStretchy)d=Ps(n,e),d=ut({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"elem",elem:d,wrapperClasses:["svg-align"],wrapperStyle:o>0?{width:"calc(100% - "+ue(2*o)+")",marginLeft:ue(2*o)}:void 0}]});else{var m,x;n.label==="\\vec"?(m=yu("vec",e),x=_u.vec[1]):(m=Rs({mode:n.mode,text:n.label},e,"textord"),m=L4(m),m.italic=0,x=m.width,h&&(u+=m.depth)),d=oe(["accent-body"],[m]);var _=n.label==="\\textcircled";_&&(d.classes.push("accent-full"),u=a.height);var g=o;_||(g-=x/2),d.style.left=ue(g),n.label==="\\textcircled"&&(d.style.top=".2em"),d=ut({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:-u},{type:"elem",elem:d}]})}var p=oe(["mord","accent"],[d],e);return r?(r.children[0]=p,r.height=Math.max(p.height,r.height),r.classes[0]="mord",r):p},Ru=(i,e)=>{var t=i.isStretchy?Cs(i.label):new ce("mo",[Pn(i.label,i.mode)]),n=new ce("mover",[_t(i.base,e),t]);return n.setAttribute("accent","true"),n},cv=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(i=>"\\"+i).join("|"));ye({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(i,e)=>{var t=_s(e[0]),n=!cv.test(i.funcName),r=!n||i.funcName==="\\widehat"||i.funcName==="\\widetilde"||i.funcName==="\\widecheck";return{type:"accent",mode:i.parser.mode,label:i.funcName,isStretchy:n,isShifty:r,base:t}},htmlBuilder:dl,mathmlBuilder:Ru});ye({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(i,e)=>{var t=e[0],n=i.parser.mode;return n==="math"&&(i.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+i.funcName+" works only in text mode"),n="text"),{type:"accent",mode:n,label:i.funcName,isStretchy:!1,isShifty:!0,base:t}},htmlBuilder:dl,mathmlBuilder:Ru});ye({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"accentUnder",mode:t.mode,label:n,base:r}},htmlBuilder:(i,e)=>{var t=dt(i.base,e),n=Ps(i,e),r=i.label==="\\utilde"?.12:0,a=ut({positionType:"top",positionData:t.height,children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:r},{type:"elem",elem:t}]});return oe(["mord","accentunder"],[a],e)},mathmlBuilder:(i,e)=>{var t=Cs(i.label),n=new ce("munder",[_t(i.base,e),t]);return n.setAttribute("accentunder","true"),n}});var Ja=i=>{var e=new ce("mpadded",i?[i]:[]);return e.setAttribute("width","+0.6em"),e.setAttribute("lspace","0.3em"),e};ye({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(i,e,t){var{parser:n,funcName:r}=i;return{type:"xArrow",mode:n.mode,label:r,body:e[0],below:t[0]}},htmlBuilder(i,e){var t=e.style,n=e.havingStyle(t.sup()),r=Hr(dt(i.body,n,e),e),a=i.label.slice(0,2)==="\\x"?"x":"cd";r.classes.push(a+"-arrow-pad");var s;i.below&&(n=e.havingStyle(t.sub()),s=Hr(dt(i.below,n,e),e),s.classes.push(a+"-arrow-pad"));var o=Ps(i,e),l=-e.fontMetrics().axisHeight+.5*o.height,c=-e.fontMetrics().axisHeight-.5*o.height-.111;(r.depth>.25||i.label==="\\xleftequilibrium")&&(c-=r.depth);var h;if(s){var u=-e.fontMetrics().axisHeight+s.height+.5*o.height+.111;h=ut({positionType:"individualShift",children:[{type:"elem",elem:r,shift:c},{type:"elem",elem:o,shift:l,wrapperClasses:["svg-align"]},{type:"elem",elem:s,shift:u}]})}else h=ut({positionType:"individualShift",children:[{type:"elem",elem:r,shift:c},{type:"elem",elem:o,shift:l,wrapperClasses:["svg-align"]}]});return oe(["mrel","x-arrow"],[h],e)},mathmlBuilder(i,e){var t=Cs(i.label);t.setAttribute("minsize",i.label.charAt(0)==="x"?"1.75em":"3.0em");var n;if(i.body){var r=Ja(_t(i.body,e));if(i.below){var a=Ja(_t(i.below,e));n=new ce("munderover",[t,a,r])}else n=new ce("mover",[t,r])}else if(i.below){var s=Ja(_t(i.below,e));n=new ce("munder",[t,s])}else n=Ja(),n=new ce("mover",[t,n]);return n}});function Cu(i,e){var t=Xt(i.body,e,!0);return oe([i.mclass],t,e)}function Pu(i,e){var t,n=yn(i.body,e);return i.mclass==="minner"?t=new ce("mpadded",n):i.mclass==="mord"?i.isCharacterBox?(t=n[0],t.type="mi"):t=new ce("mi",n):(i.isCharacterBox?(t=n[0],t.type="mo"):t=new ce("mo",n),i.mclass==="mbin"?(t.attributes.lspace="0.22em",t.attributes.rspace="0.22em"):i.mclass==="mpunct"?(t.attributes.lspace="0em",t.attributes.rspace="0.17em"):i.mclass==="mopen"||i.mclass==="mclose"?(t.attributes.lspace="0em",t.attributes.rspace="0em"):i.mclass==="minner"&&(t.attributes.lspace="0.0556em",t.attributes.width="+0.1111em")),t}ye({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"mclass",mode:t.mode,mclass:"m"+n.slice(5),body:Ot(r),isCharacterBox:fi(r)}},htmlBuilder:Cu,mathmlBuilder:Pu});var Is=i=>{var e=i.type==="ordgroup"&&i.body.length?i.body[0]:i;return e.type==="atom"&&(e.family==="bin"||e.family==="rel")?"m"+e.family:"mord"};ye({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(i,e){var{parser:t}=i;return{type:"mclass",mode:t.mode,mclass:Is(e[0]),body:Ot(e[1]),isCharacterBox:fi(e[1])}}});ye({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(i,e){var{parser:t,funcName:n}=i,r=e[1],a=e[0],s;n!=="\\stackrel"?s=Is(r):s="mrel";var o={type:"op",mode:r.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:n!=="\\stackrel",body:Ot(r)},l={type:"supsub",mode:a.mode,base:o,sup:n==="\\underset"?null:a,sub:n==="\\underset"?a:null};return{type:"mclass",mode:t.mode,mclass:s,body:[l],isCharacterBox:fi(l)}},htmlBuilder:Cu,mathmlBuilder:Pu});ye({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"pmb",mode:t.mode,mclass:Is(e[0]),body:Ot(e[0])}},htmlBuilder(i,e){var t=Xt(i.body,e,!0),n=oe([i.mclass],t,e);return n.style.textShadow="0.02em 0.01em 0.04px",n},mathmlBuilder(i,e){var t=yn(i.body,e),n=new ce("mstyle",t);return n.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),n}});var hv={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},nh=()=>({type:"styling",body:[],mode:"math",style:"display",resetFont:!0}),ih=i=>i.type==="textord"&&i.text==="@",uv=(i,e)=>(i.type==="mathord"||i.type==="atom")&&i.text===e;function dv(i,e,t){var n=hv[i];switch(n){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return t.callFunction(n,[e[0]],[e[1]]);case"\\uparrow":case"\\downarrow":{var r=t.callFunction("\\\\cdleft",[e[0]],[]),a={type:"atom",text:n,mode:"math",family:"rel"},s=t.callFunction("\\Big",[a],[]),o=t.callFunction("\\\\cdright",[e[1]],[]),l={type:"ordgroup",mode:"math",body:[r,s,o]};return t.callFunction("\\\\cdparent",[l],[])}case"\\\\cdlongequal":return t.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var c={type:"textord",text:"\\Vert",mode:"math"};return t.callFunction("\\Big",[c],[])}default:return{type:"textord",text:" ",mode:"math"}}}function fv(i){var e=[];for(i.gullet.beginGroup(),i.gullet.macros.set("\\cr","\\\\\\relax"),i.gullet.beginGroup();;){e.push(i.parseExpression(!1,"\\\\")),i.gullet.endGroup(),i.gullet.beginGroup();var t=i.fetch().text;if(t==="&"||t==="\\\\")i.consume();else if(t==="\\end"){e[e.length-1].length===0&&e.pop();break}else throw new le("Expected \\\\ or \\cr or \\end",i.nextToken)}for(var n=[],r=[n],a=0;a<e.length;a++){for(var s=e[a],o=nh(),l=0;l<s.length;l++)if(!ih(s[l]))o.body.push(s[l]);else{n.push(o),l+=1;var c=Ds(s[l]).text,h=new Array(2);if(h[0]={type:"ordgroup",mode:"math",body:[]},h[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(c))if("<>AV".includes(c))for(var u=0;u<2;u++){for(var d=!0,m=l+1;m<s.length;m++){if(uv(s[m],c)){d=!1,l=m;break}if(ih(s[m]))throw new le("Missing a "+c+" character to complete a CD arrow.",s[m]);h[u].body.push(s[m])}if(d)throw new le("Missing a "+c+" character to complete a CD arrow.",s[l])}else throw new le('Expected one of "<>AV=|." after @',s[l]);var x=dv(c,h,i),_={type:"styling",body:[x],mode:"math",style:"display",resetFont:!0};n.push(_),o=nh()}a%2===0?n.push(o):n.shift(),n=[],r.push(n)}i.gullet.endGroup(),i.gullet.endGroup();var g=new Array(r[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:r,arraystretch:1,addJot:!0,rowGaps:[null],cols:g,colSeparationType:"CD",hLinesBeforeRow:new Array(r.length+1).fill([])}}ye({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i;return{type:"cdlabel",mode:t.mode,side:n.slice(4),label:e[0]}},htmlBuilder(i,e){var t=e.havingStyle(e.style.sup()),n=Hr(dt(i.label,t,e),e);return n.classes.push("cd-label-"+i.side),n.style.bottom=ue(.8-n.depth),n.height=0,n.depth=0,n},mathmlBuilder(i,e){var t=new ce("mrow",[_t(i.label,e)]);return t=new ce("mpadded",[t]),t.setAttribute("width","0"),i.side==="left"&&t.setAttribute("lspace","-1width"),t.setAttribute("voffset","0.7em"),t=new ce("mstyle",[t]),t.setAttribute("displaystyle","false"),t.setAttribute("scriptlevel","1"),t}});ye({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(i,e){var{parser:t}=i;return{type:"cdlabelparent",mode:t.mode,fragment:e[0]}},htmlBuilder(i,e){var t=Hr(dt(i.fragment,e),e);return t.classes.push("cd-vert-arrow"),t},mathmlBuilder(i,e){return new ce("mrow",[_t(i.fragment,e)])}});ye({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(i,e){for(var{parser:t}=i,n=Qe(e[0],"ordgroup"),r=n.body,a="",s=0;s<r.length;s++){var o=Qe(r[s],"textord");a+=o.text}var l=parseInt(a),c;if(isNaN(l))throw new le("\\@char has non-numeric argument "+a);if(l<0||l>=1114111)throw new le("\\@char with invalid code point "+a);return l<=65535?c=String.fromCharCode(l):(l-=65536,c=String.fromCharCode((l>>10)+55296,(l&1023)+56320)),{type:"textord",mode:t.mode,text:c}}});var Du=(i,e)=>{var t=Xt(i.body,e.withColor(i.color),!1);return mi(t)},Lu=(i,e)=>{var t=yn(i.body,e.withColor(i.color)),n=new ce("mstyle",t);return n.setAttribute("mathcolor",i.color),n};ye({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(i,e){var{parser:t}=i,n=Qe(e[0],"color-token").color,r=e[1];return{type:"color",mode:t.mode,color:n,body:Ot(r)}},htmlBuilder:Du,mathmlBuilder:Lu});ye({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(i,e){var{parser:t,breakOnTokenText:n}=i,r=Qe(e[0],"color-token").color;t.gullet.macros.set("\\current@color",r);var a=t.parseExpression(!0,n);return{type:"color",mode:t.mode,color:r,body:a}},htmlBuilder:Du,mathmlBuilder:Lu});ye({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(i,e,t){var{parser:n}=i,r=n.gullet.future().text==="["?n.parseSizeGroup(!0):null,a=!n.settings.displayMode||!n.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:n.mode,newLine:a,size:r&&Qe(r,"size").value}},htmlBuilder(i,e){var t=oe(["mspace"],[],e);return i.newLine&&(t.classes.push("newline"),i.size&&(t.style.marginTop=ue(Lt(i.size,e)))),t},mathmlBuilder(i,e){var t=new ce("mspace");return i.newLine&&(t.setAttribute("linebreak","newline"),i.size&&t.setAttribute("height",ue(Lt(i.size,e)))),t}});var z0={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Iu=i=>{var e=i.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(e))throw new le("Expected a control sequence",i);return e},pv=i=>{var e=i.gullet.popToken();return e.text==="="&&(e=i.gullet.popToken(),e.text===" "&&(e=i.gullet.popToken())),e},Nu=(i,e,t,n)=>{var r=i.gullet.macros.get(t.text);r==null&&(t.noexpand=!0,r={tokens:[t],numArgs:0,unexpandable:!i.gullet.isExpandable(t.text)}),i.gullet.macros.set(e,r,n)};ye({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(i){var{parser:e,funcName:t}=i;e.consumeSpaces();var n=e.fetch();if(z0[n.text])return(t==="\\global"||t==="\\\\globallong")&&(n.text=z0[n.text]),Qe(e.parseFunction(),"internal");throw new le("Invalid token after macro prefix",n)}});ye({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=e.gullet.popToken(),r=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(r))throw new le("Expected a control sequence",n);for(var a=0,s,o=[[]];e.gullet.future().text!=="{";)if(n=e.gullet.popToken(),n.text==="#"){if(e.gullet.future().text==="{"){s=e.gullet.future(),o[a].push("{");break}if(n=e.gullet.popToken(),!/^[1-9]$/.test(n.text))throw new le('Invalid argument number "'+n.text+'"');if(parseInt(n.text)!==a+1)throw new le('Argument number "'+n.text+'" out of order');a++,o.push([])}else{if(n.text==="EOF")throw new le("Expected a macro definition");o[a].push(n.text)}var{tokens:l}=e.gullet.consumeArg();return s&&l.unshift(s),(t==="\\edef"||t==="\\xdef")&&(l=e.gullet.expandTokens(l),l.reverse()),e.gullet.macros.set(r,{tokens:l,numArgs:a,delimiters:o},t===z0[t]),{type:"internal",mode:e.mode}}});ye({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=Iu(e.gullet.popToken());e.gullet.consumeSpaces();var r=pv(e);return Nu(e,n,r,t==="\\\\globallet"),{type:"internal",mode:e.mode}}});ye({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=Iu(e.gullet.popToken()),r=e.gullet.popToken(),a=e.gullet.popToken();return Nu(e,n,a,t==="\\\\globalfuture"),e.gullet.pushToken(a),e.gullet.pushToken(r),{type:"internal",mode:e.mode}}});var sa=function(e,t,n){var r=Ct.math[e]&&Ct.math[e].replace,a=ol(r||e,t,n);if(!a)throw new Error("Unsupported symbol "+e+" and font size "+t+".");return a},fl=function(e,t,n,r){var a=n.havingBaseStyle(t),s=oe(r.concat(a.sizingClasses(n)),[e],n),o=a.sizeMultiplier/n.sizeMultiplier;return s.height*=o,s.depth*=o,s.maxFontSize=a.sizeMultiplier,s},Uu=function(e,t,n){var r=t.havingBaseStyle(n),a=(1-t.sizeMultiplier/r.sizeMultiplier)*t.fontMetrics().axisHeight;e.classes.push("delimcenter"),e.style.top=ue(a),e.height-=a,e.depth+=a},mv=function(e,t,n,r,a,s){var o=nn(e,"Main-Regular",a,r),l=fl(o,t,r,s);return Uu(l,r,t),l},gv=function(e,t,n,r){return nn(e,"Size"+t+"-Regular",n,r)},Fu=function(e,t,n,r,a,s){var o=gv(e,t,a,r),l=fl(oe(["delimsizing","size"+t],[o],r),Xe.TEXT,r,s);return n&&Uu(l,r,Xe.TEXT),l},Ro=function(e,t,n){var r;t==="Size1-Regular"?r="delim-size1":r="delim-size4";var a=oe(["delimsizinginner",r],[oe([],[nn(e,t,n)])]);return{type:"elem",elem:a}},Co=function(e,t,n){var r=Wn["Size4-Regular"][e.charCodeAt(0)]?Wn["Size4-Regular"][e.charCodeAt(0)][4]:Wn["Size1-Regular"][e.charCodeAt(0)][4],a=new Fi("inner",E4(e,Math.round(1e3*t))),s=new di([a],{width:ue(r),height:ue(t),style:"width:"+ue(r),viewBox:"0 0 "+1e3*r+" "+Math.round(1e3*t),preserveAspectRatio:"xMinYMin"}),o=Oi([],[s],n);return o.height=t,o.style.height=ue(t),o.style.width=ue(r),{type:"elem",elem:o}},k0=.008,Qa={type:"kern",size:-1*k0},vv=new Set(["|","\\lvert","\\rvert","\\vert"]),xv=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),Ou=function(e,t,n,r,a,s){var o,l,c,h,u="",d=0;o=c=h=e,l=null;var m="Size1-Regular";e==="\\uparrow"?c=h="⏐":e==="\\Uparrow"?c=h="‖":e==="\\downarrow"?o=c="⏐":e==="\\Downarrow"?o=c="‖":e==="\\updownarrow"?(o="\\uparrow",c="⏐",h="\\downarrow"):e==="\\Updownarrow"?(o="\\Uparrow",c="‖",h="\\Downarrow"):vv.has(e)?(c="∣",u="vert",d=333):xv.has(e)?(c="∥",u="doublevert",d=556):e==="["||e==="\\lbrack"?(o="⎡",c="⎢",h="⎣",m="Size4-Regular",u="lbrack",d=667):e==="]"||e==="\\rbrack"?(o="⎤",c="⎥",h="⎦",m="Size4-Regular",u="rbrack",d=667):e==="\\lfloor"||e==="⌊"?(c=o="⎢",h="⎣",m="Size4-Regular",u="lfloor",d=667):e==="\\lceil"||e==="⌈"?(o="⎡",c=h="⎢",m="Size4-Regular",u="lceil",d=667):e==="\\rfloor"||e==="⌋"?(c=o="⎥",h="⎦",m="Size4-Regular",u="rfloor",d=667):e==="\\rceil"||e==="⌉"?(o="⎤",c=h="⎥",m="Size4-Regular",u="rceil",d=667):e==="("||e==="\\lparen"?(o="⎛",c="⎜",h="⎝",m="Size4-Regular",u="lparen",d=875):e===")"||e==="\\rparen"?(o="⎞",c="⎟",h="⎠",m="Size4-Regular",u="rparen",d=875):e==="\\{"||e==="\\lbrace"?(o="⎧",l="⎨",h="⎩",c="⎪",m="Size4-Regular"):e==="\\}"||e==="\\rbrace"?(o="⎫",l="⎬",h="⎭",c="⎪",m="Size4-Regular"):e==="\\lgroup"||e==="⟮"?(o="⎧",h="⎩",c="⎪",m="Size4-Regular"):e==="\\rgroup"||e==="⟯"?(o="⎫",h="⎭",c="⎪",m="Size4-Regular"):e==="\\lmoustache"||e==="⎰"?(o="⎧",h="⎭",c="⎪",m="Size4-Regular"):(e==="\\rmoustache"||e==="⎱")&&(o="⎫",h="⎩",c="⎪",m="Size4-Regular");var x=sa(o,m,a),_=x.height+x.depth,g=sa(c,m,a),p=g.height+g.depth,b=sa(h,m,a),w=b.height+b.depth,M=0,F=1;if(l!==null){var P=sa(l,m,a);M=P.height+P.depth,F=2}var C=_+w+M,I=Math.max(0,Math.ceil((t-C)/(F*p))),T=C+I*F*p,S=r.fontMetrics().axisHeight;n&&(S*=r.sizeMultiplier);var U=T/2-S,V=[];if(u.length>0){var W=T-_-w,X=Math.round(T*1e3),Z=T4(u,Math.round(W*1e3)),K=new Fi(u,Z),te=ue(d/1e3),Y=ue(X/1e3),pe=new di([K],{width:te,height:Y,viewBox:"0 0 "+d+" "+X}),se=Oi([],[pe],r);se.height=X/1e3,se.style.width=te,se.style.height=Y,V.push({type:"elem",elem:se})}else{if(V.push(Ro(h,m,a)),V.push(Qa),l===null){var xe=T-_-w+2*k0;V.push(Co(c,xe,r))}else{var Re=(T-_-w-M)/2+2*k0;V.push(Co(c,Re,r)),V.push(Qa),V.push(Ro(l,m,a)),V.push(Qa),V.push(Co(c,Re,r))}V.push(Qa),V.push(Ro(o,m,a))}var He=r.havingBaseStyle(Xe.TEXT),Q=ut({positionType:"bottom",positionData:U,children:V});return fl(oe(["delimsizing","mult"],[Q],He),Xe.TEXT,r,s)},Po=80,Do=.08,Lo=function(e,t,n,r,a){var s=w4(e,r,n),o=new Fi(e,s),l=new di([o],{width:"400em",height:ue(t),viewBox:"0 0 400000 "+n,preserveAspectRatio:"xMinYMin slice"});return Oi(["hide-tail"],[l],a)},_v=function(e,t){var n=t.havingBaseSizing(),r=Gu("\\surd",e*n.sizeMultiplier,Hu,n),a=n.sizeMultiplier,s=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),o,l,c,h,u;return r.type==="small"?(h=1e3+1e3*s+Po,e<1?a=1:e<1.4&&(a=.7),l=(1+s+Do)/a,c=(1+s)/a,o=Lo("sqrtMain",l,h,s,t),o.style.minWidth="0.853em",u=.833/a):r.type==="large"?(h=(1e3+Po)*oa[r.size],c=(oa[r.size]+s)/a,l=(oa[r.size]+s+Do)/a,o=Lo("sqrtSize"+r.size,l,h,s,t),o.style.minWidth="1.02em",u=1/a):(l=e+s+Do,c=e+s,h=Math.floor(1e3*e+s)+Po,o=Lo("sqrtTall",l,h,s,t),o.style.minWidth="0.742em",u=1.056),o.height=c,o.style.height=ue(l),{span:o,advanceWidth:u,ruleWidth:(t.fontMetrics().sqrtRuleThickness+s)*a}},Bu=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),yv=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),zu=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),oa=[0,1.2,1.8,2.4,3],ku=function(e,t,n,r,a){if(e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle"),Bu.has(e)||zu.has(e))return Fu(e,t,!1,n,r,a);if(yv.has(e))return Ou(e,oa[t],!1,n,r,a);throw new le("Illegal delimiter: '"+e+"'")},Mv=[{type:"small",style:Xe.SCRIPTSCRIPT},{type:"small",style:Xe.SCRIPT},{type:"small",style:Xe.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],bv=[{type:"small",style:Xe.SCRIPTSCRIPT},{type:"small",style:Xe.SCRIPT},{type:"small",style:Xe.TEXT},{type:"stack"}],Hu=[{type:"small",style:Xe.SCRIPTSCRIPT},{type:"small",style:Xe.SCRIPT},{type:"small",style:Xe.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],Sv=function(e){if(e.type==="small")return"Main-Regular";if(e.type==="large")return"Size"+e.size+"-Regular";if(e.type==="stack")return"Size4-Regular";var t=e.type;throw new Error("Add support for delim type '"+t+"' here.")},Gu=function(e,t,n,r){for(var a=Math.min(2,3-r.style.size),s=a;s<n.length;s++){var o=n[s];if(o.type==="stack")break;var l=sa(e,Sv(o),"math"),c=l.height+l.depth;if(o.type==="small"){var h=r.havingBaseStyle(o.style);c*=h.sizeMultiplier}if(c>t)return o}return n[n.length-1]},H0=function(e,t,n,r,a,s){e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle");var o;zu.has(e)?o=Mv:Bu.has(e)?o=Hu:o=bv;var l=Gu(e,t,o,r);return l.type==="small"?mv(e,l.style,n,r,a,s):l.type==="large"?Fu(e,l.size,n,r,a,s):Ou(e,t,n,r,a,s)},Io=function(e,t,n,r,a,s){var o=r.fontMetrics().axisHeight*r.sizeMultiplier,l=901,c=5/r.fontMetrics().ptPerEm,h=Math.max(t-o,n+o),u=Math.max(h/500*l,2*h-c);return H0(e,u,!0,r,a,s)},rh={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},wv=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function ah(i){return"isMiddle"in i}function Ns(i,e){var t=Ls(i);if(t&&wv.has(t.text))return t;throw t?new le("Invalid delimiter '"+t.text+"' after '"+e.funcName+"'",i):new le("Invalid delimiter type '"+i.type+"'",i)}ye({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(i,e)=>{var t=Ns(e[0],i);return{type:"delimsizing",mode:i.parser.mode,size:rh[i.funcName].size,mclass:rh[i.funcName].mclass,delim:t.text}},htmlBuilder:(i,e)=>i.delim==="."?oe([i.mclass]):ku(i.delim,i.size,e,i.mode,[i.mclass]),mathmlBuilder:i=>{var e=[];i.delim!=="."&&e.push(Pn(i.delim,i.mode));var t=new ce("mo",e);i.mclass==="mopen"||i.mclass==="mclose"?t.setAttribute("fence","true"):t.setAttribute("fence","false"),t.setAttribute("stretchy","true");var n=ue(oa[i.size]);return t.setAttribute("minsize",n),t.setAttribute("maxsize",n),t}});function sh(i){if(!i.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}ye({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=i.parser.gullet.macros.get("\\current@color");if(t&&typeof t!="string")throw new le("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:i.parser.mode,delim:Ns(e[0],i).text,color:t}}});ye({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=Ns(e[0],i),n=i.parser;++n.leftrightDepth;var r=n.parseExpression(!1);--n.leftrightDepth,n.expect("\\right",!1);var a=Qe(n.parseFunction(),"leftright-right");return{type:"leftright",mode:n.mode,body:r,left:t.text,right:a.delim,rightColor:a.color}},htmlBuilder:(i,e)=>{sh(i);for(var t=Xt(i.body,e,!0,["mopen","mclose"]),n=0,r=0,a=!1,s=0;s<t.length;s++){var o=t[s];ah(o)?a=!0:(n=Math.max(t[s].height,n),r=Math.max(t[s].depth,r))}n*=e.sizeMultiplier,r*=e.sizeMultiplier;var l;if(i.left==="."?l=ha(e,["mopen"]):l=Io(i.left,n,r,e,i.mode,["mopen"]),t.unshift(l),a)for(var c=1;c<t.length;c++){var h=t[c];if(ah(h)){var u=h.isMiddle;t[c]=Io(u.delim,n,r,u.options,i.mode,[])}}var d;if(i.right===".")d=ha(e,["mclose"]);else{var m=i.rightColor?e.withColor(i.rightColor):e;d=Io(i.right,n,r,m,i.mode,["mclose"])}return t.push(d),oe(["minner"],t,e)},mathmlBuilder:(i,e)=>{sh(i);var t=yn(i.body,e);if(i.left!=="."){var n=new ce("mo",[Pn(i.left,i.mode)]);n.setAttribute("fence","true"),t.unshift(n)}if(i.right!=="."){var r=new ce("mo",[Pn(i.right,i.mode)]);r.setAttribute("fence","true"),i.rightColor&&r.setAttribute("mathcolor",i.rightColor),t.push(r)}return hl(t)}});ye({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=Ns(e[0],i);if(!i.parser.leftrightDepth)throw new le("\\middle without preceding \\left",t);return{type:"middle",mode:i.parser.mode,delim:t.text}},htmlBuilder:(i,e)=>{var t;return i.delim==="."?t=ha(e,[]):(t=ku(i.delim,1,e,i.mode,[]),t.isMiddle={delim:i.delim,options:e}),t},mathmlBuilder:(i,e)=>{var t=i.delim==="\\vert"||i.delim==="|"?Pn("|","text"):Pn(i.delim,i.mode),n=new ce("mo",[t]);return n.setAttribute("fence","true"),n.setAttribute("lspace","0.05em"),n.setAttribute("rspace","0.05em"),n}});var Us=(i,e)=>{var t=Hr(dt(i.body,e),e),n=i.label.slice(1),r=e.sizeMultiplier,a,s,o=fi(i.body);if(n==="sout")a=oe(["stretchy","sout"]),a.height=e.fontMetrics().defaultRuleThickness/r,s=-.5*e.fontMetrics().xHeight;else if(n==="phase"){var l=Lt({number:.6,unit:"pt"},e),c=Lt({number:.35,unit:"ex"},e),h=e.havingBaseSizing();r=r/h.sizeMultiplier;var u=t.height+t.depth+l+c;t.style.paddingLeft=ue(u/2+l);var d=Math.floor(1e3*u*r),m=b4(d),x=new di([new Fi("phase",m)],{width:"400em",height:ue(d/1e3),viewBox:"0 0 400000 "+d,preserveAspectRatio:"xMinYMin slice"});a=Oi(["hide-tail"],[x],e),a.style.height=ue(u),s=t.depth+l+c}else{/cancel/.test(n)?o||t.classes.push("cancel-pad"):n==="angl"?t.classes.push("anglpad"):t.classes.push("boxpad");var _,g,p=0;/box/.test(n)?(p=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness),_=e.fontMetrics().fboxsep+(n==="colorbox"?0:p),g=_):n==="angl"?(p=Math.max(e.fontMetrics().defaultRuleThickness,e.minRuleThickness),_=4*p,g=Math.max(0,.25-t.depth)):(_=o?.2:0,g=_),a=av(t,n,_,g,e),/fbox|boxed|fcolorbox/.test(n)?(a.style.borderStyle="solid",a.style.borderWidth=ue(p)):n==="angl"&&p!==.049&&(a.style.borderTopWidth=ue(p),a.style.borderRightWidth=ue(p)),s=t.depth+g,i.backgroundColor&&(a.style.backgroundColor=i.backgroundColor,i.borderColor&&(a.style.borderColor=i.borderColor))}var b;if(i.backgroundColor)b=ut({positionType:"individualShift",children:[{type:"elem",elem:a,shift:s},{type:"elem",elem:t,shift:0}]});else{var w=/cancel|phase/.test(n)?["svg-align"]:[];b=ut({positionType:"individualShift",children:[{type:"elem",elem:t,shift:0},{type:"elem",elem:a,shift:s,wrapperClasses:w}]})}return/cancel/.test(n)&&(b.height=t.height,b.depth=t.depth),/cancel/.test(n)&&!o?oe(["mord","cancel-lap"],[b],e):oe(["mord"],[b],e)},Fs=(i,e)=>{var t,n=new ce(i.label.includes("colorbox")?"mpadded":"menclose",[_t(i.body,e)]);switch(i.label){case"\\cancel":n.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":n.setAttribute("notation","downdiagonalstrike");break;case"\\phase":n.setAttribute("notation","phasorangle");break;case"\\sout":n.setAttribute("notation","horizontalstrike");break;case"\\fbox":n.setAttribute("notation","box");break;case"\\angl":n.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(t=e.fontMetrics().fboxsep*e.fontMetrics().ptPerEm,n.setAttribute("width","+"+2*t+"pt"),n.setAttribute("height","+"+2*t+"pt"),n.setAttribute("lspace",t+"pt"),n.setAttribute("voffset",t+"pt"),i.label==="\\fcolorbox"){var r=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness);n.setAttribute("style","border: "+ue(r)+" solid "+i.borderColor)}break;case"\\xcancel":n.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return i.backgroundColor&&n.setAttribute("mathbackground",i.backgroundColor),n};ye({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","hbox"]},handler(i,e,t){var{parser:n,funcName:r}=i,a=Qe(e[0],"color-token").color,s=e[1];return{type:"enclose",mode:n.mode,label:r,backgroundColor:a,body:s}},htmlBuilder:Us,mathmlBuilder:Fs});ye({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","hbox"]},handler(i,e,t){var{parser:n,funcName:r}=i,a=Qe(e[0],"color-token").color,s=Qe(e[1],"color-token").color,o=e[2];return{type:"enclose",mode:n.mode,label:r,backgroundColor:s,borderColor:a,body:o}},htmlBuilder:Us,mathmlBuilder:Fs});ye({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"enclose",mode:t.mode,label:"\\fbox",body:e[0]}}});ye({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\phase"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"enclose",mode:t.mode,label:n,body:r}},htmlBuilder:Us,mathmlBuilder:Fs});ye({type:"enclose",names:["\\sout"],props:{numArgs:1,allowedInText:!0},handler(i,e){var{parser:t,funcName:n}=i;t.mode==="math"&&t.settings.reportNonstrict("mathVsSout","LaTeX's \\sout works only in text mode");var r=e[0];return{type:"enclose",mode:t.mode,label:n,body:r}},htmlBuilder:Us,mathmlBuilder:Fs});ye({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(i,e){var{parser:t}=i;return{type:"enclose",mode:t.mode,label:"\\angl",body:e[0]}}});var Vu={};function Xn(i){for(var{type:e,names:t,props:n,handler:r,htmlBuilder:a,mathmlBuilder:s}=i,o={type:e,numArgs:n.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:r},l=0;l<t.length;++l)Vu[t[l]]=o;a&&(vs[e]=a),s&&(xs[e]=s)}var Wu={};function A(i,e){Wu[i]=e}class dn{constructor(e,t,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=e,this.start=t,this.end=n}static range(e,t){return t?!e||!e.loc||!t.loc||e.loc.lexer!==t.loc.lexer?null:new dn(e.loc.lexer,e.loc.start,t.loc.end):e&&e.loc}}class vn{constructor(e,t){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=e,this.loc=t}range(e,t){return new vn(t,dn.range(this,e))}}function oh(i){var e=[];i.consumeSpaces();var t=i.fetch().text;for(t==="\\relax"&&(i.consume(),i.consumeSpaces(),t=i.fetch().text);t==="\\hline"||t==="\\hdashline";)i.consume(),e.push(t==="\\hdashline"),i.consumeSpaces(),t=i.fetch().text;return e}var Os=i=>{var e=i.parser.settings;if(!e.displayMode)throw new le("{"+i.envName+"} can be used only in display mode.")},Ev=new Set(["gather","gather*"]);function pl(i){if(!i.includes("ed"))return!i.includes("*")}function zi(i,e,t){var{hskipBeforeAndAfter:n,addJot:r,cols:a,arraystretch:s,colSeparationType:o,autoTag:l,singleRow:c,emptySingleRow:h,maxNumCols:u,leqno:d}=e;if(i.gullet.beginGroup(),c||i.gullet.macros.set("\\cr","\\\\\\relax"),!s){var m=i.gullet.expandMacroAsText("\\arraystretch");if(m==null)s=1;else if(s=parseFloat(m),!s||s<0)throw new le("Invalid \\arraystretch: "+m)}i.gullet.beginGroup();var x=[],_=[x],g=[],p=[],b=l!=null?[]:void 0;function w(){l&&i.gullet.macros.set("\\@eqnsw","1",!0)}function M(){b&&(i.gullet.macros.get("\\df@tag")?(b.push(i.subparse([new vn("\\df@tag")])),i.gullet.macros.set("\\df@tag",void 0,!0)):b.push(!!l&&i.gullet.macros.get("\\@eqnsw")==="1"))}for(w(),p.push(oh(i));;){var F=i.parseExpression(!1,c?"\\end":"\\\\");i.gullet.endGroup(),i.gullet.beginGroup();var P={type:"ordgroup",mode:i.mode,body:F};t&&(P={type:"styling",mode:i.mode,style:t,resetFont:!0,body:[P]}),x.push(P);var C=i.fetch().text;if(C==="&"){if(u&&x.length===u){if(c||o)throw new le("Too many tab characters: &",i.nextToken);i.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}i.consume()}else if(C==="\\end"){M(),x.length===1&&P.type==="styling"&&P.body.length===1&&P.body[0].type==="ordgroup"&&P.body[0].body.length===0&&(_.length>1||!h)&&_.pop(),p.length<_.length+1&&p.push([]);break}else if(C==="\\\\"){i.consume();var I=void 0;i.gullet.future().text!==" "&&(I=i.parseSizeGroup(!0)),g.push(I?I.value:null),M(),p.push(oh(i)),x=[],_.push(x),w()}else throw new le("Expected & or \\\\ or \\cr or \\end",i.nextToken)}return i.gullet.endGroup(),i.gullet.endGroup(),{type:"array",mode:i.mode,addJot:r,arraystretch:s,body:_,cols:a,rowGaps:g,hskipBeforeAndAfter:n,hLinesBeforeRow:p,colSeparationType:o,tags:b,leqno:d}}function ml(i){return i.slice(0,1)==="d"?"display":"text"}var Yn=function(e,t){var n,r,a=e.body.length,s=e.hLinesBeforeRow,o=0,l=new Array(a),c=[],h=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),u=1/t.fontMetrics().ptPerEm,d=5*u;if(e.colSeparationType&&e.colSeparationType==="small"){var m=t.havingStyle(Xe.SCRIPT).sizeMultiplier;d=.2778*(m/t.sizeMultiplier)}var x=e.colSeparationType==="CD"?Lt({number:3,unit:"ex"},t):12*u,_=3*u,g=e.arraystretch*x,p=.7*g,b=.3*g,w=0;function M(ge){for(var we=0;we<ge.length;++we)we>0&&(w+=.25),c.push({pos:w,isDashed:ge[we]})}for(M(s[0]),n=0;n<e.body.length;++n){var F=e.body[n],P=p,C=b;o<F.length&&(o=F.length);var I={cells:new Array(F.length),height:0,depth:0,pos:0};for(r=0;r<F.length;++r){var T=dt(F[r],t);C<T.depth&&(C=T.depth),P<T.height&&(P=T.height),I.cells[r]=T}var S=e.rowGaps[n],U=0;S&&(U=Lt(S,t),U>0&&(U+=b,C<U&&(C=U),U=0)),e.addJot&&n<e.body.length-1&&(C+=_),I.height=P,I.depth=C,w+=P,I.pos=w,w+=C+U,l[n]=I,M(s[n+1])}var V=w/2+t.fontMetrics().axisHeight,W=e.cols||[],X=[],Z,K,te=[];if(e.tags&&e.tags.some(ge=>ge))for(n=0;n<a;++n){var Y=l[n],pe=Y.pos-V,se=e.tags[n],xe=void 0;se===!0?xe=oe(["eqn-num"],[],t):se===!1?xe=oe([],[],t):xe=oe([],Xt(se,t,!0),t),xe.depth=Y.depth,xe.height=Y.height,te.push({type:"elem",elem:xe,shift:pe})}for(r=0,K=0;r<o||K<W.length;++r,++K){for(var Re,He=W[K],Q=!0;((he=He)==null?void 0:he.type)==="separator";){var he;if(Q||(Z=oe(["arraycolsep"],[]),Z.style.width=ue(t.fontMetrics().doubleRuleSep),X.push(Z)),He.separator==="|"||He.separator===":"){var Ae=He.separator==="|"?"solid":"dashed",me=oe(["vertical-separator"],[],t);me.style.height=ue(w),me.style.borderRightWidth=ue(h),me.style.borderRightStyle=Ae,me.style.margin="0 "+ue(-h/2);var Oe=w-V;Oe&&(me.style.verticalAlign=ue(-Oe)),X.push(me)}else throw new le("Invalid separator type: "+He.separator);K++,He=W[K],Q=!1}if(!(r>=o)){var Be=void 0;if(r>0||e.hskipBeforeAndAfter){var et,yt;Be=(et=(yt=He)==null?void 0:yt.pregap)!=null?et:d,Be!==0&&(Z=oe(["arraycolsep"],[]),Z.style.width=ue(Be),X.push(Z))}var rt=[];for(n=0;n<a;++n){var Mt=l[n],k=Mt.cells[r];if(k){var ln=Mt.pos-V;k.depth=Mt.depth,k.height=Mt.height,rt.push({type:"elem",elem:k,shift:ln})}}var at=ut({positionType:"individualShift",children:rt}),st=oe(["col-align-"+(((Re=He)==null?void 0:Re.align)||"c")],[at]);if(X.push(st),r<o-1||e.hskipBeforeAndAfter){var ze,gt;Be=(ze=(gt=He)==null?void 0:gt.postgap)!=null?ze:d,Be!==0&&(Z=oe(["arraycolsep"],[]),Z.style.width=ue(Be),X.push(Z))}}}var Fe=oe(["mtable"],X);if(c.length>0){for(var D=kr("hline",t,h),E=kr("hdashline",t,h),q=[{type:"elem",elem:Fe,shift:0}];c.length>0;){var ne=c.pop(),ae=ne.pos-V;ne.isDashed?q.push({type:"elem",elem:E,shift:ae}):q.push({type:"elem",elem:D,shift:ae})}Fe=ut({positionType:"individualShift",children:q})}if(te.length===0)return oe(["mord"],[Fe],t);var ee=ut({positionType:"individualShift",children:te}),De=oe(["tag"],[ee],t);return mi([Fe,De])},Tv={c:"center ",l:"left ",r:"right "},jn=function(e,t){for(var n=[],r=new ce("mtd",[],["mtr-glue"]),a=new ce("mtd",[],["mml-eqn-num"]),s=0;s<e.body.length;s++){for(var o=e.body[s],l=[],c=0;c<o.length;c++)l.push(new ce("mtd",[_t(o[c],t)]));e.tags&&e.tags[s]&&(l.unshift(r),l.push(r),e.leqno?l.unshift(a):l.push(a)),n.push(new ce("mtr",l))}var h=new ce("mtable",n),u=e.arraystretch===.5?.1:.16+e.arraystretch-1+(e.addJot?.09:0);h.setAttribute("rowspacing",ue(u));var d="",m="";if(e.cols&&e.cols.length>0){var x=e.cols,_="",g=!1,p=0,b=x.length;x[0].type==="separator"&&(d+="top ",p=1),x[x.length-1].type==="separator"&&(d+="bottom ",b-=1);for(var w=p;w<b;w++){var M=x[w];M.type==="align"?(m+=Tv[M.align],g&&(_+="none "),g=!0):M.type==="separator"&&g&&(_+=M.separator==="|"?"solid ":"dashed ",g=!1)}h.setAttribute("columnalign",m.trim()),/[sd]/.test(_)&&h.setAttribute("columnlines",_.trim())}if(e.colSeparationType==="align"){for(var F=e.cols||[],P="",C=1;C<F.length;C++)P+=C%2?"0em ":"1em ";h.setAttribute("columnspacing",P.trim())}else e.colSeparationType==="alignat"||e.colSeparationType==="gather"?h.setAttribute("columnspacing","0em"):e.colSeparationType==="small"?h.setAttribute("columnspacing","0.2778em"):e.colSeparationType==="CD"?h.setAttribute("columnspacing","0.5em"):h.setAttribute("columnspacing","1em");var I="",T=e.hLinesBeforeRow;d+=T[0].length>0?"left ":"",d+=T[T.length-1].length>0?"right ":"";for(var S=1;S<T.length-1;S++)I+=T[S].length===0?"none ":T[S][0]?"dashed ":"solid ";return/[sd]/.test(I)&&h.setAttribute("rowlines",I.trim()),d!==""&&(h=new ce("menclose",[h]),h.setAttribute("notation",d.trim())),e.arraystretch&&e.arraystretch<1&&(h=new ce("mstyle",[h]),h.setAttribute("scriptlevel","1")),h},qu=function(e,t){e.envName.includes("ed")||Os(e);var n=[],r=e.envName.includes("at")?"alignat":"align",a=e.envName==="split",s=zi(e.parser,{cols:n,addJot:!0,autoTag:a?void 0:pl(e.envName),emptySingleRow:!0,colSeparationType:r,maxNumCols:a?2:void 0,leqno:e.parser.settings.leqno},"display"),o=0,l=0,c={type:"ordgroup",mode:e.mode,body:[]};if(t[0]&&t[0].type==="ordgroup"){for(var h="",u=0;u<t[0].body.length;u++){var d=Qe(t[0].body[u],"textord");h+=d.text}o=Number(h),l=o*2}var m=!l;s.body.forEach(function(p){for(var b=1;b<p.length;b+=2){var w=Qe(p[b],"styling"),M=Qe(w.body[0],"ordgroup");M.body.unshift(c)}if(m)l<p.length&&(l=p.length);else{var F=p.length/2;if(o<F)throw new le("Too many math in a row: "+("expected "+o+", but got "+F),p[0])}});for(var x=0;x<l;++x){var _="r",g=0;x%2===1?_="l":x>0&&m&&(g=1),n[x]={type:"align",align:_,pregap:g,postgap:0}}return s.colSeparationType=m?"align":"alignat",s};Xn({type:"array",names:["array","darray"],props:{numArgs:1},handler(i,e){var t=Ls(e[0]),n=t?[e[0]]:Qe(e[0],"ordgroup").body,r=n.map(function(s){var o=Ds(s),l=o.text;if("lcr".includes(l))return{type:"align",align:l};if(l==="|")return{type:"separator",separator:"|"};if(l===":")return{type:"separator",separator:":"};throw new le("Unknown column alignment: "+l,s)}),a={cols:r,hskipBeforeAndAfter:!0,maxNumCols:r.length};return zi(i.parser,a,ml(i.envName))},htmlBuilder:Yn,mathmlBuilder:jn});Xn({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(i){var e={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[i.envName.replace("*","")],t="c",n={hskipBeforeAndAfter:!1,cols:[{type:"align",align:t}]};if(i.envName.charAt(i.envName.length-1)==="*"){var r=i.parser;if(r.consumeSpaces(),r.fetch().text==="["){if(r.consume(),r.consumeSpaces(),t=r.fetch().text,!"lcr".includes(t))throw new le("Expected l or c or r",r.nextToken);r.consume(),r.consumeSpaces(),r.expect("]"),r.consume(),n.cols=[{type:"align",align:t}]}}var a=zi(i.parser,n,ml(i.envName)),s=Math.max(0,...a.body.map(o=>o.length));return a.cols=new Array(s).fill({type:"align",align:t}),e?{type:"leftright",mode:i.mode,body:[a],left:e[0],right:e[1],rightColor:void 0}:a},htmlBuilder:Yn,mathmlBuilder:jn});Xn({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(i){var e={arraystretch:.5},t=zi(i.parser,e,"script");return t.colSeparationType="small",t},htmlBuilder:Yn,mathmlBuilder:jn});Xn({type:"array",names:["subarray"],props:{numArgs:1},handler(i,e){var t=Ls(e[0]),n=t?[e[0]]:Qe(e[0],"ordgroup").body,r=n.map(function(o){var l=Ds(o),c=l.text;if("lc".includes(c))return{type:"align",align:c};throw new le("Unknown column alignment: "+c,o)});if(r.length>1)throw new le("{subarray} can contain only one column");var a={cols:r,hskipBeforeAndAfter:!1,arraystretch:.5},s=zi(i.parser,a,"script");if(s.body.length>0&&s.body[0].length>1)throw new le("{subarray} can contain only one column");return s},htmlBuilder:Yn,mathmlBuilder:jn});Xn({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(i){var e={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},t=zi(i.parser,e,ml(i.envName));return{type:"leftright",mode:i.mode,body:[t],left:i.envName.includes("r")?".":"\\{",right:i.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:Yn,mathmlBuilder:jn});Xn({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:qu,htmlBuilder:Yn,mathmlBuilder:jn});Xn({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(i){Ev.has(i.envName)&&Os(i);var e={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:pl(i.envName),emptySingleRow:!0,leqno:i.parser.settings.leqno};return zi(i.parser,e,"display")},htmlBuilder:Yn,mathmlBuilder:jn});Xn({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:qu,htmlBuilder:Yn,mathmlBuilder:jn});Xn({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(i){Os(i);var e={autoTag:pl(i.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:i.parser.settings.leqno};return zi(i.parser,e,"display")},htmlBuilder:Yn,mathmlBuilder:jn});Xn({type:"array",names:["CD"],props:{numArgs:0},handler(i){return Os(i),fv(i.parser)},htmlBuilder:Yn,mathmlBuilder:jn});A("\\nonumber","\\gdef\\@eqnsw{0}");A("\\notag","\\nonumber");ye({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(i,e){throw new le(i.funcName+" valid only within array environment")}});var lh=Vu;ye({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];if(r.type!=="ordgroup")throw new le("Invalid environment name",r);for(var a="",s=0;s<r.body.length;++s)a+=Qe(r.body[s],"textord").text;if(n==="\\begin"){if(!lh.hasOwnProperty(a))throw new le("No such environment: "+a,r);var o=lh[a],{args:l,optArgs:c}=t.parseArguments("\\begin{"+a+"}",o),h={mode:t.mode,envName:a,parser:t},u=o.handler(h,l,c);t.expect("\\end",!1);var d=t.nextToken,m=Qe(t.parseFunction(),"environment");if(m.name!==a)throw new le("Mismatch: \\begin{"+a+"} matched by \\end{"+m.name+"}",d);return u}return{type:"environment",mode:t.mode,name:a,nameGroup:r}}});var Xu=(i,e)=>{var t=i.font,n=e.withFont(t);return dt(i.body,n)},Yu=(i,e)=>{var t=i.font,n=e.withFont(t);return _t(i.body,n)},ch={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"};ye({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=_s(e[0]),a=n;return a in ch&&(a=ch[a]),{type:"font",mode:t.mode,font:a.slice(1),body:r}},htmlBuilder:Xu,mathmlBuilder:Yu});ye({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"mclass",mode:t.mode,mclass:Is(n),body:[{type:"font",mode:t.mode,font:"boldsymbol",body:n}],isCharacterBox:fi(n)}}});ye({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n,breakOnTokenText:r}=i,{mode:a}=t,s=t.parseExpression(!0,r);return{type:"font",mode:a,font:"math"+n.slice(1),body:{type:"ordgroup",mode:t.mode,body:s}}},htmlBuilder:Xu,mathmlBuilder:Yu});var Av=(i,e)=>{var t=e.style,n=t.fracNum(),r=t.fracDen(),a;a=e.havingStyle(n);var s=dt(i.numer,a,e);if(i.continued){var o=8.5/e.fontMetrics().ptPerEm,l=3.5/e.fontMetrics().ptPerEm;s.height=s.height<o?o:s.height,s.depth=s.depth<l?l:s.depth}a=e.havingStyle(r);var c=dt(i.denom,a,e),h,u,d;i.hasBarLine?(i.barSize?(u=Lt(i.barSize,e),h=kr("frac-line",e,u)):h=kr("frac-line",e),u=h.height,d=h.height):(h=null,u=0,d=e.fontMetrics().defaultRuleThickness);var m,x,_;t.size===Xe.DISPLAY.size?(m=e.fontMetrics().num1,u>0?x=3*d:x=7*d,_=e.fontMetrics().denom1):(u>0?(m=e.fontMetrics().num2,x=d):(m=e.fontMetrics().num3,x=3*d),_=e.fontMetrics().denom2);var g;if(h){var b=e.fontMetrics().axisHeight;m-s.depth-(b+.5*u)<x&&(m+=x-(m-s.depth-(b+.5*u))),b-.5*u-(c.height-_)<x&&(_+=x-(b-.5*u-(c.height-_)));var w=-(b-.5*u);g=ut({positionType:"individualShift",children:[{type:"elem",elem:c,shift:_},{type:"elem",elem:h,shift:w},{type:"elem",elem:s,shift:-m}]})}else{var p=m-s.depth-(c.height-_);p<x&&(m+=.5*(x-p),_+=.5*(x-p)),g=ut({positionType:"individualShift",children:[{type:"elem",elem:c,shift:_},{type:"elem",elem:s,shift:-m}]})}a=e.havingStyle(t),g.height*=a.sizeMultiplier/e.sizeMultiplier,g.depth*=a.sizeMultiplier/e.sizeMultiplier;var M;t.size===Xe.DISPLAY.size?M=e.fontMetrics().delim1:t.size===Xe.SCRIPTSCRIPT.size?M=e.havingStyle(Xe.SCRIPT).fontMetrics().delim2:M=e.fontMetrics().delim2;var F,P;return i.leftDelim==null?F=ha(e,["mopen"]):F=H0(i.leftDelim,M,!0,e.havingStyle(t),i.mode,["mopen"]),i.continued?P=oe([]):i.rightDelim==null?P=ha(e,["mclose"]):P=H0(i.rightDelim,M,!0,e.havingStyle(t),i.mode,["mclose"]),oe(["mord"].concat(a.sizingClasses(e)),[F,oe(["mfrac"],[g]),P],e)},Rv=(i,e)=>{var t=new ce("mfrac",[_t(i.numer,e),_t(i.denom,e)]);if(!i.hasBarLine)t.setAttribute("linethickness","0px");else if(i.barSize){var n=Lt(i.barSize,e);t.setAttribute("linethickness",ue(n))}if(i.leftDelim!=null||i.rightDelim!=null){var r=[];if(i.leftDelim!=null){var a=new ce("mo",[new Bt(i.leftDelim.replace("\\",""))]);a.setAttribute("fence","true"),r.push(a)}if(r.push(t),i.rightDelim!=null){var s=new ce("mo",[new Bt(i.rightDelim.replace("\\",""))]);s.setAttribute("fence","true"),r.push(s)}return hl(r)}return t},ju=(i,e)=>{if(!e)return i;var t={type:"styling",mode:i.mode,style:e,body:[i]};return t};ye({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0],a=e[1],s,o=null,l=null;switch(n){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":s=!0;break;case"\\\\atopfrac":s=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":s=!1,o="(",l=")";break;case"\\\\bracefrac":s=!1,o="\\{",l="\\}";break;case"\\\\brackfrac":s=!1,o="[",l="]";break;default:throw new Error("Unrecognized genfrac command")}var c=n==="\\cfrac",h=null;return c||n.startsWith("\\d")?h="display":n.startsWith("\\t")&&(h="text"),ju({type:"genfrac",mode:t.mode,numer:r,denom:a,continued:c,hasBarLine:s,leftDelim:o,rightDelim:l,barSize:null},h)},htmlBuilder:Av,mathmlBuilder:Rv});ye({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(i){var{parser:e,funcName:t,token:n}=i,r;switch(t){case"\\over":r="\\frac";break;case"\\choose":r="\\binom";break;case"\\atop":r="\\\\atopfrac";break;case"\\brace":r="\\\\bracefrac";break;case"\\brack":r="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:e.mode,replaceWith:r,token:n}}});var hh=["display","text","script","scriptscript"],uh=function(e){var t=null;return e.length>0&&(t=e,t=t==="."?null:t),t};ye({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(i,e){var{parser:t}=i,n=e[4],r=e[5],a=_s(e[0]),s=a.type==="atom"&&a.family==="open"?uh(a.text):null,o=_s(e[1]),l=o.type==="atom"&&o.family==="close"?uh(o.text):null,c=Qe(e[2],"size"),h,u=null;c.isBlank?h=!0:(u=c.value,h=u.number>0);var d=null,m=e[3];if(m.type==="ordgroup"){if(m.body.length>0){var x=Qe(m.body[0],"textord");d=hh[Number(x.text)]}}else m=Qe(m,"textord"),d=hh[Number(m.text)];return ju({type:"genfrac",mode:t.mode,numer:n,denom:r,continued:!1,hasBarLine:h,barSize:u,leftDelim:s,rightDelim:l},d)}});ye({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(i,e){var{parser:t,funcName:n,token:r}=i;return{type:"infix",mode:t.mode,replaceWith:"\\\\abovefrac",size:Qe(e[0],"size").value,token:r}}});ye({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0],a=Qe(e[1],"infix").size;if(!a)throw new Error("\\\\abovefrac expected size, but got "+String(a));var s=e[2],o=a.number>0;return{type:"genfrac",mode:t.mode,numer:r,denom:s,continued:!1,hasBarLine:o,barSize:a,leftDelim:null,rightDelim:null}}});var $u=(i,e)=>{var t=e.style,n,r;i.type==="supsub"?(n=i.sup?dt(i.sup,e.havingStyle(t.sup()),e):dt(i.sub,e.havingStyle(t.sub()),e),r=Qe(i.base,"horizBrace")):r=Qe(i,"horizBrace");var a=dt(r.base,e.havingBaseStyle(Xe.DISPLAY)),s=Ps(r,e),o;if(r.isOver?o=ut({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:.1},{type:"elem",elem:s,wrapperClasses:["svg-align"]}]}):o=ut({positionType:"bottom",positionData:a.depth+.1+s.height,children:[{type:"elem",elem:s,wrapperClasses:["svg-align"]},{type:"kern",size:.1},{type:"elem",elem:a}]}),n){var l=oe(["minner",r.isOver?"mover":"munder"],[o],e);r.isOver?o=ut({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.2},{type:"elem",elem:n}]}):o=ut({positionType:"bottom",positionData:l.depth+.2+n.height+n.depth,children:[{type:"elem",elem:n},{type:"kern",size:.2},{type:"elem",elem:l}]})}return oe(["minner",r.isOver?"mover":"munder"],[o],e)},Cv=(i,e)=>{var t=Cs(i.label);return new ce(i.isOver?"mover":"munder",[_t(i.base,e),t])};ye({type:"horizBrace",names:["\\overbrace","\\underbrace","\\overbracket","\\underbracket"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i;return{type:"horizBrace",mode:t.mode,label:n,isOver:n.includes("\\over"),base:e[0]}},htmlBuilder:$u,mathmlBuilder:Cv});ye({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[1],r=Qe(e[0],"url").url;return t.settings.isTrusted({command:"\\href",url:r})?{type:"href",mode:t.mode,href:r,body:Ot(n)}:t.formatUnsupportedCmd("\\href")},htmlBuilder:(i,e)=>{var t=Xt(i.body,e,!1);return G4(i.href,[],t,e)},mathmlBuilder:(i,e)=>{var t=Bi(i.body,e);return t instanceof ce||(t=new ce("mrow",[t])),t.setAttribute("href",i.href),t}});ye({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=Qe(e[0],"url").url;if(!t.settings.isTrusted({command:"\\url",url:n}))return t.formatUnsupportedCmd("\\url");for(var r=[],a=0;a<n.length;a++){var s=n[a];s==="~"&&(s="\\textasciitilde"),r.push({type:"textord",mode:"text",text:s})}var o={type:"text",mode:t.mode,font:"\\texttt",body:r};return{type:"href",mode:t.mode,href:n,body:Ot(o)}}});ye({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(i,e){var{parser:t}=i;return{type:"hbox",mode:t.mode,body:Ot(e[0])}},htmlBuilder(i,e){var t=Xt(i.body,e.withFont(""),!1);return mi(t)},mathmlBuilder(i,e){return new ce("mrow",yn(i.body,e.withFont("")))}});ye({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n,token:r}=i,a=Qe(e[0],"raw").string,s=e[1];t.settings.strict&&t.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var o,l={};switch(n){case"\\htmlClass":l.class=a,o={command:"\\htmlClass",class:a};break;case"\\htmlId":l.id=a,o={command:"\\htmlId",id:a};break;case"\\htmlStyle":l.style=a,o={command:"\\htmlStyle",style:a};break;case"\\htmlData":{for(var c=a.split(","),h=0;h<c.length;h++){var u=c[h],d=u.indexOf("=");if(d<0)throw new le("\\htmlData key/value '"+u+"' missing equals sign");var m=u.slice(0,d),x=u.slice(d+1);l["data-"+m.trim()]=x}o={command:"\\htmlData",attributes:l};break}default:throw new Error("Unrecognized html command")}return t.settings.isTrusted(o)?{type:"html",mode:t.mode,attributes:l,body:Ot(s)}:t.formatUnsupportedCmd(n)},htmlBuilder:(i,e)=>{var t=Xt(i.body,e,!1),n=["enclosing"];i.attributes.class&&n.push(...i.attributes.class.trim().split(/\s+/));var r=oe(n,t,e);for(var a in i.attributes)a!=="class"&&i.attributes.hasOwnProperty(a)&&r.setAttribute(a,i.attributes[a]);return r},mathmlBuilder:(i,e)=>Bi(i.body,e)});ye({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i;return{type:"htmlmathml",mode:t.mode,html:Ot(e[0]),mathml:Ot(e[1])}},htmlBuilder:(i,e)=>{var t=Xt(i.html,e,!1);return mi(t)},mathmlBuilder:(i,e)=>Bi(i.mathml,e)});var No=function(e){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))return{number:+e,unit:"bp"};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);if(!t)throw new le("Invalid size: '"+e+"' in \\includegraphics");var n={number:+(t[1]+t[2]),unit:t[3]};if(!du(n))throw new le("Invalid unit: '"+n.unit+"' in \\includegraphics.");return n};ye({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(i,e,t)=>{var{parser:n}=i,r={number:0,unit:"em"},a={number:.9,unit:"em"},s={number:0,unit:"em"},o="";if(t[0])for(var l=Qe(t[0],"raw").string,c=l.split(","),h=0;h<c.length;h++){var u=c[h].split("=");if(u.length===2){var d=u[1].trim();switch(u[0].trim()){case"alt":o=d;break;case"width":r=No(d);break;case"height":a=No(d);break;case"totalheight":s=No(d);break;default:throw new le("Invalid key: '"+u[0]+"' in \\includegraphics.")}}}var m=Qe(e[0],"url").url;return o===""&&(o=m,o=o.replace(/^.*[\\/]/,""),o=o.substring(0,o.lastIndexOf("."))),n.settings.isTrusted({command:"\\includegraphics",url:m})?{type:"includegraphics",mode:n.mode,alt:o,width:r,height:a,totalheight:s,src:m}:n.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(i,e)=>{var t=Lt(i.height,e),n=0;i.totalheight.number>0&&(n=Lt(i.totalheight,e)-t);var r=0;i.width.number>0&&(r=Lt(i.width,e));var a={height:ue(t+n)};r>0&&(a.width=ue(r)),n>0&&(a.verticalAlign=ue(-n));var s=new P4(i.src,i.alt,a);return s.height=t,s.depth=n,s},mathmlBuilder:(i,e)=>{var t=new ce("mglyph",[]);t.setAttribute("alt",i.alt);var n=Lt(i.height,e),r=0;if(i.totalheight.number>0&&(r=Lt(i.totalheight,e)-n,t.setAttribute("valign",ue(-r))),t.setAttribute("height",ue(n+r)),i.width.number>0){var a=Lt(i.width,e);t.setAttribute("width",ue(a))}return t.setAttribute("src",i.src),t}});ye({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(i,e){var{parser:t,funcName:n}=i,r=Qe(e[0],"size");if(t.settings.strict){var a=n[1]==="m",s=r.value.unit==="mu";a?(s||t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" supports only mu units, "+("not "+r.value.unit+" units")),t.mode!=="math"&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" works only in math mode")):s&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" doesn't support mu units")}return{type:"kern",mode:t.mode,dimension:r.value}},htmlBuilder(i,e){return xu(i.dimension,e)},mathmlBuilder(i,e){var t=Lt(i.dimension,e);return new wu(t)}});ye({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"lap",mode:t.mode,alignment:n.slice(5),body:r}},htmlBuilder:(i,e)=>{var t;i.alignment==="clap"?(t=oe([],[dt(i.body,e)]),t=oe(["inner"],[t],e)):t=oe(["inner"],[dt(i.body,e)]);var n=oe(["fix"],[]),r=oe([i.alignment],[t,n],e),a=oe(["strut"]);return a.style.height=ue(r.height+r.depth),r.depth&&(a.style.verticalAlign=ue(-r.depth)),r.children.unshift(a),r=oe(["thinbox"],[r],e),oe(["mord","vbox"],[r],e)},mathmlBuilder:(i,e)=>{var t=new ce("mpadded",[_t(i.body,e)]);if(i.alignment!=="rlap"){var n=i.alignment==="llap"?"-1":"-0.5";t.setAttribute("lspace",n+"width")}return t.setAttribute("width","0px"),t}});ye({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(i,e){var{funcName:t,parser:n}=i,r=n.mode;n.switchMode("math");var a=t==="\\("?"\\)":"$",s=n.parseExpression(!1,a);return n.expect(a),n.switchMode(r),{type:"styling",mode:n.mode,style:"text",resetFont:!0,body:s}}});ye({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(i,e){throw new le("Mismatched "+i.funcName)}});var dh=(i,e)=>{switch(e.style.size){case Xe.DISPLAY.size:return i.display;case Xe.TEXT.size:return i.text;case Xe.SCRIPT.size:return i.script;case Xe.SCRIPTSCRIPT.size:return i.scriptscript;default:return i.text}};ye({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(i,e)=>{var{parser:t}=i;return{type:"mathchoice",mode:t.mode,display:Ot(e[0]),text:Ot(e[1]),script:Ot(e[2]),scriptscript:Ot(e[3])}},htmlBuilder:(i,e)=>{var t=dh(i,e),n=Xt(t,e,!1);return mi(n)},mathmlBuilder:(i,e)=>{var t=dh(i,e);return Bi(t,e)}});var Zu=(i,e,t,n,r,a,s)=>{i=oe([],[i]);var o=t&&fi(t),l,c;if(e){var h=dt(e,n.havingStyle(r.sup()),n);c={elem:h,kern:Math.max(n.fontMetrics().bigOpSpacing1,n.fontMetrics().bigOpSpacing3-h.depth)}}if(t){var u=dt(t,n.havingStyle(r.sub()),n);l={elem:u,kern:Math.max(n.fontMetrics().bigOpSpacing2,n.fontMetrics().bigOpSpacing4-u.height)}}var d;if(c&&l){var m=n.fontMetrics().bigOpSpacing5+l.elem.height+l.elem.depth+l.kern+i.depth+s;d=ut({positionType:"bottom",positionData:m,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:ue(-a)},{type:"kern",size:l.kern},{type:"elem",elem:i},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:ue(a)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else if(l){var x=i.height-s;d=ut({positionType:"top",positionData:x,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:ue(-a)},{type:"kern",size:l.kern},{type:"elem",elem:i}]})}else if(c){var _=i.depth+s;d=ut({positionType:"bottom",positionData:_,children:[{type:"elem",elem:i},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:ue(a)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else return i;var g=[d];if(l&&a!==0&&!o){var p=oe(["mspace"],[],n);p.style.marginRight=ue(a),g.unshift(p)}return oe(["mop","op-limits"],g,n)},Ku=new Set(["\\smallint"]),Yr=(i,e)=>{var t,n,r=!1,a;i.type==="supsub"?(t=i.sup,n=i.sub,a=Qe(i.base,"op"),r=!0):a=Qe(i,"op");var s=e.style,o=!1;s.size===Xe.DISPLAY.size&&a.symbol&&!Ku.has(a.name)&&(o=!0);var l,c;if(a.symbol){var h=o?"Size2-Regular":"Size1-Regular",u="";if((a.name==="\\oiint"||a.name==="\\oiiint")&&(u=a.name.slice(1),a.name=u==="oiint"?"\\iint":"\\iiint"),l=nn(a.name,h,"math",e,["mop","op-symbol",o?"large-op":"small-op"]),c=l.italic,u.length>0){var d=yu(u+"Size"+(o?"2":"1"),e);l=ut({positionType:"individualShift",children:[{type:"elem",elem:l,shift:0},{type:"elem",elem:d,shift:o?.08:0}]}),a.name="\\"+u,l.classes.unshift("mop"),l.italic=c}}else if(a.body){var m=Xt(a.body,e,!0);m.length===1&&m[0]instanceof xn?(l=m[0],l.classes[0]="mop"):l=oe(["mop"],m,e)}else{for(var x=[],_=1;_<a.name.length;_++)x.push(ll(a.name[_],a.mode,e));l=oe(["mop"],x,e)}var g=0,p=0;if((l instanceof xn||a.name==="\\oiint"||a.name==="\\oiiint")&&!a.suppressBaseShift){var b;g=(l.height-l.depth)/2-e.fontMetrics().axisHeight,p=(b=l.italic)!=null?b:0}return r?Zu(l,t,n,e,s,p,g):(g&&(l.style.position="relative",l.style.top=ue(g)),l)},ga=(i,e)=>{var t;if(i.symbol)t=new ce("mo",[Pn(i.name,i.mode)]),Ku.has(i.name)&&t.setAttribute("largeop","false");else if(i.body)t=new ce("mo",yn(i.body,e));else{t=new ce("mi",[new Bt(i.name.slice(1))]);var n=new ce("mo",[Pn("⁡","text")]);i.parentIsSupSub?t=new ce("mrow",[t,n]):t=Su([t,n])}return t},Pv={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};ye({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=n;return r.length===1&&(r=Pv[r]),{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:Yr,mathmlBuilder:ga});ye({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Ot(n)}},htmlBuilder:Yr,mathmlBuilder:ga});var Dv={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};ye({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(i){var{parser:e,funcName:t}=i;return{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:Yr,mathmlBuilder:ga});ye({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(i){var{parser:e,funcName:t}=i;return{type:"op",mode:e.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:Yr,mathmlBuilder:ga});ye({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(i){var{parser:e,funcName:t}=i,n=t;return n.length===1&&(n=Dv[n]),{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:n}},htmlBuilder:Yr,mathmlBuilder:ga});var Ju=(i,e)=>{var t,n,r=!1,a;i.type==="supsub"?(t=i.sup,n=i.sub,a=Qe(i.base,"operatorname"),r=!0):a=Qe(i,"operatorname");var s;if(a.body.length>0){for(var o=a.body.map(u=>{var d="text"in u?u.text:void 0;return typeof d=="string"?{type:"textord",mode:u.mode,text:d}:u}),l=Xt(o,e.withFont("mathrm"),!0),c=0;c<l.length;c++){var h=l[c];h instanceof xn&&(h.text=h.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}s=oe(["mop"],l,e)}else s=oe(["mop"],[],e);return r?Zu(s,t,n,e,e.style,0,0):s},Lv=(i,e)=>{for(var t=yn(i.body,e.withFont("mathrm")),n=!0,r=0;r<t.length;r++){var a=t[r];if(!(a instanceof wu))if(a instanceof ce)switch(a.type){case"mi":case"mn":case"mspace":case"mtext":break;case"mo":{var s=a.children[0];a.children.length===1&&s instanceof Bt?s.text=s.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):n=!1;break}default:n=!1}else n=!1}if(n){var o=t.map(h=>h.toText()).join("");t=[new Bt(o)]}var l=new ce("mi",t);l.setAttribute("mathvariant","normal");var c=new ce("mo",[Pn("⁡","text")]);return i.parentIsSupSub?new ce("mrow",[l,c]):Su([l,c])};ye({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"operatorname",mode:t.mode,body:Ot(r),alwaysHandleSupSub:n==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Ju,mathmlBuilder:Lv});A("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");sr({type:"ordgroup",htmlBuilder(i,e){return i.semisimple?mi(Xt(i.body,e,!1)):oe(["mord"],Xt(i.body,e,!0),e)},mathmlBuilder(i,e){return Bi(i.body,e,!0)}});ye({type:"overline",names:["\\overline"],props:{numArgs:1},handler(i,e){var{parser:t}=i,n=e[0];return{type:"overline",mode:t.mode,body:n}},htmlBuilder(i,e){var t=dt(i.body,e.havingCrampedStyle()),n=kr("overline-line",e),r=e.fontMetrics().defaultRuleThickness,a=ut({positionType:"firstBaseline",children:[{type:"elem",elem:t},{type:"kern",size:3*r},{type:"elem",elem:n},{type:"kern",size:r}]});return oe(["mord","overline"],[a],e)},mathmlBuilder(i,e){var t=new ce("mo",[new Bt("‾")]);t.setAttribute("stretchy","true");var n=new ce("mover",[_t(i.body,e),t]);return n.setAttribute("accent","true"),n}});ye({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"phantom",mode:t.mode,body:Ot(n)}},htmlBuilder:(i,e)=>{var t=Xt(i.body,e.withPhantom(),!1);return mi(t)},mathmlBuilder:(i,e)=>{var t=yn(i.body,e);return new ce("mphantom",t)}});A("\\hphantom","\\smash{\\phantom{#1}}");ye({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"vphantom",mode:t.mode,body:n}},htmlBuilder:(i,e)=>{var t=oe(["inner"],[dt(i.body,e.withPhantom())]),n=oe(["fix"],[]);return oe(["mord","rlap"],[t,n],e)},mathmlBuilder:(i,e)=>{var t=yn(Ot(i.body),e),n=new ce("mphantom",t),r=new ce("mpadded",[n]);return r.setAttribute("width","0px"),r}});ye({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(i,e){var{parser:t}=i,n=Qe(e[0],"size").value,r=e[1];return{type:"raisebox",mode:t.mode,dy:n,body:r}},htmlBuilder(i,e){var t=dt(i.body,e),n=Lt(i.dy,e);return ut({positionType:"shift",positionData:-n,children:[{type:"elem",elem:t}]})},mathmlBuilder(i,e){var t=new ce("mpadded",[_t(i.body,e)]),n=i.dy.number+i.dy.unit;return t.setAttribute("voffset",n),t}});ye({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(i){var{parser:e}=i;return{type:"internal",mode:e.mode}}});ye({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(i,e,t){var{parser:n}=i,r=t[0],a=Qe(e[0],"size"),s=Qe(e[1],"size");return{type:"rule",mode:n.mode,shift:r&&Qe(r,"size").value,width:a.value,height:s.value}},htmlBuilder(i,e){var t=oe(["mord","rule"],[],e),n=Lt(i.width,e),r=Lt(i.height,e),a=i.shift?Lt(i.shift,e):0;return t.style.borderRightWidth=ue(n),t.style.borderTopWidth=ue(r),t.style.bottom=ue(a),t.width=n,t.height=r+a,t.depth=-a,t.maxFontSize=r*1.125*e.sizeMultiplier,t},mathmlBuilder(i,e){var t=Lt(i.width,e),n=Lt(i.height,e),r=i.shift?Lt(i.shift,e):0,a=e.color&&e.getColor()||"black",s=new ce("mspace");s.setAttribute("mathbackground",a),s.setAttribute("width",ue(t)),s.setAttribute("height",ue(n));var o=new ce("mpadded",[s]);return r>=0?o.setAttribute("height",ue(r)):(o.setAttribute("height",ue(r)),o.setAttribute("depth",ue(-r))),o.setAttribute("voffset",ue(r)),o}});function Qu(i,e,t){for(var n=Xt(i,e,!1),r=e.sizeMultiplier/t.sizeMultiplier,a=0;a<n.length;a++){var s=n[a].classes.indexOf("sizing");s<0?Array.prototype.push.apply(n[a].classes,e.sizingClasses(t)):n[a].classes[s+1]==="reset-size"+e.size&&(n[a].classes[s+1]="reset-size"+t.size),n[a].height*=r,n[a].depth*=r}return mi(n)}var fh=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],Iv=(i,e)=>{var t=e.havingSize(i.size);return Qu(i.body,t,e)};ye({type:"sizing",names:fh,props:{numArgs:0,allowedInText:!0},handler:(i,e)=>{var{breakOnTokenText:t,funcName:n,parser:r}=i,a=r.parseExpression(!1,t);return{type:"sizing",mode:r.mode,size:fh.indexOf(n)+1,body:a}},htmlBuilder:Iv,mathmlBuilder:(i,e)=>{var t=e.havingSize(i.size),n=yn(i.body,t),r=new ce("mstyle",n);return r.setAttribute("mathsize",ue(t.sizeMultiplier)),r}});ye({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(i,e,t)=>{var{parser:n}=i,r=!1,a=!1,s=t[0]&&Qe(t[0],"ordgroup");if(s)for(var o,l=0;l<s.body.length;++l){var c=s.body[l];if(o=Ds(c).text,o==="t")r=!0;else if(o==="b")a=!0;else{r=!1,a=!1;break}}else r=!0,a=!0;var h=e[0];return{type:"smash",mode:n.mode,body:h,smashHeight:r,smashDepth:a}},htmlBuilder:(i,e)=>{var t=oe([],[dt(i.body,e)]);if(!i.smashHeight&&!i.smashDepth)return t;if(i.smashHeight&&(t.height=0),i.smashDepth&&(t.depth=0),i.smashHeight&&i.smashDepth)return oe(["mord","smash"],[t],e);if(t.children)for(var n=0;n<t.children.length;n++)i.smashHeight&&(t.children[n].height=0),i.smashDepth&&(t.children[n].depth=0);var r=ut({positionType:"firstBaseline",children:[{type:"elem",elem:t}]});return oe(["mord"],[r],e)},mathmlBuilder:(i,e)=>{var t=new ce("mpadded",[_t(i.body,e)]);return i.smashHeight&&t.setAttribute("height","0px"),i.smashDepth&&t.setAttribute("depth","0px"),t}});ye({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(i,e,t){var{parser:n}=i,r=t[0],a=e[0];return{type:"sqrt",mode:n.mode,body:a,index:r}},htmlBuilder(i,e){var t=dt(i.body,e.havingCrampedStyle());t.height===0&&(t.height=e.fontMetrics().xHeight),t=Hr(t,e);var n=e.fontMetrics(),r=n.defaultRuleThickness,a=r;e.style.id<Xe.TEXT.id&&(a=e.fontMetrics().xHeight);var s=r+a/4,o=t.height+t.depth+s+r,{span:l,ruleWidth:c,advanceWidth:h}=_v(o,e),u=l.height-c;u>t.height+t.depth+s&&(s=(s+u-t.height-t.depth)/2);var d=l.height-t.height-s-c;t.style.paddingLeft=ue(h);var m=ut({positionType:"firstBaseline",children:[{type:"elem",elem:t,wrapperClasses:["svg-align"]},{type:"kern",size:-(t.height+d)},{type:"elem",elem:l},{type:"kern",size:c}]});if(i.index){var x=e.havingStyle(Xe.SCRIPTSCRIPT),_=dt(i.index,x,e),g=.6*(m.height-m.depth),p=ut({positionType:"shift",positionData:-g,children:[{type:"elem",elem:_}]}),b=oe(["root"],[p]);return oe(["mord","sqrt"],[b,m],e)}else return oe(["mord","sqrt"],[m],e)},mathmlBuilder(i,e){var{body:t,index:n}=i;return n?new ce("mroot",[_t(t,e),_t(n,e)]):new ce("msqrt",[_t(t,e)])}});var G0={display:Xe.DISPLAY,text:Xe.TEXT,script:Xe.SCRIPT,scriptscript:Xe.SCRIPTSCRIPT};function Nv(i){return i in G0}ye({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i,e){var{breakOnTokenText:t,funcName:n,parser:r}=i,a=r.parseExpression(!0,t),s=n.slice(1,n.length-5);if(!Nv(s))throw new Error("Unknown style: "+s);return{type:"styling",mode:r.mode,style:s,body:a}},htmlBuilder(i,e){var t=G0[i.style],n=e.havingStyle(t);return i.resetFont&&(n=n.withFont("")),Qu(i.body,n,e)},mathmlBuilder(i,e){var t=G0[i.style],n=e.havingStyle(t);i.resetFont&&(n=n.withFont(""));var r=yn(i.body,n),a=new ce("mstyle",r),s={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},o=s[i.style];return a.setAttribute("scriptlevel",o[0]),a.setAttribute("displaystyle",o[1]),a}});var Uv=function(e,t){var n=e.base;if(n)if(n.type==="op"){var r=n.limits&&(t.style.size===Xe.DISPLAY.size||n.alwaysHandleSupSub);return r?Yr:null}else if(n.type==="operatorname"){var a=n.alwaysHandleSupSub&&(t.style.size===Xe.DISPLAY.size||n.limits);return a?Ju:null}else{if(n.type==="accent")return fi(n.base)?dl:null;if(n.type==="horizBrace"){var s=!e.sub;return s===n.isOver?$u:null}else return null}else return null};sr({type:"supsub",htmlBuilder(i,e){var t=Uv(i,e);if(t)return t(i,e);var{base:n,sup:r,sub:a}=i,s=dt(n,e),o,l,c=e.fontMetrics(),h=0,u=0,d=n&&fi(n);if(r){var m=e.havingStyle(e.style.sup());o=dt(r,m,e),d||(h=s.height-m.fontMetrics().supDrop*m.sizeMultiplier/e.sizeMultiplier)}if(a){var x=e.havingStyle(e.style.sub());l=dt(a,x,e),d||(u=s.depth+x.fontMetrics().subDrop*x.sizeMultiplier/e.sizeMultiplier)}var _;e.style===Xe.DISPLAY?_=c.sup1:e.style.cramped?_=c.sup3:_=c.sup2;var g=e.sizeMultiplier,p=ue(.5/c.ptPerEm/g),b=null;if(l){var w=i.base&&i.base.type==="op"&&i.base.name&&(i.base.name==="\\oiint"||i.base.name==="\\oiiint");if(s instanceof xn||w){var M;b=ue(-((M=s.italic)!=null?M:0))}}var F;if(o&&l){h=Math.max(h,_,o.depth+.25*c.xHeight),u=Math.max(u,c.sub2);var P=c.defaultRuleThickness,C=4*P;if(h-o.depth-(l.height-u)<C){u=C-(h-o.depth)+l.height;var I=.8*c.xHeight-(h-o.depth);I>0&&(h+=I,u-=I)}var T=[{type:"elem",elem:l,shift:u,marginRight:p,marginLeft:b},{type:"elem",elem:o,shift:-h,marginRight:p}];F=ut({positionType:"individualShift",children:T})}else if(l){u=Math.max(u,c.sub1,l.height-.8*c.xHeight);var S=[{type:"elem",elem:l,marginLeft:b,marginRight:p}];F=ut({positionType:"shift",positionData:u,children:S})}else if(o)h=Math.max(h,_,o.depth+.25*c.xHeight),F=ut({positionType:"shift",positionData:-h,children:[{type:"elem",elem:o,marginRight:p}]});else throw new Error("supsub must have either sup or sub.");var U=O0(s,"right")||"mord";return oe([U],[s,oe(["msupsub"],[F])],e)},mathmlBuilder(i,e){var t=!1,n,r;i.base&&i.base.type==="horizBrace"&&(r=!!i.sup,r===i.base.isOver&&(t=!0,n=i.base.isOver)),i.base&&(i.base.type==="op"||i.base.type==="operatorname")&&(i.base.parentIsSupSub=!0);var a=[_t(i.base,e)];i.sub&&a.push(_t(i.sub,e)),i.sup&&a.push(_t(i.sup,e));var s;if(t)s=n?"mover":"munder";else if(i.sub)if(i.sup){var c=i.base;c&&c.type==="op"&&c.limits&&e.style===Xe.DISPLAY||c&&c.type==="operatorname"&&c.alwaysHandleSupSub&&(e.style===Xe.DISPLAY||c.limits)?s="munderover":s="msubsup"}else{var l=i.base;l&&l.type==="op"&&l.limits&&(e.style===Xe.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||e.style===Xe.DISPLAY)?s="munder":s="msub"}else{var o=i.base;o&&o.type==="op"&&o.limits&&(e.style===Xe.DISPLAY||o.alwaysHandleSupSub)||o&&o.type==="operatorname"&&o.alwaysHandleSupSub&&(o.limits||e.style===Xe.DISPLAY)?s="mover":s="msup"}return new ce(s,a)}});sr({type:"atom",htmlBuilder(i,e){return ll(i.text,i.mode,e,["m"+i.family])},mathmlBuilder(i,e){var t=new ce("mo",[Pn(i.text,i.mode)]);if(i.family==="bin"){var n=ul(i,e);n==="bold-italic"&&t.setAttribute("mathvariant",n)}else i.family==="punct"?t.setAttribute("separator","true"):(i.family==="open"||i.family==="close")&&t.setAttribute("stretchy","false");return t}});var ed={mi:"italic",mn:"normal",mtext:"normal"};sr({type:"mathord",htmlBuilder(i,e){return Rs(i,e,"mathord")},mathmlBuilder(i,e){var t=new ce("mi",[Pn(i.text,i.mode,e)]),n=ul(i,e)||"italic";return n!==ed[t.type]&&t.setAttribute("mathvariant",n),t}});sr({type:"textord",htmlBuilder(i,e){return Rs(i,e,"textord")},mathmlBuilder(i,e){var t=Pn(i.text,i.mode,e),n=ul(i,e)||"normal",r;return i.mode==="text"?r=new ce("mtext",[t]):/[0-9]/.test(i.text)?r=new ce("mn",[t]):i.text==="\\prime"?r=new ce("mo",[t]):r=new ce("mi",[t]),n!==ed[r.type]&&r.setAttribute("mathvariant",n),r}});var Uo={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Fo={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};sr({type:"spacing",htmlBuilder(i,e){if(Fo.hasOwnProperty(i.text)){var t=Fo[i.text].className||"";if(i.mode==="text"){var n=Rs(i,e,"textord");return n.classes.push(t),n}else return oe(["mspace",t],[ll(i.text,i.mode,e)],e)}else{if(Uo.hasOwnProperty(i.text))return oe(["mspace",Uo[i.text]],[],e);throw new le('Unknown type of space "'+i.text+'"')}},mathmlBuilder(i,e){var t;if(Fo.hasOwnProperty(i.text))t=new ce("mtext",[new Bt(" ")]);else{if(Uo.hasOwnProperty(i.text))return new ce("mspace");throw new le('Unknown type of space "'+i.text+'"')}return t}});var ph=()=>{var i=new ce("mtd",[]);return i.setAttribute("width","50%"),i};sr({type:"tag",mathmlBuilder(i,e){var t=new ce("mtable",[new ce("mtr",[ph(),new ce("mtd",[Bi(i.body,e)]),ph(),new ce("mtd",[Bi(i.tag,e)])])]);return t.setAttribute("width","100%"),t}});var mh={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},gh={"\\textbf":"textbf","\\textmd":"textmd"},Fv={"\\textit":"textit","\\textup":"textup"},vh=(i,e)=>{var t=i.font;if(t){if(mh[t])return e.withTextFontFamily(mh[t]);if(gh[t])return e.withTextFontWeight(gh[t]);if(t==="\\emph")return e.fontShape==="textit"?e.withTextFontShape("textup"):e.withTextFontShape("textit")}else return e;return e.withTextFontShape(Fv[t])};ye({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"text",mode:t.mode,body:Ot(r),font:n}},htmlBuilder(i,e){var t=vh(i,e),n=Xt(i.body,t,!0);return oe(["mord","text"],n,t)},mathmlBuilder(i,e){var t=vh(i,e);return Bi(i.body,t)}});ye({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"underline",mode:t.mode,body:e[0]}},htmlBuilder(i,e){var t=dt(i.body,e),n=kr("underline-line",e),r=e.fontMetrics().defaultRuleThickness,a=ut({positionType:"top",positionData:t.height,children:[{type:"kern",size:r},{type:"elem",elem:n},{type:"kern",size:3*r},{type:"elem",elem:t}]});return oe(["mord","underline"],[a],e)},mathmlBuilder(i,e){var t=new ce("mo",[new Bt("‾")]);t.setAttribute("stretchy","true");var n=new ce("munder",[_t(i.body,e),t]);return n.setAttribute("accentunder","true"),n}});ye({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(i,e){var{parser:t}=i;return{type:"vcenter",mode:t.mode,body:e[0]}},htmlBuilder(i,e){var t=dt(i.body,e),n=e.fontMetrics().axisHeight,r=.5*(t.height-n-(t.depth+n));return ut({positionType:"shift",positionData:r,children:[{type:"elem",elem:t}]})},mathmlBuilder(i,e){var t=new ce("mpadded",[_t(i.body,e)],["vcenter"]);return new ce("mrow",[t])}});ye({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(i,e,t){throw new le("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(i,e){for(var t=xh(i),n=[],r=e.havingStyle(e.style.text()),a=0;a<t.length;a++){var s=t[a];s==="~"&&(s="\\textasciitilde"),n.push(nn(s,"Typewriter-Regular",i.mode,r,["mord","texttt"]))}return oe(["mord","text"].concat(r.sizingClasses(e)),vu(n),r)},mathmlBuilder(i,e){var t=new Bt(xh(i)),n=new ce("mtext",[t]);return n.setAttribute("mathvariant","monospace"),n}});var xh=i=>i.body.replace(/ /g,i.star?"␣":" "),Pi=Mu,td=`[ \r
	]`,Ov="\\\\[a-zA-Z@]+",Bv="\\\\[^\uD800-\uDFFF]",zv="("+Ov+")"+td+"*",kv=`\\\\(
|[ \r	]+
?)[ \r	]*`,V0="[̀-ͯ]",Hv=new RegExp(V0+"+$"),Gv="("+td+"+)|"+(kv+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(V0+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(V0+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+zv)+("|"+Bv+")");class _h{constructor(e,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=e,this.settings=t,this.tokenRegex=new RegExp(Gv,"g"),this.catcodes={"%":14,"~":13}}setCatcode(e,t){this.catcodes[e]=t}lex(){var e=this.input,t=this.tokenRegex.lastIndex;if(t===e.length)return new vn("EOF",new dn(this,t,t));var n=this.tokenRegex.exec(e);if(n===null||n.index!==t)throw new le("Unexpected character: '"+e[t]+"'",new vn(e[t],new dn(this,t,t+1)));var r=n[6]||n[3]||(n[2]?"\\ ":" ");if(this.catcodes[r]===14){var a=e.indexOf(`
`,this.tokenRegex.lastIndex);return a===-1?(this.tokenRegex.lastIndex=e.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=a+1,this.lex()}return new vn(r,new dn(this,t,this.tokenRegex.lastIndex))}}class Vv{constructor(e,t){e===void 0&&(e={}),t===void 0&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=e,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new le("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var e=this.undefStack.pop();for(var t in e)e.hasOwnProperty(t)&&(e[t]==null?delete this.current[t]:this.current[t]=e[t])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(e){return this.current.hasOwnProperty(e)||this.builtins.hasOwnProperty(e)}get(e){return this.current.hasOwnProperty(e)?this.current[e]:this.builtins[e]}set(e,t,n){if(n===void 0&&(n=!1),n){for(var r=0;r<this.undefStack.length;r++)delete this.undefStack[r][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=t)}else{var a=this.undefStack[this.undefStack.length-1];a&&!a.hasOwnProperty(e)&&(a[e]=this.current[e])}t==null?delete this.current[e]:this.current[e]=t}}var Wv=Wu;A("\\noexpand",function(i){var e=i.popToken();return i.isExpandable(e.text)&&(e.noexpand=!0,e.treatAsRelax=!0),{tokens:[e],numArgs:0}});A("\\expandafter",function(i){var e=i.popToken();return i.expandOnce(!0),{tokens:[e],numArgs:0}});A("\\@firstoftwo",function(i){var e=i.consumeArgs(2);return{tokens:e[0],numArgs:0}});A("\\@secondoftwo",function(i){var e=i.consumeArgs(2);return{tokens:e[1],numArgs:0}});A("\\@ifnextchar",function(i){var e=i.consumeArgs(3);i.consumeSpaces();var t=i.future();return e[0].length===1&&e[0][0].text===t.text?{tokens:e[1],numArgs:0}:{tokens:e[2],numArgs:0}});A("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");A("\\TextOrMath",function(i){var e=i.consumeArgs(2);return i.mode==="text"?{tokens:e[0],numArgs:0}:{tokens:e[1],numArgs:0}});var yh={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};A("\\char",function(i){var e=i.popToken(),t,n=0;if(e.text==="'")t=8,e=i.popToken();else if(e.text==='"')t=16,e=i.popToken();else if(e.text==="`")if(e=i.popToken(),e.text[0]==="\\")n=e.text.charCodeAt(1);else{if(e.text==="EOF")throw new le("\\char` missing argument");n=e.text.charCodeAt(0)}else t=10;if(t){if(n=yh[e.text],n==null||n>=t)throw new le("Invalid base-"+t+" digit "+e.text);for(var r;(r=yh[i.future().text])!=null&&r<t;)n*=t,n+=r,i.popToken()}return"\\@char{"+n+"}"});var gl=(i,e,t,n)=>{var r=i.consumeArg().tokens;if(r.length!==1)throw new le("\\newcommand's first argument must be a macro name");var a=r[0].text,s=i.isDefined(a);if(s&&!e)throw new le("\\newcommand{"+a+"} attempting to redefine "+(a+"; use \\renewcommand"));if(!s&&!t)throw new le("\\renewcommand{"+a+"} when command "+a+" does not yet exist; use \\newcommand");var o=0;if(r=i.consumeArg().tokens,r.length===1&&r[0].text==="["){for(var l="",c=i.expandNextToken();c.text!=="]"&&c.text!=="EOF";)l+=c.text,c=i.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new le("Invalid number of arguments: "+l);o=parseInt(l),r=i.consumeArg().tokens}return s&&n||i.macros.set(a,{tokens:r,numArgs:o}),""};A("\\newcommand",i=>gl(i,!1,!0,!1));A("\\renewcommand",i=>gl(i,!0,!1,!1));A("\\providecommand",i=>gl(i,!0,!0,!0));A("\\message",i=>{var e=i.consumeArgs(1)[0];return console.log(e.reverse().map(t=>t.text).join("")),""});A("\\errmessage",i=>{var e=i.consumeArgs(1)[0];return console.error(e.reverse().map(t=>t.text).join("")),""});A("\\show",i=>{var e=i.popToken(),t=e.text;return console.log(e,i.macros.get(t),Pi[t],Ct.math[t],Ct.text[t]),""});A("\\bgroup","{");A("\\egroup","}");A("~","\\nobreakspace");A("\\lq","`");A("\\rq","'");A("\\aa","\\r a");A("\\AA","\\r A");A("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");A("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");A("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");A("ℬ","\\mathscr{B}");A("ℰ","\\mathscr{E}");A("ℱ","\\mathscr{F}");A("ℋ","\\mathscr{H}");A("ℐ","\\mathscr{I}");A("ℒ","\\mathscr{L}");A("ℳ","\\mathscr{M}");A("ℛ","\\mathscr{R}");A("ℭ","\\mathfrak{C}");A("ℌ","\\mathfrak{H}");A("ℨ","\\mathfrak{Z}");A("\\Bbbk","\\Bbb{k}");A("\\llap","\\mathllap{\\textrm{#1}}");A("\\rlap","\\mathrlap{\\textrm{#1}}");A("\\clap","\\mathclap{\\textrm{#1}}");A("\\mathstrut","\\vphantom{(}");A("\\underbar","\\underline{\\text{#1}}");A("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');A("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");A("\\ne","\\neq");A("≠","\\neq");A("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");A("∉","\\notin");A("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");A("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");A("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");A("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");A("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");A("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");A("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");A("⟂","\\perp");A("‼","\\mathclose{!\\mkern-0.8mu!}");A("∌","\\notni");A("⌜","\\ulcorner");A("⌝","\\urcorner");A("⌞","\\llcorner");A("⌟","\\lrcorner");A("©","\\copyright");A("®","\\textregistered");A("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');A("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');A("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');A("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');A("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");A("⋮","\\vdots");A("\\varGamma","\\mathit{\\Gamma}");A("\\varDelta","\\mathit{\\Delta}");A("\\varTheta","\\mathit{\\Theta}");A("\\varLambda","\\mathit{\\Lambda}");A("\\varXi","\\mathit{\\Xi}");A("\\varPi","\\mathit{\\Pi}");A("\\varSigma","\\mathit{\\Sigma}");A("\\varUpsilon","\\mathit{\\Upsilon}");A("\\varPhi","\\mathit{\\Phi}");A("\\varPsi","\\mathit{\\Psi}");A("\\varOmega","\\mathit{\\Omega}");A("\\substack","\\begin{subarray}{c}#1\\end{subarray}");A("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");A("\\boxed","\\fbox{$\\displaystyle{#1}$}");A("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");A("\\implies","\\DOTSB\\;\\Longrightarrow\\;");A("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");A("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");A("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var Mh={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},qv=new Set(["bin","rel"]);A("\\dots",function(i){var e="\\dotso",t=i.expandAfterFuture().text;return t in Mh?e=Mh[t]:(t.slice(0,4)==="\\not"||t in Ct.math&&qv.has(Ct.math[t].group))&&(e="\\dotsb"),e});var vl={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};A("\\dotso",function(i){var e=i.future().text;return e in vl?"\\ldots\\,":"\\ldots"});A("\\dotsc",function(i){var e=i.future().text;return e in vl&&e!==","?"\\ldots\\,":"\\ldots"});A("\\cdots",function(i){var e=i.future().text;return e in vl?"\\@cdots\\,":"\\@cdots"});A("\\dotsb","\\cdots");A("\\dotsm","\\cdots");A("\\dotsi","\\!\\cdots");A("\\dotsx","\\ldots\\,");A("\\DOTSI","\\relax");A("\\DOTSB","\\relax");A("\\DOTSX","\\relax");A("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");A("\\,","\\tmspace+{3mu}{.1667em}");A("\\thinspace","\\,");A("\\>","\\mskip{4mu}");A("\\:","\\tmspace+{4mu}{.2222em}");A("\\medspace","\\:");A("\\;","\\tmspace+{5mu}{.2777em}");A("\\thickspace","\\;");A("\\!","\\tmspace-{3mu}{.1667em}");A("\\negthinspace","\\!");A("\\negmedspace","\\tmspace-{4mu}{.2222em}");A("\\negthickspace","\\tmspace-{5mu}{.277em}");A("\\enspace","\\kern.5em ");A("\\enskip","\\hskip.5em\\relax");A("\\quad","\\hskip1em\\relax");A("\\qquad","\\hskip2em\\relax");A("\\tag","\\@ifstar\\tag@literal\\tag@paren");A("\\tag@paren","\\tag@literal{({#1})}");A("\\tag@literal",i=>{if(i.macros.get("\\df@tag"))throw new le("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});A("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");A("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");A("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");A("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");A("\\newline","\\\\\\relax");A("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var nd=ue(Wn["Main-Regular"][84][1]-.7*Wn["Main-Regular"][65][1]);A("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+nd+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");A("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+nd+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");A("\\hspace","\\@ifstar\\@hspacer\\@hspace");A("\\@hspace","\\hskip #1\\relax");A("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");A("\\ordinarycolon",":");A("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");A("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');A("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');A("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');A("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');A("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');A("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');A("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');A("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');A("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');A("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');A("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');A("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');A("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');A("∷","\\dblcolon");A("∹","\\eqcolon");A("≔","\\coloneqq");A("≕","\\eqqcolon");A("⩴","\\Coloneqq");A("\\ratio","\\vcentcolon");A("\\coloncolon","\\dblcolon");A("\\colonequals","\\coloneqq");A("\\coloncolonequals","\\Coloneqq");A("\\equalscolon","\\eqqcolon");A("\\equalscoloncolon","\\Eqqcolon");A("\\colonminus","\\coloneq");A("\\coloncolonminus","\\Coloneq");A("\\minuscolon","\\eqcolon");A("\\minuscoloncolon","\\Eqcolon");A("\\coloncolonapprox","\\Colonapprox");A("\\coloncolonsim","\\Colonsim");A("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");A("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");A("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");A("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");A("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");A("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");A("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");A("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");A("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");A("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");A("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");A("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");A("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");A("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");A("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");A("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");A("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");A("\\nleqq","\\html@mathml{\\@nleqq}{≰}");A("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");A("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");A("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");A("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");A("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");A("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");A("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");A("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");A("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");A("\\imath","\\html@mathml{\\@imath}{ı}");A("\\jmath","\\html@mathml{\\@jmath}{ȷ}");A("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");A("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");A("⟦","\\llbracket");A("⟧","\\rrbracket");A("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");A("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");A("⦃","\\lBrace");A("⦄","\\rBrace");A("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");A("⦵","\\minuso");A("\\darr","\\downarrow");A("\\dArr","\\Downarrow");A("\\Darr","\\Downarrow");A("\\lang","\\langle");A("\\rang","\\rangle");A("\\uarr","\\uparrow");A("\\uArr","\\Uparrow");A("\\Uarr","\\Uparrow");A("\\N","\\mathbb{N}");A("\\R","\\mathbb{R}");A("\\Z","\\mathbb{Z}");A("\\alef","\\aleph");A("\\alefsym","\\aleph");A("\\Alpha","\\mathrm{A}");A("\\Beta","\\mathrm{B}");A("\\bull","\\bullet");A("\\Chi","\\mathrm{X}");A("\\clubs","\\clubsuit");A("\\cnums","\\mathbb{C}");A("\\Complex","\\mathbb{C}");A("\\Dagger","\\ddagger");A("\\diamonds","\\diamondsuit");A("\\empty","\\emptyset");A("\\Epsilon","\\mathrm{E}");A("\\Eta","\\mathrm{H}");A("\\exist","\\exists");A("\\harr","\\leftrightarrow");A("\\hArr","\\Leftrightarrow");A("\\Harr","\\Leftrightarrow");A("\\hearts","\\heartsuit");A("\\image","\\Im");A("\\infin","\\infty");A("\\Iota","\\mathrm{I}");A("\\isin","\\in");A("\\Kappa","\\mathrm{K}");A("\\larr","\\leftarrow");A("\\lArr","\\Leftarrow");A("\\Larr","\\Leftarrow");A("\\lrarr","\\leftrightarrow");A("\\lrArr","\\Leftrightarrow");A("\\Lrarr","\\Leftrightarrow");A("\\Mu","\\mathrm{M}");A("\\natnums","\\mathbb{N}");A("\\Nu","\\mathrm{N}");A("\\Omicron","\\mathrm{O}");A("\\plusmn","\\pm");A("\\rarr","\\rightarrow");A("\\rArr","\\Rightarrow");A("\\Rarr","\\Rightarrow");A("\\real","\\Re");A("\\reals","\\mathbb{R}");A("\\Reals","\\mathbb{R}");A("\\Rho","\\mathrm{P}");A("\\sdot","\\cdot");A("\\sect","\\S");A("\\spades","\\spadesuit");A("\\sub","\\subset");A("\\sube","\\subseteq");A("\\supe","\\supseteq");A("\\Tau","\\mathrm{T}");A("\\thetasym","\\vartheta");A("\\weierp","\\wp");A("\\Zeta","\\mathrm{Z}");A("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");A("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");A("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");A("\\bra","\\mathinner{\\langle{#1}|}");A("\\ket","\\mathinner{|{#1}\\rangle}");A("\\braket","\\mathinner{\\langle{#1}\\rangle}");A("\\Bra","\\left\\langle#1\\right|");A("\\Ket","\\left|#1\\right\\rangle");var id=i=>e=>{var t=e.consumeArg().tokens,n=e.consumeArg().tokens,r=e.consumeArg().tokens,a=e.consumeArg().tokens,s=e.macros.get("|"),o=e.macros.get("\\|");e.macros.beginGroup();var l=u=>d=>{i&&(d.macros.set("|",s),r.length&&d.macros.set("\\|",o));var m=u;if(!u&&r.length){var x=d.future();x.text==="|"&&(d.popToken(),m=!0)}return{tokens:m?r:n,numArgs:0}};e.macros.set("|",l(!1)),r.length&&e.macros.set("\\|",l(!0));var c=e.consumeArg().tokens,h=e.expandTokens([...a,...c,...t]);return e.macros.endGroup(),{tokens:h.reverse(),numArgs:0}};A("\\bra@ket",id(!1));A("\\bra@set",id(!0));A("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");A("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");A("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");A("\\angln","{\\angl n}");A("\\blue","\\textcolor{##6495ed}{#1}");A("\\orange","\\textcolor{##ffa500}{#1}");A("\\pink","\\textcolor{##ff00af}{#1}");A("\\red","\\textcolor{##df0030}{#1}");A("\\green","\\textcolor{##28ae7b}{#1}");A("\\gray","\\textcolor{gray}{#1}");A("\\purple","\\textcolor{##9d38bd}{#1}");A("\\blueA","\\textcolor{##ccfaff}{#1}");A("\\blueB","\\textcolor{##80f6ff}{#1}");A("\\blueC","\\textcolor{##63d9ea}{#1}");A("\\blueD","\\textcolor{##11accd}{#1}");A("\\blueE","\\textcolor{##0c7f99}{#1}");A("\\tealA","\\textcolor{##94fff5}{#1}");A("\\tealB","\\textcolor{##26edd5}{#1}");A("\\tealC","\\textcolor{##01d1c1}{#1}");A("\\tealD","\\textcolor{##01a995}{#1}");A("\\tealE","\\textcolor{##208170}{#1}");A("\\greenA","\\textcolor{##b6ffb0}{#1}");A("\\greenB","\\textcolor{##8af281}{#1}");A("\\greenC","\\textcolor{##74cf70}{#1}");A("\\greenD","\\textcolor{##1fab54}{#1}");A("\\greenE","\\textcolor{##0d923f}{#1}");A("\\goldA","\\textcolor{##ffd0a9}{#1}");A("\\goldB","\\textcolor{##ffbb71}{#1}");A("\\goldC","\\textcolor{##ff9c39}{#1}");A("\\goldD","\\textcolor{##e07d10}{#1}");A("\\goldE","\\textcolor{##a75a05}{#1}");A("\\redA","\\textcolor{##fca9a9}{#1}");A("\\redB","\\textcolor{##ff8482}{#1}");A("\\redC","\\textcolor{##f9685d}{#1}");A("\\redD","\\textcolor{##e84d39}{#1}");A("\\redE","\\textcolor{##bc2612}{#1}");A("\\maroonA","\\textcolor{##ffbde0}{#1}");A("\\maroonB","\\textcolor{##ff92c6}{#1}");A("\\maroonC","\\textcolor{##ed5fa6}{#1}");A("\\maroonD","\\textcolor{##ca337c}{#1}");A("\\maroonE","\\textcolor{##9e034e}{#1}");A("\\purpleA","\\textcolor{##ddd7ff}{#1}");A("\\purpleB","\\textcolor{##c6b9fc}{#1}");A("\\purpleC","\\textcolor{##aa87ff}{#1}");A("\\purpleD","\\textcolor{##7854ab}{#1}");A("\\purpleE","\\textcolor{##543b78}{#1}");A("\\mintA","\\textcolor{##f5f9e8}{#1}");A("\\mintB","\\textcolor{##edf2df}{#1}");A("\\mintC","\\textcolor{##e0e5cc}{#1}");A("\\grayA","\\textcolor{##f6f7f7}{#1}");A("\\grayB","\\textcolor{##f0f1f2}{#1}");A("\\grayC","\\textcolor{##e3e5e6}{#1}");A("\\grayD","\\textcolor{##d6d8da}{#1}");A("\\grayE","\\textcolor{##babec2}{#1}");A("\\grayF","\\textcolor{##888d93}{#1}");A("\\grayG","\\textcolor{##626569}{#1}");A("\\grayH","\\textcolor{##3b3e40}{#1}");A("\\grayI","\\textcolor{##21242c}{#1}");A("\\kaBlue","\\textcolor{##314453}{#1}");A("\\kaGreen","\\textcolor{##71B307}{#1}");var rd={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class Xv{constructor(e,t,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(e),this.macros=new Vv(Wv,t.macros),this.mode=n,this.stack=[]}feed(e){this.lexer=new _h(e,this.settings)}switchMode(e){this.mode=e}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(e){this.stack.push(e)}pushTokens(e){this.stack.push(...e)}scanArgument(e){var t,n,r;if(e){if(this.consumeSpaces(),this.future().text!=="[")return null;t=this.popToken(),{tokens:r,end:n}=this.consumeArg(["]"])}else({tokens:r,start:t,end:n}=this.consumeArg());return this.pushToken(new vn("EOF",n.loc)),this.pushTokens(r),new vn("",dn.range(t,n))}consumeSpaces(){for(;;){var e=this.future();if(e.text===" ")this.stack.pop();else break}}consumeArg(e){var t=[],n=e&&e.length>0;n||this.consumeSpaces();var r=this.future(),a,s=0,o=0;do{if(a=this.popToken(),t.push(a),a.text==="{")++s;else if(a.text==="}"){if(--s,s===-1)throw new le("Extra }",a)}else if(a.text==="EOF")throw new le("Unexpected end of input in a macro argument, expected '"+(e&&n?e[o]:"}")+"'",a);if(e&&n)if((s===0||s===1&&e[o]==="{")&&a.text===e[o]){if(++o,o===e.length){t.splice(-o,o);break}}else o=0}while(s!==0||n);return r.text==="{"&&t[t.length-1].text==="}"&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:r,end:a}}consumeArgs(e,t){if(t){if(t.length!==e+1)throw new le("The length of delimiters doesn't match the number of args!");for(var n=t[0],r=0;r<n.length;r++){var a=this.popToken();if(n[r]!==a.text)throw new le("Use of the macro doesn't match its definition",a)}}for(var s=[],o=0;o<e;o++)s.push(this.consumeArg(t&&t[o+1]).tokens);return s}countExpansion(e){if(this.expansionCount+=e,this.expansionCount>this.settings.maxExpand)throw new le("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(e){var t=this.popToken(),n=t.text,r=t.noexpand?null:this._getExpansion(n);if(r==null||e&&r.unexpandable){if(e&&r==null&&n[0]==="\\"&&!this.isDefined(n))throw new le("Undefined control sequence: "+n);return this.pushToken(t),!1}this.countExpansion(1);var a=r.tokens,s=this.consumeArgs(r.numArgs,r.delimiters);if(r.numArgs){a=a.slice();for(var o=a.length-1;o>=0;--o){var l=a[o];if(l.text==="#"){if(o===0)throw new le("Incomplete placeholder at end of macro body",l);if(l=a[--o],l.text==="#")a.splice(o+1,1);else if(/^[1-9]$/.test(l.text))a.splice(o,2,...s[+l.text-1]);else throw new le("Not a valid argument number",l)}}}return this.pushTokens(a),a.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var e=this.stack.pop();return e.treatAsRelax&&(e.text="\\relax"),e}}expandMacro(e){return this.macros.has(e)?this.expandTokens([new vn(e)]):void 0}expandTokens(e){var t=[],n=this.stack.length;for(this.pushTokens(e);this.stack.length>n;)if(this.expandOnce(!0)===!1){var r=this.stack.pop();r.treatAsRelax&&(r.noexpand=!1,r.treatAsRelax=!1),t.push(r)}return this.countExpansion(t.length),t}expandMacroAsText(e){var t=this.expandMacro(e);return t&&t.map(n=>n.text).join("")}_getExpansion(e){var t=this.macros.get(e);if(t==null)return t;if(e.length===1){var n=this.lexer.catcodes[e];if(n!=null&&n!==13)return}var r=typeof t=="function"?t(this):t;if(typeof r=="string"){var a=0;if(r.includes("#"))for(var s=r.replace(/##/g,"");s.includes("#"+(a+1));)++a;for(var o=new _h(r,this.settings),l=[],c=o.lex();c.text!=="EOF";)l.push(c),c=o.lex();l.reverse();var h={tokens:l,numArgs:a};return h}return r}isDefined(e){return this.macros.has(e)||Pi.hasOwnProperty(e)||Ct.math.hasOwnProperty(e)||Ct.text.hasOwnProperty(e)||rd.hasOwnProperty(e)}isExpandable(e){var t=this.macros.get(e);return t!=null?typeof t=="string"||typeof t=="function"||!t.unexpandable:Pi.hasOwnProperty(e)&&!Pi[e].primitive}}var bh=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,es=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Oo={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Sh={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class Bs{constructor(e,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new Xv(e,t,this.mode),this.settings=t,this.leftrightDepth=0,this.nextToken=null}expect(e,t){if(t===void 0&&(t=!0),this.fetch().text!==e)throw new le("Expected '"+e+"', got '"+this.fetch().text+"'",this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(e){this.mode=e,this.gullet.switchMode(e)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var e=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),e}finally{this.gullet.endGroups()}}subparse(e){var t=this.nextToken;this.consume(),this.gullet.pushToken(new vn("}")),this.gullet.pushTokens(e);var n=this.parseExpression(!1);return this.expect("}"),this.nextToken=t,n}parseExpression(e,t){for(var n=[];;){this.mode==="math"&&this.consumeSpaces();var r=this.fetch();if(Bs.endOfExpression.has(r.text)||t&&r.text===t||e&&Pi[r.text]&&Pi[r.text].infix)break;var a=this.parseAtom(t);if(a){if(a.type==="internal")continue}else break;n.push(a)}return this.mode==="text"&&this.formLigatures(n),this.handleInfixNodes(n)}handleInfixNodes(e){for(var t=-1,n,r=0;r<e.length;r++){var a=e[r];if(a.type==="infix"){if(t!==-1)throw new le("only one infix operator per group",a.token);t=r,n=a.replaceWith}}if(t!==-1&&n){var s,o,l=e.slice(0,t),c=e.slice(t+1);l.length===1&&l[0].type==="ordgroup"?s=l[0]:s={type:"ordgroup",mode:this.mode,body:l},c.length===1&&c[0].type==="ordgroup"?o=c[0]:o={type:"ordgroup",mode:this.mode,body:c};var h;return n==="\\\\abovefrac"?h=this.callFunction(n,[s,e[t],o],[]):h=this.callFunction(n,[s,o],[]),[h]}else return e}handleSupSubscript(e){var t=this.fetch(),n=t.text;this.consume(),this.consumeSpaces();var r;do{var a;r=this.parseGroup(e)}while(((a=r)==null?void 0:a.type)==="internal");if(!r)throw new le("Expected group after '"+n+"'",t);return r}formatUnsupportedCmd(e){for(var t=[],n=0;n<e.length;n++)t.push({type:"textord",mode:"text",text:e[n]});var r={type:"text",mode:this.mode,body:t},a={type:"color",mode:this.mode,color:this.settings.errorColor,body:[r]};return a}parseAtom(e){var t=this.parseGroup("atom",e);if((t==null?void 0:t.type)==="internal"||this.mode==="text")return t;for(var n,r;;){this.consumeSpaces();var a=this.fetch();if(a.text==="\\limits"||a.text==="\\nolimits"){if(t&&t.type==="op"){var s=a.text==="\\limits";t.limits=s,t.alwaysHandleSupSub=!0}else if(t&&t.type==="operatorname")t.alwaysHandleSupSub&&(t.limits=a.text==="\\limits");else throw new le("Limit controls must follow a math operator",a);this.consume()}else if(a.text==="^"){if(n)throw new le("Double superscript",a);n=this.handleSupSubscript("superscript")}else if(a.text==="_"){if(r)throw new le("Double subscript",a);r=this.handleSupSubscript("subscript")}else if(a.text==="'"){if(n)throw new le("Double superscript",a);var o={type:"textord",mode:this.mode,text:"\\prime"},l=[o];for(this.consume();this.fetch().text==="'";)l.push(o),this.consume();this.fetch().text==="^"&&l.push(this.handleSupSubscript("superscript")),n={type:"ordgroup",mode:this.mode,body:l}}else if(es[a.text]){var c=bh.test(a.text),h=[];for(h.push(new vn(es[a.text])),this.consume();;){var u=this.fetch().text;if(!es[u]||bh.test(u)!==c)break;h.unshift(new vn(es[u])),this.consume()}var d=this.subparse(h);c?r={type:"ordgroup",mode:"math",body:d}:n={type:"ordgroup",mode:"math",body:d}}else break}return n||r?{type:"supsub",mode:this.mode,base:t,sup:n,sub:r}:t}parseFunction(e,t){var n=this.fetch(),r=n.text,a=Pi[r];if(!a)return null;if(this.consume(),t&&t!=="atom"&&!a.allowedInArgument)throw new le("Got function '"+r+"' with no arguments"+(t?" as "+t:""),n);if(this.mode==="text"&&!a.allowedInText)throw new le("Can't use function '"+r+"' in text mode",n);if(this.mode==="math"&&a.allowedInMath===!1)throw new le("Can't use function '"+r+"' in math mode",n);var{args:s,optArgs:o}=this.parseArguments(r,a);return this.callFunction(r,s,o,n,e)}callFunction(e,t,n,r,a){var s={funcName:e,parser:this,token:r,breakOnTokenText:a},o=Pi[e];if(o&&o.handler)return o.handler(s,t,n);throw new le("No function handler for "+e)}parseArguments(e,t){var n=t.numArgs+t.numOptionalArgs;if(n===0)return{args:[],optArgs:[]};for(var r=[],a=[],s=0;s<n;s++){var o=t.argTypes&&t.argTypes[s],l=s<t.numOptionalArgs;("primitive"in t&&t.primitive&&o==null||t.type==="sqrt"&&s===1&&a[0]==null)&&(o="primitive");var c=this.parseGroupOfType("argument to '"+e+"'",o,l);if(l)a.push(c);else if(c!=null)r.push(c);else throw new le("Null argument, please report this as a bug")}return{args:r,optArgs:a}}parseGroupOfType(e,t,n){switch(t){case"color":return this.parseColorGroup(n);case"size":return this.parseSizeGroup(n);case"url":return this.parseUrlGroup(n);case"math":case"text":return this.parseArgumentGroup(n,t);case"hbox":{var r=this.parseArgumentGroup(n,"text");return r!=null?{type:"styling",mode:r.mode,body:[r],style:"text",resetFont:!0}:null}case"raw":{var a=this.parseStringGroup("raw",n);return a!=null?{type:"raw",mode:"text",string:a.text}:null}case"primitive":{if(n)throw new le("A primitive argument cannot be optional");var s=this.parseGroup(e);if(s==null)throw new le("Expected group as "+e,this.fetch());return s}case"original":case null:case void 0:return this.parseArgumentGroup(n);default:throw new le("Unknown group type as "+e,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(e,t){var n=this.gullet.scanArgument(t);if(n==null)return null;for(var r="",a;(a=this.fetch()).text!=="EOF";)r+=a.text,this.consume();return this.consume(),n.text=r,n}parseRegexGroup(e,t){for(var n=this.fetch(),r=n,a="",s;(s=this.fetch()).text!=="EOF"&&e.test(a+s.text);)r=s,a+=r.text,this.consume();if(a==="")throw new le("Invalid "+t+": '"+n.text+"'",n);return n.range(r,a)}parseColorGroup(e){var t=this.parseStringGroup("color",e);if(t==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!n)throw new le("Invalid color: '"+t.text+"'",t);var r=n[0];return/^[0-9a-f]{6}$/i.test(r)&&(r="#"+r),{type:"color-token",mode:this.mode,color:r}}parseSizeGroup(e){var t,n=!1;if(this.gullet.consumeSpaces(),!e&&this.gullet.future().text!=="{"?t=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):t=this.parseStringGroup("size",e),!t)return null;!e&&t.text.length===0&&(t.text="0pt",n=!0);var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!r)throw new le("Invalid size: '"+t.text+"'",t);var a={number:+(r[1]+r[2]),unit:r[3]};if(!du(a))throw new le("Invalid unit: '"+a.unit+"'",t);return{type:"size",mode:this.mode,value:a,isBlank:n}}parseUrlGroup(e){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var t=this.parseStringGroup("url",e);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),t==null)return null;var n=t.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:n}}parseArgumentGroup(e,t){var n=this.gullet.scanArgument(e);if(n==null)return null;var r=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var a=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var s={type:"ordgroup",mode:this.mode,loc:n.loc,body:a};return t&&this.switchMode(r),s}parseGroup(e,t){var n=this.fetch(),r=n.text,a;if(r==="{"||r==="\\begingroup"){this.consume();var s=r==="{"?"}":"\\endgroup";this.gullet.beginGroup();var o=this.parseExpression(!1,s),l=this.fetch();this.expect(s),this.gullet.endGroup(),a={type:"ordgroup",mode:this.mode,loc:dn.range(n,l),body:o,semisimple:r==="\\begingroup"||void 0}}else if(a=this.parseFunction(t,e)||this.parseSymbol(),a==null&&r[0]==="\\"&&!rd.hasOwnProperty(r)){if(this.settings.throwOnError)throw new le("Undefined control sequence: "+r,n);a=this.formatUnsupportedCmd(r),this.consume()}return a}formLigatures(e){for(var t=e.length-1,n=0;n<t;++n){var r=e[n];if(r.type==="textord"){var a=r.text,s=e[n+1];if(!(!s||s.type!=="textord")){if(a==="-"&&s.text==="-"){var o=e[n+2];n+1<t&&o&&o.type==="textord"&&o.text==="-"?(e.splice(n,3,{type:"textord",mode:"text",loc:dn.range(r,o),text:"---"}),t-=2):(e.splice(n,2,{type:"textord",mode:"text",loc:dn.range(r,s),text:"--"}),t-=1)}(a==="'"||a==="`")&&s.text===a&&(e.splice(n,2,{type:"textord",mode:"text",loc:dn.range(r,s),text:a+a}),t-=1)}}}}parseSymbol(){var e=this.fetch(),t=e.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var n=t.slice(5),r=n.charAt(0)==="*";if(r&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new le(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:"verb",mode:"text",body:n,star:r}}Sh.hasOwnProperty(t[0])&&!Ct[this.mode][t[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+t[0]+'" used in math mode',e),t=Sh[t[0]]+t.slice(1));var a=Hv.exec(t);a&&(t=t.substring(0,a.index),t==="i"?t="ı":t==="j"&&(t="ȷ"));var s;if(Ct[this.mode][t]){this.settings.strict&&this.mode==="math"&&C0.includes(t)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+t[0]+'" used in math mode',e);var o=Ct[this.mode][t].group,l=dn.range(e),c;lv(o)?c={type:"atom",mode:this.mode,family:o,loc:l,text:t}:c={type:o,mode:this.mode,loc:l,text:t},s=c}else if(t.charCodeAt(0)>=128)this.settings.strict&&(uu(t.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+t[0]+'" used in math mode',e):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+t[0]+'"'+(" ("+t.charCodeAt(0)+")"),e)),s={type:"textord",mode:"text",loc:dn.range(e),text:t};else return null;if(this.consume(),a)for(var h=0;h<a[0].length;h++){var u=a[0][h];if(!Oo[u])throw new le("Unknown accent ' "+u+"'",e);var d=Oo[u][this.mode]||Oo[u].text;if(!d)throw new le("Accent "+u+" unsupported in "+this.mode+" mode",e);s={type:"accent",mode:this.mode,loc:dn.range(e),label:d,isStretchy:!1,isShifty:!0,base:s}}return s}}Bs.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var xl=function(e,t){if(!(typeof e=="string"||e instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var n=new Bs(e,t);delete n.gullet.macros.current["\\df@tag"];var r=n.parse();if(delete n.gullet.macros.current["\\current@color"],delete n.gullet.macros.current["\\color"],n.gullet.macros.get("\\df@tag")){if(!t.displayMode)throw new le("\\tag works only in display equations");r=[{type:"tag",mode:"text",body:r,tag:n.subparse([new vn("\\df@tag")])}]}return r},ad=function(e,t,n){t.textContent="";var r=_l(e,n).toNode();t.appendChild(r)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),ad=function(){throw new le("KaTeX doesn't work in quirks mode.")});var Yv=function(e,t){var n=_l(e,t).toMarkup();return n},jv=function(e,t){var n=new rl(t);return xl(e,n)},sd=function(e,t,n){if(n.throwOnError||!(e instanceof le))throw e;var r=oe(["katex-error"],[new xn(t)]);return r.setAttribute("title",e.toString()),r.setAttribute("style","color:"+n.errorColor),r},_l=function(e,t){var n=new rl(t);try{var r=xl(e,n);return ev(r,e,n)}catch(a){return sd(a,e,n)}},$v=function(e,t){var n=new rl(t);try{var r=xl(e,n);return tv(r,e,n)}catch(a){return sd(a,e,n)}},Zv="0.16.47",Kv={Span:qr,Anchor:Ts,SymbolNode:xn,SvgNode:di,PathNode:Fi,LineNode:R0},Jv={version:Zv,render:ad,renderToString:Yv,ParseError:le,SETTINGS_SCHEMA:E0,__parse:jv,__renderToDomTree:_l,__renderToHTMLTree:$v,__setFontMetrics:U4,__defineSymbol:f,__defineFunction:ye,__defineMacro:A,__domTree:Kv};class Qv{constructor(e){Se(this,"velocityHistory",[]);Se(this,"deltaVHistory",[]);Se(this,"snrHistory",[]);Se(this,"maxHistoryLength",80);Se(this,"velCanvas",null);Se(this,"deltaVCanvas",null);Se(this,"snrCanvas",null);Se(this,"i18n");this.i18n=e,this.initCanvases(),this.renderFormulas()}initCanvases(){this.velCanvas=document.getElementById("chart-velocity"),this.deltaVCanvas=document.getElementById("chart-deltav"),this.snrCanvas=document.getElementById("chart-snr")}renderFormulas(){[{id:"eq-rk4",tex:"\\ddot{\\mathbf{r}} = -\\mu \\frac{\\mathbf{r}}{r^3} + \\sum_{i} \\mu_i \\left( \\frac{\\mathbf{r}_i - \\mathbf{r}}{\\|\\mathbf{r}_i - \\mathbf{r}\\|^3} - \\frac{\\mathbf{r}_i}{r_i^3} \\right) + \\mathbf{a}_{J2}"},{id:"eq-vis-viva",tex:"v = \\sqrt{\\mu \\left( \\frac{2}{r} - \\frac{1}{a} \\right)}, \\quad \\varepsilon = -\\frac{\\mu}{2a}"},{id:"eq-hohmann",tex:"\\Delta v_1 = \\sqrt{\\frac{\\mu}{r_1}} \\left( \\sqrt{\\frac{2r_2}{r_1 + r_2}} - 1 \\right), \\quad t_{tx} = \\pi \\sqrt{\\frac{a_{tx}^3}{\\mu}}"},{id:"eq-friis",tex:"P_r = P_t + G_t + G_r - 20\\log_{10}\\left(\\frac{4\\pi d}{\\lambda}\\right), \\quad t_{OWLT} = \\frac{d}{c}"},{id:"eq-slingshot",tex:"\\delta = 2 \\arcsin\\left( \\frac{1}{1 + \\frac{r_p v_\\infty^2}{\\mu}} \\right), \\quad \\Delta v_{max} = 2 v_\\infty \\sin\\left(\\frac{\\delta}{2}\\right)"}].forEach(t=>{const n=document.getElementById(t.id);if(n)try{Jv.render(t.tex,n,{throwOnError:!1,displayMode:!0})}catch{n.textContent=t.tex}})}updateTelemetry(e,t,n,r,a){if(this.setText("hud-speed",`${t.vMag.toFixed(3)} km/s`),this.setText("hud-alt",`${Math.max(0,t.rMag-6371).toFixed(1)} km`),this.setText("hud-rp",`${t.periapsisAlt>0?t.periapsisAlt.toFixed(1)+" km":"IMPACT"}`),this.setText("hud-ra",`${t.apoapsisAlt!==1/0?t.apoapsisAlt.toFixed(1)+" km":"ESCAPE (Hyperbolic)"}`),t.period!==1/0){const l=Math.floor(t.period/3600),c=Math.floor(t.period%3600/60),h=Math.floor(t.period%60);this.setText("hud-period",`${l}h ${c}m ${h}s`)}else this.setText("hud-period","∞ (Escape)");this.setText("hud-energy",`${t.specificEnergy.toFixed(2)} km²/s²`);const s=a.propellantRemaining/1500*100;this.setText("hud-fuel",`${a.propellantRemaining.toFixed(1)} kg (${s.toFixed(0)}%)`),this.setText("hud-deltav-rem",`${a.deltaVRemaining.toFixed(3)} km/s`),this.setText("hud-adcs-mode",n.mode),this.setText("hud-euler",`R: ${n.eulerDeg.roll.toFixed(1)}° | P: ${n.eulerDeg.pitch.toFixed(1)}° | Y: ${n.eulerDeg.yaw.toFixed(1)}°`),this.setText("hud-quat",`[${n.quaternion[0].toFixed(3)}, ${n.quaternion[1].toFixed(3)}, ${n.quaternion[2].toFixed(3)}, ${n.quaternion[3].toFixed(3)}]`),this.setText("hud-pointing-error",`${n.pointingErrorDeg.toFixed(2)}°`),this.setText("dsn-station-name",r.activeStation.name),this.setText("dsn-owlt",r.oneWayLightTimeString),this.setText("dsn-fspl",`${r.fsplDb.toFixed(1)} dB`),this.setText("dsn-rx-power",`${r.receivedPowerDbm.toFixed(1)} dBm`),this.setText("dsn-snr",`${r.snrDb.toFixed(1)} dB`),this.setText("dsn-doppler",`${(r.dopplerShiftHz/1e3).toFixed(2)} kHz`),this.setText("dsn-bitrate",`${r.bitrateKbps.toFixed(0)} kbps`),this.setText("dsn-elevation",`${r.stationElevationDeg.toFixed(1)}°`),this.setText("dsn-los-badge",r.isInLineOfSight?"LOCKED / ONLINE":"OCCULTED / LOS LOSS");const o=document.getElementById("dsn-los-badge");o&&(o.className=r.isInLineOfSight?"badge-online":"badge-offline"),this.velocityHistory.push(t.vMag),this.velocityHistory.length>this.maxHistoryLength&&this.velocityHistory.shift(),this.deltaVHistory.push(a.deltaVExpended),this.deltaVHistory.length>this.maxHistoryLength&&this.deltaVHistory.shift(),this.snrHistory.push(r.snrDb),this.snrHistory.length>this.maxHistoryLength&&this.snrHistory.shift(),this.drawStripChart(this.velCanvas,this.velocityHistory,"#00e5ff","km/s"),this.drawStripChart(this.deltaVCanvas,this.deltaVHistory,"#ffd000","km/s"),this.drawStripChart(this.snrCanvas,this.snrHistory,"#00ff88","dB")}drawStripChart(e,t,n,r){if(!e||t.length<2)return;const a=e.getContext("2d");if(!a)return;const s=e.width,o=e.height;a.clearRect(0,0,s,o),a.strokeStyle="rgba(255, 255, 255, 0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(0,o*.25),a.lineTo(s,o*.25),a.moveTo(0,o*.5),a.lineTo(s,o*.5),a.moveTo(0,o*.75),a.lineTo(s,o*.75),a.stroke();const l=Math.min(...t)*.95,c=Math.max(...t)*1.05||1,h=Math.max(.1,c-l);a.strokeStyle=n,a.lineWidth=2,a.beginPath();const u=s/(this.maxHistoryLength-1),d=this.maxHistoryLength-t.length;for(let x=0;x<t.length;x++){const _=(d+x)*u,g=(t[x]-l)/h,p=o-g*(o-10)-5;x===0?a.moveTo(_,p):a.lineTo(_,p)}a.stroke(),a.lineTo(s,o),a.lineTo(d*u,o),a.closePath(),a.fillStyle=n.replace(")",", 0.12)").replace("rgb","rgba").replace("#",""),a.fillStyle=`${n}18`,a.fill(),a.fillStyle=n,a.font='10px "JetBrains Mono", monospace';const m=t[t.length-1];a.fillText(`${m.toFixed(2)} ${r}`,s-75,14)}setText(e,t){const n=document.getElementById(e);n&&(n.textContent=t)}}class e3{constructor(e,t){Se(this,"elements");Se(this,"onChangeCallback");this.elements={...e},this.onChangeCallback=t,this.bindInputs(),this.bindPresets(),this.syncSlidersFromState()}bindInputs(){const e=(t,n,r,a,s=!1)=>{const o=document.getElementById(t),l=document.getElementById(n);if(!o||!l)return;const c=h=>{a(s?h*Math.PI/180:h),o.value=h.toString(),l.value=h.toFixed(s?1:t.includes("ecc")?4:0),this.onChangeCallback(this.elements)};o.addEventListener("input",()=>c(parseFloat(o.value))),l.addEventListener("change",()=>c(parseFloat(l.value)))};e("input-sma-slider","input-sma-num",()=>this.elements.semiMajorAxis,t=>this.elements.semiMajorAxis=t),e("input-ecc-slider","input-ecc-num",()=>this.elements.eccentricity,t=>this.elements.eccentricity=t),e("input-inc-slider","input-inc-num",()=>this.elements.inclination*180/Math.PI,t=>this.elements.inclination=t,!0),e("input-raan-slider","input-raan-num",()=>this.elements.raan*180/Math.PI,t=>this.elements.raan=t,!0),e("input-argp-slider","input-argp-num",()=>this.elements.argPeriapsis*180/Math.PI,t=>this.elements.argPeriapsis=t,!0),e("input-nu-slider","input-nu-num",()=>this.elements.trueAnomaly*180/Math.PI,t=>this.elements.trueAnomaly=t,!0)}bindPresets(){[{id:"btn-preset-leo",elem:{semiMajorAxis:je.radius+400,eccentricity:8e-4,inclination:51.64*Math.PI/180,raan:0,argPeriapsis:0,trueAnomaly:0}},{id:"btn-preset-sso",elem:{semiMajorAxis:je.radius+700,eccentricity:.001,inclination:98.2*Math.PI/180,raan:45*Math.PI/180,argPeriapsis:0,trueAnomaly:0}},{id:"btn-preset-molniya",elem:{semiMajorAxis:26600,eccentricity:.72,inclination:63.4*Math.PI/180,raan:90*Math.PI/180,argPeriapsis:270*Math.PI/180,trueAnomaly:0}},{id:"btn-preset-geo",elem:{semiMajorAxis:42164,eccentricity:2e-4,inclination:.1*Math.PI/180,raan:0,argPeriapsis:0,trueAnomaly:0}},{id:"btn-preset-escape",elem:{semiMajorAxis:18e3,eccentricity:1.25,inclination:28.5*Math.PI/180,raan:30*Math.PI/180,argPeriapsis:0,trueAnomaly:-.8}}].forEach(t=>{const n=document.getElementById(t.id);n&&n.addEventListener("click",()=>{this.setElements(t.elem)})})}setElements(e){this.elements={...e},this.syncSlidersFromState(),this.onChangeCallback(this.elements)}getElements(){return{...this.elements}}syncSlidersFromState(){const e=(t,n,r,a=!1)=>{const s=document.getElementById(t),o=document.getElementById(n),l=a?r*180/Math.PI:r;s&&(s.value=l.toString()),o&&(o.value=l.toFixed(a?1:t.includes("ecc")?4:0))};e("input-sma-slider","input-sma-num",this.elements.semiMajorAxis),e("input-ecc-slider","input-ecc-num",this.elements.eccentricity),e("input-inc-slider","input-inc-num",this.elements.inclination,!0),e("input-raan-slider","input-raan-num",this.elements.raan,!0),e("input-argp-slider","input-argp-num",this.elements.argPeriapsis,!0),e("input-nu-slider","input-nu-num",this.elements.trueAnomaly,!0)}}function od(i,e,t=je.mu){const n=(i+e)/2,r=Math.abs(e-i)/(i+e),a=Math.sqrt(t/i),s=Math.sqrt(t/e),o=Math.sqrt(t*(2/i-1/n)),l=Math.sqrt(t*(2/e-1/n)),c=Math.abs(o-a),h=Math.abs(s-l),u=c+h,d=Math.PI*Math.sqrt(Math.pow(n,3)/t),m=d/3600,x=d/86400,g=Math.sqrt(t/Math.pow(e,3))*d;let p=Math.PI-g;for(;p<0;)p+=2*Math.PI;for(;p>=2*Math.PI;)p-=2*Math.PI;const b=p*180/Math.PI;return{r1:i,r2:e,semiMajorAxis:n,eccentricity:r,deltaV1:c,deltaV2:h,totalDeltaV:u,transferTimeSeconds:d,transferTimeHours:m,transferTimeDays:x,phaseAngleRad:p,phaseAngleDeg:b}}function t3(i,e,t,n=je.mu){const r=(i+t)/2,a=Math.sqrt(n/i),s=Math.sqrt(n*(2/i-1/r)),o=Math.abs(s-a),l=Math.sqrt(n*(2/t-1/r)),c=(t+e)/2,h=Math.sqrt(n*(2/t-1/c)),u=Math.abs(h-l),d=Math.sqrt(n*(2/e-1/c)),m=Math.sqrt(n/e),x=Math.abs(m-d),_=o+u+x,g=Math.PI*Math.sqrt(Math.pow(r,3)/n),p=Math.PI*Math.sqrt(Math.pow(c,3)/n),b=g+p,w=od(i,e,n),M=_<w.totalDeltaV;return{r1:i,r2:e,rb:t,deltaV1:o,deltaV2:u,deltaV3:x,totalDeltaV:_,transferTimeSeconds:b,transferTimeDays:b/86400,isMoreEfficientThanHohmann:M}}function n3(i,e,t,n,r){const a=e-t,s=1+e*i*i/n,o=1/Math.max(1.0001,s),l=2*Math.asin(Math.min(.99999,o)),c=l*180/Math.PI,h=e*Math.sqrt(1+2*n/(e*i*i)),u=2*i*Math.sin(l/2),d=2*r*i*Math.sin(l/2);return{vInf:i,periapsisRadius:e,periapsisAltitude:a,turnAngleRad:l,turnAngleDeg:c,impactParameter:h,deltaVHelio:u,heliocentricEnergyGain:d}}function wh(i,e,t,n=320){const r=t*1e3,a=n*Fc,s=Math.exp(r/a),o=i/s,l=i-o,c=Math.max(0,e-l),h=i-e,u=n*Fc*Math.log((h+c)/h)/1e3;return{initialMass:i,finalMass:o,propellantConsumed:l,propellantRemaining:c,isp:n,deltaVExpended:t,deltaVRemaining:Math.max(0,u)}}function i3(i,e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),n=[e[0]/t,e[1]/t,e[2]/t],r=[-n[0],-n[1],-n[2]],a=i[1]*e[2]-i[2]*e[1],s=i[2]*e[0]-i[0]*e[2],o=i[0]*e[1]-i[1]*e[0],l=Math.sqrt(a*a+s*s+o*o),c=[a/(l||1),s/(l||1),o/(l||1)],h=[-c[0],-c[1],-c[2]],u=c[1]*n[2]-c[2]*n[1],d=c[2]*n[0]-c[0]*n[2],m=c[0]*n[1]-c[1]*n[0],x=Math.sqrt(u*u+d*d+m*m),_=[u/(x||1),d/(x||1),m/(x||1)],g=[-_[0],-_[1],-_[2]];return{prograde:n,retrograde:r,normal:c,antiNormal:h,radialOut:_,radialIn:g}}class r3{constructor(e,t){Se(this,"audio");Se(this,"propellant");Se(this,"onManeuverExecuted");this.audio=e,this.onManeuverExecuted=t,this.propellant=wh(4200,1500,0,320),this.bindInputs(),this.computeHohmann(),this.computeBiElliptic(),this.computeSlingshot()}bindInputs(){const e=document.getElementById("hohmann-r1"),t=document.getElementById("hohmann-r2"),n=()=>this.computeHohmann();e&&e.addEventListener("input",n),t&&t.addEventListener("input",n);const r=document.getElementById("bielliptic-rb");r&&r.addEventListener("input",()=>this.computeBiElliptic());const a=document.getElementById("slingshot-vinf"),s=document.getElementById("slingshot-rp"),o=()=>this.computeSlingshot();a&&a.addEventListener("input",o),s&&s.addEventListener("input",o);const l=(c,h)=>{const u=document.getElementById(c);u&&u.addEventListener("click",()=>{const d=document.getElementById("burn-dv-amount"),m=d&&parseFloat(d.value)||.1;this.executeDirectionalBurn(h,m)})};l("btn-burn-prograde","prograde"),l("btn-burn-retrograde","retrograde"),l("btn-burn-normal","normal"),l("btn-burn-antinormal","antinormal"),l("btn-burn-radialin","radialIn"),l("btn-burn-radialout","radialOut")}computeHohmann(){var r,a;const e=parseFloat(((r=document.getElementById("hohmann-r1"))==null?void 0:r.value)||"6771"),t=parseFloat(((a=document.getElementById("hohmann-r2"))==null?void 0:a.value)||"42164"),n=od(e,t,je.mu);this.setText("hohmann-dv1",`${(n.deltaV1*1e3).toFixed(1)} m/s`),this.setText("hohmann-dv2",`${(n.deltaV2*1e3).toFixed(1)} m/s`),this.setText("hohmann-dv-tot",`${n.totalDeltaV.toFixed(3)} km/s`),this.setText("hohmann-time",`${n.transferTimeHours.toFixed(2)} h (${n.transferTimeDays.toFixed(1)} d)`),this.setText("hohmann-phase",`${n.phaseAngleDeg.toFixed(1)}°`)}computeBiElliptic(){var a,s,o;const e=parseFloat(((a=document.getElementById("hohmann-r1"))==null?void 0:a.value)||"6771"),t=parseFloat(((s=document.getElementById("hohmann-r2"))==null?void 0:s.value)||"42164"),n=parseFloat(((o=document.getElementById("bielliptic-rb"))==null?void 0:o.value)||"80000"),r=t3(e,t,n,je.mu);this.setText("bielliptic-dv-tot",`${r.totalDeltaV.toFixed(3)} km/s`),this.setText("bielliptic-time",`${r.transferTimeDays.toFixed(2)} d`),this.setText("bielliptic-efficiency",r.isMoreEfficientThanHohmann?"More Efficient than Hohmann":"Less Efficient (Time costly)")}computeSlingshot(){var a,s;const e=parseFloat(((a=document.getElementById("slingshot-vinf"))==null?void 0:a.value)||"9.5"),t=parseFloat(((s=document.getElementById("slingshot-rp"))==null?void 0:s.value)||"350000"),n=yo.radius+t,r=n3(e,n,yo.radius,yo.mu,13.07);this.setText("slingshot-delta-deg",`${r.turnAngleDeg.toFixed(1)}°`),this.setText("slingshot-dv-helio",`+${r.deltaVHelio.toFixed(2)} km/s`),this.setText("slingshot-impact-param",`${(r.impactParameter/1e3).toFixed(0)}k km`)}executeDirectionalBurn(e,t,n){if(!n)return;const r=Ar(n,je.mu),a=i3(r.r,r.v);let s=[0,0,0];switch(e){case"prograde":s=a.prograde;break;case"retrograde":s=a.retrograde;break;case"normal":s=a.normal;break;case"antinormal":s=a.antiNormal;break;case"radialIn":s=a.radialIn;break;case"radialOut":s=a.radialOut;break}const o=[r.v[0]+s[0]*t,r.v[1]+s[1]*t,r.v[2]+s[2]*t],l=Gg(r.r,o,je.mu),c=this.propellant.deltaVExpended+t;this.propellant=wh(4200,1500,c,320),this.audio.playBurnIgnition(),this.audio.playThrusterBurst(.3),this.onManeuverExecuted(l,this.propellant)}setText(e,t){const n=document.getElementById(e);n&&(n.textContent=t)}}const a3=[{id:"artemis",name:"Artemis Lunar Gateway & NRHO",nameAr:"أرتميس: بوابة القمر ومدار الهالة NRHO",description:"Translunar Injection (TLI), Lunar Orbit Insertion (LOI), and Near-Rectilinear Halo Orbit (NRHO) 9:2 lunar resonant orbit.",descriptionAr:"حقن المدار القمري (TLI)، وأسر المدار القمري (LOI)، والدخول في مدار الهالة شبه المستطيل (NRHO) المخصص للمحطة القمرية.",centralBody:"EARTH",initialElements:{semiMajorAxis:195e3,eccentricity:.942,inclination:28.5*Math.PI/180,raan:40*Math.PI/180,argPeriapsis:180*Math.PI/180,trueAnomaly:.2},adcsMode:"EARTH_POINTING",solarDeployment:1,cameraMode:"CHASE",targetPosition:[Tn.semiMajorAxis,0,0],missionDurationDays:6.5},{id:"mars2026",name:"Mars 2026 Transit & Aerocapture",nameAr:"رحلة المريخ 2026 والكبح الجوي",description:"Heliocentric Hohmann transfer arc departing Earth at 11.2 km/s with hypervelocity aerocapture entry interface trajectory.",descriptionAr:"قوس انتقال هوهمان الشمسي من مدار الأرض بسرعة انطلاق 11.2 كم/ث، مع مناورة الكبح الجوي في غلاف المريخ الرقيق.",centralBody:"SUN",initialElements:{semiMajorAxis:188768e3,eccentricity:.207,inclination:1.85*Math.PI/180,raan:25*Math.PI/180,argPeriapsis:0,trueAnomaly:.85},adcsMode:"PROGRADE",solarDeployment:1,cameraMode:"SOLAR",targetPosition:[227939366,0,0],missionDurationDays:259},{id:"jwst",name:"James Webb Space Telescope (JWST)",nameAr:"تلسكوب جيمس ويب (نقطة لاغرانج L2)",description:"Sun-Earth L2 Lagrange Halo Orbit 1.5 million km from Earth, keeping the 5-layer Kapton sunshield permanently facing Sun & Earth.",descriptionAr:"مدار هالة متوازن ثلاثي الأبعاد حول نقطة لاغرانج L2 على مسافة 1.5 مليون كم، مع توجيه الدرع الشمسي لحجب حرارة الشمس والأرض.",centralBody:"EARTH",initialElements:{semiMajorAxis:15e5,eccentricity:.05,inclination:.1*Math.PI/180,raan:0,argPeriapsis:0,trueAnomaly:0},adcsMode:"SUN_POINTING",solarDeployment:1,cameraMode:"CHASE",haloPoints:jg(hu(Xg).find(i=>i.id==="L2"),4e5,8e5,120),missionDurationDays:30},{id:"voyager",name:"Voyager Grand Tour Slingshot",nameAr:"رحلة فوياجر والمقلاع الجاذبي لكوكب المشتري",description:"Hyperbolic solar system escape trajectory accelerated past Jupiter and Saturn via multiple planetary gravitational assists.",descriptionAr:"مسار هروب هائل بقطع زائد فائق السرعة متجاوزاً جاذبية المشتري وزحل نحو فضاء النجوم السحيق خارج حافة الهيليوسفير.",centralBody:"SUN",initialElements:{semiMajorAxis:778e6,eccentricity:1.38,inclination:3.1*Math.PI/180,raan:110*Math.PI/180,argPeriapsis:45*Math.PI/180,trueAnomaly:-.6},adcsMode:"EARTH_POINTING",solarDeployment:0,cameraMode:"SOLAR",targetPosition:[778412020,0,0],missionDurationDays:1460}];class s3{constructor(){Se(this,"renderer");Se(this,"scene");Se(this,"camera");Se(this,"controls");Se(this,"solarSystem");Se(this,"orbitRenderer");Se(this,"spacecraft");Se(this,"adcs");Se(this,"audio");Se(this,"i18n");Se(this,"hud");Se(this,"orbitCtrl");Se(this,"maneuverPlanner");Se(this,"currentElements",{semiMajorAxis:je.radius+500,eccentricity:.0015,inclination:28.5*Math.PI/180,raan:30*Math.PI/180,argPeriapsis:45*Math.PI/180,trueAnomaly:0});Se(this,"currentBodyMu",je.mu);Se(this,"simTimeSeconds",0);Se(this,"timeWarp",1);Se(this,"isPaused",!1);Se(this,"cameraMode","CHASE");Se(this,"activeMission",null);Se(this,"lastBeepTime",0);Se(this,"earthRotationRad",0);Se(this,"animate",e=>{requestAnimationFrame(this.animate);const t=.016,n=this.isPaused?0:t*this.timeWarp;if(this.simTimeSeconds+=n,this.earthRotationRad+=n/je.rotationPeriod*2*Math.PI,this.solarSystem.update(t,this.earthRotationRad),!this.isPaused){const p=Bc(this.currentElements,this.currentBodyMu,je.radius);if(this.currentElements.semiMajorAxis>0){const b=Math.sqrt(this.currentBodyMu/Math.pow(this.currentElements.semiMajorAxis,3));let w=p.meanAnomaly+b*n;const M=zg(w,this.currentElements.eccentricity);this.currentElements.trueAnomaly=kg(M,this.currentElements.eccentricity)}}const r=Ar(this.currentElements,this.currentBodyMu),a=Bc(this.currentElements,this.currentBodyMu,je.radius),s=new O(r.r[0]*this.orbitRenderer.scaleRatio,r.r[2]*this.orbitRenderer.scaleRatio,-r.r[1]*this.orbitRenderer.scaleRatio);this.spacecraft.group.position.copy(s),this.cameraMode==="CHASE"&&this.controls.target.copy(s),this.adcs.updateTargetAttitude(r.r,r.v,[2e6,0,0]),this.adcs.update(t,this.spacecraft).firedThrusters&&Math.random()<.2&&this.audio.playThrusterBurst(.08);const l=[Tn.semiMajorAxis*Math.cos(this.simTimeSeconds*266e-8),Tn.semiMajorAxis*Math.sin(this.simTimeSeconds*266e-8),0],c=[{id:"moon",name:"Moon",mass:Tn.mass,mu:Tn.mu,radius:Tn.radius,position:l,velocity:[0,1.02,0]}];this.solarSystem.celestialBodies.moon.position.set(l[0]*this.orbitRenderer.scaleRatio,l[2]*this.orbitRenderer.scaleRatio,-l[1]*this.orbitRenderer.scaleRatio);const h=ou(r,1,c,this.currentBodyMu,!0,[0,0,0]),u=Wg(r,a.period>0&&a.period<86400*20?a.period:86400,180,c,this.currentBodyMu);this.orbitRenderer.updatePredictedTrajectory(u),this.orbitRenderer.updateKeplerOrbit(this.currentElements,this.currentBodyMu),this.orbitRenderer.updateSpacecraftVectors(r.r,r.v,h.forces.total);const d=qg(r.r,r.v,25,2.4,this.earthRotationRad),m=lu(d.activeStation.lat,d.activeStation.lon,this.earthRotationRad);this.orbitRenderer.updateDsnBeam(m,r.r,d.isInLineOfSight);const x=new O(-r.r[0],-r.r[2],r.r[1]).normalize(),_=Math.atan2(x.x,x.z),g=Math.asin(x.y);this.spacecraft.pointHGA(_,g),this.hud.updateTelemetry(this.currentElements,a,this.adcs.getState(),d,this.maneuverPlanner.propellant),e-this.lastBeepTime>3e3&&(this.audio.playTelemetryBeep(1200,.03),this.lastBeepTime=e),this.controls.update(),this.renderer.render(this.scene,this.camera)});this.init()}init(){const e=document.getElementById("webgl-canvas");this.renderer=new pg({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Ah,this.renderer.toneMappingExposure=1.1,this.scene=new mg,this.camera=new wn(50,window.innerWidth/window.innerHeight,.1,1e5),this.camera.position.set(0,15,30),this.controls=new wg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxDistance=5e4,this.controls.minDistance=2;const t=new Mg(16777215,.25);this.scene.add(t);const n=new yg(16777215,2.2);n.position.set(2e3,1e3,2e3),this.scene.add(n),this.solarSystem=new Kg,this.scene.add(this.solarSystem.group),this.orbitRenderer=new Jg,this.scene.add(this.orbitRenderer.group),this.spacecraft=new $g,this.scene.add(this.spacecraft.group),this.adcs=new Zg,this.audio=new Qg,this.i18n=new e4,this.hud=new Qv(this.i18n),this.orbitCtrl=new e3(this.currentElements,r=>{this.currentElements={...r},this.orbitRenderer.clearTrail(),this.audio.playTelemetryBeep(1800,.03)}),this.maneuverPlanner=new r3(this.audio,(r,a)=>{this.currentElements={...r},this.orbitCtrl.setElements(r),this.orbitRenderer.clearTrail()}),this.bindDomControls(),this.i18n.updateDomTranslations(),this.updateLagrangeDisplay(),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),this.animate(0)}bindDomControls(){const e=document.getElementById("btn-lang-toggle");e&&e.addEventListener("click",()=>{const h=this.i18n.currentLang==="en"?"ar":"en";this.i18n.setLanguage(h),e.textContent=h==="en"?"العربية":"English"});const t=document.getElementById("btn-audio-toggle");t&&t.addEventListener("click",()=>{const h=this.audio.toggleMute();t.textContent=h?"🔇":"🔊"}),[{id:"btn-warp-pause",warp:0},{id:"btn-warp-1x",warp:1},{id:"btn-warp-10x",warp:10},{id:"btn-warp-100x",warp:100},{id:"btn-warp-1000x",warp:1e3}].forEach(h=>{const u=document.getElementById(h.id);u&&u.addEventListener("click",()=>{document.querySelectorAll(".warp-btn").forEach(d=>d.classList.remove("active")),u.classList.add("active"),h.warp===0?this.isPaused=!0:(this.isPaused=!1,this.timeWarp=h.warp),this.audio.playTelemetryBeep(1200,.03)})}),[{id:"btn-cam-chase",mode:"CHASE"},{id:"btn-cam-earth",mode:"EARTH"},{id:"btn-cam-solar",mode:"SOLAR"},{id:"btn-cam-target",mode:"TARGET"}].forEach(h=>{const u=document.getElementById(h.id);u&&u.addEventListener("click",()=>{document.querySelectorAll(".cam-btn").forEach(d=>d.classList.remove("active")),u.classList.add("active"),this.cameraMode=h.mode,this.setupCameraForMode(h.mode)})});const a=document.querySelectorAll(".tab-btn");a.forEach(h=>{h.addEventListener("click",()=>{a.forEach(m=>m.classList.remove("active")),h.classList.add("active");const u=h.getAttribute("data-tab");document.querySelectorAll(".tab-content").forEach(m=>m.classList.remove("active"));const d=document.getElementById(`tab-${u}`);d&&d.classList.add("active"),this.audio.playTelemetryBeep(1600,.02)})}),[{id:"btn-adcs-prograde",mode:"PROGRADE"},{id:"btn-adcs-retrograde",mode:"RETROGRADE"},{id:"btn-adcs-normal",mode:"NORMAL"},{id:"btn-adcs-antinormal",mode:"ANTI_NORMAL"},{id:"btn-adcs-earth",mode:"EARTH_POINTING"},{id:"btn-adcs-sun",mode:"SUN_POINTING"},{id:"btn-adcs-target",mode:"TARGET_POINTING"}].forEach(h=>{const u=document.getElementById(h.id);u&&u.addEventListener("click",()=>{document.querySelectorAll(".adcs-btn").forEach(d=>d.classList.remove("active")),u.classList.add("active"),this.adcs.setMode(h.mode),this.audio.playThrusterBurst(.12)})}),a3.forEach(h=>{const u=document.getElementById(`btn-mission-${h.id}`);u&&u.addEventListener("click",()=>{this.loadMission(h)})});const o=document.getElementById("btn-reset-orbit");o&&o.addEventListener("click",()=>{this.currentElements={semiMajorAxis:je.radius+500,eccentricity:.0015,inclination:28.5*Math.PI/180,raan:30*Math.PI/180,argPeriapsis:45*Math.PI/180,trueAnomaly:0},this.orbitCtrl.setElements(this.currentElements),this.orbitRenderer.clearTrail(),this.audio.playAlert()});const l=h=>{const u=document.getElementById("burn-dv-amount"),d=u&&parseFloat(u.value)||.1;this.maneuverPlanner.executeDirectionalBurn(h,d,this.currentElements)};Object.entries({"btn-burn-prograde":"prograde","btn-burn-retrograde":"retrograde","btn-burn-normal":"normal","btn-burn-antinormal":"antinormal","btn-burn-radialin":"radialIn","btn-burn-radialout":"radialOut"}).forEach(([h,u])=>{const d=document.getElementById(h);d&&d.addEventListener("click",()=>l(u))})}setupCameraForMode(e){switch(e){case"CHASE":this.controls.minDistance=2,this.controls.maxDistance=50;break;case"EARTH":this.controls.minDistance=8,this.controls.maxDistance=800,this.camera.position.set(0,30,45),this.controls.target.set(0,0,0);break;case"SOLAR":this.controls.minDistance=50,this.controls.maxDistance=3e4,this.camera.position.set(0,1200,2400),this.controls.target.set(0,0,0);break;case"TARGET":this.controls.minDistance=5,this.controls.maxDistance=2e3;break}}loadMission(e){this.activeMission=e,this.currentElements={...e.initialElements},this.orbitCtrl.setElements(this.currentElements),this.adcs.setMode(e.adcsMode),this.spacecraft.setSolarDeployment(e.solarDeployment),this.cameraMode=e.cameraMode,this.setupCameraForMode(e.cameraMode),this.orbitRenderer.clearTrail(),e.haloPoints?this.orbitRenderer.updateHaloOrbit(e.haloPoints):this.orbitRenderer.updateHaloOrbit([]),this.audio.playAlert(),this.audio.playRadarPing()}updateLagrangeDisplay(){const e=hu(cu);this.orbitRenderer.updateLagrangePoints(e)}}window.addEventListener("DOMContentLoaded",()=>{new s3});
