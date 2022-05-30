import { Stack } from "monocdk";
import { Template } from "monocdk/assertions";
import { MonitoringFacade } from "../../lib";

describe("test of defaults", () => {
  const stack = new Stack();
  new MonitoringFacade(stack, "Test");
  const result = Template.fromStack(stack);

  test("only default dashboard gets created by default", () => {
    result.resourceCountIs("AWS::CloudWatch::Dashboard", 1);

    result.hasResourceProperties("AWS::CloudWatch::Dashboard", {
      DashboardName: "Test",
    });
  });
});