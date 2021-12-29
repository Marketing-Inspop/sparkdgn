import React from 'react';
import './App.scss';

import { SprkButton, SprkSpinner, SprkAlert, SprkLink, SprkIcon, SprkCard, SprkStackItem, SprkStack, SprkText,SprkToggle, SprkHeading } from '@sparkdesignsystem/spark-react';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isAppLoading: false};
  }


  render() {
    return (
      <>
      <ul
        className="
          sbdocs-gallery-container
          sprk-o-Stack
          sprk-o-Stack--split@xs"
      />
      <SprkButton
        isSpinning={this.state.isAppLoading}
        onClick={() => { this.setState({ isAppLoading: true }) }}
      >
        {this.state.isAppLoading ? <SprkSpinner /> :'Start Spinning'}
      </SprkButton>

      <SprkIcon iconName="access" additionalClasses="sprk-c-Icon--xl" />
      <SprkAlert
  message="This is important information."
  variant="info"
  isVisible={true}
  idString="alert-info"
  analyticsString="alert-info-analytics"
/>

<SprkLink
  analyticsString="link-icon"
  href="#nogo"
  variant="hasIcon"
  idString="link-3"
>
  <SprkIcon
    additionalClasses="
      sprk-c-Icon--xl
      sprk-b-Link__icon
      sprk-c-Icon--filled-current-color
    "
    iconName="arrow-left"
  />
  Back
</SprkLink>




      <SprkCard idString="highlighted-header" isStandout>
  <SprkStack
    additionalClasses="sprk-o-Stack__item sprk-c-Card__header"
    itemSpacing="medium"
  >
    <SprkStackItem>
      <SprkHeading
        element="h3"
        variant="displaySeven"
        additionalClasses="sprk-c-Card__highlighted-heading"
      >
        Description
      </SprkHeading>
    </SprkStackItem>

    <SprkStackItem>
      <SprkHeading
        element="h4"
        variant="displayFive"
        additionalClasses="sprk-c-Card__highlighted-heading"
      >
        Card Title
      </SprkHeading>
    </SprkStackItem>
  </SprkStack>

  <SprkStack
    additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
    itemSpacing="medium"
  >
    <SprkStackItem>
      <SprkText variant="bodyTwo">
        Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi perpetua
        an pri, errem commune mea at, mei prima tantas signiferumque at.
        Numquam.
      </SprkText>
    </SprkStackItem>
  </SprkStack>
</SprkCard>

<SprkToggle triggerText="My Disclaimer" analyticsString="toggle-1">
  <p className="sprk-b-TypeBodyFour">
    This is an example of disclaimer content. The
    aria-expanded=&quot;true&quot; attribute will be viewable in the DOM on
    the toggle link when this content is shown. When this content is hidden
    the aria-expanded attribute will have the value of false. This helps
    accessibility devices in understanding that the link is a control for
    expandable content.
  </p>
</SprkToggle>
      </>
    );
  }
}
export default App;