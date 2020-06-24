import React, { Fragment } from 'react'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { Item } from '../../_internals/item'
import { BlankSeparator } from '../../blankSeparator'
import { Button, ButtonStatus } from '../../button'
import { Disclaimer } from '../../disclaimer'
import { BusIcon } from '../../icon/busIcon'
import { CarpoolIcon } from '../../icon/carpoolIcon'
import { LayoutNormalizer } from '../../layout/layoutNormalizer'
import { BaseSection as Section } from '../../layout/section/baseSection'
import { CardsSection } from '../../layout/section/cardsSection'
import { TabsSection } from '../../layout/section/tabsSection'
import { SearchRecap } from '../../searchRecap'
import { SubHeader } from '../../subHeader'
import { TabStatus } from '../../tabs'
import { TripCard } from '../../tripCard'

const stories = storiesOf('Pages|Search results/With tabs', module)

const createTripCardConfig = ({ highlighted = false } = {}) => ({
  href: '/',
  itinerary: [
    {
      mainLabel: 'Paris',
      subLabel: 'Porte de Vincennes',
      time: '09:00',
      isoDate: '2017-12-11T09:00',
      distanceFromPoint: '1,5km',
    },
    {
      mainLabel: 'Bordeaux',
      subLabel: 'Gare Bordeaux Saint-Jean',
      time: '12:00',
      isoDate: '2017-12-11T12:00',
      distanceFromPoint: '8km',
    },
  ],
  price: '8,00€',
  flags: {
    ladiesOnly: true,
    maxTwo: true,
    autoApproval: true,
  },
  highlighted: highlighted ? 'Closest match' : '',
  metaUrl: 'Meta URL',
})

const defaultSearchRecapConfig = {
  from: 'Bordeaux',
  to: 'Toulouse, centre ville',
  info: "Aujourd'hui 14h30, 2 passagers",
}

const filterButton = (
  <Button status={ButtonStatus.UNSTYLED} href="#">
    Filter
  </Button>
)
const tabPanel = (
  <Fragment>
    <Item
      leftBody="930 trajets allant de Bordeaux à Toulouse publiés"
      leftBodyAnnotation="101 trajets complets"
      rightAddon={filterButton}
    />
    <BlankSeparator />
    <ul>
      <TripCard {...createTripCardConfig()} />
      <TripCard {...createTripCardConfig()} />
    </ul>
    <Disclaimer deprecatedHelpUrl="#">
      Recommandation basée sur vos critères de recherche.
    </Disclaimer>
    <ul>
      <TripCard {...createTripCardConfig()} />
      <TripCard {...createTripCardConfig()} />
      <TripCard {...createTripCardConfig()} />
      <TripCard {...createTripCardConfig()} />
    </ul>
    <SubHeader>Tomorrow</SubHeader>
    <ul>
      <TripCard {...createTripCardConfig()} />
      <TripCard {...createTripCardConfig()} />
      <TripCard {...createTripCardConfig()} />
      <TripCard {...createTripCardConfig()} />
    </ul>
  </Fragment>
)

const defaultTabsConfig = {
  activeTabId: 'tab1',
  status: TabStatus.FIXED,
  tabs: [
    {
      id: 'tab1',
      label: 'All',
      panelContent: tabPanel,
    },
    {
      id: 'tab2',
      label: 'Car',
      panelContent: tabPanel,
      icon: <CarpoolIcon size="32" />,
    },
    {
      id: 'tab3',
      label: 'Bus',
      panelContent: tabPanel,
      icon: <BusIcon size="32" />,
    },
  ],
}

stories.add('Default', () => (
  <Fragment>
    <LayoutNormalizer useLegacyNormalization={boolean('Use legacy normalization', false)} />

    <Section>
      <SearchRecap {...defaultSearchRecapConfig} />
    </Section>
    <CardsSection>
      <TripCard {...createTripCardConfig()} />
      <TripCard {...createTripCardConfig()} />
    </CardsSection>
    <TabsSection tabsProps={defaultTabsConfig} />
  </Fragment>
))
