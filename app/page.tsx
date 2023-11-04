import { Bucket } from "sst/node/bucket";

export default function Home() {
  return (
    <main>
      <p>Bucket name: {Bucket.bucket.bucketName}</p>
      <p>NEXT_PUBLIC_BUCKET_NAME: {process.env.NEXT_PUBLIC_BUCKET_NAME}</p>
    </main>
  );
}
