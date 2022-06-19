import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import { AwesomeButton } from "react-awesome-button";
import Background from "./Background";
import Content from "./Content";
import Lettering from "./Lettering";
import Section from "./Section";

export const Third = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#ff6f5e">
      <Background src="https://caferati.me/images/series/bojack-0.png" />
      <Content
        main={
          <Lettering
            title="PAGE-THREE"
            text={["This is a screen with preloaded background image."]}
          />
        }
        action={
          <div className="button">
            <AwesomeButton
              size="large"
              onPress={() => {
                fullpage.navigate("/page-two");
              }}
            >
              Goto the prev page
            </AwesomeButton>
          </div>
        }
      />
    </Section>
  );
});
