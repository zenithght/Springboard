function d(a,b){function c(){}c.prototype=b.prototype;a.f=b.prototype;a.prototype=new c};function e(){this._data={}};function f(){this.a={}}f.prototype.d=function(a){if(this.a[a]){var b=[],c;if(arguments.length>1)for(c=1;c<arguments.length;c++)b.push(arguments[c]);for(c=0;c<this.a[a].length;c++)this.a[a][c][1].apply(this.a[a][c][0],b)}};function g(a){this.a={};this.c=a}d(g,f);g.prototype.start=function(){this.d("notification/START")};function h(a,b,c){this.b=b;this.c=a;this.e=c;a=this.b;b=this.start;if(a.a["notification/START"])a.a["notification/START"].push([this,b]);else a.a["notification/START"]=[[this,b]]}h.prototype.start=function(){};function i(){$(document).ready(function(){var a,b;b=new e;a=new g(b);new h(b,a,{});switch("command/START"){case "command/START":a.start()}})}var j="namespace.project.App".split("."),k=this;!(j[0]in k)&&k.execScript&&k.execScript("var "+j[0]);for(var l;j.length&&(l=j.shift());)if(!j.length&&i!==undefined)k[l]=i;else k=k[l]?k[l]:k[l]={};
