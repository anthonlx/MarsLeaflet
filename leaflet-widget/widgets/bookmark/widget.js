/* 2017-12-12 13:02:28 | 版权所有 合肥火星科技有限公司 http://www.marsgis.cn  【联系我们QQ：516584683】 */
L.widget.bindClass(L.widget.BaseWidget.extend({map:null,options:{view:{type:"window",url:"view.html",windowOptions:{width:300,height:450}}},viewWindow:null,winCreateOK:function(t,i){this.viewWindow=i},activate:function(){},disable:function(){},showExtent:function(t){var i=t.split(",");this.map.setView(L.latLng(i[0],i[1]),i[2])},getDefaultExtent:function(){var t=this.map.gisdata.config.center,i=this.map.gisdata.config.zoom,n=t[0]+","+t[1]+","+i;return n},getThisExtent:function(){var t=this.map.getCenter(),i=this.map.getZoom(),n=t.lat+","+t.lng+","+i;return n}}));