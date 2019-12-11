(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['singlepost'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"single-sale\">\r\n  <div class=\"single-sale-title\">\r\n    "
    + alias4(((helper = (helper = helpers.saleTitle || (depth0 != null ? depth0.saleTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"saleTitle","hash":{},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":17}}}) : helper)))
    + "\r\n  </div>\r\n\r\n  <script>\r\n  // Initialize and add the map\r\n  function initMap() {\r\n    var "
    + alias4(((helper = (helper = helpers.deletionCode || (depth0 != null ? depth0.deletionCode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deletionCode","hash":{},"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":9,"column":24}}}) : helper)))
    + " = {\r\n      lat: "
    + alias4(((helper = (helper = helpers.latitude || (depth0 != null ? depth0.latitude : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"latitude","hash":{},"data":data,"loc":{"start":{"line":10,"column":11},"end":{"line":10,"column":23}}}) : helper)))
    + ",lng: "
    + alias4(((helper = (helper = helpers.longitude || (depth0 != null ? depth0.longitude : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"longitude","hash":{},"data":data,"loc":{"start":{"line":10,"column":29},"end":{"line":10,"column":42}}}) : helper)))
    + "\r\n    };\r\n    // The map\r\n    var "
    + alias4(((helper = (helper = helpers.uniqueID || (depth0 != null ? depth0.uniqueID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uniqueID","hash":{},"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":13,"column":20}}}) : helper)))
    + " = new google.maps.Map(\r\n      document.getElementById('"
    + alias4(((helper = (helper = helpers.uniqueID || (depth0 != null ? depth0.uniqueID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uniqueID","hash":{},"data":data,"loc":{"start":{"line":14,"column":31},"end":{"line":14,"column":43}}}) : helper)))
    + "'), {\r\n        zoom: 13,\r\n        center: "
    + alias4(((helper = (helper = helpers.deletionCode || (depth0 != null ? depth0.deletionCode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deletionCode","hash":{},"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":16,"column":32}}}) : helper)))
    + "\r\n      });\r\n\r\n    var marker = new google.maps.Marker({\r\n      position: "
    + alias4(((helper = (helper = helpers.deletionCode || (depth0 != null ? depth0.deletionCode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"deletionCode","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":32}}}) : helper)))
    + ",\r\n      map: "
    + alias4(((helper = (helper = helpers.uniqueID || (depth0 != null ? depth0.uniqueID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uniqueID","hash":{},"data":data,"loc":{"start":{"line":21,"column":11},"end":{"line":21,"column":23}}}) : helper)))
    + ",\r\n      title: \"the first marker\"\r\n    });\r\n  }\r\n  </script>\r\n\r\n  <div class=\"single-map-holder\">\r\n    <div id="
    + alias4(((helper = (helper = helpers.uniqueID || (depth0 != null ? depth0.uniqueID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uniqueID","hash":{},"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":24}}}) : helper)))
    + " class = \"google-map\">\r\n    </div>\r\n  </div>\r\n  <div class=\"single-sale-contents\">\r\n    <div class=\"thumbnail-title-holder\">\r\n      <span>"
    + alias4(((helper = (helper = helpers.thumbnailTitle || (depth0 != null ? depth0.thumbnailTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbnailTitle","hash":{},"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":33,"column":30}}}) : helper)))
    + " </span>\r\n      <div class=\"thumbnail-holder\">\r\n        <img src="
    + alias4(((helper = (helper = helpers.thumbnailUrl || (depth0 != null ? depth0.thumbnailUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbnailUrl","hash":{},"data":data,"loc":{"start":{"line":35,"column":17},"end":{"line":35,"column":33}}}) : helper)))
    + " alt="
    + alias4(((helper = (helper = helpers.thumbnailTitle || (depth0 != null ? depth0.thumbnailTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbnailTitle","hash":{},"data":data,"loc":{"start":{"line":35,"column":38},"end":{"line":35,"column":56}}}) : helper)))
    + ">\r\n      </div>\r\n    </div>\r\n    <div class=\"sale-info-container\">\r\n      <div class=\"single-seller\">Seller : "
    + alias4(((helper = (helper = helpers.seller || (depth0 != null ? depth0.seller : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seller","hash":{},"data":data,"loc":{"start":{"line":39,"column":42},"end":{"line":39,"column":52}}}) : helper)))
    + "</div>\r\n      <div class=\"single-average-item-value\">Average value per item : $"
    + alias4(((helper = (helper = helpers.averageItemValue || (depth0 != null ? depth0.averageItemValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"averageItemValue","hash":{},"data":data,"loc":{"start":{"line":40,"column":71},"end":{"line":40,"column":91}}}) : helper)))
    + "</div>\r\n      <div class=\"single-hours\">Hours of operation : "
    + alias4(((helper = (helper = helpers.hours || (depth0 != null ? depth0.hours : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hours","hash":{},"data":data,"loc":{"start":{"line":41,"column":53},"end":{"line":41,"column":62}}}) : helper)))
    + "</div>\r\n      <div class=\"single-estimated-items\">Number of items : "
    + alias4(((helper = (helper = helpers.estimatedItems || (depth0 != null ? depth0.estimatedItems : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"estimatedItems","hash":{},"data":data,"loc":{"start":{"line":42,"column":60},"end":{"line":42,"column":78}}}) : helper)))
    + "</div>\r\n      <div class=\"single-description\">Description : "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":43,"column":52},"end":{"line":43,"column":67}}}) : helper)))
    + "</div>\r\n      <div class=\"single-deletion-code-holder\">\r\n        <input type=\"text\" name=\"deletion-code-input\" id=\"deletion-code\" class=\"deleter\" placeholder=\"enter deletion code here: \">\r\n        <button type=\"button\" name=\"button\" class = \"deleterButton\"> Submit </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();