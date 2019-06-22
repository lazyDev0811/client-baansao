import HeroData from '~/data/Hero.yml';

export default {
  computed: {
    heroContent() {
      // TODO: Enforce pageData structure
      let data = this.pageData.heros || HeroData;

      return data;
    }
  },
  methods: {
    getPageSections() {
      return (this.heroContent instanceof Array) ? this.heroContent : [];
    },
    getHero(idx) {
      let items = this.heroContent;

      if (items instanceof Array && items.length > idx) {
        console.log('hero found');
        console.log(items[idx]);
        return items[idx];
      }

      return null
    },
    getHeroById(itemId) {
      let items = this.heroContent.filter(item => {
        return item.id === itemId;
      });

      if (items instanceof Array && items.length > 0) {
        return items[0];
      }

      return null
    },
  }
}
