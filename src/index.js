window.CESIUM_BASE_URL = '/';

var Cesium = require("cesium/Cesium");
require("cesium/Widgets/widgets.css")

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMjVmODJlOS00YmNlLTRmYTktODNhZi00YWQ4ZDY2MWI2YWIiLCJpZCI6OTQxNjYsImlhdCI6MTY1Mjc5MjY0MX0.2tWq-hfcJqMUDDOFuRqJlicotRW-Jp6gfGyLWzmcurU';

var viewer = new Cesium.Viewer("cesiumContainer",{

});