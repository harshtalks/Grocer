declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_KEY: string;
      NODE_ENV: "development" | "production";
      PORT?: string;
      PWD: string;
    }
  }
}
