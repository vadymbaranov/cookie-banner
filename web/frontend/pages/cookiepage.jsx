import { Card, Page, Layout, TextContainer, Heading } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { MainCookiePage } from "../components/MainCookiePage";

export default function CookiePage() {
  return (
    <Page>
      <TitleBar
        title="Cookie banner"
        primaryAction={{
          content: "Primary action",
          onAction: () => console.log("Primary action"),
        }}
        secondaryActions={[
          {
            content: "Secondary action",
            onAction: () => console.log("Secondary action"),
          },
        ]}
      />
      <Layout>
        <Layout.Section>
            <MainCookiePage />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
