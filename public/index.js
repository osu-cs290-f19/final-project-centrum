console.log("the script has loaded");

var test = JSON.parse(JSON.stringify("/sales.json"));
console.log(test[0]);



function insertNewSinglePost(saleTitle, seller, averageItemValue, hours, estimatedItems, description, deletionCode, featured, thumbnailUrl, thumbnailTitle) {

  var saleContext = {
    saleTitle: saleTitle,
    seller: seller,
    averageItemValue: averageItemValue,
    hours: hours,
    estimatedItems: estimatedItems,
    description: description,
    deletionCode: deletionCode,
    featured: featured,
    thumbnailUrl: thumbnailUrl,
    thumbnailTitle: thumbnailTitle
  };

  var saleHTML = Handlebars.templates.singlepost(saleContext);
  var saleHolder = document.getElementById('sale-section');
  saleHolder.insertAdjacentHTML('beforeend', saleHTML);
}



var deletionButton = document.getElementById('delete-me-button');
if (deletionButton) {
  deletionButton.addEventListener('click', handlePostDeletion);
}

function handlePostDeletion() {
  var deleteInput = document.getElementById("deletion-code").value.trim();
  var i;
  for (i = 0; i < test.length; i++) {
    if (test[i].deletionCode === deleteInput) {
      test.splice(i, 1);
    }
  }
}



var createSaleButton = document.getElementById('sale-create-button');
if (createSaleButton) {
  createSaleButton.addEventListener('click', handleSaleCreateClick);
}

function handleSaleCreateClick() {
  var titleInput = document.getElementById("sale-title-input-field").value.trim();
  var sellerInput = document.getElementById("seller-input-field").value.trim();
  var valueInput = document.getElementById("avg-item-val-input-field").value.trim();
  var hoursInput = document.getElementById("hours-input-field").value.trim();
  var countInput = document.getElementById("item-count-input-field").value.trim();
  var descriptionInput = document.getElementById("description-input-field").value.trim();
  var deleteInput = document.getElementById("delete-code-input-field").value.trim();
  var urlInput = document.getElementById("thumbnail-url-input-field").value.trim();
  var thumbTitleInput = document.getElementById("thumbnail-title-input-field").value.trim();
  var latInput = document.getElementById("latitude-input-field").value.trim();
  var longInput = document.getElementById("longitude-input-field").value.trim();
  var idInput = document.getElementById("unique-id-input-field").value.trim();

  if (!titleInput || !sellerInput || !valueInput || !hoursInput || !countInput || !descriptionInput || !deleteInput || !urlInput || !thumbTitleInput || !latInput || !longInput || !idInput) {
    alert("You must provide values for all fields!");
  } else {
    console.log("all fields good");
    var injectorString = ",{" + "\"saleTitle\":" + "\"" + titleInput + "\"" + "," + "\"seller\":" + "\"" + sellerInput + "\"" + ","
    "\"averageItemValue\":" + "\"" + valueInput + "\"" + ","
    "\"hours\":" + "\"" + hoursInput + "\"" + ","
    "\"estimatedItems\":" + "\"" + countInput + "\"" + ","
    "\"description\":" + "\"" + descriptionInput + "\"" + ","
    "\"deletionCode\":" + "\"" + deleteInput + "\"" + ","
    "\"featured\":" + "false" + ","
    "\"thumbnailUrl\":" + "\"" + urlInput + "\"" + ","
    "\"thumbnailTitle\":" + "\"" + thumbTitleInput + "\"" + "," + "\"latitude\":" + "\"" + latInput + "\"" + "," + "\"longitude\":" + "\"" + longInput + "\"" + "," + "\"uniqueID\":" + "\"" + idInput + "\"" + "}";
    console.log(injectorString);
    clearInputs();
  };
}

function clearInputs() {
  document.getElementById("sale-title-input-field").value = "";
  document.getElementById("seller-input-field").value = "";
  document.getElementById("avg-item-val-input-field").value = "";
  document.getElementById("hours-input-field").value = "";
  document.getElementById("item-count-input-field").value = "";
  document.getElementById("description-input-field").value = "";
  document.getElementById("delete-code-input-field").value = "";
  document.getElementById("thumbnail-url-input-field").value = "";
  document.getElementById("thumbnail-title-input-field").value = "";
  document.getElementById("latitude-input-field").value = "";
  document.getElementById("longitude-input-field").value = "";
  document.getElementById("unique-id-input-field").value = "";
}
