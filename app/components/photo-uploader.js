import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  // restrict image upload only
  accept: "image/*",
  // thumbnail property default value
  thumbnail: null,
  // thumbnail property default value
  thumbnailName: null,
  // set default image path on component init
  setPhoto: function () {
    // get thumbnail reference and default thumbnail path
    let data = this.getProperties('thumbnail', 'default');
    // if thumbnail is available
    if (data.default) {
      // set thumbnail with default path
      this.set('thumbnail', data.default);
    }
  }.on('init'),
  // on file-upload value change
  filesDidChange: (function () {
    // get component reference
    let component = this,
    // get thumbnail reference and default thumbnail path
      data = this.getProperties('thumbnail', 'default', 'files');
    // get uploaded images list
    // if there are uploaded images
    if (!Ember.isEmpty(data.files) && data.files.length === 1 && data.files[0].type.indexOf('image/') > -1) {
      // get uploaded image base64 binary string
      this.photoToBinary(data.files[0], (function () {
        return function (e) {
          // set thumbnail with uploaded image and thumbnail name
          component.setProperties({
            'thumbnail': e.target.result,
            'thumbnailName': data.files[0].name
          });
        };
      })(data.files[0]));
    } else {
      component.setProperties([
        {'thumbnail': component.default},
        {'thumbnailName': null}
      ]);
      this.notifier.error("Invalid photo.");
      //this.set('files', []);
    }
    console.log(data.files);
  }).observes('files'),
  // this function responsible convert form data file to base64 string
  photoToBinary(photo, onLoad) {
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = onLoad;
    // Read in the image file as a data URL.
    reader.readAsDataURL(photo);
  }
});
