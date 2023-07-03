export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
  }),
  getters: {},
  actions: {
    logIn() {
      this.isLoggedIn = true;
      useRouter().push("/admin");
    },
  },
});
