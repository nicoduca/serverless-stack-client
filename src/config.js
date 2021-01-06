const config = {
    s3: {
      REGION: "us-east-2",
      BUCKET: "duca-notes-app-uploads",
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://w7451683p4.execute-api.us-east-1.amazonaws.com/prod/",
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_os1d7bCaY",
      APP_CLIENT_ID: "s8naj5qj92ntdbkeujklhccbf",
      IDENTITY_POOL_ID: "us-east-2:7a8263e5-c0a6-472b-a48b-dc2adedf9f3a",
    },
  };
  
  export default config;