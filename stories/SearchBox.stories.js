import { storiesOf } from '@storybook/vue';
import { previewWrapper } from './utils';

storiesOf('SearchBox', module)
  .addDecorator(previewWrapper())
  .add('default', () => ({
    template: '<ais-search-box></ais-search-box>',
  }))
  .add('with loading indicator', () => ({
    template: '<ais-search-box showLoadingIndicator></ais-search-box>',
  }))
  .add('with autofocus', () => ({
    template: '<ais-search-box autofocus></ais-search-box>',
  }))
  .add('with custom rendering', () => ({
    template: `<ais-search-box autofocus>
      <input
        placeholder="Custom SearchBox"
        slot-scope="{ refine }"
        @input="refine($event.currentTarget.value)"
      >
    </ais-search-box>`,
  }))
  .add('with a Panel', () => ({
    template: `
      <ais-panel>
        <template slot="header">SearchBox</template>
        <ais-search-box />
        <template slot="footer">Footer</template>
      </ais-panel>
    `,
  }));
