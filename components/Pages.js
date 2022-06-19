import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import PageLayout from "./PageLayout";

export const Home = withNavigationContext(({ fullpage }) => {
  return (
    <PageLayout className="bg-blue-900">
      <h1 className="text-5xl text-white font-bold">Hello Bangladesh</h1>
    </PageLayout>
  );
});

export const About = withNavigationContext(({ fullpage }) => {
  return (
    <PageLayout className="bg-blue-900">
      <h1 className="text-5xl text-white font-bold">Hello About</h1>
    </PageLayout>
  );
});

export const MetaVision = withNavigationContext(({ fullpage }) => {
  return (
    <PageLayout className="bg-blue-900">
      <h1 className="text-5xl text-white font-bold">Hello Meta Vision</h1>
    </PageLayout>
  );
});

export const EcoSystem = withNavigationContext(({ fullpage }) => {
  return (
    <PageLayout className="bg-blue-900">
      <h1 className="text-5xl text-white font-bold">Hello EcoSystem</h1>
    </PageLayout>
  );
});

export const RoadMap = withNavigationContext(({ fullpage }) => {
  return (
    <PageLayout className="bg-blue-900">
      <h1 className="text-5xl text-white font-bold">Hello RoadMap</h1>
    </PageLayout>
  );
});

export const OurTeam = withNavigationContext(({ fullpage }) => {
  return (
    <PageLayout className="bg-blue-900">
      <h1 className="text-5xl text-white font-bold">Hello OurTeam</h1>
    </PageLayout>
  );
});

export const PersonalAccount = withNavigationContext(({ fullpage }) => {
  return (
    <PageLayout className="bg-blue-900">
      <h1 className="text-5xl text-white font-bold">Hello PersonalAccount</h1>
    </PageLayout>
  );
});
