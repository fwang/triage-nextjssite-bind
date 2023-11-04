import { SSTConfig } from "sst";
import { Bucket, NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "mars-mission",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const bucket = new Bucket(stack, "bucket");
      const site = new NextjsSite(stack, "site", {
        logging: "per-route",
        bind: [bucket],
        environment: {
          NEXT_PUBLIC_BUCKET_NAME: bucket.bucketName,
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
