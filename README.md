# bitinflow UI Kit

## Goal

The main goal of this package is to provide a clean & simple usage of common components in bitinflow brand.  

## Example Skeleton

This example skeleton provides the default ui experience for dashboards, featuring first-, second- &
third-level menus.

```html
<template>
  <FloatingBanner></FloatingBanner>
  <FirstLevelMenu>
    <template v-slot:top>
      <FirstLevelLink icon="fa-home">Home</FirstLevelLink>
      <FirstLevelLink icon="fa-location-dot">Pull Zones</FirstLevelLink>
      <FirstLevelLink icon="fa-bucket">Buckets</FirstLevelLink>
      <FirstLevelLink icon="fa-meteor">Spaces</FirstLevelLink>
      <FirstLevelLink icon="fa-globe">Domains</FirstLevelLink>
      <FirstLevelLink icon="fa-list">Zones</FirstLevelLink>
    </template>

    <template v-slot:bottom>
      <FirstLevelLink icon="fa-wallet">Billing</FirstLevelLink>
      <FirstLevelLink icon="fa-fingerprint">Account</FirstLevelLink>
      <FirstLevelLink icon="fa-arrow-right-from-bracket">Logout</FirstLevelLink>
    </template>

    <SecondLevelMenu>
      <template v-slot:title>Domains</template>

      <SecondLevelLink icon="fa-globe">example.com</SecondLevelLink>
      <SecondLevelLink icon="fa-globe">example.com</SecondLevelLink>
      <SecondLevelLink icon="fa-globe">example.com</SecondLevelLink>
      <SecondLevelLink icon="fa-globe">example.com</SecondLevelLink>
    </SecondLevelMenu>

    <FlexAuto>
      <ScreenScrollContainer>
        <ThirdLevelMenu>
          <template v-slot:title>Test</template>
        </ThirdLevelMenu>
        <Container>
          <HeroCard>
            <div class="text-3xl">Yeet!</div>
          </HeroCard>
          <Card>
            <CardHeader>Test</CardHeader>
            <CardBody>Test</CardBody>
          </Card>
          <Card>
            <CardHeader>Test</CardHeader>
            <CardBody>Test</CardBody>
          </Card>
        </Container>
      </ScreenScrollContainer>
    </FlexAuto>
  </FirstLevelMenu>
</template>

<script>
import Card from "@bitinflow/ui/components/Card";
import CardHeader from "@bitinflow/ui/components/CardHeader";
import CardBody from "@bitinflow/ui/components/CardBody";
import SecondLevelMenu from "@bitinflow/ui/components/SecondLevelMenu";
import FloatingBanner from "@bitinflow/ui/components/FloatingBanner";
import FirstLevelMenu from "@bitinflow/ui/components/FirstLevelMenu";
import ScreenScrollContainer from "@bitinflow/ui/components/ScreenScrollContainer";

export default {
  components: {FloatingBanner, ScreenScrollContainer, FirstLevelMenu, SecondLevelMenu, CardBody, CardHeader, Card},
}
</script>
```