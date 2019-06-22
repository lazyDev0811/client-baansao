// Import static data
  import ServiceData from '~/data/Services.yml';

export default {
  computed: {
    serviceContent() {
      return ServiceData;
    }
  },
  methods: {
    getServices() {
      return (this.serviceContent.services instanceof Array) ? this.serviceContent.services : [];
    },
    getService(idx) {
      let items = this.serviceContent.services;

      if (items instanceof Array && items.length > idx) {
        return items[idx];
      }

      return null
    }
  }
}
