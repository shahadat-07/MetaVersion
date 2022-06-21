import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import PageLayout from "./PageLayout";



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
