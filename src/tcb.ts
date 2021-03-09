import tcb from "tcb-js-sdk";

// 将你的环境 Id 填写到此处
export const envId = "tcloud-4gcrbmh247bb85e3";

export const getApp = () => {
  const app = tcb.init({
    env: envId,
  });

  app.auth().anonymousAuthProvider().signIn();

  return app;
};