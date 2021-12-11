const home = {
  template: '<iframe id="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.9744824597624!2d11.12441931557788!3d46.071549979112696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478276ca86c49851%3A0xcd99fac5fcd9a3b6!2sMuseo%20Castello%20del%20Buonconsiglio!5e0!3m2!1sit!2sit!4v1639182660712!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
  methods : {
    refreshLayout() {
      document.querySelector('#addEmployee').className = 'btn btn-light px-2 py-0 d-none';
    }
  },
  mounted: function () {
    this.refreshLayout();
  }
}