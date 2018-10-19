import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text, number } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Wizard, Container, Video, Gif, FormGroup, Input, Social, Code } from '../../../components';
import Readme from '../../../components/Wizard/README.md';
import def from '../../mock/components/codes/wizard';

setAddon(JSXAddon);

const steps = [
  {
    name: 'Step 1',
    component: (
      <Container>
        <Video source="https://youtu.be/dCrLwWdju68" />
      </Container>
    )
  },
  {
    name: 'Step 2',
    component: (
      <Container>
        <Gif autoplay image="images/gif/write.gif" />
      </Container>
    )
  },
  {
    name: 'Step 3',
    component: (
      <form>
        <FormGroup>
          <Input label="Name" labelColon />
        </FormGroup>
        <FormGroup>
          <Input label="Email" labelColon type="email" />
        </FormGroup>
        <FormGroup>
          <Input label="Address" labelColon type="textarea" />
        </FormGroup>
        <Social url="https://front10.com" type="twitter" />
        <Social url="https://front10.com" type="linkedin" />
        <Social url="https://front10.com" type="google" />
        <Social url="https://front10.com" type="pinterest" />
      </form>
    )
  }
];

const stories = storiesOf('Components/Wizard', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Wizard"
        description="Easy way to make a wizard on your website. you can guide your users step by step."
      />
      <Wizard
        showHeader={boolean('Show header', true)}
        showHeaderBorder={boolean('Show header border', true)}
        showNavigation={boolean('Show navigation', true)}
        prevBtnOnLastStep={boolean('Prev on last step', true)}
        preventEnterSubmission={boolean('Prevent enter submission', true)}
        startAtStep={number('Start at step', 0)}
        backButtonCls={text('Back button class', 'btn btn-primary pull-left')}
        backButtonText={text('Back button text', 'Back')}
        nextButtonCls={text('Next button class', 'btn btn-primary pull-right')}
        nextButtonText={text('Next button text', 'Next')}
        nextTextOnFinalActionStep={text('Next text on final action step', 'Next')}
        contentAlign={select(
          'Content align',
          { left: 'left', center: 'center', right: 'right' },
          'left'
        )}
        steps={steps}
      />
      <div className="mt-4">
        <Code
          code={def}
          languageCode="jsx"
          readOnly
          collapsible
          collapsed
          showDeleteButton={false}
        />
      </div>
    </ThemeSelector>
  )),
  jsxConfig
);
