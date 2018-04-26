// Add listener for when a HubSpot CTA has been loaded.
document.addEventListener('HubSpotCTALoaded', function(e) {
  console.log('CTA loaded', e.detail.cta, e.detail.ctaID);
});

// Add listener for when a HubSpot form has been loaded.
document.addEventListener('HubSpotFormLoaded', function(e) {
  console.log('Form loaded', e.detail.form, e.detail.formID);
});
