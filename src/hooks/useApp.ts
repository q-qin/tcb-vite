import { useStore } from "./useStore";
import { useRoute, useRouter } from "vue-router";

export const useApp = () => {
  const store = useStore();
  const route = useRoute();
  const router = useRouter();

  return { store, route, router };
};

export default useApp;